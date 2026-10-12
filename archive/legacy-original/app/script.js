const perguntas = [
  {id:'Q01', texto:'Primeiro, como posso te chamar?', tipo:'aberta', placeholder:'Digite seu nome'},
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
  {id:'Q24', texto:'E qual número podemos usar para falar com você?', tipo:'tel', placeholder:'(41) 99999-9999'}
];

const secoes={Q01:'PROFILE',Q02:'PROFILE',Q03:'PROFILE',Q04:'ROUTINE',Q05:'ROUTINE',Q06:'ROUTINE',Q07:'MOTIVATION',Q08:'HISTORY',Q09:'HISTORY',Q10:'HISTORY',Q11:'HISTORY',Q12:'EXPERIENCE',Q13:'EXPERIENCE',Q14:'EXPERIENCE',Q15:'EXPERIENCE',Q16:'SKILLS',Q17:'SKILLS',Q18:'SKILLS',Q19:'SKILLS',Q20:'SKILLS',Q21:'GOALS',Q22:'GOALS',Q23:'CONTACT',Q24:'CONTACT'};
let atual=0;

const PLUS_ONE_CONFIG = {
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzkSnJb-zF9ssyaBBWqm54co6CoxywjcgxT-2HVxXZ1jEWJBCWjLPrwsNWLG7a9zf1h/exec',
  PLATFORM: 'app'
};
const APP_STORAGE_KEY = 'plusOneEnglishProfileAppV1';
let envioConcluido=false;
let respostas={};
const appSaved=localStorage.getItem(APP_STORAGE_KEY);if(appSaved){try{respostas=JSON.parse(appSaved)||{};}catch(e){respostas={};}}
function persist(){localStorage.setItem(APP_STORAGE_KEY,JSON.stringify(respostas));}

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
    for(let attempt=0;attempt<5;attempt++){
      await new Promise(r=>setTimeout(r,[250,400,650,1000,1500][attempt]));
      result=await poCheckStatus(submissionId).catch(()=>null);
      if(result?.ok||(result?.error&&!result?.pending))break;
    }
  }
  if(!result?.ok)throw new Error(result?.error||'Seu perfil foi enviado, mas a confirmação automática ainda está pendente.');
  const receipt={studentId:result.studentId,firstSubmittedAt:result.firstSubmittedAt,submittedAt:result.submittedAt,version:result.version};
  localStorage.setItem(PO_RECEIPT_KEY,JSON.stringify(receipt));localStorage.removeItem(PO_PENDING_KEY);
  return receipt;
}

const intro=document.getElementById('intro'),chat=document.getElementById('chat'),area=document.getElementById('answerArea'),finish=document.getElementById('finish'),progress=document.getElementById('progress'),sectionLabel=document.getElementById('sectionLabel');

function deveMostrar(p){
  if(p.condicional==='parou'){
    const h=respostas.Q08;
    return ['Estudei por pouco tempo.','Estudei por alguns anos.','Estudei por vários anos.'].includes(h);
  }
  return true;
}
function proxima(){ let i=atual+1; while(i<perguntas.length && !deveMostrar(perguntas[i])) i++; return i; }
function anterior(){ let i=atual-1; while(i>=0 && !deveMostrar(perguntas[i])) i--; return i; }
function totalVisivel(){ return perguntas.filter(deveMostrar).length; }
function posicaoAtual(){ return perguntas.slice(0,atual+1).filter(deveMostrar).length; }
function atualizar(){ const total=totalVisivel(); progress.textContent=atual<perguntas.length?`${String(posicaoAtual()).padStart(2,'0')} / ${total}`:'DONE'; sectionLabel.textContent=atual<perguntas.length?secoes[perguntas[atual].id]:'FINISHED'; progress.disabled=!perguntas.some(p=>temResposta(p.id)); }
function msg(text,tipo){const w=document.createElement('div');w.className=`message-wrap ${tipo}`;if(tipo==='bot'){const m=document.createElement('div');m.className='bot-mark';m.innerHTML='<img src="logo-mark-dark.svg" alt="Plus One" />';w.appendChild(m)}const b=document.createElement('div');b.className='message';b.textContent=text;w.appendChild(b);chat.appendChild(w);setTimeout(()=>chat.scrollTo({top:chat.scrollHeight,behavior:'smooth'}),30)}
async function finalizar(){
  area.innerHTML='';area.style.display='none';chat.classList.add('hidden');finish.classList.remove('hidden');atual=perguntas.length;atualizar();persist();
  const heading=finish.querySelector('h2'),desc=finish.querySelector('.po-finish-desc'),retry=document.getElementById('retryBtn'),restart=document.getElementById('restartBtn');
  heading.textContent='Enviando seu perfil...';desc.textContent='Aguarde enquanto confirmamos o recebimento.';retry.hidden=true;restart.hidden=true;
  try{await poSendAndConfirm();heading.textContent='Seu perfil chegou até nós!';desc.textContent='Obrigado por confiar na Plus One. Nossa equipe vai analisar suas respostas e, em breve, entrar em contato para compartilhar seu material e plano de estudos.';restart.hidden=!poCanRedo();}
  catch(err){heading.textContent='Estamos verificando seu envio';desc.textContent='O envio foi solicitado, mas ainda não conseguimos confirmar o registro. Suas respostas continuam salvas neste dispositivo. Você pode verificar novamente sem criar um novo envio.';retry.textContent='Verificar recebimento novamente';retry.hidden=false;}
}

