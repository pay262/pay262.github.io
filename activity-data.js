// ============================================================
//  📋 未来福利社 · 活动数据规范手册
//  ============================================================
//  版本：v2.0
//  更新：2026-08-31
//  说明：所有活动数据按此规范填写，新增字段请同步更新本文档
// ============================================================

// ┌─────────────────────────────────────────────────────────────┐
// │  一、活动对象字段说明                                      │
// └─────────────────────────────────────────────────────────────┘

/**
 * 完整字段示例
 * {
 *     id: 10001,                    // 必填 · 唯一标识，建议用递增数字
 *     operator: "移动",             // 必填 · 品牌名称，需与 getOpClass 映射匹配
 *     province: "全国",             // 必填 · 省份，显示在卡片「地区」标签
 *     city: "全国",                 // 必填 · 城市，与 province 拼接显示
 *     mainType: "流量类",           // 必填 · 主分类，需与 mainTypeEnum 匹配
 *     subType: ["定向流量"],        // 必填 · 细分标签，数组或字符串，需与 subTypeMap 匹配
 *     title: "移动云盘0元30GB定向流量",  // 必填 · 活动标题，建议 15 字以内
 *     startTime: "2022-01-01",      // 必填 · 开始日期，格式 YYYY-MM-DD
 *     endTime: "2029-12-31",        // 必填 · 结束日期，格式 YYYY-MM-DD（过期后自动隐藏）
 *     desc: "0元/月领30GB...",      // 必填 · 活动描述，建议 30-80 字
 *     remark: "限中国移动用户...",  // 选填 · 备注，显示在卡片底部（橙色文字）
 *     link: "https://xxx.com",      // 选填 · 跳转链接（与 qrCode 二选一）
 *     qrCode: "qrcodes/xxx.png",    // 选填 · 二维码图片（与 link 二选一，优先级更高）
 *     canShare: true,               // 选填 · 是否显示「分享赚佣金」按钮，默认 false
 *     isAd: false,                  // 选填 · 是否为推荐卡片，默认 false
 *     isTop: false,                 // 选填 · 是否置顶（金色边框），默认 false
 *     needWechat: false             // 选填 · 是否需要添加客服（仅 isAd: true 时生效）
 * }
 */

// ┌─────────────────────────────────────────────────────────────┐
// │  二、二维码图片使用方法（qrCode）                         │
// └─────────────────────────────────────────────────────────────┘

/**
 * 支持三种格式：
 * 
 * 1. 在线生成 API（推荐测试用）
 *    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://xxx.com"
 * 
 * 2. 本地图片（推荐正式使用）
 *    qrCode: "qrcodes/activity_001.png"
 *    图片建议：300x300px，PNG 格式，放在 /qrcodes/ 目录下
 * 
 * 3. CDN 图片
 *    qrCode: "https://cdn.example.com/qrcodes/baidu_svip.png"
 * 
 * ⚠️ 注意：qrCode 优先级高于 link，同时存在时只显示二维码按钮
 */

// ┌─────────────────────────────────────────────────────────────┐
// │  三、跳转链接使用方法（link）                             │
// └─────────────────────────────────────────────────────────────┘

/**
 * 适用场景：活动有直接可访问的 H5 页面
 * 
 * link: "https://dev.coc.10086.cn/coc/web2/trendyAiPackage/"
 * 
 * ⚠️ 注意：部分运营商链接需要登录或特定 User-Agent，建议在微信/APP 内测试
 */

// ┌─────────────────────────────────────────────────────────────┐
// │  四、置顶功能使用方法（isTop）                            │
// └─────────────────────────────────────────────────────────────┘

/**
 * 适用场景：付费推广、限时重点活动
 * 
 * isTop: true
 * 
 * 效果：
 * - 卡片左边框变为橙色（#ff6b00）
 * - 卡片背景变为浅橙色（#fff7f0）
 * - 显示「⭐ 置顶」标签
 * 
 * ⚠️ 注意：置顶卡片在列表中排序靠前，但分页逻辑不变
 */

// ┌─────────────────────────────────────────────────────────────┐
// │  五、推荐卡片使用方法（isAd + needWechat）                │
// └─────────────────────────────────────────────────────────────┘

/**
 * 适用场景：私域引流、活动推广
 * 
 * isAd: true
 * needWechat: true   // 显示「添加客服领取」按钮
 * needWechat: false  // 显示「立即参与」按钮（跳转号卡套餐）
 * 
 * 效果：
 * - 卡片左边框变为金色（#f59e0b）
 * - 卡片背景变为浅金色（#fffbeb）
 * - 显示「📢 推荐」标签
 * 
 * ⚠️ 注意：推荐卡片不受运营商/省份/细分标签筛选影响
 */

// ┌─────────────────────────────────────────────────────────────┐
// │  六、分享赚佣金使用方法（canShare）                       │
// └─────────────────────────────────────────────────────────────┘

/**
 * 适用场景：可裂变传播的活动
 * 
 * canShare: true
 * 
 * 效果：
 * - 卡片显示「💰 分享赚佣金」标签
 * - 卡片底部显示「💰 分享赚佣金」按钮
 * - 点击后复制活动链接/系统分享
 * 
 * ⚠️ 注意：分享链接自动附带随机 ref 参数，可用于统计来源
 */

// ┌─────────────────────────────────────────────────────────────┐
// │  七、品牌映射表（operator → CSS 颜色）                    │
// └─────────────────────────────────────────────────────────────┘

/**
 * operator 字段值必须与以下映射匹配，否则显示为「其他」（紫色）
 * 
 * 运营商：移动、联通、电信、广电
 * 银行：  银行
 * 互联网：百度、阿里、京东、腾讯、拼多多
 * 生活：  美团、滴滴、饿了么
 * 
 * 如需新增品牌，需同步修改：
 * 1. getOpClass() 函数（JS 映射）
 * 2. CSS 样式（.at-badge.op-新品牌 { background: #颜色; }）
 */

// ┌─────────────────────────────────────────────────────────────┐
// │  八、分类与标签匹配表（mainType → subType）               │
// └─────────────────────────────────────────────────────────────┘

/**
 * ⚠️ 以下分类与 subTypeMap 完全同步，新增活动时请严格对照填写
 * 
 * mainType（主分类）         subType（细分标签）
 * ─────────────────────────────────────────────────────────────
 * 流量类                     全国通用流量、定向流量、闲时流量、
 *                           流量叠加包、赠送流量
 * 
 * 话费充值类                 充值立减、充送话费、话费返还、
 *                           缴费优惠、支付立减
 * 
 * 会员权益类                 视频会员、音乐会员、网盘会员、
 *                           出行券、生活权益
 * 
 * 号卡套餐类                 新用户号卡、老用户套餐、副卡、
 *                           亲情号
 * 
 * 宽带业务                   新装宽带、宽带提速、宽带续费、
 *                           IPTV
 * 
 * 其他活动                   抽奖活动、签到、新用户专享、
 *                           老用户专享、领取福利、合约机、
 *                           购机补贴
 * 
 * ─────────────────────────────────────────────────────────────
 * 注意：subType 支持数组格式，如 ["视频会员", "生活权益"]
 *      多个标签可同时显示在卡片上
 */
// ┌─────────────────────────────────────────────────────────────┐
// │  九、快速创建模板                                          │
// └─────────────────────────────────────────────────────────────┘

/*
// ----- 模板1：普通活动（链接跳转） -----
{
    id: 0,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "活动标题",
    startTime: "2026-01-01",
    endTime: "2026-12-31",
    desc: "活动描述",
    remark: "备注",
    link: "https://xxx.com",
    canShare: false
},

// ----- 模板2：二维码活动 -----
{
    id: 0,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["视频会员"],
    title: "活动标题",
    startTime: "2026-01-01",
    endTime: "2026-12-31",
    desc: "活动描述",
    remark: "备注",
    qrCode: "qrcodes/xxx.png",    // ← 使用 qrCode
    canShare: true
},

// ----- 模板3：推荐卡片 -----
{
    id: 0,
    operator: "推荐",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["领取福利"],
    title: "🔥 限时福利：免费领流量",
    startTime: "2026-01-01",
    endTime: "2026-12-31",
    desc: "扫码添加客服，回复「福利」立即领取",
    remark: "添加客服即可领取",
    isAd: true,
    needWechat: true
},

// ----- 模板4：置顶活动 -----
{
    id: 0,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "🔥 爆款：移动19元80G流量卡",
    startTime: "2026-01-01",
    endTime: "2026-12-31",
    desc: "限时特惠，手慢无",
    remark: "仅限新用户",
    link: "https://xxx.com",
    isTop: true,
    canShare: true
}
*/

// ============================================================
//  📦 数据加载完成标志
// ============================================================
console.log('✅ 未来福利社数据规范 v2.0 已加载');
// ============================================================
//  主分类定义（按福利类型分类，客户视角）
// ============================================================
const mainTypeEnum = [
    { value: "", label: "全部" },
    { value: "流量类", label: "📶 流量" },
    { value: "话费充值类", label: "💰 话费" },
    { value: "会员权益类", label: "🎁 会员权益" },
    { value: "号卡套餐类", label: "📱 号卡套餐" },
    { value: "宽带业务", label: "🏠 宽带" },
    { value: "其他活动", label: "🎯 其他" }
];

