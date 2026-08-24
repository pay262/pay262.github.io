// ============================================================
//  分类定义（所有分类集中管理）
// ============================================================
var categories = [
    { id: 1, name: 'AI 工具', icon: 'fa-brain' },
    { id: 2, name: '开发运维', icon: 'fa-code' },
    { id: 3, name: '设计创意', icon: 'fa-paint-brush' },
    { id: 4, name: '文档处理', icon: 'fa-file-text' },
    { id: 5, name: '网络营销', icon: 'fa-line-chart' },
    { id: 6, name: '学术教育', icon: 'fa-graduation-cap' },
    { id: 7, name: '实用查询', icon: 'fa-search' }
];

// ============================================================
//  卡片数据（按分类ID存放）
// ============================================================
var cardData = {
    1: [
        { id: 301, url: "https://chat.openai.com", title: "ChatGPT", desc: "OpenAI 推出的对话式 AI 助手" },
        { id: 302, url: "https://www.deepseek.com", title: "DeepSeek", desc: "深度求索推出的 AI 助手" },
        { id: 303, url: "https://www.midjourney.com", title: "Midjourney", desc: "强大的 AI 绘画工具" },
        { id: 304, url: "https://stablediffusionweb.com", title: "Stable Diffusion", desc: "开源的 AI 图像生成模型" },
        { id: 305, url: "https://www.notion.so", title: "Notion AI", desc: "集成 AI 能力的笔记与协作平台" },
        { id: 306, url: "https://gamma.app", title: "Gamma", desc: "AI 驱动的 PPT 和文档生成工具" },
        { id: 307, url: "https://www.perplexity.ai", title: "Perplexity", desc: "AI 驱动的智能搜索引擎" },
        { id: 308, url: "https://www.claude.ai", title: "Claude", desc: "Anthropic 推出的 AI 助手" }
    ],
    2: [
        { id: 201, url: "https://github.com", title: "GitHub", desc: "全球最大的代码托管与协作平台" },
        { id: 202, url: "https://stackoverflow.com", title: "Stack Overflow", desc: "全球程序员的技术问答社区" },
        { id: 203, url: "https://www.json.cn", title: "JSON.cn", desc: "JSON 格式化、校验与在线编辑工具" },
        { id: 204, url: "https://c.runoob.com", title: "菜鸟工具", desc: "在线代码运行与开发工具集合" },
        { id: 205, url: "https://tool.lu", title: "在线工具", desc: "程序员常用的开发工具箱" },
        { id: 206, url: "https://www.bejson.com", title: "BeJSON", desc: "JSON 在线解析与格式化工具" },
        { id: 207, url: "https://regex101.com", title: "Regex101", desc: "正则表达式在线测试与调试工具" },
        { id: 208, url: "https://devdocs.io", title: "DevDocs", desc: "聚合的编程语言与框架 API 文档" }
    ],
    3: [
        { id: 401, url: "https://www.figma.com", title: "Figma", desc: "云端 UI/UX 设计与协作工具" },
        { id: 402, url: "https://www.canva.com", title: "Canva", desc: "在线平面设计与海报制作工具" },
        { id: 403, url: "https://www.behance.net", title: "Behance", desc: "全球设计师作品展示平台" },
        { id: 404, url: "https://dribbble.com", title: "Dribbble", desc: "设计师作品分享与灵感社区" },
        { id: 405, url: "https://www.iconfont.cn", title: "Iconfont", desc: "阿里巴巴矢量图标库" },
        { id: 406, url: "https://coolors.co", title: "Coolors", desc: "在线配色方案生成工具" },
        { id: 407, url: "https://www.pexels.com", title: "Pexels", desc: "免费可商用的高清图片素材库" },
        { id: 408, url: "https://unsplash.com", title: "Unsplash", desc: "高质量免费图片素材网站" }
    ],
    4: [
        { id: 501, url: "https://www.ilovepdf.com", title: "iLovePDF", desc: "在线 PDF 合并、拆分、压缩与转换工具" },
        { id: 502, url: "https://smallpdf.com", title: "Smallpdf", desc: "PDF 在线处理工具集" },
        { id: 503, url: "https://www.online-convert.com", title: "Online Convert", desc: "音视频、文档、图片等多种格式在线转换" },
        { id: 504, url: "https://convertio.co", title: "Convertio", desc: "支持超过 300 种格式的文件在线转换" },
        { id: 505, url: "https://www.yunbg.com", title: "云表格", desc: "在线 Excel/表格协作工具" },
        { id: 506, url: "https://ocr.space", title: "OCR Space", desc: "在线图片文字识别（OCR）工具" }
    ],
    5: [
        { id: 601, url: "https://tongji.baidu.com", title: "百度统计", desc: "网站流量分析与数据监控平台" },
        { id: 602, url: "https://www.51.la", title: "51LA", desc: "网站流量统计与数据分析服务" },
        { id: 603, url: "https://tool.chinaz.com", title: "站长工具", desc: "SEO 查询、权重检测等站长必备工具" },
        { id: 604, url: "https://www.aizhan.com", title: "爱站网", desc: "网站收录查询、关键词排名监控" },
        { id: 605, url: "https://www.5118.com", title: "5118", desc: "关键词挖掘与大数据分析平台" },
        { id: 606, url: "https://www.weibo.com", title: "微博", desc: "国内主流社交媒体与营销平台" }
    ],
    6: [
        { id: 701, url: "https://scholar.google.com", title: "Google 学术", desc: "全球学术文献搜索引擎" },
        { id: 702, url: "https://www.cnki.net", title: "中国知网", desc: "国内最大的学术文献数据库" },
        { id: 703, url: "https://www.w3school.com.cn", title: "W3School", desc: "Web 技术在线教程" },
        { id: 704, url: "https://www.runoob.com", title: "菜鸟教程", desc: "编程语言与开发技术教程" },
        { id: 705, url: "https://www.bilibili.com", title: "B站", desc: "海量学习视频与课程资源" },
        { id: 706, url: "https://www.icourse163.org", title: "中国大学MOOC", desc: "国内顶尖高校的在线课程平台" }
    ],
    7: [
        { id: 801, url: "https://www.baidu.com", title: "百度", desc: "国内最大的中文搜索引擎" },
        { id: 802, url: "https://www.google.com", title: "Google", desc: "全球最大的搜索引擎" },
        { id: 803, url: "https://www.bing.com", title: "必应", desc: "微软推出的搜索引擎" },
        { id: 804, url: "https://www.12306.cn", title: "12306", desc: "中国铁路官方购票平台" },
        { id: 805, url: "https://www.qunar.com", title: "去哪儿", desc: "机票、酒店、旅游预订平台" },
        { id: 806, url: "https://www.kuaidi100.com", title: "快递100", desc: "快递物流信息查询平台" },
        { id: 807, url: "https://www.tianqi.com", title: "天气网", desc: "全国天气预报查询" }
    ]
};

