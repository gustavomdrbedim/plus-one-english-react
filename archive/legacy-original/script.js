const perguntas = [
  {id:'Q01', texto:'Primeiro, como posso te chamar?', tipo:'aberta', placeholder:'Seu primeiro nome'},
  {id:'Q02', texto:'E quantos anos você tem?', tipo:'numero', placeholder:'Digite sua idade'},
  {id:'Q03', texto:'E hoje, o que você faz?', tipo:'unica', opcoes:['Estudo','Trabalho','Estou procurando emprego','Outro'], outro:true},
  {id:'Q04', texto:'Pensando na sua rotina de verdade, quanto tempo você consegue dedicar ao inglês por dia?', tipo:'unica', opcoes:['10–15 minutos','15–30 minutos','30–45 minutos','45–60 minutos','1–2 horas','Mais de 2 horas']},
  {id:'Q05', texto:'E quantos dias por semana você consegue estudar inglês?', tipo:'unica', opcoes:['1 dia','2 dias','3 dias','4 dias','5 dias','6 dias','7 dias']},
  {id:'Q06', texto:'Qual período do dia costuma funcionar melhor para você?', tipo:'unica', opcoes:['Manhã','Horário de almoço','Tarde','Noite','Não tenho preferência','Meus horários variam muito']},
  {id:'Q07', texto:'Agora me conta uma coisa: por que você quer aprender inglês?', tipo:'multipla', opcoes:['Trabalho e carreira','Estudos','Viagens ou morar fora','Fazer amigos e conhecer pessoas','Filmes, séries, músicas e outros conteúdos','Jogos','Desenvolvimento pessoal']},
  {id:'Q08', texto:'Você já estudou inglês alguma vez?', tipo:'unica', opcoes:['Nunca estudei inglês.','Estudei por pouco tempo.','Estudei por alguns anos.','Estudei por vários anos.','Ainda estudo inglês atualmente.']},
  {id:'Q09', texto:'E onde você já estudou inglês?', tipo:'multipla', opcoes:['Nunca estudei.','Escola regular.','Curso de inglês.','Professor particular.','Aplicativos.','Internet / YouTube.','Estudando sozinho(a).','Morei ou estudei em outro país.','Outro.'], outro:true},
  {id:'Q10', texto:'Como você avalia o que aprendeu até hoje?', tipo:'unica', opcoes:['Sei muito pouco e gostaria de começar praticamente do zero.','Sei algumas coisas, mas me sinto inseguro(a).','Sei várias coisas, mas sinto que meu conhecimento é desorganizado.','Tenho uma boa base, mas ainda tenho dificuldades.','Consigo usar inglês relativamente bem, mas quero evoluir.','Já tenho bastante domínio e quero aprimorar pontos específicos.']},
  {id:'Q11', texto:'Quando você estudou inglês anteriormente, por que parou?', tipo:'multipla', condicional:'parou', opcoes:['Falta de tempo.','Falta de dinheiro.','Perdi a motivação.','Não estava vendo resultados.','Não gostei do método.','Terminei o curso.','Mudei de rotina.','Tive problemas pessoais.']},
  {id:'Q12', texto:'Hoje, com que frequência você tem contato com o inglês?', tipo:'unica', opcoes:['Quase nunca.','Algumas vezes por mês.','Algumas vezes por semana.','Todos os dias.']},
  {id:'Q13', texto:'Onde você normalmente encontra inglês no seu dia a dia?', tipo:'multipla', opcoes:['Música.','Filmes e séries.','YouTube.','Redes sociais.','Jogos.','Trabalho.','Estudos.','Livros e artigos.','Conversas com estrangeiros.','Viagens.','Praticamente não tenho contato.']},
  {id:'Q14', texto:'Você já viajou para algum país onde precisou usar inglês?', tipo:'unica', opcoes:['Nunca viajei para outro país.','Já viajei, mas não precisei usar inglês.','Já usei inglês em situações muito simples.','Já precisei usar inglês em várias situações.','Já vivi uma experiência em que precisei usar inglês constantemente.']},
  {id:'Q15', texto:'Você já teve uma conversa em inglês com outra pessoa?', tipo:'unica', opcoes:['Nunca.','Já tentei, mas tive muita dificuldade.','Consigo conversar sobre assuntos simples.','Consigo manter uma conversa relativamente bem.','Consigo conversar normalmente sobre vários assuntos.']},
  {id:'Q16', texto:'Quando você lê algo em inglês, quanto consegue entender?', tipo:'unica', opcoes:['Não consigo entender.','Entendo muito pouco.','Entendo algumas coisas.','Entendo a maior parte.','Entendo praticamente tudo.']},
  {id:'Q17', texto:'E quando alguém fala inglês, quanto você consegue entender?', tipo:'unica', opcoes:['Quase nada.','Entendo algumas palavras.','Entendo se a pessoa falar devagar.','Entendo conversas normalmente na maioria das situações.','Consigo entender diferentes pessoas e velocidades.']},
  {id:'Q18', texto:'E quando você precisa falar em inglês?', tipo:'unica', opcoes:['Não consigo formar frases.','Consigo falar palavras e frases muito simples.','Consigo falar sobre assuntos básicos.','Consigo manter uma conversa.','Consigo me expressar com facilidade.']},
  {id:'Q19', texto:'Quando você precisa escrever ou digitar em inglês, como se sente?', tipo:'unica', opcoes:['Não consigo escrever frases.','Consigo escrever frases muito simples.','Consigo escrever pequenos textos.','Consigo escrever textos com relativa facilidade.','Consigo escrever textos com facilidade e clareza.']},
  {id:'Q20', texto:'Como você avalia seu vocabulário em inglês? (Ou seja, quantas palavras você conhece e consegue usar.)', tipo:'unica', opcoes:['Conheço muito poucas palavras.','Conheço palavras básicas.','Conheço bastante vocabulário, mas ainda esqueço muitas palavras.','Tenho um vocabulário amplo.','Consigo falar sobre praticamente qualquer assunto que conheço.']},
  {id:'Q21', texto:'O que você gostaria de conseguir fazer em inglês?', tipo:'multipla', opcoes:['Me apresentar e falar sobre mim.','Conversar no dia a dia.','Viajar sozinho(a).','Fazer amizades com estrangeiros.','Participar de reuniões.','Trabalhar em inglês.','Fazer apresentações.','Assistir filmes e séries sem legenda.','Entender músicas.','Jogar em inglês.','Ler livros e artigos.','Escrever profissionalmente.','Morar fora.','Fazer uma prova ou certificação.','Outro.'], outro:true},
  {id:'Q22', texto:'Imagine que seu inglês esteja muito melhor daqui a 6 meses. O que você gostaria de conseguir fazer que hoje ainda não consegue?', tipo:'aberta', placeholder:'Conte pra gente...'},
  {id:'Q23', texto:'Para onde podemos enviar seu plano de estudo personalizado?', tipo:'email', placeholder:'seuemail@exemplo.com'},
  {id:'Q24', texto:'E qual número podemos usar para falar com você?', tipo:'tel', placeholder:'(41) 99999-9999'},
  {id:'Q25', texto:'Por último, qual é seu nome completo? Assim conseguimos identificar seu plano de estudos', tipo:'nomeCompleto', placeholder:'Nome e sobrenome'}
];
const secoes={Q01:'PROFILE',Q02:'PROFILE',Q03:'PROFILE',Q04:'ROUTINE',Q05:'ROUTINE',Q06:'ROUTINE',Q07:'MOTIVATION',Q08:'HISTORY',Q09:'HISTORY',Q10:'HISTORY',Q11:'HISTORY',Q12:'EXPERIENCE',Q13:'EXPERIENCE',Q14:'EXPERIENCE',Q15:'EXPERIENCE',Q16:'SKILLS',Q17:'SKILLS',Q18:'SKILLS',Q19:'SKILLS',Q20:'SKILLS',Q21:'GOALS',Q22:'GOALS',Q23:'CONTACT',Q24:'CONTACT',Q25:'CONTACT'};
const STORAGE_KEY='plusOneEnglishProfileWebV2';
let atual=0,respostas={},iniciado=false;
const saved=localStorage.getItem(STORAGE_KEY);if(saved){try{respostas=JSON.parse(saved)||{};}catch(e){respostas={};}}
const home=document.getElementById('home'),homeStartBtn=document.getElementById('homeStartBtn'),homeStartLabel=document.getElementById('homeStartLabel'),homeTab=document.getElementById('homeTab'),diagnosticTab=document.getElementById('diagnosticTab'),diagnosticRail=document.getElementById('diagnosticRail'),progressWrap=document.getElementById('progressWrap'),topTitle=document.getElementById('topTitle'),qHistory=document.getElementById('chatHistory'),answerArea=document.getElementById('answerArea'),section=document.getElementById('sectionLabel'),progressText=document.getElementById('progressText'),railProgress=document.getElementById('railProgress'),railLabel=document.getElementById('railLabel'),bar=document.getElementById('progressBar'),map=document.getElementById('questionMap'),backBtn=document.getElementById('backBtn'),nextQuestionBtn=document.getElementById('nextQuestionBtn'),card=document.getElementById('questionCard'),finish=document.getElementById('finish'),saveHint=document.getElementById('saveHint');