// ============================================================
//  细分标签（按福利类型细分）
// ============================================================
const subTypeMap = {
    "流量类": ["全国通用流量", "定向流量", "闲时流量", "流量叠加包", "赠送流量"],
    "话费充值类": ["充值立减", "充送话费", "话费返还", "缴费优惠", "支付立减"],
    "会员权益类": ["视频会员", "音乐会员", "网盘会员", "出行券", "生活权益"],
    "号卡套餐类": ["新用户号卡", "老用户套餐", "副卡", "亲情号"],
    "宽带业务": ["新装宽带", "宽带提速", "宽带续费", "IPTV"],
    "其他活动": ["抽奖活动", "签到", "新用户专享", "老用户专享", "领取福利", "合约机", "购机补贴"]
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
        link: "https://www.gx.10086.cn/gxwd/wdAdGoodsDetail/buyerIndex.html?2c94cba39b31527a019b48d5a27e023d,shop_id=2c94d2a99982b9dd01999d22faab26b3&flag=1&shareChannel=20_gridding_qd&ad_id=2c94beae9b55e5a9019b8332f0bc3659",
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
        link: "https://www.gx.10086.cn/gxwd/wdAdGoodsDetail/buyerIndex.html?2c94cba48d405709018d68836c9d0807,shop_id=2c94d2a99982b9dd01999d22faab26b3&flag=1&shareChannel=20_gridding_qd&ad_id=2c94beae8d4091d7018d68be1e3e23db",
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
        endTime: "2029-12-31",
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
},
// ============================================================
//  活动 110-120（可直接追加至 activityList 末尾）
// ============================================================

    // 110. 广东移动“流量月月领”·上传/备份领流量
    {
        id: 110,
        operator: "移动",
        province: "广东省",
        city: "全省",
        mainType: "流量类",
        subType: ["赠送流量"],
        title: "广东移动“流量月月领”·上传备份领10GB流量",
        startTime: "2026-05-01",
        endTime: "2026-09-30",
        desc: "广东移动用户登录移动云盘APP参与活动：①上传任务：点击“去上传”上传任意文件，可领10GB一天通用流量包，当年首次参与加享10GB云空间年卡；②备份任务：开启手机自动备份且产生备份行为，每天可领一份奖品（顺序：2GB→5GB），当月最多领两次，最快2天完成7GB领取。流量为国内通用流量（不含港澳台），有效期1天，不可共享、不可转赠、不享受不清零",
        link: "https://m.mcloud.139.com/portal/cyActive/index.html?path=GD_MobileData&targetSourceId=null&sourceid=1003&enableShare=1&token=%23ssoToken%23#/GD_MobileData?targetSourceId=null&enableShare=1",
        remark: "限广东移动用户（部分鸿蒙用户暂无法参与）；每个自然月同一号码全渠道限领1次；与“广东转存有礼”互斥；需在移动网络环境下（不含WiFi）操作；奖品数量有限先到先得"
    },
    // 111. 移动爱家·每月流量领取活动
    {
        id: 111,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "流量类",
        subType: ["赠送流量"],
        title: "移动爱家·每月流量领取活动",
        startTime: "2026-08-21",
        endTime: "2026-12-31",
        desc: "移动爱家品牌每月流量领取活动，具体流量额度及规则需登录页面查看",
        link: "https://cloud.hjq.komect.com/h5/actOutLanding/?pageId=monthlyDataClaim&channelId=009999115-gzh",
        remark: "页面需在移动网络环境下打开，具体活动规则以页面实际展示为准"
    },
    // 112. 和包评价有礼·赢3元话费券
    {
        id: 112,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "话费充值类",
        subType: ["充值立减"],
        title: "和包评价有礼·赢3元话费券",
        startTime: "2026-08-21",
        endTime: "2026-12-31",
        desc: "下载和包APP，在应用商店发表评价（含星级打分及使用感受），上传包含手机品牌、和包APP、昵称及'我的'页面的完整截图，审核通过后可领3元话费券（满100元可用）",
        link: "https://p.10086.cn/waph5/single/callHebao?TAGPAG=6001&MERCSIGN=H9bHgDxkORF0IKlKwzGKUUcrsruIBkDY",
        remark: "需下载和包APP并完成评价；截图需包含4要素：手机品牌、和包APP界面、昵称及'我的'页面、星级打分；话费券满100元可用"
    },
    // 113. 安徽移动和包电费会员·20元月费享电费券+流量
    {
        id: 113,
        operator: "移动",
        province: "安徽省",
        city: "全省",
        mainType: "会员权益类",
        subType: ["生活权益", "赠送流量"],
        title: "安徽移动和包电费会员·20元/月享电费券+10GB流量",
        startTime: "2026-08-21",
        endTime: "2026-12-31",
        desc: "20元/月（话费支付），每月享20元和包电费券（满20.01元可用）+10GB国内通用流量。订购立即生效，次月自动续订，退订月底失效。电费券每月自动派发至和包账户，有效期31天；流量需每月主动领取，限当月使用",
        link: "https://api.ahmobile.cn/ah_web/electricMember/index.html?kfSubAgent=sjdxchb#/index",
        remark: "限安徽移动用户办理；欠费销户、话费余额不足用户无法办理；电费券仅限安徽省内电表缴费使用；流量不可共享、不结转、不可转赠"
    },
    // 114. 中国移动新人百元礼包·话费/流量/抽奖
    {
        id: 114,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["新用户专享", "抽奖活动"],
        title: "中国移动新人百元礼包·领话费券/流量券/每日抽奖",
        startTime: "2026-08-21",
        endTime: "2026-11-30",
        desc: "新用户/回归用户可享：①话费加赠券（满10赠5）；②10GB流量日包券；③每日抽奖赢好礼。另有新人加享礼：查网龄月月领好礼、影音会员N选1抽100GB、领购机补贴200元（部分机型可再领至高300元话费）",
        link: "https://wx.10086.cn/wxpullapp/hzapp/activityalias/zj/transit/transferDownload.html?targetURL=https%3A%2F%2Fwx.10086.cn%2Fqwhdhub%2Fdiy-client%2F1126072224%3FA_C_CODE%3D3C43AjX2Cz%26channelId%3DP00000003569&pageId=57126080509225895&sellerId=1557132HD1702700659",
        remark: "限中国移动在网新用户及回归用户；活动时间截至2026年11月30日"
    },
    // 115. 移动“流量越用越多”·最高100GB/10元话费
    {
        id: 115,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "流量类",
        subType: ["赠送流量"],
        title: "移动“流量越用越多”·最高100GB/10元话费",
        startTime: "2026-08-21",
        endTime: "2026-09-30",
        desc: "流量及话费红包共2000万份，用户登录领取任务后参与，邀请好友可获额外抽奖机会",
        link: "https://wap.js.10086.cn/nact/resource/2645/html/index.html?im=bc42ca9fb2c0812000629abcecf14767&se=1&st=1",
        remark: "需登录中国移动账号参与；红包数量有限，先到先得"
    },
    // 116. 移动刮卡领券活动（活动一）
    {
        id: 116,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["领取福利"],
        title: "移动刮卡领券活动·抽话费流量券",
        startTime: "2026-08-21",
        endTime: "2026-09-30",
        desc: "活动加载中，具体奖品需登录后查看",
        link: "https://wx.10086.cn/qwhdhub/leadin/1025020810?A_C_CODE=1DJicGPBGv&channelId=P00000111791#/",
        remark: "需登录中国移动账号参与"
    },
    // 117. 移动刮卡领券活动（活动二）
    {
        id: 117,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["领取福利"],
        title: "移动刮卡领券活动·签到送好礼",
        startTime: "2026-08-21",
        endTime: "2026-09-30",
        desc: "签到送好礼活动，具体奖品需登录后查看",
        link: "https://wx.10086.cn/qwhdhub/giveprize/1024121626?A_C_CODE=CQEx3Mp384&token=QWHDSSO1220192129593415265026A_C_CODECQEx3Mp384#/",
        remark: "需登录中国移动账号参与"
    },
    // 118. 移动刮卡领券活动（活动五）
    {
        id: 118,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["签到"],
        title: "移动刮卡领券活动·签到送好礼",
        startTime: "2026-08-21",
        endTime: "2026-09-30",
        desc: "签到送好礼活动，具体奖品需登录后查看",
        link: "https://wx.10086.cn/qwhdhub/diy-client/1126050488?A_C_CODE=hVXu8J1Ai5",
        remark: "需登录中国移动账号参与"
    },
    // 119. 移动刮卡领券活动（活动七）
    {
        id: 119,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["签到"],
        title: "移动刮卡领券活动·签到送好礼",
        startTime: "2026-08-21",
        endTime: "2026-09-30",
        desc: "签到送好礼活动，具体奖品需登录后查看",
        link: "https://wx.10086.cn/qwhdhub/giveprize/1026050700?A_C_CODE=znHPwOdq7g&channelId=P00000112149&token=QWHDSSOD20260801T094442388DU1026050700H9wh8gR664422#/",
        remark: "需登录中国移动账号参与"
    },
    // 120. 移动新人百元礼包
    {
        id: 120,
        operator: "移动",
        province: "全国",
        city: "全国",
        mainType: "其他活动",
        subType: ["新用户专享", "抽奖活动"],
        title: "中国移动新人百元礼包·领话费券/流量券/每日抽奖",
        startTime: "2026-08-21",
        endTime: "2026-11-30",
        desc: "新用户/回归用户可享：①话费加赠券（满10赠5）；②10GB流量日包券；③每日抽奖赢好礼。另有新人加享礼：查网龄月月领好礼、影音会员N选1抽100GB、领购机补贴200元（部分机型可再领至高300元话费）",
        link: "https://wx.10086.cn/wxpullapp/hzapp/activityalias/zj/transit/transferDownload.html?targetURL=https%3A%2F%2Fwx.10086.cn%2Fqwhdhub%2Fdiy-client%2F1126072224%3FA_C_CODE%3D3C43AjX2Cz%26channelId%3DP00000003569&pageId=57126080509225895&sellerId=1557132HD1702700659",
        remark: "限中国移动在网新用户及回归用户"
    },
// ============================================================
//  基于截图提取（好礼月月领）
// ============================================================

// 121. 好礼月月领·至高100元话费券
{
    id: 121,
    operator: "移动",
    province: "浙江省",
    city: "衢州市",
    mainType: "其他活动",
    subType: ["领取福利"],
    title: "好礼月月领·至高100元话费券",
    startTime: "2026-08-21",
    endTime: "2026-09-30",
    desc: "每月可参与领取福利，奖品含100元话费兑换券、10GB流量日包券、5元话费加赠券、2GB流量日包券、500M流量日包券等",
    link: "https://wx.10086.cn/wxpullapp/hzapp/activityalias/zj/transit/transferDownload.html?targetURL=https%3A%2F%2Fdev.coc.10086.cn%2Fcoc3%2Fcanvas%2Frightsmarket-h5-canvas%2Fonline%2F26hlyyltyld%3FchannelCode%3DP00000133311&pageId=57126072211185832&sellerId=1557132HD1702700609",
    remark: "限衢州移动用户；需登录中国移动账号参与；每月可参与"
},
// 122. 移动APP准点秒杀·6元话费/2GB流量
{
    id: 122,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "话费充值类",
    subType: ["充值立减"],
    title: "移动APP准点秒杀·6元话费/2GB流量",
    startTime: "2026-08-21",
    endTime: "2026-12-31",
    desc: "每日12点/17点/20点准点开抢，奖品含6元话费、2GB流量等福利，需登录中国移动APP参与秒杀",
    link: "https://wx.10086.cn/qwhdhub/diy-client/index.html?activityId=1126075875&pageState=channelNonsupport#/page/Yg7pjX0-kc0Bn6j24VzA",
    remark: "每日12点/17点/20点三场准点秒杀；需登录中国移动APP参与；具体奖品及规则以页面实际展示为准"
},
// 123. 广西电信网龄回馈尊享版10-20元提速权益包
{
    id: 123,
    operator: "电信",
    province: "广西壮族自治区",
    city: "全区",
    mainType: "宽带业务",
    subType: ["宽带提速", "老用户专享"],
    title: "广西电信网龄回馈尊享版10-20元提速权益包",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "广西电信网龄回馈活动，用户可通过承诺消费方式办理10-20元档位的宽带提速权益包，具体提速幅度及规则需登录页面查看",
    link: "http://gx.189.cn/accept/ptindex/?mktCamCataId=109292&tgr=tsl207734-yrym-zzxd",
    remark: "限广西电信用户；需登录查看具体提速档位及承诺消费条件；页面需JavaScript加载"
},
// 124. 湖南电信校园特惠5G-A权益包·0元享网络加速
{
    id: 124,
    operator: "电信",
    province: "湖南省",
    city: "全省",
    mainType: "其他活动",
    subType: ["老用户专享"],
    title: "湖南电信校园特惠5G-A权益包·0元享网络加速",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "0元/月享5G-A网络权益（网络速率下行最高2Gbps，上行最高300Mbps）。订购立即生效，有效期四年，到期双方无异议自动续约。变更或退订次月生效，速率权益同步失效",
    link: "https://flow.hn.189.cn/hnfx/jlb/newllzqSinger?clientid=HNWTXCX34&tk=&tcid=9314247",
    remark: "限湖南省内在读高校学生办理；适用于'5G畅享59元'校园套餐且办理'校园宽带可选包'用户；办理后不可办理其他非校园优惠；主副卡不可共享；需使用支持5G-A网络的终端"
},
// 125. 全国电信叠加卫星通话10分+10条短信，长期20年
{
    id: 125,
    operator: "电信",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["老用户专享"],
    title: "电信叠加卫星通话10分钟+10条短信·长期20年",
    startTime: "2026-08-22",
    endTime: "2046-12-31",
    desc: "全国电信用户可叠加开通卫星通话权益包，含10分钟卫星通话+10条卫星短信，有效期20年",
    link: "https://www.189.cn/wapportalweb/vue/pages/clientjump/index.html#/?linkType=5&link=https%3A%2F%2Fwww.189.cn%2Fwapportalweb%2Fflowcard%2Fflowcard_detail.html%3Fticket%3D%24ticket%24%26salesid%3D000000003FABB0D26DF78060E0631788870A31B0",
    remark: "限电信用户办理；具体办理资格及规则以页面实际展示为准"
},
// 126. 新疆移动全球通5G-A加速服务0元领
{
    id: 126,
    operator: "移动",
    province: "新疆维吾尔自治区",
    city: "全区",
    mainType: "其他活动",
    subType: ["老用户专享"],
    title: "新疆移动全球通5G-A加速服务0元领",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "0元/月，中国移动全球通客户可享直播/游戏/视频等重点业务加速。有效期3年，到期自动续展",
    link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2184200&productCode=9200828",
    remark: "限新疆移动全球通客户办理；需使用支持5G-A网络的终端；0元/月，立即生效"
},
// ============================================================
//  新增活动 127-129（湖北移动 + 新疆移动）
// ============================================================

