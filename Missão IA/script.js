const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado"); // CORRIGIDO: Seleciona o parágrafo interno correto

const perguntas = [
    {
        enunciado: "Qual das afirmações explica melhor a desigualdade social?",
        alternativas: [  
            {
                texto: "Ela decorre da distribuição desigual de recursos.", 
                afirmacao: "Você percebeu que a desigualdade social nasce da falta de oportunidades e da má distribuição de renda."
            },
            {
                texto: "Ela é determinada apenas pelo esforço individual.", 
                afirmacao: "Você tendeu a acreditar que o esforço próprio supera as barreiras do sistema econômico."
            }
        ]
    },
    {
        enunciado: "O que caracteriza o conceito de Direitos Humanos?",
        alternativas: [  
            {
                texto: "Eles são válidos para todos os indivíduos.",
                afirmacao: "Defendeu que a dignidade humana deve ser universal e protegida acima de tudo."
            },
            {
                texto: "Eles mudam conforme o governo de cada país.", 
                afirmacao: "Considerou que as leis e direitos dependem fortemente do contexto político local."
            }
        ]
    },
    {
        enunciado: "Qual é o foco principal da inclusão digital?",
        alternativas: [
            {
                texto: "Garantir acesso à internet e capacitação tecnológica.", 
                afirmacao: "Apoiou a ideia de que a tecnologia deve ser uma ferramenta democrática de inclusão."
            },
            {
                texto: "Reduzir o tempo de uso de telas na infância.", 
                afirmacao: "Focou na preocupação com o bem-estar mental e o impacto das telas no cotidiano."
            }
        ]
    },
    {
        enunciado: "Como a sustentabilidade social se manifesta nas cidades?",
        alternativas: [
            {
                texto: "Pelo acesso igualitário a saneamento e saúde.", 
                afirmacao: "Priorizou a infraestrutura básica e a saúde pública como direitos essenciais de todos."
            },
            {
                texto: "Pelo crescimento urbano sem planejamento habitacional.", 
                afirmacao: "Observou que a falta de planejamento urbano dita o ritmo das grandes cidades."
            }
        ]
    },
    {
        enunciado: "O que define o conceito de desemprego estrutural?",
        alternativas: [
            {
                texto: "É a falta de vagas por crises econômicas temporárias.",
                afirmacao: "Previu um futuro onde as crises financeiras cíclicas moldam o mercado de trabalho."
            },
            {
                texto: "É a substituição da mão de obra por novas tecnologias.", 
                afirmacao: "Alertou sobre o avanço tecnológico substituindo funções humanas de forma definitiva."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao; 
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal; // CORRIGIDO: Insere o texto dentro do parágrafo formatado
    caixaAlternativas.textContent = "";
}

mostraPergunta();
