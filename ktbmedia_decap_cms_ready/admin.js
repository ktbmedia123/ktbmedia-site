


let supabase = null;
let currentData = null;
let originalData = null;
let currentLang = 'pl';
let currentTab = 'portfolio';
let previewMode = 'desktop';
let dirty = false;

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[m]);
const escA = s => esc(s).replace(/"/g, '&quot;');

function toast(msg, type) {
  const t = $('#toast');
  t.textContent = msg;
  t.className = 'toast show ' + (type || '');
  setTimeout(() => t.classList.remove('show'), 2800);
}
function markDirty() { dirty = true; $('#saveBar').classList.add('show'); }
function clearDirty() { dirty = false; $('#saveBar').classList.remove('show'); originalData = JSON.parse(JSON.stringify(currentData)); }
window.addEventListener('beforeunload', (e) => { if (dirty) { e.preventDefault(); return e.returnValue = 'Masz niezapisane zmiany. Na pewno wyjść?'; } });

// CONFIG
function loadConfig() {
  const fallback = window.KTB_CMS_CONFIG || {};
  const url = localStorage.getItem('sb_url') || fallback.SUPABASE_URL || '';
  const key = localStorage.getItem('sb_key') || fallback.SUPABASE_ANON_KEY || '';
  $('#cfgUrl').value = url;
  $('#cfgKey').value = key;
  if (url && key) initSupabase(url, key);
  else showConfigScreen();
}
function showConfigScreen() {
  $('#loginFormBlock').classList.add('hidden');
  $('#loginConfigBlock').classList.remove('hidden');
  $('#loginSub').textContent = 'Najpierw skonfiguruj połączenie z Supabase.';
}
function saveConfig() {
  const url = $('#cfgUrl').value.trim();
  const key = $('#cfgKey').value.trim();
  if (!url || !key) { toast('Podaj URL i key', 'err'); return; }
  if (!url.startsWith('https://')) { toast('URL musi zaczynać się od https://', 'err'); return; }
  localStorage.setItem('sb_url', url);
  localStorage.setItem('sb_key', key);
  initSupabase(url, key);
  $('#loginConfigBlock').classList.add('hidden');
  $('#loginFormBlock').classList.remove('hidden');
  $('#loginSub').textContent = 'Zaloguj się żeby edytować treści strony.';
  toast('Konfiguracja zapisana', 'ok');
}
function initSupabase(url, key) {
  try {
    if (!window.supabase || typeof window.supabase.createClient !== 'function') throw new Error('Biblioteka Supabase nie załadowała się poprawnie');
    supabase = window.supabase.createClient(url, key);
    checkAuth();
  } catch (e) {
    console.error(e);
    toast('Błąd konfiguracji Supabase: ' + e.message, 'err');
    showConfigScreen();
  }
}

// AUTH
async function checkAuth() {
  if (!supabase) return;
  const { data } = await supabase.auth.getSession();
  if (data.session) showAdmin(data.session.user);
  else { $('#loginScreen').classList.remove('hidden'); $('#adminRoot').classList.add('hidden'); }
}
async function doLogin() {
  if (!supabase) { toast('Najpierw skonfiguruj Supabase', 'err'); return; }
  const email = $('#loginEmail').value.trim();
  const pass = $('#loginPass').value;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass });
  if (error) { $('#loginErr').textContent = error.message; $('#loginErr').classList.remove('hidden'); return; }
  showAdmin(data.user);
}
async function doLogout() {
  if (dirty && !confirm('Masz niezapisane zmiany. Na pewno wyjść?')) return;
  if (supabase) await supabase.auth.signOut();
  dirty = false;
  $('#loginScreen').classList.remove('hidden');
  $('#adminRoot').classList.add('hidden');
}
async function showAdmin(user) {
  $('#loginScreen').classList.add('hidden');
  $('#adminRoot').classList.remove('hidden');
  $('#userEmail').textContent = user.email;
  await loadData();
}