// 127. 湖北移动合家欢回馈合约·免费一年
{
    id: 127,
    operator: "移动",
    province: "湖北省",
    city: "全省",
    mainType: "会员权益类",
    subType: ["赠送流量", "网盘会员"],
    title: "湖北移动合家欢回馈合约·免费一年（5G流量+1T云盘）",
    startTime: "2026-08-22",
    endTime: "2027-08-22",
    desc: "湖北移动合家欢用户可免费领取回馈合约，含合家欢5G流量+合家欢1T云盘，有效期一年",
    link: "https://wap.hb.10086.cn/wapres/wap-h5/reservation/f58395b12d8c4272b0d96551a9255ae0.html?qq_aio_chat_type=3&sourceType=share",
    remark: "限湖北移动合家欢用户办理；需登录湖北移动账号参与；具体规则以页面实际展示为准"
},
// 128. 湖北移动1元保底流量包·三年合约
{
    id: 128,
    operator: "移动",
    province: "湖北省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "湖北移动1元保底流量包·三年合约（10GB/月）",
    startTime: "2026-08-22",
    endTime: "2029-08-22",
    desc: "1元/月保底享10GB国内通用流量，合约期36个月（3年）",
    link: "https://wap.hb.10086.cn/wapres/wap-h5/reservation/5c38f3f5e1ad41cda102af5ee1b538e0.html?qq_aio_chat_type=3&sourceType=share",
    remark: "限湖北移动用户办理；合约期36个月；需登录湖北移动账号参与"
},
// ============================================================
//  新增活动 129-131（北京联通1元羊毛包）
//  来源：用户提供链接 + 25xianbao.com
// ============================================================

// 129. 北京联通1元100分钟语音包
{
    id: 129,
    operator: "联通",
    province: "北京市",
    city: "全市",
    mainType: "话费充值类",
    subType: ["缴费优惠"],
    title: "北京联通1元100分钟语音包",
    startTime: "2026-08-22",
    endTime: "2027-08-22",
    desc: "1元/月享100分钟国内语音，合约期12个月，到期自动续约，可随时免费退订。每月需手动领取",
    link: "https://u.10010.cn/qAXTQ",
    remark: "限北京联通用户办理；打开中国联通APP联系人工客服办理；每月3号后需手动领取"
},
// 130. 北京联通1元1GB流量包
{
    id: 130,
    operator: "联通",
    province: "北京市",
    city: "全市",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "北京联通1元1GB流量包",
    startTime: "2026-08-22",
    endTime: "2027-08-22",
    desc: "1元/月享1GB国内流量，合约期12个月，到期自动续约，可随时免费退订。每月需手动领取",
    link: "https://u.10010.cn/qAXTq",
    remark: "限北京联通用户办理；打开中国联通APP联系人工客服办理；每月3号后需手动领取"
},
// 131. 北京联通1元100条短信包
{
    id: 131,
    operator: "联通",
    province: "北京市",
    city: "全市",
    mainType: "话费充值类",
    subType: ["缴费优惠"],
    title: "北京联通1元100条短信包",
    startTime: "2026-08-22",
    endTime: "2027-08-22",
    desc: "1元/月享100条国内短信，合约期12个月，到期自动续约，可随时免费退订。每月需手动领取",
    link: "https://u.10010.cn/qAXTr",
    remark: "限北京联通用户办理；打开中国联通APP联系人工客服办理；每月3号后需手动领取"
},
// ============================================================
//  新增活动 132-139（广东/广州电信预存送流量）
//  来源：用户提供链接
//  注意：部分页面需登录查看，具体规则以实际页面为准
// ============================================================

// 132. 广东电信流量升级50G福利包
{
    id: 132,
    operator: "电信",
    province: "广东省",
    city: "全省",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "广东电信流量升级50G福利包",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "广东电信用户可参与流量升级活动，领取50GB流量福利包，具体规则需登录页面查看",
    link: "https://gd.189.cn/TS/tysj/handle/llsj/index.html#/llsjcpcp?cmpid=zqsy",
    remark: "限广东电信用户；页面提示'活动已下线'或仅面向指定用户开放，需登录验证"
},
// 133. 广州电信预存60得50GB流量包
{
    id: 133,
    operator: "电信",
    province: "广东省",
    city: "广州市",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "广州电信预存60得50GB流量包",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "预存60元话费，赠送50GB流量，具体规则需登录页面查看",
    link: "https://vip.mini189.cn/wx/xk2jladecrcj",
    remark: "限广州电信用户；需登录广州电信官方微信号查看"
},
// 134. 广州电信预存30元得30GB流量
{
    id: 134,
    operator: "电信",
    province: "广东省",
    city: "广州市",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "广州电信预存30元得30GB流量",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "预存30元话费，赠送30GB流量，具体规则需登录页面查看",
    link: "https://vip.mini189.cn/wx/czyby6go30",
    remark: "限广州电信用户；需登录后查看具体规则"
},
// 135. 广州电信预存60元得30GB流量
{
    id: 135,
    operator: "电信",
    province: "广东省",
    city: "广州市",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "广州电信预存60元得30GB流量",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "预存60元话费，赠送30GB流量，具体规则需登录页面查看",
    link: "https://vip.mini189.cn/wx/czyjynfp60",
    remark: "限广州电信用户；需登录后查看具体规则"
},
// 136. 广州电信预存100元得100GB流量
{
    id: 136,
    operator: "电信",
    province: "广东省",
    city: "广州市",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "广州电信预存100元得100GB流量",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "预存100元话费，赠送100GB流量，具体规则需登录页面查看",
    link: "https://vip.mini189.cn/wx/czprk6ras1bg",
    remark: "限广州电信用户；需登录广州电信官方微信号查看"
},
// 137. 广州电信预存30元送105GB+100分钟
{
    id: 137,
    operator: "电信",
    province: "广东省",
    city: "广州市",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "广州电信预存30元送105GB+100分钟",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "预存30元话费，赠送105GB流量+100分钟通话，具体规则需登录页面查看",
    link: "https://vip.mini189.cn/wx/cz50bpku105g",
    remark: "限广州电信用户；需登录广州电信官方微信号查看"
},
// 138. 广州电信预存30元送50GB
{
    id: 138,
    operator: "电信",
    province: "广东省",
    city: "广州市",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "广州电信预存30元送50GB",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "预存30元话费，赠送50GB流量，具体规则需登录页面查看",
    link: "https://vip.mini189.cn/wx/cz30c7kij50g",
    remark: "限广州电信用户；需登录后查看具体规则"
},
// 139. 广东电信预存100送50GB（3个月可续）
{
    id: 139,
    operator: "电信",
    province: "广东省",
    city: "全省",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "广东电信预存100送50GB（3个月可续）",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "预存100元话费，赠送50GB流量，有效期3个月，到期可续订，具体规则需登录页面查看",
    link: "https://gd.189.cn/TS/tysj/handle/yc/index.html#/?cmpid=hlwkzq",
    remark: "限广东电信用户；需登录查看具体活动内容和参与对象"
},
// ============================================================
//  新增活动 140（百度网盘500G+3天SVIP会员）
//  来源：用户提供链接 + 网络活动规则
// ============================================================

