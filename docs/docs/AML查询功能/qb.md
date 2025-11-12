# AML查询功能

## 什么是AML查询？&#x20;

Nexa AML是与知名加密风控服务供应商Elliptic合作推出的风险管理功能，帮助用户识别、控制和处置链上风险。Nexa AML目前可进行地址风险评估（KYA）和交易风险评估（KYT），提供手动查询和自动查询两项功能。用户可以根据业务需要选择合适的功能和方法，有效管理链上交易风险。

* Nexa AML功能仅对付费订阅用户开放。如需使用，请开通付费计划。
* Nexa AML功能的费用不包含在月费中，需根据用户使用次数单独收费，请保证账户余额充足。

## 功能介绍

为满足用户在不同场景下的需求，Nexa AML目前提供手动查询和自动查询两类风险管理功能

### 手动查询

手动查询帮助用户进行地址风险评估（KYA）。用户自主发起对钱包地址的AML查询，Nexa AML将分析目标地址的所属实体和交易历史，综合评估目标地址资产的风险状况，输出目标地址风险评分及查询详情。用户可以参考风险评估结果，采取相应风险管理措施。进行手动查询时，用户需要输入待评估的钱包地址。Nexa AML从资金来源和去向两个维度对该地址展开全链筛查，不限跳数地追踪转入目标地址的资金和从目标地址转出的资金，识别资金相关联的风险实体，并分析其风险类型和特征。在此基础上，分别测算目标地址的来源风险曝露和去向风险曝露，计算来源和去向的风险评分，按照“最高风险原则”得到最终的地址风险评分。手动查询的输出结果包括地址风险评分，以及资金来源和去向风险的详细信息。

1. **风险评分**

风险评分范围是0.0-10.0，评分越高，风险越大。0分表示风险极低，10.0分表示风险极高。风险评分的区间、风险分级和处置建议见下表：

| **评分区间** | **风险分级** | **处置建议**                     |
| ------------ | ------------ | -------------------------------- |
| \[0,2.5)     | 低风险/安全  | 与该地址正常交易                 |
| \[2.5,7.5)   | 中风险/可疑  | 谨慎交易，采取其他方式验证安全性 |
| \[7.5,10.0]  | 高风险/危险  | 拒绝与该地址交易                 |

2. **查询详情**

查询详情中包括两个部分，资金来源和资金去向。Nexa AML将分别从资金来源和去向两个维度，分别给出风险评分和风险关联对象。用户还可以查看每个风险关联对象的风险类型、资金量和贡献比。

* **来源/去向风险评分**\
  来源或去向的风险评分范围同样是0.0-10.0，评分越高，风险越大。查询地址的整体风险评分等于来源和去向风险评分中较高的分数。
* **风险关联对象**\
  在资金来源维度下，风险关联对象是向目标地址转账的、被Nexa AML判定为存在风险的对象；在资金去向维度下，风险关联对象是接收目标地址转账的、被Nexa AML判定为存在风险的对象。风险关联对象一般是公司/组织/团队，如果无法确定该对象身份，则显示为“未知（Unknown）”。用户可查看风险关联对象的详情，包括：
  * 风险类型\
    指该关联对象所涉及风险的类型，如Scam（诈骗）、Thief（窃盗）、Dark Service（暗网服务）等。Nexa AML使用合作方的地址标签库判断关联对象的风险类型，具体类型和描述参见附录。
  * 资金量\
    在资金来源维度下，资金量指从风险关联对象流入目标地址的资金量（美元计价）；在资金去向维度下，资金量指从目标地址流入风险关联对象的资金量（美元计价）。
  * 贡献比\
    指该风险关联对象的资金量在目标地址流入/流出的总资金量中所占的比例，单位为%。

3. **手动查询操作步骤**

<mark style="color:green;">**在使用AML查询功能前，请确保您是订阅用户。有关订阅步骤可参考**</mark>[<mark style="color:blue;">**此页**</mark>](../accountmanagement/bill_and_payment/pricing_plan)<mark style="color:green;">**。**</mark>

前往AML查询页面并点击“新增查询”，或在交易详情页面点击地址旁的图标<img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2FQAEEPvZANb6PtssBX01J%2Fimage.png?alt=media&#x26;token=0e9d23da-51ac-4bf8-9917-6fd74b1049ec" alt="" data-size="line">。

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2F2axztqYNXN4vOfAdCFpW%2Fimage.png?alt=media&#x26;token=49b9bbe3-d197-479a-bd5b-9270ca0f46e9" alt=""><figcaption></figcaption></figure>

