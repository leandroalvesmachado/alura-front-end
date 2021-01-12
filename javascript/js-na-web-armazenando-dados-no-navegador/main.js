import BotaoConClui from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';

const handleNovoItem = (evento) => {
    // evitar o comportamento padrao do botão
    // no caso evitar o refresh após clica no botão submit
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');

    const dados = {
        valor,
        dataFormatada
    };

    const criaTarefa = criarTarefa(dados);

    lista.appendChild(criaTarefa);
    input.value = '';
};

const criarTarefa = ({ valor, dataFormatada }) => {
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConClui());
    tarefa.appendChild(BotaoDeleta());
    
    return tarefa;
};

const novaTarefa = document.querySelector('[data-form-button]');

// função por referencia
novaTarefa.addEventListener('click', handleNovoItem);
