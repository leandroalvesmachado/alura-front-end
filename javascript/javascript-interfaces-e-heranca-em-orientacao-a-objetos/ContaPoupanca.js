export class ContaPoupanca {
    
    constructor(saldoInicial, cliente, agencia) {
        // iniciando atributos com a convenção de atributo privado
        // usar acessores para acessar os atributos privados
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
}