// DATA
async function loadData() {
  if (!supabase) return;
  try {
    const { data, error } = await supabase.from('site_content').select('content').eq('id', 'main').single();
    if (error) throw error;
    currentData = (data && data.content && Object.keys(data.content).length) ? data.content : getEmptyData();
  } catch (e) { toast('Błąd: ' + e.message, 'err'); currentData = getEmptyData(); }
  originalData = JSON.parse(JSON.stringify(currentData));
  renderCurrentTab();
}
function getEmptyData() {
  return { pl: { portfolio: [], blog: [], services: [], team: [], contact: {} }, en: { portfolio: [], blog: [], services: [], team: [], contact: {} } };
}
async function saveData() {
  if (!supabase || !currentData) return;
  try {
    const { error } = await supabase.from('site_content').update({ content: currentData, updated_at: new Date().toISOString() }).eq('id', 'main');
    if (error) throw error;
    clearDirty();
    toast('Zapisano ✓', 'ok');
    refreshPreview();
  } catch (e) { toast('Błąd: ' + e.message, 'err'); }
}
function discardChanges() {
  if (!confirm('Odrzucić wszystkie zmiany?')) return;
  currentData = JSON.parse(JSON.stringify(originalData));
  clearDirty();
  renderCurrentTab();
}

// UPLOAD
async function uploadImage(file, prefix) {
  if (!supabase) { toast('Supabase nie skonfigurowane', 'err'); return null; }
  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
  const filename = `${prefix}-${Date.now()}.${ext}`;
  try {
    const { error } = await supabase.storage.from('ktb-media').upload(filename, file, { upsert: true });
    if (error) throw error;
    const { data: pub } = supabase.storage.from('ktb-media').getPublicUrl(filename);
    toast('Wgrano', 'ok');
    return pub.publicUrl;
  } catch (e) { toast('Upload: ' + e.message, 'err'); return null; }
}

