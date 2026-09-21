import { Question, PracticalStep } from '../types';

export const PROJECT_METADATA = {
  name: 'VIBEELL',
  subtitle: 'Campainha Acessível com Pulseira Vibratória para Deficientes Auditivos',
  institution: 'ETERJ - Escola Técnica do Rio de Janeiro',
  event: 'XL Feira de Ciências e de Informação Profissional',
  classGroup: 'Turma: 1121',
  advisor: 'Professora Orientadora: Tacila Vanessa',
  teamMembers: [
    'Cauã Garcia',
    'Cauã Valentim',
    'Daniel Alves',
    'Daniel Silva',
    'Davi Silva',
    'Marlon Dias',
    'Pedro Henrique',
    'Pedro Luka',
  ],
  introduction:
    'O VIBEELL transforma o sinal sonoro de uma campainha em vibrações na pulseira para que pessoas com deficiência auditiva saibam quando alguém toca a campainha.',
};

export const PRACTICAL_STEPS: PracticalStep[] = [
  {
    stepNumber: 1,
    title: 'Alimentação e Recarga',
    component: 'Bateria Li-Po + Módulo TP4056 USB-C',
    description: 'A bateria de lítio alimenta a pulseira e é recarregada pelo cabo USB-C do celular.',
    technicalNote: 'O módulo TP4056 evita que a bateria sofra sobrecarga.',
  },
  {
    stepNumber: 2,
    title: 'Acionamento da Campainha',
    component: 'Botão de Campainha (Push Button)',
    description: 'O visitante aperta o botão na entrada da casa e o microcontrolador detecta o toque.',
    technicalNote: 'O botão envia sinal elétrico simples para a placa da campainha.',
  },
  {
    stepNumber: 3,
    title: 'Envio Sem Fio',
    component: 'Placas Wi-Fi (ESP32)',
    description: 'A campainha envia uma mensagem sem fio pelo ar até a pulseira.',
    technicalNote: 'Se a internet cair, a placa cria a rede com o nome "Vibeell".',
  },
  {
    stepNumber: 4,
    title: 'Vibração na Pulseira',
    component: 'Transistor + Motor Vibratório',
    description: 'A placa aciona o transistor, que liga o motor para tremer no braço da pessoa.',
    technicalNote: 'O transistor serve como um interruptor liga/desliga para o motor.',
  },
];

