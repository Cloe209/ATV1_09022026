class Funcionario{
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }


    getNome() {
        return this.nome
    }

    getCargo() {
        return this.cargo
    }

    getSalario() {
        return this.salario
    }

    setSalario(valor) {
        this.salario = valor
    }

}

const funcionario = new Funcionario("Clara Cloe", "Atriz");

funcionario.setSalario(100000)
console.log(funcionario.setSalario())

