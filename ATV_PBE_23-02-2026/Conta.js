class ContaBancaria {
    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        return  this.saldo -= valor;
    }

    consultarSaldo() {
        return this.saldo;
    }
}

const conta = new ContaBancaria("200109", "Clara Cloe", 5000)

// CONSOLE.LOG: É só para imprimir algo, nesse caso não precisava
conta.depositar(300);
console.log(conta.consultarSaldo());
