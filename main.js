import { getLista, adicionaNaLista, limpaLista } from './lista.js';

const entrada = document.getElementById('entrada');
const botaoAdicionar = document.getElementById('adicionar');
const botaoLimpar = document.getElementById('limpar');
const listaOl = document.getElementById('itens');

function atualizarLista() {
  
  listaOl.innerHTML = '';
  const itens = getLista();
  itens.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    listaOl.appendChild(li);
  });
}


atualizarLista();


botaoAdicionar.addEventListener('click', () => {
  const valor = entrada.textContent.trim();

  if (valor) {
    adicionaNaLista(valor);

    
    entrada.textContent = '';

    atualizarLista();
  }
});


botaoLimpar.addEventListener('click', () => {
  limpaLista();
  atualizarLista();
});