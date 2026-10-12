import { useEffect, useState } from 'react';
import type { Answers } from '../../services/profileSubmission';
import { Link } from 'react-router-dom';
const ProfileIcon=()=> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4.5 21c0-4.5 3.3-7 7.5-7s7.5 2.5 7.5 7"/></svg>;
const InstagramIcon=()=> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
const FAQIcon=()=> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.4 9a2.8 2.8 0 0 1 5.3 1.2c0 2-2.7 2.1-2.7 4"/><circle cx="12" cy="17.5" r=".9" fill="currentColor" stroke="none"/></svg>;
const HouseIcon=()=> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m3 10 9-7 9 7M5 9.5V21h14V9.5M9 21v-7h6v7"/></svg>;
export default function ProfileHub({view,onView,currentId,visibleIds,answers,onQuestion,maxUnlocked}: {view:'intro'|'chat'|'finish';onView:(v:'intro'|'chat')=>void;currentId:string;visibleIds:string[];maxUnlocked:number;answers:Answers;onQuestion:(id:string)=>void}){
 const [collapsed,setCollapsed]=useState(false);
 const [mobileOpen,setMobileOpen]=useState(false);
 useEffect(()=>{if(!mobileOpen)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setMobileOpen(false)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[mobileOpen]);
 useEffect(()=>{const vv=window.visualViewport;if(!vv)return;const update=()=>{const keyboard=Math.max(0,window.innerHeight-vv.height-vv.offsetTop);document.documentElement.style.setProperty('--po-keyboard-offset',`${keyboard}px`)};update();vv.addEventListener('resize',update);vv.addEventListener('scroll',update);return()=>{vv.removeEventListener('resize',update);vv.removeEventListener('scroll',update);document.documentElement.style.removeProperty('--po-keyboard-offset')}},[]);
 const dismiss=()=>setMobileOpen(false);
 return <><button type="button" className="po-mobile-hub-fab" aria-label={mobileOpen?'Fechar navegação':'Abrir navegação'} aria-expanded={mobileOpen} aria-controls="po-profile-navigation" onClick={()=>setMobileOpen(v=>!v)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m14.5 5-7 7 7 7"/></svg></button>
 {mobileOpen&&<button type="button" className="po-mobile-hub-scrim" aria-label="Fechar navegação" onClick={dismiss}/>}
 <aside id="po-profile-navigation" className={`po-profile-hub ${mobileOpen?'mobile-open':''} ${collapsed?'collapsed':''}`} aria-label="Navegação do English Profile">
  <nav className="po-hub-top"><div className="po-hub-mobile-heading"><strong>English Profile</strong><button type="button" onClick={dismiss} aria-label="Fechar menu">×</button></div>
   <button title="Introdução" className={view==='intro'?'active':''} onClick={()=>{onView('intro');dismiss()}}><span className="po-hub-icon"><HouseIcon/></span><span className="po-hub-label">Introdução</span></button>
   <button title="English Profile" className={view==='chat'?'active':''} onClick={()=>{onView('chat');dismiss()}}><span className="po-hub-icon"><ProfileIcon/></span><span className="po-hub-label">English Profile</span></button>
   {view==='chat'&&<div className="po-hub-stages"><span className="po-hub-stages-label">ETAPAS</span><div className="po-hub-stage-grid">{visibleIds.map((id,i)=><button key={id} type="button" title={`Pergunta ${i+1}`} aria-label={`Ir para pergunta ${i+1}`} aria-current={currentId===id?'step':undefined} disabled={i>maxUnlocked} className={`po-hub-stage ${currentId===id?'current':''} ${answers[id]!==undefined?'answered':''}`} onClick={()=>{onQuestion(id);dismiss()}}>{String(i+1).padStart(2,'0')}</button>)}</div></div>}
  </nav>
  <div className="po-hub-bottom">
   <a title="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/plus.one_school/"><span className="po-hub-icon"><InstagramIcon/></span><span className="po-hub-label">Instagram</span></a>
   <Link title="Dúvidas Frequentes" to="/faq"><span className="po-hub-icon"><FAQIcon/></span><span className="po-hub-label">FAQ</span></Link>
   <button title={collapsed?'Expandir hub':'Recolher hub'} className="po-hub-toggle" onClick={()=>setCollapsed(v=>!v)}><span className="po-hub-icon"><svg className="po-hub-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14.5 5-7 7 7 7"/></svg></span><span className="po-hub-label">{collapsed?'Expandir':'Recolher'}</span></button>
  </div>
 </aside></>
}
