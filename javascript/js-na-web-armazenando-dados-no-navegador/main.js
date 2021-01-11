import  { BotaoConClui } from './componentes/concluiTarefa.js';
import  { BotaoDeleta } from './componentes/deletaTarefa.js';

const criarTarefa = (evento) => {
    // evitar o comportamento padrao do botão
    // no caso evitar o refresh após clica no botão submit
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConClui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = '';
};

const novaTarefa = document.querySelector('[data-form-button]');

// função por referencia
novaTarefa.addEventListener('click', criarTarefa);
