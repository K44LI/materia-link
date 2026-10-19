
(() => {
'use strict';


const ICONS = {
  home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  mail:'<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  arrow:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  right:'<polyline points="9 18 15 12 9 6"/>',
  left:'<polyline points="15 18 9 12 15 6"/>',
  heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  gift:'<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
  send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><line x1="8" y1="6" x2="8" y2="6.01"/><line x1="12" y1="6" x2="12" y2="6.01"/><line x1="16" y1="6" x2="16" y2="6.01"/><line x1="8" y1="10" x2="8" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="16" y1="10" x2="16" y2="10.01"/>',
  list:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  help:'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',
  play:'<polygon points="5 3 19 12 5 21 5 3"/>',
  trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
  leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  swap:'<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  cog:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
};
const ic = (n, s = 20) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;


const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => 'R$ ' + Number(n || 0).toFixed(2).replace('.', ',');
const initials = n => String(n).trim().split(/\s+/).slice(0, 2).map(p => p[0]).join('').toUpperCase() || '?';
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const nowHM = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
let toastT;
const toast = msg => { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2600); };

const TYPES = [
  { k:'Plástico', e:'🧴' }, { k:'Metal', e:'🥫' }, { k:'Papel', e:'📄' },
  { k:'Vidro', e:'🍾' }, { k:'Eletrônico', e:'🖥️' }, { k:'Outros', e:'📦' }
];
const emoji = k => (TYPES.find(t => t.k === k) || { e:'📦' }).e;


const COMPANIES = [
  { id:1, name:'EcoPack Embalagens', km:2.4, city:'Diadema', uf:'SP', rating:4.8, reviews:124, hours:'Segunda a Sábado • 8h às 17h', min:10, x:34, y:58,
    mats:[{t:'Plástico',sub:'PET (garrafas, embalagens)',kg:50,price:1.2},{t:'Papel',sub:'Papelão e papel branco',kg:30,price:.8},{t:'Metal',sub:'Alumínio e latas',kg:40,price:1.5},{t:'Vidro',sub:'Garrafas e potes',kg:20,price:.6}] },
  { id:2, name:'MetalSul', km:4.8, city:'Santo André', uf:'SP', rating:4.6, reviews:87, hours:'Segunda a Sexta • 7h às 16h', min:5, x:62, y:72,
    mats:[{t:'Metal',sub:'Ferro, aço e alumínio',kg:120,price:1.9},{t:'Eletrônico',sub:'Sucata eletrônica',kg:15,price:3.2}] },
  { id:3, name:'RePlast', km:7.2, city:'São Bernardo do Campo', uf:'SP', rating:4.7, reviews:64, hours:'Segunda a Sexta • 8h às 18h', min:20, x:70, y:30,
    mats:[{t:'Plástico',sub:'PET, PEAD e PP',kg:200,price:1.4}] },
  { id:4, name:'GreenRecicla', km:10.5, city:'São Caetano do Sul', uf:'SP', rating:4.5, reviews:52, hours:'Segunda a Sábado • 9h às 17h', min:10, x:22, y:28,
    mats:[{t:'Papel',sub:'Papelão',kg:90,price:.7},{t:'Vidro',sub:'Vidro incolor',kg:60,price:.5},{t:'Plástico',sub:'Plástico filme',kg:40,price:.9}] }
];
const coById = id => COMPANIES.find(c => c.id === Number(id));
const coTypes = c => [...new Set(c.mats.map(m => m.t))];


const KEY = 'materialink-v1';
const DEFAULTS = {
  auth:false, role:'usuario', name:'Kethelyn Eimori', company:'EcoPack Embalagens', email:'',
  myMaterials:[
    { id:1, type:'Plástico', name:'Plástico PET', mode:'Doar',   kg:50, price:0,   active:true },
    { id:2, type:'Papel',    name:'Papelão',      mode:'Vender', kg:80, price:1.2, active:true },
    { id:3, type:'Metal',    name:'Alumínio',     mode:'Vender', kg:25, price:4.5, active:true }
  ],
  requests:[
    { id:1, name:'Ana Souza',    mat:'Plástico PET', kg:30, km:3.2, place:'São Bernardo do Campo - SP', status:'nova' },
    { id:2, name:'Lucas Ferreira', mat:'Papelão',    kg:50, km:5.8, place:'Diadema - SP',                status:'nova' },
    { id:3, name:'Carla Mendes', mat:'Alumínio',     kg:15, km:7.4, place:'São Paulo - SP',              status:'nova' }
  ],
  favCos:[1,2,3,4], favMats:['1-0','1-1'],
  chats:{}, nextId:10,
  filters:{ types:[], dist:50, city:'' }
};
let S;
try { S = Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { S = { ...DEFAULTS }; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
const ui = { q:'', chip:'Todos', tab:'novas', favTab:'empresas', mapSel:null, signup:'usuario', loginRole:'usuario' };

const go = h => { if (location.hash === '#/' + h) render(); else location.hash = '#/' + h; };
const route = () => { const h = location.hash.replace(/^#\/?/, ''); const [n, ...r] = h.split('/'); return [n || '', r.join('/')]; };
const isCo = () => S.role === 'empresa';
const displayName = () => isCo() ? S.company : S.name;
const firstName = () => displayName().split(' ')[0];

const logo = (size = 'md', light = false) =>
  `<span class="logo ${size} ${light ? 'light' : ''}"><span class="logo-mark">${ic('refresh', '60%')}</span><span class="logo-text"><b>Matéria</b><b>Link</b></span></span>`;

const pageHead = (title, sub = '', back = null, extra = '') =>
  `<div class="page-head">${back ? `<button class="back" data-go="${back}" aria-label="Voltar">${ic('left')}</button>` : ''}<div class="grow"><h1>${esc(title)}</h1>${sub ? `<p>${esc(sub)}</p>` : ''}</div>${extra}</div>`;

const NAV_CO = [['home','Início','home'],['materiais','Materiais','box'],['solicitacoes','Solicitações','msg'],['mapa','Mapa','pin'],['perfil','Perfil','user']];
const NAV_US = [['home','Início','home'],['empresas','Empresas','building'],['mapa','Mapa','pin'],['favoritos','Favoritos','heart'],['perfil','Perfil','user']];

function shell(active, inner) {
  const nav = isCo() ? NAV_CO : NAV_US;
  const side = nav.map(([r, l, i]) => `<a class="nav-link ${active === r ? 'on' : ''}" href="#/${r}">${ic(i)} ${l}</a>`).join('');
  const bn = isCo() ? NAV_CO : [NAV_US[0], NAV_US[1], NAV_US[2], NAV_US[4]];
  const items = bn.map(([r, l, i]) => `<a class="${active === r ? 'on' : ''}" href="#/${r}">${ic(i, 22)}<span>${l}</span></a>`);
  // FAB no centro (entre 2º e 3º item)
  const mid = isCo() ? 2 : 2;
  const cells = [...items.slice(0, mid), `<a class="fab" href="#/novo" aria-label="Cadastrar material">${ic('plus', 26)}</a>`, ...items.slice(mid)];
  return `<div class="shell">
    <aside class="side">
      <a href="#/home" aria-label="Início">${logo('md')}</a>
      <nav>${side}</nav>
      <a class="btn btn-primary add" href="#/novo">${ic('plus')} Cadastrar material</a>
      <div class="me" data-go="perfil"><span class="avatar sm">${esc(initials(displayName()))}</span><div><b>${esc(displayName())}</b><span>${isCo() ? 'Conta empresa' : 'Conta usuário'}</span></div></div>
    </aside>
    <div class="main-col">
      <header class="top"><a href="#/home">${logo('md')}</a><span class="spacer"></span><button class="icon-btn" data-act="bell" aria-label="Notificações">${ic('bell')}</button></header>
      <main class="view" id="view">${inner}</main>
    </div>
    <nav class="bottom" aria-label="Navegação principal">${cells.join('')}</nav>
  </div>`;
}

function authShell(card) {
  return `<div class="auth">
    <section class="auth-hero">
      <span class="leaf a">${ic('leaf', 360)}</span><span class="leaf b">${ic('leaf', 260)}</span>
      ${logo('xl', true)}
      <p>Conectando pessoas, empresas e um futuro mais sustentável.</p>
      <ul>
        <li>${ic('gift')} Doe ou venda materiais recicláveis</li>
        <li>${ic('pin')} Encontre empresas parceiras perto de você</li>
        <li>${ic('msg')} Converse e combine a coleta pelo chat</li>
      </ul>
    </section>
    <section class="auth-main"><div class="auth-card"><div class="m-logo">${logo('lg')}</div>${card}</div></section>
  </div>`;
}

const pwField = (name, ph, ac = 'current-password') =>
  `<label class="field">${ic('lock')}<input type="password" name="${name}" placeholder="${ph}" autocomplete="${ac}" required minlength="${name === 'senha' || name === 'senha2' ? 8 : 1}"><button type="button" data-act="toggle-pw" aria-label="Mostrar senha">${ic('eye')}</button></label>`;

function viewLogin() {
  const co = ui.loginRole === 'empresa';
  return authShell(`
    <h1>Entrar</h1><p class="sub">Conectando pessoas, empresas e um futuro mais sustentável.</p>
    <div class="seg"><button type="button" class="${co ? '' : 'on'}" data-act="login-role" data-v="usuario">Sou usuário</button><button type="button" class="${co ? 'on' : ''}" data-act="login-role" data-v="empresa">Sou empresa</button></div>
    <form data-form="login" novalidate>
      <label class="field">${ic('mail')}<input name="email" type="text" placeholder="${co ? 'E-mail ou CNPJ' : 'E-mail ou usuário'}" autocomplete="username" required></label>
      ${pwField('senha', 'Senha')}
      <div class="err" id="err"></div>
      <button class="btn btn-primary" type="submit">Entrar ${ic('arrow')}</button>
    </form>
    <p class="auth-foot"><button class="link" data-act="forgot">Esqueceu sua senha?</button></p>
    <div class="divider">ou</div>
    <div class="social">
      <button class="btn btn-ghost" data-act="social"><b style="color:#4285f4">G</b> Continuar com o Google</button>
      <button class="btn btn-ghost" data-act="social"><b>&#63743;</b> Continuar com a Apple</button>
    </div>
    <p class="auth-foot">Não tem uma conta? <a href="#/cadastro">Cadastre-se</a></p>`);
}

function viewCadastro() {
  const co = ui.signup === 'empresa';
  const form = co ? `
      <label class="field">${ic('building')}<input name="razao" placeholder="Razão social / Nome da empresa" required></label>
      <label class="field">${ic('list')}<input name="cnpj" placeholder="CNPJ  00.000.000/0000-00" inputmode="numeric" maxlength="18" required></label>
      <label class="field">${ic('mail')}<input name="email" type="email" placeholder="E-mail corporativo" required></label>
      ${pwField('senha', 'Senha (mínimo de 8 caracteres)', 'new-password')}
      <label class="field">${ic('phone')}<input name="tel" type="tel" placeholder="Telefone (11) 98765-4321" required></label>
      <label class="field">${ic('pin')}<input name="end" placeholder="Localização / Endereço" required></label>
      <div class="err" id="err"></div>
      <button class="btn btn-primary" type="submit">Cadastrar empresa ${ic('arrow')}</button>
      <p class="fine lock">${ic('lock', 14)} Seus dados estão seguros e serão usados apenas para o funcionamento do app.</p>` : `
      <label class="field">${ic('user')}<input name="nome" placeholder="Nome completo" required></label>
      <label class="field">${ic('mail')}<input name="email" type="email" placeholder="E-mail" required></label>
      ${pwField('senha', 'Senha (mínimo de 8 caracteres)', 'new-password')}
      ${pwField('senha2', 'Confirmar senha', 'new-password')}
      <div class="err" id="err"></div>
      <button class="btn btn-primary" type="submit">Cadastrar ${ic('arrow')}</button>
      <p class="fine">Ao se cadastrar, você concorda com nossos <a href="#/cadastro" data-act="terms">Termos de Uso</a> e <a href="#/cadastro" data-act="terms">Política de Privacidade</a>.</p>`;
  return authShell(`
    <h1>${co ? 'Cadastro da empresa' : 'Criar conta'}</h1><p class="sub">${co ? 'Preencha os dados da sua empresa para começar a ofertar materiais.' : 'Crie sua conta para doar, vender e encontrar materiais.'}</p>
    <div class="seg"><button type="button" class="${co ? '' : 'on'}" data-act="signup-role" data-v="usuario">Sou usuário</button><button type="button" class="${co ? 'on' : ''}" data-act="signup-role" data-v="empresa">Sou empresa</button></div>
    <form data-form="${co ? 'cad-empresa' : 'cad-usuario'}" novalidate>${form}</form>
    <p class="auth-foot">Já tem uma conta? <a href="#/login">Entrar</a></p>`);
}

function viewHome() {
  return isCo() ? homeEmpresa() : homeUsuario();
}

function homeEmpresa() {
  const mats = S.myMaterials, act = mats.filter(m => m.active);
  const news = S.requests.filter(r => r.status === 'nova').length;
  const feat = act.slice(0, 3).map(matCard).join('') || '<div class="empty">Você ainda não cadastrou materiais.</div>';
  return `
    <div class="page-head"><div class="grow"><h1>Olá, ${esc(firstName())}! ${ic('leaf', 26)}</h1><p>Juntos por um futuro mais sustentável!</p></div></div>
    <div class="grid c3">
      <div class="card stat">${ic('refresh', 34)}<b>${mats.length}</b><span>Materiais cadastrados</span></div>
      <div class="card stat">${ic('gift', 34)}<b>${act.length}</b><span>Doações/vendas ativas</span></div>
      <div class="card stat">${ic('msg', 34)}<b>${news}</b><span>Solicitações recebidas</span></div>
    </div>
    <div class="hero-row"><a class="btn btn-primary" href="#/novo">${ic('plus')} Cadastrar material</a><a class="btn btn-outline" href="#/materiais">${ic('list')} Gerenciar materiais</a></div>
    <div class="sec-head"><h2>Materiais em destaque</h2><a href="#/materiais">Ver todos ›</a></div>
    <div class="grid auto">${feat}</div>`;
}

function homeUsuario() {
  const chips = [{ k:'Todos', e:'⊞' }, ...TYPES].map(t => `<button class="chip ${ui.chip === t.k ? 'on' : ''}" data-act="chip" data-v="${t.k}"><span class="e">${t.e}</span>${t.k}</button>`).join('');
  return `
    <div class="page-head"><div class="grow"><h1>Olá, ${esc(firstName())}! 👋</h1><p>Vamos juntos por um futuro mais sustentável!</p></div></div>
    <div class="search-row"><label class="field">${ic('search')}<input id="q" type="search" placeholder="Buscar materiais, empresas, cidade..." value="${esc(ui.q)}"></label><button class="icon-btn" style="width:50px;height:50px" data-go="empresas" aria-label="Filtros">${ic('sliders')}</button></div>
    <div class="chips">${chips}</div>
    <div class="sec-head"><h2>Empresas próximas</h2><a href="#/empresas">Ver todas ›</a></div>
    <div class="grid auto" id="clist">${companyCards(filteredCos(false).slice(0, 6))}</div>`;
}

function filteredCos(useFilters = true) {
  const q = norm(ui.q);
  return COMPANIES.filter(c => {
    if (q && !norm(c.name + ' ' + c.city + ' ' + coTypes(c).join(' ')).includes(q)) return false;
    if (ui.chip !== 'Todos' && !coTypes(c).includes(ui.chip)) return false;
    if (useFilters) {
      const f = S.filters;
      if (f.types.length && !f.types.some(t => coTypes(c).includes(t))) return false;
      if (c.km > f.dist) return false;
      if (f.city && c.city !== f.city) return false;
    }
    return true;
  });
}

function companyCards(list) {
  if (!list.length) return '<div class="empty" style="grid-column:1/-1">Nenhuma empresa encontrada com esses critérios.</div>';
  return list.map(c => `<article class="card co">
    <div class="co-top"><span class="co-logo">${ic('leaf', 26)}</span><div><h3>${esc(c.name)}</h3><span class="muted">${c.km.toFixed(1).replace('.', ',')} km • ${esc(c.city)} - ${c.uf}</span></div><span class="go">${ic('right')}</span></div>
    <div class="co-tags">${coTypes(c).map(t => `<span class="pill">${t}</span>`).join('')}</div>
    <div class="co-foot"><span class="muted">A partir de ${c.min} kg</span><button class="btn btn-primary btn-sm" data-go="empresa/${c.id}">Ver detalhes ${ic('arrow', 14)}</button></div>
  </article>`).join('');
}

function viewEmpresas() {
  const f = S.filters;
  const cities = [...new Set(COMPANIES.map(c => c.city))];
  const chips = [{ k:'Todos', e:'⊞' }, ...TYPES].map(t => `<button class="chip ${ui.chip === t.k ? 'on' : ''}" data-act="chip" data-v="${t.k}"><span class="e">${t.e}</span>${t.k}</button>`).join('');
  return `${pageHead('Empresas', 'Encontre quem recebe o seu material', null, `<button class="btn btn-ghost btn-sm filter-toggle" data-act="toggle-filters">${ic('sliders', 16)} Filtros</button>`)}
    <div class="search-row"><label class="field">${ic('search')}<input id="q" type="search" placeholder="Buscar materiais, empresas, cidade..." value="${esc(ui.q)}"></label></div>
    <div class="layout-2">
      <aside class="card filters" id="filters">
        <h3>Tipo de material</h3>
        ${TYPES.map(t => `<label class="check"><span>${t.e}</span><span style="flex:1">${t.k}</span><input type="checkbox" data-filter="type" value="${t.k}" ${f.types.includes(t.k) ? 'checked' : ''}></label>`).join('')}
        <div class="range-top" style="margin-top:16px"><span>Distância</span><span id="distv">Até ${f.dist} km</span></div>
        <input class="range" type="range" min="1" max="50" value="${f.dist}" data-filter="dist">
        <label class="lbl">Estado</label>
        <label class="field sel"><select data-filter="uf"><option>Todos os estados</option><option>SP</option></select></label>
        <label class="lbl">Cidade</label>
        <label class="field sel"><select data-filter="city"><option value="">Todas as cidades</option>${cities.map(c => `<option ${f.city === c ? 'selected' : ''}>${c}</option>`).join('')}</select></label>
        <button class="btn btn-outline btn-sm" style="width:100%;margin-top:6px" data-act="clear-filters">Limpar filtros</button>
      </aside>
      <div><div class="chips">${chips}</div><div class="grid auto" id="clist" style="margin-top:6px">${companyCards(filteredCos(true))}</div></div>
    </div>`;
}

function matCard(m) {
  return `<article class="mat-card ${m.active ? '' : 'off'}">
    <div class="thumb t-${m.type}">${emoji(m.type)}</div>
    <div class="mat-info"><h3>${esc(m.name)}</h3>
      <span class="tag ${m.mode === 'Doar' ? 'don' : 'ven'}">${m.mode === 'Doar' ? 'Doação' : 'Venda'}</span>
      ${m.mode === 'Vender' && m.price ? `<p class="price">${money(m.price)}/kg</p>` : ''}
      <p class="muted">${m.kg} kg disponíveis</p>
      <span class="status ${m.active ? '' : 'off'}">${m.active ? 'Ativo' : 'Pausado'}</span></div>
    <div class="mat-actions">
      <button class="icon-btn" data-act="toggle-mat" data-id="${m.id}" title="${m.active ? 'Pausar' : 'Ativar'}" aria-label="${m.active ? 'Pausar' : 'Ativar'}">${ic(m.active ? 'pause' : 'play', 16)}</button>
      <button class="icon-btn danger" data-act="del-mat" data-id="${m.id}" title="Excluir" aria-label="Excluir">${ic('trash', 16)}</button>
    </div></article>`;
}

function viewMateriais() {
  const title = isCo() ? 'Meus materiais' : 'Minhas doações / vendas';
  const list = S.myMaterials.map(matCard).join('') || `<div class="empty card" style="grid-column:1/-1">Nada por aqui ainda.<br><br><a class="btn btn-primary btn-sm" href="#/novo">${ic('plus', 16)} Cadastrar material</a></div>`;
  return `${pageHead(title, 'Materiais recicláveis que você está oferecendo.', isCo() ? null : 'perfil', `<a class="btn btn-primary btn-sm desk-only" href="#/novo">${ic('plus', 16)} Novo</a>`)}<div class="grid auto">${list}</div>`;
}

let formMode = 'Doar';
function viewNovo() {
  formMode = 'Doar';
  return `${pageHead('Cadastrar material', 'Informe os dados do material que deseja oferecer.', 'home')}
  <form class="card form-card" data-form="novo" novalidate>
    <span class="lbl" style="margin-top:0">Tipo de material</span>
    <div class="type-list">${TYPES.map((t, i) => `<label><span class="e">${t.e}</span><span>${t.k}</span><input type="radio" name="type" value="${t.k}" ${i === 0 ? 'checked' : ''}></label>`).join('')}</div>
    <label class="lbl">Quantidade (kg)</label>
    <label class="field"><input name="kg" type="number" min="1" step="any" inputmode="decimal" placeholder="Ex: 50" required></label>
    <span class="lbl">Modalidade</span>
    <div class="seg2"><button type="button" class="on" data-act="mode" data-v="Doar">Doar</button><button type="button" data-act="mode" data-v="Vender">Vender</button></div>
    <div id="price-wrap" class="hide"><label class="lbl">Preço por kg <small>(opcional)</small></label>
      <label class="field"><input name="price" type="number" min="0" step="0.01" inputmode="decimal" placeholder="Ex: R$ 1,20"></label></div>
    <label class="lbl">Descrição <small>(opcional)</small></label>
    <label class="field"><textarea name="desc" placeholder="Ex: Garrafas PET transparentes, limpas..."></textarea></label>
    <label class="lbl">Localização</label>
    <label class="field sel">${ic('pin', 18)}<select name="loc"><option>Usar minha localização atual</option><option>Informar outro endereço</option></select></label>
    <div class="err" id="err"></div>
    <button class="btn btn-primary" type="submit">Publicar material ${ic('arrow')}</button>
  </form>`;
}

function viewSolicitacoes() {
  const list = S.requests.filter(r => ui.tab === 'novas' ? r.status === 'nova' : r.status === 'andamento');
  const cards = list.map(r => `<article class="card req">
    <div class="req-top"><span class="avatar">${esc(initials(r.name))}</span><div><h3>${esc(r.name)}</h3><div class="req-meta"><span>${esc(r.mat)}</span>•<span>${r.kg} kg</span>•<span>${r.km.toString().replace('.', ',')} km</span></div></div></div>
    <div class="req-meta">${ic('pin', 14)} ${esc(r.place)}</div>
    <div class="req-actions">
      ${r.status === 'nova' ? `<button class="btn btn-primary btn-sm" data-act="accept" data-id="${r.id}">Aceitar</button>` : `<button class="btn btn-outline btn-sm" data-act="finish" data-id="${r.id}">${ic('check', 16)} Concluir</button>`}
      <button class="btn btn-outline btn-sm" data-go="chat/r${r.id}">${ic('msg', 16)} Conversar</button>
    </div></article>`).join('') || `<div class="empty card" style="grid-column:1/-1">${ui.tab === 'novas' ? 'Nenhuma solicitação nova.' : 'Nada em andamento no momento.'}</div>`;
  return `${pageHead('Solicitações / interessados')}
    <div class="seg" style="max-width:420px"><button class="${ui.tab === 'novas' ? 'on' : ''}" data-act="tab" data-v="novas">Novas (${S.requests.filter(r => r.status === 'nova').length})</button><button class="${ui.tab === 'andamento' ? 'on' : ''}" data-act="tab" data-v="andamento">Em andamento</button></div>
    <div class="grid auto">${cards}</div>
    <div class="sec-head"><h2>Localização da sua empresa</h2></div>
    <div class="card loc-card"><div class="map" style="height:110px;min-height:0"><span class="pin" style="left:50%;top:75%"><span>${ic('leaf', 14)}</span></span></div>
      <div><b>${esc(S.company)}</b><p class="muted">Rua Exemplo, 123<br>São Bernardo do Campo - SP</p><button class="btn btn-outline btn-sm" style="margin-top:8px" data-go="mapa">${ic('pin', 16)} Ver no mapa</button></div></div>`;
}

function viewMapa() {
  const sel = coById(ui.mapSel);
  const pins = COMPANIES.map(c => `<button class="pin ${ui.mapSel === c.id ? 'on' : ''}" style="left:${c.x}%;top:${c.y}%" data-act="pin" data-id="${c.id}" aria-label="${esc(c.name)}"><span>${ic('leaf', 15)}</span></button>`).join('');
  const card = sel ? `<div class="map-card"><div class="co-top"><span class="co-logo">${ic('leaf', 26)}</span><div><h3>${esc(sel.name)}</h3><span class="muted">${sel.km.toFixed(1).replace('.', ',')} km • ${esc(sel.city)}</span></div><button class="icon-btn" style="margin-left:auto" data-act="pin" data-id="0" aria-label="Fechar">${ic('x', 16)}</button></div>
    <div class="co-tags">${coTypes(sel).map(t => `<span class="pill">${t}</span>`).join('')}</div><button class="btn btn-primary btn-sm" style="width:100%" data-go="empresa/${sel.id}">Ver detalhes</button></div>` : '';
  return `${pageHead('Empresas próximas', 'Toque em um marcador para ver os detalhes.')}
    <div class="map"><div class="map-search"><label class="field">${ic('search')}<input placeholder="Buscar nesta área"></label></div>
      <span class="map-label" style="left:14%;top:50%">Diadema</span><span class="map-label" style="left:58%;top:50%">São Bernardo do Campo</span><span class="map-label" style="left:55%;top:84%">Santo André</span>
      <span class="me-dot" style="left:46%;top:46%"></span>${pins}${card}</div>`;
}

function viewEmpresa(id) {
  const c = coById(id); if (!c) return viewEmpresas();
  const fav = S.favCos.includes(c.id);
  const rows = c.mats.map((m, i) => `<div class="mat-row" data-go="material/${c.id}-${i}"><span class="e">${emoji(m.t)}</span><div><b>${m.t}</b><small>${m.kg} kg • ${money(m.price)}/kg</small></div>${ic('right')}</div>`).join('');
  return `${pageHead('Detalhes da empresa', '', 'empresas', `<button class="icon-btn fav-btn ${fav ? 'on' : ''}" data-act="fav-co" data-id="${c.id}" aria-label="Favoritar">${ic('heart')}</button>`)}
    <div class="detail"><div>
      <div class="banner">${ic('leaf', 90)}</div>
      <div class="card" style="margin-top:16px"><div class="co-top"><span class="co-logo">${ic('leaf', 26)}</span><div><h2>${esc(c.name)}</h2><span class="rating">★ ${c.rating.toString().replace('.', ',')}</span> <span class="muted">(${c.reviews} avaliações)</span></div></div>
        <ul class="info-list"><li>${ic('pin')} ${c.km.toFixed(1).replace('.', ',')} km • ${esc(c.city)} - ${c.uf}</li><li>${ic('clock')} ${esc(c.hours)}</li></ul></div></div>
      <div><div class="sec-head" style="margin-top:0"><h2>Materiais disponíveis</h2></div>${rows}
        <button class="btn btn-primary" data-go="chat/${c.id}">${ic('msg')} Falar com a empresa</button></div></div>`;
}

function viewMaterial(key) {
  const [cid, idx] = key.split('-'); const c = coById(cid); const m = c && c.mats[Number(idx)];
  if (!m) return viewEmpresas();
  const fav = S.favMats.includes(key);
  return `${pageHead('Detalhes do material', '', `empresa/${c.id}`, `<button class="icon-btn fav-btn ${fav ? 'on' : ''}" data-act="fav-mat" data-id="${key}" aria-label="Favoritar">${ic('heart')}</button>`)}
    <div class="detail"><div class="banner mat"><span style="font-size:6rem">${emoji(m.t)}</span></div>
    <div class="card"><h2>${m.t}</h2><p class="muted">${esc(m.sub)}</p>
      <div style="display:flex;gap:8px;margin:12px 0"><span class="pill">${m.kg} kg disponíveis</span><span class="pill">${money(m.price)}/kg</span></div>
      <h3>Informações</h3>
      <ul class="info-list"><li>${ic('box')} Tipo: ${esc(m.sub)}</li><li>${ic('list')} Quantidade mínima: ${c.min} kg</li><li>${ic('gift')} Pagamento: Dinheiro / Pix</li><li>${ic('pin')} Localização: ${esc(c.city)} - ${c.uf}</li></ul>
      <button class="btn btn-primary" data-go="chat/${c.id}">${ic('msg')} Entrar em contato</button></div></div>`;
}

function viewFavoritos() {
  const cos = S.favCos.map(coById).filter(Boolean).map(c => `<div class="mat-row" data-go="empresa/${c.id}"><span class="co-logo" style="width:44px;height:44px">${ic('leaf', 22)}</span><div><b>${esc(c.name)}</b><small>${c.km.toFixed(1).replace('.', ',')} km • ${esc(c.city)} - SP</small></div><button class="icon-btn fav-btn on" data-act="fav-co" data-id="${c.id}" aria-label="Remover">${ic('heart', 18)}</button></div>`).join('');
  const mats = S.favMats.map(k => { const [cid, i] = k.split('-'); const c = coById(cid); const m = c && c.mats[i]; return m ? `<div class="mat-row" data-go="material/${k}"><span class="e">${emoji(m.t)}</span><div><b>${m.t} — ${esc(c.name)}</b><small>${m.kg} kg • ${money(m.price)}/kg</small></div><button class="icon-btn fav-btn on" data-act="fav-mat" data-id="${k}" aria-label="Remover">${ic('heart', 18)}</button></div>` : ''; }).join('');
  const body = ui.favTab === 'empresas' ? cos : mats;
  return `${pageHead('Meus favoritos', '', 'perfil')}
    <div class="seg" style="max-width:380px"><button class="${ui.favTab === 'empresas' ? 'on' : ''}" data-act="fav-tab" data-v="empresas">Empresas</button><button class="${ui.favTab === 'materiais' ? 'on' : ''}" data-act="fav-tab" data-v="materiais">Materiais</button></div>
    <div style="max-width:640px">${body || '<div class="empty card">Você ainda não favoritou nada.</div>'}</div>`;
}

function chatInfo(id) {
  if (String(id).startsWith('r')) { const r = S.requests.find(x => 'r' + x.id === id); return r ? { name:r.name, sub:'Interessado' } : null; }
  const c = coById(id); return c ? { name:c.name, sub:'Online', co:true } : null;
}
const REPLIES = ['Ótimo! Pode trazer hoje mesmo ou agendar para amanhã. Estamos à disposição.', 'Perfeito, vou separar o material para você.', 'Combinado! Qual o melhor horário para a coleta?', 'Obrigado pelo contato! Já anotei aqui.'];
function viewChat(id) {
  const info = chatInfo(id); if (!info) return viewHome();
  if (!S.chats[id]) {
    S.chats[id] = info.co
      ? [{ me:true, t:'Olá! Gostaria de saber se vocês estão comprando plástico PET e qual o valor por kg.', h:'10:24' }, { me:false, t:'Olá! Sim, estamos comprando plástico PET. O valor é de R$ 1,20/kg. Qual a quantidade que você tem disponível?', h:'10:27' }]
      : [{ me:false, t:'Olá! Tenho interesse no seu material. Ainda está disponível?', h:'09:12' }];
    save();
  }
  const msgs = S.chats[id].map(m => `<div class="bubble ${m.me ? 'me' : 'them'}">${esc(m.t)}<time>${m.h}</time></div>`).join('');
  const back = String(id).startsWith('r') ? 'solicitacoes' : 'empresa/' + id;
  return `<div class="chat" style="margin-top:6px">
    <div class="chat-head"><button class="back" data-go="${back}" aria-label="Voltar">${ic('left')}</button><span class="avatar sm">${esc(initials(info.name))}</span><div style="flex:1"><b>${esc(info.name)}</b><small>${info.sub}</small></div><button class="icon-btn" data-act="call" aria-label="Ligar">${ic('phone', 18)}</button></div>
    <div class="chat-body" id="chatbody">${msgs}</div>
    <form class="chat-input" data-form="chat" data-id="${id}"><input name="msg" placeholder="Digite uma mensagem..." autocomplete="off"><button class="send" aria-label="Enviar">${ic('send', 18)}</button></form></div>`;
}

function viewPerfil() {
  const item = (i, label, go, act) => `<button ${go ? `data-go="${go}"` : `data-act="soon"`}>${ic(i)}<span>${label}</span>${ic('right', 18)}</button>`;
  return `${pageHead(isCo() ? 'Perfil da empresa' : 'Meu perfil')}
    <div class="profile-head"><span class="avatar lg">${esc(initials(displayName()))}</span><div><h2>${esc(displayName())}</h2><span class="pill">${isCo() ? 'Empresa' : 'Usuário'}</span></div></div>
    <div class="menu">
      ${item('user', 'Meus dados')}${item('pin', 'Endereços')}${item('heart', 'Meus favoritos', 'favoritos')}${item('gift', 'Minhas doações / vendas', 'materiais')}
      ${item('bell', 'Notificações')}${item('cog', 'Configurações')}${item('help', 'Ajuda')}
      <button data-act="switch-role">${ic('swap')}<span>Alternar para conta ${isCo() ? 'usuário' : 'empresa'}</span>${ic('right', 18)}</button>
      <button data-act="logout" style="color:var(--danger)">${ic('logout')}<span>Sair</span></button>
    </div>`;
}

const AUTH_ROUTES = ['login', 'cadastro'];
function render() {
  let [name, arg] = route();
  if (!S.auth && !AUTH_ROUTES.includes(name)) { history.replaceState(null, '', '#/login'); name = 'login'; }
  if (S.auth && (AUTH_ROUTES.includes(name) || !name)) { history.replaceState(null, '', '#/home'); name = 'home'; }
  if (name === 'empresas' && isCo()) name = 'home';
  if (name === 'solicitacoes' && !isCo()) name = 'home';
  const app = $('#app');
  const TITLES = { login:'Entrar', cadastro:'Cadastro', home:'Início', empresas:'Empresas', materiais:'Materiais', novo:'Cadastrar material', solicitacoes:'Solicitações', mapa:'Mapa', empresa:'Empresa', material:'Material', favoritos:'Favoritos', chat:'Conversa', perfil:'Perfil' };
  document.title = (TITLES[name] || 'Matéria Link') + ' • Matéria Link';
  if (name === 'login') app.innerHTML = viewLogin();
  else if (name === 'cadastro') app.innerHTML = viewCadastro();
  else {
    const views = { home:viewHome, empresas:viewEmpresas, materiais:viewMateriais, novo:viewNovo, solicitacoes:viewSolicitacoes, mapa:viewMapa, empresa:() => viewEmpresa(arg), material:() => viewMaterial(arg), favoritos:viewFavoritos, chat:() => viewChat(arg), perfil:viewPerfil };
    const navKey = ({ empresa:'empresas', material:'empresas', chat:isCo() ? 'solicitacoes' : 'empresas', novo:'', materiais:isCo() ? 'materiais' : 'perfil' })[name] ?? name;
    app.innerHTML = shell(navKey, (views[name] || viewHome)());
  }
  window.scrollTo(0, 0);
  const cb = $('#chatbody'); if (cb) cb.scrollTop = cb.scrollHeight;
}

function refreshList() { const l = $('#clist'); if (!l) return; l.innerHTML = companyCards(filteredCos(route()[0] === 'empresas')); }

document.addEventListener('click', e => {
  const g = e.target.closest('[data-go]');
  const a = e.target.closest('[data-act]');
  if (a && !(g && g.contains(a) && g !== a && !a.contains(g) && false)) { if (handleAct(a, e)) return; }
  if (g) { e.preventDefault(); go(g.dataset.go); }
});

function handleAct(a, e) {
  const d = a.dataset, act = d.act, id = d.id;
  switch (act) {
    case 'toggle-pw': { const i = a.parentElement.querySelector('input'); i.type = i.type === 'password' ? 'text' : 'password'; return true; }
    case 'login-role': ui.loginRole = d.v; render(); return true;
    case 'signup-role': ui.signup = d.v; render(); return true;
    case 'forgot': toast('Enviamos um link de recuperação para o seu e-mail (demonstração).'); return true;
    case 'terms': e.preventDefault(); toast('Termos de Uso e Política de Privacidade (demonstração).'); return true;
    case 'social': S.auth = true; S.role = ui.loginRole; save(); go('home'); return true;
    case 'bell': toast('Você não tem novas notificações.'); return true;
    case 'soon': toast('Em breve!'); return true;
    case 'call': toast('Ligação indisponível na demonstração.'); return true;
    case 'chip': ui.chip = d.v; render(); return true;
    case 'tab': ui.tab = d.v; render(); return true;
    case 'fav-tab': ui.favTab = d.v; render(); return true;
    case 'toggle-filters': $('#filters').classList.toggle('open'); return true;
    case 'clear-filters': S.filters = { types:[], dist:50, city:'' }; ui.chip = 'Todos'; ui.q = ''; save(); render(); return true;
    case 'mode': formMode = d.v; $$('.seg2 button').forEach(b => b.classList.toggle('on', b.dataset.v === formMode)); $('#price-wrap').classList.toggle('hide', formMode !== 'Vender'); return true;
    case 'toggle-mat': { const m = S.myMaterials.find(x => x.id === Number(id)); if (m) { m.active = !m.active; save(); render(); toast(m.active ? 'Material ativado.' : 'Material pausado.'); } return true; }
    case 'del-mat': if (confirm('Excluir este material?')) { S.myMaterials = S.myMaterials.filter(x => x.id !== Number(id)); save(); render(); toast('Material excluído.'); } return true;
    case 'accept': { const r = S.requests.find(x => x.id === Number(id)); if (r) { r.status = 'andamento'; save(); render(); toast('Solicitação aceita! Combine os detalhes no chat.'); } return true; }
    case 'finish': S.requests = S.requests.filter(x => x.id !== Number(id)); save(); render(); toast('Solicitação concluída. Obrigado por reciclar!'); return true;
    case 'pin': ui.mapSel = Number(id) || null; render(); return true;
    case 'fav-co': { const n = Number(id); S.favCos = S.favCos.includes(n) ? S.favCos.filter(x => x !== n) : [...S.favCos, n]; save(); render(); toast(S.favCos.includes(n) ? 'Empresa favoritada.' : 'Removida dos favoritos.'); return true; }
    case 'fav-mat': S.favMats = S.favMats.includes(id) ? S.favMats.filter(x => x !== id) : [...S.favMats, id]; save(); render(); return true;
    case 'switch-role': S.role = isCo() ? 'usuario' : 'empresa'; save(); render(); toast('Agora você está na conta ' + (isCo() ? 'empresa' : 'usuário') + '.'); return true;
    case 'logout': S.auth = false; save(); go('login'); return true;
  }
  return false;
}

document.addEventListener('input', e => {
  const t = e.target;
  if (t.id === 'q') { ui.q = t.value; refreshList(); }
  if (t.dataset.filter === 'dist') { S.filters.dist = Number(t.value); $('#distv').textContent = 'Até ' + t.value + ' km'; save(); refreshList(); }
});
document.addEventListener('change', e => {
  const t = e.target, f = t.dataset.filter;
  if (f === 'type') { S.filters.types = $$('[data-filter="type"]:checked').map(i => i.value); save(); refreshList(); }
  if (f === 'city') { S.filters.city = t.value; save(); refreshList(); }
});

document.addEventListener('submit', e => {
  const form = e.target.closest('form[data-form]'); if (!form) return;
  e.preventDefault();
  const fd = Object.fromEntries(new FormData(form).entries());
  const err = m => { const el = $('#err'); if (el) el.textContent = m; };
  const kind = form.dataset.form;

  if (kind === 'login') {
    if (!fd.email.trim() || !fd.senha) return err('Preencha e-mail e senha.');
    S.auth = true; S.role = ui.loginRole; S.email = fd.email.trim();
    const guess = fd.email.includes('@') ? fd.email.split('@')[0].replace(/[._-]+/g, ' ') : '';
    if (guess && !isCo() && S.name === DEFAULTS.name) S.name = guess.replace(/\b\w/g, c => c.toUpperCase());
    save(); toast('Bem-vindo(a) de volta!'); go('home');
  }
  else if (kind === 'cad-usuario') {
    if (!fd.nome.trim() || !/^\S+@\S+\.\S+$/.test(fd.email)) return err('Informe nome e um e-mail válido.');
    if (fd.senha.length < 8) return err('A senha deve ter pelo menos 8 caracteres.');
    if (fd.senha !== fd.senha2) return err('As senhas não coincidem.');
    Object.assign(S, { auth:true, role:'usuario', name:fd.nome.trim(), email:fd.email }); save(); toast('Conta criada com sucesso!'); go('home');
  }
  else if (kind === 'cad-empresa') {
    const cnpj = fd.cnpj.replace(/\D/g, '');
    if (!fd.razao.trim()) return err('Informe o nome da empresa.');
    if (cnpj.length !== 14) return err('CNPJ inválido — digite os 14 números.');
    if (!/^\S+@\S+\.\S+$/.test(fd.email)) return err('Informe um e-mail corporativo válido.');
    if (fd.senha.length < 8) return err('A senha deve ter pelo menos 8 caracteres.');
    Object.assign(S, { auth:true, role:'empresa', company:fd.razao.trim(), email:fd.email }); save(); toast('Empresa cadastrada com sucesso!'); go('home');
  }
  else if (kind === 'novo') {
    const kg = Number(fd.kg);
    if (!kg || kg <= 0) return err('Informe a quantidade em kg.');
    const price = formMode === 'Vender' ? Number(fd.price || 0) : 0;
    const name = fd.type === 'Plástico' && !fd.desc ? 'Plástico PET' : (fd.desc ? fd.desc.split(/[,.]/)[0].slice(0, 28) : fd.type);
    S.myMaterials.unshift({ id:S.nextId++, type:fd.type, name:name || fd.type, mode:formMode, kg, price, active:true });
    save(); toast('Material publicado!'); go('materiais');
  }
  else if (kind === 'chat') {
    const text = (fd.msg || '').trim(); if (!text) return;
    const id = form.dataset.id;
    S.chats[id].push({ me:true, t:text, h:nowHM() }); save(); render();
    setTimeout(() => {
      if (!S.chats[id]) return;
      S.chats[id].push({ me:false, t:REPLIES[Math.floor(Math.random() * REPLIES.length)], h:nowHM() }); save();
      if (route()[0] === 'chat' && route()[1] === id) { render(); }
    }, 1200);
    setTimeout(() => { const i = $('.chat-input input'); if (i) i.focus(); }, 0);
  }
});

document.addEventListener('input', e => {
  if (e.target.name !== 'cnpj') return;
  let v = e.target.value.replace(/\D/g, '').slice(0, 14);
  v = v.replace(/^(\d{2})(\d)/, '$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3').replace(/\.(\d{3})(\d)/, '.$1/$2').replace(/(\d{4})(\d)/, '$1-$2');
  e.target.value = v;
});

window.addEventListener('hashchange', render);
render();
})();