// ============================================================
//  友情链接
// ============================================================
var friendLinks = [
    { title: "Nav", url: "#", target: "_blank" },
    { title: "云CDN", url: "#", target: "_blank", tooltip: "每月免费30G流量" },
    { title: "阿里云", url: "#", target: "_blank" }
];

// ============================================================
//  工具函数：生成首字母 SVG（data:image）
// ============================================================
function getInitialSvgDataUri(title) {
    if (!title) title = '?';
    var initial = title.charAt(0).toUpperCase();
    var colors = ['#FF6B6B','#4ECDC4','#45B7D1','#96CEB4','#FFEAA7','#DDA0DD','#FF8A5C','#A29BFE','#FD79A8','#00CEC9','#FDCB6E','#6C5CE7','#E17055','#00B894','#0984E3','#6C5CE7','#FDCB6E','#E17055'];
    var idx = initial.charCodeAt(0) % colors.length;
    var bg = colors[idx];
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">' +
              '<circle cx="20" cy="20" r="20" fill="' + bg + '"/>' +
              '<text x="20" y="27" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold" font-family="Arial, sans-serif">' + initial + '</text>' +
              '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ============================================================
//  渲染函数
// ============================================================
function createCardHTML(item) {
    var iconSrc = item.icon ? item.icon : getInitialSvgDataUri(item.title);
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

// ---- 生成侧边栏菜单 ----
function renderSidebarMenu() {
    var menuContainer = document.getElementById('dynamic-menu');
    if (!menuContainer) return;
    var html = '';
    categories.forEach(function(cat) {
        html += '<li class="sidebar-item"><a href="#category-' + cat.id + '" class="smooth">' +
                '<i class="fa ' + cat.icon + ' fa-lg icon-fw icon-lg mr-2"></i><span>' + cat.name + '</span></a></li>';
    });
    menuContainer.innerHTML = html;
}

// ---- 生成内容区域（分类标题 + 卡片容器） ----
function renderContent() {
    var contentContainer = document.getElementById('dynamic-content');
    if (!contentContainer) return;
    var html = '';
    categories.forEach(function(cat) {
        // 分类标题
        html += '<div class="d-flex flex-fill" id="category-' + cat.id + '">' +
                '    <h4 class="text-gray text-lg mb-4"><i class="fa ' + cat.icon + ' fa-lg icon-fw icon-lg mr-2"></i> ' + cat.name + '</h4>' +
                '    <div class="flex-fill"></div>' +
                '</div>';
        // 卡片容器（row）
        html += '<div class="row sortable" id="card-group-' + cat.id + '"></div><br />';
    });
    contentContainer.innerHTML = html;
    
    // 渲染卡片数据
    for (var id in cardData) {
        var container = document.getElementById('card-group-' + id);
        if (!container) continue;
        var items = cardData[id];
        var cardHtml = '';
        items.forEach(function(item) {
            cardHtml += createCardHTML(item);
        });
        container.innerHTML = cardHtml;
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
//  执行渲染（必须按顺序）
// ============================================================
function init() {
    renderSidebarMenu();   // 先生成菜单
    renderContent();       // 再生成内容和卡片
    renderFriends();
    initSearch();
    // 如果页面有懒加载，可以重新初始化
    if (typeof lazyLoadInstance !== 'undefined') {
        lazyLoadInstance.update();
    } else if (typeof LazyLoad !== 'undefined') {
        var lazy = new LazyLoad({ elements_selector: ".lazy" });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}