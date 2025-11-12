# 创建支付引擎项目

从选单点击"支付引擎"进入画面

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252F5dcXZ1gyLgyhNP16loHR%252Fimage.png%3Falt%3Dmedia%26token%3Dddedea60-9e27-43d9-939f-0e5ff0f7a141&width=768&dpr=4&quality=100&sign=9cc5abf5&sv=2)

点击后开始创建，先填写项目名称及进行结算配置。请注意目前支持的结算币种，如钱包内没有添加该币种这里的币种将无法选择。

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FOEeLEr1byUYgTXu4pl8k%252Fimage.png%3Falt%3Dmedia%26token%3Dba3c055b-9a77-4fe7-9369-1646d803d3cd&width=768&dpr=4&quality=100&sign=85d3e85e&sv=2)

完成配置后需要输入验证码进行确认

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252Fe1RV8ugjgOcV8BBYsGua%252Fimage.png%3Falt%3Dmedia%26token%3D7bbec03e-d2d7-48a4-acd3-c597495d8d72&width=768&dpr=4&quality=100&sign=86b2cc74&sv=2)

确认完成后进入到支付引擎项目页面，然后可以点击设置查看相关API接入信息 **注意：不要轻易将项目API密钥泄露给他人，否则可能会导致资产损失。**

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252Fp6YcQ3x8B1cKZ4TORYBq%252Fimage.png%3Falt%3Dmedia%26token%3D7e0f0677-fd76-46ae-adc7-cfae8b377824&width=768&dpr=4&quality=100&sign=442f4331&sv=2)

接入后请配置IP白名单

为确保请求的安全性，需获取Nexa API服务器的IP地址并将其添加到IP白名单中。Nexa API仅允许白名单中的IP地址访问。

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FyC0vAHnku20cZlpiESyL%252Fimage.png%3Falt%3Dmedia%26token%3D749bb1b4-0b3a-42d1-bcc1-eb48614e1ee0&width=768&dpr=4&quality=100&sign=97e448ba&sv=2)

在“IP白名单”中，点击“创建组”，输入IP地址并点击“保存”，然后使用Google验证2FA进行身份验证。

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252FHe39iMq0hEzHpatQ03Un%252Fimage.png%3Falt%3Dmedia%26token%3D72e00b57-b472-4222-8d44-8beb4d6a68ca&width=768&dpr=4&quality=100&sign=f86eaf65&sv=2)

完成接入及IP白名单配置后基本上已完成支付引擎的项目接入工作。

如除了支付引擎开仍需创建其他项目 (例如转出或生成地址等)可先参考[**接口种类**](https://support.Nexa.com/Nexa-wallet-guide/zh-cn/api/type)认识不同种类的分别，再到[**API操作手册**](https://support.Nexa.com/Nexa-wallet-guide/zh-cn/api/manual)开始创建。
