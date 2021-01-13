import { carregaTarefa } from './carregaTarefa.js';
import BotaoConClui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';

export const handleNovoItem = (evento) => {
    // evitar o comportamento padrao do botão
    // no caso evitar o refresh após clica no botão submit
    evento.preventDefault();

    // recuperando as tarefas do localStorage
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');
    const concluida = false;
    const dados = {
        valor,
        dataFormatada,
        concluida
    };

    const tarefasAtualizadas = [...tarefas, dados];

    // armazena dados na sessão, se fechar o navegador ou abrir em uma nova aba, os dados se perdem
    // sessionStorage.setItem('tarefas', JSON.stringify(dados));

    // mantem os dados mesmo se o navegador fechar
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

    input.value = '';

    carregaTarefa();
};

export const Tarefa = ({ valor, dataFormatada, concluida }) => {
    const tarefa = document.createElement('li');
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;

    if (concluida) {
        tarefa.classList.add('done');
    }

    tarefa.classList.add('task');
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConClui());
    tarefa.appendChild(BotaoDeleta());
    
    return tarefa;
};