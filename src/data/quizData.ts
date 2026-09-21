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
    'O VIBEELL une "Vibe" (vibração) e "Bell" (campainha) para criar um ecossistema vestível de acessibilidade utilizando dois ESP32-C3 SuperMini.',
};

export const PRACTICAL_STEPS: PracticalStep[] = [
  {
    stepNumber: 1,
    title: 'Transmissor (Campainha)',
    component: 'ESP32-C3 SuperMini + Push Button',
    description: 'Localizado na entrada, detecta o pressionamento do botão e envia a mensagem sem fio pela rede Wi-Fi compartilhada.',
    technicalNote: 'Ao ligar, busca a última rede salva. Se não encontrar, abre o ponto de acesso "Vibeell".',
  },
  {
    stepNumber: 2,
    title: 'Receptor (Pulseira)',
    component: 'ESP32-C3 SuperMini + Bateria Li-Po 3.7V + Módulo TP4056',
    description: 'Dispositivo vestível alimentado por bateria recarregável com gerenciador de carga via USB-C.',
    technicalNote: 'Também conecta-se à mesma rede ou abre a rede de configuração "Vibeell".',
  },
  {
    stepNumber: 3,
    title: 'Circuito de Potência do Receptor',
    component: 'Transistor + Resistor + Diodo + Motor Vibracall',
    description: 'O ESP32-C3 satura a base do transistor através do resistor; o transistor conduz corrente da bateria ao motor; o diodo amortece picos indutivos.',
    technicalNote: 'Protege a GPIO contra sobrecorrente e tensão reversa gerada pelo motor.',
  },
  {
    stepNumber: 4,
    title: 'Rede e Portal Cativo',
    component: 'Rede "Vibeell" + Página Web de Seleção',
    description: 'Em caso de falha de conexão, a rede "Vibeell" exibe uma página que escaneia e lista as redes locais para configuração direta pelo usuário.',
    technicalNote: 'Após ambos conectarem-se à mesma rede, a comunicação de disparo é instantânea.',
  },
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    "id": 1,
    "category": "Projeto ETERJ",
    "question": "Qual é a etimologia e o significado exato da palavra \"VIBEELL\" no contexto do projeto?",
    "options": [
      {
        "id": "A",
        "text": "A fusão dos termos ingleses \"Vibe\" (vibração mecânica do alerta) e \"Bell\" (campainha da residência)."
      },
      {
        "id": "B",
        "text": "A junção de \"Visual\" (alerta por luzes indicadoras) e \"Bell\" (sirene sonora de alta potência)."
      },
      {
        "id": "C",
        "text": "Uma sigla técnica que significa \"Vibration Internet Bluetooth Electronic Low Level\"."
      },
      {
        "id": "D",
        "text": "A união de \"Vibe\" (sintonizador de rádio) e \"Ell\" (abreviação de Electronic Logic Link)."
      }
    ],
    "correctAnswer": "A",
    "explanation": "VIBEELL vem da fusão de \"Vibe\" (referindo-se ao motor vibracall) com \"Bell\" (campainha), sintetizando o conceito da campainha que vibra.",
    "technicalTip": "VIBE (vibração) + BELL (campainha)."
  },
  {
    "id": 2,
    "category": "Eletrônica e Hardware",
    "question": "Quais microcontroladores específicos foram empregados no transmissor e no receptor do projeto VIBEELL?",
    "options": [
      {
        "id": "A",
        "text": "O transmissor usa ESP32 convencional de 38 pinos e o receptor usa um microcontrolador ATmega328P sem Wi-Fi."
      },
      {
        "id": "B",
        "text": "Ambos utilizam o módulo ESP32-C3 SuperMini, tanto na campainha transmissora quanto na pulseira receptora."
      },
      {
        "id": "C",
        "text": "O transmissor usa ESP32-C3 SuperMini, mas o receptor usa uma placa Arduino Nano conectada por cabo USB."
      },
      {
        "id": "D",
        "text": "O transmissor possui apenas componentes passivos analógicos e o receptor usa um módulo ESP8266 NodeMCU."
      }
    ],
    "correctAnswer": "B",
    "explanation": "O projeto padronizou o ESP32-C3 SuperMini nas duas pontas (transmissor e receptor) devido às suas dimensões ultracompactas e antena Wi-Fi integrada.",
    "technicalTip": "ESP32-C3 SuperMini em ambos os módulos."
  },
  {
    "id": 3,
    "category": "Eletrônica e Hardware",
    "question": "Quais componentes eletrônicos compõem estritamente o circuito da unidade Transmissora (campainha)?",
    "options": [
      {
        "id": "A",
        "text": "ESP32-C3 SuperMini, Push Button, Motor Vibracall e módulo de carga TP4056."
      },
      {
        "id": "B",
        "text": "ESP32-C3 SuperMini, Push Button, transistor NPN e bateria Li-Po de 3,7V."
      },
      {
        "id": "C",
        "text": "Exclusivamente a placa ESP32-C3 SuperMini e o Push Button (botão de pressão)."
      },
      {
        "id": "D",
        "text": "ESP32-C3 SuperMini, resistor de base, diodo flyback e Push Button."
      }
    ],
    "correctAnswer": "C",
    "explanation": "A campainha transmissora é composta de forma enxuta apenas pelo ESP32-C3 SuperMini e pelo Push Button conectado à sua entrada digital.",
    "technicalTip": "Transmissor = ESP32-C3 SuperMini + Push Button."
  },
  {
    "id": 4,
    "category": "Eletrônica e Hardware",
    "question": "Quais componentes eletrônicos compõem estritamente a unidade Receptora (pulseira vestível)?",
    "options": [
      {
        "id": "A",
        "text": "Bateria Li-Po 3,7V, ESP32-C3 SuperMini, Push Button, Diodo e Motor Vibracall, sem necessidade de transistor."
      },
      {
        "id": "B",
        "text": "ESP32-C3 SuperMini, Módulo TP4056, Buzzer piezoelétrico sonoro, Resistor e Pilha alcalina AA."
      },
      {
        "id": "C",
        "text": "Bateria Li-Po 3,7V, dois Push Buttons, Módulo TP4056, Motor Vibracall e regulador 7805 de 5V."
      },
      {
        "id": "D",
        "text": "Bateria Li-Po 3,7V, ESP32-C3 SuperMini, Módulo de carregamento TP4056, Motor Vibracall, Resistor, Diodo e Transistor."
      }
    ],
    "correctAnswer": "D",
    "explanation": "O receptor possui 7 elementos: Bateria Li-Po 3,7V, ESP32-C3 SuperMini, TP4056, Motor Vibracall, Resistor, Diodo e Transistor.",
    "technicalTip": "Receptor: Bateria Li-Po + ESP32-C3 + TP4056 + Motor + Resistor + Diodo + Transistor."
  },
  {
    "id": 5,
    "category": "Conectividade Wi-Fi",
    "question": "Qual é o comportamento inicial exato dos ESP32-C3 (campainha e pulseira) imediatamente após serem energizados?",
    "options": [
      {
        "id": "A",
        "text": "Tentam se reconectar automaticamente à última rede Wi-Fi gravada na memória; se não a localizarem, criam a rede \"Vibeell\"."
      },
      {
        "id": "B",
        "text": "Apagam imediatamente a memória e entram no modo de ponto de acesso \"Vibeell\" obrigatoriamente a cada inicialização."
      },
      {
        "id": "C",
        "text": "Conectam-se automaticamente a qualquer roteador aberto na vizinhança sem exigir nenhuma senha."
      },
      {
        "id": "D",
        "text": "Disparam uma vibração contínua de 1 minuto até que o usuário pressione o Push Button do transmissor."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Os módulos tentam primeiro restabelecer conexão com a rede conhecida. Caso não haja resposta do roteador, sobem a rede \"Vibeell\" com portal cativo.",
    "technicalTip": "Busca última rede salva -> Se falhar, gera AP \"Vibeell\"."
  },
  {
    "id": 6,
    "category": "Conectividade Wi-Fi",
    "question": "Quando um usuário conecta seu smartphone à rede local \"Vibeell\" criada pelo dispositivo, o que a interface exibe?",
    "options": [
      {
        "id": "A",
        "text": "Uma tela solicitando pagamento de licença de uso do software para liberar o sinal."
      },
      {
        "id": "B",
        "text": "Uma página de configuração com a lista de redes Wi-Fi locais escaneadas no ambiente, permitindo selecionar uma e inserir sua senha."
      },
      {
        "id": "C",
        "text": "Um terminal de comando Linux onde é necessário digitar códigos em linguagem C para calibrar os pinos."
      },
      {
        "id": "D",
        "text": "Uma lista com o histórico de áudios de quem tocou a campainha nos últimos dias."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A rede configurável abre uma página web com o escaneamento das redes próximas, facilitando selecionar o SSID residencial e digitar a senha.",
    "technicalTip": "Portal cativo: escaneia redes e permite selecionar e autenticar."
  },
  {
    "id": 7,
    "category": "Conectividade Wi-Fi",
    "question": "Para que a campainha consiga acionar a pulseira vibratória com sucesso, qual condição de rede é obrigatória?",
    "options": [
      {
        "id": "A",
        "text": "O transmissor deve estar conectado ao Wi-Fi residencial, mas a pulseira deve estar conectada à rede de dados 4G/5G móvel."
      },
      {
        "id": "B",
        "text": "A pulseira deve estar operando como roteador principal da casa fornecendo internet para o transmissor e computadores."
      },
      {
        "id": "C",
        "text": "Ambos os dispositivos (transmissor e receptor) precisam estar conectados à mesma rede Wi-Fi local compartilhada."
      },
      {
        "id": "D",
        "text": "O transmissor e a pulseira precisam estar pareados via Bluetooth Classic de longo alcance sem suporte a Wi-Fi."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Para trocar pacotes de disparo diretamente, a campainha e a pulseira devem estar registradas na mesma rede local (LAN).",
    "technicalTip": "Transmissor e receptor sintonizados na mesma rede local."
  },
  {
    "id": 8,
    "category": "Eletrônica e Hardware",
    "question": "Qual é a finalidade técnica específica do Diodo montado na unidade receptora (pulseira)?",
    "options": [
      {
        "id": "A",
        "text": "Emitir luz ultravioleta visível para alertar o usuário quando a bateria estiver acabando."
      },
      {
        "id": "B",
        "text": "Retificar a corrente alternada de 110V/220V que entra pelo cabo USB-C da pulseira."
      },
      {
        "id": "C",
        "text": "Impedir que a memória do ESP32-C3 perca as perguntas da prova."
      },
      {
        "id": "D",
        "text": "Atuar como diodo de roda-livre (flyback), dissipando picos de tensão reversa induzidos pela bobina do motor ao desligar."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Motores DC possuem enrolamentos indutivos. Ao cortar a corrente, a indução gera alta tensão reversa; o diodo em antiparalelo protege o transistor.",
    "technicalTip": "Diodo de Flyback / Roda-livre: proteção contra força contra-eletromotriz indutiva."
  },
  {
    "id": 9,
    "category": "Eletrônica e Hardware",
    "question": "Por que o Transistor é indispensável no receptor, em vez de ligar o motor Vibracall diretamente no pino da placa?",
    "options": [
      {
        "id": "A",
        "text": "Porque o motor exige corrente (60 a 100mA+) superior ao limite seguro do pino GPIO do ESP32-C3 (~20mA), evitando queimar a porta."
      },
      {
        "id": "B",
        "text": "Porque a GPIO fornece tensão alternada (AC) e o motor Vibracall só aceita corrente contínua pura (DC)."
      },
      {
        "id": "C",
        "text": "Porque a placa ESP32-C3 não possui pinos digitais de saída, apenas entradas analógicas."
      },
      {
        "id": "D",
        "text": "Porque o transistor converte comandos de voz em impulsos elétricos mecânicos."
      }
    ],
    "correctAnswer": "A",
    "explanation": "O transistor atua como chave de potência. O pino do ESP32 fornece apenas uma corrente minúscula de controle para saturar a base do transistor.",
    "technicalTip": "Transistor evita a destruição do pino GPIO por sobrecorrente."
  },
  {
    "id": 10,
    "category": "Eletrônica e Hardware",
    "question": "Qual é o papel do Resistor conectado entre a saída do ESP32-C3 SuperMini e a base do Transistor?",
    "options": [
      {
        "id": "A",
        "text": "Aumentar a velocidade do motor Vibracall elevando a tensão da bateria para 12 volts."
      },
      {
        "id": "B",
        "text": "Limitar a corrente que sai do pino GPIO para a junção base-emissor, protegendo a saída digital e polarizando o transistor."
      },
      {
        "id": "C",
        "text": "Filtrar ruídos de radiofrequência da antena Wi-Fi do ESP32-C3."
      },
      {
        "id": "D",
        "text": "Descarregar a bateria Li-Po rapidamente quando o motor for desligado."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A junção base-emissor age como um diodo condutor (~0.7V). Sem o resistor limitador de base, a GPIO ficaria em curto com o GND, queimando o microcontrolador.",
    "technicalTip": "Resistor de base: limitador de corrente da GPIO."
  },
  {
    "id": 11,
    "category": "Eletrônica e Hardware",
    "question": "Qual é a função exata do módulo TP4056 na pulseira receptora?",
    "options": [
      {
        "id": "A",
        "text": "Converter o sinal Wi-Fi em vibração mecânica sem passar pela programação do microcontrolador."
      },
      {
        "id": "B",
        "text": "Funcionar como receptor de rádio AM/FM de emergência para a pulseira."
      },
      {
        "id": "C",
        "text": "Controlar o ciclo de recarga da bateria Li-Po (corrente e tensão constantes) e proteger contra sobrecarga via entrada USB-C."
      },
      {
        "id": "D",
        "text": "Gerar o pulso de 220V que alimenta o motor Vibracall."
      }
    ],
    "correctAnswer": "C",
    "explanation": "O TP4056 gerencia a carga da bateria de polímero de lítio com perfil CC/CV, garantindo corte seguro em 4,2V.",
    "technicalTip": "TP4056: gerenciamento de carga segura de bateria Li-Po."
  },
  {
    "id": 12,
    "category": "Eletrônica e Hardware",
    "question": "Por que a bateria Li-Po de 3,7V foi a fonte de alimentação escolhida para o receptor, e não pilhas convencionais?",
    "options": [
      {
        "id": "A",
        "text": "Porque pilhas comuns são proibidas em dispositivos que utilizem microcontroladores da família ESP32."
      },
      {
        "id": "B",
        "text": "Porque baterias Li-Po fornecem corrente alternada de 60 Hz compatível com o motor."
      },
      {
        "id": "C",
        "text": "Porque baterias de lítio nunca descarregam, dispensando recargas ao longo dos anos."
      },
      {
        "id": "D",
        "text": "Por aliar alta densidade energética com formato ultrafino, baixo peso e capacidade de recarga contínua para uso vestível."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Baterias Li-Po são leves e planas, ideais para pulseiras vestíveis onde peso e espessura afetam diretamente o conforto.",
    "technicalTip": "Li-Po 3.7V: formato compacto, recarregável e leve."
  },
  {
    "id": 13,
    "category": "Eletrônica e Hardware",
    "question": "Qual é o princípio de funcionamento do Motor Vibracall empregado no projeto VIBEELL?",
    "options": [
      {
        "id": "A",
        "text": "Possui uma massa excêntrica (desbalanceada) acoplada ao eixo rotativo que, ao girar em alta rotação, gera oscilação mecânica."
      },
      {
        "id": "B",
        "text": "Emite descargas elétricas controladas de alta voltagem diretamente sobre a derme do pulso."
      },
      {
        "id": "C",
        "text": "Produz ondas sonoras ultrassônicas que ressoam na caixa plástica sem nenhum componente em movimento."
      },
      {
        "id": "D",
        "text": "Opera por expansão e contração térmica instantânea de um filamento metálico aquecido."
      }
    ],
    "correctAnswer": "A",
    "explanation": "O motor ERM (Eccentric Rotating Mass) possui um pequeno peso fora de centro que gera força centrífuga oscilante durante a rotação.",
    "technicalTip": "Vibracall ERM: rotação de peso excêntrico desbalanceado."
  },
  {
    "id": 14,
    "category": "Eletrônica e Hardware",
    "question": "O que diferencia a montagem física do Transmissor em relação ao Receptor no VIBEELL?",
    "options": [
      {
        "id": "A",
        "text": "O transmissor possui motor vibratório próprio para confirmar ao visitante que o botão foi clicado."
      },
      {
        "id": "B",
        "text": "O transmissor é estático na porta (ESP32-C3 + botão), enquanto o receptor é portátil e vestível com bateria e circuito do motor."
      },
      {
        "id": "C",
        "text": "O receptor fica fixado na parede da sala com fios ligados ao transmissor do portão."
      },
      {
        "id": "D",
        "text": "O transmissor utiliza bateria Li-Po e o receptor fica ligado diretamente na tomada por um cabo de 10 metros."
      }
    ],
    "correctAnswer": "B",
    "explanation": "O transmissor é a campainha fixa na entrada (apenas ESP32-C3 e botão); o receptor é a pulseira móvel no braço do morador.",
    "technicalTip": "Transmissor fixo (porta) vs Receptor vestível portátil (pulso)."
  },
  {
    "id": 15,
    "category": "Lógica de Acionamento",
    "question": "Qual é a sequência exata de eventos no circuito elétrico do receptor quando a ordem de vibrar é recebida via Wi-Fi?",
    "options": [
      {
        "id": "A",
        "text": "GPIO vai para nível BAIXO -> O diodo descarrega a bateria -> O motor liga por indução magnética do ar."
      },
      {
        "id": "B",
        "text": "O módulo TP4056 corta a energia -> O transistor desliga -> O motor vibra utilizando a energia do resistor."
      },
      {
        "id": "C",
        "text": "GPIO do ESP32-C3 vai para nível ALTO -> Corrente flui pelo resistor para a base do transistor -> Transistor satura -> Motor conduz corrente da bateria e vibra."
      },
      {
        "id": "D",
        "text": "O Push Button fecha contato na pulseira -> A bateria manda 220V para a GPIO -> O motor gira no sentido anti-horário."
      }
    ],
    "correctAnswer": "C",
    "explanation": "A GPIO envia nível ALTO (HIGH), injetando corrente na base através do resistor, saturando o transistor que liga o motor à alimentação da bateria.",
    "technicalTip": "HIGH na GPIO -> Base saturada -> Chave fecha -> Motor acionado."
  },
  {
    "id": 16,
    "category": "Eletrônica e Hardware",
    "question": "Como o Diodo está conectado em relação ao Motor Vibracall no circuito da pulseira?",
    "options": [
      {
        "id": "A",
        "text": "Em série entre a bateria e a entrada de energia do ESP32-C3 para reduzir a tensão em 5V."
      },
      {
        "id": "B",
        "text": "Diretamente entre o pino do Push Button e a antena Wi-Fi do transmissor."
      },
      {
        "id": "C",
        "text": "Em paralelo com o resistor de base para dobrar a corrente do pino GPIO."
      },
      {
        "id": "D",
        "text": "Em paralelo reverso (antiparalelo) com os terminais do motor, com o cátodo voltado para o polo positivo da alimentação."
      }
    ],
    "correctAnswer": "D",
    "explanation": "O diodo flyback fica em paralelo com a carga indutiva (catodo no positivo, anodo no coletor do transistor) para conduzir apenas no pico reverso.",
    "technicalTip": "Diodo antiparalelo com o motor (catodo no VCC)."
  },
  {
    "id": 17,
    "category": "Lógica de Acionamento",
    "question": "O que ocorre no circuito do receptor no exato instante em que o pino GPIO do ESP32-C3 retorna para nível BAIXO (LOW / 0V)?",
    "options": [
      {
        "id": "A",
        "text": "A corrente de base cessa, o transistor entra em corte (chave aberta), o motor desliga e a tensão indutiva reversa é absorvida pelo diodo."
      },
      {
        "id": "B",
        "text": "O transistor entra em curto proposital e descarrega a bateria Li-Po para esfriar o circuito."
      },
      {
        "id": "C",
        "text": "O motor inverte a rotação imediatamente e devolve energia para a rede Wi-Fi residencial."
      },
      {
        "id": "D",
        "text": "A plaquinha perde a programação gravada na memória e precisa ser regravada via USB."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sem corrente de base o transistor corta; a bobina do motor tenta manter a corrente gerando pico reverso, que é safely conduzido pelo diodo.",
    "technicalTip": "Corte do transistor + absorção da FEM induzida pelo diodo."
  },
  {
    "id": 18,
    "category": "Conectividade Wi-Fi",
    "question": "Por que o VIBEELL cria a rede \"Vibeell\" como uma rede configurável quando não localiza a rede anterior?",
    "options": [
      {
        "id": "A",
        "text": "Para fornecer sinal de internet banda larga gratuito e ilimitado para qualquer pessoa na vizinhança."
      },
      {
        "id": "B",
        "text": "Para evitar que o usuário precise reprogramar os chips via código fonte em computador caso mude de casa ou troque o roteador."
      },
      {
        "id": "C",
        "text": "Para bloquear o sinal de celulares próximos e evitar interferências na campainha."
      },
      {
        "id": "D",
        "text": "Porque o ESP32-C3 SuperMini não tem capacidade de gravar senhas na memória não volátil."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A rede e o portal cativo tornam o produto independente e acessível, permitindo reconfigurar o Wi-Fi facilmente por qualquer celular.",
    "technicalTip": "Independência de compilação: reconfiguração prática pelo usuário."
  },
  {
    "id": 19,
    "category": "Lógica de Acionamento",
    "question": "Qual é o papel do Push Button no transmissor do ponto de vista de sinal elétrico?",
    "options": [
      {
        "id": "A",
        "text": "Gerar a energia necessária para alimentar o rádio Wi-Fi do ESP32-C3 por efeito piezoelétrico sem eletricidade."
      },
      {
        "id": "B",
        "text": "Chavear diretamente a corrente do motor Vibracall através de um fio que atravessa a rua."
      },
      {
        "id": "C",
        "text": "Alterar momentaneamente o nível lógico do pino GPIO (gerando uma transição de estado que dispara o pacote de rede)."
      },
      {
        "id": "D",
        "text": "Apagar a memória flash do transmissor sempre que for pressionado com força."
      }
    ],
    "correctAnswer": "C",
    "explanation": "O botão é uma entrada digital simples; ao pressionar, a GPIO lê a variação (ex: de HIGH para LOW ou vice-versa) e envia o pacote.",
    "technicalTip": "Entrada digital de evento momentâneo."
  },
  {
    "id": 20,
    "category": "Eletrônica e Hardware",
    "question": "Se retirássemos o Resistor de Base e ligássemos o pino GPIO do ESP32-C3 direto na base do transistor, o que aconteceria?",
    "options": [
      {
        "id": "A",
        "text": "O motor Vibracall funcionaria com o dobro da rotação sem nenhum risco ao circuito."
      },
      {
        "id": "B",
        "text": "A bateria Li-Po explodiria instantaneamente ao ser conectada."
      },
      {
        "id": "C",
        "text": "A rede Wi-Fi \"Vibeell\" ficaria com alcance 10 vezes maior."
      },
      {
        "id": "D",
        "text": "A corrente drenada da GPIO excederia o limite máximo permitido pelo chip, podendo danificar permanentemente a saída da placa."
      }
    ],
    "correctAnswer": "D",
    "explanation": "A junção base-emissor de um transistor bipolar em polarização direta tem queda de tensão de ~0.7V. Sem resistor, a GPIO fica em quase curto com o terra.",
    "technicalTip": "Risco de queima da GPIO por corrente excessiva sem resistor de base."
  },
  {
    "id": 21,
    "category": "Eletrônica e Hardware",
    "question": "Se retirássemos o Diodo de roda-livre em paralelo com o motor, qual componente correria risco direto de queima e por quê?",
    "options": [
      {
        "id": "A",
        "text": "O Transistor, devido ao pico de alta tensão reversa gerado pela indutância da bobina do motor no momento do desligamento."
      },
      {
        "id": "B",
        "text": "O Push Button da campainha, devido ao calor que voltaria pela rede Wi-Fi."
      },
      {
        "id": "C",
        "text": "O módulo TP4056, pois perderia a calibragem do conector USB-C."
      },
      {
        "id": "D",
        "text": "Apenas a carcaça plástica da pulseira por desmagnetização molecular."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cargas indutivas geram picos de tensão reversa de dezenas de volts ao serem cortadas (V = L * di/dt), superando a tensão de ruptura do transistor (Vce).",
    "technicalTip": "Transistor corre risco de queima por sobretensão indutiva sem o diodo."
  },
  {
    "id": 22,
    "category": "Acessibilidade",
    "question": "Em que aspectos a pulseira VIBEELL supera sistemas residenciais baseados apenas em sinalizadores luminosos?",
    "options": [
      {
        "id": "A",
        "text": "Consome 10 vezes mais energia que uma lâmpada estroboscópica, aquecendo o braço do morador."
      },
      {
        "id": "B",
        "text": "Garante o alerta independente de onde o usuário esteja e da sua linha de visão, inclusive com olhos fechados ou em outro cômodo."
      },
      {
        "id": "C",
        "text": "Emite um som agudo simultâneo que substitui o uso da vibração mecânica."
      },
      {
        "id": "D",
        "text": "Exige que o morador fique posicionado a menos de 50 centímetros da campainha para receber o alerta."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Avisos luminosos exigem atenção visual e dependem de a pessoa estar no cômodo correto. O alerta tátil vestível acompanha o indivíduo.",
    "technicalTip": "Vantagem do alerta tátil vestível sobre o alerta óptico ambiental."
  },
  {
    "id": 23,
    "category": "Conectividade Wi-Fi",
    "question": "O que o usuário visualiza no navegador ao se conectar ao ponto de acesso \"Vibeell\" gerado pelo dispositivo?",
    "options": [
      {
        "id": "A",
        "text": "Uma tela preta sem nenhuma informação, sendo necessário aguardar 2 horas para inicializar."
      },
      {
        "id": "B",
        "text": "O manual de instruções em PDF da fabricante do módulo TP4056."
      },
      {
        "id": "C",
        "text": "Uma página web que lista os nomes (SSIDs) das redes Wi-Fi locais detectadas, com campo para digitar a senha da rede escolhida."
      },
      {
        "id": "D",
        "text": "Um formulário solicitando cartão de crédito para liberar o uso da campainha."
      }
    ],
    "correctAnswer": "C",
    "explanation": "O portal cativo apresenta o escaneamento ativo das redes Wi-Fi da residência para que o usuário clique na sua rede e insira as credenciais.",
    "technicalTip": "Portal de configuração: lista redes escaneadas e recebe a senha."
  },
  {
    "id": 24,
    "category": "Eletrônica e Hardware",
    "question": "Qual terminal do transistor bipolar NPN está conectado ao polo negativo comum (GND) no circuito da pulseira?",
    "options": [
      {
        "id": "A",
        "text": "A Base (Base)."
      },
      {
        "id": "B",
        "text": "O Coletor (Collector)."
      },
      {
        "id": "C",
        "text": "O terminal da antena de rádio."
      },
      {
        "id": "D",
        "text": "O Emissor (Emitter)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Na configuração tradicional de chaveamento low-side NPN, o Emissor vai ao GND, a Base recebe o sinal via resistor e o Coletor liga à carga.",
    "technicalTip": "Emissor aterrado no GND (chaveamento low-side NPN)."
  },
  {
    "id": 25,
    "category": "Eletrônica e Hardware",
    "question": "Onde está conectado o terminal do Coletor do transistor no receptor do VIBEELL?",
    "options": [
      {
        "id": "A",
        "text": "Ao polo negativo do motor Vibracall (e ao anodo do diodo flyback)."
      },
      {
        "id": "B",
        "text": "Diretamente no pino do Push Button do transmissor."
      },
      {
        "id": "C",
        "text": "No polo positivo da bateria Li-Po sem passar pelo motor."
      },
      {
        "id": "D",
        "text": "Na porta USB-C de carregamento."
      }
    ],
    "correctAnswer": "A",
    "explanation": "O Coletor fecha a malha de corrente entre o terminal negativo da carga (motor) e o terra (Emissor) quando saturado.",
    "technicalTip": "Coletor conectado ao terminal negativo do motor Vibracall."
  },
  {
    "id": 26,
    "category": "Lógica de Acionamento",
    "question": "Qual é o motivo do motor Vibracall ser acionado em pulsos temporizados (ex: 1 a 2 segundos) em vez de vibrar indefinidamente?",
    "options": [
      {
        "id": "A",
        "text": "Evitar que a carcaça do transistor atinja 500 graus Celsius em milissegundos."
      },
      {
        "id": "B",
        "text": "Poupar a carga da bateria Li-Po e oferecer um padrão de alerta tátil confortável sem incômodo excessivo ao usuário."
      },
      {
        "id": "C",
        "text": "Porque o sinal de Wi-Fi é automaticamente desligado pelo roteador após 2 segundos."
      },
      {
        "id": "D",
        "text": "Porque a legislação trabalhista proíbe vibrações superiores a 3 segundos."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Um pulso curto bem calibrado é suficiente para percepção imediata do usuário e maximiza a autonomia da bateria Li-Po.",
    "technicalTip": "Temporização: conforto tátil e economia de bateria."
  },
  {
    "id": 27,
    "category": "Eletrônica e Hardware",
    "question": "Qual é a tensão nominal de operação da célula de bateria Li-Po utilizada na pulseira receptora?",
    "options": [
      {
        "id": "A",
        "text": "12,0 V contínuos de bateria veicular."
      },
      {
        "id": "B",
        "text": "1,5 V igual a uma pilha seca comum de lanterna."
      },
      {
        "id": "C",
        "text": "3,7 V nominais (atingindo cerca de 4,2 V quando totalmente carregada)."
      },
      {
        "id": "D",
        "text": "24,0 V de controle industrial."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Baterias de polímero de lítio (Li-Po) de 1 célula (1S) possuem tensão nominal de 3,7V e patamar de carga plena em 4,2V.",
    "technicalTip": "Li-Po 1S: 3.7V nominal e 4.2V em carga máxima."
  },
  {
    "id": 28,
    "category": "Conectividade Wi-Fi",
    "question": "O que acontece após o usuário selecionar a sua rede doméstica e digitar a senha na página da rede \"Vibeell\"?",
    "options": [
      {
        "id": "A",
        "text": "O dispositivo formata o microcontrolador e exige nova gravação de código via computador."
      },
      {
        "id": "B",
        "text": "O ponto de acesso \"Vibeell\" passa a emitir sinais de rádio Bluetooth para sempre."
      },
      {
        "id": "C",
        "text": "O motor Vibracall vibra de forma contínua até que a bateria se esgote por completo."
      },
      {
        "id": "D",
        "text": "O dispositivo armazena as credenciais na memória não volátil, reinicia o Wi-Fi em modo cliente e conecta-se à rede doméstica."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Os dados de SSID e senha são salvos na flash (NVS); o modo Access Point é encerrado e a placa passa a operar conectada à rede local do usuário.",
    "technicalTip": "Gravação na NVS e transição para modo Station (cliente)."
  },
  {
    "id": 29,
    "category": "Eletrônica e Hardware",
    "question": "Qual elemento protege a bateria Li-Po de atingir tensões perigosas acima de 4,2V durante o carregamento?",
    "options": [
      {
        "id": "A",
        "text": "O circuito integrado de controle do módulo TP4056, que corta a corrente ao atingir 4,2V."
      },
      {
        "id": "B",
        "text": "O transistor NPN que desliga o motor Vibracall."
      },
      {
        "id": "C",
        "text": "O Push Button da campainha externa."
      },
      {
        "id": "D",
        "text": "O diodo flyback montado no motor."
      }
    ],
    "correctAnswer": "A",
    "explanation": "O TP4056 monitora continuamente a tensão da célula e encerra a etapa de carga ao atingir 4,2V ± 1%, prevenindo sobretensão perigosa.",
    "technicalTip": "Corte de tensão a 4.2V pelo TP4056."
  },
  {
    "id": 30,
    "category": "Eletrônica e Hardware",
    "question": "Qual é a principal razão pela qual o ESP32-C3 SuperMini foi escolhido em detrimento de placas como o Arduino Uno tradicional?",
    "options": [
      {
        "id": "A",
        "text": "O Arduino Uno possui dimensões microscópicas que impedem a soldagem manual de fios."
      },
      {
        "id": "B",
        "text": "Possui Wi-Fi nativo embutido, dimensões reduzidas comparáveis a uma moeda e arquitetura de 32 bits com baixo consumo."
      },
      {
        "id": "C",
        "text": "O Arduino Uno opera exclusivamente com 220V em corrente alternada."
      },
      {
        "id": "D",
        "text": "O ESP32-C3 SuperMini não necessita de programação ou software para operar."
      }
    ],
    "correctAnswer": "B",
    "explanation": "O ESP32-C3 SuperMini tem menos de 2,5 cm de comprimento, antena integrada e rádio Wi-Fi, perfeito para o case compacto da pulseira e da campainha.",
    "technicalTip": "Dimensões ultracompactas com Wi-Fi integrado."
  },
  {
    "id": 31,
    "category": "Lógica de Acionamento",
    "question": "No transmissor, qual método de software evita que uma única pressão do botão dispare múltiplos pacotes falsos por oscilação mecânica dos contatos?",
    "options": [
      {
        "id": "A",
        "text": "Aumento da tensão de alimentação da bateria para 50 volts."
      },
      {
        "id": "B",
        "text": "Inversão dos terminais da antena Wi-Fi."
      },
      {
        "id": "C",
        "text": "Lógica de Debouncing (temporização ou filtragem de repiques mecânicos)."
      },
      {
        "id": "D",
        "text": "Troca do transistor NPN por um resistor de carvão."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Contatos mecânicos vibram por milissegundos antes do fechamento estável. O debounce via código ignora leituras espúrias.",
    "technicalTip": "Debouncing em botões mecânicos."
  },
  {
    "id": 32,
    "category": "Eletrônica e Hardware",
    "question": "Qual conector moderno é soldado à placa do módulo TP4056 para recarregar a bateria da pulseira?",
    "options": [
      {
        "id": "A",
        "text": "Conector coaxial de antena de televisão analógica."
      },
      {
        "id": "B",
        "text": "Plugue estéreo P10 para amplificadores de guitarra."
      },
      {
        "id": "C",
        "text": "Conector serial DB9 de computadores industriais antigos."
      },
      {
        "id": "D",
        "text": "Conector USB Tipo C (reversível e padronizado com carregadores de celular atuais)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "O USB-C facilita o manuseio pelo usuário final por permitir encaixe simétrico e usar o mesmo carregador de smartphones modernos.",
    "technicalTip": "Conector USB-C reversível no TP4056."
  },
  {
    "id": 33,
    "category": "Conectividade Wi-Fi",
    "question": "O que o transmissor e o receptor fazem se a rede Wi-Fi residencial configurada sofrer uma queda temporária de energia do roteador?",
    "options": [
      {
        "id": "A",
        "text": "Ficam tentando se reconectar e, se o roteador não responder após o tempo limite, disponibilizam a rede \"Vibeell\"."
      },
      {
        "id": "B",
        "text": "Explodem a bateria Li-Po por medida de segurança."
      },
      {
        "id": "C",
        "text": "Passam a se comunicar por cabos invisíveis de laser térmico."
      },
      {
        "id": "D",
        "text": "Tocam uma sirene sonora de 120 decibéis no portão."
      }
    ],
    "correctAnswer": "A",
    "explanation": "A rotina de contingência do firmware tenta reconectar ciclicamente. Se a ausência persistir, abre o AP \"Vibeell\" para inspeção ou nova rede.",
    "technicalTip": "Recuperação automática de conexão ou fallback para AP \"Vibeell\"."
  },
  {
    "id": 34,
    "category": "Eletrônica e Hardware",
    "question": "Por que o transmissor (campainha) NÃO precisa de transistor nem de motor Vibracall em seu circuito?",
    "options": [
      {
        "id": "A",
        "text": "Porque o transmissor não possui pinos suficientes para conectar esses componentes."
      },
      {
        "id": "B",
        "text": "Porque sua função é apenas detectar o botão e transmitir dados pelo ar, não havendo necessidade de alerta tátil no transmissor."
      },
      {
        "id": "C",
        "text": "Porque o Push Button queima sempre que é ligado junto de um transistor."
      },
      {
        "id": "D",
        "text": "Porque o motor Vibracall bloquearia o sinal de Wi-Fi emitido pela antena."
      }
    ],
    "correctAnswer": "B",
    "explanation": "O papel da campainha é unicamente sensorial de entrada (detectar o toque) e de envio (Wi-Fi). Quem vibra é o receptor no braço do morador.",
    "technicalTip": "Separação funcional: Transmissor (input + envio) vs Receptor (recepção + output tátil)."
  },
  {
    "id": 35,
    "category": "Eletrônica e Hardware",
    "question": "Qual é a função do pino \"Base\" do transistor no receptor em comparação com o \"Coletor\" e o \"Emissor\"?",
    "options": [
      {
        "id": "A",
        "text": "A Base é o polo negativo que recebe a corrente da bateria e a joga no motor."
      },
      {
        "id": "B",
        "text": "A Base é o terminal onde o cabo USB-C se conecta fisicamente para carregar o chip."
      },
      {
        "id": "C",
        "text": "A Base é o terminal de controle que recebe a corrente do pino para regular/permitir a passagem maior entre Coletor e Emissor."
      },
      {
        "id": "D",
        "text": "A Base serve apenas como carcaça plástica de fixação mecânica sem contato elétrico."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Em transistores BJT NPN, uma pequena corrente de Base polariza a junção, liberando uma corrente muito maior entre Coletor e Emissor.",
    "technicalTip": "Base: terminal de controle de corrente."
  },
  {
    "id": 36,
    "category": "Lógica de Acionamento",
    "question": "Em um cenário onde o visitante dá 5 toques rápidos seguidos no Push Button da campainha, qual é o comportamento esperado do receptor?",
    "options": [
      {
        "id": "A",
        "text": "O receptor trava e precisa ter sua bateria desconectada manualmente."
      },
      {
        "id": "B",
        "text": "O motor começa a girar com rotação 5 vezes maior até queimar o enrolamento."
      },
      {
        "id": "C",
        "text": "A campainha apaga a senha do Wi-Fi e cria a rede \"Vibeell\" novamente."
      },
      {
        "id": "D",
        "text": "Garante o envio e a execução estável do pulso de vibração para avisar o morador sem sobrecarregar o microcontrolador."
      }
    ],
    "correctAnswer": "D",
    "explanation": "O tratamento de estados do código absorve os disparos repetidos garantindo que a vibração cumpra o alerta sem travar a máquina de estados.",
    "technicalTip": "Controle de fluxo de alertas no receptor."
  },
  {
    "id": 37,
    "category": "Eletrônica e Hardware",
    "question": "Por que o conjunto Resistor + Transistor + Diodo é chamado tecnicamente de \"Driver do Motor\"?",
    "options": [
      {
        "id": "A",
        "text": "Porque formam um circuito intermediário de interface e proteção que capacita um sinal fraco do microcontrolador a acionar uma carga pesada."
      },
      {
        "id": "B",
        "text": "Porque é um aplicativo de computador que precisa ser baixado na internet para o motor funcionar."
      },
      {
        "id": "C",
        "text": "Porque dirige a velocidade de conexão Wi-Fi entre o transmissor e o roteador."
      },
      {
        "id": "D",
        "text": "Porque substitui o papel da bateria fornecendo energia sem fio."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Na eletrônica, um \"driver\" é o circuito de condicionamento e potência que permite a uma saída digital de controle comandar atuadores elétricos.",
    "technicalTip": "Driver de potência: acionamento e proteção de atuadores."
  },
  {
    "id": 38,
    "category": "Projeto ETERJ",
    "question": "Em qual instituição técnica e turma o projeto VIBEELL foi desenvolvido e apresentado?",
    "options": [
      {
        "id": "A",
        "text": "Centro Federal de Educação Tecnológica (CEFET), Turma 4101."
      },
      {
        "id": "B",
        "text": "Escola Técnica do Rio de Janeiro (ETERJ), Turma 1121."
      },
      {
        "id": "C",
        "text": "Instituto Federal do Rio de Janeiro (IFRJ), Turma 2002."
      },
      {
        "id": "D",
        "text": "Escola Politécnica da UFRJ, Turma de Pós-Graduação."
      }
    ],
    "correctAnswer": "B",
    "explanation": "O projeto VIBEELL é autoria dos estudantes do 1º ano da turma 1121 da ETERJ.",
    "technicalTip": "ETERJ - Turma 1121."
  },
  {
    "id": 39,
    "category": "Eletrônica e Hardware",
    "question": "Qual é o comportamento dos LEDs sinalizadores do módulo TP4056 ao plugar o cabo de alimentação na pulseira?",
    "options": [
      {
        "id": "A",
        "text": "Ambos os LEDs piscam em amarelo indicando que o motor Vibracall está ligado."
      },
      {
        "id": "B",
        "text": "O LED azul indica que o Push Button foi pressionado no transmissor."
      },
      {
        "id": "C",
        "text": "O LED vermelho acende durante o processo de carga da bateria e o LED azul/verde acende quando a carga atinge 100% (4,2V)."
      },
      {
        "id": "D",
        "text": "Os LEDs servem apenas como iluminação estética sem indicar status elétrico."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Os pinos CHRG e STDBY acionam respectivamente o LED vermelho (carregando) e o LED azul/verde (carga completa).",
    "technicalTip": "LED Vermelho (carga em andamento) vs LED Azul/Verde (plena carga)."
  },
  {
    "id": 40,
    "category": "Acessibilidade",
    "question": "Por que o projeto VIBEELL é classificado como uma Tecnologia Assistiva?",
    "options": [
      {
        "id": "A",
        "text": "Porque é um software corporativo para gestão financeira de escolas técnicas."
      },
      {
        "id": "B",
        "text": "Porque serve unicamente como dispositivo de entretenimento e jogos eletrônicos."
      },
      {
        "id": "C",
        "text": "Porque substitui completamente os tratamentos médicos auditivos do usuário."
      },
      {
        "id": "D",
        "text": "Porque utiliza recursos eletrônicos e de telecomunicações para proporcionar autonomia, segurança e acessibilidade a deficientes auditivos."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Tecnologias Assistivas são instrumentos criados para promover a funcionalidade, autonomia e participação social de pessoas com deficiência.",
    "technicalTip": "Tecnologia Assistiva e inclusão de PCD."
  },
  {
    "id": 41,
    "category": "Eletrônica e Hardware",
    "question": "O que aconteceria se a bateria Li-Po 3,7V fosse ligada com a polaridade invertida (positivo no GND e negativo no positivo) no módulo da pulseira?",
    "options": [
      {
        "id": "A",
        "text": "Provocaria queima imediata dos circuitos integrados do ESP32-C3 SuperMini e do módulo TP4056 por curto-circuito reverso."
      },
      {
        "id": "B",
        "text": "A pulseira apenas vibraria no sentido oposto sem nenhum risco de queima."
      },
      {
        "id": "C",
        "text": "O conector USB-C passaria a gerar 110V de corrente alternada."
      },
      {
        "id": "D",
        "text": "A rede Wi-Fi \"Vibeell\" mudaria o nome automaticamente para \"Vibeell_Reverso\"."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Inversão de polaridade em circuitos de corrente contínua destrói as junções de semicondutores não protegidos por ponte de diodos.",
    "technicalTip": "Inversão de polaridade destrói semicondutores de corrente contínua."
  },
  {
    "id": 42,
    "category": "Conectividade Wi-Fi",
    "question": "Qual é o papel da rede Wi-Fi \"Vibeell\" em comparação com a rede Wi-Fi doméstica do usuário?",
    "options": [
      {
        "id": "A",
        "text": "\"Vibeell\" é a rede principal que precisa ser mantida ligada no computador para a campainha funcionar."
      },
      {
        "id": "B",
        "text": "\"Vibeell\" é uma rede de contingência/configuração temporária; a rede doméstica é onde a campainha e a pulseira se comunicam no dia a dia."
      },
      {
        "id": "C",
        "text": "Não há diferença; o transmissor só aceita a rede \"Vibeell\" e nunca se conecta à rede doméstica."
      },
      {
        "id": "D",
        "text": "\"Vibeell\" é uma conexão via satélite de uso militar exclusivo."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A rede \"Vibeell\" atua como ponte provisória para receber a configuração. No cotidiano, ambos operam na rede local residencial do usuário.",
    "technicalTip": "Rede de configuração temporária (AP) vs Rede de operação (LAN)."
  },
  {
    "id": 43,
    "category": "Lógica de Acionamento",
    "question": "Em que nível de latência (tempo de resposta) a comunicação em rede local entre os dois ESP32-C3 opera tipicamente?",
    "options": [
      {
        "id": "A",
        "text": "Latência fixa obrigatória de 45 a 60 minutos entre o toque e a vibração."
      },
      {
        "id": "B",
        "text": "Mais de 24 horas, pois os dados precisam ser validados em um cartório digital."
      },
      {
        "id": "C",
        "text": "Latência na faixa de dezenas de milissegundos (praticamente imperceptível ao usuário humano)."
      },
      {
        "id": "D",
        "text": "Exatamente zero segundos, pois as ondas de rádio viajam no tempo para o passado."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Trocas de pacotes UDP/TCP em redes locais Wi-Fi 802.11 ocorrem em milissegundos, disparando a vibração de forma quase instantânea.",
    "technicalTip": "Baixa latência em rede local (<100ms)."
  },
  {
    "id": 44,
    "category": "Eletrônica e Hardware",
    "question": "Por que a carcaça da pulseira deve manter o Motor Vibracall firmemente apoiado contra a face interna do dispositivo?",
    "options": [
      {
        "id": "A",
        "text": "Para evitar que o motor respire o oxigênio do ambiente e oxide a carcaça."
      },
      {
        "id": "B",
        "text": "Para resfriar o pino de terra (GND) da bateria Li-Po."
      },
      {
        "id": "C",
        "text": "Para não deixar a luz da tela vazar para o exterior."
      },
      {
        "id": "D",
        "text": "Para maximizar a transferência da energia mecânica de vibração diretamente para o tecido da pele do pulso."
      }
    ],
    "correctAnswer": "D",
    "explanation": "A eficácia da estimulação tátil depende do contato mecânico direto; folgas atenuam a amplitude da vibração percebida na pele.",
    "technicalTip": "Acoplamento mecânico direto para máxima percepção tátil."
  },
  {
    "id": 45,
    "category": "Conectividade Wi-Fi",
    "question": "Por que o ESP32-C3 SuperMini do transmissor também possui a capacidade de criar a rede \"Vibeell\"?",
    "options": [
      {
        "id": "A",
        "text": "Porque ele também precisa ser configurado para se conectar à mesma rede Wi-Fi da casa caso a rede mude."
      },
      {
        "id": "B",
        "text": "Para tocar músicas natalinas no portão durante o inverno."
      },
      {
        "id": "C",
        "text": "Apenas para gastar a memória flash restante do microcontrolador."
      },
      {
        "id": "D",
        "text": "O transmissor não cria essa rede, apenas a pulseira receptora a cria."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tanto o transmissor quanto o receptor operam com o mesmo princípio de conectividade: se perderem a rede, precisam do portal para reconfiguração.",
    "technicalTip": "Capacidade de configuração presente em ambas as pontas do sistema."
  },
  {
    "id": 46,
    "category": "Eletrônica e Hardware",
    "question": "Qual grandeza elétrica é expressa em \"Ohms\" (Ω) no circuito de acionamento do VIBEELL e qual componente a representa?",
    "options": [
      {
        "id": "A",
        "text": "Capacidade de carga, representada pela Bateria Li-Po."
      },
      {
        "id": "B",
        "text": "Resistência elétrica, representada pelo Resistor de polarização de base."
      },
      {
        "id": "C",
        "text": "Frequência de rádio, representada pela antena do ESP32-C3."
      },
      {
        "id": "D",
        "text": "Rotação mecânica por minuto, representada pelo motor Vibracall."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A unidade Ohm (Ω) mede a oposição à passagem da corrente elétrica, exercida pelo resistor de base.",
    "technicalTip": "Resistência elétrica em Ohms (Ω) = Resistor."
  },
  {
    "id": 47,
    "category": "Projeto ETERJ",
    "question": "Quem orientou cientificamente e tecnicamente os alunos da turma 1121 no desenvolvimento do VIBEELL?",
    "options": [
      {
        "id": "A",
        "text": "Professor Alberto Santos Dumont."
      },
      {
        "id": "B",
        "text": "Professora Ada Lovelace."
      },
      {
        "id": "C",
        "text": "Professora Orientadora Tacila Vanessa."
      },
      {
        "id": "D",
        "text": "Professora Marie Curie."
      }
    ],
    "correctAnswer": "C",
    "explanation": "A professora Tacila Vanessa foi a orientadora responsável pelo projeto na ETERJ.",
    "technicalTip": "Orientadora: Professora Tacila Vanessa."
  },
  {
    "id": 48,
    "category": "Lógica de Acionamento",
    "question": "Qual é o papel da programação gravada na memória flash dos microcontroladores ESP32-C3 do VIBEELL?",
    "options": [
      {
        "id": "A",
        "text": "Apenas exibir um contador de visitas em um monitor externo ligado por cabo HDMI."
      },
      {
        "id": "B",
        "text": "Armazenar arquivos pesados de música para o usuário ouvir no fone de ouvido."
      },
      {
        "id": "C",
        "text": "Calcular a órbita de satélites meteorológicos em tempo real."
      },
      {
        "id": "D",
        "text": "Executar o controle de rede, gerenciar o portal cativo, monitorar o botão no transmissor e acionar o driver do motor no receptor."
      }
    ],
    "correctAnswer": "D",
    "explanation": "O firmware controla toda a lógica do produto: rede, leitura de pinos, protocolos de comunicação e temporizações de acionamento.",
    "technicalTip": "Firmware: inteligência e controle de hardware do projeto."
  },
  {
    "id": 49,
    "category": "Eletrônica e Hardware",
    "question": "Como se dá a passagem de corrente elétrica no circuito receptor quando o transistor NPN satura?",
    "options": [
      {
        "id": "A",
        "text": "A corrente sai do polo positivo da bateria, atravessa o motor Vibracall, entra pelo Coletor do transistor e sai pelo Emissor até o GND."
      },
      {
        "id": "B",
        "text": "A corrente sai do GND, passa pelo Diodo, entra no Push Button e volta para a tomada da casa."
      },
      {
        "id": "C",
        "text": "A corrente sai da antena Wi-Fi, atravessa o resistor e descarrega no ar."
      },
      {
        "id": "D",
        "text": "A corrente flui em círculo exclusivamente dentro do módulo TP4056 sem chegar ao motor."
      }
    ],
    "correctAnswer": "A",
    "explanation": "O circuito fecha do VCC da bateria -> motor -> Coletor -> Emissor -> GND, energizando o motor.",
    "technicalTip": "Malha de condução: Bateria (+) -> Motor -> Coletor -> Emissor -> GND."
  },
  {
    "id": 50,
    "category": "Lógica de Acionamento",
    "question": "Considerando a arquitetura completa do projeto VIBEELL, qual afirmação sintetiza com rigor técnico o seu funcionamento?",
    "options": [
      {
        "id": "A",
        "text": "Dois Arduinos Uno comunicam-se por cabos blindados; o botão aciona diretamente um motor Vibracall de 220V sem auxílio de transistores, usando pilhas alcalinas descartáveis e rede Bluetooth estática."
      },
      {
        "id": "B",
        "text": "Dois ESP32-C3 SuperMini comunicam-se via Wi-Fi; ao pressionar o botão da campainha, a pulseira satura um transistor que aciona um motor Vibracall com diodo flyback, alimentado por bateria Li-Po com carga via TP4056, permitindo reconfiguração pela rede \"Vibeell\"."
      },
      {
        "id": "C",
        "text": "Um único ESP32 centralizado controla uma sirene de 100 dB na porta e lâmpadas piscantes nos quartos, sem utilizar componentes vestíveis ou motores mecânicos."
      },
      {
        "id": "D",
        "text": "O transmissor envia sinais por rádio AM analógico para uma pulseira sem microcontrolador que funciona exclusivamente com energia solar direta."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Essa descrição abrange todos os pilares do VIBEELL: os 2 ESP32-C3 SuperMini, push button, transistor + diodo flyback + motor vibracall, bateria Li-Po + TP4056 USB-C, rede Wi-Fi e rede configurável \"Vibeell\".",
    "technicalTip": "Síntese arquitetural completa do projeto VIBEELL."
  }
];
