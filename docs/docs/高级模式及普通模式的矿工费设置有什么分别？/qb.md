# 高级模式及普通模式的矿工费设置有什么分别？

高级模式与普通模式的 Gas 费设置主要区别在于协议基础与费用控制方式。高级模式采用了 EIP-1559 协议，利用新的费用计算方式，让交易确认速度更快，且理论上能减少费用波动，适合需要高优先级确认的用户。在高级模式中，用户可以自定义 Max Fee（最大费用）和 Max Priority Fee（优先费用），达到精确控制。而普通模式基于传统 Gas 费结构，需手动设置 Gas Price 和 Gas Limit，灵活性较低，但适合对 EIP-1559 不熟悉或习惯使用传统设置方式的用户。相比之下，高级模式更能节省费用并提供稳定表现，而普通模式则延续了传统的设置习惯。

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252Fste4wwxfKDnjg5Td27w4%252Fimage.png%3Falt%3Dmedia%26token%3D842f7b32-2826-426c-8121-f3240e9c00cd&width=768&dpr=4&quality=100&sign=8f5c68cc&sv=2)

![img](https://support.Nexa.com/~gitbook/image?url=https%3A%2F%2F2287475285-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSdMhazXkh30OBfLly0nW%252Fuploads%252F4QhoRx0wX0IkBtGqyjZd%252Fimage.png%3Falt%3Dmedia%26token%3Db1dd4cd1-e07f-402f-91f4-7d25e791bda3&width=768&dpr=4&quality=100&sign=9c4975a0&sv=2)