const PLUS_ONE_CONFIG = {
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzkSnJb-zF9ssyaBBWqm54co6CoxywjcgxT-2HVxXZ1jEWJBCWjLPrwsNWLG7a9zf1h/exec',
  PLATFORM: 'web'
};
let envioConcluido=false;

// V14: identificadores persistentes, confirmação real por consulta JSONP e janela de 12 horas.
const PO_CLIENT_KEY='plusOneClientIdV14', PO_RECEIPT_KEY='plusOneReceiptV14', PO_PENDING_KEY='plusOnePendingV14';
function poId(prefix){return prefix+'-'+Date.now().toString(36).toUpperCase()+'-'+Math.random().toString(36).slice(2,11).toUpperCase();}
function poClientId(){let id=localStorage.getItem(PO_CLIENT_KEY);if(!id){id=poId('C');localStorage.setItem(PO_CLIENT_KEY,id);}return id;}
function poReceipt(){try{return JSON.parse(localStorage.getItem(PO_RECEIPT_KEY)||'null');}catch(e){return null;}}
function poCanRedo(){const r=poReceipt();return !!(r&&Date.now()<new Date(r.firstSubmittedAt).getTime()+12*3600000);}
function poResetAnswers(storageKey){localStorage.removeItem(storageKey);localStorage.removeItem(PO_PENDING_KEY);localStorage.removeItem('plusOneSubmissionId');envioConcluido=false;respostas={};}
function poCheckStatus(submissionId){return new Promise((resolve,reject)=>{const callback='poCallback_'+Math.random().toString(36).slice(2);const script=document.createElement('script');const timeout=setTimeout(()=>cleanup(new Error('Tempo esgotado ao verificar o recebimento.')),5000);function cleanup(err,data){clearTimeout(timeout);delete window[callback];script.remove();if(err)reject(err);else resolve(data);}window[callback]=data=>cleanup(null,data);script.onerror=()=>cleanup(new Error('Não foi possível verificar o recebimento.'));script.src=PLUS_ONE_CONFIG.APPS_SCRIPT_URL+'?action=status&submissionId='+encodeURIComponent(submissionId)+'&callback='+callback;document.head.appendChild(script);});}
async function poSendAndConfirm(){
  const pending=JSON.parse(localStorage.getItem(PO_PENDING_KEY)||'null');
  const submissionId=pending?.submissionId||poId('P');
  const payload=pending?.payload||{submissionId,clientId:poClientId(),platform:PLUS_ONE_CONFIG.PLATFORM,respostas:{...respostas}};
  localStorage.setItem(PO_PENDING_KEY,JSON.stringify({submissionId,payload}));
  // Primeiro consulta se uma tentativa anterior já foi recebida; repetir o POST é idempotente.
  let result=await poCheckStatus(submissionId).catch(()=>null);
  if(!result?.ok){
    await fetch(PLUS_ONE_CONFIG.APPS_SCRIPT_URL,{method:'POST',mode:'no-cors',redirect:'follow',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)});
    for(let attempt=0;attempt<9;attempt++){
      await new Promise(r=>setTimeout(r,[350,500,750,1000,1200,1500,1700,2000,2200][attempt]));
      result=await poCheckStatus(submissionId).catch(()=>null);
      if(result?.ok)break;
    }
  }
  if(!result?.ok)throw new Error(result?.error||'Seu perfil foi enviado, mas a confirmação automática ainda está pendente.');
  const receipt={studentId:result.studentId,firstSubmittedAt:result.firstSubmittedAt,submittedAt:result.submittedAt,version:result.version};
  localStorage.setItem(PO_RECEIPT_KEY,JSON.stringify(receipt));localStorage.removeItem(PO_PENDING_KEY);
  return receipt;
}

