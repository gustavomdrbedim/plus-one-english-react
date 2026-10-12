import { useEffect, useState } from 'react';
import { ApprovedMarkup } from '../ui/ApprovedMarkup';
const markup = "<header class=\"site-header\">\n<div class=\"header-inner\">\n<a class=\"logo\" href=\"#quem-somos\">\n<span class=\"po-logo-mark\" aria-hidden=\"true\"><img class=\"po-logo-light\" src=\"/plus-one-english/brand/logo-mark-light.svg\" alt=\"\"/><img class=\"po-logo-dark\" src=\"/plus-one-english/brand/logo-mark-dark.svg\" alt=\"\"/></span>\n<span>\n      PLUS ONE\n     </span>\n</a>\n<nav aria-label=\"Navegação principal\">\n<a href=\"#quem-somos\">\n      Quem somos\n     </a>\n<a href=\"#metodo\">\n      Método\n     </a>\n<a href=\"#sobre-nos\">\n      Sobre nós\n     </a>\n<a href=\"/plus-one-english/faq\">\n      FAQ\n     </a>\n</nav>\n<div class=\"header-actions\">\n<button aria-checked=\"false\" aria-label=\"Alternar modo claro e escuro\" class=\"theme-toggle\" role=\"switch\" title=\"Alternar tema\" type=\"button\">\n<span class=\"theme-track\">\n<span class=\"sun\">\n        ☀\n       </span>\n<span class=\"moon\">\n        ☾\n       </span>\n<span class=\"theme-thumb\">\n</span>\n</span>\n</button>\n<a class=\"login-link\" href=\"#portal\">\n      Entrar\n     </a>\n<a class=\"pill header-cta\" href=\"/english-profile\">\n      Comece agora\n     </a>\n</div>\n<button aria-controls=\"mobile-nav\" aria-expanded=\"false\" aria-label=\"Abrir menu\" class=\"menu-toggle\" type=\"button\">\n     ☰\n    </button>\n</div>\n<div class=\"mobile-nav\" id=\"mobile-nav\">\n<a href=\"#quem-somos\">\n     Quem somos\n    </a>\n<a href=\"#metodo\">\n     Método\n    </a>\n<a href=\"#sobre-nos\">\n     Sobre nós\n    </a>\n<a href=\"#portal\">\n     Entrar\n    </a>\n<a href=\"/english-profile\">\n     Comece agora\n    </a>\n<a href=\"https://www.instagram.com/plus.one_school/\">\n     Instagram\n    </a>\n<a href=\"/plus-one-english/faq\">\n     Dúvidas frequentes\n    </a>\n</div>\n</header>";
export default function Header() {
 const [menuOpen,setMenuOpen]=useState(false);
 const [locationKey,setLocationKey]=useState(()=>window.location.pathname+window.location.hash);
 useEffect(()=>{const update=()=>setLocationKey(window.location.pathname+window.location.hash);window.addEventListener('hashchange',update);window.addEventListener('popstate',update);return()=>{window.removeEventListener('hashchange',update);window.removeEventListener('popstate',update)}},[]);
 useEffect(()=>{const b=document.querySelector('.site-header .menu-toggle');b?.setAttribute('aria-expanded',String(menuOpen));b?.setAttribute('aria-label',menuOpen?'Fechar menu':'Abrir menu');},[menuOpen]);
 useEffect(()=>{if(!menuOpen)return;const escape=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenuOpen(false)};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape)},[menuOpen]);
 useEffect(() => {
  const root=document.documentElement;
  const btn=document.querySelector<HTMLButtonElement>('.theme-toggle');
  const key='plus-one-theme';
  const saved=localStorage.getItem(key);
  const automatic=()=>{const hour=new Date().getHours();return hour>=18||hour<6?'dark':'light'};
  const apply=(theme:string)=>{root.dataset.theme=theme;btn?.setAttribute('aria-checked',String(theme==='dark'));btn?.setAttribute('aria-label',theme==='dark'?'Ativar modo claro':'Ativar modo escuro')};
  apply(saved==='dark'||saved==='light'?saved:automatic());
  const toggle=()=>{const theme=root.dataset.theme==='dark'?'light':'dark';apply(theme);localStorage.setItem(key,theme)};
  btn?.addEventListener('click',toggle);
  return ()=>{btn?.removeEventListener('click',toggle)};
 },[]);
 const html = window.location.pathname.replace(/\/$/,'').endsWith('/english-profile') || window.location.pathname.endsWith('/faq') || window.location.pathname.endsWith('/area-do-aluno')
   ? markup.replace(/href="#(quem-somos|metodo|sobre-nos|portal)"/g, (_match, id:string) => `href="${import.meta.env.BASE_URL}#${id}"`)
   : markup;
 const currentPath=window.location.pathname.replace(/\/$/, '').toLowerCase();
 const onProfile=currentPath.endsWith('/english-profile');
 const onPortal=currentPath.endsWith('/area-do-aluno');
 const mobileHtml=html
  .replaceAll('href="/english-profile"', `href="${import.meta.env.BASE_URL}english-profile"`)
  .replaceAll('href="/plus-one-english/faq"', `href="${import.meta.env.BASE_URL}faq"`)
  .replaceAll('href="/plus-one-english/english-profile"', `href="${import.meta.env.BASE_URL}english-profile"`)
  .replace(onProfile ? /<a href="[^"\n]*english-profile">\n     Comece agora\n    <\/a>/ : /(?!)x/, '')
  .replace(onPortal ? /<a href="[^"\n]*#portal">\n     Entrar\n    <\/a>/ : /(?!)x/, '');
 const base=import.meta.env.BASE_URL;
 const institutional=!(onProfile||currentPath.endsWith('/faq')||onPortal);
 const currentSection=locationKey.split('#')[1]||'quem-somos';
 const navItems=[['Quem somos',`${base}#quem-somos`,'quem-somos'],['Método',`${base}#metodo`,'metodo'],['Sobre nós',`${base}#sobre-nos`,'sobre-nos'],['Perguntas frequentes',`${base}faq`,'faq']];
 const active=(key:string)=>key==='faq'?currentPath.endsWith('/faq'):institutional&&currentSection===key;
 return <><div onClickCapture={(event)=>{
  const target=event.target as Element;
  if(target.closest('.site-header .menu-toggle')){event.preventDefault();setMenuOpen(v=>!v)}
 }}><ApprovedMarkup html={mobileHtml.replaceAll('href="/faq"', `href="${base}faq"`)} /></div>
 <div className={`po-mobile-nav-layer ${menuOpen?'is-open':''}`}>
  <button type="button" className="po-mobile-nav-scrim" aria-label="Fechar menu" tabIndex={menuOpen?0:-1} onClick={()=>setMenuOpen(false)} />
  <nav className="po-mobile-nav-sheet" aria-label="Menu mobile" aria-hidden={!menuOpen} inert={!menuOpen}>
   <div className="po-mobile-nav-primary">{navItems.map(([label,href,key])=><a key={key} href={href} aria-current={active(key)?'location':undefined} className={active(key)?'is-current':''} onClick={()=>setMenuOpen(false)}>{label}</a>)}</div>
   <div className="po-mobile-nav-actions">
    {!onPortal&&<a href={`${base}#portal`} onClick={()=>setMenuOpen(false)}>Entrar</a>}
    {!onProfile&&<a className="po-mobile-nav-cta" href={`${base}english-profile`} onClick={()=>setMenuOpen(false)}>Comece agora</a>}
   </div>
  </nav>
 </div></>;
}
