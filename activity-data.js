// ============================================================
//  activity-data.js  —  运营商活动数据配置
//  修改此文件即可增删改活动，无需改动 HTML
//  数据来源：线报网 + 用户提供链接
//  最后更新：2026-08-20
//  活动总数：73个（移动44 / 联通15 / 电信10 / 广电4）
// ============================================================

// 主大类定义（页面 Tab 和下拉会读取）
const mainTypeEnum = [
    { value: "", label: "全部大类" },
    { value: "流量类", label: "流量类" },
    { value: "话费充值类", label: "话费充值类" },
    { value: "会员权益类", label: "会员权益类" },
    { value: "号卡套餐类", label: "号卡套餐类" },
    { value: "宽带业务", label: "宽带业务" },
    { value: "合约购机", label: "合约购机" },
    { value: "其他活动", label: "其他活动" }
];

// 细分标签库（主大类 → 细分标签列表，用于下拉联动）
const subTypeMap = {
    "流量类": ["全国通用流量", "定向流量", "闲时流量", "流量叠加包", "赠送流量"],
    "话费充值类": ["充值立减", "充送话费", "话费返还", "缴费优惠"],
    "会员权益类": ["视频会员", "音乐会员", "网盘会员", "出行券", "生活权益"],
    "号卡套餐类": ["新用户号卡", "老用户套餐", "副卡", "亲情号"],
    "宽带业务": ["新装宽带", "宽带提速", "宽带续费", "IPTV"],
    "合约购机": ["合约机", "购机补贴", "以旧换新"],
    "其他活动": ["抽奖活动", "签到", "老用户专享", "新用户专享", "领取福利"]
};