function poTyping(){
  const w=document.createElement('div');w.className='message-wrap bot typing';
  const mark=document.createElement('div');mark.className='bot-mark';mark.innerHTML='<img src="logo-mark-dark.svg" alt="Plus One" />';
  const bubble=document.createElement('div');bubble.className='message';bubble.setAttribute('aria-label','Digitando');
  for(let i=0;i<3;i++){const dot=document.createElement('span');dot.className='typing-dot';bubble.appendChild(dot);}
  w.append(mark,bubble);chat.appendChild(w);chat.scrollTop=chat.scrollHeight;return ()=>w.remove();
}
function responder(text){
  msg(text,'user');const n=proxima();if(n>=perguntas.length){setTimeout(finalizar,160);return;}
  atual=n;area.innerHTML='';const hide=poTyping();setTimeout(()=>{hide();mostrar();},650);
}
function outroCampo(p, selecionadas, continuar){ const wrap=document.createElement('div');wrap.className='other-wrap'; const input=document.createElement('input');input.className='text-input';input.placeholder='Conte um pouco mais...'; wrap.appendChild(input); area.appendChild(wrap); return input; }
function mostrar(){
  const p=perguntas[atual]; area.innerHTML=''; area.scrollTop=0; atualizar(); msg(p.texto,'bot');
  if(p.tipo==='numero'||p.tipo==='aberta'||p.tipo==='email'||p.tipo==='tel'){
    const tag=p.tipo==='aberta'?'textarea':'input'; const input=document.createElement(tag); input.className=p.tipo==='aberta'?'text-input':'number-input';
    if(p.tipo==='numero'){input.type='number';input.min='1';input.max='120';} else if(p.tipo==='email') input.type='email'; else if(p.tipo==='tel') input.type='tel';
    input.placeholder=p.placeholder||'Escreva sua resposta...'; if(tag==='textarea') input.rows=4;
    const btn=document.createElement('button');btn.className='continue po-send';btn.textContent='➤';btn.setAttribute('aria-label','Enviar resposta');
    btn.onclick=()=>{const v=input.value.trim();if(!v)return;respostas[p.id]=v;persist();responder(v)}; const composer=document.createElement('div');composer.className='po-composer';composer.append(input,btn);area.append(composer);if(respostas[p.id]!=null)input.value=String(respostas[p.id]);return;
  }
  const selecionadas=Array.isArray(respostas[p.id])?[...respostas[p.id]]:[]; let outroInput=null; let continuar=null;
  if(p.tipo==='multipla'){const t=document.createElement('div');t.className='answer-title';t.textContent='Você pode escolher mais de uma opção';area.appendChild(t)}
  p.opcoes.forEach(op=>{const b=document.createElement('button');b.className='option';b.textContent=op; if((p.tipo==='unica'&&(respostas[p.id]===op||(op==='Outro'&&String(respostas[p.id]||'').startsWith('Outro:'))))||selecionadas.includes(op))b.classList.add('selected'); b.onclick=()=>{
    if(p.tipo==='unica'){
      respostas[p.id]=op;persist();
      if(p.outro && op==='Outro'){ if(!outroInput) outroInput=outroCampo(p,selecionadas,continuar); continuar.disabled=true; return; }
      responder(op); return;
    }
    const i=selecionadas.indexOf(op); if(i>=0){selecionadas.splice(i,1);b.classList.remove('selected')} else {selecionadas.push(op);b.classList.add('selected')}
    if(p.outro && op==='Outro'){ if(selecionadas.includes('Outro')) outroInput=outroInput||outroCampo(p,selecionadas,continuar); else if(outroInput){outroInput.parentElement.remove();outroInput=null;} }
    continuar.disabled=!selecionadas.length || (p.outro&&selecionadas.includes('Outro')&&!outroInput.value.trim());
  }; area.appendChild(b)});
  if(p.tipo==='multipla'){continuar=document.createElement('button');continuar.className='continue po-send';continuar.textContent='➤';continuar.setAttribute('aria-label','Enviar respostas selecionadas');continuar.disabled=!selecionadas.length;continuar.onclick=()=>{if(p.outro&&selecionadas.includes('Outro')&&(!outroInput||!outroInput.value.trim()))return;let valor=[...selecionadas];if(outroInput&&outroInput.value.trim())valor=valor.map(v=>v==='Outro'?`Outro: ${outroInput.value.trim()}`:v);respostas[p.id]=valor;persist();responder(valor.join(' • '))};const composer=document.createElement('div');composer.className='po-composer po-composer-options';composer.appendChild(continuar);area.insertBefore(composer,area.firstChild);if(outroInput)outroInput.addEventListener('input',()=>continuar.disabled=!selecionadas.length||(p.outro&&selecionadas.includes('Outro')&&!outroInput.value.trim()));}
}

