const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "É possível uma música ajudar a combater o Racismo? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmação: ["A música sempre foi um dos recursos mais utilizados para denunciar o racismo",
                    ""
            ]
            },
            {
                texto: "Não.",
                afirmação: "A música acaba piorando o Racismo"
            }
        ]
    },
    {
        enunciado: "Os cantores discriminam seus fãs?E se Sim eles se Responsabilizam por isso? ",
        alternativas: [
            {
                texto: "Não.",
                afirmação: "Os cantores demonstra respeito ao seus fãs"
            },
            {
                texto: "Sim.",
                afirmação: "Eles não demonstra Respeito aos seus fãs"
            }
        ]
    },
    {
        enunciado: "As pessoas ajuda ou dá auxílio no resgates aos animais extintos? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmação: "Muitas pessoas ajudam no resgate, tanto doando como se voluntariando"
            },
            {
                texto: "Não.",
                afirmação: "Muitas pessoas ajudam na extinção deles por meio do abuso animal"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatoria (lista){
    const posicao = Math.random()*lista.length
}

mostraPergunta();
