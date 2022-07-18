class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo =saldo;
    }

    get saldo() {
        return this._saldo;
    }
    set salto(valor) {
        this._saldo = valor;
    }
    sacar(valor) {
        if (valor > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}
class ContaCorrente extends ContaBancaria { 
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this.cartoCredito = cartaoCredito
    }
    get cartaoCredito() {
        return this.cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia  , numero, saldo);
        this.tipo = 'universitaria';
    }
    sacar(valor) {
        if(valor > 500) {
            return 'Operação negada!';
        }
        this.saldo = this._saldo - valor;
    }
}