// 140. 百度网盘500G空间+3天SVIP会员
{
    id: 140,
    operator: "百度",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["领取福利"],
    title: "百度网盘500G空间+3天SVIP会员免费领",
    startTime: "2026-08-22",
    endTime: "2026-12-31",
    desc: "百度网盘官方活动，新用户可获得3天SVIP会员+500G空间；老用户可获得500G空间（有效期30天）。每个账号每个自然月仅能参与1次，每隔30天可重复领取",
    link: "https://pan.baidu.com/comps/view/MV84NTZfMTAzMF8yODU2X29ubGluZQ==",
    remark: "需下载百度网盘APP参与；新用户：注册登录后获3天VIP+500G空间；老用户：点击免费领前往APP获500G空间（30天）；每月可领1次；数量有限先到先得"
},
// ============================================================
//  合并活动 141-146（福建移动流量包合集）
//  可直接追加至 activityList 末尾
// ============================================================

    // 141. 福建移动10元10GB月末流量包
    {
        id: 141,
        operator: "移动",
        province: "福建省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "福建移动10元10GB月末流量包",
        startTime: "2026-08-24",
        endTime: "2026-12-31",
        desc: "10元/次享10GB国内通用流量（不含港澳台），仅限当月23日零点至月底最后一天24点期间使用，不转存至次月。套餐生效时一次性收取费用，次月自动失效，流量不可共享",
        link: "https://app.fmcc.com.cn/businessModuleH5/upgradeIndex?id=1624299928&ch=qywx_01&frame=2023_NON_PACKAGE_TEMPLATE&sjch=28&shareId=KD33TOMWX44FMNOVWX466Y3",
        remark: "限福建移动用户办理；办理4G流量提速包或限速客户不能办理；资费方案编号：25FJ206230；无违约金"
    },
    // 142. 福建移动2元5GB日包
    {
        id: 142,
        operator: "移动",
        province: "福建省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "福建移动2元5GB日包",
        startTime: "2026-08-24",
        endTime: "2026-12-31",
        desc: "2元/次享5GB国内通用流量（不含港澳台），有效期24小时，到期自动失效。原价10元/次，优惠至2元/次。活动数量有限先到先得，户均每月最多办理30次，活动周期内每户最多办理99次",
        link: "https://app.fmcc.com.cn/businessModuleH5/upgradeIndex?id=1517789659&frame=2023_NON_PACKAGE_TEMPLATE&sjch=28&shareId=KD33TOMWX44FMNOVWX466Y3",
        remark: "限福建移动用户办理；办理4G流量提速包或限速客户不能办理；旧版WAP包月套餐需取消原套餐后方可参与；客户状态异常无法订购；退订无违约金"
    },
    // 143. 福建移动1元1GB流量直充日包
    {
        id: 143,
        operator: "移动",
        province: "福建省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "福建移动1元1GB流量直充日包",
        startTime: "2026-08-24",
        endTime: "2026-12-31",
        desc: "1元/次享1GB国内通用流量（不含港澳台），有效期24小时，到期自动失效。原价3元/次，优惠至1元/次。活动数量有限先到先得，户均每月最多办理15次，活动周期内每户最多办理99次",
        link: "https://app.fmcc.com.cn/businessModuleH5/upgradeIndex?id=269295767&ch=qywx_01&frame=2023_NON_PACKAGE_TEMPLATE&sjch=28&shareId=KD33TOMWX44FMNOVWX466Y3",
        remark: "限福建移动用户办理；办理4G流量提速包或限速客户不能办理；旧版WAP包月套餐需取消原套餐后方可参与；客户状态异常无法订购；退订无违约金"
    },
    // 144. 福建移动15元5GB流量月包
    {
        id: 144,
        operator: "移动",
        province: "福建省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "福建移动15元5GB流量月包",
        startTime: "2026-08-24",
        endTime: "2026-12-31",
        desc: "15元/月享5GB国内通用流量（不含港澳台），原价30元/月，限生效月当月使用。订购后额外赠送1张5GB月包券，立即生效，有效期5天，需前往中国移动APP-我的-卡券兑换。活动库存4万份，户均每月最多办理15次，活动周期内每户最多办理99次",
        link: "https://app.fmcc.com.cn/businessModuleH5/upgradeIndex?id=1171988996&ch=qywx_01&frame=2023_NON_PACKAGE_TEMPLATE&sjch=28&shareId=KD33TOMWX44FMNOVWX466Y3",
        remark: "限福建移动用户办理；旧版WAP包月套餐需取消原套餐后方可参与；流量不可结转、不可共享；合约到期产品自动失效；变更或退订需到当地营业厅办理；无违约金"
    },
    // 145. 福建移动5元5GB流量包（12个月）
    {
        id: 145,
        operator: "移动",
        province: "福建省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "福建移动5元5GB流量包（12个月）",
        startTime: "2026-08-24",
        endTime: "2027-08-24",
        desc: "5元/月享5GB国内通用流量（不含港澳台），原价15元/月，有效期12个月。可结转，不可共享。享流量多用多送权益（有效期至2027年1月31日，月流量较生效前6个月提升1GB，次月10号后可在中国移动APP领取）。到期前短信提醒，不回复则自动取消",
        link: "https://app.fmcc.com.cn/businessModuleH5/upgradeIndex?id=1628427440&ch=qywx_01&frame=2023_NON_PACKAGE_TEMPLATE&sjch=28&shareId=KD33TOMWX44FMNOVWX466Y3",
        remark: "限福建移动网龄7个月以上客户办理；旧版WAP包月套餐需取消原套餐后方可参与；变更或退订需到当地营业厅；活动期内所有消费AI豆均不累计；无违约金"
    },
    // 146. 福建移动3元5GB流量日包
    {
        id: 146,
        operator: "移动",
        province: "福建省",
        city: "全省",
        mainType: "流量类",
        subType: ["全国通用流量"],
        title: "福建移动3元5GB流量日包",
        startTime: "2026-08-24",
        endTime: "2026-09-24",
        desc: "3元/次享5GB国内通用流量（不含港澳台），有效期24小时，到期自动失效。原价10元/次，优惠至3元/次。活动库存20万份，户均每月最多办理15次，活动周期内每户最多办理99次。当月内办理2次可领1GB流量日包奖励，需搜索'流量越购越快乐'活动领取；办理即送5张1GB日包券（立即生效，有效期5天，兑换路径：中国移动APP-我的-卡券）",
        link: "https://app.fmcc.com.cn/businessModuleH5/upgradeIndex?id=171942324&ch=qywx_01&frame=2023_NON_PACKAGE_TEMPLATE&sjch=28&shareId=KD33TOMWX44FMNOVWX466Y3",
        remark: "限福建移动用户办理；办理4G流量提速包或限速客户不能办理；旧版WAP包月套餐需取消原套餐后方可参与；流量不结转、不可共享；变更或退订需到当地营业厅办理；退订无违约金"
    },
// ============================================================
//  新增活动 147-149（河南移动爱家系列）
//  来源：用户提供链接
// ============================================================

// 147. 河南移动爱家悦享会员9.9元版
{
    id: 147,
    operator: "移动",
    province: "河南省",
    city: "全省",
    mainType: "会员权益类",
    subType: ["生活权益"],
    title: "河南移动爱家悦享会员9.9元版",
    startTime: "2026-08-24",
    endTime: "2026-12-31",
    desc: "9.9元/月享爱家悦享会员权益，前三个月每月可额外领取5元权益，需办完主动领取",
    link: "https://wap.ha.10086.cn/hnmccClientWap/h5-activity/hotRights/workTemplate.html?productId=CPB202512091735283981&channel=XSDP&assistantUserInfo=yk0fWm8mnUbTslFT-15DyGzKlE4tJMVONL4eRirzguMQE3slL8ixDdPL-6xYZIPJNcAi7-QsYU7M4A7lrTilbYnGoidnBseVzrFU2cuj7Zg&momentTaskId=4469",
    remark: "限河南移动用户办理；9.9元版前三个月每月多领5元"
},
// 148. 河南移动爱家悦享会员10元版
{
    id: 148,
    operator: "移动",
    province: "河南省",
    city: "全省",
    mainType: "会员权益类",
    subType: ["生活权益"],
    title: "河南移动爱家悦享会员10元版",
    startTime: "2026-08-24",
    endTime: "2026-12-31",
    desc: "10元/月享爱家悦享会员权益",
    link: "https://wap.ha.10086.cn/hnmccClientWap/h5-activity/hotRights/workTemplate.html?productId=CPB202601141746214342",
    remark: "限河南移动用户办理"
},
// 149. 河南移动爱家服务10元B版
{
    id: 149,
    operator: "移动",
    province: "河南省",
    city: "全省",
    mainType: "会员权益类",
    subType: ["生活权益"],
    title: "河南移动爱家服务10元B版",
    startTime: "2026-08-24",
    endTime: "2026-12-31",
    desc: "10元/月享爱家服务B版权益，入口在中国移动APP内（搜索'爱家'相关服务），路径较深需自行查找办理",
    link: "",
    remark: "限河南移动用户办理；入口在中国移动APP内，搜索'爱家'相关服务办理"
},
    // ============================================================
//  新增活动 150-155（四川移动流量包）
//  来源：用户提供链接
// ============================================================

// 150. 四川移动5GB流量7天包
{
    id: 150,
    operator: "移动",
    province: "四川省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "四川移动5GB流量7天包·10元/次",
    startTime: "2026-08-24",
    endTime: "2026-12-31",
    desc: "10元/次享5GB国内通用流量（不含港澳台），有效期7*24小时，可跨月使用。可重复订购，每月最多4次，重复订购重复收费。不可退订，不可结转，不可共享",
    link: "https://dcp.sc.10086.cn/shop/index.html#/subpackage-detail/pages/flow_detail/flow_detail?productId=695754895197732864",
    remark: "限四川移动客户（物联网卡、数据卡、WAP不限量等除外）；办理立即生效；流量优先级为节日包流量"
},
// 151. 四川移动5GB孝心流量包·10元/月
{
    id: 151,
    operator: "移动",
    province: "四川省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "四川移动孝心流量包·10元/月（5GB+5G优享）",
    startTime: "2026-08-24",
    endTime: "2026-12-31",
    desc: "10元/月享5GB国内通用流量（不含港澳台）+5G优享速率。订购立即生效，不退订可长期使用。首月全额收费，流量全额到账，仅限当月使用，不可结转，不可共享",
    link: "https://dcp.sc.10086.cn/shop/index.html#/subpackage-detail/pages/flow_detail/flow_detail?productId=1522642074037616640",
    remark: "限身份证年龄≥60岁的四川移动客户办理；合约期内仅能参与一次，不能重复办理；提前解约需至营业厅按未履约月份*10元/月支付违约金"
},
// 152. 四川移动50GB尊享流量包·60元/月
{
    id: 152,
    operator: "移动",
    province: "四川省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "四川移动50GB尊享流量包·60元/月（5G尊享服务）",
    startTime: "2026-08-24",
    endTime: "2026-12-31",
    desc: "60元/月享50GB国内通用流量+5G尊享服务。不退订可长期使用，有效期3年，到期逐年延期。首月费用及流量区分上下半月（上半月全额，下半月减半）。可结转至次月，不可转赠，不可共享",
    link: "https://dcp.sc.10086.cn/shop/index.html#/subpackage-detail/pages/flow_detail/flow_detail?productId=1591746826536026112",
    remark: "限四川移动客户；有效期内只能办理一次，退订后次月可再次办理；5G尊享需支持5G-A手机及网络覆盖"
},
// 153. 四川移动20GB尊享流量包·30元/月
{
    id: 153,
    operator: "移动",
    province: "四川省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "四川移动20GB尊享流量包·30元/月（5G尊享服务）",
    startTime: "2026-08-24",
    endTime: "2026-12-31",
    desc: "30元/月享20GB国内通用流量+5G尊享服务。不退订可长期使用，有效期3年，到期逐年延期。首月费用及流量区分上下半月（上半月全额，下半月减半）。可结转至次月，不可转赠，不可共享",
    link: "https://dcp.sc.10086.cn/shop/index.html#/subpackage-detail/pages/flow_detail/flow_detail?productId=1591746285370146816",
    remark: "限四川移动客户；有效期内只能办理一次，退订后次月可再次办理；5G尊享需支持5G-A手机及网络覆盖"
},
// 154. 四川移动6GB畅享流量包·22.9元/月
{
    id: 154,
    operator: "移动",
    province: "四川省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "四川移动6GB畅享流量包·22.9元/月（5G-A+赠流量卡券）",
    startTime: "2026-08-24",
    endTime: "2026-12-31",
    desc: "22.9元/月享6GB通用流量+5G-A服务，每月获赠流量卡券（最高加享4GB/月）。订购立即生效，不退订可长期使用。首月费用及流量区分上下半月（上半月全额，下半月减半）。可结转至次月，不可共享。流量卡券按月递增赠送（第2月1GB→第5-25月4GB/月），需在APP-我的-卡券激活，仅限当月有效",
    link: "https://dcp.sc.10086.cn/shop/index.html#/subpackage-detail/pages/flow_detail/flow_detail?productId=1523465152980385792",
    remark: "限四川移动客户（物联网卡、数据卡等除外）；有效期内只能办理一次，退订后次月可再次办理；卡券每月1-5日自动发放，需主动激活"
},
// ============================================================
//  新增活动 155（移动云盘AI会员 MClaw套餐）
//  来源：用户提供链接
// ============================================================

// 155. 移动云盘AI会员 MClaw套餐·9.9元/年（已售罄）
{
    id: 155,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["网盘会员"],
    title: "移动云盘AI会员 MClaw套餐·9.9元/年",
    startTime: "2026-08-25",
    endTime: "2027-08-25",
    desc: "9.9元/年享MClaw AI套餐，含500万Tokens（有效期31天）。支持在移动云盘App、Windows客户端、139邮箱App、Web端使用，可整理照片和文件、自动收集资讯信息、执行定时任务等",
    link: "https://vip.yun.139.com/vip/PopupApp?sourceid=503032&type=aiStore",
    remark: "目前活动已售罄；需在移动云盘App V13.0及以上版本使用；Token到期未使用部分自动清零"
},
// ============================================================
//  新增活动 156（移动灵犀口令抢红包）
//  来源：用户提供截图
// ============================================================

