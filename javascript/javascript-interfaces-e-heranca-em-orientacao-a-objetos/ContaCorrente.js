// nodejs versão >= 13 aceita export modulos
import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
    
    static numeroDeContas = 0;
    
    constructor(cliente, agencia) {
        // super nesse caso, chama o construtor da classe Conta (extendida)
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // sobrescrita (sobrescrevendo) do metodo sacar da classe mae conta
    // pois na conta corrente não se pode usar o comportamento padrão do metodo que vem do sacar da classe Conta, taxa diferente
    sacar(valor) {
        let taxa = 1.1;
        // chama o da classe pai (Conta)
        // ou return super._sacar(valor, taxa);
        return this._sacar(valor, taxa);
    }
}