// generate-seo.js
// 用法：node generate-seo.js
// 效果：为 data.json 中每个应用生成 app/{id}.html，并更新 sitemap.xml

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://pay262.github.io/pro/ku'; // ⚠️ 改成你的实际地址
const SITE_NAME = 'WL软件库';

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

if(!fs.existsSync('app')) fs.mkdirSync('app');

function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function buildDetailPage(app){
  const androidBtns = (app.androidLinks || []).map(l => 
    `<a class="dl-btn android" href="${esc(l.url)}" target="_blank" rel="noopener">📱 ${esc(l.provider || '网盘')}${l.pwd ? ' (提取码 ' + esc(l.pwd) + ')' : ''}</a>`
  ).join('');
  const iosBtn = app.iosUrl
    ? `<a class="dl-btn ios" href="${esc(app.iosUrl)}" target="_blank" rel="noopener">🍎 ${app.isTransform ? (app.iosType === 'clone' ? '分身安装' : '安装教程') : 'App Store'}</a>`
    : '';
  const historyRows = (app.historyVersions || []).map(v => `
    <div class="history-row">
      <div class="history-ver">v${esc(v.version)}${v.note ? `<div class="history-note">${esc(v.note)}</div>` : ''}</div>
      <div class="history-links">
        ${(v.androidLinks || []).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.provider || '下载')}</a>`).join('')}
        ${v.iosUrl ? `<a class="ios" href="${esc(v.iosUrl)}" target="_blank" rel="noopener">iOS</a>` : ''}
        ${(!v.androidLinks || !v.androidLinks.length) && !v.iosUrl ? '<span class="no-link">无下载</span>' : ''}
      </div>
    </div>
  `).join('');

  const title = `${esc(app.name)} v${esc(app.version)} - 下载 - ${SITE_NAME}`;
  const desc = esc(app.desc) + (app.category ? ` （${esc(app.category)}类应用）` : '');

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="keywords" content="${esc(app.name)},${esc(app.category || '')},${esc(app.name)}下载,${esc(app.name)}最新版">
<link rel="canonical" href="${DOMAIN}/app/${app.id}.html">
<meta property="og:title" content="${esc(app.name)} v${esc(app.version)}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="article">
<meta property="og:url" content="${DOMAIN}/app/${app.id}.html">
<meta property="og:site_name" content="${SITE_NAME}">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "${esc(app.name)}",
  "softwareVersion": "${esc(app.version)}",
  "applicationCategory": "${esc(app.category || 'Utilities')}",
  "operatingSystem": "${(app.androidLinks && app.androidLinks.length ? 'Android' : '') + (app.androidLinks && app.androidLinks.length && app.iosUrl ? ', ' : '') + (app.iosUrl ? 'iOS' : '')}",
  "description": "${esc(app.desc)}",
  "offers": {"@type": "Offer", "price": "0", "priceCurrency": "CNY"}
}
</script>
<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif}
body{background:#f5f6fa;color:#222;padding:20px;line-height:1.6}
.card{max-width:640px;margin:0 auto;background:#fff;border-radius:16px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,.06)}
.header{display:flex;align-items:center;gap:16px;margin-bottom:20px}
.icon{width:72px;height:72px;border-radius:16px;background:#f0f2f7;display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;overflow:hidden}
.icon img{width:100%;height:100%;object-fit:cover}
h1{font-size:22px;margin:0 0 6px}
.desc{color:#666;font-size:14px;margin-bottom:8px}
.meta{display:flex;gap:8px;flex-wrap:wrap;font-size:12px;color:#888}
.meta span{background:#f0f2f7;padding:2px 10px;border-radius:6px}
.note{background:#fff4e0;color:#e07b00;font-size:13px;padding:8px 12px;border-radius:8px;margin:12px 0;border-left:3px solid #f0a020}
.section{margin-top:24px;padding-top:20px;border-top:1px solid #eee}
.section h2{font-size:16px;margin-bottom:12px;color:#333}
.dl-btn{display:inline-flex;align-items:center;gap:6px;margin:6px 8px 6px 0;padding:10px 18px;border-radius:20px;text-decoration:none;font-weight:600;font-size:14px;background:#5b7bf9;color:#fff;transition:.15s}
.dl-btn:active{transform:scale(.97)}
.dl-btn.ios{background:#333}
.history-row{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #eee;flex-wrap:wrap}
.history-row:last-child{border-bottom:none}
.history-ver{font-weight:600;font-size:14px;flex:1;min-width:120px}
.history-note{font-size:12px;color:#888;font-weight:400;margin-top:2px}
.history-links{display:flex;gap:6px;flex-wrap:wrap}
.history-links a{font-size:12px;padding:5px 12px;border-radius:14px;background:#5b7bf9;color:#fff;text-decoration:none}
.history-links a.ios{background:#333}
.no-link{color:#aaa;font-size:12px}
.back{display:block;text-align:center;margin-top:24px;padding:12px;background:#f0f2f7;color:#5b7bf9;text-decoration:none;border-radius:10px;font-weight:600;font-size:14px}
.share{display:block;text-align:center;margin-top:10px;padding:12px;background:linear-gradient(135deg,#7b5df9,#5b7bf9);color:#fff;text-decoration:none;border-radius:10px;font-weight:600;font-size:14px;border:none;width:100%;cursor:pointer}
</style>
</head>
<body>
<div class="card">
  <div class="header">
    <div class="icon">${app.iconUrl ? `<img src="${esc(app.iconUrl)}" alt="${esc(app.name)}">` : esc(app.icon || '📦')}</div>
    <div style="flex:1;min-width:0">
      <h1>${esc(app.name)}</h1>
      <div class="desc">${esc(app.desc)}</div>
      <div class="meta">
        <span>v${esc(app.version)}</span>
        ${app.category ? `<span>${esc(app.category)}</span>` : ''}
        ${app.addedAt ? `<span>更新于 ${esc(app.addedAt)}</span>` : ''}
      </div>
    </div>
  </div>
  ${app.note ? `<div class="note">💡 ${esc(app.note)}</div>` : ''}

  ${androidBtns ? `<div class="section"><h2>📱 安卓下载</h2>${androidBtns}</div>` : ''}
  ${iosBtn ? `<div class="section"><h2>🍎 iOS 下载</h2>${iosBtn}</div>` : ''}
  ${historyRows ? `<div class="section"><h2>📜 历史版本</h2>${historyRows}</div>` : ''}

  <a class="back" href="../index.html">← 返回 ${SITE_NAME}首页</a>
  <button class="share" onclick="if(navigator.share){navigator.share({title:document.title,url:location.href})}else{navigator.clipboard.writeText(location.href).then(function(){alert('链接已复制')})}">📤 分享此应用</button>
</div>
</body>
</html>`;
}

// 生成所有详情页
let sitemapUrls = '';
data.apps.forEach(app => {
  const html = buildDetailPage(app);
  fs.writeFileSync(path.join('app', app.id + '.html'), html);
  sitemapUrls += `  <url>\n    <loc>${DOMAIN}/app/${app.id}.html</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  console.log('✅ 生成 app/' + app.id + '.html');
});

// 更新 sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${sitemapUrls}</urlset>`;
fs.writeFileSync('sitemap.xml', sitemap);

console.log(`\n🎉 完成！共生成 ${data.apps.length} 个详情页，sitemap.xml 已更新`);
console.log(`📁 请把 app/ 目录和 sitemap.xml 上传到 GitHub`);