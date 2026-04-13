class Produtos {
    constructor(nome, categoria, preco, estoque) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.estoque = estoque;
    }

    getNome(nome) {
        return this.nome;
    }

    getPreco(preco) {
        return this.preco;
    }
}

const Produtos1 = new Produtos("Iphone 16 PRO", "Eletrônico", 5980, 7);

console.log(Produtos1)