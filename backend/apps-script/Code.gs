/** Plus One V17 — substitui o Code.gs do deployment V2 após publicação de nova versão.
 * Não altere os IDs sem conferir as planilhas e permissões. */
const CONFIG = {
  MASTER_SHEET_ID: '1zlZTiud2lgP8gacRVwVAFDEfLlEnt-1ufVog0objgnU',
  MASTER_TAB_ID: 260485671,
  FOLDER_ID: '1uknu8Vh4s1upsXngCWiQ0eTo9sMQyVxS',
  WINDOW_MS: 12 * 60 * 60 * 1000
};
const QUESTIONS = [
'Primeiro, como posso te chamar?','E quantos anos você tem?','E hoje, o que você faz?',
'Pensando na sua rotina de verdade, quanto tempo você consegue dedicar ao inglês por dia?',
'E quantos dias por semana você consegue estudar inglês?','Qual período do dia costuma funcionar melhor para você?',
'Agora me conta uma coisa: por que você quer aprender inglês?','Você já estudou inglês alguma vez?',
'E onde você já estudou inglês?','Como você avalia o que aprendeu até hoje?',
'Quando você estudou inglês anteriormente, por que parou?','Hoje, com que frequência você tem contato com o inglês?',
'Onde você normalmente encontra inglês no seu dia a dia?','Você já viajou para algum país onde precisou usar inglês?',
'Você já teve uma conversa em inglês com outra pessoa?','Quando você lê algo em inglês, quanto consegue entender?',
'E quando alguém fala inglês, quanto você consegue entender?','E quando você precisa falar em inglês?',
'Quando você precisa escrever ou digitar em inglês, como se sente?','Como você avalia seu vocabulário em inglês?',
'O que você gostaria de conseguir fazer em inglês?',
'Imagine que seu inglês esteja muito melhor daqui a 6 meses. O que você gostaria de conseguir fazer que hoje ainda não consegue?',
'Para onde podemos enviar seu plano de estudo personalizado?','E qual número podemos usar para falar com você?'
];
const META=['submissionId','submittedAt','studentId','nome','email','whatsapp','platform','perfilUrl','clientId','version','isLatest','firstSubmittedAt'];
const HEADERS=META.concat(QUESTIONS.map((_,i)=>'Q'+String(i+1).padStart(2,'0')));
function getMasterTab_(){const tab=SpreadsheetApp.openById(CONFIG.MASTER_SHEET_ID).getSheetById(CONFIG.MASTER_TAB_ID);if(!tab)throw Error('Aba V14 não encontrada. Confira MASTER_TAB_ID.');return tab;}
function out_(data,callback){const json=JSON.stringify(data);if(callback){if(!/^poCallback_[a-z0-9]+$/i.test(callback))throw Error('Callback inválido');return ContentService.createTextOutput(callback+'('+json+');').setMimeType(ContentService.MimeType.JAVASCRIPT);}return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);}
function doGet(e){try{const p=(e&&e.parameter)||{};if(p.action!=='status')return out_({ok:true,service:'Plus One V17'},p.callback);const id=String(p.submissionId||'');if(!/^[A-Za-z0-9-]{8,90}$/.test(id))return out_({ok:false,error:'ID inválido'},p.callback);const sh=getMasterTab_();const rows=sh.getDataRange().getValues();const col=rows[0]||[];const index=col.indexOf('submissionId');if(index<0)return out_({ok:false,pending:true},p.callback);const found=rows.slice(1).find(r=>String(r[index])===id);if(!found)return out_({ok:false,pending:true},p.callback);const value=k=>found[col.indexOf(k)];return out_({ok:true,studentId:String(value('studentId')),version:Number(value('version')),submittedAt:new Date(value('submittedAt')).toISOString(),firstSubmittedAt:new Date(value('firstSubmittedAt')).toISOString()},p.callback);}catch(err){console.error(err);return out_({ok:false,error:'Erro ao consultar o registro.'},e&&e.parameter&&e.parameter.callback);}}
function safe_(v){const str=String(v==null?'':v);return /^[=+\-@\t\r]/.test(str)?"'"+str:str;}
function format_(v){return Array.isArray(v)?v.join(' | '):String(v==null?'':v);}
function doPost(e){const lock=LockService.getScriptLock();try{lock.waitLock(25000);const p=JSON.parse(e.postData.contents);const id=String(p.submissionId||'').trim(),client=String(p.clientId||'').trim(),r=p.respostas||{};
if(!/^[A-Za-z0-9-]{8,90}$/.test(id)||!/^[A-Za-z0-9-]{8,90}$/.test(client))throw Error('Identificadores inválidos');
if(!r.Q01||!r.Q23||!r.Q24)throw Error('Dados obrigatórios ausentes');
const sh=getMasterTab_();if(sh.getLastRow()===0)sh.appendRow(HEADERS);
const head=sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0];if(HEADERS.some((h,i)=>head[i]!==h))throw Error('Cabeçalho incompatível com V14. Use uma aba nova para a V14, ou migre a base com segurança.');
const rows=sh.getLastRow()>1?sh.getRange(2,1,sh.getLastRow()-1,HEADERS.length).getValues():[];
const existing=rows.find(row=>String(row[0])===id);if(existing)return out_({ok:true,duplicate:true,studentId:existing[2]});
const related=rows.map((row,i)=>({row,n:i+2})).filter(x=>String(x.row[8])===client);
const now=new Date(),first=related.length?new Date(related[0].row[11]):now;
if(related.length&&now.getTime()-first.getTime()>CONFIG.WINDOW_MS)throw Error('A janela de 12 horas para refazer o diagnóstico terminou.');
const studentId=related.length?String(related[0].row[2]):'PO-'+Utilities.getUuid().slice(0,12).toUpperCase();const version=related.length+1;
const nome=String(r.Q01).trim(),email=String(r.Q23).trim(),phone=String(r.Q24).trim();
const file=SpreadsheetApp.create('Perfil - '+nome.replace(/[\\/:*?"<>|]/g,' ').slice(0,60)+' - '+studentId+' - V'+version);
const profile=file.getSheets()[0];profile.setName('Perfil');
const lines=[['PLUS ONE — ENGLISH PROFILE',''],['ID do aluno',studentId],['Submission ID',id],['Versão',version],['Nome',nome],['E-mail',email],['WhatsApp',phone],['Data do diagnóstico',now],['Plataforma',p.platform||'web'],['',''],['Pergunta','Resposta']];
QUESTIONS.forEach((q,i)=>lines.push(['Q'+String(i+1).padStart(2,'0')+' — '+q,format_(r['Q'+String(i+1).padStart(2,'0')])]));
profile.getRange(1,1,lines.length,2).setValues(lines.map(row=>row.map(safe_)));profile.getRange('A1:B1').merge();profile.getRange('A1').setFontWeight('bold').setFontSize(16);profile.getRange('A11:B11').setFontWeight('bold');profile.setColumnWidth(1,520);profile.setColumnWidth(2,420);profile.getRange(1,1,lines.length,2).setWrap(true);
DriveApp.getFileById(file.getId()).moveTo(DriveApp.getFolderById(CONFIG.FOLDER_ID));
const record=[id,now,studentId,nome,email,phone,p.platform||'web',file.getUrl(),client,version,true,first].concat(QUESTIONS.map((_,i)=>format_(r['Q'+String(i+1).padStart(2,'0')])));
sh.appendRow(record.map((v,i)=>v instanceof Date?v:safe_(v)));
related.forEach(x=>sh.getRange(x.n,11).setValue(false));
return out_({ok:true,studentId,version});
}catch(err){console.error('Plus One V17: '+err.stack);return out_({ok:false,error:err.message});}finally{try{lock.releaseLock();}catch(e){}}}
