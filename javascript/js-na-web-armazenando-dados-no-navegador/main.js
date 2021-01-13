import { handleNovoItem } from './componentes/criaTarefa.js';
import { carregaTarefa } from './componentes/carregaTarefa.js';

const novaTarefa = document.querySelector('[data-form-button]');

// função por referencia
novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();
