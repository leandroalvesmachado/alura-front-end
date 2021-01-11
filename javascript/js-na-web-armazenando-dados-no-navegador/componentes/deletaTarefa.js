// componente BotaoDeleta
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'deletar';

    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
};

// ação do componente BotaoDeleta
const deletarTarefa = (evento) => {
    // saber o alvo do evento, saber quem foi clicado
    const botaoDeleta = evento.target;

    // parentElement = pai do elemento
    const tarefaCompleta = botaoDeleta.parentElement;

    // remove o elemento li que possui o botão
    tarefaCompleta.remove();
};

// comportamento igual ao do JS IIEF
// transforma o arquivo js em um módulo, no caso de nome BotaoConclui
export default BotaoDeleta;