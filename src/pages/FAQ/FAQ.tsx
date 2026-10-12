import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import './faq.css';
import '../../styles/institucional.css';

type Question = { category: string; title: string; answer: string; note?: string };
// Textos editoriais iniciais: revisar com a equipe antes de publicar políticas comerciais.
const questions: Question[] = [
 {category:'English Profile',title:'O que é o English Profile?',answer:'É uma conversa guiada para conhecer seu momento com o inglês, seus hábitos, suas motivações e o que você deseja alcançar. Suas respostas ajudam a construir um ponto de partida mais próximo da sua realidade.'},
 {category:'English Profile',title:'Preciso saber inglês para responder?',answer:'Não. O English Profile acolhe pessoas de diferentes idades, experiências e níveis de conhecimento, inclusive quem está começando do zero. Responda com naturalidade, no seu ritmo.'},
 {category:'English Profile',title:'Existe resposta certa ou errada?',answer:'Não. Queremos entender como o inglês faz parte da sua vida hoje. Quanto mais sinceras forem suas respostas, melhor conseguiremos compreender suas necessidades.'},
 {category:'English Profile',title:'Posso voltar e alterar uma resposta?',answer:'Sim. Durante o preenchimento, você pode voltar às perguntas já respondidas usando o botão Anterior ou as etapas liberadas no Hub.'},
 {category:'English Profile',title:'Quanto tempo leva para preencher?',answer:'O tempo depende do ritmo de cada pessoa. O questionário combina alternativas rápidas e alguns campos de texto. A estimativa média é de aproximadamente três minutos, mas você pode responder com calma.'},
 {category:'Método',title:'Como a Plus One pensa o aprendizado?',answer:'Acreditamos em um inglês conectado à sua rotina, aos seus interesses e aos seus objetivos. O English Profile é o primeiro passo para entender o caminho que faz sentido para você. Depois de analisar seu perfil, vamos desenvolver uma rotina personalizada com atividades diárias, exercícios práticos e oportunidades de contato com o idioma. A ideia é ajudar você a estudar e praticar de maneira constante, tornando sua evolução mais natural e próxima da sua realidade.'},
 {category:'Suporte',title:'Ainda tenho alguma dúvida. Como posso falar com vocês?',answer:'Você pode acompanhar a Plus One pelo Instagram e entrar em contato com nossa equipe por lá. Informações específicas sobre aulas, valores e disponibilidade devem ser confirmadas diretamente com a equipe.'},
 {category:'Método',title:'Como será minha rotina personalizada?',answer:'Sua rotina será planejada a partir das respostas do English Profile. Ela poderá incluir exercícios mentais e práticos, materiais de estudo e pequenas atividades para você praticar inglês ao longo do dia, inclusive em situações comuns da sua rotina. Por isso, responder ao questionário com sinceridade faz tanta diferença.'},
 {category:'Método',title:'O que acontece quando termina o período da rotina personalizada que comprei?',answer:'Ao final do período contratado, você passará por uma reavaliação. Vamos entender seus avanços, o que funcionou bem e o que pode ser melhorado. A partir dessa análise, você poderá renovar seu plano com novos objetivos e uma rotina atualizada para a próxima etapa.'},
 {category:'Suporte',title:'Gostaria de ter aulas particulares. Vocês oferecem?',answer:'Sim. A Plus One conta com professores para aulas particulares, que podem abordar conteúdos específicos, dúvidas ou prática de conversação. O agendamento depende da disponibilidade de cada teacher e as aulas são um serviço contratado separadamente.',note:'Consulte a equipe para confirmar disponibilidade e valores das aulas particulares.'},
 {category:'Método',title:'Receberei material físico?',answer:'Não. Sua rotina de estudos é um material digital personalizado, enviado por e-mail e WhatsApp. Ela reúne atividades e exercícios organizados para o período do seu plano, para que você possa praticar inglês no seu dia a dia.'},
];
const decorativeQuestions = Array.from({length:72}, (_,i) => {
 const x = 17 + ((i*47.37 + (i%7)*11.3)%66);
 const y = 18 + ((i*29.73 + (i%11)*8.4)%64);
 const size = i%17===0?92:i%9===0?64:i%4===0?35:12+(i*7)%19;
 return {x,y,size,rotation:(i*37)%80-40,opacity:i%5===0?.18:.09};
});
const satellites = [
 {radius:148,phase:20,size:25,type:'question'},
 {radius:148,phase:198,size:18,type:'book'},
 {radius:115,phase:122,size:21,type:'profile'},
 {radius:115,phase:301,size:15,type:'headset'},
 {radius:148,phase:105,size:18,type:'question'},
 {radius:115,phase:45,size:17,type:'book'},
 {radius:148,phase:273,size:19,type:'profile'},
 {radius:115,phase:213,size:16,type:'question'}
];
function SatelliteIcon({type}:{type:string}) {
 if(type==='question') return <span className="faq-satellite-question">?</span>;
 if(type==='book') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6C9 4 6 4 3 5v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Z"/><path d="M12 6v14"/></svg>;
 if(type==='profile') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4.5 21c0-4.5 3.3-7 7.5-7s7.5 2.5 7.5 7"/></svg>;
 return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12v-2a7 7 0 0 1 14 0v2"/><rect x="3" y="11" width="4" height="7" rx="2"/><rect x="17" y="11" width="4" height="7" rx="2"/><path d="M19 18c0 2-2 3-5 3h-2"/></svg>;
}
const categories=['Todas','English Profile','Método','Suporte'];
function CategoryIcon({category}:{category:string}){return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="faq-category-icon">{category==='English Profile'?<><circle cx="12" cy="8" r="4"/><path d="M4.5 21c0-4.5 3.3-7 7.5-7s7.5 2.5 7.5 7"/></>:category==='Método'?<><path d="M12 6C9 4 6 4 3 5v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Z"/><path d="M12 6v14"/></>:<><path d="M5 12v-2a7 7 0 0 1 14 0v2"/><rect x="3" y="11" width="4" height="7" rx="2"/><rect x="17" y="11" width="4" height="7" rx="2"/><path d="M19 18c0 2-2 3-5 3h-2"/></>}</svg>}
function Chevron({open=false}:{open?:boolean}) {return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={open?'faq-chevron is-open':'faq-chevron'}><path d="m6 9 6 6 6-6"/></svg>}
function Arrow(){return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="m9 5 7 7-7 7"/></svg>}
function Icon({type}:{type:'spark'|'chat'|'book'}){return <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{type==='spark'?<><path d="m16 3 2.8 10.2L29 16l-10.2 2.8L16 29l-2.8-10.2L3 16l10.2-2.8L16 3Z"/><path d="M25 3v5m-2.5-2.5h5"/></>:type==='chat'?<><path d="M6 7h20v15H14l-7 5v-5H6z"/><path d="M11 13h10M11 17h7"/></>:<><path d="M16 7c-4-3-8-3-12-2v20c4-1 8-1 12 2 4-3 8-3 12-2V5c-4-1-8-1-12 2Z"/><path d="M16 7v20"/></>}</svg>}
export default function FAQ(){
 const [category,setCategory]=useState('Todas');
 const [search,setSearch]=useState('');
 const [open,setOpen]=useState<number[]>([]);
 const results=useMemo(()=>questions.map((q,i)=>({...q,id:i})).filter(q=>(category==='Todas'||q.category===category)&&(`${q.category} ${q.title} ${q.answer} ${q.note||''}`.toLocaleLowerCase('pt-BR').includes(search.trim().toLocaleLowerCase('pt-BR')))),[category,search]);
 const toggle=(id:number)=>setOpen(v=>v.includes(id)?v.filter(x=>x!==id):[...v,id]);
 return <><Header/><main className="faq-page">
  <section className="faq-hero" aria-labelledby="faq-title"><div className="faq-hero-glow" aria-hidden="true"/><div className="faq-question-pattern" aria-hidden="true">{decorativeQuestions.map((q,i)=><span key={i} style={{left:`${q.x}%`,top:`${q.y}%`,fontSize:q.size,transform:`rotate(${q.rotation}deg)`,opacity:q.opacity}}>?</span>)}</div><div className="faq-hero-copy"><h1 id="faq-title">Perguntar também<br/>faz parte de <em>aprender</em></h1><p>Tem alguma dúvida sobre a Plus One ou sobre o English Profile?<br/>Comece por aqui. A gente te ajuda a encontrar o próximo passo.</p><div className="faq-hero-actions"><a href="#perguntas" className="faq-primary">Explorar perguntas <Chevron/></a><Link to="/english-profile" className="faq-text-link">Conhecer meu perfil</Link></div></div><div className="faq-hero-art" aria-hidden="true">
 <div className="faq-orbit faq-orbit-one"/><div className="faq-orbit faq-orbit-two"/>
 <div className="faq-coin-wrap"><div className="faq-art-question"><svg viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="2.5"/><path d="M45 46a16 16 0 1 1 25 13c-7 5-10 9-10 17" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/><circle cx="60" cy="90" r="4" fill="currentColor"/></svg></div><span className="faq-bubble faq-bubble-one"/><span className="faq-bubble faq-bubble-two"/></div>
 <div className="faq-satellite-system">{satellites.map((s,i)=><span key={i} className="faq-satellite-track" style={{width:s.radius*2,height:s.radius*2,animationDuration:`${19+i*5}s`,animationDelay:`-${s.phase/18}s`}}><span className="faq-satellite" style={{fontSize:s.size}}><SatelliteIcon type={s.type}/></span></span>)}</div>
 </div></section>
  <section className="faq-content" id="perguntas" aria-labelledby="faq-questions-title"><div className="faq-content-heading"><div><span className="faq-section-label">FAQ | FREQUENTLY ASKED QUESTIONS</span><h2 id="faq-questions-title">O que você quer saber?</h2><p>Escolha um assunto ou procure uma pergunta</p></div></div><div className="faq-controls"><div className="faq-filters" role="group" aria-label="Filtrar por assunto">{categories.map(c=><button key={c} type="button" className={category===c?'faq-filter active':'faq-filter'} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="faq-search"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/></svg><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Buscar uma dúvida" aria-label="Buscar uma dúvida"/></label></div><div className="faq-list">{results.length===0?<div className="faq-empty">Não encontramos perguntas com esse termo. Experimente outra busca.</div>:results.map(q=><article className={open.includes(q.id)?'faq-item open':'faq-item'} key={q.id}><button type="button" className="faq-item-button" aria-expanded={open.includes(q.id)} aria-controls={`faq-answer-${q.id}`} onClick={()=>toggle(q.id)}><span className="faq-item-number"><CategoryIcon category={q.category}/></span><span className="faq-item-title">{q.title}<small>{q.category}</small></span><span className="faq-item-toggle"><Chevron open={open.includes(q.id)}/></span></button><div id={`faq-answer-${q.id}`} className="faq-answer" aria-hidden={!open.includes(q.id)}><div className="faq-answer-inner"><p>{q.answer}</p>{q.note&&<p className="faq-answer-note">{q.note}</p>}</div></div></article>)}</div></section>
  <section className="faq-bottom"><div className="faq-bottom-icon"><Icon type="chat"/></div><div><span className="faq-section-label">CONTINUE A CONVERSA</span><h2>Sua jornada começa com uma boa pergunta</h2><p>Quando estiver pronto, conte um pouco sobre você no English Profile</p></div><Link to="/english-profile" className="faq-bottom-link">Começar <Arrow/></Link></section>
 </main><Footer/></>;
}