// ============================================================
//  活动数据列表（共73个，按运营商分类：移动44 / 联通15 / 电信10 / 广电4）
// ============================================================
const activityList = [

    // ============================================================
    //  一、中国移动（44个）
    // ============================================================

    // ----- 1-22：线报日常活动 -----
    {
        id: 1,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "移动游戏中心每日抽奖",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "每日抽奖可得1/2/6元话费券、1GB流量日包；周六最高抽666元话费券",
        link: "https://h.app.coc.10086.cn/activity/zx/transit/transferDownload.html?targetURL=https%3A%2F%2Fwx.10086.cn%2Fqwhdhub%2Fdiy-client%2F1126036587%3FA_C_CODE%3DKlkhX1ccML%26channelId%3DP00000112150&pageId=99992604161454274&channelId=P00000112150&sellerId=1636941HD1301000016",
        remark: "每日可参与，周六奖励升级"
    },
    {
        id: 2,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "音乐会员"],
        title: "移动全球通星动日",
        startTime: "2026-08-01",
        endTime: "2026-08-25",
        desc: "连续签到7天得视频会员月卡/音乐会员周卡/中石油加油券；每月可领腾讯/B站视频会员月卡、15元加油券；星运盲盒抽腾讯视频VIP月卡、10元加油券",
        link: "https://qqt.cmicrwx.cn/2016tyjf/xhmqqthy/res/wap/xdrNormal.html?sspId=74915",
        remark: "全球通用户专享，至8月25日"
    },
    {
        id: 3,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "流量类",
        subType: ["定向流量"],
        title: "咪咕视频冰爽'移'夏领定向流量",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "0元领50GB咪咕视频定向流量包，还有机会得100元话费券、10GB/2GB流量日包等随机福利",
        link: "https://m.miguvideo.com/m/provincevml/e0fa9f12a77b471c9cdbb7a439b86679?needLazyimg=0&pwId=409025a21a8b4605adc7dfb9839e1634",
        remark: "限移动用户"
    },
    {
        id: 4,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "移动×爱奇艺联合抽奖",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "抽2GB流量日包或最高9元话费加赠券",
        link: "https://wx.10086.cn/qwhdhub/leadin/1025012230?A_C_CODE=cPccqjGNsY&channelId=P00000063757#/",
        remark: "移动×爱奇艺联合活动"
    },
    {
        id: 5,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["签到"],
        title: "支付宝搜'中国移动'签到有礼",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "签到领好礼，实测0.5元话费券，签满三次抽百元话费",
        link: "https://render.alipay.com/p/yuyan/180020040001212700/?cid=wap_dc",
        remark: "通过支付宝搜索'中国移动'进入"
    },
    {
        id: 6,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["签到"],
        title: "中国移动APP签到领话费/流量",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "中国移动APP-我的-签到，领随机话费/流量；完成任务领心愿金，可兑0.5元、1元、1.5元、2元话费券，每日8点补库存",
        link: "https://h.app.coc.10086.cn/activity/zx/transit/transferDownload.html?targetURL=https%3A%2F%2Fwx.10086.cn%2Fqwhdhub%2Fqwhdmark%2F1021122301",
        remark: "每日8点补库存，建议准时领取"
    },
    {
        id: 7,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["充值立减"],
        title: "移动周三充值日",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "每日拼图赢最高8折话费券，每周三8点开抢88折话费券、12/13元充值立减券、88元充值加享券",
        link: "https://wx.10086.cn/hlwyxhdhub/act-wedrecharge/index.html#/signup",
        remark: "每周三8点开抢，先到先得"
    },
    {
        id: 8,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员"],
        title: "移动周日追剧盛宴",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "每周日12点/16点可领5元话费兑换券、2GB流量日包，抽奖可赢1GB/2GB流量、1/2/5元话费兑换券、视频会员月卡",
        link: "https://wx.10086.cn/hlwyxhdhub/act-sunvideo/index.html#/signup",
        remark: "每周日12点/16点两场"
    },
    {
        id: 9,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "流量类",
        subType: ["赠送流量"],
        title: "移动×支付宝双V会员领流量",
        startTime: "2026-08-01",
        endTime: "2026-12-31",
        desc: "每月中国移动×支付宝双V会员用户可领1GB通用流量",
        link: "https://caiyun.feixin.10086.cn:7071/portal/clientDL/index.html?v=mCloud_89844221919&linkUrl=https%3A%2F%2Fvv.mmarket.com%2Fvv-hcy%2Findex.html%3FtargetSourceId%3D001205%26token%3D%23ssoToken%23%26scode%3Dhecaiyun%26sourceId%3Dhcy-cmic_llrwytc",
        remark: "限双V会员，无法跳转可通过浏览器或分享至微信打开"
    },
    {
        id: 10,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "移动做任务看视频抽百元话费",
        startTime: "2026-08-01",
        endTime: "2026-12-31",
        desc: "中国移动APP-底栏'逛逛'频道-右上角'做任务抽百元话费'，看视频任务可得0.3元/1元/100元话费券、100MB流量券",
        link: "https://www.10086.cn/index/bj/index_100_100.html",
        remark: "长期活动，入口在中国移动APP"
    },
    {
        id: 11,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "赠送流量"],
        title: "移动网龄成长计划",
        startTime: "2026-08-01",
        endTime: "2026-12-31",
        desc: "领3GB流量月包券或B站影音会员N选1",
        link: "https://dev.coc.10086.cn/coc/web6/ageFeedbackV2/?pageId=1879720710683729920&channelId=P00000001067",
        remark: "根据网龄领取不同权益"
    },
    {
        id: 12,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "移动×闲鱼联合抽奖",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "每月登录页面可免费抽奖，赢1GB/2GB流量日包券或最高9元/4元/2元话费加赠券",
        link: "https://wx.10086.cn/qwhdhub/leadin/1026033134?A_C_CODE=Fi11gwHIcu&channelId=P00000111791#/",
        remark: "移动×闲鱼联合活动，每月可参与"
    },
    {
        id: 13,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["签到"],
        title: "移动『幸运三日签』签到领好礼",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "连签3天：首日2GB流量日包，次日500MB流量/2元话费，第三日5元/66元话费券；每日10点抢100/88/66元话费券",
        link: "https://dev.coc.10086.cn/coc3/canvas/rightsmarket-h5-canvas/online/26xysrqtybld",
        remark: "每日10点抢大额券"
    },
    {
        id: 14,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "移动×中盐『品牌月』大转盘抽奖",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "大转盘抽奖，奖品含2GB/500MB流量日包，5元/10元话费加赠券",
        link: "",
        remark: "移动与中盐联合活动"
    },
    {
        id: 15,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "移动『好礼月月领』刮奖活动",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "刮奖可得2GB/10GB/500MB流量日包，5元/100元话费券",
        link: "",
        remark: "每月可参与"
    },
    {
        id: 16,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "流量类",
        subType: ["定向流量", "赠送流量"],
        title: "咪咕悦看随行领好礼",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "领2GB流量日包或30GB悦看定向流量；抽奖可得100元/5元/3元话费加赠券",
        link: "",
        remark: "咪咕视频旗下活动"
    },
    {
        id: 17,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "移动『AI你』摇奖活动",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "摇奖得2GB/500MB流量日包，100元/5元话费加赠券，天猫满减券",
        link: "",
        remark: ""
    },
    {
        id: 18,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["充值立减"],
        title: "移动『春夏焕新』有礼活动",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "直接领1GB/2GB流量日包，1/2/4/9元话费加赠券，86折话费折扣券",
        link: "",
        remark: "可直接领取"
    },
    {
        id: 19,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["领取福利"],
        title: "移动『随心选好礼』卡券任选",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "随机展示2张卡券选1张，含2GB/10GB/30GB流量日包，0.5元/8元话费加赠券",
        link: "",
        remark: ""
    },
    {
        id: 20,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["充值立减"],
        title: "和包『话费狂欢季』领优惠券",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "领2元/5元话费优惠券，满20元可用",
        link: "",
        remark: "和包支付平台活动"
    },
    {
        id: 21,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["签到"],
        title: "和包签到领话费豆",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "每日签到/做任务领话费豆，可兑换1元/2元/3元话费满减券",
        link: "",
        remark: "长期活动"
    },
    {
        id: 22,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "和包『一豆有好礼』抽奖",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "抽奖得1元/2元/10元/88元话费兑换券，100MB/200MB/1GB流量日包",
        link: "",
        remark: "消耗和包豆参与"
    },

    // ----- 23-25：广西移动（25xianbao/18459 + 用户链接）-----
    {
        id: 23,
        operator: "移动",
        province: "广西壮族自治区",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "广西移动10元300G全球通5G-A尊享合约",
        startTime: "2026-07-04",
        endTime: "2028-06-01",
        desc: "10元/月享300GB国内通用流量+3000分钟国内通话+1500条国内短信，含5G-A网络权益（QCI6+千兆）",
        link: "https://f.10086.cn/s/#nVyVPp",
        remark: "需全球通或幸运客户身份，合约期24个月，承诺月消费不低于16-17元"
    },
    {
        id: 24,
        operator: "移动",
        province: "广西壮族自治区",
        city: "全省",
        mainType: "其他活动",
        subType: ["老用户专享"],
        title: "广西移动网龄回馈202512焕新版（当月生效版）",
        startTime: "2026-08-01",
        endTime: "2026-12-31",
        desc: "网龄回馈活动，当月生效版本，根据用户网龄赠送流量或权益",
        link: "",
        remark: "根据本月流量结余情况选择当月或次月生效"
    },
    {
        id: 25,
        operator: "移动",
        province: "广西壮族自治区",
        city: "全省",
        mainType: "话费充值类",
        subType: ["话费返还"],
        title: "广西移动预存250元回馈100元",
        startTime: "2026-08-01",
        endTime: "2026-12-31",
        desc: "预存250元话费，回馈100元，分10个月返还",
        link: "",
        remark: "10个月合约计划（202401版），适合长期稳定使用"
    },

    // ----- 26-28：5G-A加速服务三地 -----
    {
        id: 26,
        operator: "移动",
        province: "四川省",
        city: "全省",
        mainType: "其他活动",
        subType: ["老用户专享"],
        title: "四川移动全球通5G-A加速服务0元领",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "0元/月，全球通普卡/银卡/金卡客户可免费领取，享直播/游戏/视频等多款热门APP专属网络加速",
        link: "https://wap.sc.10086.cn/scmccMiniWap/5gAccelerationService/index.html?value=isNeedLogin&channel=jtst&channelId=P00000148418&yx=1556527002&token=YZsidssolgde8237f296050eb681ef0bd6b6cb31a1",
        remark: "限四川移动全球通普卡/银卡/金卡客户，需主动领取"
    },
    {
        id: 27,
        operator: "移动",
        province: "广西壮族自治区",
        city: "全省",
        mainType: "其他活动",
        subType: ["老用户专享"],
        title: "广西移动全球通5G-A加速服务0元领",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "0元/月，全球通用户可在中国移动APP搜索'全球通'，下拉找到'全球通5G-A加速服务'自行开通",
        link: "",
        remark: "限广西移动全球通用户，三年一续，到期需手动续约"
    },
    {
        id: 28,
        operator: "移动",
        province: "湖南省",
        city: "全省",
        mainType: "其他活动",
        subType: ["老用户专享"],
        title: "湖南移动全球通5G-A加速服务0元领",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "0元/月，全球通用户直接拨打10086人工客服，说'帮我开0元全球通5G-A加速服务'即可开通",
        link: "",
        remark: "限湖南移动全球通用户，10086客服人工开通"
    },

    // ----- 29-44：用户提供链接（移动16个）-----
    {
        id: 29,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "流量类",
        subType: ["定向流量"],
        title: "移动云盘0元30GB定向流量",
        startTime: "2022-01-01",
        endTime: "2026-12-31",
        desc: "0元/月领30GB移动云盘定向流量，按月自动续订，当月清零不结转。适用于移动云盘APP、微信小程序、139邮箱APP云盘模块等场景",
        link: "https://caiyun.feixin.10086.cn:7071/portal/caiyunOfficialAccount/index.html?path=zeroPurchase&sourceid=1345#/zeroPurchase",
        remark: "限中国移动用户（不限量套餐、副卡、物联网卡除外）；江苏、北京用户省内默认免流不消耗此流量；河南用户需在网≥185天"
    },
    {
        id: 30,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "赠送流量"],
        title: "移动AI潮智包（尝鲜版）0元享",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "0元/月，含AI视频彩铃权益（AI一语成歌/成片每月各1次）、移动云盘AI权益（文本AI40次/天、图片AI13次/月）、5G新通话点亮屏幕+趣味通话、30GB咪咕音乐专属流量",
        link: "https://dev.coc.10086.cn/coc/web2/trendyAiPackage/?pageId=1821479050014994432&channelId=P00000044852",
        remark: "订购立即生效，退订次月失效；如已订购相关单品可能导致订购失败"
    },
    {
        id: 31,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "流量类",
        subType: ["定向流量"],
        title: "移动云手机0元30GB定向流量",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "0元/月领30GB移动云手机定向流量，按月自动续订。适用于移动云手机、微云手机、云应用等产品",
        link: "https://cpability.buy.139.com/freetraffic/#/apporder",
        remark: "限中国移动用户（不限量套餐、副卡、物联网卡除外）；河南用户需在网≥185天"
    },
    {
        id: 32,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "定向流量"],
        title: "移动APP权益·免费流量包+会员月卡",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "可领取阿里系/百度系/头条系/网易系定向流量包，以及移动云盘黄金会员月卡、咪咕视频钻石会员月卡、爱奇艺/腾讯视频VIP会员月卡等",
        link: "https://dev.coc.10086.cn/coc3/gr/static-2c/rightsget/index.html#/CardBzk?channelId=C10000013149&sellerId=undefined",
        remark: "需登录中国移动APP查看具体领取规则"
    },
    {
        id: 33,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "音乐会员"],
        title: "移动APP权益·会员月卡",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "可领取爱奇艺/腾讯视频/优酷视频VIP会员月卡、喜马拉雅会员月卡等",
        link: "https://dev.coc.10086.cn/coc3/gr/static-2c/fcyr4/index.html#/?cardType=2&channelId=C10000041131&sellerId=undefined",
        remark: "需登录中国移动APP查看具体领取规则"
    },
    {
        id: 34,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["话费返还"],
        title: "移动AI豆兑换话费/流量/短信",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "使用AI豆可兑换话费（5元/10元/15元/20元）、流量日包（1GB/2GB）、流量加油包（100M/500M/1G）、短信包（50条/100条/200条）、彩信包等",
        link: "https://m.jf.10086.cn/#/modules/pages/ownBusiness/bill/bill?WT.ac_id=bill_h5_code11",
        remark: "AI豆兑换话费规则以各省为准；话费一经兑出不予退换、不提现"
    },
    {
        id: 35,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["老用户专享"],
        title: "移动话费代付服务",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "付款人可设置代付，为被付款人支付月租费、流量语音等套外费用。需付款方发起申请，被付款人短信确认",
        link: "https://dev.coc.10086.cn/coc/web2/replacePay/?pageId=1506078881488551936&channelId=P00000012966",
        remark: "取消代付需拨打10086或前往营业厅办理"
    },
    {
        id: 36,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["老用户专享"],
        title: "移动资费公示专区",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "中国移动资费公示专区，可查看各类套餐资费详情",
        link: "https://h.app.coc.10086.cn/cmcc-app/uni-pages/tariffZonePers.html?pageId=1834149966764851200&prov=100",
        remark: "页面需在移动APP内打开"
    },
    {
        id: 37,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["音乐会员"],
        title: "移动×QQ音乐随心听",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "中国移动与QQ音乐联合权益，具体内容需登录页面查看",
        link: "https://dev.coc.10086.cn/coc/web1/QQMusicPackage/redirectPgae?statusId=1&pageId=1534720185371115520&channelId=P00000012910",
        remark: "需登录中国移动账号查看具体权益"
    },
    {
        id: 38,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "定向流量"],
        title: "移动APP权益·免费流量包+会员月卡",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "可领取阿里系/百度系/头条系/网易系定向流量包，以及移动云盘黄金会员月卡、咪咕视频钻石会员月卡、爱奇艺/腾讯视频VIP会员月卡等",
        link: "https://dev.coc.10086.cn/coc3/gr/static-2c/rightsget/index.html#/CardBzk?channelId=C10000013149&sellerId=undefined",
        remark: "需登录中国移动APP查看具体领取规则"
    },
    {
        id: 39,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "音乐会员"],
        title: "移动APP权益·会员月卡",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "可领取爱奇艺/腾讯视频/优酷视频VIP会员月卡、喜马拉雅会员月卡等",
        link: "https://dev.coc.10086.cn/coc3/gr/static-2c/fcyr4/index.html#/?cardType=2&channelId=C10000041131&sellerId=undefined",
        remark: "需登录中国移动APP查看具体领取规则"
    },
    {
        id: 40,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["领取福利"],
        title: "移动APP XDS00005活动",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "中国移动APP活动页面，具体内容需在APP内打开查看",
        link: "https://h.app.coc.10086.cn/activity/zx/transit/transferDownload.html?targetURL=https%3A%2F%2Fchinamobileapp%2Frn%2Fcommon%2FXDS00005&pageId=99992503271008275&channelId=P00000137840&sellerId=1036905FW1605100001",
        remark: "需在中国移动APP内打开，页面跳转至RN页面XDS00005"
    },
    {
        id: 41,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["领取福利"],
        title: "移动福利集市·日日签到领流量话费券",
        startTime: "2025-01-17",
        endTime: "2026-09-30",
        desc: "每日签到可领流量日包、2元话费券等福利",
        link: "https://wx.10086.cn/qwhdhub/diy-client/1126056401?A_C_CODE=Jvt45NUwWS",
        remark: "需登录中国移动APP参与，领取后当日有效"
    },

    // ============================================================
    //  二、中国联通（15个）
    // ============================================================

    // ----- 42-45：前期搜索 -----
    {
        id: 42,
        operator: "联通",
        province: "广东省",
        city: "广州市",
        mainType: "号卡套餐类",
        subType: ["新用户号卡"],
        title: "广州联通『拥军优属』专属套餐",
        startTime: "2026-08-01",
        endTime: "2026-08-31",
        desc: "联合OPPO推出官兵专属通信优惠套餐，提供高性价比通话、流量、权益及家庭融合产品",
        link: "",
        remark: "拥军优属专属活动"
    },
    {
        id: 43,
        operator: "联通",
        province: "山东省",
        city: "全省",
        mainType: "合约购机",
        subType: ["合约机", "购机补贴"],
        title: "山东联通『融合购机』中高端手机补贴",
        startTime: "2026-08-19",
        endTime: "2026-12-31",
        desc: "将家庭通信支出合并为一张账单，对5000元以上中高端机型给予定向购机补贴",
        link: "",
        remark: "提供159元/199元档融合方案"
    },
    {
        id: 44,
        operator: "联通",
        province: "山东省",
        city: "青岛市",
        mainType: "宽带业务",
        subType: ["新装宽带", "宽带提速"],
        title: "青岛联通『双宽带』全家通信优惠",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "139元/月起，含两条千兆宽带+全屋WiFi，全家最多5人共享150GB流量+1300分钟通话",
        link: "",
        remark: "两条宽带可装不同地址"
    },
    {
        id: 45,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "号卡套餐类",
        subType: ["新用户号卡", "全国通用流量", "定向流量"],
        title: "联通『果粉·王卡』SIM卡套餐",
        startTime: "2026-01-23",
        endTime: "2026-12-31",
        desc: "首月免月租，首年优惠后49元/月。含80GB流量(30GB定向+50GB通用)，赠2年AppleCare碎屏电池保服务",
        link: "",
        remark: "预存50元送120元，每月返10元"
    },

    // ----- 46：25xianbao/28458 -----
    {
        id: 46,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "号卡套餐类",
        subType: ["老用户套餐"],
        title: "联通畅游(至尊版)-B套餐25元/月",
        startTime: "2026-08-20",
        endTime: "2026-08-31",
        desc: "25元/月，权益二选一：①35元天猫超市卡+视频/音乐会员(N选1)；②奶茶券+视频/音乐会员(N选1)。限时放量，名额有限",
        link: "",
        remark: "仅限上海、江苏、广东、云南、新疆五地老用户办理，联通APP或网上营业厅搜索'畅游至尊版'办理"
    },

    // ----- 47-56：用户提供链接（联通10个）-----
    {
        id: 47,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "联通套餐升级福利·每月免费领2GB全国流量",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "升级后每月可免费得2GB全国通用流量，当月有效不可结转。需承诺在网12个月，到期前30日未主动解约则自动顺延12个月",
        link: "https://img.client.10010.com/liuliangbaoxiangqing/index.html#/fuli?duanlianjieabc=qA7K3",
        remark: "限收到特邀短信的用户参与，短信转发无效。也可登录联通APP搜索'套餐升级福利'办理。取消无违约金"
    },
    {
        id: 48,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "联通星享日",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "联通用户星享日活动，具体权益需登录页面查看",
        link: "https://img.client.10010.com/xingxiangri/#/home",
        remark: "页面需JavaScript加载，建议使用手机浏览器或联通APP打开"
    },
    {
        id: 49,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "联通盲盒福利·抽奖赢好礼",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "联通用户盲盒抽奖活动，剩余抽奖次数1次",
        link: "https://txwk.10010.com/wkpen/view/740785949b.html?type=phone",
        remark: "需登录联通账号参与"
    },
    {
        id: 50,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "音乐会员", "生活权益"],
        title: "联通PLUS会员·领热门VIP权益",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "PLUS会员可领爱奇艺、优酷、腾讯视频、B站大会员、QQ音乐、酷狗、网易云等热门VIP会员月卡，及高德打车券、滴滴青桔骑行卡等生活权益",
        link: "https://qy.chinaunicom.cn/mobile-h5/plus/orderPage.html?sourcephone=99EA8BA8F88A543E2EEE29B5D2A9045BD2CFE32EA9E2E5767EDB0544137070E4",
        remark: "含5G优享服务、视频彩铃、数字人助理等特权，部分权益需付费开通"
    },
    {
        id: 51,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "音乐会员", "生活权益"],
        title: "联通特权中心·热门权益优惠购",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "B站大会员月卡20元、喜马拉雅VIP月卡24元、淘宝闪购超级吃货卡月卡13元、哈啰单车月卡24元、知乎盐选月卡22元、Keep月卡24元等",
        link: "https://qy.chinaunicom.cn/mobile-h5/main/userarea.html",
        remark: "部分权益限时免费开通，需登录联通账号"
    },
    {
        id: 52,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "流量类",
        subType: ["赠送流量"],
        title: "联通5G登网送好礼·每月领5GB流量",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "0元领5GB 5G登网专属流量包，连续3个月每月赠送5GB国内流量。产品兑换成功立即生效",
        link: "https://qy.chinaunicom.cn/mobile-h5/2023/5gdw.html",
        remark: "限联通特邀用户，非特邀及转发链接无效。需登录联通APP-我的权益-我的礼包卡券中兑换。关闭5G开关或接入非5G网络时流量无法使用，当月未用完不可结转"
    },
    {
        id: 53,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["签到", "抽奖活动"],
        title: "联通每日签到抽奖",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "每日签到参与抽奖，具体奖品需登录页面查看",
        link: "https://c.10010.com/uf/daily/draw?isAuto=true&shorturl=7c3ed7",
        remark: "页面需JavaScript加载，建议使用手机浏览器或联通APP打开"
    },
    {
        id: 54,
        operator: "联通",
        province: "安徽省",
        city: "全省",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "安徽联通沃joy活动",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "安徽联通沃joy活动，具体规则需登录页面查看",
        link: "https://huodong.10155.com/h5/hdact4/ahWojoy/#/index?channel=fbcce9691d378caf536b2dd7683f5ff7",
        remark: "限安徽联通用户，页面需完整加载查看详细规则"
    },
    {
        id: 55,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["生活权益"],
        title: "联通星燃权益·每月领生活权益",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "每月3日后可领取星燃权益，含美团外卖红包、奈雪的茶代金券等生活权益",
        link: "https://qy.chinaunicom.cn/mobile-h5/2022/star.html?token=030584aa-f33b-4341-ae6f-6074cd2a9d38&usrs=2",
        remark: "需先订购星燃权益方可领取。美团外卖30元及奈雪的茶30元代金券因供货不足暂时下架，预计7个工作日内恢复"
    },
    {
        id: 56,
        operator: "联通",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["视频会员", "音乐会员", "生活权益"],
        title: "联通权益月月领·热门会员权益免费领",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "每月可在多款权益中任选1个领取，含视频会员、音乐会员、生活权益等。权益领取成功后需在30天内至联通APP-我的-我的礼包-卡券兑换使用",
        link: "https://qy.chinaunicom.cn/mobile-h5/card/temp_cardact.html?id=2000000749789982&createTime=2023-02-04%2016:05:02&couponId=1000000000116605&actId=1000000000549607&channelid=",
        remark: "部分权益每日限量，先到先得；每个自然月仅可领取一次"
    },

    // ============================================================
    //  三、中国电信（10个）
    // ============================================================

    // ----- 57-61：前期搜索 -----
    {
        id: 57,
        operator: "电信",
        province: "广东省",
        city: "全省",
        mainType: "号卡套餐类",
        subType: ["新用户号卡", "赠送流量", "视频会员"],
        title: "电信广东星卡优惠套餐",
        startTime: "2026-07-01",
        endTime: "2026-09-10",
        desc: "大流量星卡套餐，办卡送流量+会员",
        link: "",
        remark: "新用户专享"
    },
    {
        id: 58,
        operator: "电信",
        province: "浙江省",
        city: "全省",
        mainType: "宽带业务",
        subType: ["新装宽带", "宽带提速"],
        title: "浙江电信『万兆进万家』用户体验招募",
        startTime: "2026-05-22",
        endTime: "2026-12-31",
        desc: "每月599元，享10000M云宽带、500GB国内流量、5000分钟语音及手机直连卫星通信等服务",
        link: "",
        remark: "关注'中国电信浙江公司'公众号回复'万兆家庭'参与"
    },
    {
        id: 59,
        operator: "电信",
        province: "甘肃省",
        city: "全省",
        mainType: "宽带业务",
        subType: ["新装宽带", "宽带提速"],
        title: "甘肃电信2000M超高速宽带发布",
        startTime: "2026-05-17",
        endTime: "2026-12-31",
        desc: "正式推出2000M超高速宽带服务，推动全省'全域数字化转型'与'智慧城市'建设",
        link: "",
        remark: "世界电信日发布"
    },
    {
        id: 60,
        operator: "电信",
        province: "全国",
        city: "全国",
        mainType: "号卡套餐类",
        subType: ["新用户号卡"],
        title: "电信校园卡39元/月",
        startTime: "2026-08-01",
        endTime: "2026-09-30",
        desc: "39元/月，含135G通用流量+30G定向流量+100分钟通话",
        link: "",
        remark: "优惠期长期有效，限校园用户"
    },
    {
        id: 61,
        operator: "电信",
        province: "上海市",
        city: "全市",
        mainType: "流量类",
        subType: ["赠送流量"],
        title: "上海电信薅流量攻略合集",
        startTime: "2026-08-15",
        endTime: "2026-12-31",
        desc: "通过电信云宽带APP领10GB、问客服领10GB、沪贝兑换等多种方式获取免费流量",
        link: "",
        remark: "限上海电信用户"
    },

    // ----- 62：25xianbao/28435 -----
    {
        id: 62,
        operator: "电信",
        province: "广东省",
        city: "广州市",
        mainType: "流量类",
        subType: ["赠送流量"],
        title: "广州电信星卡充60送50G流量",
        startTime: "2026-08-20",
        endTime: "2028-08-31",
        desc: "星卡用户充值60元，每月赠送50GB流量，连续赠送24个月。新老星卡用户均可参加，无在网业务限制即可办理",
        link: "https://yaohuo.me/bbs/download.aspx?siteid=1000&classid=177&book_id=1566954&id=934164&RndPath=UploadFiles&n=%e5%85%8560%e9%80%8150g",
        remark: "仅限广州地区星卡用户，其他套餐暂不能参与；如已参加类似活动，两个50G可叠加为100G/月"
    },

    // ----- 63-66：用户提供链接（电信4个）-----
    {
        id: 63,
        operator: "电信",
        province: "广东省",
        city: "全省",
        mainType: "话费充值类",
        subType: ["话费返还"],
        title: "广东电信限时积分兑话费",
        startTime: "2024-04-25",
        endTime: "2028-05-31",
        desc: "每月10号至16号，用户可使用天翼积分兑换话费。兑换选项包括1年、6个月、3个月、1个月等不同周期",
        link: "https://cdn.img.telefen.com/webstatic/fensh/GD/20240425/H5/0425gdhf/H5/H5/index.html",
        remark: "限广东电信用户，需登录天翼积分商城兑换"
    },
    {
        id: 64,
        operator: "电信",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["老用户专享"],
        title: "电信手机直连卫星业务",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "用户可使用支持直连卫星功能的终端，在户外空旷无遮挡处拨打卫星电话。部分省份部分用户需至线下营业厅换卡并完成受理",
        link: "https://wapact.189.cn:9001/mas-pub-ui/spm/newActivity/ACTCODE202308180EDH092V?activityCode=ACTCODE202308180EDH092V&ticket=%24ticket%24&cmpid=jt-wap-wxgzh-zlwx&shopid=189.WAP.yyb-9003",
        remark: "需使用支持直连卫星功能的终端；部分省份需换卡"
    },
    {
        id: 65,
        operator: "电信",
        province: "全国",
        city: "全国",
        mainType: "会员权益类",
        subType: ["生活权益"],
        title: "电信抖音卡权益查询",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "抖音卡用户权益查询与领取页面，具体权益需登录后查看",
        link: "https://lm.189.cn/douyincard/douyincard_logequity.html#/",
        remark: "限电信抖音卡用户"
    },
    {
        id: 66,
        operator: "电信",
        province: "广东省",
        city: "全省",
        mainType: "会员权益类",
        subType: ["视频会员", "生活权益"],
        title: "广东电信超级宠粉日·权益包限时抢",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "办理指定权益包后，每月19.9元，可领取2个加享权益，当月仅可选1个权益领取，每个权益仅可领1次",
        link: "https://gd.189.cn/plus/h5/2022/fansday/index.html?cmpid=qyxs-qs-hdzb-cfhd",
        remark: "限广东电信用户；首月免单板块与9.9秒杀板块不可同时订购"
    },

    // ============================================================
    //  四、中国广电（4个）
    // ============================================================

    // ----- 67-69：前期搜索 -----
    {
        id: 67,
        operator: "广电",
        province: "全国",
        city: "全国",
        mainType: "号卡套餐类",
        subType: ["新用户号卡", "老用户套餐"],
        title: "广电『随心享1.0』按量计费套餐",
        startTime: "2026-08-04",
        endTime: "2026-12-31",
        desc: "月最低消费39元，流量阶梯计费最低0.8元/GB，语音0.12元/分钟，新老用户均可办理",
        link: "",
        remark: "无合约限制，全国可办"
    },
    {
        id: 68,
        operator: "广电",
        province: "云南省",
        city: "曲靖市",
        mainType: "号卡套餐类",
        subType: ["新用户号卡", "赠送流量"],
        title: "曲靖广电『金榜题名』高考生5G号卡福利",
        startTime: "2026-06-11",
        endTime: "2026-08-31",
        desc: "2026届高考生凭准考证+身份证免费领取5G号卡，享28元/月套餐(120G通用+200G专属流量+200分钟通话)",
        link: "",
        remark: "套餐优惠有效期12个月"
    },
    {
        id: 69,
        operator: "广电",
        province: "四川省",
        city: "全省",
        mainType: "合约购机",
        subType: ["购机补贴"],
        title: "四川广电『川流一体机』电视补贴",
        startTime: "2026-08-19",
        endTime: "2026-12-31",
        desc: "签约3年'一体化电视+宽带'融合套餐，立领2000元电视补贴券，可抵扣指定55寸电视购机款",
        link: "",
        remark: "将机顶盒、电视、宽带合并办理"
    },

    // ----- 70：用户提供链接（广电1个）-----
    {
        id: 70,
        operator: "广电",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["充送话费"],
        title: "广电话费充值·多充多赠",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "话费充值多充多赠活动，具体档位及赠费规则需登录页面查看",
        link: "https://m.10099.com.cn/h5recharge/#/?channelId=cd_20220916_293350",
        remark: "页面需JavaScript加载，建议使用手机浏览器打开"
    },
