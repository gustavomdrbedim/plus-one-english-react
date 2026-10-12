import { useEffect,useState } from 'react';
import type { Question } from '../../data/questions';
import type { Answers } from '../../services/profileSubmission';
export default function AnswerInput({question,previous,onAnswer}: {question:Question;previous?:string|string[];onAnswer:(v:string|string[])=>void}){
 const [value,setValue]=useState('');const [chosen,setChosen]=useState<string[]>([]);const [other,setOther]=useState('');const [error,setError]=useState('');
 useEffect(()=>{setValue(typeof previous==='string'?previous:'');setChosen(Array.isArray(previous)?previous:[]);setOther('');setError('')},[question.id,previous]);
 const text=['aberta','numero','email','tel','nomeCompleto'].includes(question.tipo);
 function send(){const v=value.trim();if(!v){setError('Preencha sua resposta');return}
 if(question.tipo==='email'&&!/^\S+@\S+\.\S+$/.test(v)){setError('Informe um e-mail válido');return}
 if(question.tipo==='nomeCompleto'&&v.split(/\s+/).length<2){setError('Informe nome e sobrenome');return}
 if(question.tipo==='numero'&&(+v<1||+v>120)){setError('Informe uma idade válida');return}
 onAnswer(v)}
 function select(op:string){if(question.tipo==='unica'){if(question.outro&&(op==='Outro'||op==='Outro.')){setChosen([op]);setError('');return}onAnswer(op);return}
 setChosen(old=>old.includes(op)?old.filter(x=>x!==op):[...old,op]);}
 function submitMultiple(){if(!chosen.length)return;if(chosen.some(x=>x==='Outro'||x==='Outro.')&&!other.trim()){setError('Preencha a opção Outro');return}
 setError('');onAnswer(chosen.map(x=>(x==='Outro'||x==='Outro.')?`Outro: ${other.trim()}`:x))}
 function submitOther(){if(!other.trim()){setError('Preencha a opção Outro');return}setError('');onAnswer(`Outro: ${other.trim()}`)}
 return <div className="po-answer-input">
 {text?<div className="po-input-row">
 {<input type={question.tipo==='numero'?'number':question.tipo==='email'?'email':question.tipo==='tel'?'tel':'text'} min={question.tipo==='numero'?1:undefined} max={question.tipo==='numero'?120:undefined} maxLength={question.id==='Q01'?60:question.tipo==='nomeCompleto'?120:undefined} autoComplete={question.id==='Q01'?'given-name':question.tipo==='nomeCompleto'?'name':undefined} value={value} placeholder={question.placeholder||'Escreva sua resposta'} onChange={e=>setValue(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();send()}}}/>}
 <button className="po-send" aria-label="Enviar resposta" title="Enviar resposta" onClick={send}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></button></div>
 :<>{(question.tipo==='multipla'||(question.tipo==='unica'&&chosen.some(x=>x==='Outro'||x==='Outro.')))&&<div className="po-answer-confirm-bar"><button type="button" className="po-answer-confirm" onClick={question.tipo==='multipla'?submitMultiple:submitOther} disabled={!chosen.length} aria-label="Responder e enviar opções selecionadas" title="Enviar opções selecionadas"><span>Responder</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></button></div>}
 <div className="po-answer-options">{question.opcoes?.map(op=><button type="button" key={op} className={`po-answer-option ${chosen.includes(op)||previous===op?'selected':''}`} onClick={()=>select(op)}>{op}</button>)}</div>
 {question.outro&&(chosen.includes('Outro')||chosen.includes('Outro.'))&&<input className="po-other-input" placeholder="Conte um pouco mais" value={other} onChange={e=>{setOther(e.target.value);setError('')}} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();question.tipo==='multipla'?submitMultiple():submitOther()}}} />}
 
 </>}
 {error&&<span className="po-answer-error" role="alert">{error}</span>}
 </div>
}
