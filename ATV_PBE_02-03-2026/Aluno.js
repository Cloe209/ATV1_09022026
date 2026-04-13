class Aluno {
    constructor(nome, matricula, notaFinal) {
        this.nome = nome;
        this.matricula = matricula;
        this.notaFinal = notaFinal;
    }

    getNome() {
        return this.nome;
    }

    getMatricula() {
        return this.matricula;
    }
    
    getNotaFinal() {
        return this.notaFinal;
    }

    setNotaFinal(valor) {
        this.notaFinal = valor;
    }

}

const aluno = new Aluno("Clara Cloe", 2009)

aluno.setNotaFinal(10);
console.log(aluno);