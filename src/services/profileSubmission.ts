// Protocolo preservado da versão aprovada: POST idempotente e confirmação JSONP.
const URL='https://script.google.com/macros/s/AKfycbzkSnJb-zF9ssyaBBWqm54co6CoxywjcgxT-2HVxXZ1jEWJBCWjLPrwsNWLG7a9zf1h/exec';
const CLIENT='plusOneClientIdV14',RECEIPT='plusOneReceiptV14',PENDING='plusOnePendingV14';
export const ANSWERS_KEY='plusOneEnglishProfileWebV2';
export type Answers=Record<string,string|string[]>;
type Receipt={studentId?:string;firstSubmittedAt:string;submittedAt?:string;version?:string};
function id(prefix:string){return prefix+'-'+Date.now().toString(36).toUpperCase()+'-'+Math.random().toString(36).slice(2,11).toUpperCase()}
function clientId(){let result=localStorage.getItem(CLIENT);if(!result){result=id('C');localStorage.setItem(CLIENT,result)}return result}
export function receipt():Receipt|null{try{return JSON.parse(localStorage.getItem(RECEIPT)||'null')}catch{return null}}
export function canRedo(){const r=receipt();return !!(r&&Date.now()<new Date(r.firstSubmittedAt).getTime()+12*3600000)}
export function clearAnswers(){localStorage.removeItem(ANSWERS_KEY);localStorage.removeItem(PENDING);localStorage.removeItem('plusOneSubmissionId')}
function checkStatus(submissionId:string):Promise<any>{return new Promise((resolve,reject)=>{
 const cb='poCallback_'+Math.random().toString(36).slice(2),script=document.createElement('script');
 const timer=window.setTimeout(()=>cleanup(new Error('Tempo esgotado')),5000);
 const w=window as unknown as Record<string,unknown>;
 function cleanup(err?:Error,data?:unknown){clearTimeout(timer);delete w[cb];script.remove();if(err)reject(err);else resolve(data)}
 w[cb]=(data:unknown)=>cleanup(undefined,data);
 script.onerror=()=>cleanup(new Error('Não foi possível verificar o recebimento'));
 script.src=URL+'?action=status&submissionId='+encodeURIComponent(submissionId)+'&callback='+cb;
 document.head.appendChild(script);
})}
export async function submitProfile(answers:Answers):Promise<Receipt>{
 const pending=JSON.parse(localStorage.getItem(PENDING)||'null');
 const submissionId:string=pending?.submissionId||id('P');
 const payload=pending?.payload||{submissionId,clientId:clientId(),platform:'web',respostas:{...answers}};
 localStorage.setItem(PENDING,JSON.stringify({submissionId,payload}));
 let result=await checkStatus(submissionId).catch(()=>null);
 if(!result?.ok){
  await fetch(URL,{method:'POST',mode:'no-cors',redirect:'follow',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)});
  for(const delay of [350,500,750,1000,1200,1500,1700,2000,2200]){
   await new Promise(r=>setTimeout(r,delay));result=await checkStatus(submissionId).catch(()=>null);if(result?.ok)break;
  }
 }
 if(!result?.ok)throw new Error(result?.error||'Confirmação automática pendente');
 const value:Receipt={studentId:result.studentId,firstSubmittedAt:result.firstSubmittedAt,submittedAt:result.submittedAt,version:result.version};
 localStorage.setItem(RECEIPT,JSON.stringify(value));localStorage.removeItem(PENDING);return value;
}