// TABS
function switchTab(tab) {
  currentTab = tab;
  $$('.nav-item').forEach(n => n.classList.toggle('on', n.dataset.tab === tab));
  $$('.tab-panel').forEach(p => p.classList.toggle('hidden', p.id !== 'tab-' + tab));
  renderCurrentTab();
}
function switchLang(lang) {
  currentLang = lang;
  $$('.lang-switcher button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
  renderCurrentTab();
}
function setPreviewMode(mode) {
  previewMode = mode;
  $$('.preview-toggle button').forEach(b => b.classList.toggle('on', b.dataset.mode === mode));
  document.body.classList.toggle('preview-mobile', mode === 'mobile');
  if (mode === 'mobile') refreshPreview();
}
function refreshPreview() {
  if (previewMode !== 'mobile') return;
  const iframe = $('#previewIframe');
  if (iframe) iframe.src = '/?_p=' + Date.now();
}

function toggleCard(card) { card.classList.toggle('expanded'); }

// RENDER
function renderCurrentTab() {
  if (!currentData || !currentData[currentLang]) return;
  if (currentTab === 'portfolio') renderPortfolio();
  else if (currentTab === 'blog') renderBlog();
  else if (currentTab === 'services') renderServices();
  else if (currentTab === 'team') renderTeam();
  else if (currentTab === 'contact') renderContact();
}
function getList(key) {
  if (!currentData[currentLang][key]) currentData[currentLang][key] = [];
  return currentData[currentLang][key];
}

// PORTFOLIO
function renderPortfolio() {
  const root = $('#portfolioList');
  const items = getList('portfolio');
  root.innerHTML = items.length === 0
    ? '<div style="padding: 60px; text-align: center; color: var(--text-3)">Brak klientów. Kliknij "+ Dodaj klienta" żeby zacząć.</div>'
    : '';
  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.draggable = true;
    card.dataset.idx = idx;
    setupDrag(card, 'portfolio');
    const firstImage = (item.images || [])[0];
    card.innerHTML = `
      <div class="card-head" onclick="toggleCard(this.parentElement)">
        <div class="card-drag" onclick="event.stopPropagation()">⋮⋮</div>
        <div class="card-thumb">${firstImage ? `<img src="${escA(firstImage)}" alt="">` : esc(item.num || '?')}</div>
        <div class="card-info">
          <div class="card-title">${esc(item.title1 || '—')} ${esc(item.titleIt || '')}</div>
          <div class="card-meta"><span class="tag">${esc(item.year || '')}</span>${esc(item.tag || '')}</div>
        </div>
        <div class="card-expand-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></div>
      </div>
      <div class="card-body">
        <div class="form-section">
          <div class="form-section-title">Podstawowe</div>
          <div class="form-row three">
            <div class="field"><label>Numer</label><input type="text" value="${escA(item.num || '')}" onchange="updatePortfolio(${idx}, 'num', this.value)"></div>
            <div class="field"><label>Slug (URL)</label><input type="text" value="${escA(item.slug || '')}" onchange="updatePortfolio(${idx}, 'slug', this.value)"></div>
            <div class="field"><label>Rok</label><input type="text" value="${escA(item.year || '')}" onchange="updatePortfolio(${idx}, 'year', this.value)"></div>
          </div>
          <div class="form-row">
            <div class="field"><label>Tytuł (bold)</label><input type="text" value="${escA(item.title1 || '')}" onchange="updatePortfolio(${idx}, 'title1', this.value)"></div>
            <div class="field"><label>Tytuł (italic)</label><input type="text" value="${escA(item.titleIt || '')}" onchange="updatePortfolio(${idx}, 'titleIt', this.value)"></div>
          </div>
          <div class="form-row full">
            <div class="field"><label>Tag</label><input type="text" value="${escA(item.tag || '')}" onchange="updatePortfolio(${idx}, 'tag', this.value)"></div>
          </div>
          <div class="form-row full">
            <div class="field"><label>Brief</label><textarea onchange="updatePortfolio(${idx}, 'brief', this.value)">${esc(item.brief || '')}</textarea></div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-title">Opis case study</div>
          <div class="form-row">
            <div class="field"><label>Wyzwanie</label><textarea onchange="updatePortfolio(${idx}, 'challenge', this.value)">${esc(item.challenge || '')}</textarea></div>
            <div class="field"><label>Rozwiązanie</label><textarea onchange="updatePortfolio(${idx}, 'solution', this.value)">${esc(item.solution || '')}</textarea></div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-title">Paleta kolorów (4 HEX)</div>
          <div class="palette-row">
            ${[0,1,2,3].map(i => {
              const c = (item.palette || [])[i] || '';
              return `<div class="palette-input"><span class="palette-swatch" style="background:${escA(c)}"></span><input type="text" value="${escA(c)}" placeholder="#000" onchange="updatePalette(${idx}, ${i}, this.value); renderPortfolio()"></div>`;
            }).join('')}
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-title">Obrazy (3 sztuki)</div>
          <div class="images-grid">
            ${[0,1,2].map(i => {
              const src = (item.images || [])[i];
              return `
                <div class="image-slot ${src ? 'has-image' : ''}">
                  ${src ? `<img src="${escA(src)}" alt="" onclick="document.getElementById('port-img-${idx}-${i}').click()">
                  <div class="image-slot-overlay">
                    <button onclick="document.getElementById('port-img-${idx}-${i}').click()">Zmień</button>
                    <button onclick="setPortfolioImage(${idx}, ${i}, null); renderPortfolio()">Usuń</button>
                  </div>` : `<div class="image-slot-ph" onclick="document.getElementById('port-img-${idx}-${i}').click()">+ obraz ${i+1}</div>`}
                </div>
                <input type="file" id="port-img-${idx}-${i}" accept="image/*" style="display:none" onchange="handlePortfolioUpload(${idx}, ${i}, this.files[0])">
              `;
            }).join('')}
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-title">Wyniki (liczby)</div>
          <div class="kv-list">
            ${(item.results || []).map((r, ri) => `
              <div class="kv-row">
                <input type="text" value="${escA(r.k || '')}" placeholder="Opis (np. 'Wyświetlenia wideo')" onchange="updateResult(${idx}, ${ri}, 'k', this.value)">
                <input type="text" value="${escA(r.v || '')}" placeholder="Wartość (np. '1M+')" onchange="updateResult(${idx}, ${ri}, 'v', this.value)">
                <button onclick="removeResult(${idx}, ${ri})">×</button>
              </div>
            `).join('')}
          </div>
          <button class="btn sm" style="margin-top: 10px" onclick="addResult(${idx})">+ Dodaj wynik</button>
        </div>
        <div class="form-section">
          <div class="form-section-title">Notatki z procesu</div>
          <div class="field">
            <textarea placeholder="Jedna notatka na linię" onchange="updatePortfolio(${idx}, 'notes', this.value.split('\\n').filter(s => s.trim()))">${esc((item.notes || []).join('\n'))}</textarea>
          </div>
        </div>
        <div class="form-section" style="display:flex; gap:8px">
          <button class="btn danger" onclick="removePortfolio(${idx})">🗑 Usuń</button>
          <button class="btn sm" style="margin-left: auto" onclick="duplicatePortfolio(${idx})">Duplikuj</button>
        </div>
      </div>
    `;
    root.appendChild(card);
  });
}
function updatePortfolio(idx, key, val) { getList('portfolio')[idx][key] = val; markDirty(); }
function updatePalette(idx, i, val) { const p = getList('portfolio')[idx]; if (!p.palette) p.palette = []; while (p.palette.length <= i) p.palette.push(''); p.palette[i] = val; markDirty(); }
function setPortfolioImage(idx, i, url) { const p = getList('portfolio')[idx]; if (!p.images) p.images = []; while (p.images.length <= i) p.images.push(null); p.images[i] = url; markDirty(); }
async function handlePortfolioUpload(idx, i, file) {
  if (!file) return;
  const slug = getList('portfolio')[idx].slug || 'client';
  const url = await uploadImage(file, `case-${slug}-${i+1}`);
  if (url) { setPortfolioImage(idx, i, url); renderPortfolio(); }
}
function addResult(idx) { const p = getList('portfolio')[idx]; if (!p.results) p.results = []; p.results.push({ k: '', v: '' }); renderPortfolio(); markDirty(); }
function updateResult(idx, ri, key, val) { getList('portfolio')[idx].results[ri][key] = val; markDirty(); }
function removeResult(idx, ri) { getList('portfolio')[idx].results.splice(ri, 1); renderPortfolio(); markDirty(); }
function addPortfolio() {
  const items = getList('portfolio');
  items.push({ num: String(items.length + 1).padStart(2, '0'), slug: 'nowy-klient-' + Date.now(), title1: 'Nowy', titleIt: 'klient', tag: '', year: new Date().getFullYear().toString(), brief: '', challenge: '', solution: '', palette: ['#E8A838', '#1a1a1a', '#efe9dc', '#c9c9c9'], images: [], results: [], notes: [] });
  renderPortfolio();
  markDirty();
}
function removePortfolio(idx) { if (!confirm('Usunąć?')) return; getList('portfolio').splice(idx, 1); renderPortfolio(); markDirty(); }
function duplicatePortfolio(idx) {
  const items = getList('portfolio');
  const copy = JSON.parse(JSON.stringify(items[idx]));
  copy.slug = copy.slug + '-kopia';
  copy.num = String(items.length + 1).padStart(2, '0');
  items.splice(idx + 1, 0, copy);
  renderPortfolio();
  markDirty();
}