// 156. 移动灵犀口令抢红包·至高9元话费券
{
    id: 156,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["领取福利"],
    title: "移动灵犀口令抢红包·至高9元话费券",
    startTime: "2026-08-25",
    endTime: "2026-09-30",
    desc: "每周二、周五关注中国移动官方渠道获取当天指定灵犀口令，打开中国移动APP点击灵犀主图标输入口令，即有机会获得话费加赠券（至高9元）。每条口令限量70万份，口令仅限发布当天10:00-23:59有效，每人每条口令限领1次，每日至多尝试5次，每月至多10次中奖机会。奖励随机非100%中奖，领取后7天内有效",
    link: "",
    remark: "需登录中国移动APP参与；搜索'灵犀'或点击首页灵犀图标；口令每周二/周五发布；奖励需在7天内在中国移动APP-我的-卡券兑换使用"
},
// ============================================================
//  新增活动 157（河北移动0元100GB流量月包）
//  来源：25xianbao.com/archives/28640
// ============================================================

// 157. 河北移动0元100GB流量月包（3个月）
{
    id: 157,
    operator: "移动",
    province: "河北省",
    city: "全省",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "河北移动0元100GB流量月包（3个月）",
    startTime: "2026-08-25",
    endTime: "2026-11-30",
    desc: "编辑短信5888发送到10086，收到二次确认短信后10分钟内回复'是'即可开通。每月0元享100GB全国通用流量（不含港澳台），有效期3个月，到期自动失效。流量当月有效，不可共享、不可结转、不可转赠，优先级低于套内流量。赠送流量套外安心服务（套外单价高于10元/G按0.29元/MB计费，累计10元后免费用至1GB）。无合约期，退订/销户/携转无违约金",
    link: "",
    remark: "限河北移动用户；不同号码可能结果不同（部分用户收到的是通话或防优包）；发送后10分钟内回复'是'确认；退订次月生效"
},
// ============================================================
//  新增活动 158（北京移动5G-A云盘包·三档可选）
//  来源：用户提供链接
// ============================================================

// 158. 北京移动5G-A云盘包（三档可选）
{
    id: 158,
    operator: "移动",
    province: "北京市",
    city: "全市",
    mainType: "会员权益类",
    subType: ["网盘会员", "视频会员", "音乐会员"],
    title: "北京移动5G-A云盘包·三档可选（5元/月、20元/月、200元/年）",
    startTime: "2026-08-26",
    endTime: "2029-08-26",
    desc: "三档资费可选：①5元/月享5G-A速率+4TB云盘空间（36个月自动续展）；②20元/月享5G-A速率+云盘黄金会员+新通话钻石会员+AI视频彩铃体验版（36个月自动续展）；③200元/年享5G-A速率+云盘黄金会员+新通话钻石会员+AI视频彩铃体验版（12个月）。适配5G-A终端显示'5GA'及'中国移动VIP服务'标识。与达量限速业务互斥",
    link: "http://ysmapp.bj.10086.cn/app/channel-web/busiCore/showIndexCommon.action?submitWarePackageId=A1000648&channel=app_share&code=WWFWB002400&empCode=WWFWB002400&nbc=19429e0b11d2ec0d5663be713a8fa293",
    remark: "限北京移动用户；立即生效；退订方式：5元档发送QX5GAZXYPB，20元/月档发送QXZXYPY，200元/年档发送QXZXYPN到10086，退订月末最后一日失效；无在网要求，变更/退订/销户/携转无违约金；年包退订费用不退还"
},
// ============================================================
//  新增活动 159（广东移动10GB流量月包·部分地市口令）
//  来源：用户提供线报
// ============================================================

// 159. 广东移动10GB流量月包·各地市口令领取
{
    id: 159,
    operator: "移动",
    province: "广东省",
    city: "全省",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "广东移动10GB流量月包·多地口令领取（限受邀用户）",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "广东部分地区移动用户发送指定口令到10086可领10GB流量月包。口令列表：深圳发送9963；广州发送ST10或CS10；东莞发送1852或1854；惠州发送KK28；中山发送BB10。仅限受邀用户参与，非全员开放",
    link: "",
    remark: "限广东移动受邀用户；深圳/广州/东莞/惠州/中山等地部分用户可参与；口令发送至10086后以短信回复为准；非全员活动，未受邀发送无效"
},
// ============================================================
//  新增活动 160（广西移动“天天摇一摇”）
//  来源：广西移动10086微信公众号
// ============================================================

// 160. 广西移动“天天摇一摇”·摇至高50GB流量
{
    id: 160,
    operator: "移动",
    province: "广西壮族自治区",
    city: "全区",
    mainType: "其他活动",
    subType: ["抽奖活动"],
    title: "广西移动“天天摇一摇”·摇至高50GB流量",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "每日参与摇一摇可抽流量，至高可得50GB流量，摇满10次还可再赢100元话费。具体规则以活动页面为准",
    link: "https://mp.weixin.qq.com/s/li1y1-bSkt9_AtBWKklJsw",
    remark: "限广西移动用户；每日可参与，摇满10次可额外参与100元话费抽奖；具体入口及规则以广西移动10086公众号活动页面为准"
},
// ============================================================
//  新增活动 161-165（联通老用户免费流量活动）
//  来源：https://mp.weixin.qq.com/s/GQM0mQTyYuE5TWezAdeGOg
// ============================================================

// 161. 联通网龄回馈流量·每月1-3GB
{
    id: 161,
    operator: "联通",
    province: "全国",
    city: "全国",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "联通网龄回馈流量·每月1-3GB通用流量",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "联通老用户专享，网龄≥3年可在中国联通APP搜索'网龄回馈'、'老用户专区'或'权益中心'领取，每月可领1-3GB全国通用流量。部分省份的网龄计划可能绑定12/24个月在网承诺，领取前需查看活动规则",
    link: "",
    remark: "限联通老用户（网龄≥3年）；入口：中国联通APP→搜索'网龄回馈'或'老用户专区'；部分省份有在网承诺合约，领取前需自查"
},
// 162. 联通金币乐园签到兑流量·5-10GB/月
{
    id: 162,
    operator: "联通",
    province: "全国",
    city: "全国",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "联通金币乐园签到兑流量·5-10GB/月",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "中国联通APP→我的→金币乐园，每日签到得金币，攒够后可兑换流量包：500金币兑5GB（7天有效）、800金币兑8GB（15天有效）、1000金币兑10GB（30天有效）。10GB档每月限量，建议月初兑换；兑换后需在'我的礼包'中手动激活",
    link: "",
    remark: "限联通用户；入口：中国联通APP→我的→金币乐园；10GB档每月限量，月初兑换成功率更高"
},
// 163. 联通25GB通用体验包·限时活动
{
    id: 163,
    operator: "联通",
    province: "全国",
    city: "全国",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "联通25GB通用体验包·限时活动（受邀优先）",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "2026年联通'夏日畅享'限时活动，最高25GB全国通用流量。三条路径：①APP搜索'25G'或'开门红'点活动页领取；②微信搜'中国联通'公众号，发送'开工大吉'/'2026冲'/'25G流量'获取链接领取；③本机编辑短信'LL25'发送至10010。受邀用户秒到账，非受邀用户回复'暂不符合条件'",
    link: "",
    remark: "限联通用户（受邀优先）；老用户命中率较高，新入网号码仅APP搜索可命中；银卡及以上星级用户可额外+5GB视频专属流量"
},
// 164. 联通积分兑换流量·500积分兑1GB
{
    id: 164,
    operator: "联通",
    province: "全国",
    city: "全国",
    mainType: "流量类",
    subType: ["赠送流量"],
    title: "联通积分兑换流量·500积分兑1GB通用流量",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "联通APP→积分商城→流量专区，约500积分兑1GB通用流量；短信发送'JFLL100'至10010可兑100MB起；网上营业厅jf.10010.com约1200积分兑1.5GB。每月20日积分商城常有秒杀活动，六/七星用户兑换享8.8折",
    link: "",
    remark: "限联通用户；入口：中国联通APP→积分商城→流量专区；积分有效期通常36个月，到期滚动清零"
},
// 165. 联通周三流量雨·最高5GB
{
    id: 165,
    operator: "联通",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["抽奖活动"],
    title: "联通周三流量雨·最高抢5GB流量",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "每周三上午10:00-12:00，中国联通APP'流量加油站'开放抢流量活动，手快有机会抢到最高5GB（7天有效）。另有任务中心（看视频、查话费、填问卷等换100-500MB）、登录礼（部分省份可一键领5GB）、沃钱包APP每日'天天领流量'抽奖（10-100MB，基本100%中奖）",
    link: "",
    remark: "限联通用户；入口：中国联通APP→流量加油站（每周三10:00-12:00）；建议定好闹钟提前蹲点"
},
// ============================================================
//  新增活动 166（广东联通生活会员7折购）
//  来源：用户提供截图
// ============================================================

// 166. 广东联通生活会员7折购·14元微信立减金+5GB流量
{
    id: 166,
    operator: "联通",
    province: "广东省",
    city: "全省",
    mainType: "会员权益类",
    subType: ["生活权益", "赠送流量"],
    title: "广东联通生活会员7折购·14元微信立减金+5GB流量月包",
    startTime: "2026-08-26",
    endTime: "2027-08-26",
    desc: "20元/月，前12个月减免6元/月（即14元/月），第13个月起恢复20元/月。含每月14元微信立减金+5GB流量月包",
    link: "https://10010.17wo.cn/micropage-2b2c/index.html#/pages/otherMp/index?pageId=2041717025401088&goodsId=1266455322890501&channelId=495083311368517&s=10037101&boothAccessMode=2&boothCode=GD-DSYL421&2b2c=CnCg&pr=51&ct=0020&suId=zUjyeu2",
    remark: "限广东联通用户；原价20元/月，前12个月享6元/月减免；具体办理资格以页面实际提示为准"
},
// ============================================================
//  活动 167（修正为江西联通）
// ============================================================

// 167. 江西联通网龄充值送权益·充100元得热门VIP会员月卡
{
    id: 167,
    operator: "联通",
    province: "江西省",
    city: "全省",
    mainType: "会员权益类",
    subType: ["视频会员", "音乐会员"],
    title: "江西联通网龄充值送权益·充100元得热门VIP会员月卡",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "江西联通指定老用户充值100元话费，可领热门VIP会员月卡（N选1），含腾讯视频、爱奇艺、优酷、B站、网易云音乐、QQ音乐、芒果TV、喜马拉雅、蜻蜓FM、懒人听书、掌阅、腾讯手游加速器等[reference:0]。会员每月任选1款，充值后立即到账[reference:1]。需关注“江西联通”公众号并绑定手机号后领取[reference:2]",
    link: "https://wxjx.info-ware.cn/olduser/wanglingActive?chnl_id=WTqyb",
    remark: "限江西联通指定名单用户[reference:3]；页面提示'您已订购同类产品，请勿重复下单'[reference:4]；具体参与资格以页面实际判断为准；办理页面同时含10元3GB加速包等产品规则[reference:5]"
},
// ============================================================
//  新增活动 168（联通云盘“请您看电影”）
//  来源：https://panservice.mail.wo.cn/h5/activitymobile/movieInvitation?activityId=MzQ%3D&touchpoint=301400170002
// ============================================================