// ============================================================
//  新增活动 71-97（整合数组）
//  可直接追加到已有 activityList 末尾
// ============================================================
    // 71. 扬州移动夜间流量包
    {
        id: 71,
        operator: "移动",
        province: "江苏省",
        city: "扬州市",
        mainType: "流量类",
        subType: ["闲时流量"],
        title: "扬州移动夜间流量包·10元享12GB",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "10元/月享12GB夜间流量，使用时段23:00-次日8:00",
        link: "https://mp.weixin.qq.com/s/zc5azn38EIC3tcaastAGjw",
        remark: "限扬州移动用户，详情以活动页面为准"
    },
    // 72. 绍兴移动夜间流量包
    {
        id: 72,
        operator: "移动",
        province: "浙江省",
        city: "绍兴市",
        mainType: "流量类",
        subType: ["闲时流量"],
        title: "绍兴移动夜间流量包·5元10GB首月半价",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "5元/月享10GB夜间流量，首月直接5折，使用时段23:00-次日8:00",
        link: "https://mp.weixin.qq.com/s/XkavcFcj9k3LzkwB_DQjpw",
        remark: "限绍兴移动用户，首月半价优惠"
    },
    // 73. 惠州移动夜间包月包
    {
        id: 73,
        operator: "移动",
        province: "广东省",
        city: "惠州市",
        mainType: "流量类",
        subType: ["闲时流量"],
        title: "惠州移动夜间包月包·10元20GB",
        startTime: "2025-09-30",
        endTime: "2026-06-30",
        desc: "10元/月享20GB夜间流量（23:00-7:00），有效期12个月，中途可取消。国内通用流量（不含港澳台），不可共享、不可结转",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2174492&productCode=4798904",
        remark: "限惠州移动客户；与20元50GB夜间包互斥；2G/3G不限量、4G随心王、日租型套餐等不可办理"
    },
    // 74. 移动语音月包·100分钟
    {
        id: 74,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["缴费优惠"],
        title: "移动语音月包·100分钟连续包月",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "连续包月，月月省心。每月100分钟国内通话，18元/月",
        link: "https://wx.10086.cn/website/businessPlatform/newCustomShopDetail?personalPageId=2025122609195194902004507",
        remark: "中国移动优惠商城·语音月包，连续包月自动续订"
    },
    // 75. 移动语音月包·300分钟
    {
        id: 75,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["缴费优惠"],
        title: "移动语音月包·300分钟连续包月",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "连续包月，月月省心。每月300分钟国内通话，38元/月",
        link: "https://wx.10086.cn/website/businessPlatform/newCustomShopDetail?personalPageId=2025122609195194902004507",
        remark: "中国移动优惠商城·语音月包，连续包月自动续订"
    },
    // 76. 移动语音月包·1000分钟
    {
        id: 76,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["缴费优惠"],
        title: "移动语音月包·1000分钟连续包月",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "连续包月，月月省心。每月1000分钟国内通话，50元/月",
        link: "https://wx.10086.cn/website/businessPlatform/newCustomShopDetail?personalPageId=2025122609195194902004507",
        remark: "中国移动优惠商城·语音月包，连续包月自动续订"
    },
    // 77. 移动语音短时包·7天100分钟
    {
        id: 77,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["缴费优惠"],
        title: "移动语音短时包·7天100分钟",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "短时应急，到期自动失效。7天有效期内100分钟国内通话，10元",
        link: "https://wx.10086.cn/website/businessPlatform/newCustomShopDetail?personalPageId=2025122609195194902004507",
        remark: "中国移动优惠商城·语音短时包，到期自动失效"
    },
    // 78. 移动语音短时包·30天200分钟
    {
        id: 78,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["缴费优惠"],
        title: "移动语音短时包·30天200分钟",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "短时应急，到期自动失效。30天有效期内200分钟国内通话，20元",
        link: "https://wx.10086.cn/website/businessPlatform/newCustomShopDetail?personalPageId=2025122609195194902004507",
        remark: "中国移动优惠商城·语音短时包，到期自动失效"
    },
    // 79. 惠州移动通勤流量特惠包·10元20GB
    {
        id: 79,
        operator: "移动",
        province: "广东省",
        city: "惠州市",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "惠州移动通勤流量特惠包·10元20GB",
        startTime: "2025-09-30",
        endTime: "2026-06-30",
        desc: "10元/月享20GB国内通用流量（不含港澳台），限特定时段使用：7:00-10:00、17:00-20:00。有效期12个月，到期自动失效，中途可取消",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2174493&productCode=15719725&secondChannel=40016_hzxq",
        remark: "限惠州移动客户；与20元50GB档互斥；2G/3G不限量、4G随心王、日租型套餐等不可办理；流量不可共享、不可结转"
    },
    // 80. 惠州移动通勤流量特惠包·20元50GB
    {
        id: 80,
        operator: "移动",
        province: "广东省",
        city: "惠州市",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "惠州移动通勤流量特惠包·20元50GB",
        startTime: "2025-09-30",
        endTime: "2026-06-30",
        desc: "20元/月享50GB国内通用流量（不含港澳台），限特定时段使用：7:00-10:00、17:00-20:00。有效期12个月，到期自动失效，中途可取消",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2174493&productCode=15719725&secondChannel=40016_hzxq",
        remark: "限惠州移动客户；与10元20GB档互斥；2G/3G不限量、4G随心王、日租型套餐等不可办理；流量不可共享、不可结转"
    },
    // 81. 广东移动周末流量包·30元50GB
    {
        id: 81,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "广东移动周末流量包·30元50GB",
        startTime: "2026-08-20",
        endTime: "2026-09-30",
        desc: "30元/月享50GB国内通用流量（不含港澳台），限周末使用（每周六0点至周日24点）。优惠期6个月，到期自动失效，加享流量使用情况语音提醒免打扰服务",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2174496&productCode=2206580&secondChannel=40016_hz",
        remark: "限在网6个月及以上广东移动客户；2G/3G不限量、4G随心王、日租型套餐等不可办理"
    },
    // 82. 广东移动周末流量包·50元100GB
    {
        id: 82,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "广东移动周末流量包·50元100GB",
        startTime: "2026-08-20",
        endTime: "2026-09-30",
        desc: "50元/月享100GB国内通用流量（不含港澳台），限周末使用（每周六0点至周日24点）。优惠期6个月，到期自动失效，加享流量使用情况语音提醒免打扰服务",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2174496&productCode=2206580&secondChannel=40016_hz",
        remark: "限在网6个月及以上广东移动客户；2G/3G不限量、4G随心王、日租型套餐等不可办理"
    },
    // 83. 广东移动夜间流量包·10元20GB
    {
        id: 83,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["闲时流量"],
        title: "广东移动夜间流量包·10元20GB",
        startTime: "2026-08-20",
        endTime: "2026-09-30",
        desc: "10元/月享20GB国内通用流量（不含港澳台），限夜间使用（23:00-7:00）。有效期12个月，到期自动失效，加享流量使用情况语音提醒免打扰服务",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2171312&productCode=4096292&secondChannel=40016_mz",
        remark: "限在网6个月及以上广东移动客户；与20元50GB档互斥；2G/3G不限量、4G随心王、日租型套餐等不可办理；流量不可共享、不可结转"
    },
    // 84. 广东移动夜间流量包·20元50GB
    {
        id: 84,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["闲时流量"],
        title: "广东移动夜间流量包·20元50GB",
        startTime: "2026-08-20",
        endTime: "2026-09-30",
        desc: "20元/月享50GB国内通用流量（不含港澳台），限夜间使用（23:00-7:00）。有效期12个月，到期自动失效，加享流量使用情况语音提醒免打扰服务",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2171312&productCode=4096292&secondChannel=40016_mz",
        remark: "限在网6个月及以上广东移动客户；与10元20GB档互斥；2G/3G不限量、4G随心王、日租型套餐等不可办理；流量不可共享、不可结转"
    },
    // 85. 梅州移动流量特惠月包·20元10GB
    {
        id: 85,
        operator: "移动",
        province: "广东省",
        city: "梅州市",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "梅州移动流量特惠月包·20元10GB",
        startTime: "2025-12-26",
        endTime: "2026-12-31",
        desc: "20元/月享10GB国内通用流量（不含港澳台）。订购立即生效，有效期2年，到期自动续展（每次续展2年），期间可随时取消",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2177041&productCode=258441&secondChannel=40016_mzdx",
        remark: "限19元及以上套餐的广东移动客户；与2G/3G不限量套餐、懒人套餐等互斥；不享受流量不清零服务；中途取消已扣费用不退"
    },
    // 86. 江西移动“无敌翻”
    {
        id: 86,
        operator: "移动",
        province: "江西省",
        city: "全省",
        mainType: "流量类",
        subType: ["赠送流量"],
        title: "江西移动“无敌翻”·用流量得流量",
        startTime: "2026-08-03",
        endTime: "2026-09-30",
        desc: "当月使用流量满15GB，可领15GB流量奖励。加速秘籍：①办业务加速5%/笔（最高6笔）；②邀好友加速5%/人（每月最多5人）；③办网龄流量回馈加速100%。另有“用流量得AI豆”任务，解锁后用尽50GB流量得100专属AI豆",
        link: "https://wap.jx.10086.cn/hui/release/activity/wudi/index.html?supSpeedShareId=S2026080309155137550454889644040",
        remark: "限江西移动用户；需在中国移动APP内打开；任务进度达100%可领取15GB流量奖励"
    },
    // 87. 宜春移动夜享流量包·9.9元100GB
    {
        id: 87,
        operator: "移动",
        province: "江西省",
        city: "宜春市",
        mainType: "流量类",
        subType: ["闲时流量"],
        title: "宜春移动夜享流量包·9.9元100GB",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "9.9元/月享100GB夜间专属流量，使用时段23:00-8:00。流量使用优先级高，夜间网速更流畅。加送咪咕短剧体验包（10部精选短剧）",
        link: "https://wap.jx.10086.cn/codeStore/qrCode/getHuiQrCodeUrl?qrCodeId=1780301976110404",
        remark: "限宜春移动用户；需扫码办理（仅支持微信和集团APP扫码）"
    },
    // 88. 广东移动通勤流量包·10元20GB
    {
        id: 88,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "广东移动通勤流量包·10元20GB",
        startTime: "2026-06-26",
        endTime: "2026-09-30",
        desc: "10元/月享20GB国内通用流量（不含港澳台），限特定时段使用：7:00-10:00、17:00-20:00。有效期12个月，到期自动失效，中途可取消。加享流量使用情况语音提醒免打扰服务",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2171309&productCode=15479965&secondChannel=40016_zq",
        remark: "限在网6个月及以上广东移动客户；与20元50GB档互斥；2G/3G不限量、4G随心王、日租型套餐等不可办理；流量不可共享、不可结转"
    },
    // 89. 广东移动通勤流量包·20元50GB
    {
        id: 89,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "广东移动通勤流量包·20元50GB",
        startTime: "2026-06-26",
        endTime: "2026-09-30",
        desc: "20元/月享50GB国内通用流量（不含港澳台），限特定时段使用：7:00-10:00、17:00-20:00。有效期12个月，到期自动失效，中途可取消。加享流量使用情况语音提醒免打扰服务",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2171309&productCode=15479965&secondChannel=40016_zq",
        remark: "限在网6个月及以上广东移动客户；与10元20GB档互斥；2G/3G不限量、4G随心王、日租型套餐等不可办理；流量不可共享、不可结转"
    },
    // 90. 肇庆移动551省内亲情网
    {
        id: 90,
        operator: "移动",
        province: "广东省",
        city: "肇庆市",
        mainType: "其他活动",
        subType: ["老用户专享"],
        title: "肇庆移动551省内亲情网·家人互打免费",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "组建省内亲情网，成员间省内通话畅打（不含港澳台），支持551-569三位短号互拨。主号可添加18个省内移动号码为亲情号",
        link: "https://wap.gd.10086.cn/ech/h5/networkVP/#/",
        remark: "限肇庆移动用户；主号需在24小时内回复确认同意方可加入"
    },
    // 91. 广东移动5元5GB通用流量日包
    {
        id: 91,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "广东移动5元5GB通用流量日包",
        startTime: "2026-06-26",
        endTime: "2026-09-30",
        desc: "5元享5GB国内通用流量（不含港澳台），有效期24小时。加享流量使用情况语音提醒免打扰服务。每个自然月最多可订购5次",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2171315&productCode=7434051&secondChannel=40016_yj",
        remark: "限广东移动客户；2G/3G不限量、4G随心卡、和多多、一卡双号、万能副卡等不可办理；流量不可共享、不可结转；中途取消已扣费用不退"
    },
    // 92. 广东移动10元10GB（3天）特惠包
    {
        id: 92,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "广东移动10元10GB（3天）特惠包",
        startTime: "2026-06-26",
        endTime: "2026-09-30",
        desc: "10元享10GB国内通用流量（不含港澳台），有效期3天。一次性订购产品，使用完毕或到期自动失效",
        link: "https://wx.10086.cn/website/businessPlatform/customShopDetail?personalPageId=200012504&secondChannel=40016_yj",
        remark: "限广东移动用户；2G/3G不限量套餐、4G随心王套餐、日租型套餐等不可办理；中途取消已扣费用不退"
    },
    // 93. 广东移动19.99元20GB（7天）特惠包
    {
        id: 93,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "广东移动19.99元20GB（7天）特惠包",
        startTime: "2026-06-26",
        endTime: "2026-09-30",
        desc: "19.99元享20GB国内通用流量（不含港澳台），有效期7天。一次性订购产品，使用完毕或到期自动失效。每个自然月周期内可办理2次",
        link: "https://wx.10086.cn/website/businessPlatform/customShopDetail?personalPageId=200012513&secondChannel=40016_yj",
        remark: "限广东移动用户；2G/3G不限量套餐、4G随心王套餐、万能副卡等不可办理；中途取消已扣费用不退；品牌转换期间不能参与"
    },
    // 94. 广东移动30元100GB（7天）欢享包
    {
        id: 94,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "广东移动30元100GB（7天）欢享包",
        startTime: "2026-06-26",
        endTime: "2026-09-30",
        desc: "30元享100GB国内通用流量（不含港澳台），有效期7天。加享流量使用情况语音提醒免打扰服务。成功办理后可领取移动云盘观影券",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2141659&productCode=7731531&secondChannel=40016_yj",
        remark: "限在广东省内的广东移动用户；每月只能办理1次（按月结周期）；流量可共享给万能副卡、极光宽带等副卡使用，不可转赠、不享受流量不清零服务"
    },
    // 95. 佛山移动3元100GB（4小时）极速流量包
    {
        id: 95,
        operator: "移动",
        province: "广东省",
        city: "佛山市",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "佛山移动3元100GB（4小时）极速流量包",
        startTime: "2026-06-25",
        endTime: "2026-12-31",
        desc: "3元享100GB国内通用流量（不含港澳台），有效期4小时。一次性订购产品，使用完毕或到期自动失效，不可退订",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2164864&productCode=3138132",
        remark: "限在广东省内的佛山移动用户；每月限办2次；2G/3G不限量、4G随心王需取消后方可办理；品牌转换期间不能参与"
    },
    // 96. 佛山移动10元5GB（7天）流量包
    {
        id: 96,
        operator: "移动",
        province: "广东省",
        city: "佛山市",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "佛山移动10元5GB（7天）流量包",
        startTime: "2026-06-25",
        endTime: "2026-12-31",
        desc: "10元享5GB国内通用流量（不含港澳台），有效期7天。一次性订购产品，使用完毕或到期自动失效，不可退订",
        link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2164864&productCode=3138132",
        remark: "限在广东省内的佛山移动用户；每月限办2次；2G/3G不限量、4G随心王需取消后方可办理；品牌转换期间不能参与"
    },
    // 97. 肇庆移动2元100GB（4小时）极速流量包
    {
        id: 97,
        operator: "移动",
        province: "广东省",
        city: "肇庆市",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "肇庆移动2元100GB（4小时）极速流量包",
        startTime: "2026-08-20",
        endTime: "2026-12-31",
        desc: "2元享100GB国内通用流量（不含港澳台），有效期4小时。一次性订购产品，使用完毕或到期自动失效",
        link: "https://wap.gd.10086.cn/ech/h5/single-page/index.html?id=1ffdfc35273f42eb8e0472aa4c7d6e35#",
        remark: "限肇庆移动用户；2G/3G不限量套餐、万能副卡、和多号、日租卡类、随心王类等不可办理；流量不可共享、不可转赠、不享受流量不清零服务"
    },
