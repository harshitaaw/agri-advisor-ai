(function () {
  const nav = document.querySelector('[data-js="nav"]');
  const toggle = document.querySelector('.nav-toggle');
  const yearEl = document.querySelector('[data-js="year"]');
  const chatWindow = document.querySelector('[data-js="chat-window"]');
  const chatForm = document.querySelector('[data-js="chat-form"]');
  const uploadForm = document.querySelector('[data-js="upload-form"]');
  const result = document.querySelector('[data-js="result"]');
  const revealTargets = document.querySelectorAll('.sr-fade, .sr-up, .sr-left, .sr-right');
  const navLinks = document.querySelectorAll('.nav a');
  const loginLink = document.querySelector('[data-js="login-link"]');
  const registerLink = document.querySelector('[data-js="register-link"]');
  const logoutLink = document.querySelector('[data-js="logout-link"]');
  const greeting = document.querySelector('[data-js="user-greeting"]');
  const langToggleBtn = document.querySelector('[data-js="lang-toggle"]');
  const langLabel = document.querySelector('[data-js="lang-label"]');

  // Simple i18n map
  var translations = {
    en: {
      brand: 'AgriAdvisor',
      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.diagnosis': 'Crop Diagnosis',
      'nav.schemes': 'Govt. Schemes',
      'nav.assistant': 'AI Assistant',
      'nav.privacy': 'About/Privacy',
      'home.hero_title': 'Smart agriculture guidance for every Indian farmer',
      'home.hero_sub': 'Get instant crop diagnosis, explore government schemes, and talk to our AI assistant in Hindi. बस पूछिए, समाधान पाइए।',
      'home.cta_assistant': 'Ask the AI Assistant',
      'home.cta_schemes': 'Browse Schemes',
      'assistant.title': 'AI Assistant',
      'assistant.input_placeholder': 'Type in Hindi or English…'
    },
    hi: {
      brand: 'एग्रीएडवाइज़र',
      'nav.home': 'होम',
      'nav.features': 'फीचर्स',
      'nav.diagnosis': 'फसल निदान',
      'nav.schemes': 'सरकारी योजनाएँ',
      'nav.assistant': 'एआई सहायक',
      'nav.privacy': 'अबाउट/प्राइवेसी',
      'home.hero_title': 'हर किसान के लिए स्मार्ट कृषि मार्गदर्शन',
      'home.hero_sub': 'तुरंत फसल निदान करें, सरकारी योजनाएँ देखें, और एआई सहायक से हिंदी में बात करें।',
      'home.cta_assistant': 'एआई सहायक से पूछें',
      'home.cta_schemes': 'योजनाएँ देखें',
      'assistant.title': 'एआई सहायक',
      'assistant.input_placeholder': 'हिंदी या अंग्रेज़ी में लिखें…',
      // Dashboard
      'dashboard.title': 'डैशबोर्ड',
      'dashboard.quick': 'अपने टूल्स तक तुरंत पहुँचें:',
      'dashboard.cta_diagnosis': 'फसल निदान',
      'dashboard.cta_schemes': 'योजनाएँ',
      'dashboard.cta_assistant': 'एआई सहायक',
      // Privacy
      'privacy.title': 'अबाउट और प्राइवेसी',
      'privacy.line1': 'हम आपकी गोपनीयता का सम्मान करते हैं। डेमो के लिए उपयोग की गई छवियाँ और संदेश स्थायी रूप से संग्रहीत नहीं होते।',
      'privacy.item1': 'उद्देश्य: किसानों के लिए शैक्षिक और सूचनात्मक सहायता।',
      'privacy.item2': 'डेटा: केवल डेमो इंटरेक्शन; सेवाएँ जोड़ते समय वास्तविक नीतियाँ लागू करें।',
      'privacy.item3': 'संपर्क: प्रश्न या फीडबैक के लिए संपर्क करें।',
      // Features
      'features.title': 'प्लेटफ़ॉर्म फीचर्स',
      'features.card1_title': 'फसल निदान',
      'features.card1_text': 'रोग पहचान और व्यावहारिक उपायों के लिए पौधों की तस्वीरें अपलोड करें।',
      'features.card1_cta': 'निदान आज़माएँ →',
      'features.card2_title': 'सरकारी योजनाएँ',
      'features.card2_text': 'किसानों के लिए उपयुक्त योजनाएँ संक्षेप में, स्थानीय भाषा में।',
      'features.card2_cta': 'योजनाएँ देखें →',
      'features.card3_title': 'एआई सहायक',
      'features.card3_text': 'हिंदी या अंग्रेज़ी में पूछें; तुरंत स्पष्ट, संदर्भित मार्गदर्शन पाएँ।',
      'features.card3_cta': 'अभी चैट करें →',
      // Schemes
      'schemes.title': 'लोकप्रिय सरकारी योजनाएँ',
      'schemes.more': 'और जानकारी',
      'schemes.card1_title': 'पीएम-किसान',
      'schemes.card1_text': 'किसानों के लिए प्रत्यक्ष आय सहायता।',
      'schemes.card1_more': 'पात्रता, किश्तें, और आवेदन प्रक्रिया सरल शब्दों में।',
      'schemes.card2_title': 'मृदा स्वास्थ्य कार्ड',
      'schemes.card2_text': 'मिट्टी की समझ से उपज में सुधार।',
      'schemes.card2_more': 'परीक्षण कैसे करें, रिपोर्ट समझें, और अनुशंसित पोषण प्रबंधन।',
      'schemes.card3_title': 'पीएमएफबीवाई',
      'schemes.card3_text': 'फसल बीमा से जोखिम सुरक्षा।',
      'schemes.card3_more': 'प्रीमियम, कवरेज, दावा प्रक्रिया, और संपर्क।'
    }
  };

  function getLang(){ return localStorage.getItem('agri_lang') || 'en'; }
  function setLang(l){ localStorage.setItem('agri_lang', l); }
  function applyI18n(){
    var lang = getLang();
    if (langLabel) langLabel.textContent = lang.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var t = translations[lang] && translations[lang][key];
      if (typeof t === 'string') el.textContent = t;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var key = el.getAttribute('data-i18n-placeholder');
      var t = translations[lang] && translations[lang][key];
      if (typeof t === 'string') el.setAttribute('placeholder', t);
    });
  }
  applyI18n();
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function(){
      var next = getLang() === 'en' ? 'hi' : 'en';
      setLang(next);
      applyI18n();
    });
  }

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  // Page fade-in
  window.addEventListener('load', function(){ document.body.classList.add('ready'); });

  // Button ripple effect (delegated)
  document.addEventListener('click', function(e){
    var btn = e.target.closest('.btn');
    if (!btn) return;
    var rect = btn.getBoundingClientRect();
    var ripple = document.createElement('span');
    ripple.className = 'ripple';
    var size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    var x = e.clientX - rect.left - size/2;
    var y = e.clientY - rect.top - size/2;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    btn.appendChild(ripple);
    setTimeout(function(){ ripple.remove(); }, 600);
  }, false);

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Navbar shrink on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function(){
      if (window.scrollY > 10) header.classList.add('shrink'); else header.classList.remove('shrink');
    });
  }

  // Hero typing effect for first H1 on home
  (function heroTyping(){
    var h1 = document.querySelector('.hero-copy h1');
    if (!h1) return;
    var text = h1.textContent;
    h1.setAttribute('aria-label', text);
    h1.textContent = '';
    var i = 0;
    var speed = 18;
    function step(){
      if (i <= text.length) { h1.textContent = text.slice(0, i++); setTimeout(step, speed); }
    }
    if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) step(); else h1.textContent = text;
  })();

  // Scroll reveal animations
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('sr-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('sr-revealed'); });
  }

  // Active nav link + aria-current
  var currentPath = location.pathname.replace(/\/$/, '');
  navLinks.forEach(function (a) {
    var href = a.getAttribute('href').replace(/\/$/, '');
    if (href && currentPath.endsWith(href)) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // Client-side auth (localStorage) for front-end demo
  function getUser() {
    var body = document.body;
    var isAuth = body && body.getAttribute('data-auth') === 'true';
    if (isAuth) {
      var uname = body.getAttribute('data-username') || '';
      var email = body.getAttribute('data-email') || '';
      return { username: uname, email: email };
    }
    try { return JSON.parse(localStorage.getItem('agri_user') || 'null'); } catch { return null; }
  }
  function setUser(user) { localStorage.setItem('agri_user', JSON.stringify(user)); }
  function clearUser() { localStorage.removeItem('agri_user'); }

  function updateAuthUI() {
    const user = getUser();
    if (user && user.username) {
      if (greeting) { greeting.style.display = 'none'; }
      if (logoutLink) logoutLink.style.display = 'inline';
      if (loginLink) loginLink.style.display = 'none';
      if (registerLink) registerLink.style.display = 'none';
      const dashWelcome = document.getElementById('dash-welcome');
      if (dashWelcome) dashWelcome.textContent = 'Welcome, ' + user.username + (user.email ? ' – ' + user.email : '') + ' 👋';
    } else {
      if (greeting) greeting.style.display = 'none';
      if (logoutLink) logoutLink.style.display = 'none';
      if (loginLink) loginLink.style.display = 'inline';
      if (registerLink) registerLink.style.display = 'inline';
    }
  }
  updateAuthUI();

  if (logoutLink) {
    logoutLink.addEventListener('click', function (e) {
      e.preventDefault();
      clearUser();
      window.location.href = '/logout/';
    });
  }

  // Enhance login/register forms (store local demo index; server handles real auth)
  const loginFormEl = document.querySelector('form[action$="/login/"]');
  const registerFormEl = document.querySelector('form[action$="/register/"]');
  if (registerFormEl) {
    registerFormEl.addEventListener('submit', function (e) {
      const fd = new FormData(registerFormEl);
      const name = String(fd.get('username') || '').trim();
      const email = String(fd.get('email') || '').trim();
      const p1 = String(fd.get('password1') || '').trim();
      const p2 = String(fd.get('password2') || '').trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !validEmail || p1.length < 6 || p1 !== p2) {
        e.preventDefault();
        registerFormEl.classList.add('shake');
        setTimeout(function(){ registerFormEl.classList.remove('shake'); }, 400);
        return;
      }
      var byEmail = Object.assign({}, JSON.parse(localStorage.getItem('agri_users_by_email')||'{}'));
      var byUsername = Object.assign({}, JSON.parse(localStorage.getItem('agri_users_by_username')||'{}'));
      var emailKey = String(email).toLowerCase();
      var nameKey = String(name).toLowerCase();
      byEmail[emailKey] = { username: name, password: p1 };
      byUsername[nameKey] = { email: email, password: p1 };
      localStorage.setItem('agri_users_by_email', JSON.stringify(byEmail));
      localStorage.setItem('agri_users_by_username', JSON.stringify(byUsername));
      // allow backend submission to create Django user
    });
  }
  if (loginFormEl) {
    loginFormEl.addEventListener('submit', function (e) {
      const fd = new FormData(loginFormEl);
      const identifier = String(fd.get('email') || '').trim();
      const idLower = identifier.toLowerCase();
      const password = String(fd.get('password') || '').trim();
      const usersByEmail = JSON.parse(localStorage.getItem('agri_users_by_email') || '{}');
      const usersByUsername = JSON.parse(localStorage.getItem('agri_users_by_username') || '{}');
      let userRec = usersByEmail[identifier] || usersByEmail[idLower] || usersByUsername[identifier] || usersByUsername[idLower] || null;
      if (userRec && userRec.password === password) { setUser({ username: userRec.username || identifier, email: userRec.email || (identifier.includes('@')?identifier:'') }); }
      // let server auth proceed
    });
  }

  // Gate: require auth for all pages except login/register
  (function protectRoutes(){
    const publicPaths = ['/login/', '/register/'];
    const isPublic = publicPaths.some(function(p){ return location.pathname.startsWith(p); });
    if (!isPublic && !getUser()) {
      window.location.href = '/login/';
    }
  })();

  // Load API key from agri-config.js
  var API_KEY = window.AGRI_API_KEY || '';
  var API_URL = 'https://api.perplexity.ai/chat/completions';
  if (chatForm && chatWindow) {
    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = chatForm.querySelector('input');
      const message = input && 'value' in input ? String(input.value).trim() : '';
      if (!message) return;
      appendBubble('user', message);
      input.value = '';
      // Typing indicator
      const typing = document.createElement('div');
      typing.className = 'bubble ai';
      typing.innerHTML = '<span class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span>&nbsp;AI is thinking…</span>';
      chatWindow.appendChild(typing);
      chatWindow.scrollTop = chatWindow.scrollHeight;
      if (!API_KEY) {
        typing.remove();
        appendBubble('ai', 'API key not configured. Please contact the administrator.');
        return;
      }
      // Real API call
      var lang = getLang();
      var rule = 'Speak naturally, short paragraphs, no bullets, no lists, and do not use numbering like 1., 2., or dashes unless the user explicitly asks for a list or the content is mathematical.';
      var prompt = (lang === 'hi'
        ? 'Reply in Hindi. ' + rule + ' '
        : rule + ' ') + message;
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'sonar-pro',
          messages: [{ role: 'user', content: prompt }]
        })
      })
      .then(function(res){ return res.json(); })
      .then(function(data){
        typing.remove();
        var text = (data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || 'Sorry, I could not generate a response.';
        appendBubble('ai', text);
      })
      .catch(function(){
        typing.remove();
        appendBubble('ai', 'There was an error contacting the AI service.');
      });
    });

    // Web Speech API mic input
    const micBtn = chatForm.querySelector('button[aria-label^="Voice"]');
    if (micBtn) {
      let recognizing = false;
      let recognition = null;
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SR) {
        recognition = new SR();
        recognition.lang = getLang() === 'hi' ? 'hi-IN' : 'en-IN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.onresult = function(e){
          const transcript = e.results[0][0].transcript;
          const input = chatForm.querySelector('input');
          if (input) input.value = transcript;
        };
        recognition.onstart = function(){ recognizing = true; micBtn.classList.add('recording'); };
        recognition.onend = function(){ recognizing = false; micBtn.classList.remove('recording'); };
      } else {
        micBtn.addEventListener('click', function(){ alert('Your browser does not support voice input. Please use a modern browser.'); });
      }
      micBtn.addEventListener('click', function(){
        if (!recognition) { micBtn.classList.add('shake'); setTimeout(function(){ micBtn.classList.remove('shake'); }, 400); return; }
        if (!recognizing) { recognition.lang = getLang() === 'hi' ? 'hi-IN' : 'en-IN'; recognition.start(); } else recognition.stop();
      });
    }
  }

  function appendBubble(who, text) {
    if (!chatWindow) return;
    const bubble = document.createElement('div');
    bubble.className = 'bubble ' + (who === 'user' ? 'user' : 'ai');
    bubble.innerHTML = escapeHtml(text);
    bubble.style.animation = 'bubbleIn .18s ease';
    chatWindow.appendChild(bubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  if (uploadForm && result) {
    const analyzeBtn = uploadForm.querySelector('button');
    const inputEl = uploadForm.querySelector('[data-js="img-input"]');
    const cropEl = uploadForm.querySelector('[data-js="crop-input"]');
    const symptomsEl = uploadForm.querySelector('[data-js="symptoms-input"]');
    const preview = result.querySelector('[data-js="preview"]');
    if (inputEl) {
      inputEl.addEventListener('change', function(){
        const file = inputEl.files && inputEl.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(){ if (preview) preview.src = reader.result; };
        reader.readAsDataURL(file);
      });
    }
    analyzeBtn && analyzeBtn.addEventListener('click', function () {
      const file = inputEl && inputEl.files && inputEl.files[0];
      if (!file) { alert('Please select an image first.'); return; }
      result.hidden = false;
      result.querySelector('p').textContent = 'Analyzing image…';
      const reader = new FileReader();
      reader.onload = function(){
        const img = new Image();
        img.onload = function(){
          // Downscale to 256px box to keep payload small and consistent
          const maxSide = 256;
          const scale = Math.min(maxSide / img.width, maxSide / img.height, 1);
          const w = Math.max(1, Math.round(img.width * scale));
          const h = Math.max(1, Math.round(img.height * scale));
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          // Basic color stats to aid text-only model
          const data = ctx.getImageData(0,0,w,h).data;
          var total = data.length/4, g=0, y=0, b=0, r=0;
          for (var i=0;i<data.length;i+=4){ r+=data[i]; g+=data[i+1]; b+=data[i+2]; if (data[i+1]>150 && data[i]>120) y++; }
          var avgR=Math.round(r/total), avgG=Math.round(g/total), avgB=Math.round(b/total), yellowishRatio=(y/total).toFixed(2);
          const smallDataUrl = canvas.toDataURL('image/jpeg', 0.65);
          const headerIdx = smallDataUrl.indexOf(',');
          const b64 = headerIdx> -1 ? smallDataUrl.slice(headerIdx+1) : smallDataUrl;
          var crop = cropEl ? String(cropEl.value||'').trim() : '';
          var symptoms = symptomsEl ? String(symptomsEl.value||'').trim() : '';
          const prompt = [
            'You are a senior agronomist. Analyze a small base64 JPEG of a crop leaf using the given context and color stats.',
            'Return output in EXACTLY this format (plain text; no extra lines):',
            'Crop name: <crop>',
            'Problem: <1-2 lines describing most likely issue with confidence>',
            'Solution: <3 concise, numbered, actionable steps>',
            '',
            'Context:',
            'crop=' + (crop||'unknown') + ', symptoms=' + (symptoms||'not provided') + ', avg_rgb=(' + avgR + ',' + avgG + ',' + avgB + '), yellowish_ratio=' + yellowishRatio,
            'Image_base64_256px: ' + b64
          ].join('\n');
          if (!window.AGRI_API_KEY) {
            result.querySelector('p').textContent = 'API key not loaded. Please contact admin.';
            return;
          }
          fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + window.AGRI_API_KEY, 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: 'sonar-pro', messages: [{ role: 'user', content: prompt }] })
          }).then(function(r){
            if (!r.ok) throw new Error('API error: ' + r.status);
            return r.json();
          }).then(function(data){
            let text = (data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || 'Could not analyze the image.';
            // Normalize minimal format if model deviates
            if (!/^Crop name:/i.test(text)) {
              const lines = [];
              lines.push('Crop name: ' + (crop||'Unknown'));
              lines.push('Problem: ' + text.split('\n').slice(0,2).join(' '));
              lines.push('Solution: 1) Improve irrigation  2) Apply balanced NPK  3) Monitor for pests');
              text = lines.join('\n');
            }
            result.querySelector('p').textContent = text;
          }).catch(function(){
            result.querySelector('p').textContent = 'Error contacting analysis service.';
          });
        };
        img.src = String(reader.result || '');
        if (preview) preview.src = img.src;
      };
      reader.readAsDataURL(file);
    });
  }
})();