// 168. 联通云盘“请您看电影”·免费领观影月卡+转存抽奖
{
    id: 168,
    operator: "联通",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["视频会员", "赠送流量", "生活权益"],
    title: "联通云盘“请您看电影”·免费领观影月卡+转存抽奖",
    startTime: "2026-07-15",
    endTime: "2026-12-31",
    desc: "联通用户每月可免费领取1张观影月卡（5G宽视界钻享叠加包会员月卡或黑金会员月卡，每日各限量1万张，随机分配）。领取后解锁转存权益，在活动页面将任意影片转存至个人云盘，可获得1次抽奖机会。奖品含：10GB流量月包（25元/13000份）、3GB流量月包（10元/106300份）、2GB流量日包（5元/10800份）、1GB流量日包（3元/10000份）、爱奇艺黄金会员（30元/1000份）、搜狐视频VIP会员（20元/703份）、淘宝闪购超级吃货卡（15元/1000份）、腾讯视频会员（12元/4000份）、优酷视频VIP会员（14元/2850份）、联通云盘VIP会员月卡（10元/20000份）及多款优惠券。转存和抽奖机会每月仅1次，限当月有效",
    link: "https://panservice.mail.wo.cn/h5/activitymobile/movieInvitation?activityId=MzQ%3D&touchpoint=301400170002",
    remark: "限联通用户；页面需JavaScript加载；每日限量发放两种月卡各1万张；流量包及会员奖品中奖后直充至参与手机号；欠费停机、套餐互斥等异常状态可能导致发奖失败；奖品3个工作日内到账"
},
// ============================================================
//  新增活动 169（联通祝福·入网纪念日抽奖）
//  来源：用户提供截图 + 链接
// ============================================================

// 169. 联通祝福·入网纪念日抽话费/流量
{
    id: 169,
    operator: "联通",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["抽奖活动"],
    title: "联通祝福·入网纪念日抽100元话费",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "联通用户可通过“联通祝福”功能参与入网纪念日抽奖活动，有机会赢取100元话费等福利。页面显示“距4周年 30天 话费100元 距5周 免费抽”，具体规则需登录中国联通APP查看",
    link: "https://img.client.10010.com/dwguide/index.html?title=%E8%81%94%E9%80%9A%E7%A5%9D%E7%A6%8F&openUrl=https%3A%2F%2Fm.client.10010.com%2FmobileService%2FopenPlatform%2FopenPlatLineNew.htm%3Fto_url%3Dhttps%3A%2F%2Fwocare.unisk.cn%2Fmbh%2FgetToken%3FchannelType%3DwocareMBHServiceLife1%26homePage%3Dhome&duanlianjieabc=uAcfq#/",
    remark: "限联通用户；需登录中国联通APP参与；页面需JavaScript加载，建议在APP内打开"
},
// ============================================================
//  新增活动 170（天翼云盘“礼遇季·智存美好领好礼”）
//  来源：https://m.cloud.189.cn/zt/2025/cloud-eleven/index.html#/?inviteId=93250
// ============================================================

// 170. 天翼云盘“礼遇季·智存美好领好礼”
{
    id: 170,
    operator: "电信",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["网盘会员", "领取福利"],
    title: "天翼云盘“礼遇季·智存美好”·领AI体验包/做任务抽会员",
    startTime: "2026-08-26",
    endTime: "2026-12-31",
    desc: "天翼云盘礼遇季活动：①登录领3次AI体验包（AI搜图、智能问答、AI绘图）；②做任务抽空间和会员；③邀请好友双双得会员，最高可得70天会员权益；④会员订购限时特惠",
    link: "https://m.cloud.189.cn/zt/2025/cloud-eleven/index.html#/?inviteId=93250",
    remark: "限天翼云盘用户；需登录天翼云盘账号参与；具体任务规则及奖品以页面实际展示为准"
},
// ============================================================
//  新增活动 171（5G-A流量包·四档可选）
//  来源：https://dev.coc.10086.cn/coc/web6/5GTrafficExchange/?pageId=1963866847517413376&channelId=P00000027705
// ============================================================

// 171. 5G-A流量包（四档可选）
{
    id: 171,
    operator: "移动",
    province: "全国",
    city: "全国",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "5G-A流量包·四档可选（20-100元/月）",
    startTime: "2026-08-27",
    endTime: "2026-12-31",
    desc: "四档资费可选：①20元/月含10GB国内通用流量+5G致享服务（下行1Gbps/上行100Mbps）；②30元/月含15GB国内通用流量+5G致享服务；③50元/月含30GB国内通用流量+5G尊享服务（下行2Gbps/上行150Mbps）；④100元/月含80GB国内通用流量+5G臻享服务（下行3Gbps/上行200Mbps）。订购立即生效，取消次月失效，无合约捆绑。流量可结转，不可共享/转赠，优先级高于套餐内通用流量。需使用支持5G-A网络的终端",
    link: "https://dev.coc.10086.cn/coc/web6/5GTrafficExchange/?pageId=1963866847517413376&channelId=P00000027705",
    remark: "限移动用户；同系列产品互斥可换；全球通钻卡/白金卡用户就高享受权益；具体支持终端以实际为准"
},
// ============================================================
//  新增活动 172（陕西移动随心选流量包·多档可选）
//  来源：用户提供截图 + 链接
// ============================================================

// 172. 陕西移动随心选流量包（多档可选）
{
    id: 172,
    operator: "移动",
    province: "陕西省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "陕西移动随心选流量包·多档可选（3-30GB，3-7天）",
    startTime: "2026-08-27",
    endTime: "2026-12-31",
    desc: "三档有效期可选：①3天包：5GB可共享12元/10GB不可共享12元/10GB17元/30GB22元；②5天包：5GB可共享13元/10GB不可共享13元/10GB18元/30GB23元；③7天包：5GB可共享15元/10GB不可共享15元/10GB20元/30GB25元。需登录中国移动APP订购，具体规则以订购页面为准",
    link: "https://wap.sn.10086.cn/h5/MobileDataFlexiblePackage/index.html?source_id=DSXA&pageCode=_LLSXX",
    remark: "限陕西移动用户；需登录中国移动APP订购；具体档位价格及共享规则以页面实际展示为准；页面提示前往中国移动APP订购"
},
// ============================================================
//  新增活动 173（梅州移动20元20GB银发流量包）
//  来源：用户提供截图 + 链接
// ============================================================

// 173. 梅州移动20元20GB银发流量包（60岁及以上专属）
{
    id: 173,
    operator: "移动",
    province: "广东省",
    city: "梅州市",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "梅州移动20元20GB银发流量包·60岁及以上专属",
    startTime: "2026-08-27",
    endTime: "2026-12-31",
    desc: "20元/月享20GB国内通用流量，限60岁及以上客户办理，需保持使用39元/月及以上主套餐。加享24个月，含20元神州行欢孝包加享优惠（8GB+12GB）。子女可代付，更省心",
    link: "https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2161067&productCode=11172859&secondChannel=40016_mz",
    remark: "限梅州移动60岁及以上客户；需保持39元/月及以上主套餐；加享24个月；子女可代付"
},
// 174. 广西电信10元权益白金包（N选1）
{
    id: 174,
    operator: "电信",
    province: "广西壮族自治区",
    city: "全区",
    mainType: "会员权益类",
    subType: ["视频会员", "音乐会员", "生活权益"],
    title: "广西电信10元权益白金包（N选1）",
    startTime: "2026-08-27",
    endTime: "2026-12-31",
    desc: "10元/月享权益白金包，每月可从多款热门权益中任选1款（N选1），具体权益列表需登录页面查看",
    link: "http://gx.189.cn/accept/yrym/?mktCamCataId=106640&codeType=3",
    remark: "限广西电信用户；页面需JavaScript加载，建议在电信营业厅APP内打开；具体权益内容以页面实际展示为准"
},
// 175. 广西电信5元300分钟语音包
{
    id: 175,
    operator: "电信",
    province: "广西壮族自治区",
    city: "全区",
    mainType: "话费充值类",
    subType: ["缴费优惠"],
    title: "广西电信5元300分钟语音包",
    startTime: "2026-08-27",
    endTime: "2028-08-27",
    desc: "5元/月享300分钟全国通话时长（不含港澳台）。立即生效，当月费用按日计扣，语音按天折算一次性提供；变更或退订次月生效；通话时长当月有效，不结转；不可重复订购，主卡、副卡可单独订购；有效期2年，到期自动续订",
    link: "https://gx.189.cn/accept/zy/zyIndex?mktCamCataId=107842&tgr=&wxid=&actId=&wtcol1=&wtcol2=&wtcol3=&wtcol4=&wtcol5=&wtcol6=",
    remark: "限中国电信广西天翼手机用户；不可重复订购；变更/退订需至当地营业厅办理"
},
// ============================================================
//  新增活动 176-179（基于新规范搜索全网真实活动）
//  来源：运营商公告 + 权威媒体
//  最新编号从 176 开始
// ============================================================

// 176. 江苏移动任我选会员焕新礼
{
    id: 176,
    operator: "移动",
    province: "江苏省",
    city: "全省",
    mainType: "会员权益类",
    subType: ["视频会员", "赠送流量", "生活权益"],
    title: "江苏移动任我选会员焕新·赠5GB流量+5元餐券",
    startTime: "2026-04-01",
    endTime: "2026-12-31",
    desc: "任我选会员15元优享版用户，当月未使用会员福袋且次月续费，次月10日前可获赠5GB国内通用流量及5元在线点餐红包",
    remark: "需通过中国移动APP-爱购-2026任我选会员服务焕新计划活动页面报名；流量为套外通用流量，月底失效不滚存",
    link: "https://www1.10086.cn/aboutus/news/pannounce/js/index_250_250_detail_54728.html"
},

// 177. 广州联通拥军优属专属通信套餐
{
    id: 177,
    operator: "联通",
    province: "广东省",
    city: "广州市",
    mainType: "号卡套餐类",
    subType: ["新用户号卡", "老用户套餐"],
    title: "广州联通拥军优属专属通信套餐",
    startTime: "2026-08-01",
    endTime: "2026-12-31",
    desc: "面向军人及家属推出专属通信优惠套餐，满足高性价比通话、流量、权益及家庭融合产品需求；携手OPPO厂商提供智能终端内购价，最高可让利500元",
    remark: "限军人及家属办理；需通过联通客户日拥军优属内购会或线下营业厅咨询",
    link: "https://www.ccidcom.com/xinwenku/20260819/WkS4tRUxXfvhApoO61cvoissedzew.html"
},

// 178. 内蒙古移动马兰汇权益会员
{
    id: 178,
    operator: "移动",
    province: "内蒙古自治区",
    city: "全区",
    mainType: "会员权益类",
    subType: ["视频会员", "生活权益", "出行券"],
    title: "内蒙古移动马兰汇权益会员·流量+会员+消费折扣",
    startTime: "2026-05-17",
    endTime: "2026-12-31",
    desc: "马兰汇权益会员享“流量+会员+消费折扣”三重权益：可任选互联网热门平台会员，或兑换加油券、微信立减金；享超市、餐饮、加油等合作商户专属折扣",
    remark: "订购马兰汇权益尊享会员可享连续三个月半价优惠，每日参与限量秒杀及抽奖",
    link: "http://www.neimenggu.xinhua.org/20260523/4bba1059fc56436a9b74bd257a098a5a/c.html"
},