function persist(){localStorage.setItem(STORAGE_KEY,JSON.stringify(respostas));}
function hasProgress(){return Object.keys(respostas).length>0;}
function deveMostrar(p){if(p.condicional==='parou'){return ['Estudei por pouco tempo.','Estudei por alguns anos.','Estudei por vários anos.'].includes(respostas.Q08);}return true;}
function listaVisivel(){return perguntas.filter(deveMostrar);}
function total(){return listaVisivel().length;}
function atualIndex(){return listaVisivel().findIndex(p=>p.id===perguntas[atual].id);}
function formatNum(n){return String(n+1).padStart(2,'0');}
function showHome(){poCancelNext();home.classList.remove('hidden');card.classList.add('hidden');finish.classList.add('hidden');diagnosticRail.classList.add('hidden');progressWrap.classList.add('hidden');homeTab.classList.add('active');diagnosticTab.classList.remove('active');section.textContent='';topTitle.textContent='Welcome student!';railLabel.textContent='ETAPA';railProgress.textContent=hasProgress()?'Perfil em andamento':`Até ${total()} perguntas`;homeStartLabel.textContent=hasProgress()?'Continuar meu perfil':'Começar meu perfil';}
function startDiagnostic(){poCancelNext();iniciado=true;home.classList.add('hidden');finish.classList.add('hidden');card.classList.remove('hidden');diagnosticRail.classList.remove('hidden');progressWrap.classList.remove('hidden');homeTab.classList.remove('active');diagnosticTab.classList.add('active');topTitle.textContent='PROFILE';if(atual>=perguntas.length)atual=0;renderChat();}
function buildMap(){map.innerHTML='';perguntas.forEach((p,i)=>{if(!deveMostrar(p))return;const b=document.createElement('button');b.type='button';b.className='q-dot';b.textContent=formatNum([...listaVisivel()].findIndex(x=>x.id===p.id));b.title=`Ir para a pergunta ${b.textContent}`;b.onclick=()=>{if(i<=atual||respostas[p.id]!==undefined){atual=i;renderChat();}};map.appendChild(b);});}
function updateUI(){const vis=listaVisivel();const idx=vis.findIndex(p=>p.id===perguntas[atual].id);const pct=((idx+1)/vis.length)*100;progressText.textContent=`${formatNum(idx)} / ${vis.length}`;railProgress.textContent=`${formatNum(idx)} / ${vis.length}`;section.textContent='ENGLISH PROFILE';topTitle.textContent=secoes[perguntas[atual].id];bar.style.width=`${pct}%`;backBtn.disabled=idx===0;nextQuestionBtn.disabled=idx===vis.length-1;nextQuestionBtn.disabled=idx===vis.length-1||respostas[perguntas[atual].id]===undefined;map.querySelectorAll('.q-dot').forEach((b,j)=>{const p=vis[j];b.classList.toggle('current',p.id===perguntas[atual].id);b.classList.toggle('answered',respostas[p.id]!==undefined);});}
function esc(text){return String(text??'');}
function addBotMessage(container,text,number){const wrap=document.createElement('div');wrap.className='bubble-row bot-row';wrap.innerHTML=`<div class="bot-avatar"><img src="logo-mark-dark.svg" alt="Plus One" /></div><div><div class="bubble bot-bubble">${esc(text)}</div></div>`;container.appendChild(wrap);}
function addUserMessage(container,value){const values=Array.isArray(value)?value:[value];const wrap=document.createElement('div');wrap.className='bubble-row user-row';const bubble=document.createElement('div');bubble.className='bubble user-bubble';values.forEach(v=>{const line=document.createElement('div');line.textContent=esc(v);bubble.appendChild(line);});wrap.appendChild(bubble);container.appendChild(wrap);}
function renderHistory(){qHistory.innerHTML='';const vis=listaVisivel();const idx=vis.findIndex(p=>p.id===perguntas[atual].id);for(let i=0;i<idx;i++){const p=vis[i];addBotMessage(qHistory,p.texto,i);if(respostas[p.id]!==undefined)addUserMessage(qHistory,respostas[p.id]);}}
function makeInput(p){
  const input=document.createElement(p.tipo==='aberta'&&p.id!=='Q01'?'textarea':'input');
  input.className=p.tipo==='aberta'||p.tipo==='nomeCompleto'?'text-input':'number-input';
  if(p.tipo==='numero'){input.type='number';input.min='1';input.max='120';}
  else if(p.tipo==='email')input.type='email';
  else if(p.tipo==='tel')input.type='tel';
  input.placeholder=p.placeholder||'Escreva sua resposta...';
  if(input.tagName==='TEXTAREA')input.rows=1;
  if(p.id==='Q01'){input.maxLength=60;input.autocomplete='given-name';}
  if(p.tipo==='nomeCompleto'){input.maxLength=120;input.autocomplete='name';}
  if(respostas[p.id]!==undefined&&!Array.isArray(respostas[p.id]))input.value=respostas[p.id];
  const btn=document.createElement('button');btn.type='button';btn.className='po-send-button';
  btn.setAttribute('aria-label','Enviar resposta');btn.title='Enviar resposta';
  btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';
  const send=()=>{const v=input.value.trim();if(!v){input.focus();return;}
    if(p.tipo==='email'&&!/^\S+@\S+\.\S+$/.test(v)){input.focus();return;}
    if(p.tipo==='nomeCompleto'&&v.split(/\s+/).length<2){input.setCustomValidity('Informe seu nome e sobrenome');input.reportValidity();input.focus();return;}
    input.setCustomValidity('');
    respostas[p.id]=v;persist();next();};
  btn.onclick=send;
  input.addEventListener('input',()=>input.setCustomValidity(''));
  input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}});
  answerArea.classList.add('po-text-answer');answerArea.append(input,btn);
}
function addOutroField(p,box){const wrap=document.createElement('div');wrap.className='other-wrap';const input=document.createElement('input');input.className='text-input';input.placeholder='Conte um pouco mais...';wrap.appendChild(input);box.appendChild(wrap);return input;}
function renderAnswer(){const p=perguntas[atual];answerArea.innerHTML='';answerArea.classList.remove('po-text-answer');const helper=document.createElement('p');helper.className='answer-helper';helper.textContent=p.tipo==='multipla'?'Escolha uma ou mais opções.':'Escolha uma opção para continuar.';answerArea.appendChild(helper);if(['numero','aberta','email','tel','nomeCompleto'].includes(p.tipo)){makeInput(p);return;}let selecionadas=Array.isArray(respostas[p.id])?[...respostas[p.id]]:[];let outroInput=null;let continuar=null;p.opcoes.forEach(op=>{const b=document.createElement('button');b.type='button';b.className='option';b.textContent=op;if((p.tipo==='unica'&&respostas[p.id]===op)||selecionadas.includes(op))b.classList.add('selected');b.onclick=()=>{if(p.tipo==='unica'){respostas[p.id]=op;if(p.outro&&op==='Outro'){outroInput=outroInput||addOutroField(p,answerArea);continuar.disabled=true;return;}persist();next();return;}const i=selecionadas.indexOf(op);if(i>=0){selecionadas.splice(i,1);b.classList.remove('selected')}else{selecionadas.push(op);b.classList.add('selected')}if(p.outro&&op==='Outro'){if(selecionadas.includes('Outro'))outroInput=outroInput||addOutroField(p,answerArea);else if(outroInput){outroInput.parentElement.remove();outroInput=null;}}if(continuar)continuar.disabled=!selecionadas.length||(p.outro&&selecionadas.includes('Outro')&&!outroInput.value.trim());};answerArea.appendChild(b);});if(p.tipo==='multipla'){continuar=document.createElement('button');continuar.type='button';continuar.className='continue';continuar.innerHTML='Responder <svg class="po-inline-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7"/></svg>';continuar.disabled=!selecionadas.length;continuar.onclick=()=>{if(!selecionadas.length)return;if(p.outro&&selecionadas.includes('Outro')&&(!outroInput||!outroInput.value.trim()))return;let valor=[...selecionadas];if(outroInput&&outroInput.value.trim())valor=valor.map(v=>v==='Outro.'||v==='Outro'?`Outro: ${outroInput.value.trim()}`:v);respostas[p.id]=valor;persist();next();};answerArea.appendChild(continuar);if(outroInput)outroInput.addEventListener('input',()=>continuar.disabled=!selecionadas.length||(p.outro&&selecionadas.includes('Outro')&&!outroInput.value.trim()));}}
function renderChat(){poCancelNext();updateUI();renderHistory();const p=perguntas[atual];addBotMessage(qHistory,p.texto,listaVisivel().findIndex(x=>x.id===p.id));renderAnswer();qHistory.scrollTop=qHistory.scrollHeight;saveHint.textContent='Quer editar uma resposta? Use Anterior para voltar à pergunta';}
// V18 - ritmo de conversa no desktop; não interfere no envio do lead.
let poNextTimer=null;
function poTypingDesktop(){
  const wrap=document.createElement('div');
  wrap.className='bubble-row bot-row po-typing-row';
  const avatar=document.createElement('div');avatar.className='bot-avatar';avatar.innerHTML='<img src="logo-mark-dark.svg" alt="Plus One" />';
  const bubble=document.createElement('div');bubble.className='bubble bot-bubble po-typing-bubble';
  bubble.setAttribute('aria-label','Plus One está digitando');
  for(let i=0;i<3;i++){const dot=document.createElement('span');dot.className='po-typing-dot';bubble.appendChild(dot);}
  wrap.append(avatar,bubble);qHistory.appendChild(wrap);
  qHistory.scrollTop=qHistory.scrollHeight;
  return ()=>wrap.remove();
}
function poCancelNext(){
  if(poNextTimer!==null){clearTimeout(poNextTimer);poNextTimer=null;}
  qHistory.querySelectorAll('.po-typing-row').forEach(el=>el.remove());
  answerArea.classList.remove('po-waiting');
}
function next(){
  poCancelNext();
  const vis=listaVisivel();
  const idx=vis.findIndex(p=>p.id===perguntas[atual].id);
  if(idx<vis.length-1){
    const p=perguntas[atual];
    renderHistory();
    addBotMessage(qHistory,p.texto,idx);
    addUserMessage(qHistory,respostas[p.id]);
    answerArea.classList.add('po-waiting');
    const hide=poTypingDesktop();
    poNextTimer=setTimeout(()=>{
      poNextTimer=null;hide();answerArea.classList.remove('po-waiting');
      atual=perguntas.findIndex(q=>q.id===vis[idx+1].id);
      renderChat();
    },1000);
  }else{
    persist();poFinish();
  }
}
function back(){poCancelNext();const vis=listaVisivel();const idx=vis.findIndex(p=>p.id===perguntas[atual].id);if(idx>0){atual=perguntas.findIndex(p=>p.id===vis[idx-1].id);renderChat();}}
backBtn.onclick=back;nextQuestionBtn.onclick=()=>{const vis=listaVisivel(),idx=vis.findIndex(p=>p.id===perguntas[atual].id);if(idx<vis.length-1&&respostas[perguntas[atual].id]!==undefined){poCancelNext();atual=perguntas.findIndex(p=>p.id===vis[idx+1].id);renderChat();}};homeTab.onclick=showHome;diagnosticTab.onclick=startDiagnostic;homeStartBtn.onclick=startDiagnostic;document.getElementById('restartBtn').onclick=()=>poRestart(STORAGE_KEY);document.getElementById('retryBtn').onclick=poFinish;buildMap();showHome();
const toast=document.getElementById('toast');let toastTimer;document.querySelectorAll('[data-toast]').forEach(btn=>btn.addEventListener('click',()=>{toast.textContent=btn.dataset.toast||'Em breve.';toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2400);}));

