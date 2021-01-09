import { Cliente } from './Cliente.js';

export class Conta {
    
    constructor(saldoInicial, cliente, agencia) {
        // iniciando atributos com a convenção de atributo privado
        // usar acessores para acessar os atributos privados
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    get saldo() {
        return this._saldo;
    }

    // metodo publico chamando um metodo privado
    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    // metodo privado (convenção)
    // chamado pela propria classe somente, boas praticas
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;

            return valorSacado;
        }

        return 0;
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