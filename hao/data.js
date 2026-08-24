// ============================================================
//  数据区：所有卡片按分类分组
//  注意：icon 字段现在为可选，不填则自动从 url 获取 favicon
// ============================================================

var cardData = {
    '1': [
        {
            id: 195,
            url: "https://pay262.github.io/",
            title: "未来通信商城",
            desc: "正规大流量套餐，免费办理，全国包邮到家。"
            // 无 icon 字段 → 自动获取
        },
        {
            id: 180,
            url: "../app/haoka/02.html",
            title: "未来通信-2",
            desc: "全网大流量手机套餐，免费办理，全国包邮到家。"
        },
        {
            id: 180,
            url: "../app/haoka/03.html",
            title: "未来通信-3",
            desc: "全网大流量手机套餐，免费办理，全国包邮到家。"
        }
    ],
    '3': [
        {
            id: 125,
            url: "https://v.qq.com",
            title: "腾讯视频",
            desc: "中国领先的在线视频媒体平台,海量高清视频在线观看"
        },
        {
            id: 126,
            url: "https://www.youku.com/",
            title: "优酷",
            desc: "为好内容全力以赴 - 海量正版高清视频在线观看"
        },
        {
            id: 127,
            url: "https://www.iqiyi.com",
            title: "爱奇艺",
            desc: "在线视频网站-海量正版高清视频在线观看"
        },
        {
            id: 128,
            url: "https://www.mgtv.com",
            title: "芒果TV",
            desc: "大家都在看的在线视频网站- 热门综艺最新电影电视剧在线观看"
        },
        {
            id: 129,
            url: "https://www.bilibili.com",
            title: "哔哩哔哩",
            desc: "bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。"
        },
        {
            id: 135,
            url: "https://www.douyin.com",
            title: "抖音网页版",
            desc: "记录美好生活"
        },
        {
            id: 136,
            url: "https://www.kuaishou.com/",
            title: "快手网页版",
            desc: "湖光秋月两相和，潭面无风镜未磨。——刘禹锡《望洞庭》"
        },
        {
            id: 137,
            url: "https://music.163.com/",
            title: "网易云音乐",
            desc: "网易云音乐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。"
        },
        {
            id: 137,
            url: "https://www.zxzjhd.com/",
            title: "在线之家",
            desc: "海外资源为主的老牌知名影视网站"
        },
        {
            id: 137,
            url: "https://www.kmeiju.cc/",
            title: "美剧星球",
            desc: "专注海外影视剧的在线高清影视网站"
        },
        {
            id: 137,
            url: "https://www.libvio.cc/",
            title: "LIBVIO",
            desc: "以海外影视资源为主的老牌网站"
        },
        {
            id: 137,
            url: "https://gaze.run/",
            title: "注视影视",
            desc: "海外影视剧、国内高口碑影视剧资源为主的在线影视网站"
        },
        {
            id: 137,
            url: "https://www.novipnoad.net/",
            title: "No视频",
            desc: "主打海外影视剧资源，致力于最轻松的追剧体验"
        },
        {
            id: 137,
            url: "https://www.hanjukankan.com/",
            title: "韩剧看看",
            desc: "专注韩剧、韩综、韩影的免费在线影视剧网站"
        },
        {
            id: 137,
            url: "https://www.myd02.com/",
            title: "美益达·影视",
            desc: "全网影视剧资源、超清线路"
        }
    ],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [
        {
            id: 130,
            url: "https://www.aliyundrive.com",
            title: "阿里云盘",
            desc: "阿里云盘是一款速度快、不打扰、够安全、易于分享的个人网盘，欢迎你来体验。"
        },
        {
            id: 131,
            url: "https://www.123pan.com",
            title: "123云盘",
            desc: "上传下载尊享极速传输"
        },
        {
            id: 143,
            url: "https://cloud.189.cn",
            title: "天翼云盘",
            desc: "天翼云盘是中国电信推出的云存储服务，为用户提供跨平台的文件存储、备份、同步及分享服务，是国内领先的免费网盘，安全、可靠、稳定、快速。天翼云盘为用户守护数据资产。"
        },
        {
            id: 132,
            url: "https://www.jianguoyun.com/",
            title: "坚果云盘",
            desc: "坚果云是一款提供网盘|云盘|云服务的团队协助软件,可随时随地实现共享文件夹。坚果云网盘支持移动办公,协同办公,文件同步,数据备份,智能管理,在线编辑等功能。"
        },
        {
            id: 133,
            url: "https://pan.baidu.com",
            title: "百度网盘",
            desc: "百度网盘是一款国民级产品，已连续9年为超过7亿用户提供稳定、安全的个人云存储服务，已实现电脑、手机、电视等多种终端场景的覆盖和互联，并支持多类型文件的备份、分享、查看和处理"
        },
        {
            id: 134,
            url: "https://onedrive.live.com/",
            title: "OneDrive",
            desc: "个人云存储空间"
        },
        {
            id: 141,
            url: "https://pan.xunlei.com",
            title: "迅雷云盘",
            desc: "无需下载 , 文件想看就看"
        },
        {
            id: 142,
            url: "https://www.yun.cn",
            title: "UC网盘",
            desc: "UC网盘是UC浏览器推出的一款云服务产品，功能包括云存储、高清看剧、文件在线解压、PDF一键转换等。"
        }
    ],
    '10': [
        {
            id: 144,
            url: "https://cn.aliyun.com/",
            title: "阿里云",
            desc: "阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司之一。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准定制基于场景的行业解决方案。免费备案，7x24小时售后支持，助企业无忧上云。"
        },
        {
            id: 145,
            url: "https://cloud.tencent.com",
            title: "腾讯云",
            desc: "腾讯云为数百万的企业和开发者提供安全稳定的云计算服务，涵盖云服务器、云数据库、云存储、视频与CDN、域名注册等全方位云服务和各行业解决方案。"
        },
        {
            id: 146,
            url: "https://www.huaweicloud.com",
            title: "华为云",
            desc: "华为云提供稳定可靠、安全可信、可持续发展的云服务，致力于让云无处不在，让智能无所不及，共建智能世界云底座。助力企业降本增效，全球300万客户的共同选择。7x24小时专业服务支持，5天内无理由退订，免费快速备案。"
        },
        {
            id: 148,
            url: "https://www.ctyun.cn",
            title: "天翼云",
            desc: "中国电信-天翼云,云网融合,安全可信,专享定制"
        },
        {
            id: 149,
            url: "https://www.upyun.com",
            title: "又拍云",
            desc: "国内知名企业级云服务商,全球1100多个自建CDN节点,10TB保有带宽,为25万用户提供CDN加速,数据云存储,HTTPS／SSL证书,WebP,云处理,视频图片存储,短视频开发SDK,直播开发SDK,DDos高防等一站式加速解决方案!"
        },
        {
            id: 150,
            url: "https://www.qiniu.com",
            title: "七牛云",
            desc: "2011 年成立以来，七牛云致力于成为全球领先的一站式场景化智能视频云服务商，围绕数字化浪潮下的在线音视频需求，基于强大的云边一体化能力和低代码能力，持续在视频点播、互动直播、实时音视频、摄像头上云等领域，进行深度技术投入，提供面向业务场景的视频云解决方案。截至目前，有超过 100 万企业客户和开发者长期使用七牛云服务，包括 OPPO 、爱奇艺、平安银行、招商银行、上汽集团、芒果 TV 等知名企业。"
        },
        {
            id: 151,
            url: "https://cloud.baidu.com/",
            title: "百度云",
            desc: "百度智能云专注云计算、智能大数据、人工智能服务，提供稳定的云服务器、云主机、云存储、CDN、域名注册、物联网等云服务,支持API对接,快速备案等专业解决方案。"
        },
        {
            id: 152,
            url: "https://www.qingcloud.com/",
            title: "青云QingCloud",
            desc: "青云QingCloud完全国产化，核心技术100%自研；无缝打通公有云和私有云，交付完全一致的功能和体验；经大规模实践验证，行业落地经验丰富；“云、网、边、端”全面布局。"
        },
        {
            id: 153,
            url: "https://www.vpsor.cn",
            title: "硅云",
            desc: "领先的出海IaaS云计算基础设施服务提供商"
        },
        {
            id: 154,
            url: "https://www.jdcloud.com/",
            title: "京东云",
            desc: "京东云是京东科技集团旗下领先的云计算品牌"
        },
        {
            id: 155,
            url: "https://ecloud.10086.cn/",
            title: "移动云",
            desc: "中国移动旗下云业务品牌,提供云主机、云服务器、云空间、CDN、云硬盘、云数据库等云计算服务,支持热门产品免费试用,专注于场景制定行业解决方案,提供7*24小时服务,移动云,更安全,更智慧。"
        },
        {
            id: 156,
            url: "https://www.ksyun.com/",
            title: "金山云",
            desc: "全球高品质云服务专家，云计算领先平台，云产品解决方案，游戏云平台，先进医疗云平台，专业政务云、音视频解决方案"
        }
    ],
    '12': [
        {
            id: 157,
            url: "https://layui.dev/",
            title: "Layui",
            desc: "一套开源免费的 Web UI 组件库。采用自身极简的轻量级模块化规范，并遵循原生 HTML/CSS/JS 的开发模式，极易上手，开箱即用。非常适合网页界面的快速构建。"
        },
        {
            id: 213,
            url: "http://www.layui-vue.com/zh-CN/index",
            title: "Layui - Vue 前端 UI 框架",
            desc: "想不被别人踩在脚下有两种途径：变更强，变成翔。"
        },
        {
            id: 158,
            url: "https://cn.vuejs.org/",
            title: "Vue.js",
            desc: "Vue.js - 渐进式的 JavaScript 框架"
        },
        {
            id: 159,
            url: "#",
            title: "Bootstrap",
            desc: "Bootstrap是Twitter推出的一个用于前端开发的开源工具包。它由Twitter的设计师Mark Otto和Jacob Thornton合作开发，是一个CSS/HTML框架。目前，Bootstrap最新版本为5.0 。Bootstrap中文网致力于为广大国内开发者提供详尽的中文文档、代码实例等，助力开发者掌握并使用这一框架。"
        },
        {
            id: 160,
            url: "https://www.naiveui.com/zh-CN/os-theme",
            title: "Naive UI",
            desc: "满招损，谦受益。——《尚书•大禹谟》"
        },
        {
            id: 161,
            url: "https://www.iviewui.com/",
            title: "iView",
            desc: "基于 Vue.js 的 UI 组件库，用于研发企业级中后台产品。iView 官网。"
        },
        {
            id: 162,
            url: "https://www.tailwindcss.cn/",
            title: "Tailwind",
            desc: "Tailwind CSS 是一个功能类优先的 CSS 框架，它由 Adam Wathan 创建。本站提供 Tailwind CSS 官方文档中文翻译致力于为广大国内开发者提供准确的中文文档，助力开发者掌握并使用这一框架。"
        },
        {
            id: 163,
            url: "https://fontawesome.dashgame.com/",
            title: "Font Awesome",
            desc: "Font Awesome，一套绝佳的图标字体库和CSS框架。Font Awesome中文网。"
        },
        {
            id: 166,
            url: "https://www.openzui.com/",
            title: "ZUI",
            desc: "治于神者，众人不知其功；争于明者，众人知之。——《墨子•50章 公输》"
        }
    ],
    '13': [
        {
            id: 164,
            url: "https://www.runoob.com/",
            title: "菜鸟教程",
            desc: "菜鸟教程(www.runoob.com)提供了编程的基础技术教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。 同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习编程。.."
        },
        {
            id: 165,
            url: "https://www.w3school.com.cn/",
            title: "w3school",
            desc: "全球最大的中文 Web 技术教程。"
        },
        {
            id: 167,
            url: "https://www.oschina.net/",
            title: "开源中国",
            desc: "OSCHINA.NET 是目前领先的中文开源技术社区。我们传播开源的理念，推广开源项目，为 IT 开发者提供了一个发现、使用、并交流开源技术的平台"
        },
        {
            id: 178,
            url: "https://www.w3cschool.cn/",
            title: "w3cschool",
            desc: "w3cschool启用中文品牌名--编程狮，是一个专业的W3C前端开发及编程入门学习平台，提供包括HTML,CSS,Javascript,jQuery,C,PHP,Java,Python,Sql,Mysql等编程语言和开源技术的在线教程及使用手册，是类国外w3schools的W3C学习社区及菜鸟编程平台。"
        },
        {
            id: 179,
            url: "https://www.linuxcool.com/",
            title: "Linux命令大全",
            desc: "专注于Linux命令大全与详解的在线命令查询网站，包含Linux命令手册、Linux命令详解、Linux命令学习与shell脚本编程大全等优质学习资料，准确，丰富，稳定，在技术之路上为您护航！"
        }
    ],
    '14': [
        {
            id: 168,
            url: "https://c.runoob.com/",
            title: "菜鸟工具",
            desc: "菜鸟工具，为开发设计人员提供在线工具，网址导航，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具。致力于打造国内专业WEB开发工具，集成开发环境，WEB开发教程。.."
        },
        {
            id: 169,
            url: "https://tool.chinaz.com",
            title: "站长工具",
            desc: "站长工具是站长的必备工具。经常上站长工具可以了解SEO数据变化。还可以检测网站死链接、蜘蛛访问、HTML格式检测、网站速度测试、友情链接检查、网站域名IP查询、PR、权重查询、alexa、whois查询等等。"
        },
        {
            id: 170,
            url: "https://www.aizhan.com",
            title: "爱站网",
            desc: "爱站网站长工具提供网站收录查询和站长查询以及百度权重值查询等多个站长工具，免费查询各种工具，包括有关键词排名查询，百度收录查询等。"
        },
        {
            id: 171,
            url: "https://www.5118.com",
            title: "5118站长工具",
            desc: "5118通过对排名各类大数据挖掘,提供关键词挖掘,行业词库,站群权重监控,关键词排名监控,指数词,流量词挖掘工具等排名工作人员必备百度站长工具平台"
        },
        {
            id: 172,
            url: "https://www.51.la",
            title: "51LA",
            desc: "领先的数据统计服务商"
        },
        {
            id: 173,
            url: "https://tongji.baidu.com/",
            title: "百度统计",
            desc: "一站式智能数据分析与应用平台"
        },
        {
            id: 174,
            url: "https://urlsec.qq.com/complain.html",
            title: "腾讯网站拦截申诉",
            desc: "我们三人就像流星，毫无目标地飞逝，不知将在何处燃烧殆尽。"
        },
        {
            id: 175,
            url: "http://www.wetools.com/",
            title: "微工具",
            desc: "微工具致力于打造和收集各种方便、易用、便捷的在线工具，网友无需注册和下载安装即可使用各种在线工具。"
        },
        {
            id: 176,
            url: "https://tools.fun/index.html",
            title: "Tools-fun",
            desc: "开发人员工具箱，时间戳转换，json格式化，正则表达式，URLEncode，加密解密，Crontab，websocket，md5编码，base64编码，颜色转换，JSON/YAML/XML转换，AES、DES、RSA，数字进制转换，图片压缩，二维码生成，JavaScript格式化压缩，代码差异对比"
        },
        {
            id: 177,
            url: "https://www.bejson.com/",
            title: "在线JSON",
            desc: "在线,JSON,JSON 校验,格式化,xml转json 工具,在线工具,json视图,可视化,程序,服务器,域名注册,正则表达式,测试,在线json格式化工具,json 格式化,json格式化工具,json字符串格式化,json 在线查看器,json在线,json 在线验证,json tools online,在线文字对比工具"
        },
        {
            id: 196,
            url: "https://apis.jxcxin.cn/",
            title: "API Store",
            desc: "API Store 是江西创信云网络免费提供API数据接口调用服务平台 - 我们致力于为用户提供稳定、快速的免费API数据接口服务。"
        },
        {
            id: 214,
            url: "https://developer.aliyun.com/mirror/",
            title: "阿里巴巴镜像站",
            desc: "阿里巴巴开源镜像站，免费提供Linux镜像下载服务，拥有Ubuntu、CentOS、Deepin、MongoDB、Apache、Maven、Composer等多种开源软件镜像源，此外还提供域名解析DNS、网络授时NTP等服务，致力于为互联网用户提供全面，高效和稳定的基础服务。"
        }
    ]
};