// 179. 重庆移动趣享会员·2.8元3GB流量日包
{
    id: 179,
    operator: "移动",
    province: "重庆市",
    city: "全市",
    mainType: "会员权益类",
    subType: ["赠送流量", "生活权益"],
    title: "重庆移动趣享会员·2.8元享3GB流量日包",
    startTime: "2026-08-01",
    endTime: "2026-12-31",
    desc: "趣享会员尊享3大权益：全场会员VIP折扣价、每月200MB全国通用流量、每月5M币（M币乐园使用）、每月1次业务折扣办理权。3GB流量日包7折价仅2.8元",
    remark: "需完成指定任务方可领取部分权益；M币每季度末清零；退订可拨打10086",
    link: "https://wap.cq.10086.cn/h5/electronicchannelmember/vip0Detail.html?root_trace_id=6726af82-cedf-43e6-9859-9d82810d8ac8"
},
// ============================================================
//  新增活动 180-190（银行+互联网大厂）
//  来源：运营商公告 + 权威媒体
//  最新编号从 180 开始
// ============================================================

// 180. 农业银行美团支付首绑随机立减
{
    id: 180,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["支付立减"],
    title: "农行信用卡美团首绑·随机立减至高18元",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "农行信用卡持卡人在美团旗下APP首次绑定农行信用卡并支付，首笔订单可享随机立减1-18元优惠。每天不少于2000名额，先到先得",
    remark: "限农行信用卡持卡人；仅限美团支付首绑；每天0点开始；同一客户活动期间仅享1次",
    link: "https://www.abchina.com/cn/CreditCard/Special0ffers/All/qgmtqx20260901.htm"
},
// 181. 农业银行美团大额满减
{
    id: 181,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["支付立减"],
    title: "农行信用卡美团支付·满1000立减10元",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "62开头农行信用卡持卡人在美团/大众点评/美团外卖APP消费，通过美团支付满1000元立减10元。每月限3万名，先到先得",
    remark: "限62开头农行信用卡持卡人；每月限参与1次；可与平台红包叠加",
    link: "https://www.abchina.com/zt/CreditCard/Special0ffers/All/qgmtdemj20260901.htm"
},
// 182. 农业银行银联手机Pay消费返现
{
    id: 182,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["支付立减"],
    title: "农行银联手机Pay·境内消费1%返现",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "农行62银联信用卡通过手机Pay在境内线上线下一笔消费即可享1%刷卡金返现。单笔至高返10元，累计至高返50元；总奖池20万元，先到先得",
    remark: "限农行62银联信用卡持卡人；需通过支持NFC的钱包APP绑定；不含港澳台地区交易",
    link: "https://www.abchina.com/zt/CreditCard/Special0ffers/All/ylsjp20260901.htm"
},
// 183. 农业银行消费达标月月返现
{
    id: 183,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["支付立减"],
    title: "农行信用卡月月返现·消费满5000元领奖",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "农行信用卡主卡持卡人报名后，当月消费满5000元可领【微信支付单笔满1000享2倍积分】券；满1万元和3万元可获抽奖机会",
    remark: "限农行信用卡主卡持卡人；需通过农行掌银APP报名；报名券限80万份",
    link: "https://www.abchina.com/zt/CreditCard/Special0ffers/All/yyfx20260827.htm"
},
// 184. 农业银行推荐办卡有礼
{
    id: 184,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["新用户专享"],
    title: "农行信用卡推荐办卡·至高得1000元刷卡金",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "农行信用卡持卡人推荐新客户办理指定信用卡并完成首刷，推荐人可获价值100元刷卡金/人。推荐多人可享多份，每月至高1000元",
    remark: "限农行信用卡主卡持卡人；被推荐人需为农行信用卡新客户",
    link: "https://www.abchina.com.cn/cn/CreditCard/Special0ffers/All/xwlj20260828.htm"
},
// 185. 京东PLUS会员日·限量大额券
{
    id: 185,
    operator: "京东",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["生活权益", "出行券"],
    title: "京东PLUS会员日·限量大额券9月8-10日",
    startTime: "2026-09-08",
    endTime: "2026-09-10",
    desc: "PLUS会员日放出限量大额券，早10点、晚20点准时补货。包含：家电券满2000-200/3000-300/5000-500；数码券满1000-100/2000-200；全品类大额券满1200-80/1500-100等",
    remark: "限京东PLUS会员；每月8-10日重点放券；需定闹钟蹲点抢；券当月有效",
    link: "https://www.redhongan.com/p/257897.html"
},
// 186. 京东PLUS月度100元券包
{
    id: 186,
    operator: "京东",
    province: "全国",
    city: "全国",
    mainType: "会员权益类",
    subType: ["领取福利"],
    title: "京东PLUS月度100元券包·9月1日更新",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "PLUS会员每月可领固定券包：105-5全品类券×2、200-10全品类券×2、500-30自营券×1、1000-40自营券×1及家电数码品类券若干。当月有效，月底清零",
    remark: "限京东PLUS会员；需手动领取不会自动到账；路径：我的-PLUS会员中心-月度100元券包",
    link: "https://www.redhongan.com/p/257897.html"
},
// 187. 京东PLUS低价续费攻略
{
    id: 187,
    operator: "京东",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["老用户专享"],
    title: "京东PLUS季度末低价续费通道",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "9月为季度末，京东常放出续费隐藏低价。京东APP搜\"会员100\"可进入低价续费通道，不要直接原价149元续费",
    remark: "限京东PLUS会员；需搜索特定口令进入低价通道",
    link: "https://www.redhongan.com/p/257897.html"
},
// 188. 京东·广西东盟水果消费券
{
    id: 188,
    operator: "京东",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["领取福利"],
    title: "京东·广西东盟水果消费券·第三期9月1日开领",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "广西商务厅牵头推出\"东盟水果 汇聚广西\"消费券，覆盖榴莲、山竹、芒果、苹果蕉、荔浦芋头等特色好物，单笔至高立减200元。前两阶段累计发放超540万张",
    remark: "每日10点在京东上线；覆盖榴莲、芒果、火龙果、山竹等东盟及广西特产",
    link: "http://www.xinminweekly.com.cn/shenghuo/2026/09/01/50935.html"
},
// 189. 百度智能云·推广新客专享
{
    id: 189,
    operator: "百度",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["新用户专享"],
    title: "百度智能云·推广新客专享优惠",
    startTime: "2026-09-01",
    endTime: "2026-09-15",
    desc: "百度智能云推广大使引荐用户可享新客专享价，仅限新用户购买。活动产品不支持降配、退款",
    remark: "限百度智能云新用户；不可与其他优惠叠加",
    link: "https://cloud.baidu.com/campaign/ambassador-product/index.html"
},
// 190. 百度之星程序设计大赛
{
    id: 190,
    operator: "百度",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["老用户专享"],
    title: "第22届百度之星程序设计大赛",
    startTime: "2026-08-23",
    endTime: "2026-09-19",
    desc: "百度公司举办的第22届百度之星程序设计大赛，促进高校程序设计和AI教学创新与改革",
    remark: "面向高校学生；需关注官网报名信息",
    link: "http://cxcyglpt.dlutci.edu.cn/comp/front/comp/info?id=MzQ3LTYzMjFjMQ"
},
// ============================================================
//  新增活动 191（平安银行信用卡自动充话费礼）
//  来源：用户提供截图 + 平安口袋银行官方活动页面
//  编号从 191 开始
// ============================================================

// 191. 平安银行信用卡自动充话费礼·领3-12元话费券
{
    id: 191,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["支付立减", "新用户专享"],
    title: "平安银行信用卡自动充话费礼·领3-12元话费券",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "平安银行信用卡特邀用户可领取随机价值3-12元自动充话费礼包一份，包含3张面值为1-4元的优惠券，优惠券面值随机组合，一次到账，分月生效。领取后开通口袋话费自动充并绑定平安信用卡支付，下一扣款日即可抵扣。优惠券与自动充笔笔9.98折同享",
    remark: "限平安银行信用卡特邀用户；同一客户活动期间限领1次；优惠券分3个月生效，每张有效期35天；需开通话费自动充功能后使用；不支持携号转网及虚拟号段",
    link: "https://b.pingan.com.cn/kuaizhan/v2/5K1467/20260417/k106510/index.html?nickname=&nonce=110046104&partnerid=C0013&wxname=%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C&wxno=gh_a977c8acfae7&openid=oiBF4joES0mY6_qitwHxdIrl8kJ4&timestamp=1788257206882&headimgurl=&subscribe=1&signature=31763d1958b76a1bec928ebc9876ef4b8929f8d9&unionid=oIBh4uDE4nLGx_i3bv_3X17i3SQA&sex=&thirdPartyAppId=G0003&enUmForShare=888888888888&strategyid=CC_W505851_U3-548616_A_C18005&usertagid=KDPT-3-548616&innerid=KDAPP-P116927-BFCQ-2&source=S202608032192&activity_FlowId=m_D0Q1SRekySKvBM9Y3672&traceid=50030_aqSpkrkVXSn&SSLSOURCE=BROP-CMP"
},
// 192. 平安银行信用卡推荐办卡·新户专享多重权益（修正分类）
{
    id: 192,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",              // ← 修正：由“号卡套餐类”改为“其他活动”
    subType: ["新用户专享", "领取福利"], // ← 修正：由“新用户号卡”改为“新用户专享”
    title: "平安银行信用卡·新户办卡享多重权益（岁岁平安/JOY卡）",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "通过推荐链接办理平安银行指定信用卡（岁岁平安卡/JOY银联卡），可享新户专属权益：①岁岁平安卡：天天返利全年至高返480元、338迎新省钱包（连续180天立减1.88元）、达标享五大平安守护；②JOY银联卡：新户好礼9.9元购（6选1）、第2年PLUS会员1分购、积分超值兑、口袋商城24期免息分期。年费优惠详见各卡种规则",
    remark: "限平安银行信用卡新户；需通过推荐链接申请；具体权益以银行官方活动细则为准",
    link: "https://mgmpa.gaofeie.com/pages/pabank-card-apply/pabank-card-apply?scene=sid%3A10001%2Cseriesid%3A10030%2Cuid%3A12965",
   canShare: true                      // ← 新增：显示「分享赚佣金」按钮
},
// 193. 招商银行信用卡新户开卡权益（可分享）
{
    id: 193,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["新用户专享", "领取福利"],
    title: "招商银行信用卡新户开卡权益·多卡种可选",
    startTime: "2026-08-01",
    endTime: "2026-09-30",
    desc: "招商银行信用卡新户申卡达标可享多款新户礼（多选一）：①京东联名卡：达标领1年PLUS会员+额外1年或120元券包（激活+绑京东支付+消费1笔满36元；额外5笔满20元）；②美团联名卡：领80元美团券或30天外卖减6元（消费1笔满36元+绑美团支付）；③标准信用卡（含星座/饿了么/bilibili/原神等20余种卡面）：领1000积分/笔笔返现/双肩包/煎炒锅等五选一（消费1笔满36元，支持支付宝/微信/云闪付）",
    remark: "限招商银行信用卡新户；需通过指定链接申请；权益达标后需在掌上生活APP或美团APP手动领取；礼品库存有限先到先得；活动时间至2026年9月30日",
    link: "https://res.cc.cmbimg.com/itafront/TrafficFront/index.html#/mgmpageinit/xbdmgmcs1?webAddress=9FX_ICONCFDDX&where=zs9_jd2&pageName=MRecContract&activityTitle=MGMXSDS202509JD2&appChn=05&dsid=&dscontr=&pretrackno=6faeb8a2cad94dd3816718575ca4f085&pretrack=10403788&mgmSm2Flag=1&mgmSource=share&m1TraceId=6faeb8a2cad94dd3816718575ca4f085",
    canShare: true                      // ← 新增：显示「分享赚佣金」按钮
},
// ============================================================
//  新增活动 194（广东移动30元100GB流量月包）
//  来源：用户提供短信 + 抖音截图
//  编号从 194 开始
// ============================================================

