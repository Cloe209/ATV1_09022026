class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        return `Veiculo ligado`
    }

    desligar() {
        return `Veiculo desligado`
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano,numeroPortas) {
        super(marca, modelo, ano)
        this.numeroPortas = numeroPortas;
    }

    abrirPortas() {
        return `Portas abertas`
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano)
        this.cilindradas = cilindradas;
    }

    empinar() {
        return `Moto empinando`
    }
}

const veiculo = new Veiculo("BMW", "X6", 2027);
const carro = new Carro("BMW", "320i", 2025, 2);
const moto = new Moto("Honda", "Biz", 2026, 500);

console.log(veiculo, carro, moto)