export const QUIZ_QUESTIONS: Question[] = [
  // 1
  {
    id: 1,
    category: 'Acessibilidade',
    question: 'Qual é o objetivo principal do projeto VIBEELL?',
    options: [
      { id: 'A', text: 'Avisar pessoas com deficiência auditiva que alguém tocou a campainha através da vibração de uma pulseira.' },
      { id: 'B', text: 'Tocar uma música muito alta para acordar os vizinhos.' },
      { id: 'C', text: 'Abrir o portão de casa automaticamente usando a voz.' },
      { id: 'D', text: 'Tirar fotos automáticas de quem passa na rua.' },
    ],
    correctAnswer: 'A',
    explanation: 'O VIBEELL foi criado para que deficientes auditivos sintam no pulso quando alguém toca a campainha.',
    technicalTip: 'Acessibilidade por vibração no pulso.',
  },
  // 2
  {
    id: 2,
    category: 'Lógica de Acionamento',
    question: 'Como a pessoa percebe que tem alguém chamando no portão?',
    options: [
      { id: 'A', text: 'Pela vibração da pulseira no seu braço.' },
      { id: 'B', text: 'Pelo som estridente de uma buzina.' },
      { id: 'C', text: 'Recebendo uma carta pelos correios.' },
      { id: 'D', text: 'Por uma fumaça colorida que sai da pulseira.' },
    ],
    correctAnswer: 'A',
    explanation: 'A pulseira vibra como o vibracall de um celular avisando na hora quem está usando.',
    technicalTip: 'Alerta tátil por vibração.',
  },
  // 3
  {
    id: 3,
    category: 'Eletrônica e Hardware',
    question: 'Qual componente da pulseira faz ela tremer (vibrar) no braço?',
    options: [
      { id: 'A', text: 'Motor vibratório (Vibracall).' },
      { id: 'B', text: 'Uma lâmpada incandescente.' },
      { id: 'C', text: 'Um alto-falante potente.' },
      { id: 'D', text: 'Uma ventoinha de computador.' },
    ],
    correctAnswer: 'A',
    explanation: 'O motor vibracall é o mesmo tipo de pecinha que faz os celulares vibrarem.',
    technicalTip: 'Motor Vibracall gera o tremor.',
  },
  // 4
  {
    id: 4,
    category: 'Eletrônica e Hardware',
    question: 'Onde o visitante aperta para tocar a campainha?',
    options: [
      { id: 'A', text: 'No botão (Push Button) instalado na entrada ou portão da casa.' },
      { id: 'B', text: 'Na tela do micro-ondas da cozinha.' },
      { id: 'C', text: 'Diretamente na pulseira que está no braço do morador.' },
      { id: 'D', text: 'No roteador de internet da sala.' },
    ],
    correctAnswer: 'A',
    explanation: 'O botão de campainha fica na porta ou portão para o visitante apertar com o dedo.',
    technicalTip: 'Botão de entrada (Push Button).',
  },
  // 5
  {
    id: 5,
    category: 'Conectividade Wi-Fi',
    question: 'Como a campainha da porta avisa a pulseira sem usar nenhum fio atravessando a casa?',
    options: [
      { id: 'A', text: 'Usando comunicação sem fio (Wi-Fi).' },
      { id: 'B', text: 'Por um cano de água embaixo do piso.' },
      { id: 'C', text: 'Com um barbante amarrado na maçaneta.' },
      { id: 'D', text: 'Por um espelho refletindo a luz do sol.' },
    ],
    correctAnswer: 'A',
    explanation: 'O sinal viaja pelo ar através de ondas de rádio Wi-Fi entre as duas placas.',
    technicalTip: 'Comunicação sem fio Wi-Fi.',
  },
  // 6
  {
    id: 6,
    category: 'Eletrônica e Hardware',
    question: 'Qual peça fornece energia portátil para a pulseira funcionar fora da tomada?',
    options: [
      { id: 'A', text: 'Uma bateria recarregável de lítio (Li-Po).' },
      { id: 'B', text: 'Uma usina geradora de gasolina.' },
      { id: 'C', text: 'Um cabo ligado direto no poste da rua.' },
      { id: 'D', text: 'Uma pilha gigante de caminhão de 24V.' },
    ],
    correctAnswer: 'A',
    explanation: 'A bateria de lítio é pequena, leve e recarregável, perfeita para usar no pulso.',
    technicalTip: 'Bateria Li-Po pequena e recarregável.',
  },
  // 7
  {
    id: 7,
    category: 'Eletrônica e Hardware',
    question: 'Como o usuário recarrega a bateria da pulseira quando ela fica fraca?',
    options: [
      { id: 'A', text: 'Conectando um cabo USB-C (igual ao carregador de celular comum).' },
      { id: 'B', text: 'Colocando a pulseira no forno quente.' },
      { id: 'C', text: 'Jogando a pulseira dentro da água com sal.' },
      { id: 'D', text: 'Trocando a pulseira inteira por uma nova descartável.' },
    ],
    correctAnswer: 'A',
    explanation: 'A pulseira tem entrada USB-C compatível com qualquer carregador moderno de celular.',
    technicalTip: 'Conector USB-C para recarga prática.',
  },
  // 8
  {
    id: 8,
    category: 'Eletrônica e Hardware',
    question: 'Qual placa inteligente funciona como o "cérebro" na pulseira?',
    options: [
      { id: 'A', text: 'A plaquinha ESP32-C3, que é bem pequena e tem Wi-Fi.' },
      { id: 'B', text: 'Um computador de mesa com monitor e teclado.' },
      { id: 'C', text: 'Um rádio relógio de cabeceira.' },
      { id: 'D', text: 'Uma calculadora comum de pilha.' },
    ],
    correctAnswer: 'A',
    explanation: 'O ESP32-C3 é um chip bem pequeno com antena que recebe a ordem de vibrar.',
    technicalTip: 'ESP32-C3: compacto para pulseira.',
  },
  // 9
  {
    id: 9,
    category: 'Eletrônica e Hardware',
    question: 'Para que serve o transistor no circuito da pulseira?',
    options: [
      { id: 'A', text: 'Funciona como um interruptor que liga e desliga o motor vibratório com segurança.' },
      { id: 'B', text: 'Serve para tocar rádio FM com música.' },
      { id: 'C', text: 'Serve para deixar a pulseira com uma cor diferente.' },
      { id: 'D', text: 'Serve para esfriar o braço da pessoa no calor.' },
    ],
    correctAnswer: 'A',
    explanation: 'O transistor recebe a ordem da plaquinha e deixa a corrente passar para ligar o motor.',
    technicalTip: 'Transistor = interruptor eletrônico para o motor.',
  },
  // 10
  {
    id: 10,
    category: 'Eletrônica e Hardware',
    question: 'Por que o motor vibratório não é ligado direto no pino da plaquinha ESP32?',
    options: [
      { id: 'A', text: 'Porque o motor precisa de mais corrente elétrica e poderia queimar o pino da placa.' },
      { id: 'B', text: 'Porque o pino da placa é feito de borracha isolante.' },
      { id: 'C', text: 'Porque o motor só funciona se estiver desconectado de tudo.' },
      { id: 'D', text: 'Porque a placa tem medo de motores que tremem.' },
    ],
    correctAnswer: 'A',
    explanation: 'O motor puxa mais energia do que a plaquinha aguenta dar sozinha, por isso usamos o transistor.',
    technicalTip: 'Proteção: o motor consome muita corrente.',
  },

  // 11
  {
    id: 11,
    category: 'Eletrônica e Hardware',
    question: 'Qual módulo é responsável por carregar a bateria da pulseira com segurança?',
    options: [
      { id: 'A', text: 'Módulo carregador TP4056.' },
      { id: 'B', text: 'Sensor de impressão digital.' },
      { id: 'C', text: 'Câmera fotográfica com flash.' },
      { id: 'D', text: 'Antena de televisão analógica.' },
    ],
    correctAnswer: 'A',
    explanation: 'O TP4056 controla a quantidade certa de energia para não estragar nem esquentar a bateria.',
    technicalTip: 'Módulo TP4056: gerenciador de carga.',
  },
  // 12
  {
    id: 12,
    category: 'Conectividade Wi-Fi',
    question: 'Se a pulseira não encontrar o Wi-Fi da casa, qual nome de rede ela cria para você conectar pelo celular?',
    options: [
      { id: 'A', text: '"Vibeell"' },
      { id: 'B', text: '"Internet_Gratis_Vizinho"' },
      { id: 'C', text: '"Campainha_Estragada"' },
      { id: 'D', text: '"Rede_Secreta_123"' },
    ],
    correctAnswer: 'A',
    explanation: 'Ela gera uma rede própria chamada "Vibeell" para você entrar e colocar a senha do seu Wi-Fi.',
    technicalTip: 'Nome da rede: "Vibeell".',
  },
  // 13
  {
    id: 13,
    category: 'Conectividade Wi-Fi',
    question: 'Como você coloca a senha do Wi-Fi de casa na campainha?',
    options: [
      { id: 'A', text: 'Conectando o celular na rede "Vibeell", que abre uma página simples para digitar a senha.' },
      { id: 'B', text: 'Gritando a senha perto da campainha.' },
      { id: 'C', text: 'Escrevendo a senha com caneta permanente na bateria.' },
      { id: 'D', text: 'Levando a campainha até a assistência técnica toda vez.' },
    ],
    correctAnswer: 'A',
    explanation: 'Abre uma página no navegador do celular (portal cativo) onde você escolhe a rede e digita a senha.',
    technicalTip: 'Portal cativo: configuração fácil no celular.',
  },
  // 14
  {
    id: 14,
    category: 'Acessibilidade',
    question: 'Por que uma campainha que apenas acende uma luz na sala pode não ser suficiente para um surdo?',
    options: [
      { id: 'A', text: 'Porque se ele estiver no quarto, de costas ou dormindo, ele não vai ver a luz acendendo.' },
      { id: 'B', text: 'Porque pessoas surdas não conseguem enxergar cores.' },
      { id: 'C', text: 'Porque lâmpadas queimam sempre que alguém aperta a campainha.' },
      { id: 'D', text: 'Porque lâmpadas gastam mais luz que uma fábrica inteira.' },
    ],
    correctAnswer: 'A',
    explanation: 'A luz só funciona se a pessoa estiver olhando para ela; já a pulseira vibra direto no corpo.',
    technicalTip: 'Vantagem da pulseira: acompanha o morador onde ele estiver.',
  },
  // 15
  {
    id: 15,
    category: 'Lógica de Acionamento',
    question: 'A pulseira fica vibrando o tempo todo sem parar?',
    options: [
      { id: 'A', text: 'Não, ela só vibra por cerca de 1 a 2 segundos quando alguém aperta o botão da campainha.' },
      { id: 'B', text: 'Sim, fica vibrando 24 horas por dia até descarregar.' },
      { id: 'C', text: 'Não, ela só vibra quando acaba a energia elétrica do bairro.' },
      { id: 'D', text: 'Sim, mas só vibra aos sábados e domingos.' },
    ],
    correctAnswer: 'A',
    explanation: 'Ela só dá um aviso rápido no pulso quando alguém toca, economizando a bateria.',
    technicalTip: 'Vibração sob demanda para poupar bateria.',
  },
  // 16
  {
    id: 16,
    category: 'Eletrônica e Hardware',
    question: 'Para que serve a pecinha chamada "Resistor" que fica antes do transistor?',
    options: [
      { id: 'A', text: 'Para diminuir a corrente que sai da placa e não queimar nada.' },
      { id: 'B', text: 'Para aumentar o som da campainha.' },
      { id: 'C', text: 'Para iluminar a pulseira no escuro.' },
      { id: 'D', text: 'Para guardar fotos dos visitantes.' },
    ],
    correctAnswer: 'A',
    explanation: 'O resistor serve como um freio na corrente elétrica, protegendo a plaquinha.',
    technicalTip: 'Resistor: limita a corrente de proteção.',
  },
  // 17
  {
    id: 17,
    category: 'Eletrônica e Hardware',
    question: 'Qual é o formato do motor vibratório usado na pulseira?',
    options: [
      { id: 'A', text: 'Pequeno e achatado como uma moedinha de relógio.' },
      { id: 'B', text: 'Grande como o motor de uma geladeira.' },
      { id: 'C', text: 'Com duas hélices girando do lado de fora.' },
      { id: 'D', text: 'Quadrado e pesado como um tijolo.' },
    ],
    correctAnswer: 'A',
    explanation: 'O motor tipo moeda é fininho para caber confortavelmente dentro de uma pulseira no pulso.',
    technicalTip: 'Motor tipo moeda: ultrafino e confortável.',
  },
  // 18
  {
    id: 18,
    category: 'Projeto ETERJ',
    question: 'De qual escola e turma são os alunos que criaram o projeto VIBEELL?',
    options: [
      { id: 'A', text: 'ETERJ - Escola Técnica do Rio de Janeiro, Turma 1121.' },
      { id: 'B', text: 'Colégio Pedro II, Turma 3001.' },
      { id: 'C', text: 'Escola Municipal Monteiro Lobato, 5º ano.' },
      { id: 'D', text: 'Universidade de Oxford, Turma de Medicina.' },
    ],
    correctAnswer: 'A',
    explanation: 'O projeto foi desenvolvido pelos alunos do 1º ano da turma 1121 da ETERJ.',
    technicalTip: 'ETERJ - Turma 1121.',
  },
  // 19
  {
    id: 19,
    category: 'Projeto ETERJ',
    question: 'Quem é a professora orientadora do projeto VIBEELL?',
    options: [
      { id: 'A', text: 'Professora Tacila Vanessa.' },
      { id: 'B', text: 'Professora Marta Silva.' },
      { id: 'C', text: 'Professora Ana Maria Braga.' },
      { id: 'D', text: 'Professora Clarice Lispector.' },
    ],
    correctAnswer: 'A',
    explanation: 'A orientação dos alunos foi feita pela Professora Tacila Vanessa.',
    technicalTip: 'Orientadora: Professora Tacila Vanessa.',
  },
  // 20
  {
    id: 20,
    category: 'Eletrônica e Hardware',
    question: 'No módulo carregador TP4056, o que significa a luzinha vermelha acesa?',
    options: [
      { id: 'A', text: 'Que a bateria está sendo carregada no momento.' },
      { id: 'B', text: 'Que a bateria pegou fogo.' },
      { id: 'C', text: 'Que a campainha estragou para sempre.' },
      { id: 'D', text: 'Que alguém tocou a campainha.' },
    ],
    correctAnswer: 'A',
    explanation: 'Luz vermelha acesa no TP4056 significa que o cabo está conectado e a bateria está recebendo carga.',
    technicalTip: 'LED Vermelho = Carregando.',
  },

  // 21
  {
    id: 21,
    category: 'Eletrônica e Hardware',
    question: 'E o que significa quando a luzinha do carregador fica azul (ou verde)?',
    options: [
      { id: 'A', text: 'Que a bateria já está 100% carregada e pronta para uso.' },
      { id: 'B', text: 'Que a bateria está vazia.' },
      { id: 'C', text: 'Que o Wi-Fi desconectou.' },
      { id: 'D', text: 'Que o botão da campainha quebrou.' },
    ],
    correctAnswer: 'A',
    explanation: 'Luz azul ou verde indica fim da carga; já pode retirar do carregador.',
    technicalTip: 'LED Azul/Verde = Carga Completa.',
  },
  // 22
  {
    id: 22,
    category: 'Lógica de Acionamento',
    question: 'O que o botão da campainha faz exatamente quando é apertado?',
    options: [
      { id: 'A', text: 'Encosta dois contatos metálicos fechando o circuito para a plaquinha saber que foi apertado.' },
      { id: 'B', text: 'Dispara um jato de água na mão do visitante.' },
      { id: 'C', text: 'Desliga a lâmpada da rua.' },
      { id: 'D', text: 'Esquenta o portão.' },
    ],
    correctAnswer: 'A',
    explanation: 'O botão é uma chave simples que fecha o contato elétrico por um instante.',
    technicalTip: 'Push button fecha contato momentâneo.',
  },
  // 23
  {
    id: 23,
    category: 'Eletrônica e Hardware',
    question: 'Qual é a vantagem da bateria Li-Po ser tão fininha e maleável?',
    options: [
      { id: 'A', text: 'Facilita colocar dentro da caixinha da pulseira sem ficar pesada no braço.' },
      { id: 'B', text: 'Permite dobrar ao meio como se fosse papel sulfite.' },
      { id: 'C', text: 'Faz a bateria nunca precisar de recarga.' },
      { id: 'D', text: 'Faz a pulseira brilhar no escuro.' },
    ],
    correctAnswer: 'A',
    explanation: 'Baterias finas de lítio são perfeitas para coisas que usamos no corpo (wearables).',
    technicalTip: 'Formato compacto para wearables.',
  },
  // 24
  {
    id: 24,
    category: 'Acessibilidade',
    question: 'O que significa dizer que o VIBEELL é um dispositivo "Wearable"?',
    options: [
      { id: 'A', text: 'Que é uma tecnologia vestível, ou seja, feita para ser usada no corpo como uma pulseira ou relógio.' },
      { id: 'B', text: 'Que só funciona se estiver dentro da água.' },
      { id: 'C', text: 'Que é uma caixa gigante pesada de madeira.' },
      { id: 'D', text: 'Que é um jogo de computador antigo.' },
    ],
    correctAnswer: 'A',
    explanation: 'Wearable vem do inglês "vestível", aparelhos eletrônicos que vestimos no corpo.',
    technicalTip: 'Wearable = dispositivo vestível.',
  },
  // 25
  {
    id: 25,
    category: 'Lógica de Acionamento',
    question: 'Qual é a sequência certa dos acontecimentos quando alguém chega na casa?',
    options: [
      { id: 'A', text: '1º A pessoa aperta o botão -> 2º A campainha manda o sinal sem fio -> 3º A pulseira vibra no braço.' },
      { id: 'B', text: '1º A pulseira vibra -> 2º A pessoa aperta o botão depois -> 3º O sinal é enviado.' },
      { id: 'C', text: '1º A bateria descarrega -> 2º O visitante vai embora -> 3º Toca a buzina.' },
      { id: 'D', text: '1º A campainha toca música -> 2º O visitante pula o muro -> 3º Nada acontece.' },
    ],
    correctAnswer: 'A',
    explanation: 'Tudo começa com o dedo apertando o botão, o rádio manda o sinal e a pulseira vibra quase na mesma hora.',
    technicalTip: 'Fluxo: Botão -> Transmissão -> Vibração.',
  },
  // 26
  {
    id: 26,
    category: 'Conectividade Wi-Fi',
    question: 'A campainha precisa que a pessoa esteja com o celular aberto no aplicativo para a pulseira vibrar?',
    options: [
      { id: 'A', text: 'Não, as duas plaquinhas conversam diretamente entre si sem precisar do celular aberto.' },
      { id: 'B', text: 'Sim, o celular precisa estar na mão da pessoa o dia todo tocando alarme.' },
      { id: 'C', text: 'Sim, é obrigatório ligar para a operadora de telefone a cada toque.' },
      { id: 'D', text: 'Não, porque a campainha funciona através de cabos de som.' },
    ],
    correctAnswer: 'A',
    explanation: 'O sistema é independente: a campainha fala direto com a pulseira pela rede.',
    technicalTip: 'Funcionamento autônomo entre campainha e pulseira.',
  },
  // 27
  {
    id: 27,
    category: 'Eletrônica e Hardware',
    question: 'Por que o cabo USB-C é muito mais fácil de plugar do que os cabos de carregador antigos?',
    options: [
      { id: 'A', text: 'Porque ele encaixa de qualquer lado (é reversível) sem perigo de colocar de cabeça para baixo.' },
      { id: 'B', text: 'Porque ele é feito de ouro maciço.' },
      { id: 'C', text: 'Porque ele funciona sem encostar no aparelho.' },
      { id: 'D', text: 'Porque ele tem apenas 1 milímetro de comprimento.' },
    ],
    correctAnswer: 'A',
    explanation: 'O conector USB-C é simétrico, pode plugar de qualquer lado sem errar a posição.',
    technicalTip: 'USB-C reversível.',
  },
  // 28
  {
    id: 28,
    category: 'Lógica de Acionamento',
    question: 'Se a pessoa soltar o botão da campainha bem rápido, a pulseira ainda vai vibrar?',
    options: [
      { id: 'A', text: 'Sim, porque assim que detecta o toque, o código da pulseira roda a vibração programada completa.' },
      { id: 'B', text: 'Não, a pessoa precisa ficar segurando o botão por 1 hora.' },
      { id: 'C', text: 'Não, o botão só funciona se for apertado duas vezes.' },
      { id: 'D', text: 'Não, a campainha trava se for um toque rápido.' },
    ],
    correctAnswer: 'A',
    explanation: 'Mesmo um clique rápido é detectado e dispara o pulso de vibração garantido.',
    technicalTip: 'Detecção imediata de toque.',
  },
  // 29
  {
    id: 29,
    category: 'Eletrônica e Hardware',
    question: 'O que o transistor faz quando o microcontrolador manda sinal nível ALTO (HIGH)?',
    options: [
      { id: 'A', text: 'Ele fecha o circuito e liga o motor vibratório.' },
      { id: 'B', text: 'Ele desliga a pulseira para sempre.' },
      { id: 'C', text: 'Ele descarrega a bateria toda de propósito.' },
      { id: 'D', text: 'Ele toca uma música clássica.' },
    ],
    correctAnswer: 'A',
    explanation: 'Sinal ALTO faz o transistor conduzir energia, ligando o motor.',
    technicalTip: 'HIGH = Transistor conduzindo = Motor LIGADO.',
  },
  // 30
  {
    id: 30,
    category: 'Eletrônica e Hardware',
    question: 'E o que o transistor faz quando o microcontrolador manda sinal nível BAIXO (LOW)?',
    options: [
      { id: 'A', text: 'Ele abre o circuito e desliga o motor vibratório.' },
      { id: 'B', text: 'Ele faz o motor tremer com mais força.' },
      { id: 'C', text: 'Ele apaga o nome dos integrantes do trabalho.' },
      { id: 'D', text: 'Ele queima a bateria.' },
    ],
    correctAnswer: 'A',
    explanation: 'Sinal BAIXO corta a passagem de energia, fazendo o motor parar de tremer.',
    technicalTip: 'LOW = Transistor cortado = Motor DESLIGADO.',
  },

  // 31
  {
    id: 31,
    category: 'Eletrônica e Hardware',
    question: 'Quantas partes principais compõem o sistema VIBEELL?',
    options: [
      { id: 'A', text: 'Duas partes principais: a campainha que fica na porta (emissor) e a pulseira vestível (receptor).' },
      { id: 'B', text: 'Dez caixas grandes espalhadas pela rua.' },
      { id: 'C', text: 'Apenas uma campainha que toca música comum.' },
      { id: 'D', text: 'Três cabos de alta tensão que ligam a casa ao poste.' },
    ],
    correctAnswer: 'A',
    explanation: 'O sistema tem o módulo da porta (emissor) e a pulseira no braço do morador (receptor).',
    technicalTip: 'Dois módulos: Emissor (porta) e Receptor (pulseira).',
  },
  // 32
  {
    id: 32,
    category: 'Acessibilidade',
    question: 'O projeto VIBEELL ajuda a dar mais o quê para a pessoa com deficiência auditiva?',
    options: [
      { id: 'A', text: 'Autonomia e tranquilidade, sabendo que não vai perder entregas ou visitas em sua casa.' },
      { id: 'B', text: 'Dor de cabeça por carregar aparelhos pesados.' },
      { id: 'C', text: 'Medo de atender a porta.' },
      { id: 'D', text: 'Gasto excessivo com pilhas descartáveis todos os dias.' },
    ],
    correctAnswer: 'A',
    explanation: 'O morador fica tranquilo em qualquer cômodo de casa sabendo que o pulso vai tremer se alguém chamar.',
    technicalTip: 'Autonomia e independência em casa.',
  },
  // 33
  {
    id: 33,
    category: 'Conectividade Wi-Fi',
    question: 'O sinal do Wi-Fi de 2.4 GHz consegue atravessar portas e paredes de uma casa?',
    options: [
      { id: 'A', text: 'Sim, o sinal atravessa as paredes comuns da casa para a pulseira funcionar nos cômodos.' },
      { id: 'B', text: 'Não, o sinal para na primeira cortina que encontrar.' },
      { id: 'C', text: 'Não, só funciona se a pessoa estiver na calçada da rua.' },
      { id: 'D', text: 'Sim, mas apenas se a parede for de vidro transparente.' },
    ],
    correctAnswer: 'A',
    explanation: 'As ondas de Wi-Fi de 2.4 GHz contornam e atravessam paredes de alvenaria garantindo cobertura na casa.',
    technicalTip: 'Alcance do sinal através das paredes.',
  },
  // 34
  {
    id: 34,
    category: 'Eletrônica e Hardware',
    question: 'O que usamos para segurar e prender a caixinha com o circuito no braço da pessoa?',
    options: [
      { id: 'A', text: 'Uma pulseira ajustável com fecho confortável para o pulso.' },
      { id: 'B', text: 'Fita isolante colada na pele.' },
      { id: 'C', text: 'Um elástico de dinheiro apertado.' },
      { id: 'D', text: 'Um grampo de prender roupa.' },
    ],
    correctAnswer: 'A',
    explanation: 'A caixinha se acopla a uma pulseira com fecho, tornando o uso confortável no dia a dia.',
    technicalTip: 'Pulseira ergonômica ajustável.',
  },
  // 35
  {
    id: 35,
    category: 'Lógica de Acionamento',
    question: 'O que chamamos de "tempo de resposta" ou "latência" no VIBEELL?',
    options: [
      { id: 'A', text: 'O tempinho muito rápido (menos de 1 segundo) entre apertar o botão e a pulseira começar a vibrar.' },
      { id: 'B', text: 'O tempo que a bateria demora para estragar.' },
      { id: 'C', text: 'O tempo que o carteiro espera no portão.' },
      { id: 'D', text: 'O tempo que demora para ligar a TV.' },
    ],
    correctAnswer: 'A',
    explanation: 'Latência é o tempo que o sinal demora para chegar. No VIBEELL é quase instantâneo.',
    technicalTip: 'Resposta quase instantânea (<1 segundo).',
  },
  // 36
  {
    id: 36,
    category: 'Eletrônica e Hardware',
    question: 'A bateria da pulseira é recarregável ou precisa comprar pilha nova quando acabar?',
    options: [
      { id: 'A', text: 'É 100% recarregável, basta colocar no carregador USB como se fosse um celular.' },
      { id: 'B', text: 'É descartável e precisa jogar fora todo dia.' },
      { id: 'C', text: 'Não usa bateria, funciona com vento.' },
      { id: 'D', text: 'Usa querosene para gerar energia.' },
    ],
    correctAnswer: 'A',
    explanation: 'A bateria Li-Po pode ser recarregada centenas de vezes pelo conector USB.',
    technicalTip: 'Ecológica e econômica: bateria recarregável.',
  },
  // 37
  {
    id: 37,
    category: 'Eletrônica e Hardware',
    question: 'Qual é o nome da pecinha de três perninhas que atua como chave para o motor?',
    options: [
      { id: 'A', text: 'Transistor.' },
      { id: 'B', text: 'Transformador de poste.' },
      { id: 'C', text: 'Fita adesiva.' },
      { id: 'D', text: 'Alto-falante.' },
    ],
    correctAnswer: 'A',
    explanation: 'O transistor é o componente semicondutor com 3 perninhas que controla correntes maiores.',
    technicalTip: 'Transistor (3 pernas: Base, Coletor, Emissor).',
  },
  // 38
  {
    id: 38,
    category: 'Eletrônica e Hardware',
    question: 'Qual é o nome do pino de "terra" ou pólo negativo que existe nos circuitos eletrônicos?',
    options: [
      { id: 'A', text: 'GND (Ground).' },
      { id: 'B', text: 'VCC de 220V.' },
      { id: 'C', text: 'Pino de Wi-Fi.' },
      { id: 'D', text: 'USB Turbo.' },
    ],
    correctAnswer: 'A',
    explanation: 'GND é a sigla em inglês de Ground (Terra / polo negativo comum do circuito).',
    technicalTip: 'GND = pólo negativo / terra comum.',
  },
  // 39
  {
    id: 39,
    category: 'Conectividade Wi-Fi',
    question: 'O que acontece se a internet da rua cair, mas o roteador dentro de casa continuar ligado?',
    options: [
      { id: 'A', text: 'A campainha continua funcionando normalmente, pois ela usa a rede local sem fio da casa.' },
      { id: 'B', text: 'A pulseira explode imediatamente.' },
      { id: 'C', text: 'O botão para de funcionar para sempre.' },
      { id: 'D', text: 'A campainha passa a funcionar com pilhas de relógio.' },
    ],
    correctAnswer: 'A',
    explanation: 'A comunicação é local entre os dois aparelhos na mesma rede, não depende de sites da internet estarem funcionando.',
    technicalTip: 'Comunicação local independente da internet externa.',
  },
  // 40
  {
    id: 40,
    category: 'Eletrônica e Hardware',
    question: 'Qual é o principal perigo de ligar fios direto sem resistor ou sem proteção em uma plaquinha?',
    options: [
      { id: 'A', text: 'Causar um curto-circuito e queimar os pinos da placa.' },
      { id: 'B', text: 'Fazer o quarto ficar muito frio.' },
      { id: 'C', text: 'Fazer o botão virar um rádio de pilha.' },
      { id: 'D', text: 'Nenhum perigo, pode ligar de qualquer jeito sem resistor.' },
    ],
    correctAnswer: 'A',
    explanation: 'Ligar direto sem resistor passa corrente demais e pode queimar a plaquinha de vez.',
    technicalTip: 'Proteção contra curto e sobrecorrente.',
  },

  // 41
  {
    id: 41,
    category: 'Lógica de Acionamento',
    question: 'Por que o motor para de vibrar depois de 1 ou 2 segundos?',
    options: [
      { id: 'A', text: 'Porque o programa da plaquinha manda desligar para não machucar o pulso nem gastar a bateria à toa.' },
      { id: 'B', text: 'Porque o motor queima toda vez que liga.' },
      { id: 'C', text: 'Porque a pessoa precisa bater na pulseira para ela parar.' },
      { id: 'D', text: 'Porque o visitante foi embora.' },
    ],
    correctAnswer: 'A',
    explanation: 'O código programa um tempinho ideal de aviso e depois desliga o motor automaticamente.',
    technicalTip: 'Temporizador automático de desligamento.',
  },
  // 42
  {
    id: 42,
    category: 'Eletrônica e Hardware',
    question: 'Para unir os fios e as pecinhas na montagem do protótipo, qual ferramenta é usada?',
    options: [
      { id: 'A', text: 'Ferro de solda com estanho (ou fios em protoboard).' },
      { id: 'B', text: 'Grampeador de papel.' },
      { id: 'C', text: 'Cola bastão escolar.' },
      { id: 'D', text: 'Fio dental.' },
    ],
    correctAnswer: 'A',
    explanation: 'A solda eletrônica com estanho prende as pecinhas e garante que a eletricidade passe sem soltar com o tremor.',
    technicalTip: 'Solda com estanho garante bom contato elétrico.',
  },
  // 43
  {
    id: 43,
    category: 'Acessibilidade',
    question: 'Quem se beneficia diretamente com o projeto VIBEELL?',
    options: [
      { id: 'A', text: 'Pessoas com deficiência auditiva (surdos) e pessoas idosas com dificuldade para escutar a campainha.' },
      { id: 'B', text: 'Apenas motoristas de ônibus no trânsito.' },
      { id: 'C', text: 'Pilotos de avião durante voos internacionais.' },
      { id: 'D', text: 'Astronautas no espaço sideral.' },
    ],
    correctAnswer: 'A',
    explanation: 'Ajuda qualquer pessoa que não consiga escutar a campainha comum, trazendo acessibilidade e conforto.',
    technicalTip: 'Inclusão de pessoas com perda auditiva e idosos.',
  },
  // 44
  {
    id: 44,
    category: 'Eletrônica e Hardware',
    question: 'Por que a plaquinha ESP32 da campainha e a ESP32-C3 da pulseira são da mesma "família"?',
    options: [
      { id: 'A', text: 'Porque ambas são microcontroladores modernos com Wi-Fi fabricados pela empresa Espressif.' },
      { id: 'B', text: 'Porque foram inventadas no mesmo dia pelo mesmo aluno da sala.' },
      { id: 'C', text: 'Porque uma é o carregador da outra.' },
      { id: 'D', text: 'Porque ambas funcionam com pilha AA comum.' },
    ],
    correctAnswer: 'A',
    explanation: 'Fazem parte da família ESP32, famosa por ter processador rápido e Wi-Fi integrado a baixo custo.',
    technicalTip: 'Família ESP32 (Espressif).',
  },
  // 45
  {
    id: 45,
    category: 'Lógica de Acionamento',
    question: 'Em qual parte do código do microcontrolador colocamos as ordens que ficam repetindo e vigiando o botão?',
    options: [
      { id: 'A', text: 'Na função loop().' },
      { id: 'B', text: 'Na função setup() que só roda uma vez quando liga.' },
      { id: 'C', text: 'Na bateria do circuito.' },
      { id: 'D', text: 'No cabo USB.' },
    ],
    correctAnswer: 'A',
    explanation: 'A função loop() roda sem parar em círculo enquanto o aparelho estiver ligado.',
    technicalTip: 'loop() = repetição contínua.',
  },
  // 46
  {
    id: 46,
    category: 'Eletrônica e Hardware',
    question: 'O que o botão "Push Button" tem por dentro para voltar à posição original quando soltamos o dedo?',
    options: [
      { id: 'A', text: 'Uma molinha metálica que empurra o botão de volta para cima.' },
      { id: 'B', text: 'Um ímã de geladeira.' },
      { id: 'C', text: 'Ar comprimido de pneu.' },
      { id: 'D', text: 'Um elástico de tecido.' },
    ],
    correctAnswer: 'A',
    explanation: 'A molinha interna faz o botão ser "momentâneo", retornando assim que você tira o dedo.',
    technicalTip: 'Mola de retorno do Push Button.',
  },
  // 47
  {
    id: 47,
    category: 'Conectividade Wi-Fi',
    question: 'Qual é a maior vantagem do VIBEELL usar Wi-Fi em vez de fios espalhados pela casa?',
    options: [
      { id: 'A', text: 'Não precisa furar paredes nem passar metros de fios feios pela casa toda.' },
      { id: 'B', text: 'Gasta o dobro da eletricidade.' },
      { id: 'C', text: 'Obriga a quebrar o piso da cozinha.' },
      { id: 'D', text: 'Faz a campainha funcionar apenas quando estiver sol.' },
    ],
    correctAnswer: 'A',
    explanation: 'A instalação sem fio é limpa, fácil e a pulseira pode se mover livremente por todos os cômodos.',
    technicalTip: 'Sem fios: instalação limpa e livre movimentação.',
  },
  // 48
  {
    id: 48,
    category: 'Projeto ETERJ',
    question: 'Qual evento da ETERJ foi o palco da apresentação deste projeto de ciências?',
    options: [
      { id: 'A', text: 'XL Feira de Ciências e de Informação Profissional da ETERJ.' },
      { id: 'B', text: 'Campeonato de Futebol do Rio de Janeiro.' },
      { id: 'C', text: 'Show de Talentos Musicais.' },
      { id: 'D', text: 'Festa Junina do Bairro.' },
    ],
    correctAnswer: 'A',
    explanation: 'O VIBEELL foi desenvolvido para ser apresentado na Feira de Ciências e Informação Profissional da ETERJ.',
    technicalTip: 'XL Feira de Ciências da ETERJ.',
  },
  // 49
  {
    id: 49,
    category: 'Eletrônica e Hardware',
    question: 'O motor vibratório faz barulho alto de campainha ou apenas vibra silenciosamente?',
    options: [
      { id: 'A', text: 'Apenas vibra silenciosamente no pulso, sem fazer barulhos estridentes que incomodam.' },
      { id: 'B', text: 'Toca um som de corneta de 150 decibéis.' },
      { id: 'C', text: 'Grita o nome da pessoa que está chamando.' },
      { id: 'D', text: 'Solta fogos de artifício.' },
    ],
    correctAnswer: 'A',
    explanation: 'É um aviso tátil e silencioso, evitando barulho na casa e garantindo discrição e conforto.',
    technicalTip: 'Aviso silencioso e tátil.',
  },
  // 50
  {
    id: 50,
    category: 'Lógica de Acionamento',
    question: 'Resumindo tudo em uma frase simples: O que é o VIBEELL?',
    options: [
      { id: 'A', text: 'É uma campainha inteligente que, em vez de fazer barulho, avisa pelo Wi-Fi fazendo uma pulseira vibrar no braço do surdo.' },
      { id: 'B', text: 'É um carrinho de controle remoto movido a pilhas.' },
      { id: 'C', text: 'É um videogame novo para jogar na sala de aula.' },
      { id: 'D', text: 'É uma lâmpada que muda de cor com música.' },
    ],
    correctAnswer: 'A',
    explanation: 'Essa é a definição exata do projeto de acessibilidade criado pela Turma 1121 da ETERJ!',
    technicalTip: 'VIBEELL: Campainha inteligente e acessível por pulseira vibratória.',
  },
];
