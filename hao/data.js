// ============================================================
//  数据区：所有卡片按分类分组
//  可选择性添加 icon 字段（自定义图标），不填则自动生成首字母
// ============================================================

var cardData = {
    '1': [
        { id: 195, url: "../app/haoka/01.html", title: "未来通信-1", desc: "全网大流量手机套餐，免费办理，全国包邮到家。" },
        { id: 180, url: "../app/haoka/02.html", title: "未来通信-2", desc: "全网大流量手机套餐，免费办理，全国包邮到家。" },
        { id: 180, url: "../app/haoka/03.html", title: "未来通信-3", desc: "全网大流量手机套餐，免费办理，全国包邮到家。" }
    ],
    '3': [
        { id: 125, url: "https://v.qq.com", title: "腾讯视频", desc: "中国领先的在线视频媒体平台,海量高清视频在线观看" },
        { id: 126, url: "https://www.youku.com/", title: "优酷", desc: "为好内容全力以赴 - 海量正版高清视频在线观看" },
        { id: 127, url: "https://www.iqiyi.com", title: "爱奇艺", desc: "在线视频网站-海量正版高清视频在线观看" },
        { id: 128, url: "https://www.mgtv.com", title: "芒果TV", desc: "大家都在看的在线视频网站- 热门综艺最新电影电视剧在线观看" },
        { id: 129, url: "https://www.bilibili.com", title: "哔哩哔哩", desc: "bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。" },
        { id: 135, url: "https://www.douyin.com", title: "抖音网页版", desc: "记录美好生活" },
        { id: 136, url: "https://www.kuaishou.com/", title: "快手网页版", desc: "湖光秋月两相和，潭面无风镜未磨。——刘禹锡《望洞庭》" },
        { id: 137, url: "https://music.163.com/", title: "网易云音乐", desc: "网易云音乐是一款专注于发现与分享的音乐产品。" },
        { id: 137, url: "https://www.zxzjhd.com/", title: "在线之家", desc: "海外资源为主的老牌知名影视网站" },
        { id: 137, url: "https://www.kmeiju.cc/", title: "美剧星球", desc: "专注海外影视剧的在线高清影视网站" },
        { id: 137, url: "https://www.libvio.cc/", title: "LIBVIO", desc: "以海外影视资源为主的老牌网站" },
        { id: 137, url: "https://gaze.run/", title: "注视影视", desc: "海外影视剧、国内高口碑影视剧资源" },
        { id: 137, url: "https://www.novipnoad.net/", title: "No视频", desc: "主打海外影视剧资源，致力于最轻松的追剧体验" },
        { id: 137, url: "https://www.hanjukankan.com/", title: "韩剧看看", desc: "专注韩剧、韩综、韩影的免费在线影视剧网站" },
        { id: 137, url: "https://www.myd02.com/", title: "美益达·影视", desc: "全网影视剧资源、超清线路" }
    ],
    '4': [], '5': [], '6': [], '7': [], '8': [],
    '9': [
        { id: 130, url: "https://www.aliyundrive.com", title: "阿里云盘", desc: "阿里云盘是一款速度快、不打扰、够安全、易于分享的个人网盘" },
        { id: 131, url: "https://www.123pan.com", title: "123云盘", desc: "上传下载尊享极速传输" },
        { id: 143, url: "https://cloud.189.cn", title: "天翼云盘", desc: "中国电信推出的云存储服务，安全可靠" },
        { id: 132, url: "https://www.jianguoyun.com/", title: "坚果云盘", desc: "提供网盘|云盘|云服务的团队协助软件" },
        { id: 133, url: "https://pan.baidu.com", title: "百度网盘", desc: "国民级产品，已连续9年为超过7亿用户提供服务" },
        { id: 134, url: "https://onedrive.live.com/", title: "OneDrive", desc: "个人云存储空间" },
        { id: 141, url: "https://pan.xunlei.com", title: "迅雷云盘", desc: "无需下载 , 文件想看就看" },
        { id: 142, url: "https://www.yun.cn", title: "UC网盘", desc: "UC浏览器推出的云服务产品" }
    ],
    '10': [
        { id: 144, url: "https://cn.aliyun.com/", title: "阿里云", desc: "阿里巴巴集团旗下公司，全球领先的云计算及人工智能科技公司" },
        { id: 145, url: "https://cloud.tencent.com", title: "腾讯云", desc: "为数百万的企业和开发者提供安全稳定的云计算服务" },
        { id: 146, url: "https://www.huaweicloud.com", title: "华为云", desc: "提供稳定可靠、安全可信、可持续发展的云服务" },
        { id: 148, url: "https://www.ctyun.cn", title: "天翼云", desc: "中国电信-天翼云,云网融合,安全可信" },
        { id: 149, url: "https://www.upyun.com", title: "又拍云", desc: "国内知名企业级云服务商,1100+ CDN节点" },
        { id: 150, url: "https://www.qiniu.com", title: "七牛云", desc: "全球领先的一站式场景化智能视频云服务商" },
        { id: 151, url: "https://cloud.baidu.com/", title: "百度云", desc: "专注云计算、智能大数据、人工智能服务" },
        { id: 152, url: "https://www.qingcloud.com/", title: "青云QingCloud", desc: "完全国产化，核心技术100%自研" },
        { id: 153, url: "https://www.vpsor.cn", title: "硅云", desc: "领先的出海IaaS云计算基础设施服务提供商" },
        { id: 154, url: "https://www.jdcloud.com/", title: "京东云", desc: "京东科技集团旗下领先的云计算品牌" },
        { id: 155, url: "https://ecloud.10086.cn/", title: "移动云", desc: "中国移动旗下云业务品牌" },
        { id: 156, url: "https://www.ksyun.com/", title: "金山云", desc: "全球高品质云服务专家" }
    ],
    '12': [
        { id: 157, url: "https://layui.dev/", title: "Layui", desc: "一套开源免费的 Web UI 组件库" },
        { id: 213, url: "http://www.layui-vue.com/zh-CN/index", title: "Layui - Vue 前端 UI 框架", desc: "基于 Vue 的 Layui 组件库" },
        { id: 158, url: "https://cn.vuejs.org/", title: "Vue.js", desc: "渐进式的 JavaScript 框架" },
        { id: 159, url: "#", title: "Bootstrap", desc: "CSS/HTML 框架，Twitter 出品" },
        { id: 160, url: "https://www.naiveui.com/zh-CN/os-theme", title: "Naive UI", desc: "基于 Vue 3 的组件库" },
        { id: 161, url: "https://www.iviewui.com/", title: "iView", desc: "基于 Vue.js 的 UI 组件库" },
        { id: 162, url: "https://www.tailwindcss.cn/", title: "Tailwind", desc: "功能类优先的 CSS 框架" },
        { id: 163, url: "https://fontawesome.dashgame.com/", title: "Font Awesome", desc: "绝佳的图标字体库和CSS框架" },
        { id: 166, url: "https://www.openzui.com/", title: "ZUI", desc: "开源前端 UI 框架" }
    ],
    '13': [
        { id: 164, url: "https://www.runoob.com/", title: "菜鸟教程", desc: "编程的基础技术教程" },
        { id: 165, url: "https://www.w3school.com.cn/", title: "w3school", desc: "全球最大的中文 Web 技术教程" },
        { id: 167, url: "https://www.oschina.net/", title: "开源中国", desc: "领先的中文开源技术社区" },
        { id: 178, url: "https://www.w3cschool.cn/", title: "w3cschool", desc: "专业的 W3C 前端开发及编程入门学习平台" },
        { id: 179, url: "https://www.linuxcool.com/", title: "Linux命令大全", desc: "在线Linux命令查询网站" }
    ],
    '14': [
        { id: 168, url: "https://c.runoob.com/", title: "菜鸟工具", desc: "在线开发工具集合" },
        { id: 169, url: "https://tool.chinaz.com", title: "站长工具", desc: "站长必备工具，包括SEO、检测等" },
        { id: 170, url: "https://www.aizhan.com", title: "爱站网", desc: "网站收录查询、百度权重查询" },
        { id: 171, url: "https://www.5118.com", title: "5118站长工具", desc: "大数据挖掘、关键词排名监控" },
        { id: 172, url: "https://www.51.la", title: "51LA", desc: "领先的数据统计服务商" },
        { id: 173, url: "https://tongji.baidu.com/", title: "百度统计", desc: "一站式智能数据分析与应用平台" },
        { id: 174, url: "https://urlsec.qq.com/complain.html", title: "腾讯网站拦截申诉", desc: "腾讯网站拦截申诉平台" },
        { id: 175, url: "http://www.wetools.com/", title: "微工具", desc: "收集各种方便、易用、便捷的在线工具" },
        { id: 176, url: "https://tools.fun/index.html", title: "Tools-fun", desc: "开发人员工具箱，含格式化、加密等" },
        { id: 177, url: "https://www.bejson.com/", title: "在线JSON", desc: "JSON校验、格式化、转换工具" },
        { id: 196, url: "https://apis.jxcxin.cn/", title: "API Store", desc: "免费API数据接口调用服务平台" },
        { id: 214, url: "https://developer.aliyun.com/mirror/", title: "阿里巴巴镜像站", desc: "开源软件镜像下载服务" }
    ]
};