// BLOG
function renderBlog() {
  const root = $('#blogList');
  const items = getList('blog');
  root.innerHTML = items.length === 0
    ? '<div style="padding: 60px; text-align: center; color: var(--text-3)">Brak artykułów.</div>' : '';
  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.draggable = true;
    card.dataset.idx = idx;
    setupDrag(card, 'blog');
    const bodyText = (item.body || []).map(b => {
      if (b.h) return `## ${b.h}`;
      if (b.p) return b.p;
      if (b.list) return b.list.map(l => `- ${l}`).join('\n');
      return '';
    }).join('\n\n');
    card.innerHTML = `
      <div class="card-head" onclick="toggleCard(this.parentElement)">
        <div class="card-drag" onclick="event.stopPropagation()">⋮⋮</div>
        <div class="card-thumb">${item.image ? `<img src="${escA(item.image)}" alt="">` : '📝'}</div>
        <div class="card-info">
          <div class="card-title">${esc(item.title1 || '—')} ${esc(item.titleIt || '')}</div>
          <div class="card-meta"><span class="tag">${esc(item.cat || '')}</span>${esc(item.date || '')}</div>
        </div>
        <div class="card-expand-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></div>
      </div>
      <div class="card-body">
        <div class="form-section">
          <div class="form-row three">
            <div class="field"><label>Slug (URL)</label><input type="text" value="${escA(item.slug || '')}" onchange="updateBlog(${idx}, 'slug', this.value)"></div>
            <div class="field"><label>Kategoria</label><input type="text" value="${escA(item.cat || '')}" onchange="updateBlog(${idx}, 'cat', this.value)"></div>
            <div class="field"><label>Data</label><input type="text" value="${escA(item.date || '')}" placeholder="Kwi 2026" onchange="updateBlog(${idx}, 'date', this.value)"></div>
          </div>
          <div class="form-row">
            <div class="field"><label>Tytuł (bold)</label><input type="text" value="${escA(item.title1 || '')}" onchange="updateBlog(${idx}, 'title1', this.value)"></div>
            <div class="field"><label>Tytuł (italic)</label><input type="text" value="${escA(item.titleIt || '')}" onchange="updateBlog(${idx}, 'titleIt', this.value)"></div>
          </div>
          <div class="form-row full">
            <div class="field"><label>Lead (zajawka)</label><textarea onchange="updateBlog(${idx}, 'lede', this.value)">${esc(item.lede || '')}</textarea></div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-title">Obraz nagłówkowy</div>
          <div class="image-slot ${item.image ? 'has-image' : ''}" style="max-width: 320px">
            ${item.image ? `<img src="${escA(item.image)}" alt="" onclick="document.getElementById('blog-img-${idx}').click()">
            <div class="image-slot-overlay">
              <button onclick="document.getElementById('blog-img-${idx}').click()">Zmień</button>
              <button onclick="updateBlog(${idx}, 'image', null); renderBlog()">Usuń</button>
            </div>` : `<div class="image-slot-ph" onclick="document.getElementById('blog-img-${idx}').click()">+ obraz</div>`}
          </div>
          <input type="file" id="blog-img-${idx}" accept="image/*" style="display:none" onchange="handleBlogUpload(${idx}, this.files[0])">
        </div>
        <div class="form-section">
          <div class="form-section-title">Treść</div>
          <div class="field">
            <textarea style="min-height: 300px; font-family: monospace; font-size: 13px" onchange="updateBlogBody(${idx}, this.value)">${esc(bodyText)}</textarea>
            <div class="hint">Składnia: <code>## Nagłówek</code> • paragraf to linia • lista: <code>- punkt</code> • <code>**pogrubienie**</code> • <code>_italic_</code></div>
          </div>
        </div>
        <div class="form-section" style="display:flex; gap:8px">
          <button class="btn danger" onclick="removeBlog(${idx})">🗑 Usuń</button>
          <button class="btn sm" style="margin-left: auto" onclick="duplicateBlog(${idx})">Duplikuj</button>
        </div>
      </div>
    `;
    root.appendChild(card);
  });
}
function updateBlog(idx, key, val) { getList('blog')[idx][key] = val; markDirty(); }
function updateBlogBody(idx, text) {
  const blocks = [];
  text.split('\n\n').forEach(para => {
    const trimmed = para.trim();
    if (!trimmed) return;
    if (trimmed.startsWith('## ')) blocks.push({ h: trimmed.substring(3) });
    else if (trimmed.split('\n').every(l => l.trim().startsWith('- '))) blocks.push({ list: trimmed.split('\n').map(l => l.trim().substring(2)) });
    else blocks.push({ p: trimmed });
  });
  getList('blog')[idx].body = blocks;
  markDirty();
}
async function handleBlogUpload(idx, file) {
  if (!file) return;
  const slug = getList('blog')[idx].slug || 'blog';
  const url = await uploadImage(file, `blog-${slug}`);
  if (url) { updateBlog(idx, 'image', url); renderBlog(); }
}
function addBlog() {
  getList('blog').push({ slug: 'nowy-artykul-' + Date.now(), cat: 'Strategia', date: 'Kwi 2026', title1: 'Nowy', titleIt: 'artykuł', image: '', lede: '', body: [] });
  renderBlog();
  markDirty();
}
function removeBlog(idx) { if (!confirm('Usunąć?')) return; getList('blog').splice(idx, 1); renderBlog(); markDirty(); }
function duplicateBlog(idx) {
  const items = getList('blog');
  const copy = JSON.parse(JSON.stringify(items[idx]));
  copy.slug = copy.slug + '-kopia';
  items.splice(idx + 1, 0, copy);
  renderBlog();
  markDirty();
}

