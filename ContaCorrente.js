import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    ag;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }

    _saldo = 0;
    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        //if(valor > 0){
        //  this._saldo += valor;}
        //antes o código estava assim, porém utilizamos
        // a boa prática do early return que faz com q primeiro
        // vemos as coisas q n queremos e já aplicamos o 
        // comando return dps sim executamos oq queremos
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}