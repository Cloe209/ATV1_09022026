class Medico {
    constructor(nome, especialidade, crm) {
        this.nome = nome;
        this.especialidade = especialidade;
        this.crm = crm;
    }

    atenderPaciente() {
        return `O paciente 7 foi atendido pelo Dr.Sheperd`
    }

    emitirReceita() {
        return `Receita médica emitida pelo Dr.Sheperd para o paciente 7`
    }
}

class Paciente {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    relatarSintomas() {
        return `O paciente 9 relata dor de cabeça`
    }

    marcarConsulta(medico) {
        return `O truta marcou consulta com o Dr.Parceiro`
    }
}

const paciente7 = new Paciente("Paciente 7", 24, 111.111666-11 );
const paciente8 = new Paciente("Paciente 8", 22, 331.111666-11 );
const paciente9 = new Paciente("Paciente 9", 18, 111.119696-11 );

console.log("O paciente 7 foi atendido pelo Dr.Sheperd");
console.log("O truta marcou consulta com o Dr.Parceiro");