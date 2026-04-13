// POO: Class,Métodos, Atributos (Private/Public)
// POO: Herança, Polimorfismo

class Funcionario{
    constructor(nome, cpf, matricula, salarioBase) {
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
    }
}

class FuncionarioCLT extends Funcionario {
    calcularSalario() {
        return this.salarioBase * 0.9
    }
}

class FuncionarioPJ extends Funcionario {

    constructor(nome, cpf, salarioBase, matricula, rg, isPj) {
        super(nome, cpf, salarioBase, matricula, rg)
        this.isPj = isPj;
    }

    calcularSalario() {
        return this.salarioBase;
    }
}

class Estagiario extends Funcionario {
    calcularSalario() {
        return this.salarioBase * 0.8;
    }
}


const funcionarioCLT = new FuncionarioCLT("Math", "111", "000001", 1000, "444");
const funcionarioPJ = new FuncionarioPJ("Luiz", "222", "000002", 1000, "555");
const estagiario = new Estagiario("Camargo", "333", "000003", 1000, "777");

console.log(funcionarioCLT)
console.log(funcionarioPJ)
console.log(estagiario)