// 友情链接数据
var friendLinks = [
    { title: "Nav", url: "#", target: "_blank" },
    { title: "云CDN", url: "#", target: "_blank", tooltip: "每月免费30G流量" },
    { title: "阿里云", url: "#", target: "_blank" }
];

// ============================================================
//  工具函数：自动获取 Favicon
// ============================================================

/**
 * 从URL中提取域名（用于获取favicon）
 * @param {string} url - 完整的URL地址
 * @returns {string} 域名（如 'example.com'）
 */
function extractDomain(url) {
    if (!url) return '';
    // 如果是相对路径或 #，则无法提取
    if (url.startsWith('#') || url.startsWith('../') || url.startsWith('./') || !url.includes('://')) {
        return '';
    }
    try {
        var domain = new URL(url).hostname;
        // 去掉 www. 前缀
        if (domain.startsWith('www.')) {
            domain = domain.slice(4);
        }
        return domain;
    } catch (e) {
        // 如果解析失败，尝试简单匹配
        var match = url.match(/^(?:https?:\/\/)?([^\/?#]+)/i);
        if (match) {
            var host = match[1];
            if (host.startsWith('www.')) host = host.slice(4);
            return host;
        }
        return '';
    }
}

/**
 * 生成 favicon 图片地址
 * @param {string} url - 卡片链接
 * @param {string} customIcon - 自定义图标地址（可选）
 * @returns {string} 图标URL
 */
function getFaviconUrl(url, customIcon) {
    // 如果提供了自定义图标，优先使用
    if (customIcon && customIcon.trim() !== '') {
        return customIcon;
    }
    var domain = extractDomain(url);
    if (!domain) {
        // 无法获取域名，使用默认占位图标（可替换为你的默认图片）
        return 'static/picture/default-icon.png';
    }
    // 使用 Google 的 favicon 服务（国内可访问）
    return 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://' + domain;
}

// ============================================================
//  渲染函数
// ============================================================

function createCardHTML(item) {
    var iconUrl = getFaviconUrl(item.url, item.icon);
    return '<div class="url-card col-6 col-sm-6 col-md-4 col-xl-5a col-xxl-6a" id="' + item.id + '">' +
        '    <div class="url-body default">' +
        '        <a href="' + item.url + '" target="_blank" data-url="' + item.url + '" class="card no-c mb-4" data-placement="bottom" data-toggle="tooltip" data-original-title="' + item.desc + '">' +
        '            <div class="card-body">' +
        '                <div class="url-content d-flex align-items-center">' +
        '                    <div class="url-img mr-2 d-flex align-items-center justify-content-center"><img class="lazy" data-src="' + iconUrl + '"></div>' +
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
//  站内搜索功能
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
//  执行渲染和搜索初始化
// ============================================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        renderAllCards();
        renderFriends();
        initSearch();
        if (typeof lazyLoadInstance !== 'undefined') {
            lazyLoadInstance.update();
        } else if (typeof LazyLoad !== 'undefined') {
            var lazy = new LazyLoad({ elements_selector: ".lazy" });
        }
    });
} else {
    renderAllCards();
    renderFriends();
    initSearch();
    if (typeof lazyLoadInstance !== 'undefined') {
        lazyLoadInstance.update();
    } else if (typeof LazyLoad !== 'undefined') {
        var lazy = new LazyLoad({ elements_selector: ".lazy" });
    }
}