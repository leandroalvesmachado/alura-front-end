import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente("leandro", 12345678910);

const contaCorrenteLeandro = new ContaCorrente(cliente1, 1001);
contaCorrenteLeandro.depositar(500);
contaCorrenteLeandro.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaCorrenteLeandro);
console.log("\n");
console.log(contaPoupanca);