var friendLinks = [
    { title: "Nav", url: "#", target: "_blank" },
    { title: "云CDN", url: "#", target: "_blank", tooltip: "每月免费30G流量" },
    { title: "阿里云", url: "#", target: "_blank" }
];

// ============================================================
//  工具函数：生成首字母 SVG（data:image 格式，即显即用）
// ============================================================

function getInitialSvgDataUri(title) {
    if (!title) title = '?';
    var initial = title.charAt(0).toUpperCase();
    // 一组鲜艳的颜色
    var colors = ['#FF6B6B','#4ECDC4','#45B7D1','#96CEB4','#FFEAA7','#DDA0DD','#FF8A5C','#A29BFE','#FD79A8','#00CEC9','#FDCB6E','#6C5CE7','#E17055','#00B894','#0984E3','#6C5CE7','#FDCB6E','#E17055'];
    var idx = initial.charCodeAt(0) % colors.length;
    var bg = colors[idx];
    // 生成 SVG 字符串并转为 data:image
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">' +
              '<circle cx="20" cy="20" r="20" fill="' + bg + '"/>' +
              '<text x="20" y="27" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold" font-family="Arial, sans-serif">' + initial + '</text>' +
              '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ============================================================
//  渲染函数（直接渲染首字母图标，无需外部网络）
// ============================================================

function createCardHTML(item) {
    // 如果定义了自定义图标，优先使用；否则使用首字母 data:image
    var iconSrc = item.icon ? item.icon : getInitialSvgDataUri(item.title);
    
    // 如果自定义图标，加上 onerror 回退到首字母
    var onerrorAttr = item.icon ? ' onerror="this.src=\'' + getInitialSvgDataUri(item.title) + '\'"' : '';
    
    return '<div class="url-card col-6 col-sm-6 col-md-4 col-xl-5a col-xxl-6a" id="' + item.id + '">' +
        '    <div class="url-body default">' +
        '        <a href="' + item.url + '" target="_blank" data-url="' + item.url + '" class="card no-c mb-4" data-placement="bottom" data-toggle="tooltip" data-original-title="' + item.desc + '">' +
        '            <div class="card-body">' +
        '                <div class="url-content d-flex align-items-center">' +
        '                    <div class="url-img mr-2 d-flex align-items-center justify-content-center" style="width:44px;height:44px;flex-shrink:0;">' +
        '                        <img src="' + iconSrc + '" style="width:40px;height:40px;object-fit:contain;border-radius:4px;"' + onerrorAttr + '>' +
        '                    </div>' +
        '                    <div class="url-info flex-fill">' +
        '                        <div class="text-sm overflowClip_1"><strong>' + item.title + '</strong></div>' +
        '                        <p class="overflowClip_1 m-0 text-muted text-xs">' + item.desc + '</p>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </a>' +
        '        <a href="' + item.url + '" class="togo text-center" data-toggle="tooltip" data-placement="right" title="直达" rel="nofollow"><i class="iconfont icon-goto"></i></a>' +
        '    </div>' +
        '</div>';
}

function renderAllCards() {
    for (var groupId in cardData) {
        var container = document.getElementById('card-group-' + groupId);
        if (!container) continue;
        var items = cardData[groupId];
        var html = '';
        items.forEach(function(item) {
            html += createCardHTML(item);
        });
        container.innerHTML = html;
    }
}

function renderFriends() {
    var container = document.getElementById('friendlink-list');
    if (!container) return;
    var html = '';
    friendLinks.forEach(function(item) {
        var titleAttr = item.tooltip ? ' title="' + item.tooltip + '"' : '';
        html += '<a href="' + item.url + '"' + titleAttr + ' target="' + item.target + '">' + item.title + '</a>';
    });
    container.innerHTML = html;
}

// ============================================================
//  站内搜索（保持不变）
// ============================================================

function initSearch() {
    var form = document.querySelector('.super-search-fm');
    var input = document.getElementById('search-text');
    var radioZhannei = document.getElementById('type-zhannei');
    if (!form || !input) return;

    form.addEventListener('submit', function(e) {
        if (radioZhannei && radioZhannei.checked) {
            e.preventDefault();
            filterCards(input.value);
        }
    });

    input.addEventListener('input', function() {
        if (radioZhannei && radioZhannei.checked) {
            filterCards(this.value);
        } else {
            showAllCards();
        }
    });

    var radios = document.querySelectorAll('input[name="type"]');
    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (radioZhannei && !radioZhannei.checked) {
                showAllCards();
            } else if (radioZhannei && radioZhannei.checked) {
                filterCards(input.value);
            }
        });
    });
}

function filterCards(keyword) {
    keyword = keyword.trim().toLowerCase();
    var cards = document.querySelectorAll('.url-card');
    cards.forEach(function(card) {
        var title = card.querySelector('.text-sm strong') ? card.querySelector('.text-sm strong').innerText.toLowerCase() : '';
        var desc = card.querySelector('.text-muted.text-xs') ? card.querySelector('.text-muted.text-xs').innerText.toLowerCase() : '';
        var match = (title.indexOf(keyword) !== -1) || (desc.indexOf(keyword) !== -1);
        if (keyword === '') match = true;
        card.style.display = match ? '' : 'none';
    });
}

function showAllCards() {
    var cards = document.querySelectorAll('.url-card');
    cards.forEach(function(card) {
        card.style.display = '';
    });
}

// ============================================================
//  执行渲染
// ============================================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        renderAllCards();
        renderFriends();
        initSearch();
    });
} else {
    renderAllCards();
    renderFriends();
    initSearch();
}