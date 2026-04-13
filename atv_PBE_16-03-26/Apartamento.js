class Apartamento {
  constructor(numero, andar, area) {
    this.numero = numero;
    this.andar = andar;
    this.area = area;
  }

  emitirInformacoes() {
    return `O número do apartamento é ${this.numero}, seu andar é o ${this.andar}º.`;
  }
}

class Predio {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.apartamentos = [];
  }

  adicionarApartamentos(numero, andar, area) {
    this.apartamentos.push(new Apartamento(numero, andar, area));
  }

  listarApartamentos() {
    console.log("--- LISTA DE APARTAMENTOS ---");
    this.apartamentos.forEach((ap, index) => {
      console.log(ap.emitirInformacoes());
    });
  }

  totalApartamento(){
    return this.apartamentos.length
  }
}

const predio = new Predio("New York", "Rua dos Amores");

predio.adicionarApartamentos(1, 1, 500);
predio.adicionarApartamentos(2, 1, 500);
predio.adicionarApartamentos(3, 1, 500);
predio.adicionarApartamentos(4, 1, 500);

predio.listarApartamentos()
console.log(predio.totalApartamento())