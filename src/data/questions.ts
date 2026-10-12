export type Question = {id:string;texto:string;tipo:string;placeholder?:string;opcoes?:string[];outro?:boolean;condicional?:string};
export const questions:Question[] = [
  {
    "id": "Q01",
    "texto": "Primeiro, como posso te chamar?",
    "tipo": "aberta",
    "placeholder": "Seu primeiro nome"
  },
  {
    "id": "Q02",
    "texto": "E quantos anos você tem?",
    "tipo": "numero",
    "placeholder": "Digite sua idade"
  },
  {
    "id": "Q03",
    "texto": "E hoje, o que você faz?",
    "tipo": "unica",
    "opcoes": [
      "Estudo",
      "Trabalho",
      "Estou procurando emprego",
      "Outro"
    ],
    "outro": true
  },
  {
    "id": "Q04",
    "texto": "Pensando na sua rotina de verdade, quanto tempo você consegue dedicar ao inglês por dia?",
    "tipo": "unica",
    "opcoes": [
      "10–15 minutos",
      "15–30 minutos",
      "30–45 minutos",
      "45–60 minutos",
      "1–2 horas",
      "Mais de 2 horas"
    ]
  },
  {
    "id": "Q05",
    "texto": "E quantos dias por semana você consegue estudar inglês?",
    "tipo": "unica",
    "opcoes": [
      "1 dia",
      "2 dias",
      "3 dias",
      "4 dias",
      "5 dias",
      "6 dias",
      "7 dias"
    ]
  },
  {
    "id": "Q06",
    "texto": "Qual período do dia costuma funcionar melhor para você?",
    "tipo": "unica",
    "opcoes": [
      "Manhã",
      "Horário de almoço",
      "Tarde",
      "Noite",
      "Não tenho preferência",
      "Meus horários variam muito"
    ]
  },
  {
    "id": "Q07",
    "texto": "Agora me conta uma coisa: por que você quer aprender inglês?",
    "tipo": "multipla",
    "opcoes": [
      "Trabalho e carreira",
      "Estudos",
      "Viagens ou morar fora",
      "Fazer amigos e conhecer pessoas",
      "Filmes, séries, músicas e outros conteúdos",
      "Jogos",
      "Desenvolvimento pessoal"
    ]
  },
  {
    "id": "Q08",
    "texto": "Você já estudou inglês alguma vez?",
    "tipo": "unica",
    "opcoes": [
      "Nunca estudei inglês.",
      "Estudei por pouco tempo.",
      "Estudei por alguns anos.",
      "Estudei por vários anos.",
      "Ainda estudo inglês atualmente."
    ]
  },
  {
    "id": "Q09",
    "texto": "E onde você já estudou inglês?",
    "tipo": "multipla",
    "opcoes": [
      "Nunca estudei.",
      "Escola regular.",
      "Curso de inglês.",
      "Professor particular.",
      "Aplicativos.",
      "Internet / YouTube.",
      "Estudando sozinho(a).",
      "Morei ou estudei em outro país.",
      "Outro."
    ],
    "outro": true
  },
  {
    "id": "Q10",
    "texto": "Como você avalia o que aprendeu até hoje?",
    "tipo": "unica",
    "opcoes": [
      "Sei muito pouco e gostaria de começar praticamente do zero.",
      "Sei algumas coisas, mas me sinto inseguro(a).",
      "Sei várias coisas, mas sinto que meu conhecimento é desorganizado.",
      "Tenho uma boa base, mas ainda tenho dificuldades.",
      "Consigo usar inglês relativamente bem, mas quero evoluir.",
      "Já tenho bastante domínio e quero aprimorar pontos específicos."
    ]
  },
  {
    "id": "Q11",
    "texto": "Quando você estudou inglês anteriormente, por que parou?",
    "tipo": "multipla",
    "condicional": "parou",
    "opcoes": [
      "Falta de tempo.",
      "Falta de dinheiro.",
      "Perdi a motivação.",
      "Não estava vendo resultados.",
      "Não gostei do método.",
      "Terminei o curso.",
      "Mudei de rotina.",
      "Tive problemas pessoais."
    ]
  },
  {
    "id": "Q12",
    "texto": "Hoje, com que frequência você tem contato com o inglês?",
    "tipo": "unica",
    "opcoes": [
      "Quase nunca.",
      "Algumas vezes por mês.",
      "Algumas vezes por semana.",
      "Todos os dias."
    ]
  },
  {
    "id": "Q13",
    "texto": "Onde você normalmente encontra inglês no seu dia a dia?",
    "tipo": "multipla",
    "opcoes": [
      "Música.",
      "Filmes e séries.",
      "YouTube.",
      "Redes sociais.",
      "Jogos.",
      "Trabalho.",
      "Estudos.",
      "Livros e artigos.",
      "Conversas com estrangeiros.",
      "Viagens.",
      "Praticamente não tenho contato."
    ]
  },
  {
    "id": "Q14",
    "texto": "Você já viajou para algum país onde precisou usar inglês?",
    "tipo": "unica",
    "opcoes": [
      "Nunca viajei para outro país.",
      "Já viajei, mas não precisei usar inglês.",
      "Já usei inglês em situações muito simples.",
      "Já precisei usar inglês em várias situações.",
      "Já vivi uma experiência em que precisei usar inglês constantemente."
    ]
  },
  {
    "id": "Q15",
    "texto": "Você já teve uma conversa em inglês com outra pessoa?",
    "tipo": "unica",
    "opcoes": [
      "Nunca.",
      "Já tentei, mas tive muita dificuldade.",
      "Consigo conversar sobre assuntos simples.",
      "Consigo manter uma conversa relativamente bem.",
      "Consigo conversar normalmente sobre vários assuntos."
    ]
  },
  {
    "id": "Q16",
    "texto": "Quando você lê algo em inglês, quanto consegue entender?",
    "tipo": "unica",
    "opcoes": [
      "Não consigo entender.",
      "Entendo muito pouco.",
      "Entendo algumas coisas.",
      "Entendo a maior parte.",
      "Entendo praticamente tudo."
    ]
  },
  {
    "id": "Q17",
    "texto": "E quando alguém fala inglês, quanto você consegue entender?",
    "tipo": "unica",
    "opcoes": [
      "Quase nada.",
      "Entendo algumas palavras.",
      "Entendo se a pessoa falar devagar.",
      "Entendo conversas normalmente na maioria das situações.",
      "Consigo entender diferentes pessoas e velocidades."
    ]
  },
  {
    "id": "Q18",
    "texto": "E quando você precisa falar em inglês?",
    "tipo": "unica",
    "opcoes": [
      "Não consigo formar frases.",
      "Consigo falar palavras e frases muito simples.",
      "Consigo falar sobre assuntos básicos.",
      "Consigo manter uma conversa.",
      "Consigo me expressar com facilidade."
    ]
  },
  {
    "id": "Q19",
    "texto": "Quando você precisa escrever ou digitar em inglês, como se sente?",
    "tipo": "unica",
    "opcoes": [
      "Não consigo escrever frases.",
      "Consigo escrever frases muito simples.",
      "Consigo escrever pequenos textos.",
      "Consigo escrever textos com relativa facilidade.",
      "Consigo escrever textos com facilidade e clareza."
    ]
  },
  {
    "id": "Q20",
    "texto": "Como você avalia seu vocabulário em inglês? (Ou seja, quantas palavras você conhece e consegue usar.)",
    "tipo": "unica",
    "opcoes": [
      "Conheço muito poucas palavras.",
      "Conheço palavras básicas.",
      "Conheço bastante vocabulário, mas ainda esqueço muitas palavras.",
      "Tenho um vocabulário amplo.",
      "Consigo falar sobre praticamente qualquer assunto que conheço."
    ]
  },
  {
    "id": "Q21",
    "texto": "O que você gostaria de conseguir fazer em inglês?",
    "tipo": "multipla",
    "opcoes": [
      "Me apresentar e falar sobre mim.",
      "Conversar no dia a dia.",
      "Viajar sozinho(a).",
      "Fazer amizades com estrangeiros.",
      "Participar de reuniões.",
      "Trabalhar em inglês.",
      "Fazer apresentações.",
      "Assistir filmes e séries sem legenda.",
      "Entender músicas.",
      "Jogar em inglês.",
      "Ler livros e artigos.",
      "Escrever profissionalmente.",
      "Morar fora.",
      "Fazer uma prova ou certificação.",
      "Outro."
    ],
    "outro": true
  },
  {
    "id": "Q22",
    "texto": "Imagine que seu inglês esteja muito melhor daqui a 6 meses. O que você gostaria de conseguir fazer que hoje ainda não consegue?",
    "tipo": "aberta",
    "placeholder": "Conte pra gente..."
  },
  {
    "id": "Q23",
    "texto": "Para onde podemos enviar seu plano de estudo personalizado?",
    "tipo": "email",
    "placeholder": "seuemail@exemplo.com"
  },
  {
    "id": "Q24",
    "texto": "E qual número podemos usar para falar com você?",
    "tipo": "tel",
    "placeholder": "(41) 99999-9999"
  },
  {
    "id": "Q25",
    "texto": "Por último, qual é seu nome completo? Assim conseguimos identificar seu plano de estudos",
    "tipo": "nomeCompleto",
    "placeholder": "Nome e sobrenome"
  }
];
export const sections:Record<string,string> = {
  "Q01": "PROFILE",
  "Q02": "PROFILE",
  "Q03": "PROFILE",
  "Q04": "ROUTINE",
  "Q05": "ROUTINE",
  "Q06": "ROUTINE",
  "Q07": "MOTIVATION",
  "Q08": "HISTORY",
  "Q09": "HISTORY",
  "Q10": "HISTORY",
  "Q11": "HISTORY",
  "Q12": "EXPERIENCE",
  "Q13": "EXPERIENCE",
  "Q14": "EXPERIENCE",
  "Q15": "EXPERIENCE",
  "Q16": "SKILLS",
  "Q17": "SKILLS",
  "Q18": "SKILLS",
  "Q19": "SKILLS",
  "Q20": "SKILLS",
  "Q21": "GOALS",
  "Q22": "GOALS",
  "Q23": "CONTACT",
  "Q24": "CONTACT",
  "Q25": "CONTACT"
};
