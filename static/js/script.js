/* ===== Typewriter ===== */
(function() {
    var el = document.querySelector('.welcome');
    if (!el) return;
    el.innerHTML = '<span></span>';
    var cursor = document.createElement('span');
    cursor.style.borderRight = '3px solid var(--primary, #6366f1)';
    cursor.style.animation = 'time-blink 0.8s step-end infinite';
    el.appendChild(cursor);
    var txt = '未来信息';
    var i = 0;
    var sp = el.querySelector('span');
    function type() {
        if (i < txt.length) {
            sp.textContent += txt[i];
            i++;
            setTimeout(type, 90 + Math.random() * 80);
        } else {
            var html = '未来<span class="gradientText">信息</span>';
            el.innerHTML = html;
        }
    }
    type();
})();

/* ===== Clock ===== */
(function() {
    var periodEl = document.getElementById('timePeriod');
    var hEl = document.getElementById('liveHour');
    var mEl = document.getElementById('liveMin');
    var sEl = document.getElementById('liveSec');
    var dEl = document.getElementById('timeDate');
    var tipEl = document.getElementById('timeTip');
    if (!periodEl || !hEl || !mEl) return;

    var tips = ['别急，慢慢来','今天也是美好的一天','代码改变世界','保持好奇心','你比想象中更强大','每一刻都值得珍惜','做自己喜欢的事','当下即是最好的时光','累了就歇一歇','记得喝水哟'];

    function getPeriod(h) {
        if (h >= 0 && h < 5) return '深夜';
        if (h >= 5 && h < 7) return '凌晨';
        if (h >= 7 && h < 9) return '早晨';
        if (h >= 9 && h < 12) return '上午';
        if (h >= 12 && h < 13) return '中午';
        if (h >= 13 && h < 17) return '下午';
        if (h >= 17 && h < 19) return '傍晚';
        if (h >= 19 && h < 22) return '晚上';
        return '深夜';
    }

    function tick() {
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();
        periodEl.textContent = getPeriod(h);
        hEl.textContent = String(h).padStart(2, '0');
        mEl.textContent = String(m).padStart(2, '0');
        if (sEl) sEl.textContent = String(s).padStart(2, '0');
        if (dEl) dEl.textContent = (now.getMonth() + 1) + '/' + now.getDate() + ' ' + ['日','一','二','三','四','五','六'][now.getDay()];
        var ratio = (h * 3600 + m * 60 + s) / 86400;
        if (tipEl) tipEl.textContent = tips[Math.floor(ratio * tips.length) % tips.length];
    }

    tick();
    setInterval(tick, 1000);
})();

/* ===== Hitokoto ===== */
(function() {
    var el = document.getElementById('todayQuote');
    if (!el) return;

    var fallback = ['唯有热爱，方能卓越','求知若饥，虚心若愚','简约是极致的复杂','先解决问题，再写代码','最好的错误信息是不需要出现的'];
    var timer = null;
    var idx = 0;
    var cursor = document.createElement('span');
    cursor.className = 'hitokoto-cursor';
    cursor.textContent = '|';
    el.parentNode.appendChild(cursor);

    function fetchOne() {
        return fetch('https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d&c=e&c=f&c=g&c=h&c=i&c=j&c=k&c=l')
            .then(function(r) { return r.json(); })
            .then(function(d) { if (d && d.hitokoto) return d.hitokoto; throw new Error(); })
            .catch(function() { return fallback[idx++ % fallback.length]; });
    }

    function typeText(text) {
        if (timer) clearTimeout(timer);
        el.textContent = '';
        cursor.style.display = 'inline';
        var i = 0;
        function step() {
            if (i < text.length) {
                el.textContent += text[i];
                i++;
                timer = setTimeout(step, 80 + Math.random() * 60);
            } else {
                cursor.style.display = 'none';
                setTimeout(eraseText, 2000);
            }
        }
        step();
    }

    function eraseText() {
        if (timer) clearTimeout(timer);
        cursor.style.display = 'inline';
        var text = el.textContent;
        function back() {
            if (text.length > 0) {
                text = text.slice(0, -1);
                el.textContent = text;
                timer = setTimeout(back, 30 + Math.random() * 25);
            } else {
                setTimeout(function() { fetchOne().then(typeText); }, 400);
            }
        }
        back();
    }

    fetchOne().then(typeText);
})();

