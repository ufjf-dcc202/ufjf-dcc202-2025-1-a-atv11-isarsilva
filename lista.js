let lista = ["Um", "Dois", "Três"];

export function getLista() {
  return [...lista]; 
}

export function adicionaNaLista(item) {
  lista.push(item);
  return true;
}

export function removeDaLista(posicao) {
  if (posicao >= 0 && posicao < lista.length) {
    lista.splice(posicao, 1);
    return true;
  }
  return false;
}

export function limpaLista() {
  lista = [];
  return true;
}