// SERVICES
function renderServices() {
  const root = $('#servicesList');
  const items = getList('services');
  root.innerHTML = items.length === 0 ? '<div style="padding: 60px; text-align: center; color: var(--text-3)">Brak usług.</div>' : '';
  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.draggable = true;
    card.dataset.idx = idx;
    setupDrag(card, 'services');
    card.innerHTML = `
      <div class="card-head" onclick="toggleCard(this.parentElement)">
        <div class="card-drag" onclick="event.stopPropagation()">⋮⋮</div>
        <div class="card-thumb">${esc(item.n || '')}</div>
        <div class="card-info">
          <div class="card-title">${esc(item.t || '—')} ${esc(item.tIt || '')}</div>
          <div class="card-meta">${esc((item.d || '').slice(0, 80))}${(item.d || '').length > 80 ? '...' : ''}</div>
        </div>
        <div class="card-expand-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></div>
      </div>
      <div class="card-body">
        <div class="form-section">
          <div class="form-row three">
            <div class="field"><label>Numer (np. "#01")</label><input type="text" value="${escA(item.n || '')}" onchange="updateService(${idx}, 'n', this.value)"></div>
            <div class="field"><label>Tytuł (bold)</label><input type="text" value="${escA(item.t || '')}" onchange="updateService(${idx}, 't', this.value)"></div>
            <div class="field"><label>Tytuł (italic)</label><input type="text" value="${escA(item.tIt || '')}" onchange="updateService(${idx}, 'tIt', this.value)"></div>
          </div>
          <div class="form-row full">
            <div class="field"><label>Opis</label><textarea onchange="updateService(${idx}, 'd', this.value)">${esc(item.d || '')}</textarea></div>
          </div>
        </div>
        <div class="form-section"><button class="btn danger" onclick="removeService(${idx})">🗑 Usuń</button></div>
      </div>
    `;
    root.appendChild(card);
  });
}
function updateService(idx, key, val) { getList('services')[idx][key] = val; markDirty(); }
function addService() {
  const items = getList('services');
  items.push({ n: '#' + String(items.length + 1).padStart(2, '0'), t: '', tIt: '', d: '' });
  renderServices();
  markDirty();
}
function removeService(idx) { if (!confirm('Usunąć?')) return; getList('services').splice(idx, 1); renderServices(); markDirty(); }