// V15: navegação entre perguntas já respondidas, sem abrir perguntas futuras.
const drawer=document.getElementById('questionDrawer');
function temResposta(id){const v=respostas[id];return Array.isArray(v)?v.length>0:typeof v==='string'?v.trim().length>0:v!=null;}
function abrirDrawer(){
  const list=document.getElementById('answeredQuestions');list.replaceChildren();
  perguntas.forEach((p,i)=>{if(!temResposta(p.id)||!deveMostrar(p))return;
    const b=document.createElement('button');b.type='button';b.className='answered-item';
    const n=document.createElement('strong');n.textContent=String(i+1).padStart(2,'0');
    const body=document.createElement('span');const title=document.createElement('span');title.textContent=p.texto;
    const answer=document.createElement('small');answer.textContent=Array.isArray(respostas[p.id])?respostas[p.id].join(' • '):String(respostas[p.id]);
    body.append(title,answer);b.append(n,body);b.onclick=()=>{fecharDrawer();intro.classList.add('hidden');finish.classList.add('hidden');chat.classList.remove('hidden');chat.style.display='block';area.style.display='flex';chat.replaceChildren();atual=i;mostrar();};list.appendChild(b);
  });
  if(!list.children.length)return;drawer.classList.remove('hidden');
}
function fecharDrawer(){drawer.classList.add('hidden');}
progress.onclick=abrirDrawer;
document.getElementById('drawerClose').onclick=fecharDrawer;
document.getElementById('drawerBackdrop').onclick=fecharDrawer;
document.addEventListener('keydown',e=>{if(e.key==='Escape')fecharDrawer();});
document.getElementById('startBtn').onclick=()=>{intro.classList.add('hidden');chat.style.display='block';area.style.display='block';msg('Olá, futuro aluno da Plus One! 👋','bot');setTimeout(()=>msg('Ficamos muito felizes que você decidiu dar esse próximo passo no inglês. Quero conhecer um pouco mais sobre você para preparar algo que realmente combine com a sua rotina.','bot'),450);setTimeout(mostrar,950)};
document.getElementById('restartBtn').onclick=()=>{if(!poCanRedo())return;poResetAnswers(APP_STORAGE_KEY);location.reload();};
document.getElementById('retryBtn').onclick=finalizar;
if(poReceipt()){intro.classList.add('hidden');finish.classList.remove('hidden');finish.querySelector('h2').textContent='Seu perfil chegou até nós!';finish.querySelector('.po-finish-desc').textContent='Obrigado por confiar na Plus One. Em breve, nossa equipe entrará em contato para compartilhar seu material e plano de estudos.';document.getElementById('restartBtn').hidden=!poCanRedo();document.getElementById('retryBtn').hidden=true;}

