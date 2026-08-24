// ==================== 数据区（在此增删改站点和友链） ====================
// 站点卡片数据
var siteData = [
    {
        id: 196,
        url: "https://apis.jxcxin.cn/",
        title: "API Store",
        desc: "API Store 是江西创信云网络免费提供API数据接口调用服务平台 - 我们致力于为用户提供稳定、快速的免费API数据接口服务。",
        icon: "static/picture/8bce6c6d7cd3cebca7434fc7f752fb13.ico"
    },
    {
        id: 214,
        url: "https://developer.aliyun.com/mirror/",
        title: "阿里巴巴镜像站",
        desc: "阿里巴巴开源镜像站，免费提供Linux镜像下载服务，拥有Ubuntu、CentOS、Deepin、MongoDB、Apache、Maven、Composer等多种开源软件镜像源，此外还提供域名解析DNS、网络授时NTP等服务，致力于为互联网用户提供全面，高效和稳定的基础服务。",
        icon: "static/picture/cfc0236899a5426586db147a7f977fdc.gif"
    }
    // 新增站点请在此继续添加对象，注意末尾逗号
];

// 友情链接数据
var friendLinks = [
    { title: "Nav", url: "#", target: "_blank" },
    { title: "云CDN", url: "#", target: "_blank", tooltip: "每月免费30G流量" },
    { title: "阿里云", url: "#", target: "_blank" }
];

// ==================== 渲染函数 ====================
function renderSites() {
    var container = document.getElementById('card-list');
    if (!container) return;
    var html = '';
    siteData.forEach(function(item) {
        html += '<div class="url-card col-6 col-sm-6 col-md-4 col-xl-5a col-xxl-6a" id="' + item.id + '">';
        html += '    <div class="url-body default">';
        html += '        <a href="' + item.url + '" target="_blank" data-url="' + item.url + '" class="card no-c mb-4" data-placement="bottom" data-toggle="tooltip" data-original-title="' + item.desc + '">';
        html += '            <div class="card-body">';
        html += '                <div class="url-content d-flex align-items-center">';
        html += '                    <div class="url-img mr-2 d-flex align-items-center justify-content-center"><img src="' + item.icon + '"></div>';
        html += '                    <div class="url-info flex-fill">';
        html += '                        <div class="text-sm overflowClip_1"><strong>' + item.title + '</strong></div>';
        html += '                        <p class="overflowClip_1 m-0 text-muted text-xs">' + item.desc + '</p>';
        html += '                    </div>';
        html += '                </div>';
        html += '            </div>';
        html += '        </a>';
        html += '        <a href="' + item.url + '" class="togo text-center" data-toggle="tooltip" data-placement="right" title="直达" rel="nofollow"><i class="iconfont icon-goto"></i></a>';
        html += '    </div>';
        html += '</div>';
    });
    container.innerHTML = html;
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

// ==================== 执行渲染 ====================
// 确保 DOM 加载完成后再生成内容
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        renderSites();
        renderFriends();
    });
} else {
    renderSites();
    renderFriends();
}