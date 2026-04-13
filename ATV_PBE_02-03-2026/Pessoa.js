class Pessoa {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar(){
        return `Ela se apresentou`
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, email, diciplina) {
        super(nome, idade, email)
        this.diciplina = diciplina;
    }

    darAula() {
        return `Eu preciso dar aula`
    }
}

class Coordenador extends Pessoa {
    constructor(nome, idade, email, setor) {
        super(nome, idade, email)
        this.setor = setor;
    }

    organizarReuniao() {
        return `Eu preciso organizar uma reunião`
    }
}

const professor = new Professor("Romildo", 47, "romildo.bsdwqiuldwjq@sjijsw.jdw");
const coordenador = new Coordenador("Tatiane", 36, "tati.dbsqil@dnwqjodl.hjl")

//TODAS AS FORMAS QUE FIZ E DEU CERTO ABAIXO
//console.log(coordenador.organizarReuniao());
//console.log(coordenador)
//console.log(professor)
//console.log(professor.darAula())