/* ===== Search ===== */
(function() {
    var input = document.getElementById('searchInput');
    if (!input) return;
    input.addEventListener('keydown', function(e) {
        if (e.key !== 'Enter') return;
        var v = input.value.trim();
        if (!v) return;
        var isURL = /^https?:\/\//.test(v) || /\.(com|cn|net|org|io|dev|top|cc|me|info)/.test(v);
        window.open(isURL ? (/^https?:\/\//.test(v) ? v : 'https://' + v) : 'https://www.baidu.com/s?wd=' + encodeURIComponent(v), '_blank');
    });
})();

/* ===== Theme Switcher ===== */
(function() {
    var cookie = {
        set: function(n, v, d) { var e = new Date(); e.setTime(e.getTime() + d*86400000); document.cookie = n+'='+v+';expires='+e.toUTCString()+';path=/'; },
        get: function(n) { var m = document.cookie.match('(^|;)\\s*'+n+'\\s*=\\s*([^;]+)'); return m ? m.pop() : null; }
    };

    var html = document.querySelector('html');
    var cb = document.getElementById('myonoffswitch');
    if (!html || !cb) return;

    function apply(isDark) {
        if (isDark) {
            html.dataset.theme = 'dack';
            cb.checked = false;
            cookie.set('themeState', 'Dark', 365);
        } else {
            html.dataset.theme = '';
            cb.checked = true;
            cookie.set('themeState', 'Blue', 365);
        }
    }

    var saved = cookie.get('themeState');
    if (saved === 'Dark') { apply(true); }
    else if (saved === 'Blue') { apply(false); }
    else {
        var h = new Date().getHours();
        apply(h >= 20 || h < 6);
    }

    cb.addEventListener('change', function() {
        apply(!cb.checked);
    });
})();

/* ===== Utility ===== */
function wx(url) {
    var tc = document.querySelector('.tc');
    var main = document.querySelector('.tc-main');
    if (url) document.querySelector('.tc-img').src = url;
    tc.classList.toggle('active');
    main.classList.toggle('active');
}

function left() {
    document.querySelector('.left-main').classList.toggle('left-main-open');
    document.querySelector('.left').classList.toggle('left-open');
}

/* ===== Scroll Progress ===== */
(function() {
    var el = document.getElementById('scrollProgress');
    var fill = document.getElementById('progressFill');
    var txt = document.getElementById('progressText');
    if (!el || !fill) return;

    window.addEventListener('scroll', function() {
        var st = document.documentElement.scrollTop || document.body.scrollTop;
        var tot = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var pct = tot > 0 ? st / tot : 0;
        fill.setAttribute('stroke-dashoffset', 125.6 - pct * 125.6);
        txt.textContent = Math.round(pct * 100) + '%';
        el.classList.toggle('visible', st > 300);
    });

    el.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();

/* ===== Spiderweb ===== */
(function() {
    var c = document.getElementById('particles');
    if (!c) return;
    var ctx = c.getContext('2d');
    var angle = 0;

    function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }

    function web(cx, cy, r) {
        var isDark = document.querySelector('html').dataset.theme === 'dack';
        var col = isDark ? '255,255,255' : '99,102,241';
        var spokes = 18, rings = 14;
        var pts = [];
        for (var i = 0; i < spokes; i++) {
            var a = (Math.PI * 2 / spokes) * i + angle * 0.5;
            pts[i] = [];
            for (var j = 0; j <= rings; j++) {
                var rr = j * (r / rings);
                pts[i][j] = { x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr + rr * 0.015 };
            }
        }
        for (var j = 1; j <= rings; j++) {
            ctx.beginPath();
            for (var i = 0; i < spokes; i++) {
                var p = pts[i][j];
                if (i === 0) ctx.moveTo(p.x, p.y);
                else ctx.lineTo(p.x, p.y);
            }
            ctx.closePath();
            ctx.strokeStyle = 'rgba(' + col + ',0.05)';
            ctx.lineWidth = 0.35;
            ctx.stroke();
        }
        for (var i = 0; i < spokes; i++) {
            ctx.beginPath();
            for (var j = 0; j <= rings; j++) {
                if (j === 0) ctx.moveTo(pts[i][j].x, pts[i][j].y);
                else ctx.lineTo(pts[i][j].x, pts[i][j].y);
            }
            ctx.strokeStyle = 'rgba(' + col + ',0.065)';
            ctx.lineWidth = 0.3;
            ctx.stroke();
        }
        for (var i = 0; i < spokes; i++) {
            for (var j = 1; j <= rings; j++) {
                ctx.beginPath();
                ctx.arc(pts[i][j].x, pts[i][j].y, 0.7, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(' + col + ',0.1)';
                ctx.fill();
            }
        }
        ctx.beginPath();
        ctx.arc(cx, cy, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + col + ',0.2)';
        ctx.fill();
    }

    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        angle += 0.0002;
        var w = c.width, h = c.height;
        web(w * 0.5, h * 0.5, h * 0.42);
        web(w * 0.82, h * 0.25, h * 0.28);
        web(w * 0.18, h * 0.72, h * 0.3);
        web(w * 0.75, h * 0.78, h * 0.25);
        web(w * 0.25, h * 0.25, h * 0.26);
        requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
})();

/* ===== Sakura ===== */
(function() {
    var c = document.getElementById('sakura');
    if (!c) return;
    var ctx = c.getContext('2d');
    var petals = [];

    function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }

    for (var i = 0; i < 35; i++) {
        petals.push({
            x: Math.random() * (c.width || 1200),
            y: Math.random() * (c.height || 800) * -1,
            size: Math.random() * 8 + 4,
            sx: (Math.random() - 0.5) * 0.6,
            sy: Math.random() * 1.2 + 0.4,
            rot: Math.random() * Math.PI * 2,
            rs: (Math.random() - 0.5) * 0.03,
            op: Math.random() * 0.5 + 0.3,
            hue: Math.random() * 30 + 330
        });
    }

    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        for (var i = 0; i < petals.length; i++) {
            var p = petals[i];
            p.x += p.sx; p.y += p.sy; p.rot += p.rs;
            if (p.y > c.height + 20) { p.y = -20; p.x = Math.random() * c.width; }
            if (p.x < -20) p.x = c.width + 20;
            if (p.x > c.width + 20) p.x = -20;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = p.op;
            ctx.fillStyle = 'hsl(' + p.hue + ',70%,75%)';
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size * 0.6, p.size * 0.3, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
})();

/* ===== Click Effect ===== */
(function() {
    document.addEventListener('click', function(e) {
        var ct = document.createElement('div');
        ct.className = 'click-burst';
        ct.style.left = e.clientX + 'px';
        ct.style.top = e.clientY + 'px';
        for (var j = 1; j <= 3; j++) { var r = document.createElement('div'); r.className = 'burst-ring burst-ring-' + j; ct.appendChild(r); }
        for (var i = 0; i < 6; i++) {
            var p = document.createElement('div');
            p.className = 'burst-particle';
            var a = (Math.PI * 2 / 6) * i + Math.random() * 0.5;
            var d = 30 + Math.random() * 20;
            p.style.setProperty('--tx', Math.cos(a) * d + 'px');
            p.style.setProperty('--ty', Math.sin(a) * d + 'px');
            p.style.background = 'hsl(' + (Math.random() * 60 + 250) + ',80%,65%)';
            ct.appendChild(p);
        }
        document.body.appendChild(ct);
        setTimeout(function() { ct.remove(); }, 800);
    });
})();

/* ===== Logo Rain ===== */
(function() {
    var c = document.getElementById('logoRain');
    if (!c) return;

    setInterval(function() {
        if (document.hidden) return;
        var d = document.createElement('div');
        d.className = 'raindrop';
        var s = Math.random() * 3 + 2;
        var t = Math.random() * 0.6 + 0.5;
        d.style.width = s + 'px';
        d.style.height = s * 5 + 'px';
        d.style.left = Math.random() * 100 + '%';
        d.style.top = '-15px';
        d.style.animationDuration = t + 's';
        d.style.opacity = Math.random() * 0.5 + 0.2;
        c.appendChild(d);
        setTimeout(function() { d.remove(); }, t * 1000 + 100);
    }, 100);
})();