// TEAM
function renderTeam() {
  const root = $('#teamList');
  const items = getList('team');
  root.innerHTML = items.length === 0 ? '<div style="padding: 60px; text-align: center; color: var(--text-3)">Brak.</div>' : '';
  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.draggable = true;
    card.dataset.idx = idx;
    setupDrag(card, 'team');
    card.innerHTML = `
      <div class="card-head" onclick="toggleCard(this.parentElement)">
        <div class="card-drag" onclick="event.stopPropagation()">⋮⋮</div>
        <div class="card-thumb">${item.photo1 ? `<img src="${escA(item.photo1)}" alt="">` : esc(item.init || '??')}</div>
        <div class="card-info">
          <div class="card-title">${esc(item.name || '—')}</div>
          <div class="card-meta">${esc(item.role || '')} ${esc(item.roleIt || '')}</div>
        </div>
        <div class="card-expand-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></div>
      </div>
      <div class="card-body">
        <div class="form-section">
          <div class="form-row">
            <div class="field"><label>Imię i nazwisko</label><input type="text" value="${escA(item.name || '')}" onchange="updateTeam(${idx}, 'name', this.value)"></div>
            <div class="field"><label>Inicjały</label><input type="text" value="${escA(item.init || '')}" onchange="updateTeam(${idx}, 'init', this.value)"></div>
          </div>
          <div class="form-row">
            <div class="field"><label>Rola (bold)</label><input type="text" value="${escA(item.role || '')}" onchange="updateTeam(${idx}, 'role', this.value)"></div>
            <div class="field"><label>Rola (italic)</label><input type="text" value="${escA(item.roleIt || '')}" onchange="updateTeam(${idx}, 'roleIt', this.value)"></div>
          </div>
          <div class="form-row full">
            <div class="field"><label>Bio</label><textarea style="min-height: 120px" onchange="updateTeam(${idx}, 'bio', this.value)">${esc(item.bio || '')}</textarea></div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-title">Zdjęcia (2 — cross-fade na hover)</div>
          <div class="images-grid" style="grid-template-columns: 1fr 1fr; max-width: 400px">
            ${[1,2].map(n => {
              const src = item['photo' + n];
              return `
                <div class="image-slot ${src ? 'has-image' : ''}">
                  ${src ? `<img src="${escA(src)}" alt="" onclick="document.getElementById('team-img-${idx}-${n}').click()">
                  <div class="image-slot-overlay">
                    <button onclick="document.getElementById('team-img-${idx}-${n}').click()">Zmień</button>
                    <button onclick="updateTeam(${idx}, 'photo${n}', null); renderTeam()">Usuń</button>
                  </div>` : `<div class="image-slot-ph" onclick="document.getElementById('team-img-${idx}-${n}').click()">+ zdjęcie ${n}</div>`}
                </div>
                <input type="file" id="team-img-${idx}-${n}" accept="image/*" style="display:none" onchange="handleTeamUpload(${idx}, ${n}, this.files[0])">
              `;
            }).join('')}
          </div>
        </div>
        <div class="form-section"><button class="btn danger" onclick="removeTeam(${idx})">🗑 Usuń</button></div>
      </div>
    `;
    root.appendChild(card);
  });
}
function updateTeam(idx, key, val) { getList('team')[idx][key] = val; markDirty(); }
async function handleTeamUpload(idx, n, file) {
  if (!file) return;
  const init = (getList('team')[idx].init || 'x').toLowerCase();
  const url = await uploadImage(file, `founder-${init}-${n}`);
  if (url) { updateTeam(idx, 'photo' + n, url); renderTeam(); }
}
function addTeam() { getList('team').push({ name: '', init: '', role: 'Co-founder /', roleIt: '', bio: '', photo1: '', photo2: '' }); renderTeam(); markDirty(); }
function removeTeam(idx) { if (!confirm('Usunąć?')) return; getList('team').splice(idx, 1); renderTeam(); markDirty(); }

