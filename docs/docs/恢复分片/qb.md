# 恢復分片

恢复分片功能主要是针对**多签钱包**，当有创建人失去分片时，可透过此功能恢复分片。恢复过程需要所有钱包创建人在线参与，并且需要导入助记词，恢复成功后所有创建人的分片将会被重置。

**恢复分片时用户需要注意以下事项：**

- 不支持添加TON、SUI链的钱包：只有一套助记词，可以进行重置和恢复操作
- 线上支持添加TON、SUI链的钱包：需使用有该钱包分片的设备进行重置操作，重置时会为您生成两套助记词，后续可正常使用恢复功能
- 新用户创建钱包时直接有两套助记词，可正常使用重置及恢复分片功能。

## 操作过程

先透过以下入口进入钱包信息页面

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FBqkc1EG92w6jFzK0e9H7%252Fimage.png%3Falt%3Dmedia%26token%3D85b01f37-f1cd-4fe3-8cc3-fcae0abca159&width=768&dpr=4&quality=100&sign=bea7c085&sv=2)

于分片管理下点击恢复

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FstaUGb7AoO4YXHXc5RW1%252Fimage.png%3Falt%3Dmedia%26token%3D864da79f-2147-48e3-a55d-507405118a7f&width=768&dpr=4&quality=100&sign=86c43ac3&sv=2)

点击后会有个恢复分片的视窗，然后需要等待其他成员在线 这里需要注意，其他成员需要把页面**切换至当前团队**才会被判定为在线。

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252F9UdjtIgk0sMQif287BQy%252Fimage.png%3Falt%3Dmedia%26token%3D312909ba-1e32-4cd7-9fcb-3b477c7c55d4&width=768&dpr=4&quality=100&sign=2f485c2d&sv=2)

被邀请成员可于钱包通知内查看邀请

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252F5mGPv4Utp8X3vcpnZOTd%252Fimage.png%3Falt%3Dmedia%26token%3D9ceb5c79-7050-47f0-9416-a09c1ef371ad&width=768&dpr=4&quality=100&sign=7567cc79&sv=2)

当所有成员都同意加入后，发起人可点击开始

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FPUDdrsDMAUxFzyY7cTDc%252Fimage.png%3Falt%3Dmedia%26token%3De5856bdb-a365-4289-bb30-1048bc362835&width=768&dpr=4&quality=100&sign=d3248bb2&sv=2)

开始后需要输入助记词，新用户创建多签钱包时会拥有两组助记词，需要先输入第一组secp256k1助记词 如旧用户的钱包为不支持添加TON、SUI链的钱包，系统会自行判断，用户只需输入一组助记词即可恢复。

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FZhZmJ302Y9CdE7mklsoS%252Fimage.png%3Falt%3Dmedia%26token%3Dc936d475-8040-4d7e-bb39-1a14b1e5ed75&width=768&dpr=4&quality=100&sign=55d89c63&sv=2)

完成输入第一组后，可接著输入第二组ed25519助记词 如旧用户的钱包为不支持添加TON、SUI链的钱包，系统则会直接跳过这步

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FysP5sKfaveaRnvwgmvWh%252Fimage.png%3Falt%3Dmedia%26token%3D1f035d45-3a2e-4664-8007-e55362e04401&width=768&dpr=4&quality=100&sign=30041a3f&sv=2)

输入完成后需等待所有成员导入助记词

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FG8rfmvBgXJzl6g8tQUzK%252Fimage.png%3Falt%3Dmedia%26token%3D74cb4079-d706-4bac-98f6-303b31f94a8a&width=768&dpr=4&quality=100&sign=f9597f7d&sv=2)

所有成员导入完成后，发起人点击开始。

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252Fhj2LpyxzZZfsEgPvG2Y3%252Fimage.png%3Falt%3Dmedia%26token%3D2d3647f7-a1c3-408b-9cd0-439dc75b99c9&width=768&dpr=4&quality=100&sign=d7abc4c0&sv=2)

如果每个成员输入的助记词正确，于恢复分片动画完结后便会直接恢复成功，所有成员的分片都会被重置。 请注意，恢复分片后之前被授权到其他设备的分片也会失效，需要重新授权。

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252Fg5aI35re6Sh1LLmm4rGy%252Fimage.png%3Falt%3Dmedia%26token%3Daf9c3d1d-e94b-4e39-874d-70671da9de01&width=768&dpr=4&quality=100&sign=8231ea90&sv=2)
