import { useEffect,useMemo,useRef,useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProfileHub from '../../components/layout/ProfileHub';
import ChatWindow from '../../components/chat/ChatWindow';
import AnswerInput from '../../components/chat/AnswerInput';
import { questions,sections } from '../../data/questions';
import { ANSWERS_KEY,canRedo,clearAnswers,receipt,submitProfile,type Answers } from '../../services/profileSubmission';
import '../../styles/institucional.css';
import './profile.css';
const isVisible=(id:string,a:Answers)=>id!=='Q11'||['Estudei por pouco tempo.','Estudei por alguns anos.','Estudei por vários anos.'].includes(String(a.Q08||''));
function readSaved():Answers{try{return JSON.parse(localStorage.getItem(ANSWERS_KEY)||'{}')}catch{return {}}}
export default function EnglishProfile(){
 const advanceTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const [typing,setTyping]=useState(false);
 const [answers,setAnswers]=useState<Answers>(readSaved);
 const [view,setView]=useState<'intro'|'chat'|'finish'>(receipt()?'finish':'intro');
 const [currentId,setCurrentId]=useState('Q01');
 const [sending,setSending]=useState(false);
 const [sendError,setSendError]=useState(false);
 const [completed,setCompleted]=useState(!!receipt());
 const visible=useMemo(()=>questions.filter(q=>isVisible(q.id,answers)),[answers]);
 const unlockedIndex=visible.findIndex(q=>answers[q.id]===undefined);
 const maxUnlocked=unlockedIndex<0?visible.length-1:unlockedIndex;
 const idx=Math.max(0,visible.findIndex(q=>q.id===currentId));
 const current=visible[idx]||visible[0];
 useEffect(()=>{document.title='English Profile | Plus One'},[]);
 useEffect(()=>{localStorage.setItem(ANSWERS_KEY,JSON.stringify(answers))},[answers]);
 function cancelTyping(){if(advanceTimer.current!==null){clearTimeout(advanceTimer.current);advanceTimer.current=null}setTyping(false)}
 useEffect(()=>()=>{if(advanceTimer.current!==null)clearTimeout(advanceTimer.current)},[]);
 function start(){setView('chat');if(!visible.some(q=>q.id===currentId))setCurrentId(visible[0].id)}
 async function finish(a:Answers){setView('finish');setSending(true);setSendError(false);try{await submitProfile(a);setCompleted(true)}catch{setSendError(true)}finally{setSending(false)}}
 function answer(value:string|string[]){if(typing)return;const next={...answers,[current.id]:value};setAnswers(next);localStorage.setItem(ANSWERS_KEY,JSON.stringify(next));const vis=questions.filter(q=>isVisible(q.id,next));const index=vis.findIndex(q=>q.id===current.id);if(index===vis.length-1){void finish(next)}else {setTyping(true);const nextText=vis[index+1].texto.trim();const delayMs=Math.round(1000+Math.min(1,nextText.length/170)*2000);advanceTimer.current=setTimeout(()=>{setCurrentId(vis[index+1].id);setTyping(false);advanceTimer.current=null},delayMs)}}
 function restart(){cancelTyping();if(!canRedo())return;clearAnswers();setAnswers({});setCurrentId('Q01');setCompleted(false);setSendError(false);setView('intro')}
 return <div className="po-profile-page"><Header/><div className="po-profile-layout"><ProfileHub view={view} currentId={currentId} visibleIds={visible.map(q=>q.id)} maxUnlocked={maxUnlocked} answers={answers} onQuestion={id=>{const target=visible.findIndex(q=>q.id===id);if(target<0||target>maxUnlocked)return;cancelTyping();setCurrentId(id);setView('chat')}} onView={v=>{cancelTyping();v==='intro'?setView('intro'):start()}}/>
 <main className="po-profile-main"><div className="po-profile-top"><div><div className="po-profile-eyebrow">{view==='intro'?'': 'ENGLISH PROFILE'}</div><h1>{view==='intro'?'Welcome student!':view==='finish'?'THANK YOU':sections[current.id]}</h1></div>
 {view==='chat'&&<div className="po-profile-progress"><span>{String(idx+1).padStart(2,'0')} / {visible.length}</span><div className="po-progress-track"><i style={{width:`${((idx+1)/visible.length)*100}%`}}/></div></div>}</div>
 {view==='intro'&&<section className="po-profile-intro"><div className="po-intro-text po-intro-animated"><span className="po-profile-eyebrow">ENGLISH PROFILE</span><h2>Seja bem-vindo à<br />análise de perfil da<br />Plus One</h2><p>Vamos entender onde você está, o que você busca e como uma rotina de estudos personalizada pode ajudar você a evoluir no inglês</p><button className="po-start" onClick={start}>Começar <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button><small>Leva menos de três minutos · até 25 perguntas</small></div><div className="po-intro-notes po-notes-animated"><div className="po-intro-note"><span className="po-note-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4.5 21c0-4.5 3.3-7 7.5-7s7.5 2.5 7.5 7"/></svg></span><section><strong>Queremos te conhecer</strong><p>Conta pra gente sua experiência, rotina e os objetivos com o inglês</p></section></div><div className="po-intro-note"><span className="po-note-icon po-note-exclamation">!</span><section><strong>Seja sincero</strong><p>Isso não é uma prova. Quanto mais sincero você for, melhor será seu plano de estudos</p></section></div><div className="po-intro-note"><span className="po-note-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5c-2.7-1.8-5.7-2-9-1v14c3.3-1 6.3-.8 9 1 2.7-1.8 5.7-2 9-1V4c-3.3-1-6.3-.8-9 1Z"/><path d="M12 5v14"/></svg></span><section><strong>Como isso me ajuda?</strong><p>Com um caminho bem desenhado e personalizado, aprender inglês deixa de ser algo chato e se torna prazeroso</p></section></div></div></section>}
 {view==='chat'&&<section className="po-profile-chat"><ChatWindow questions={visible} answers={answers} current={current} typing={typing}/><div className={`po-answer-slot ${typing?'po-answer-waiting':''}`}><AnswerInput key={current.id} question={current} previous={answers[current.id]} onAnswer={answer}/></div><footer className="po-profile-chat-footer"><button className="po-back" onClick={()=>{if(idx>0){cancelTyping();setCurrentId(visible[idx-1].id)}}} disabled={idx===0}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m14.5 5-7 7 7 7"/></svg> <span className="po-back-desktop">Anterior</span><span className="po-back-mobile">Retornar à pergunta anterior</span></button><span className="po-back-hint">Quer editar uma resposta? Use Anterior para voltar à pergunta</span></footer></section>}
 {view==='finish'&&<section className="po-profile-finish"><div className="po-finish-mark">✓</div><h2>{sending?'Enviando seu perfil...':sendError?'Estamos verificando seu envio':completed?'Seu perfil chegou até nós!':'Diagnóstico concluído'}</h2><p>{sending?'Aguarde enquanto confirmamos o recebimento':sendError?'Ainda não conseguimos confirmar o registro. Suas respostas continuam salvas neste dispositivo': 'Obrigado por confiar na Plus One. Nossa equipe vai analisar suas respostas e entrar em contato para compartilhar seu plano de estudos'}</p>{sendError&&<button className="po-start" onClick={()=>void finish(answers)}>Verificar recebimento novamente</button>}{completed&&canRedo()&&<button className="po-start" onClick={restart}>Refazer diagnóstico (até 12h)</button>}</section>}
 </main></div><Footer/></div>
}
