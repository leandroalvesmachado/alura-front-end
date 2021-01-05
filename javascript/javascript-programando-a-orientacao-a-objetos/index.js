import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// utilizando o construtor
const cliente1 = new Cliente("leandro", 12345678910);
// cliente1.nome = "leandro";
// cliente1.cpf = 12345678910;

const cliente2 = new Cliente("alura", 12345678911);
// cliente2.nome = "alura";
// cliente2.cpf = 12345678911;

console.log(cliente2.cpf);

// utilizando o construtor
const contaCorrenteLeandro = new ContaCorrente(1001, cliente1);
// Private field '#saldo' must be declared in an enclosing class
// contaCorrenteLeandro.#saldo = 0;
// contaCorrenteLeandro.agencia = 1001;
// contaCorrenteLeandro.cliente = cliente1;

const contaCorrenteAlura = new ContaCorrente(2002, cliente2);
// contaCorrenteAlura.agencia = 2002;
// contaCorrenteAlura.cliente = cliente2;

contaCorrenteLeandro.depositar(500);

let valor = 200;
contaCorrenteLeandro.transferir(valor, contaCorrenteAlura);
console.log("\n");
console.log(contaCorrenteAlura);

// chamando o get cliente nesse caso
console.log("\n");
console.log(contaCorrenteLeandro.cliente);

// chamando o get saldo
console.log("\n");
console.log(contaCorrenteLeandro.saldo);

// contador statico para saber o numero de contas instânciadas
console.log("\n");
console.log(ContaCorrente.numeroDeContas);