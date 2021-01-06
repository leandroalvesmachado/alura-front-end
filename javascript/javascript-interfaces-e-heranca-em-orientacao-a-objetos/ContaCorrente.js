// nodejs versão >= 13 aceita export modulos

import { Cliente } from './Cliente.js';

export class ContaCorrente {
    static numeroDeContas = 0;
    
    // acessores
    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }

    // acessores
    get cliente() {
        return this._cliente;
    }

    // cliente.saldo = 10 não funciona devido não possuir o acessor set
    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }
    

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;

            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;

        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}