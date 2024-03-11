// click.js
let indiceAtual = 0;
let acertos = 0;
let numeroQuestao = 1;

const perguntas = [
    {
        pergunta: "Qual é o primeiro passo para garantir a segurança em uma cirurgia?",
        respostas: [
            "Verificar se o bisturi está afiado.",
            "Confirmar a identidade do paciente e o procedimento a ser realizado.",
            "Escolher o tipo de anestesia.",
        ],
        correta: 1
    },
    {
        pergunta: "O que é a lista de verificação de cirurgia segura?",
        respostas: [
            "Uma lista de compras para os materiais cirúrgicos.",
            "Um documento com os nomes dos profissionais envolvidos na cirurgia.",
            "Uma lista de itens essenciais a serem verificados antes, durante e após a cirurgia.",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função da equipe de cirurgia segura?",
        respostas: [
            "Preparar o paciente para a cirurgia.",
            "Realizar a cirurgia.",
            "Garantir que todos os protocolos de segurança sejam seguidos.",
        ],
        correta: 2
    },
    {
        pergunta: "O M.S. recomenda ...?",
        respostas: [
            "Antes da indução cirúrgica realizar a apresentação de cada membro da equipe pelo nome e função.",
            "Que as compressas e os instrumentos cirúrgicos devem ser contados após a saída do paciente da sala cirúrgica.",
            "O condutor da lista de verificação deve confirmar o procedimento e o local da cirurgia após a anestesia.",
        ],
        correta: 0
    },
    {
        pergunta: "Considerando a Lista de Verificação e as fases da cirurgia em que se aplica,  qual a alternativa correta?",
        respostas: [
            "Antes da indução anestésica; após a incisão cirúrgica; e antes do paciente sair da sala de cirurgia.",
            "Antes da indução anestésica; antes da incisão cirúrgica;e antes do paciente sair da sala de cirurgia.",
            "Antes da indução anestésica;antes da incisão cirúrgica; e depois do paciente sair da sala de cirurgia",
        ],
        correta: 1
    },
    {
        pergunta: "A etapa do checklist a ser realizada antes da incisão cirúrgica(time-out)consiste em:",
        respostas: [
            "Verificar se hà algum risco de perda sanguínea > 500ml.",
            "Analisar se tem risco de aspiração.",
            "Chegar se a profilaxia antimicrobiana foi realizada nos últimos 60 minutos.",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do checklist de cirurgia segura?",
        respostas: [
            "A) Registrar os materiais utilizados durante a cirurgia.",
            "B) Verificar a identidade do paciente.",
            "C) Garantir que todos os passos de segurança sejam seguidos antes, durante e após a cirurgia.",
        ],
        correta: 2,
    },
    {
        pergunta: "O que é a anestesia local?",
        respostas: [
            "A) O paciente fica completamente inconsciente durante a cirurgia.",
            "B) Apenas uma parte do corpo é anestesiada.",
            "C) O paciente recebe apenas sedação leve.",
        ],
        correta: 1,
    },

    
];



const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');
const mostrarTotal = document.querySelector('#acertos');
const respostasIncorretas = [];

function criarPergunta(indice) {
    
    const item = perguntas[indice];
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent =  numeroQuestao + ' - '  + item.pergunta;

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').value = item.respostas.indexOf(resposta);

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;
        

            if (estaCorreta) {
                acertos++;
            }else {
                respostasIncorretas.push(indice+1);
            }

            quiz.innerHTML = '';
            numeroQuestao ++;
            

            if (indiceAtual < perguntas.length - 1) {
                indiceAtual++;
                
                criarPergunta(indiceAtual);
            } else {
                mostrarTotal.textContent = 'Você acertou ' + acertos + ' de ' + perguntas.length + ' perguntas!'+ '....' + 'Você errou a pergunta com índice   '+ ':   ' + respostasIncorretas;
            }
        };

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();

    quiz.appendChild(quizItem);
}


criarPergunta(indiceAtual);

document.getElementById('back').addEventListener('click', () => {
    window.location.href = 'index.html';
});