// 194. 广东移动30元100GB流量月包（24个月）
{
    id: 194,
    operator: "移动",
    province: "广东省",
    city: "全省",
    mainType: "流量类",
    subType: ["全国通用流量"],
    title: "广东移动30元100GB流量月包（24个月）",
    startTime: "2026-09-02",
    endTime: "2026-12-31",
    desc: "30元/月享100GB国内通用流量（不含港澳台），基础配置为5GB标准流量，剩余95GB为24个月促销赠送流量[reference:0]。优惠期24个月，到期自动取消，不改套餐不换号。无合约期，随时可注销",
    remark: "限收到邀请短信的广东移动用户参与，转发无效；仅限办理1次，优惠期24个月[reference:1]；流量当月有效，不可结转",
    link: "https://dx.10086.cn/LDlpEw",
    canShare: false
},
// ============================================================
//  新增活动 195-197（云南电信秋季营销流量套餐）
//  来源：云南电信网上营业厅
// ============================================================

// 195. 云南电信19元805G全国流量套餐
{
    id: 195,
    operator: "电信",
    province: "云南省",
    city: "全省",
    mainType: "号卡套餐类",
    subType: ["新用户号卡", "全国通用流量"],
    title: "云南电信19元805G全国流量套餐（秋季营销）",
    startTime: "2026-09-02",
    endTime: "2026-12-31",
    desc: "19元/月享805GB全国通用流量（不含港澳台），归属地云南，2026年秋季营销专属套餐",
    link: "https://shop.yn.189.cn/web/ap-goods/#/Product/pages/unstDetail/hk-index?productId=1798785101540524032&shareSource=FQWPYQ&type=BUSINESS&typeName=null&channelId=600008574665&staffPhone=13320532079&tlStaffPhone=13320532079&sii=1001864712477851251&index=SC",
    remark: "限云南电信用户；页面需JavaScript加载；具体资费及合约规则以商品详情页为准"
},
// 196. 云南电信29元1000G全国流量套餐
{
    id: 196,
    operator: "电信",
    province: "云南省",
    city: "全省",
    mainType: "号卡套餐类",
    subType: ["新用户号卡", "全国通用流量"],
    title: "云南电信29元1000G全国流量套餐（秋季营销）",
    startTime: "2026-09-02",
    endTime: "2026-12-31",
    desc: "29元/月享1000GB全国通用流量（不含港澳台），归属地云南，2026年秋季营销专属套餐",
    link: "https://shop.yn.189.cn/web/ap-goods/#/Product/pages/unstDetail/hk-index?productId=1798762346803789824&shareSource=FQWPYQ&type=BUSINESS&typeName=null&channelId=600008574665&staffPhone=13320532079&tlStaffPhone=13320532079&sii=1001864712477851250&index=SC",
    remark: "限云南电信用户；页面需JavaScript加载；具体资费及合约规则以商品详情页为准"
},
// 197. 云南电信39元1000G全国流量+权益套餐
{
    id: 197,
    operator: "电信",
    province: "云南省",
    city: "全省",
    mainType: "号卡套餐类",
    subType: ["新用户号卡", "全国通用流量", "会员权益类"],
    title: "云南电信39元1000G全国流量+权益套餐（秋季营销）",
    startTime: "2026-09-02",
    endTime: "2026-12-31",
    desc: "39元/月享1000GB全国通用流量（不含港澳台）+附加权益，归属地云南，2026年秋季营销专属套餐",
    link: "https://shop.yn.189.cn/web/ap-goods/#/Product/pages/unstDetail/hk-index?productId=1798739995796209664&shareSource=FQWPYQ&type=BUSINESS&typeName=null&channelId=600008574665&staffPhone=13320532079&tlStaffPhone=13320532079&sii=1001864712477851249&index=SC",
    remark: "限云南电信用户；页面需JavaScript加载；具体权益内容及资费规则以商品详情页为准"
}，
// ============================================================
//  新增活动 198（广东农行数字人民币红包）
//  来源：用户提供截图 + 农业银行掌银APP
//  编号从 198 开始
// ============================================================

// 198. 广东农行数字人民币红包·1元抽5-50元（话费/生活缴费通用）
{
    id: 198,
    operator: "银行",
    province: "广东省",
    city: "全省（深圳除外）",
    mainType: "话费充值类",
    subType: ["充值立减", "支付立减"],
    title: "广东农行数字人民币红包·1元抽5-50元（话费/生活缴费通用）",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "广东农行掌银用户（深圳除外）支付1元可抽取随机数字人民币红包（5/10/20/50元），支付款24小时内原路退回。红包可用于话费充值、生活缴费及全家/喜市多/朴朴/美团/京东等指定商户消费。每日08:30-23:00可参与，每月限1次，总量39974份先到先得。红包领取后10天内有效，消费金额需满红包金额2倍方可使用",
    remark: "限广东（深圳除外）农行掌银且数币钱包为三类及以上邀约客户；路径：掌银APP-城市专区-数惠农行币定有你；红包为数字人民币定向消费红包，不可提现；可叠加掌银支付立减活动实现45元充50元话费",
    link: "",
    canShare: false
},
// ============================================================
//  新增活动 199（农行信用卡天天返现79期）
//  来源：用户提供截图 + 农业银行掌银APP
//  编号从 199 开始
// ============================================================

// 199. 农行信用卡天天返现79期·单笔满18元随机返现
{
    id: 199,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["支付立减"],
    title: "农行信用卡天天返现79期·单笔满18元随机返现",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "农行信用卡主卡持卡人领取资格券后，在2026年9月内通过农行掌银、云闪付、微信、支付宝、京东、美团、拼多多、抖音、携程等线上渠道，使用农行信用卡单笔消费满18元，可享随机金额返现。每天限返1次，9月限返30次。返现刷卡金入账后不设有效期，仅可用于抵扣后续消费，不可取现",
    remark: "限农行信用卡主卡持卡人；需先领取资格券（限量150万份，先到先得）；8月29-31日仅可提前报名，期间消费不参与活动；退货后若金额不足18元将撤回返现并视为用掉返现机会；单位卡、EMV卡、乐分/家装分期专用卡不参与",
    link: "",
    canShare: false
},
// ============================================================
//  新增活动 200（云闪付扫微信收款码随机立减）
//  来源：用户提供截图 + 中国银联活动页面
//  编号从 200 开始
// ============================================================

// 200. 云闪付扫微信收款码随机立减·满5元至高减62元
{
    id: 200,
    operator: "银联",
    province: "广东省",
    city: "全省（深圳除外）",
    mainType: "其他活动",
    subType: ["支付立减"],
    title: "云闪付扫微信收款码随机立减·满5元至高减62元",
    startTime: "2026-09-02",
    endTime: "2026-12-31",
    desc: "广东（深圳除外）云闪付用户使用云闪付APP扫微信收款码支付，实付满5元可享随机立减，至高62元。每日07:00-23:59可参与，单卡单日限1次，单用户单日限3次。活动总名额不低于360万个，每日名额有限先到先得。需绑定62开头银联卡，GPS定位在广东省（深圳除外）",
    remark: "限GPS定位在广东省（深圳除外）的云闪付用户；需使用62开头银联卡；每日07:00-23:59；单卡单日1次，单用户单日3次；名额有限先到先得；需将云闪付APP升级至最新版本",
    link: "https://content.cup.com.cn/UCIWeb/outputWeb/coupon/coupon.html#/couponDetail?couponId=2102026072908660",
    canShare: false
},
// ============================================================
//  新增活动 201（农行省钱月卡·支付宝立减金）
//  来源：用户提供截图 + 农业银行掌银APP
//  编号从 201 开始
// ============================================================

// 201. 农行省钱月卡·0.01元起购5元支付宝立减金
{
    id: 201,
    operator: "银行",
    province: "全国",
    city: "全国",
    mainType: "其他活动",
    subType: ["支付立减"],
    title: "农行省钱月卡·0.01元起购5元支付宝立减金",
    startTime: "2026-09-01",
    endTime: "2026-09-30",
    desc: "农行掌银用户可通过首页下拉进入掌银助手，发送'省钱月卡'参与活动。支付0.01元或0.5元可购5元支付宝立减金（含3张1元+1张2元，共5元）。立减金需在农行APP-我的-礼券中手动领取至支付宝，有效期至2026年10月7日，限农行借记卡使用。部分用户反馈可多次参与（微信/支付宝/美团各一次）[reference:0][reference:1]",
    remark: "限农行借记卡用户；路径：农行APP首页下拉→掌银助手→发送'省钱月卡'；立减金需手动领取至支付宝；名额有限先到先得；不同用户支付金额可能不同（0.01元或0.5元）[reference:2]",
    link: "https://wx.abchina.com/webank/main-view/openTagForZHSes?id=w%2FO2bm0hmec%3D&dynamicData=51f9c91ed46436d05402a78836aa32041cf1c563ff67d7c3dab5be9a7c7fffdb&type=new",
    canShare: false
},
// ============================================================
//  新增活动 202（四川农行瓜分百万礼金）
//  来源：用户提供截图 + 农业银行掌银APP
//  编号从 202 开始
// ============================================================

// 202. 四川农行瓜分百万礼金·邀请好友抽微信立减金
{
    id: 202,
    operator: "银行",
    province: "四川省",
    city: "全省",
    mainType: "其他活动",
    subType: ["新用户专享", "支付立减"],
    title: "四川农行瓜分百万礼金·邀请好友抽微信立减金",
    startTime: "2026-04-01",
    endTime: "2026-12-31",
    desc: "四川农行掌银注册客户每月可获1次抽奖机会，支付0.02-0.1元随机金额后可领取奖品（至高666元微信立减金），支付金额1-3个工作日内原路退回。选择农行数字人民币钱包支付可再得1元微信立减金。邀请好友扫码参与活动，邀请人可获得邀请奖，受邀好友若为新注册掌银/数字人民币钱包客户，邀请人可额外获得奖励",
    remark: "限四川农行掌银注册客户；参与路径：①微信扫活动二维码；②关注“农行四川分行微银行”公众号-热门活动-瓜分百万；③农行掌银APP-城市专区-瓜分百万礼金；活动由蜂助手股份有限公司提供技术支持",
    link: "https://wx.abchina.com/webank/main-view/openTagForSC?id=gDU%2BHgXSy1Y%3D&dynamicData=pA3ReLln7%2BaQsscLxT1vwF2oeeOT%2FViC&displayParam=3XnK3qEc5hkMKzI3jwbNbw%3D%3D",
    canShare: true
},
];

// ============================================================
//  暴露给全局（供 HTML 中的活动工具箱读取）
// ============================================================
window.mainTypeEnum = mainTypeEnum;
window.subTypeMap = subTypeMap;
window.activityList = activityList;