选择网络并输入您想查询的地址。

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2FLu3XdCcqEOkHonZ1Ocyz%2Fimage.png?alt=media&#x26;token=5a14b011-e48c-4bf2-b23e-9d2e277066d1" alt=""><figcaption></figcaption></figure>

点击“查看”后，系统会显示温馨提示。

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2FqRwGjxyKcR4TOey2uD3R%2Fimage.png?alt=media&#x26;token=70034f74-07b2-46e3-b6f3-84959fa2b9e3" alt=""><figcaption></figcaption></figure>

然后，您需要输入交易密码完成验证。

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2Fxp3rL8ssCArlVoEWw5Zy%2Fimage.png?alt=media&#x26;token=5d8e19c2-625d-4a12-b680-acdd1fd1c375" alt=""><figcaption></figcaption></figure>

完成验证后，您可以查看查询结果。

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2FvkFqV6cievjyNrVHQm4W%2Fimage.png?alt=media&#x26;token=50b3ab5b-0477-49e1-9262-fed4d1f2eee9" alt=""><figcaption></figcaption></figure>

你也可以在查询记录找到查询详情包括来源风险及去向风险评分

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2Fw04tTSORm6g8HKVQxa8X%2Fimage.png?alt=media&#x26;token=a13b9fb2-4980-47de-aced-b6070b59d44b" alt=""><figcaption></figcaption></figure>

### 自动查询

Nexa AML的自动查询功能可以根据用户预设的规则对API收款交易进行筛选，对用户希望重点关注的交易进行风险评估，并依据评估结果采取相应的风险控制措施。规则创建与管理需要在Nexa桌面端进行，查询结果可以在桌面端及手机端查看。要使用自动查询功能，用户必须首先创建查询规则：

* 设置查询的触发条件，包括需要进行交易监控的项目、币种和金额。用户可创建多条规则，但每个项目只能设置一条查询规则。每条规则中可以对不同币种设置不同的风控触发金额。
* 根据业务需要和风险偏好自定义风险标准，在0到10.0之间选择适合的数值，当交易的风险评分达到或超过这一数值时，Nexa AML将判定该交易为危险交易。
* 选择风险警报接收人，Nexa AML识别危险交易后将向接收人发送风险警报。

完成规则设置并启用规则后，Nexa AML将对触发规则的收款交易进行交易风险评估（KYT）。评估完成后，Nexa AML将根据所触发规则设定的风险标准，判断交易是否属于危险交易。若收款地址/项目被禁用，在手动解禁前，Nexa AML将不会再筛查该地址/项目的任何交易。\
\
识别到危险交易后，Nexa AML将禁用该收款地址，暂停该地址API回调和资金归集，并向用户指定的警报接收人发送风险警报。用户收到风险警报后，可查看查询详情以了解交易风险来源。如果认定风险在可接受范围内，用户可手动进行API回调和地址解禁。\
\
对触发自动查询的交易，Nexa AML将为用户提供风险评分和查询详情两类信息。

1. **风险评分**

风险评分的范围是0.0-10.0。风险评分与出款地址资金来源中风险资金的贡献比例直接相关，风险资金贡献比越大，风险评分越高，两者大致对应关系如下表：

| **风险评分**       | 0.0  | 1.0  | 2.5  | 5.0  | 7.5  | 10.0  |
| ------------------ | ---- | ---- | ---- | ---- | ---- | ----- |
| **风险资金贡献比** | ＜1% | 10%  | 25%  | 50%  | 75%  | ＞99% |

2. **查询详情**

显示所查询交易的出款地址的风险关联对象，即曾经向该出款地址转账的、被判定为存在风险的对象。用户可以具体查看每个风险关联对象的风险类型、资金量和贡献比。

* 风险类型\
  指该关联对象所涉及风险的类型，如Scam（诈骗）、Thief（窃盗）、Dark Service（暗网服务）等。Nexa AML使用合作方的地址标签库判断关联对象的风险类型，具体类型和描述参见附录。
* 资金量\
  指从风险关联对象流入这一出款地址的资金量（美元计价）。
* 贡献比\
  指该风险关联对象的资金量在目标地址流入的总资金量中所占的比例，单位为%。

3. **自动查询操作步骤**

自动查询主要的操作是设定好AML自动规则，可以先进入以下页面然后点击创建。

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2F0HfqAcypZ9MeNRuMaOhA%2Fimage.png?alt=media&#x26;token=dbddea3e-4f44-49c6-9630-85142e5238a6" alt=""><figcaption></figcaption></figure>

点击后可以开始创建规则

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2Fn2eKTaRu23rnxkAG6g2M%2Fimage.png?alt=media&#x26;token=5de01585-1b64-446b-9f7f-874e2f624461" alt=""><figcaption></figcaption></figure>