// CONTACT
function renderContact() {
  const root = $('#contactEditor');
  if (!currentData[currentLang].contact) currentData[currentLang].contact = {};
  const c = currentData[currentLang].contact;
  root.innerHTML = `
    <div class="form-section">
      <div class="form-section-title">Dane kontaktowe</div>
      <div class="form-row">
        <div class="field"><label>Email</label><input type="text" value="${escA(c.email || '')}" onchange="updateContact('email', this.value)"></div>
        <div class="field"><label>Telefon</label><input type="text" value="${escA(c.phone || '')}" onchange="updateContact('phone', this.value)"></div>
      </div>
      <div class="form-row full">
        <div class="field"><label>Adres</label><input type="text" value="${escA(c.address || '')}" onchange="updateContact('address', this.value)"></div>
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">Social media</div>
      <div class="form-row full">
        <div class="field"><label>Facebook URL</label><input type="text" value="${escA(c.facebook || '')}" onchange="updateContact('facebook', this.value)"></div>
      </div>
      <div class="form-row">
        <div class="field"><label>Instagram URL</label><input type="text" value="${escA(c.instagram || '')}" onchange="updateContact('instagram', this.value)"></div>
        <div class="field"><label>LinkedIn URL</label><input type="text" value="${escA(c.linkedin || '')}" onchange="updateContact('linkedin', this.value)"></div>
      </div>
    </div>
  `;
}
function updateContact(key, val) {
  if (!currentData[currentLang].contact) currentData[currentLang].contact = {};
  currentData[currentLang].contact[key] = val;
  markDirty();
}

