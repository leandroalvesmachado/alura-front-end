console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// [ 'Salvador', 'São Paulo', 'Rio de Janeiro' ]
console.log(listaDeDestinos);

// adiciona um item ao array
listaDeDestinos.push(`Curitiba`);

// [ 'Salvador', 'São Paulo', 'Rio de Janeiro', 'Curitiba' ]
console.log(listaDeDestinos);

// remover item da lista
// deleta a partir da posicao passada e a quantidade tb
// splice(1, 1) = comeca a partir da posicao 1 do array e deleta 1 elemento
// array comeca do 0
listaDeDestinos.splice(1, 1);

// [ 'Salvador', 'São Paulo', 'Rio de Janeiro', 'Curitiba' ]
console.log(listaDeDestinos);

// Rio de Janeiro
console.log(listaDeDestinos[1]);