* 规则名称：为规则命名
* 项目：选择需要监控交易的项目，请注意每个项目只能创建一条规则
* 币种：选择币种及设置金额大于多少时触发自动AML查询

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2Fpb0kzBZj4YZBdcnOE9SI%2Fimage.png?alt=media&#x26;token=c36098b9-bb71-4758-b10a-92c52aa9fbae" alt=""><figcaption><p>币种设定图示</p></figcaption></figure>

* 风险分级标准：可设置0.0 (安全)-10.0(非常危险)之间，当风险分数大于你所设置的标准时便会定义为危险交易，发送警报通知及自动禁止该项目地址。
* 风险警报接收人：可设置负责接收风险警报的团队成员

设置完成后点击提交及进行身份验证以完成创建流程，创建成功后需启用该规则才可正式使用。

每次创建、编辑、启用及删除规则都会有记录，可在日志查看。

<figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2FL1Fh39HIJlLAEDcrmACG%2Fimage.png?alt=media&#x26;token=9048da3b-13d8-49d9-aca9-5b67fb9e6322" alt=""><figcaption></figcaption></figure>

## 应用场景

交易前风控

交易前风控旨在交易执行前对风险进行识别、评估和控制，防止交易错误或恶意行为引起的异常交易，避免出现重大资金损失。在执行重要交易前，用户可以对收款地址进行手动查询，了解收款地址的风险曝露，作为收款地址风险状况的初步判断依据。如果收款地址风险评分较高，Nexa强烈建议用户终止与该地址的交易，以规避资金损失以及运营和法律监管的风险。如果收款地址的风险评分属于中风险区间，建议用户采取其他方式进一步核查收款方身份和收款地址，确保安全性后再执行交易。

交易监控

交易监控是以自动化技术手段进行实时或近实时的交易筛查和检测，识别潜在风险或可疑行为，确保交易合规与资产安全。在加密交易中，风险资产入账可能导致收款地址风险曝露提高，是常见风险之一。对于收款频率高、资金来源存在不确定性的用户，Nexa AML的自动查询功能可以帮助实现收款交易的实时监控，及时发现潜在风险、隔离相关地址，避免风险扩散引起更大的损失。当一笔交易被认定为危险交易，Nexa建议用户及时查看和了解该交易风险状况。一般情况下，Nexa建议不再使用该交易的收款地址，避免风险外溢到其他钱包，影响用户正常交易。如果认定风险在可接受范围内，用户可手动启用收款地址

## AML功能局限性说明

**Nexa AML无法覆盖所有风险因素**。\
Nexa AML使用Elliptic等加密风控服务商的风险数据库进行风险追踪，该数据库覆盖50个网络，包含超过64亿地址、交易记录及其风险信息。尽管如此，受限于数据库的有限性和更新滞后性，Nexa AML仍然不可能记录和标记所有存在风险的地址和资金流动，因而无法识别所有风险因素。用户应将Nexa AML的风险查询结果作为风险识别和控制的参考，而非唯一的、确定性的证据。

**Nexa AML的风险评估结果具有时效性**。\
Nexa AML采取基于历史行为的风险评估模型，当且仅当资金流经地址存在风险行为记录并且被标记时，才会认定风险存在。如果某一地址风险行为未被发现、或风险行为发生在风险评估之后，则相关风险无法体现在风险评估结果中。因此，Nexa AML的风险查询结果是在查询发生时、对查询对象已知风险行为的综合评价，不能用于预测查询对象未来的风险状况。如果用户在不同的时间对同一对象发起查询，查询结果可能出现差别。

## FAQ

*   **为什么会出现查询失败的情况？这种情况如何处理？**\
    查询失败一般是由于团队余额不足或第三方服务器错误导致的，失败时系统亦会发通知给风险警报接收人。如果团队余额不足导致查询失败，用户可以在充值后重新进行地址查询，以了解目标地址风险状况。

    <figure><img src="https://2287475285-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSdMhazXkh30OBfLly0nW%2Fuploads%2FY1zJE6xMK8GqE6RfyE8u%2Fimg_v3_02ll_d0b646e7-b047-49da-9cee-33b9a8da1bhu.jpg?alt=media&#x26;token=bdf219da-d7cc-42f4-bd34-8195690178da" alt=""><figcaption></figcaption></figure>
* **查询失败是否扣费？**\
  查询失败不会产生任何费用。
* **为什么我的手动查询结果页面中，风险评分和查询详情显示为空？**\
  这表示风险数据库中并未记录所查询地址的任何风险行为。这可能是因为所查询地址是新创建地址、还没有任何交易记录，也可能是因为所查询地址没有与风险地址进行资金交互的记录。基于交易历史，Nexa AML判定该地址为安全地址。但用户进行交易时仍应考虑其他方面的风险，如诈骗、钓鱼攻击等。
