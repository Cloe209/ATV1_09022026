// A classe é a IDEIA, PLANTA, O PROJETO
// Sistema Bilioteca: Reservar, devolver, emprestar
class Livro {
    
    // Métodos: São as funções que pertencem a classe, 
    // e representa ações que o objeto pode executar
    reservar() {
        console.log("Livro reservado")
    }
}

// Livro1 é a variável que guarda a instância do objeto criado.
let livro1 = new Livro();
livro1.reservar();

class Cachorro {
    // Atributos: São os dados que nosso objeto possui.
    // Constructor: Método especial que ele é executado 
    // automaticamente semore que criarmos um objeto, 
    // para iniciar nossos atributos.

    // nome&idade são os parâmetros chegando no constructor.
    // Utilizamos o THIS para falar o atributo nome&idade deste
    // objeto está sendo criado.
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    latir() {
        console.log("O cachorro está latindo!")
    }
}

let dog = new Cachorro("Rex", 15);
console.log("O nome do cachorro é: ", dog.nome)
