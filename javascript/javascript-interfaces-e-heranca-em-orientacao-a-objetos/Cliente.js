// nodejs versão >= 13 aceita export modulos
// funcionou na versão >= 12

export class Cliente {
    
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;   
    }

    get cpf() {
        return this._cpf;
    }
}