* **为什么我的自动查询显示查询结果为空？**\
  出现这种结果可能有以下原因：1）所查询交易的信息尚未纳入风险数据库；2）风险数据库中没有所查询交易资金来源相关的风险信息。对于第二种情况，一般可以认为资金来源风险较小，但无法完全排除存在风险的可能性。
* **为什么风险评分显示为0.0，但查询详情中仍然有风险关联实体信息？**\
  这表示所有风险关联对象与目标地址的资金交互总额小于目标地址资金总量的1%。由于涉及风险的资金占比极低，系统判定风险评分为0.0。
* **为什么查询详情中，风险关联对象的资金量显示为0.00，但贡献比大于0？**\
  这表示风险关联对象转入/转出的资金量小于0.01美元，但由于查询对象的总资金量小于100美元，涉及风险的资金占比高于0.01%，因此贡献比大于0。

## 风险类别、描述和范例

| **风险类别**                                     | **描述**                                                     | **范例**                          |
| ------------------------------------------------ | ------------------------------------------------------------ | --------------------------------- |
| 犯罪组织Criminal Organisation                    | 由多人组成的、参与有组织犯罪的团体                           | The Shadow Brokers                |
| 代币交换服务Coin Swap Service                    | 具有固定汇率的加密货币转换服务，通常不需要用户登录或任何KYC  | <p><br></p>                       |
| 信用卡数据供应商Credit Card Data Vendor          | 提供非法凭证和其他非法个人财务信息的在线卡片商店             | <p>JokerStash.store<br></p>       |
| 暗网论坛Dark Forum                               | 仅限TOR访问的在线讨论论坛                                    | DNM Avengers                      |
| 儿童性虐待制品Child Sexual Abuse Material Vendor | 提供儿童性虐待图像以换取加密资产的供应商                     | <p><br></p>                       |
| 暗网黑市-中心化Dark Market-Centralized           | 仅限TOR访问的市场，通过集中式基础设施销售非法商品和服务      | Dream Market                      |
| 暗网黑市-去中心化Dark Market-Decentralized       | 仅限TOR访问的市场，通过分散的基础设施销售非法商品和服务      | Wall Street Market                |
| 暗网服务Dark Service                             | 非法服务，包括黑客、钱包和网络托管服务                       | PinPays                           |
| 暗网商店Dark Vendor Shop                         | 暗网黑市上仅可通过TOR访问的个人供应商，出售非法商品和服务    | Euroarms                          |
| 勒索Extortion                                    | 使用武力或威胁从个人或多人处获取资金                         | Ashley Madison Extortion          |
| 极左/极右极端主义Far-Left/Far-Right Extremism    | 实体（a）被判犯有与极左/极右极端主义活动直接相关的罪行，或（b）已被多个合法来源识别和核实（有证据），长期煽动暴力、性侵犯或其他严重犯罪——左翼/右翼极端主义言论。 | <p><br></p>                       |
| 高交易费High Transaction Fee                     | 涉及矿工的交易费用高于平均水平的交易，表明可能存在损失或犯罪活动 | <p><br></p>                       |
| 已知罪犯Known Criminal                           | 参与非法活动的已知个人。通常与犯罪组织有联系。               | Ross Ulbricht and Carl Mark Force |
| 恶意软件Malware                                  | 旨在损坏或禁用计算机和计算机系统的软件                       | <p>Trickbot<br></p>               |
| OFAC制裁实体OFAC Sanctioned Entity               | 受美国财政部海外资产控制办公室（OFAC）制裁的实体             | <p><br></p>                       |
| 网络钓鱼Phishing                                 | 一种欺诈形式，消息发送者试图诱骗接收者泄露重要的个人信息、转账或安装恶意软件，发件人通常会冒充合法组织代表 | TRON Web Wallet Phishing          |
| 庞氏骗局Ponzi Scheme                             | 一种欺诈形式，通过从后来的投资者投资资金中向第一批投资者支付快速回报来培养对不存在的企业成功的信念 | <p><br></p>                       |
| 勒索软件Ransomware                               | 一种来自加密病毒学的恶意软件，除非支付赎金，否则威胁要发布受害者的数据或永久阻止对其的访问 | WannaCry 2.0                      |
| 诈骗Scam                                         | 任何其他类型的欺诈活动                                       | Prodeum                           |
| 恐怖组织Terrorist Organization                   | 参与恐怖主义或相关活动的组织                                 | ISIS                              |
| 窃盗Thief                                        | 被盗资金的接收者                                             | Stolen CoinSecure Funds           |
