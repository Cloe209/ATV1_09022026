class Livro {
    constructor(titulo, autor, anoPublicacao, numeroPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.numeroPaginas = numeroPaginas;
    }

    getTitulo() {
        return this.titulo;
    }

    getAutor() {
        return this.autor;
    }
}

const Livro1 = new Livro("Mentirosos", "E. lockhart", 2014, 272);
const Livro2 = new Livro("Morre Aqui", "Abigail Haas", 2023, 288);

console.log(Livro1)
console.log(Livro2)