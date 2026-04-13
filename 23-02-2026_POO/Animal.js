class Animal {
    // Atributos
    // CONSTRUCTOR: Método especial que é executado automaticamente
    // sempre que criamos um OBJETO, para iniciar nossos atributos.
    constructor(nome, idade, qtdPatas) {
        this.nome = nome;
        this.idade = idade;
        this.qtdPatas = qtdPatas;
    }

    
    // MÉTODOS
    emitirSom()  {
     return `O animal fez um som`
    }
}

// extends -> Cria a herança
// Herança -> Permite que uma classe herde atributos&métodos 
// de outra classe
class Girafa extends Animal {
    emitirSom() {
        return `Huuuuuung!`
    }
}


class Macaco extends Animal {
    emitirSom() {
        return `Uh Uh Ah Ah!`
    }
}

class Pantera extends Animal {
    // Método
    // Polimorfismo -> Mesmo método respondendo de maneiras
    // diferentes.
    emitirSom() {
        return `Au Au!`
    }
}

class Touro extends Animal {
    constructor(nome, idade, qtdPatas, chifres) {
        // SUPER: É o método utilizado pela nossa SUBCLASSE,
        // para se referir a CLASSE PAI.
        // Ele vai permitir que a gente reaproveite os 
        // atributos da CLASSE PAI.
        super(nome, idade, qtdPatas);
        this.chifres = chifres;
    }

    emitirSom() {
        console.log("Muuuuuh!!")
    }
}

const girafa = new Girafa("Junin", "Girafa", 5, 4);
const macaco = new Macaco("George", "Macaco", 3, 4);
const pantera = new Pantera("Baghera", "Pantera", 7, 4);
const touro = new Touro("Bandido", "Touro", 10, 4, true)

// Mesmo método (emitirSom), objetos diferentes (pantera, girafa...)
// comportamentos diferentes
console.log(pantera.emitirSom());
console.log(macaco.emitirSom());
console.log(girafa.emitirSom());
touro.emitirSom();
console.log(animal.emitirSom());
// console.log(animal.emitirSom());

