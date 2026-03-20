#!/usr/bin/env node
/**
 * 构建后脚本：将 GitBook 默认 favicon 替换为 images/logo
 * 注意：logo.ico 实际是 PNG 格式，需同时提供 .png 以正确显示
 */

const fs = require('fs');
const path = require('path');

const bookDir = path.join(__dirname, '../_book');
const imagesDir = path.join(__dirname, '../images');

// 1. 复制 logo.ico 为 logo.png（内容实为 PNG，便于浏览器正确识别）
if (fs.existsSync(imagesDir + '/logo.ico')) {
  const dest = path.join(bookDir, 'images', 'logo.png');
  fs.copyFileSync(imagesDir + '/logo.ico', dest);
  console.log('Copied logo.png');
}

// 2. 复制到 _book 根目录（部分浏览器会请求 /favicon.ico）
if (fs.existsSync(imagesDir + '/logo.ico')) {
  fs.copyFileSync(imagesDir + '/logo.ico', path.join(bookDir, 'favicon.ico'));
  console.log('Copied favicon.ico to root');
}

function fixFaviconInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 替换 GitBook 默认 favicon 为我们的 logo.png（使用正确的 PNG 类型）
  let modified = content
    .replace(
      /<link rel="shortcut icon" href=["']([^"']*?)gitbook\/images\/favicon\.ico["'] type="image\/x-icon"\s*\/?>/g,
      (m, p) => `<link rel="icon" type="image/png" href="${p}images/logo.png">`
    )
    .replace(
      /href=["']([^"']*?)gitbook\/images\/apple-touch-icon-precomposed-152\.png["']/g,
      (m, p) => `href="${p}images/logo.png"`
    )
    // 替换 favicon 插件添加的 logo.ico 链接为 logo.png + 正确类型
    .replace(
      /<link rel="shortcut icon" href=['"]([^'"]*?)images\/logo\.ico['"] type="image\/x-icon"\s*\/?>/g,
      (m, p) => `<link rel="icon" type="image/png" href="${p}images/logo.png">`
    )
    .replace(
      /<link rel="bookmark" href=['"]([^'"]*?)images\/logo\.ico['"] type="image\/x-icon"\s*\/?>/g,
      (m, p) => `<link rel="bookmark" href="${p}images/logo.png" type="image/png">`
    )
    .replace(
      /<link rel="apple-touch-icon" href=['"]([^'"]*?)images\/logo\.ico['"]\s*\/?>/g,
      (m, p) => `<link rel="apple-touch-icon" href="${p}images/logo.png">`
    );

  if (modified !== content) {
    fs.writeFileSync(filePath, modified);
    console.log('Fixed:', path.relative(bookDir, filePath));
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) {
    console.error('Error: _book not found. Run "gitbook build" first.');
    process.exit(1);
  }
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.html')) {
      fixFaviconInFile(fullPath);
    }
  }
}

walkDir(bookDir);
console.log('Favicon fix completed.');
