import { useEffect, useRef } from 'react';
import type { Question } from '../../data/questions';
import type { Answers } from '../../services/profileSubmission';
export default function ChatWindow({questions,answers,current,typing=false}: {questions:Question[];answers:Answers;current:Question;typing?:boolean}){
 const scroll=useRef<HTMLDivElement>(null);
 useEffect(()=>{const node=scroll.current;if(!node)return;const frame=requestAnimationFrame(()=>{node.scrollTo({top:node.scrollHeight,behavior:'instant'})});return ()=>cancelAnimationFrame(frame)},[current.id,answers,typing]);
 const shown=questions.slice(0,questions.findIndex(q=>q.id===current.id)+1);
 return <div className="po-chat-messages" ref={scroll} role="log" aria-live="polite" aria-relevant="additions text">
 {shown.map(q=><div key={q.id} className="po-exchange">
   <div className="po-bot-row"><span className="po-bot-avatar"><img className="po-chat-brand-light" src={`${import.meta.env.BASE_URL}brand/logo-mark-light.svg`} alt="" /><img className="po-chat-brand-dark" src={`${import.meta.env.BASE_URL}brand/logo-mark-dark.svg`} alt="" /></span><div className="po-bot-bubble">{q.texto.replace(/\.\s*$/, '')}</div></div>
   {answers[q.id]!==undefined&&<div className="po-user-row"><div className="po-user-bubble">{Array.isArray(answers[q.id])?(answers[q.id] as string[]).join(' · '):answers[q.id]}</div></div>}
 </div>)}
 {typing&&<div className="po-bot-row po-typing-row"><span className="po-bot-avatar"><img className="po-chat-brand-light" src={`${import.meta.env.BASE_URL}brand/logo-mark-light.svg`} alt="Plus One"/><img className="po-chat-brand-dark" src={`${import.meta.env.BASE_URL}brand/logo-mark-dark.svg`} alt=""/></span><div className="po-bot-bubble po-typing-bubble" aria-label="Carregando próxima pergunta"><i/><i/><i/></div></div>}
 </div>
}
