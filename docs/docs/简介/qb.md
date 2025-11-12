# 简介

Nexa加密收单支付工具为企业提供一站式加密支付解决方案，商户只需通过简单的API接口即可快速接入。我们提供已设计好的收银台供直接使用，商户也可根据需求自行设计界面。当商户发起付款请求时，系统将生成专属收款地址，资金会进入Nexa钱包并通过自动结算机制快速转入商户指定钱包。商户可通过Nexa客户端随时查看订单状态、结算数据及其他交易详情，轻松管理支付流程。我们支持多链多币种支付，确保资金流转高效灵活，为客户提供安全便捷的加密货币支付体验。

## 支付规则

### 目前支持商戶訂單的法幣單位包括：

* USD
* CNY
* HKD
* TWD
* AED
* SGD
* PHP
* MYR
* BRL
* GBP
* EUR
* AUD
* BGN
* DKK
* CAD
* SEK
* CHF

### 目前支持用户用于支付订单幣種及鏈

| 幣種            | 鏈                                                           | 最小支付金额 | 支付精度 |
| --------------- | ------------------------------------------------------------ | ------------ | -------- |
| <p>USDT<br></p> | <ul><li>TRC20</li><li>ERC20</li><li>Avalance-C</li><li>Arbitrum One</li><li>Solana</li><li>BEP20</li><li>Polygon</li></ul> | 0.0005       | 2        |
| USDC            | <ul><li>ERC20</li></ul><ul><li>Avalance-C</li><li>Arbitrum One</li><li>Solana</li><li>Optimism</li><li>Base</li><li>BEP20</li><li>Polygon</li></ul> | 0.0005       | 2        |
| BNB             | <ul><li>BNB-BSC</li></ul>                                    | 0.0005       | 6        |
| TRX             | <ul><li>TRON (TRX)</li></ul>                                 | 0.0005       | 6        |
| ETH             | <ul><li>Ethereum</li></ul><ul><li>Arbitrum One</li><li>Base</li><li>Optimism</li></ul> | 0.0005       | 6        |
| SOL             | <ul><li>Solana</li></ul>                                     | 0.0005       | 6        |
| BTC             | <ul><li>BTC</li></ul>                                        | 0.0005       | 8        |

**<br>*<br>*以上为标准产品规格，如用户有其他支付货币的需要，可**[**联系我们**](https://www.Nexa.com/zh/appointment/)**查询。**

## 结算规则

* 结算时间：每10分钟自动结算一次（例如：12:00、12:10、12:20）
* 结算货币：USDT-TRC20，USDT-BEP20
* 最低结算金额：USDT 500（如不足500将延至下一个结算周期进行计算）
* 结算金额：金额会在扣除交易手续费后退回
* 结算地址：商户创建API时选择的Nexa钱包地址
*   汇率结算：按照CoinMarketCap的即时汇率计算，并以订单创建时的汇率为准

    <br>
