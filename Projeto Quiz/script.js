const questions = {
    programacao: [
        // Perguntas fáceis - Programação
        {
            difficulty: "facil",
            question: "Qual linguagem é usada para estilizar páginas web?",
            choices: ["HTML", "CSS", "JavaScript", "Python"],
            correctAnswer: 1
        },
        {
            difficulty: "facil",
            question: "Qual é a tag HTML usada para títulos de diferentes tamanhos?",
            choices: ["<h1> até <h6>", "<p>", "<title>", "<header>"],
            correctAnswer: 0
        },
        {
            difficulty: "facil",
            question: "O que significa 'CSS'?",
            choices: ["Cascading Style Sheets", "Creative Style Syntax", "Computer Styling System", "Code Styling Sheets"],
            correctAnswer: 0
        },
        {
            difficulty: "facil",
            question: "Qual das seguintes é uma linguagem de marcação?",
            choices: ["Python", "CSS", "HTML", "JavaScript"],
            correctAnswer: 2
        },
        {
            difficulty: "facil",
            question: "O que é HTML?",
            choices: ["Uma linguagem de marcação", "Um banco de dados", "Um protocolo", "Uma linguagem de programação"],
            correctAnswer: 0
        },
        {
            difficulty: "facil",
            question: "Qual é a tag HTML usada para inserir uma imagem?",
            choices: ["<image>", "<img>", "<src>", "<picture>"],
            correctAnswer: 1
        },
        {
            difficulty: "facil",
            question: "Qual é a extensão de um arquivo HTML?",
            choices: [".htm", ".html", ".hmtl", ".htlm"],
            correctAnswer: 1
        },
        {
            difficulty: "facil",
            question: "O que é um atributo HTML?",
            choices: ["Uma propriedade de uma tag", "Uma função", "Um estilo CSS", "Um código JavaScript"],
            correctAnswer: 0
        },
        {
            difficulty: "facil",
            question: "Qual é o significado da tag <br>?",
            choices: ["Linha nova", "Quebra de linha", "Negrito", "Nova página"],
            correctAnswer: 1
        },
        {
            difficulty: "facil",
            question: "O que é uma variável?",
            choices: ["Um valor fixo", "Um valor que pode mudar", "Uma função", "Uma constante"],
            correctAnswer: 1
        },
        // Perguntas médias - Programação
        {
            difficulty: "medio",
            question: "O que significa 'POO' na programação?",
            choices: ["Programação Orientada a Objetos", "Padrões Orientados ao Objeto", "Processamento Opcional de Objetos", "Procedimento Otimizado de Operações"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "Qual é a estrutura básica de uma página HTML?",
            choices: ["<html><body></body></html>", "<head><footer></footer></head>", "<header><main></main><footer></footer>", "<div><span></span></div>"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "Como declaramos uma variável em JavaScript?",
            choices: ["var nome = 'valor';", "let nome -> 'valor';", "const nome = valor;", "string nome = 'valor';"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "Qual é a sintaxe correta para incluir um arquivo CSS?",
            choices: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css href='style.css'>", "<stylesheet='style.css'>"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "O que é um loop 'for'?",
            choices: ["Um tipo de variável", "Uma instrução condicional", "Uma estrutura de repetição", "Um tipo de função"],
            correctAnswer: 2
        },
        {
            difficulty: "medio",
            question: "Como chamamos uma função em JavaScript?",
            choices: ["call function", "function()", "myFunction()", "start function"],
            correctAnswer: 2
        },
        {
            difficulty: "medio",
            question: "Qual operador lógico representa 'ou'?",
            choices: ["&&", "||", "==", "!="],
            correctAnswer: 1
        },
        {
            difficulty: "medio",
            question: "Qual dos seguintes é um exemplo de evento JavaScript?",
            choices: ["onClick", "forEach", "getElementById", "addEventListener"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "Como se cria um comentário em CSS?",
            choices: ["// comentário", "<!-- comentário -->", "/* comentário */", "-- comentário"],
            correctAnswer: 2
        },
        {
            difficulty: "medio",
            question: "Qual é o propósito da propriedade 'display: flex' no CSS?",
            choices: ["Aplicar um efeito de flexão ao texto", "Definir uma flexbox para o layout", "Tornar o elemento flexível", "Definir um background flexível"],
            correctAnswer: 1
        },
        // Perguntas difíceis - Programação
        {
            difficulty: "dificil",
            question: "Qual das seguintes não é uma linguagem de programação?",
            choices: ["Ruby", "Python", "CSS", "Java"],
            correctAnswer: 2
        },
        {
            difficulty: "dificil",
            question: "O que significa 'closure' em JavaScript?",
            choices: ["Uma função dentro de outra função", "Uma variável fora do escopo global", "Uma função que retorna outra função", "Um conceito de encapsulamento"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "Qual é o nome do padrão de design que permite a criação de objetos sem especificar a classe exata do objeto?",
            choices: ["Factory", "Singleton", "Observer", "Builder"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "Em CSS, o que faz o valor 'auto' para a propriedade 'margin'?",
            choices: ["Define margens iguais para todos os lados", "Centraliza o elemento horizontalmente", "Define margens automáticas baseadas no conteúdo", "Remove todas as margens"],
            correctAnswer: 1
        },
        {
            difficulty: "dificil",
            question: "Qual é o propósito do método 'map()' em arrays no JavaScript?",
            choices: ["Transformar cada elemento do array", "Iterar sobre o array", "Filtrar os elementos do array", "Retornar o comprimento do array"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "Qual é o tipo de dados do valor 'NaN' em JavaScript?",
            choices: ["Undefined", "Number", "String", "Object"],
            correctAnswer: 1
        },
        {
            difficulty: "dificil",
            question: "Qual é o propósito da função 'reduce()' em JavaScript?",
            choices: ["Somar todos os valores de um array", "Filtrar os valores de um array", "Transformar os valores de um array", "Acumular um único valor baseado no array"],
            correctAnswer: 3
        },
        {
            difficulty: "dificil",
            question: "Qual é o papel do 'service worker' em uma aplicação web?",
            choices: ["Servir os arquivos estáticos", "Melhorar a performance da rede", "Gerenciar o cache e atuar offline", "Monitorar o desempenho da aplicação"],
            correctAnswer: 2
        },
        {
            difficulty: "dificil",
            question: "Qual método é usado para adicionar um item ao final de um array em JavaScript?",
            choices: ["push()", "pop()", "unshift()", "concat()"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "O que faz a propriedade 'position: sticky' no CSS?",
            choices: ["Fixa o elemento no topo da página", "Torna o elemento fixo na posição original durante o scroll", "Permite que o elemento se mova enquanto estiver visível", "Posiciona o elemento de forma relativa ao seu elemento pai"],
            correctAnswer: 1
        }
    ],
    tecnologia: [
        // Perguntas fáceis - Tecnologia
        {
            difficulty: "facil",
            question: "Qual é o navegador padrão do Windows?",
            choices: ["Chrome", "Firefox", "Edge", "Safari"],
            correctAnswer: 2
        },
        {
            difficulty: "facil",
            question: "Qual empresa fabrica o iPhone?",
            choices: ["Samsung", "Apple", "Google", "Microsoft"],
            correctAnswer: 1
        },
        {
            difficulty: "facil",
            question: "Qual dos seguintes é um dispositivo de armazenamento?",
            choices: ["Monitor", "Teclado", "Disco Rígido", "Mouse"],
            correctAnswer: 2
        },
        {
            difficulty: "facil",
            question: "O que significa Wi-Fi?",
            choices: ["Wireless Fidelity", "Wide Field", "Web Fast", "Wireless Fiber"],
            correctAnswer: 0
        },
        {
            difficulty: "facil",
            question: "Qual é o sistema operacional mais utilizado no mundo?",
            choices: ["Windows", "macOS", "Linux", "Android"],
            correctAnswer: 0
        },
        {
            difficulty: "facil",
            question: "Qual dos seguintes é um software antivírus?",
            choices: ["Photoshop", "Avast", "Microsoft Word", "Chrome"],
            correctAnswer: 1
        },
        {
            difficulty: "facil",
            question: "O que é um smartphone?",
            choices: ["Um dispositivo inteligente portátil", "Um tipo de servidor", "Um programa de computador", "Uma interface de rede"],
            correctAnswer: 0
        },
        {
            difficulty: "facil",
            question: "Qual das seguintes é uma linguagem de programação popular para aplicativos móveis?",
            choices: ["Swift", "C#", "Ruby", "PHP"],
            correctAnswer: 0
        },
        {
            difficulty: "facil",
            question: "O que é 'bluetooth'?",
            choices: ["Uma tecnologia de rede sem fio", "Um navegador de internet", "Um software de edição", "Um tipo de vírus"],
            correctAnswer: 0
        },
        {
            difficulty: "facil",
            question: "Qual dos seguintes dispositivos é um periférico de entrada?",
            choices: ["Monitor", "Teclado", "Impressora", "Alto-falante"],
            correctAnswer: 1
        },

        // Perguntas médias - Tecnologia
        {
            difficulty: "medio",
            question: "Qual é o sistema operacional open-source mais popular?",
            choices: ["Windows", "macOS", "Linux", "Android"],
            correctAnswer: 2
        },
        {
            difficulty: "medio",
            question: "O que significa 'IoT' em tecnologia?",
            choices: ["Internet of Things", "Input of Technology", "Interface of Technology", "Information of Tools"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "Qual é o papel de um 'router' na rede?",
            choices: ["Fazer backup de arquivos", "Armazenar dados", "Direcionar o tráfego da rede", "Proteger contra vírus"],
            correctAnswer: 2
        },
        {
            difficulty: "medio",
            question: "O que é uma VPN?",
            choices: ["Virtual Private Network", "Visual Private Node", "Virtual Public Network", "Visual Public Network"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "Qual é o tamanho mínimo para armazenamento de dados?",
            choices: ["Bit", "Byte", "Kilobyte", "Megabyte"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "O que é 'Big Data'?",
            choices: ["Uma grande quantidade de dados processados", "Um banco de dados grande", "Um servidor de internet", "Um dispositivo de armazenamento"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "Qual é a função do protocolo HTTP?",
            choices: ["Transferir dados entre clientes e servidores na web", "Proteger dados", "Executar software", "Gerenciar dispositivos de rede"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "Qual linguagem é amplamente usada para scripts de automação?",
            choices: ["Python", "PHP", "C++", "Java"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "O que é a computação em nuvem?",
            choices: ["Armazenar e acessar dados pela internet", "Uma tecnologia para redes locais", "Software de edição", "Backup automático de arquivos"],
            correctAnswer: 0
        },
        {
            difficulty: "medio",
            question: "O que significa RAM?",
            choices: ["Random Access Memory", "Read Access Memory", "Real Allocation Memory", "Remote Access Memory"],
            correctAnswer: 0
        },

        // Perguntas difíceis - Tecnologia
        {
            difficulty: "dificil",
            question: "Qual empresa criou o processador M1?",
            choices: ["Intel", "AMD", "Apple", "Qualcomm"],
            correctAnswer: 2
        },
        {
            difficulty: "dificil",
            question: "Qual é o propósito do protocolo HTTPS?",
            choices: ["Proteger a comunicação na web", "Aumentar a velocidade de carregamento", "Gerenciar cookies", "Armazenar dados locais"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "O que é um 'servidor DNS'?",
            choices: ["Um serviço que converte nomes de domínio em endereços IP", "Um servidor de hospedagem", "Um protocolo de segurança", "Uma tecnologia de nuvem"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "Qual é o principal objetivo de um 'firewall'?",
            choices: ["Proteger a rede de acessos não autorizados", "Aumentar a largura de banda", "Monitorar o uso da CPU", "Gerenciar o armazenamento em disco"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "O que significa 'Machine Learning'?",
            choices: ["Aprendizado de máquinas por meio de dados", "Gerenciamento de máquinas remotas", "Desenvolvimento de hardware inteligente", "Um protocolo de comunicação"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "Qual é o papel de um 'proxy' na rede?",
            choices: ["Intermediar solicitações entre o cliente e o servidor", "Monitorar dados da rede", "Proteger arquivos", "Redirecionar pacotes de dados"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "O que é uma 'rede mesh'?",
            choices: ["Uma rede que se auto-organiza", "Uma rede ponto a ponto", "Uma rede dedicada", "Uma tecnologia de backup"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "O que significa o termo 'overclock' em tecnologia?",
            choices: ["Aumentar a velocidade de um componente de hardware além de sua capacidade normal", "Reduzir a frequência da CPU", "Gerenciar a carga do processador", "Backup automático de dados"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "O que é 'Deep Learning'?",
            choices: ["Um ramo do aprendizado de máquina focado em redes neurais profundas", "Um protocolo de segurança avançado", "Um sistema operacional especializado", "Uma tecnologia de cloud computing"],
            correctAnswer: 0
        },
        {
            difficulty: "dificil",
            question: "Qual é a função do 'Blockchain'?",
            choices: ["Proteger transações digitais de forma descentralizada", "Armazenar dados localmente", "Gerenciar redes de internet", "Criar cópias de segurança"],
            correctAnswer: 0
        }
    ]
};

// Função para selecionar as perguntas baseadas na categoria e na dificuldade
function getQuestionsByCategoryAndDifficulty(category, difficulty) {
    return questions[category].filter(question => question.difficulty === difficulty);
}


let currentQuestionIndex = 0;
let currentCategory = "programacao";
let currentDifficulty = "facil";
let score = 0;
let timer;
let timeLeft = 15;
let totalTime = 0;

function startQuiz() {
    currentCategory = document.getElementById("category").value;
    currentDifficulty = document.getElementById("difficulty").value;
    document.getElementById("category-select").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    loadQuestion();
    startTimer();
}

function startTimer() {
    timeLeft = 15;
    document.getElementById("time").textContent = timeLeft;
    document.getElementById("time").classList.remove("warning"); // Certifique-se de remover a classe de aviso antes de começar
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        // Começar a piscar em vermelho quando o tempo chega a 5 segundos
        if (timeLeft === 5) {
            document.getElementById("time").classList.add("warning");
        }

        // Parar o timer e mostrar aviso quando atingir 0
        if (timeLeft === 0) {
            clearInterval(timer);
            document.getElementById("time").classList.remove("warning"); // Remove a classe de aviso // Mensagem de aviso
            checkAnswer(-1); // Considera como resposta incorreta
        }
    }, 1000);
}





function loadQuestion() {
    const filteredQuestions = questions[currentCategory].filter(q => q.difficulty === currentDifficulty);
    const question = filteredQuestions[currentQuestionIndex];

    document.getElementById("question").textContent = question.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.onclick = () => checkAnswer(index);
        choicesContainer.appendChild(button);
    });

    document.getElementById("feedback").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    document.getElementById("question-timer").classList.remove("blink"); // Remover a animação ao verificar a resposta

    const filteredQuestions = questions[currentCategory].filter(q => q.difficulty === currentDifficulty);
    const question = filteredQuestions[currentQuestionIndex];

    const feedback = document.getElementById("feedback");
    const choicesButtons = document.querySelectorAll(".choice");

    // Verifica a resposta
    if (selectedIndex === question.correctAnswer) {
        score++;
        feedback.textContent = "Correto!";
        feedback.style.color = "green";
    } else if (selectedIndex === -1) {
        feedback.textContent = "Tempo esgotado! A resposta correta é: " + question.choices[question.correctAnswer];
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Errado! A resposta correta é: " + question.choices[question.correctAnswer];
        feedback.style.color = "red";
    }

    // Desabilita todos os botões de resposta após a verificação
    choicesButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === question.choices[question.correctAnswer]) {
            button.classList.add("correct"); // Adiciona classe para acerto
        } else if (button === choicesButtons[selectedIndex]) {
            button.classList.add("wrong"); // Adiciona classe para erro
        }
    });

    feedback.classList.remove("hidden");
    document.getElementById("next-btn").classList.remove("hidden");

    // Se o tempo foi esgotado, espera um segundo antes de passar para a próxima pergunta
    if (selectedIndex === -1) {
        setTimeout(nextQuestion, 3000); // Espera 1 segundo antes de ir para a próxima pergunta
    }
}


function nextQuestion() {
    currentQuestionIndex++;
    const filteredQuestions = questions[currentCategory].filter(q => q.difficulty === currentDifficulty);
    
    if (currentQuestionIndex < filteredQuestions.length) {
        loadQuestion();
        startTimer();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    // Calcular o percentual de acertos
    const totalQuestions = currentQuestionIndex;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    // Mensagem de feedback
    let feedbackMessage;
    if (percentage === 100) {
        feedbackMessage = "Excelente trabalho! Você acertou todas as perguntas!";
    } else if (percentage >= 75) {
        feedbackMessage = "Muito bem! Você teve um ótimo desempenho!";
    } else if (percentage >= 50) {
        feedbackMessage = "Bom trabalho! Você pode melhorar ainda mais!";
    } else {
        feedbackMessage = "Não desista! Tente novamente para melhorar sua pontuação.";
    }

    document.getElementById("score").innerHTML = `
        Sua pontuação: ${score}/${totalQuestions} <br>
        Percentual de acertos: ${percentage}% <br>
        ${feedbackMessage}
    `;

    // Exiba o timer
    document.getElementById("final-timer").classList.remove("hidden");

    // Inicie o timer na tela final
    startFinalTimer(10); // Inicia com 10 segundos
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("category-select").classList.remove("hidden");
}
