// componente BotaoConclui
const BotaoConClui = () => {
    const botaoConClui = document.createElement('button');
    botaoConClui.classList.add('check-button');
    botaoConClui.innerText = 'concluir';

    botaoConClui.addEventListener('click', concluirTarefa);

    return botaoConClui;
};

// ação do componente BotaoConClui
const concluirTarefa = (evento) => {
    // saber o alvo do evento, saber quem foi clicado
    const botaoConClui = evento.target;

    // parentElement = pai do elemento
    const tarefaCompleta = botaoConClui.parentElement;

    // efeito de rabisco, riscando o nome
    // toggle retorna um boolean
    tarefaCompleta.classList.toggle('done');
};


// comportamento igual ao do JS IIEF
// transforma o arquivo js em um módulo, no caso de nome BotaoConclui
export default BotaoConClui;