/* ═══════════════════════════════════════════════════════════════════
 * 随身WiFi 增强控制台 · 注入脚本
 * 部署位置: https://pay262.github.io/tool/wifi-panel.js
 * ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  if (document.getElementById('zz-panel')) return;

  const CFG = {
    refreshInterval: 3000,
    supportedBands: [1, 3, 5, 8, 38, 39, 40, 41],
  };

  const S = {
    collapsed: false,
    autoRefresh: true,
    timer: null,
    lastUpdate: 0,
    busy: false,
    data: {},
  };

  const CSS = `
    #zz-panel{position:fixed;right:10px;bottom:10px;width:340px;max-width:calc(100vw - 20px);background:#1a1d27;color:#e8eaf0;border:1px solid #343a4d;border-radius:12px;font-family:-apple-system,'Segoe UI',Roboto,sans-serif;font-size:12px;box-shadow:0 8px 32px rgba(0,0,0,.5);z-index:2147483647;transition:all .2s;max-height:calc(100vh - 20px);display:flex;flex-direction:column}
    #zz-panel.collapsed{height:42px;overflow:hidden}
    #zz-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:linear-gradient(135deg,#4f7cff,#7c5cff);border-radius:12px 12px 0 0;cursor:pointer;user-select:none;font-weight:600;font-size:13px;color:#fff}
    #zz-panel.collapsed #zz-header{border-radius:12px}
    #zz-header .zz-title{display:flex;align-items:center;gap:6px}
    #zz-toggle{background:rgba(255,255,255,.2);border:none;color:#fff;width:24px;height:24px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1}
    #zz-body{overflow-y:auto;padding:10px;flex:1}
    .zz-card{background:#222633;border-radius:8px;padding:10px 12px;margin-bottom:8px}
    .zz-card-title{font-size:10px;color:#8b91a5;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center}
    .zz-row{display:flex;justify-content:space-between;align-items:baseline;padding:3px 0;font-size:11.5px;gap:8px}
    .zz-row .k{color:#8b91a5;flex-shrink:0}
    .zz-row .v{font-family:monospace;font-size:11px;text-align:right;word-break:break-all;color:#e8eaf0}
    .zz-v-ok{color:#2ecc71!important}
    .zz-v-warn{color:#f39c12!important}
    .zz-v-err{color:#ff8a80!important}
    .zz-v-dim{color:#8b91a5!important}
    .zz-signal-bars{display:inline-flex;gap:2px;align-items:flex-end;height:16px;margin-right:6px;vertical-align:middle}
    .zz-signal-bars .b{width:3px;background:#343a4d;border-radius:1px}
    .zz-signal-bars .b.on{background:#2ecc71}
    .zz-signal-bars .b:nth-child(1){height:4px}
    .zz-signal-bars .b:nth-child(2){height:7px}
    .zz-signal-bars .b:nth-child(3){height:10px}
    .zz-signal-bars .b:nth-child(4){height:13px}
    .zz-signal-bars .b:nth-child(5){height:16px}
    .zz-band-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:6px}
    .zz-band-btn{padding:7px 4px;background:#2a2e3d;border:1px solid #343a4d;border-radius:6px;color:#e8eaf0;font-size:11px;font-family:monospace;cursor:pointer;transition:all .15s}
    .zz-band-btn:hover{border-color:#4f7cff;color:#7fa4ff}
    .zz-band-btn:active{background:#4f7cff;color:#fff}
    .zz-action-btn{width:100%;padding:9px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;border:none;font-family:inherit;margin-bottom:6px;transition:all .15s}
    .zz-action-btn:active{transform:scale(.98)}
    .zz-btn-primary{background:#4f7cff;color:#fff}
    .zz-btn-danger{background:rgba(231,76,60,.15);color:#ff8a80;border:1px solid rgba(231,76,60,.3)}
    .zz-btn-ghost{background:transparent;color:#8b91a5;border:1px solid #343a4d}
    .zz-footer{font-size:10px;color:#8b91a5;text-align:center;padding:6px 12px 8px;display:flex;justify-content:space-between}
    .zz-footer .zz-fresh{color:#4f7cff}
    .zz-toast{position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#222633;border:1px solid #4f7cff;color:#7fa4ff;padding:8px 16px;border-radius:6px;font-size:12px;z-index:2147483647;box-shadow:0 4px 12px rgba(0,0,0,.5)}
    .zz-toast.ok{border-color:#2ecc71;color:#2ecc71}
    .zz-toast.err{border-color:#e74c3c;color:#ff8a80}
    .zz-loading{display:inline-block;width:10px;height:10px;border:2px solid rgba(255,255,255,.2);border-top-color:#4f7cff;border-radius:50%;animation:zz-spin .8s linear infinite}
    @keyframes zz-spin{to{transform:rotate(360deg)}}
  `;

  function fmtBytes(b) {
    b = parseInt(b, 10) || 0;
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    if (b < 1073741824) return (b / 1048576).toFixed(1) + ' MB';
    return (b / 1073741824).toFixed(2) + ' GB';
  }
  function fmtTime(s) {
    s = parseInt(s, 10) || 0;
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    return h > 0 ? h + '小时' + m + '分' : m + '分钟';
  }
  function mask(str, keep) {
    keep = keep || 4;
    if (!str || str.length <= keep * 2) return str || '—';
    return str.substring(0, keep) + '****' + str.substring(str.length - keep);
  }
  function toast(msg, type, dur) {
    type = type || 'info'; dur = dur || 2500;
    const el = document.createElement('div');
    el.className = 'zz-toast' + (type === 'ok' ? ' ok' : type === 'err' ? ' err' : '');
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () {
      el.style.opacity = '0'; el.style.transition = 'opacity .3s';
      setTimeout(function () { el.remove(); }, 300);
    }, dur);
  }
  function getCmd(cmd) {
    var url = '/goform/goform_get_cmd_process?multi_data=1&cmd=' + encodeURIComponent(cmd) + '&_=' + Date.now();
    return fetch(url, { credentials: 'include' }).then(function (r) { return r.json(); });
  }
  function setCmd(body) {
    return fetch('/goform/goform_set_cmd_process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body,
      credentials: 'include',
    }).then(function (r) { return r.text(); });
  }

  function refreshData() {
    if (S.busy) return;
    S.busy = true;
    var cmd = [
      'signalbar', 'rssi', 'lte_rsrp',
      'network_provider', 'network_type', 'sub_network_type',
      'ppp_status', 'modem_main_state',
      'sim_current_type', 'sim_lock_status', 'sim_iccid', 'sim_imsi',
      'imei', 'wa_inner_version', 'SSID1',
      'cell_id', 'mcc', 'mnc',
      'realtime_tx_bytes', 'realtime_rx_bytes',
      'monthly_tx_bytes', 'monthly_rx_bytes',
      'realtime_time', 'monthly_time'
    ].join(',');
    getCmd(cmd).then(function (d) {
      S.data = d;
      S.lastUpdate = Date.now();
      renderPanel();
    }).catch(function (e) { console.warn('[ZZ]', e); })
      .then(function () { S.busy = false; });
  }

  function renderPanel() {
    var body = document.getElementById('zz-body');
    if (!body) return;
    var d = S.data;
    var sb = parseInt(d.signalbar, 10) || 0;
    var rssi = d.lte_rsrp || d.rssi || '—';
    var bars = [1, 2, 3, 4, 5].map(function (i) {
      return '<span class="b ' + (i <= sb ? 'on' : '') + '"></span>';
    }).join('');
    var signalCls = sb >= 4 ? 'zz-v-ok' : sb >= 2 ? 'zz-v-warn' : 'zz-v-err';
    var pppOk = d.ppp_status === 'ppp_connected';
    var slotName = d.sim_current_type === '0' ? '外置卡' : d.sim_current_type === '1' ? '内置卡' : '未知';
    var lockName = d.sim_lock_status === 'unlock' ? '未锁定' : '已锁定';
    var phoneDisplay = d.sim_iccid ? mask(d.sim_iccid.replace('+86', ''), 4) : '—';
    var imsiDisplay = d.sim_imsi ? mask(d.sim_imsi, 5) : '—';
    var imeiDisplay = d.imei ? mask(d.imei, 5) : '—';
    var provColor = /Mobile|移动/.test(d.network_provider || '') ? '#4f7cff'
      : /Unicom|联通/.test(d.network_provider || '') ? '#ff8a80'
      : /Telecom|电信/.test(d.network_provider || '') ? '#52d0d0'
      : '#e8eaf0';

    body.innerHTML =
      '<div class="zz-card"><div class="zz-card-title">📶 信号</div>' +
        '<div class="zz-row"><span class="k"><span class="zz-signal-bars">' + bars + '</span>' + sb + ' / 5 格</span><span class="v ' + signalCls + '">' + rssi + ' dBm</span></div>' +
        '<div class="zz-row"><span class="k">运营商</span><span class="v" style="color:' + provColor + ';font-weight:600;">' + (d.network_provider || '—') + '</span></div>' +
        '<div class="zz-row"><span class="k">网络</span><span class="v">' + (d.network_type || '—') + (d.sub_network_type ? ' / ' + d.sub_network_type : '') + '</span></div>' +
        '<div class="zz-row"><span class="k">拨号</span><span class="v ' + (pppOk ? 'zz-v-ok' : 'zz-v-err') + '">' + (pppOk ? '已连接' : d.ppp_status || '未知') + '</span></div>' +
      '</div>' +
      '<div class="zz-card"><div class="zz-card-title">💾 流量</div>' +
        '<div class="zz-row"><span class="k">本月</span><span class="v">↓ ' + fmtBytes(d.monthly_rx_bytes) + ' / ↑ ' + fmtBytes(d.monthly_tx_bytes) + '</span></div>' +
        '<div class="zz-row"><span class="k">本次</span><span class="v">↓ ' + fmtBytes(d.realtime_rx_bytes) + ' / ↑ ' + fmtBytes(d.realtime_tx_bytes) + '</span></div>' +
        '<div class="zz-row"><span class="k">在线时长</span><span class="v">' + fmtTime(d.realtime_time) + '</span></div>' +
      '</div>' +
      '<div class="zz-card"><div class="zz-card-title">📱 SIM / 卡槽</div>' +
        '<div class="zz-row"><span class="k">当前卡槽</span><span class="v" style="font-weight:600;">' + slotName + '</span></div>' +
        '<div class="zz-row"><span class="k">锁定状态</span><span class="v">' + lockName + '</span></div>' +
        '<div class="zz-row"><span class="k">手机号</span><span class="v">' + phoneDisplay + '</span></div>' +
        '<div class="zz-row"><span class="k">IMSI</span><span class="v">' + imsiDisplay + '</span></div>' +
      '</div>' +
      '<div class="zz-card"><div class="zz-card-title">🆔 设备</div>' +
        '<div class="zz-row"><span class="k">IMEI</span><span class="v">' + imeiDisplay + '</span></div>' +
        '<div class="zz-row"><span class="k">固件</span><span class="v" style="font-size:10px;">' + (d.wa_inner_version || '—').substring(0, 30) + '</span></div>' +
        '<div class="zz-row"><span class="k">基站</span><span class="v">' + (d.cell_id || '—') + ' (' + (d.mcc || '?') + '/' + (d.mnc || '?') + ')</span></div>' +
        '<div class="zz-row"><span class="k">热点名</span><span class="v">' + (d.SSID1 || '—') + '</span></div>' +
      '</div>' +
      '<div class="zz-card"><div class="zz-card-title">🔒 频段锁定</div>' +
        '<div class="zz-band-grid">' + CFG.supportedBands.map(function (n) {
          return '<button class="zz-band-btn" data-band="' + n + '">B' + n + '</button>';
        }).join('') + '</div>' +
        '<button class="zz-action-btn zz-btn-ghost" data-action="unlock">解除频段锁定</button>' +
      '</div>' +
      '<div class="zz-card"><div class="zz-card-title">🔄 卡槽切换</div>' +
        '<button class="zz-action-btn zz-btn-primary" data-action="switch-external">切到外置卡</button>' +
        '<button class="zz-action-btn zz-btn-primary" data-action="switch-internal">切到内置卡</button>' +
      '</div>';

    body.querySelectorAll('[data-band]').forEach(function (btn) {
      btn.onclick = function () { lockBand(parseInt(btn.dataset.band, 10)); };
    });
    body.querySelectorAll('[data-action]').forEach(function (btn) {
      btn.onclick = function () {
        var a = btn.dataset.action;
        if (a === 'unlock') unlockBand();
        else if (a === 'switch-external') switchSim(0);
        else if (a === 'switch-internal') switchSim(1);
      };
    });
    var footer = document.getElementById('zz-footer');
    if (footer) {
      var ago = Math.floor((Date.now() - S.lastUpdate) / 1000);
      footer.innerHTML = '<span class="zz-fresh">' + (ago < 1 ? '刚刚刷新' : ago + ' 秒前') + '</span><span>自动刷新: ' + (S.autoRefresh ? '开' : '关') + '</span>';
    }
  }

  function lockBand(band) {
    if (!confirm('⚠️ 确认锁定频段 B' + band + '？\n\n锁定后设备可能短暂断网，且只能使用该频段。\n如果本地没有 B' + band + ' 信号，设备将无法上网。')) return;
    toast('正在锁定 B' + band + '...', 'info');
    setCmd('goformId=GOFORM_SET_BAND&band_list=LTEB' + band)
      .then(function () {
        toast('✓ 已提交 B' + band + ' 锁定，请等待设备搜网', 'ok', 4000);
        setTimeout(refreshData, 5000);
      }).catch(function (e) { toast('锁定失败: ' + e.message, 'err', 4000); });
  }
  function unlockBand() {
    if (!confirm('⚠️ 确认解除频段锁定？\n\n设备将恢复全频段自动搜网。')) return;
    toast('正在解除...', 'info');
    setCmd('goformId=GOFORM_SET_BAND&band_list=')
      .then(function () {
        toast('✓ 已提交解锁，设备将重新搜网', 'ok', 4000);
        setTimeout(refreshData, 5000);
      }).catch(function (e) { toast('解锁失败: ' + e.message, 'err', 4000); });
  }
  function switchSim(type) {
    var name = type === 0 ? '外置卡' : '内置卡';
    if (!confirm('⚠️ 确认切换到' + name + '？\n\n切换过程设备会短暂断网。')) return;
    toast('正在切换到' + name + '...', 'info');
    setCmd('goformId=SIM_SWITCH&sim_auto_switch_enable=1&sim_default_type=' + type + '&sim_switch_running_detect=0')
      .then(function () {
        toast('✓ 已提交切换到' + name, 'ok', 4000);
        setTimeout(refreshData, 6000);
      }).catch(function (e) { toast('切换失败: ' + e.message, 'err', 4000); });
  }

  function init() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var panel = document.createElement('div');
    panel.id = 'zz-panel';
    panel.innerHTML =
      '<div id="zz-header"><span class="zz-title">📶 随身WiFi 控制台</span><button id="zz-toggle" title="折叠/展开">−</button></div>' +
      '<div id="zz-body"><div style="text-align:center;padding:20px;color:#8b91a5;"><span class="zz-loading"></span> 正在读取设备状态...</div></div>' +
      '<div id="zz-footer" class="zz-footer"></div>';
    document.body.appendChild(panel);

    document.getElementById('zz-header').onclick = function (e) {
      if (e.target.id === 'zz-toggle') return;
      S.collapsed = !S.collapsed;
      panel.classList.toggle('collapsed', S.collapsed);
      document.getElementById('zz-toggle').textContent = S.collapsed ? '+' : '−';
    };
    document.getElementById('zz-toggle').onclick = function (e) {
      e.stopPropagation();
      S.collapsed = !S.collapsed;
      panel.classList.toggle('collapsed', S.collapsed);
      e.target.textContent = S.collapsed ? '+' : '−';
    };

    refreshData();
    S.timer = setInterval(function () {
      if (!S.autoRefresh || document.hidden) return;
      refreshData();
    }, CFG.refreshInterval);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) refreshData();
    });

    console.log('%c[ZZ] 增强面板已注入', 'color:#4f7cff;font-weight:bold;font-size:13px');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();