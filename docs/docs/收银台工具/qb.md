# 收银台工具

Nexa提供标准收银台工具给用户，显著降低用户的开发成本和时间投入。商户无需从零开始设计和开发支付系统，只需通过简单的API接口即可快速接入Nexa的标准收银台，并可以配置商户自定义的品牌标识。

## 收银台操作手册

1. 用户通过商户端选择加密支付后，将进入收银台页面。页面显示以下信息：

   1. 应付金额
   2. 订单详情（含订单号、金额及商品内容）
   3. 支持的加密货币列表：用户可任选一种加密货币支付，系统已按实时汇率自动换算对应金额
   4. 订单有效时间：支付需在订单有效期内完成。

   ![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FS5lymD61iFLbX4HKwGor%252Fimage.png%3Falt%3Dmedia%26token%3Dca44f5d9-b20a-4216-8de1-c5862716b929&width=768&dpr=4&quality=100&sign=a661f801&sv=2)

   ![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FnsmgWbyAWrGVOtAErt8I%252Fimage.png%3Falt%3Dmedia%26token%3D6543c305-3a4c-4756-921f-e4e86a93b24a&width=768&dpr=4&quality=100&sign=5bacc661&sv=2)

2. 支付网络选择：选定加密货币后，用户需进一步选择交易使用的支付网络。

   ![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FkP8cNbuf5W9E3fW2DoPF%252Fimage.png%3Falt%3Dmedia%26token%3Dd9a744f4-508e-4f7d-819d-976a18ded63b&width=768&dpr=4&quality=100&sign=73f29647&sv=2)

3. 支付地址展示：选择完成后，系统将生成支付地址和二维码，用户可复制地址或扫码完成支付。

   ![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FqbmfcKYNVFc1I8YHXwQE%252Fimage.png%3Falt%3Dmedia%26token%3De5ef67c2-ac6a-4c7b-bd0c-b486e4bfdef1&width=768&dpr=4&quality=100&sign=84e49553&sv=2)

4. 支付状态：

   1. 若用户成功完成支付，页面将显示"支付成功"状态。
   2. 若用户支付金额不足：订单会标记为"部分支付"状态。根据商户设置，如需补款，Nexa将自动发送补款通知邮件至支付用户的邮箱引导用户完成差额支付。
   3. 若用户支付金额超出应付金额：订单标记为"超额支付"状态。根据商户设置，如需退回差额，Nexa将自动发送差额退款通知邮件至支付用户的邮箱引导用户完成退款申请。
   4. 若用户未在订单有效期内完成支付，订单将自动失效。

   ![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FzqZ1jpUnKgjYh4Q2QYqP%252Fimage.png%3Falt%3Dmedia%26token%3Dad372702-3d59-494b-abb5-92ad51b8ef32&width=768&dpr=4&quality=100&sign=839c3db7&sv=2)
