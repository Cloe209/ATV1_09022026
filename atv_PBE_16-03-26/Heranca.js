class Veiculo {
    constructor(marca, modelo, ano, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
    }

    acelerar(valor){
        this.velocidade += valor
    }

    frear(valor) {
        this.velocidade -= valor
    }

    exibirInformacoes(){
        return `Exibindo informações do Veiculo 7: a marca é ${this.marca}, o modelo é ${this.modelo}, o ano é ${this.ano} e a velocidade em km/h é ${this.velocidade}`
    }
}

class Caminhao extends Veiculo{
    constructor(marca, modelo, ano, velocidade, capacidadeCarga, quantidadeEixos) {
        super(marca, modelo, ano, velocidade)
        this.capacidadeCarga = capacidadeCarga;
        this.quantidadeEixos = quantidadeEixos;
    }

    carregarCarga(peso) {
        this.capacidadeCarga -= peso
        console.log(`O caminhão 7 está carregando. sua capacidade ainda é de ${this.capacidadeCarga}Kg`) 
    }

    descarregarCarga(peso) {
        this.capacidadeCarga += peso
        console.log(`A carga descarregada do caminhão z é ${this.capacidadeCarga}kg`)
    }
}

let Veiculo1 = new Veiculo("Camaro", "Bumblebee", 2015, 0)
let Veiculo2 = new Veiculo("TopKick C4500", "Picape", 2014, 0)
let Veiculo3 = new Veiculo("Mercedez", "Sedan", 2015, 0)
let Veiculo4 = new Veiculo("Porsche", "Porsche 911", 2011, 0)

let Caminhao1 = new Caminhao("Mercedez", "Mercedez=-Benz L113", 2015, 0, 5000, 4)
// let Caminhao2 = new Caminhao("Scania", "Scania R450/R540", 2018)
// let Caminhao3 = new Caminhao("Volkswagen/MAN", "Constellation25.480", 2020)
// let Caminhao4 = new Caminhao("Freightliner COE ", "Optimus Prime", 1987)

Caminhao1.carregarCarga(1000)
Caminhao1.descarregarCarga(500)
Veiculo1.acelerar(20)
Veiculo1.frear(15)