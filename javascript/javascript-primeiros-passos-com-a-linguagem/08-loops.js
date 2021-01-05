console.log("Trabalhando com loops");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

// Uma forma de fazer um loop
// while (contador < 3) {
//     if (listaDeDestinos[contador] == destino) {
//         destinoExiste = true;
//         break;
//     }

//     // contador++;
//     // ou
//     contador += 1;
// }

// outra forma de fazer um loop
for (let cont = 0; cont < listaDeDestinos.length; cont++) {
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
    }
}


console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe, tivemos algum erro");
}