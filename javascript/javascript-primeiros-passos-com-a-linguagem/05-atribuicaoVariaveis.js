console.log("Trabalhando com atribuição de variáveis");

// const valo e tipor da variavel nao pode ser alterado
// const nome = "Leandro";

// let pode ser sobrescrita a variavel
let nome = "Leandro";

const sobrenome = "Machado";

// LeandroMachado
console.log(nome + sobrenome);

// Leandro Machado
console.log(nome + " " + sobrenome);

// Meu nome é Leandro Machado
// interpolacao es6+
console.log(`Meu nome é ${nome} ${sobrenome}`);

// sobrescrita da variavel nome
// Assignment to constant variable, pois foi declarada como const (valor nao pode mudar)
// variavel alterada para let, let pode ser sobrescrito
nome = nome + sobrenome;

// LeandroMachado
console.log(nome);

const nomeCompleto = nome + sobrenome;

// LeandroMachado
console.log(nomeCompleto);

let contador = 0;
contador = contador + 1;

console.log(contador);

// declarando variavel, no const nao é possivel dessa forma
// const idade = 20;
let idade;
// atribuindo valor
idade = 20;
