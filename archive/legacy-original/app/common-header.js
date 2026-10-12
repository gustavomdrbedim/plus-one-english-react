/* PLUS ONE | Header compartilhado com a institucional.
   Edite os links e a marca AQUI: este arquivo é usado nas páginas legacy. */
(function () {
  const doc = document;
  const root = doc.documentElement;
  const key = 'plus-one-theme';
  const scriptUrl = document.currentScript?.src || location.href;
  // Resolve a raiz do Vite tanto em /legacy/ quanto em /legacy/app/.
  const base = new URL(scriptUrl).pathname.split('/legacy/')[0] + '/';
  const institutional = base;
  const logo = base + 'images/institucional-1.png';
  const navLinks = [
    ['Quem somos', institutional + '#quem-somos'],
    ['Método', institutional + '#metodo'],
    ['Sobre nós', institutional + '#sobre-nos']
  ];
  const themeIcon = '<span class="theme-track"><span class="sun">☀</span><span class="moon">☾</span><span class="theme-thumb"></span></span>';
  const links = navLinks.map(([name, url]) => `<a href="${url}" target="_top">${name}</a>`).join('');
  const header = doc.createElement('header');
  header.className = 'po-global-header';
  header.innerHTML = `
    <div class="po-global-inner">
      <a class="po-global-logo" href="${institutional}" target="_top">
        <img src="${logo}" alt="Plus One" /><span>PLUS ONE</span>
      </a>
      <nav class="po-global-links" aria-label="Navegação principal">${links}</nav>
      <div class="po-global-actions">
        <button class="theme-toggle" type="button" role="switch" aria-label="Alternar tema" aria-checked="false">${themeIcon}</button>
        <a class="po-global-enter" href="${institutional}#portal" target="_top">Entrar</a>
        <a class="po-global-cta" href="${base}english-profile" target="_top">Comece agora</a>
      </div>
      <button class="po-global-menu" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
    </div>
    <nav class="po-global-mobile" aria-label="Menu mobile">
      ${links}
      <a href="${institutional}#portal" target="_top">Entrar</a>
      <a href="${base}english-profile" target="_top">Comece agora</a>
      <a href="${base}faq" target="_top">Dúvidas frequentes</a>
      <a href="https://www.instagram.com/plus.one_school/" target="_blank" rel="noopener noreferrer">Instagram</a>
    </nav>`;
  doc.body.prepend(header);
  doc.body.classList.add('po-has-global');

  // Tema compartilhado: mesma chave utilizada na página institucional.
  const themeButton = header.querySelector('.theme-toggle');
  function setTheme(theme) {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-checked', String(theme === 'dark'));
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
  }
  let saved;
  try { saved = localStorage.getItem(key); } catch (_) {}
  const hour = new Date().getHours();
  setTheme(saved === 'light' || saved === 'dark' ? saved : (hour >= 18 || hour < 6 ? 'dark' : 'light'));
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try { localStorage.setItem(key, theme); } catch (_) {}
  });

  // Menu responsivo: os links são navegáveis mesmo dentro do iframe.
  const menuButton = header.querySelector('.po-global-menu');
  const mobileMenu = header.querySelector('.po-global-mobile');
  menuButton.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));

  // Botão fixo na BASE da barra lateral, sem sobrepor os itens superiores.
  const rail = doc.querySelector('.rail');
  if (rail) {
    const collapse = doc.createElement('button');
    collapse.type = 'button';
    collapse.className = 'rail-collapse';
    collapse.textContent = '«';
    collapse.setAttribute('aria-label', 'Recolher menu lateral');
    collapse.setAttribute('aria-expanded', 'true');
    rail.appendChild(collapse);
    collapse.addEventListener('click', () => {
      const collapsed = doc.body.classList.toggle('po-rail-collapsed');
      collapse.textContent = collapsed ? '»' : '«';
      collapse.setAttribute('aria-expanded', String(!collapsed));
      collapse.setAttribute('aria-label', collapsed ? 'Expandir menu lateral' : 'Recolher menu lateral');
    });
  }
})();