async function poFinish(){
  card.classList.add('hidden');finish.classList.remove('hidden');progressWrap.classList.add('hidden');diagnosticRail.classList.add('hidden');
  const heading=finish.querySelector('h2'),desc=finish.querySelector('.po-finish-desc'),retry=document.getElementById('retryBtn'),restart=document.getElementById('restartBtn');
  heading.textContent='Enviando seu perfil...';desc.textContent='Aguarde enquanto confirmamos o recebimento.';retry.hidden=true;restart.hidden=true;
  try{const receipt=await poSendAndConfirm();heading.textContent='Seu perfil chegou até nós!';desc.textContent='Obrigado por confiar na Plus One. Nossa equipe vai analisar suas respostas e, em breve, entrar em contato para compartilhar seu material e plano de estudos.';restart.hidden=!poCanRedo();}
  catch(err){heading.textContent='Estamos verificando seu envio';desc.textContent='O envio foi solicitado, mas ainda não conseguimos confirmar o registro. Suas respostas continuam salvas neste dispositivo. Você pode verificar novamente sem criar um novo envio.';retry.textContent='Verificar recebimento novamente';retry.hidden=false;}
}
function poRestart(key){if(!poCanRedo())return;poResetAnswers(key);atual=0;buildMap();showHome();}
const poSavedReceipt=poReceipt();if(poSavedReceipt){finish.classList.remove('hidden');home.classList.add('hidden');finish.querySelector('h2').textContent='Seu perfil chegou até nós!';finish.querySelector('.po-finish-desc').textContent='Obrigado por confiar na Plus One. Em breve, nossa equipe entrará em contato para compartilhar seu material e plano de estudos.';document.getElementById('restartBtn').hidden=!poCanRedo();document.getElementById('retryBtn').hidden=true;}
