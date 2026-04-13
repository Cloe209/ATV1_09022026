// Encapsulamento: É controlar como os dados são acessados
// e modificados!

class Conta {
    #saldo
    constructor(saldo) {
        this.#saldo = saldo
    }

    depositar(valor) {
        if(valor > 0) {
            // +=:
            // saldo = 500;
            // saldo = 1000;
            // saldo = saldo + 500
            // O -= seria o inverso disso a cima!
            this.#saldo += valor;
        } else {
            return "Valor inválido para depósito!"
        }
    }

    sacar(valor) {
        // Valor não pode ser menor ou igual a zero, e não pode
        // ser maior que o saldo!
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            return `Saque inválido!`
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}

const conta = new Conta(1000);
conta.depositar(500);
console.log("Saldo da minha conta", conta.getSaldo());
console.log(conta.sacar(2000))