// ============================================================
//  新增活动 98-109（可直接追加至 activityList 末尾）
// ============================================================

// 98. 广东移动30元100GB（4小时）流量包·3元体验价
{
    id: 98,
    operator: "移动",
    province: "广东省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "广东移动30元100GB（4小时）流量包·3元体验",
    startTime: "2026-08-20",
    endTime: "2026-09-30",
    desc: "3元体验价享100GB国内通用流量（不含港澳台），有效期4小时。一次性扣费产品，流量用完或4小时后自动失效。加享流量使用情况语音提醒免打扰服务",
    link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2180683&productCode=14002075&secondChannel=40016_cz",
    remark: "限广东移动客户；原价30元，限时体验价3元；流量生效期内只能办理1次；2G/3G不限量、4G随心卡、日租型套餐等不可办理；品牌转换期间不能参与；流量不可转赠、不可共享、不享受不清零"
},
// 99. 移动绿色充值通道
{
    id: 99,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "话费充值类",
    subType: ["充值立减"],
    title: "移动绿色充值通道·话费充值",
    startTime: "2026-08-21",
    endTime: "2026-12-31",
    desc: "中国移动绿色充值通道，可通过页面或前往APP进行话费充值",
    link: "http://touch.10086.cn/i/mobile/greentip.html",
    remark: "页面仅显示'立即充值 前往APP充值'，具体优惠以APP内为准"
},
// 100. 动感地带潮玩包·15元版
{
    id: 100,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["视频会员", "音乐会员", "赠送流量"],
    title: "动感地带潮玩包·15元/月（30岁以下专享）",
    startTime: "2026-08-21",
    endTime: "2026-12-31",
    desc: "15元/月含10GB全国通用流量+100分钟5G新通话，每月可参与盲盒抽奖（含15GB/30GB定向流量、移动云盘黄金会员月卡、咪咕视频会员月卡）。有效期3年，自动续展",
    link: "https://dev.coc.10086.cn/coc/canvas/package-h5-canvas/online/dgddcwb15y?pageId=1630762785986191360&channelId=P00000058450",
    remark: "限中国移动30岁以下用户办理；福建、江西、新疆、广西、湖南用户暂不支持；与25元版互斥"
},
// 101. 动感地带潮玩包·25元版
{
    id: 101,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["视频会员", "音乐会员", "赠送流量"],
    title: "动感地带潮玩包·25元/月（30岁以下专享）",
    startTime: "2026-08-21",
    endTime: "2026-12-31",
    desc: "25元/月含20GB全国通用流量+200分钟5G新通话，每月可参与盲盒抽奖（含15GB/30GB定向流量、移动云盘黄金会员月卡、咪咕视频会员月卡）。有效期3年，自动续展",
    link: "https://dev.coc.10086.cn/coc/canvas/package-h5-canvas/online/dgddcwb25y?pageId=1630773920493191168&channelId=P00000058450",
    remark: "限中国移动30岁以下用户办理；福建、江西、新疆、广西、湖南用户暂不支持；与15元版互斥"
},
// 102. 移动数字生活特权包（0元）
{
    id: 102,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["视频会员", "音乐会员", "网盘会员", "生活权益"],
    title: "移动数字生活特权包·0元享多款会员权益",
    startTime: "2026-08-21",
    endTime: "2026-12-31",
    desc: "0元/月，含视频彩铃基础功能、防诈骗来电号码提醒、移动云盘40GB存储体验、云手机专业版每月1日体验、咪咕视频钻石会员每月2日体验、咪咕阅读畅读每月2日体验、咪咕音乐白金会员每月2日体验、咪咕快游每月2小时体验。有效期3年，自动续展",
    link: "https://dev.coc.10086.cn/coc/web2/numericalLiving/?channelId=P00000007738&pageId=1672768668882481152",
    remark: "2G/3G不限量套餐、4G随心王等客户无法办理；部分权益需主动领取，当月有效，漏领不补"
},
// 103. 移动数字生活特权包（备用链接）
{
    id: 103,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["视频会员", "音乐会员", "网盘会员", "生活权益"],
    title: "移动数字生活特权包·0元享多款会员权益",
    startTime: "2026-08-21",
    endTime: "2026-12-31",
    desc: "0元/月，含视频彩铃基础功能、防诈骗来电号码提醒、移动云盘40GB存储体验、云手机专业版每月1日体验、咪咕视频钻石会员每月2日体验、咪咕阅读畅读每月2日体验、咪咕音乐白金会员每月2日体验、咪咕快游每月2小时体验。有效期3年，自动续展",
    link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2133510&productCode=15379866&fromRecommend=3&pageSource=100&pageid=af6f61fe725d43fe9059058f739224b4&shopP=",
    remark: "与102号为同一活动不同入口，二选一保留即可"
},
// 104. 广东移动流量专区·短时/夜间/语音包汇总
{
    id: 104,
    operator: "移动",
    province: "广东省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量", "闲时流量"],
    title: "广东移动流量专区·短时/夜间/语音包汇总",
    startTime: "2026-08-21",
    endTime: "2026-12-31",
    desc: "流量专区聚合页，含多款短时流量包：100GB/4小时（3元/12元）、1GB/24小时（3元）、2GB/24小时（5元）、5GB/7天（10元）、10GB/3天（10元）、10GB/3天（19元）、20GB/7天（19.99元）；夜间流量包：20GB/月（10元）；语音包低至0.034元/分钟",
    link: "https://wx.10086.cn/website/businessPlatform/activity/flowIndexNew",
    remark: "限广东移动用户；短时流量包一次性订购，到期自动失效；具体规则以办理页面为准"
},
// 105. 广东移动开学季大转盘
{
    id: 105,
    operator: "移动",
    province: "广东省",
    city: "全省",
    mainType: "其他活动",
    subType: ["抽奖活动"],
    title: "广东移动开学季大转盘·赢100元话费/50元京东卡",
    startTime: "2026-08-21",
    endTime: "2026-09-20",
    desc: "大转盘抽奖，奖品含100元话费、50元京东卡、1GB/2GB/3GB流量券、5-15元话费券等。卡券需于2026年9月20日前前往中国移动APP领取使用",
    link: "https://wap.gd.10086.cn/ech/h5/rotary-activity/index.html#/?actId=MjA3ODAxOTI1NTU3MjQ5MjI4OA%3D%3D&WT.ac_id=qd_zgydappsytc",
    remark: "限广东移动用户；需登录广东移动号码参与；卡券有效期至2026年9月20日，需在APP内领取"
},
// 106. 江门移动10分满意大转盘
{
    id: 106,
    operator: "移动",
    province: "广东省",
    city: "江门市",
    mainType: "其他活动",
    subType: ["抽奖活动"],
    title: "江门移动10分满意大转盘·赢10元话费/10GB流量",
    startTime: "2026-08-10",
    endTime: "2026-08-31",
    desc: "大转盘抽奖，奖品含5元/10元话费券、5GB（30天有效）、10GB（7天有效）国内通用流量包。话费券中奖当月APP领取后生效；流量包APP领取后激活生效。每个用户每月仅限参与1次，数量有限，先到先得",
    link: "https://gd.10086.cn/apph5/openapi/static/luckyWheel/index.html?activityId=0807115730avSd",
    remark: "限江门移动受邀客户；每月开展（8月10-31日、9月1-30日）；每月奖品设置：5GB/10GB流量各5000份、5元话费2000份、10元话费1000份"
},
// 107. 珠海移动周三大转盘
{
    id: 107,
    operator: "移动",
    province: "广东省",
    city: "珠海市",
    mainType: "其他活动",
    subType: ["抽奖活动"],
    title: "珠海移动周三大转盘·抽1GB流量",
    startTime: "2026-08-19",
    endTime: "2026-08-21",
    desc: "大转盘抽奖，奖品含1GB（1天）心意流量包等。每个用户活动期间限参与1次",
    link: "https://wap.gd.10086.cn/ech/h5/big-turntable-new/index.html?actId=0a99cb3a57294d1da27e198d1eaf6057#",
    remark: "限珠海移动客户；2G/3G不限量套餐、4G随心王、多号通副号、一卡双号副号、万能副卡等附属号码不可参与；集团代付/对公托收客户不可参与"
},
// 108. 咪咕视频“冰爽移夏”打卡活动
{
    id: 108,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["签到", "领取福利"],
    title: "咪咕视频“冰爽移夏”·打卡领实物/随机领话费流量",
    startTime: "2026-07-31",
    endTime: "2026-08-31",
    desc: "中国移动用户每日打卡可领好礼：会员用户累计打卡10天领小黄人洞洞杯；非会员累计打卡18天领定制编织手提袋。另有“夏日补给站”随机福利：100元话费、10GB/2GB流量等，每月限1次，领取后需前往中国移动APP-我的-卡券激活使用",
    link: "https://m.miguvideo.com/mgs/promotion/provincevml/prd/index.html?pageId=e0fa9f12a77b471c9cdbb7a439b86679&needLazyimg=0&sharefrom=miguvideoapp&pwId=204fd3571d294b6b8d881d3f78ecaa59",
    remark: "限中国移动用户（不含港澳台）；打卡活动8月1日-31日开展，单用户每月仅限领取1种奖品；定制编织手提袋共500份，先到先得"
},
// 109. 校园打榜·芒果TV联合活动
{
    id: 109,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["领取福利"],
    title: "校园打榜·芒果TV联合活动",
    startTime: "2026-08-21",
    endTime: "2026-09-30",
    desc: "中国移动与芒果TV联合校园打榜活动，具体规则需登录页面查看",
    link: "https://h5.mgtv.com/2026/h5/6a6c562aeb326915818ca11a/?sid=ydgs",
    remark: "需登录芒果TV账号参与；具体活动内容以页面为准"
}    
];

// ============================================================
//  暴露给全局（供 HTML 中的活动工具箱读取）
// ============================================================
window.mainTypeEnum = mainTypeEnum;
window.subTypeMap = subTypeMap;
window.activityList = activityList;