// DRAG
let dragSrc = null;
function setupDrag(card, listName) {
  card.addEventListener('dragstart', (e) => {
    dragSrc = { card, listName, idx: parseInt(card.dataset.idx) };
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
    $$('.card').forEach(c => c.classList.remove('drag-over'));
  });
  card.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (dragSrc && dragSrc.card !== card && dragSrc.listName === listName) card.classList.add('drag-over');
  });
  card.addEventListener('dragleave', () => { card.classList.remove('drag-over'); });
  card.addEventListener('drop', (e) => {
    e.preventDefault();
    if (!dragSrc || dragSrc.listName !== listName) return;
    const toIdx = parseInt(card.dataset.idx);
    const fromIdx = dragSrc.idx;
    if (fromIdx === toIdx) return;
    const list = getList(listName);
    const [item] = list.splice(fromIdx, 1);
    list.splice(toIdx, 0, item);
    markDirty();
    renderCurrentTab();
  });
}

// SEED & EXPORT
async function seedFromLocal() {
  if (!confirm('Wgrać aktualne treści strony do Supabase? To nadpisze obecne dane w bazie.')) return;
  try {
    toast('Pobieram content.js...', 'ok');
    const resp = await fetch('/content.js?v=' + Date.now());
    const text = await resp.text();
    const COPY = (new Function(text + '; return COPY;'))();
    const adapted = {
      pl: adaptFromCopy(COPY.pl),
      en: adaptFromCopy(COPY.en)
    };
    currentData = adapted;
    await saveData();
    renderCurrentTab();
    toast('Zaimportowano treści z content.js ✓', 'ok');
  } catch (e) { toast('Błąd: ' + e.message, 'err'); console.error(e); }
}
function adaptFromCopy(lang) {
  if (!lang) return { portfolio: [], blog: [], services: [], team: [], contact: {} };
  return {
    portfolio: (lang.portfolio && lang.portfolio.items) || [],
    blog: (lang.blog && lang.blog.items) || [],
    services: (lang.services && lang.services.items) || [],
    team: (lang.team && lang.team.items) || [],
    contact: {
      email: (lang.contact && lang.contact.bigEmail) || '',
      phone: extractDetail(lang.contact, ['Telefon', 'Phone']),
      address: extractDetail(lang.contact, ['Adres', 'Address']),
      facebook: extractDetail(lang.contact, ['Facebook']),
      instagram: extractDetail(lang.contact, ['Instagram']),
      linkedin: extractDetail(lang.contact, ['LinkedIn'])
    }
  };
}
function extractDetail(contact, keys) {
  if (!contact || !contact.details) return '';
  const d = contact.details.find(x => keys.includes(x.k));
  if (!d) return '';
  if (d.href) return d.href;
  return (d.v || '').replace(/<[^>]+>/g, '');
}
function exportJSON() {
  const blob = new Blob([JSON.stringify(currentData, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ktb-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Pobrano backup', 'ok');
}
function exportContentJs() {
  const js = '// Auto-generated from Supabase CMS\nconst CMS_CONTENT = ' + JSON.stringify(currentData, null, 2) + ';\nif (typeof window !== "undefined") window.CMS_CONTENT = CMS_CONTENT;\n';
  const blob = new Blob([js], { type: 'text/javascript' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'cms_content.js';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Pobrano', 'ok');
}
function importJSON() { $('#importFile').click(); }
function handleImportFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.pl || !data.en) throw new Error('Plik nie ma struktury { pl, en }');
      if (!confirm('Zaimportować? Obecne dane zostaną nadpisane.')) return;
      currentData = data;
      markDirty();
      renderCurrentTab();
      toast('Zaimportowano. Kliknij "Zapisz" żeby zapisać w Supabase.', 'ok');
    } catch (err) { toast('Błąd: ' + err.message, 'err'); }
  };
  reader.readAsText(file);
}

// INIT
loadConfig();
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 's') {
    e.preventDefault();
    if (dirty) saveData();
  }
});
