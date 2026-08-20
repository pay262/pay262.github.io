// ============================================================
//  activity-data.js  —  运营商活动数据配置
//  修改此文件即可增删改活动，无需改动 HTML
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
    "其他活动": ["抽奖活动", "签到", "老用户专享", "新用户专享"]
};

// ============================================================
//  ★★★ 活动数据列表（增删改在这里操作） ★★★
//  字段说明：
//    operator   : 运营商（移动/联通/电信/广电）
//    province   : 省份（如"全国"、"广东省"）
//    city       : 城市（如"全国"、"广州市"）
//    mainType   : 主大类，必须与 mainTypeEnum 中的 value 一致
//    subType    : 细分标签，可以是字符串或数组（支持多个标签）
//    title      : 活动标题
//    startTime  : 开始日期 (YYYY-MM-DD)
//    endTime    : 结束日期 (YYYY-MM-DD)
//    desc       : 活动描述
//    link       : 活动链接（可选，留空则不显示）
//    remark     : 备注说明（可选）
// ============================================================
const activityList = [
    // ============================================================
    //  一、中国移动（22个）
    // ============================================================

    // ----- 每日/每周固定活动 -----
    {
        id: 1,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["抽奖活动"],
        title: "移动游戏中心每日抽奖",
        startTime: "2026-08-01",
        endTime: "2026-10-31",
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
        endTime: "2026-12-31",
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
        endTime: "2026-10-31",
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
        endTime: "2099-12-31",
        desc: "中国移动APP-我的-签到，领随机话费/流量；完成任务领心愿金，可兑0.5元、1元、1.5元、2元话费券，每日8点补库存",
        link: "https://h.app.coc.10086.cn/activity/zx/transit/transferDownload.html?targetURL=https%3A%2F%2Fwx.10086.cn%2Fqwhdhub%2Fqwhdmark%2F1021122301",
        remark: "每日8点补库存，建议准时领取"
    },

    // ----- 每周固定福利 -----
    {
        id: 7,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["充值立减"],
        title: "移动周三充值日",
        startTime: "2026-08-01",
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
        desc: "每月中国移动×支付宝双V会员用户可领1GB通用流量",
        link: "https://caiyun.feixin.10086.cn:7071/portal/clientDL/index.html?v=mCloud_89844221919&linkUrl=https%3A%2F%2Fvv.mmarket.com%2Fvv-hcy%2Findex.html%3FtargetSourceId%3D001205%26token%3D%23ssoToken%23%26scode%3Dhecaiyun%26sourceId%3Dhcy-cmic_llrwytc",
        remark: "限双V会员，无法跳转可通过浏览器或分享至微信打开"
    },

    // ----- 长期活动 -----
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
        endTime: "2026-10-31",
        desc: "每月登录页面可免费抽奖，赢1GB/2GB流量日包券或最高9元/4元/2元话费加赠券",
        link: "https://wx.10086.cn/qwhdhub/leadin/1026033134?A_C_CODE=Fi11gwHIcu&channelId=P00000111791#/",
        remark: "移动×闲鱼联合活动，每月可参与"
    },

    // ----- 截图提取的10个活动（去重后新增） -----
    {
        id: 13,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["签到"],
        title: "移动『幸运三日签』签到领好礼",
        startTime: "2026-08-01",
        endTime: "2026-09-30",
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
        endTime: "2026-09-30",
        desc: "大转盘抽奖，奖品含2GB/500MB流量日包，5元/10元话费加赠券",
        link: "https://dev.coc.10086.cn/coc3/canvas/rightsmarket-h5-canvas/online/zyppy?activeTab140483=1&channelCode=P00000104637&extendID=wechat&extentID=wechat&pageRecorded=true",
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
        endTime: "2026-09-30",
        desc: "刮奖可得2GB/10GB/500MB流量日包，5元/100元话费券",
        link: "https://dev.coc.10086.cn/coc3/canvas/rightsmarket-h5-canvas/online/26hlyyltybld?channelCode=P00000112149&pageRecorded=true",
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
        endTime: "2026-08-30",
        desc: "领2GB流量日包或30GB悦看定向流量；抽奖可得100元/5元/3元话费加赠券",
        link: "https://n.cmread.com/nap/p/yksxlhlhl.jsp?z=1&cm=D0022782",
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
        endTime: "2026-10-31",
        desc: "摇奖得2GB/500MB流量日包，100元/5元话费加赠券，天猫满减券",
        link: "https://dev.coc.10086.cn/coc3/canvas/rightsmarket-h5-canvas/online/yidongaini?channelCode=P00000112150&pageRecorded=true",
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
        link: "https://wx.10086.cn/website/bind/bindAccount/new?redirectSource=SSO_YQS&redirectUrl=https%3A%2F%2Fwx.10086.cn%2Fqwhdsso%2Fredirect%3Fsid%3DQWHDSSOD20260803T141853073DU1026050700Hnw95cR721909&activityId=1026050700&activityName=%E6%98%A5%E5%A4%8F%E7%84%95%E6%96%B0+%E7%A7%BB%E5%8A%A8%E6%9C%89%E7%A4%BC#/",
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
        link: "https://wx.10086.cn/wxpullapp/hzapp/activityalias/zx/transit/transferDownload.html?targetURL=https%3A%2F%2Fwx.10086.cn%2Fqwhdhub%2Fdiy-client%2F1126021706",
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
        endTime: "2026-09-30",
        desc: "领2元/5元话费优惠券，满20元可用",
        link: "https://ump.cmpay.com/front-msa/maktcfgh5/externalChannels?by=xz&jrnNo=ACT0690HFKH2025&ruleId=TQJN8921",
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
        endTime: "2026-12-31",
        desc: "每日签到/做任务领话费豆，可兑换1元/2元/3元话费满减券",
        link: "https://p.10086.cn/waph5/single/callHebao?TAGPAG=5360&MERCSIGN=xxQ6JfBE8fMB2ug9bXFIwN6opm83e2o4",
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
        endTime: "2026-09-30",
        desc: "抽奖得1元/2元/10元/88元话费兑换券，100MB/200MB/1GB流量日包",
        link: "https://dev.coc.10086.cn/coc3/canvas/rightsmarket-h5-canvas/online/ydyhl?channelCode=P00000145029&pageRecorded=true",
        remark: "消耗和包豆参与"
    },

    // ============================================================
    //  二、中国联通（4个）
    // ============================================================
    {
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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

    // ============================================================
    //  三、中国电信（5个）
    // ============================================================
    {
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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

    // ============================================================
    //  四、中国广电（3个）
    // ============================================================
    {
        id: 32,
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
        id: 33,
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
        id: 34,
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
    }
];
// ============================================================
//  暴露给全局（供 HTML 中的活动工具箱读取）
// ============================================================
window.mainTypeEnum = mainTypeEnum;
window.subTypeMap = subTypeMap;
window.activityList = activityList;