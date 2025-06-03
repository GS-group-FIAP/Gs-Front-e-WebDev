document.addEventListener('DOMContentLoaded',()=>{
    const elements = {
      pergunta: document.getElementById('pergunta'),
      opcoesContainer: document.getElementById('opcoes-container'),
      mensagem: document.getElementById('message'),
      containerPerguntas: document.getElementById('container-perguntas'),
      containerResultado: document.getElementById('container-resultado'),
      listaResultado: document.getElementById('lista-resultado'),
      reiniciarBotao: document.getElementById('inicio-btn')
    };

    const questoes = [
    { pergunta: "Qual é o tipo de sua moradia?",
        opcoes: ["Casa", "Apartamento", "Chácara", "Sítio"]
    },
    { pergunta: "Caso ocorra uma enchente, qual seria a sua prioridade?",
        opcoes: ["Salvar pessoas", "Salvar animais", "Proteger bens materiais", "Buscar abrigo"]
    },
    { pergunta: "Você possui um plano de evacuação?",
        opcoes: ["Sim", "Não"]
    },
    { pergunta: "Você tem um kit de emergência preparado?",
        opcoes: ["Sim", "Não"]
    },
    { pergunta: "Você tem um meio de transporte disponível?",
        opcoes: ["Sim", "Não"]
    },
    { pergunta: "Você tem um local seguro para se abrigar?",
        opcoes: ["Sim", "Não"]
    }
 ]
    let perguntaAtual = 0;
    const respostas = [];

    function mostrarPergunta() {
      elements.mensagem.textContent = '';
      if (perguntaAtual < questoes.length) {
        const questao = questoes[perguntaAtual];
        elements.pergunta.textContent = questao.pergunta;
        elements.opcoesContainer.innerHTML = '';

        questao.opcoes.forEach(opcao => {
          const btnOpcao = document.createElement('button');
          btnOpcao.classList.add('opcao-btn');
          btnOpcao.textContent = opcao;
          btnOpcao.setAttribute('type', 'button');
          btnOpcao.addEventListener('click', () => {
            selecionarResposta(opcao);
          });
          elements.opcoesContainer.appendChild(btnOpcao);
        });
      } else {
        mostrarResultado();
      }
    }

    function selecionarResposta(resposta) {
      respostas.push(resposta);
      perguntaAtual++;
      mostrarPergunta();
    }
    function mostrarResultado() {
      elements.containerPerguntas.classList.add('hidden');
      elements.containerResultado.classList.remove('hidden');
      elements.listaResultado.innerHTML = '';

      questoes.forEach((questao, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${questao.pergunta}</strong><br>Sua resposta: <span>${respostas[index]}</span>`;
        elements.listaResultado.appendChild(li);
      });
    }
    function reiniciarQuiz() {
      perguntaAtual = 0;
      respostas.length = 0;
      elements.containerResultado.classList.add('hidden');
      elements.containerPerguntas.classList.remove('hidden');
      mostrarPergunta();
    }
    elements.reiniciarBotao.addEventListener('click', reiniciarQuiz);

    mostrarPergunta();
});