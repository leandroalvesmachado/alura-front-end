// nodejs versão >= 13 aceita export modulos

import { Cliente } from './Cliente.js';

export class ContaCorrente {
    // atributo que não muda zera com a criação de novas instâncias
    // nesse caso um contador que sabe quantas instâncias da classe conta corrente existe
    static numeroDeContas = 0;
    agencia;
    _cliente;

    // atributo privado, não implementado oficialmente, funciona no node >= 12
    // não pode ser acessado diretamente
    // ainda não aprovado pela comunidade
    // #saldo = 0;
    // convenção utilizada pela comunidade para determinar o atributo privado
    _saldo = 0;

    // uso de acessores protege as variaveis
    // acesso somente pelo get e set
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
        // this.cliente usando o acessor set cliente, pois ja valida se é um cliente
        this.cliente = cliente;
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