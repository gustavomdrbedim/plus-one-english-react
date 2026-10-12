/** Interações aprovadas, com limpeza para evitar listeners duplicados. */
export function initializeInstitutional() {
 const root = document.documentElement;
 const sections = ['quem-somos','metodo','sobre-nos','portal'].map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let observer: IntersectionObserver | undefined;
 const replayHandlers: Array<[HTMLAnchorElement, () => void]> = [];
 if (!reduced && 'IntersectionObserver' in window) {
   root.classList.add('po-motion-ready');
   observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('po-in'); }), {threshold:.18});
   sections.forEach(section => observer?.observe(section));
   document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
     const handler = () => { const target = document.getElementById(decodeURIComponent((link.getAttribute('href') || '').slice(1))); if (!target || !sections.includes(target)) return; target.classList.remove('po-in'); void target.offsetWidth; requestAnimationFrame(() => requestAnimationFrame(() => target.classList.add('po-in'))); };
     link.addEventListener('click', handler); replayHandlers.push([link, handler]);
   });
 }
 return () => { observer?.disconnect();replayHandlers.forEach(([link,handler])=>link.removeEventListener('click',handler));root.classList.remove('po-motion-ready');root.classList.remove('po-in');sections.forEach(s=>s.classList.remove('po-in')); };
}
