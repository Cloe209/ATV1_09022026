// Exemplo POO Aluno
class Aluno{
    // Atributo privado: cpf
    #cpf;
    // Atributos: nome, matricula, curso e idade
    constructor(nome, matricula, curso, idade, cpf) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        this.idade = idade;
        this.#cpf = this.cpf;
    }

    // Métodos: getNome, getMatricula
    getNome() {
        return this.nome;
    }

    getMatricula() {
        return this.nome;
    }

    getCpf(){
        return this.#cpf
    }
}

let alunos = [
    new Aluno("Cloe", "000001", "Front-End", 27, "000"),
    new Aluno("Beatriz", "000002", "Banco de Dados", 27, "020"),
    new Aluno("Gabriel", "000003", "Lógica", 27, "008"),
    new Aluno("Thuanny", "000004", "IoT", 27, "009")
]

console.log(alunos.length)
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i].getNome())
}

// Antes era Matheus, agora Testing
alunos[0].nome = "Testing";
console.log(alunos[0].nome);

alunos[3].matricula = "000004";
console.log(alunos[3].cpf)
alunos[3].cpf = "444";
console.log(alunos[3].cpf);

// Classe: É a IDEIA, MOLDE, PROJETO.
// Objeto: É o que construímos apartir do MOLDE (CLASSE)
// Métodos: São as funções que pertencem a Classe, e representam
// as ações que o objeto pode ter, executar
// Atributos: São os dados que o objeto possui.
