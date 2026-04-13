class GeradorPDF{
    constructor(nome, autor, formato, conteudo) {
        this.nome = nome;
        this.autor = autor;
        this.formato = formato;
        this.conteudo = conteudo;
    }

    gerarPDF(conteudo) {
        console.log("PDF foi gerado");
        console.log("Autor foi imprimido");
        console.log("Conteúdo imprimido")
    }

    salvarArquivo(nome) {
        console.log("O arquivo, seu nome, e formato foram salvos")
    }
}

class Relatorio {
    constructor(titulo, conteudo, dataCriacao){
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.dataCriacao = dataCriacao;
    }

    gerarConteudo() {
        return `${this.titulo} - ${this.conteudo} - ${this.dataCriacao}` 
    }

    exportarPDF(gerador) {
        const conteudo = this.gerarConteudo()
        gerador.gerarPDF(conteudo)
        gerador.salvarArquivo(this.titulo)
    }
}

const vendas = new GeradorPDF("Vendas do mês", "Clara", "PDF", "Quantidades de vendas do mês", "Doze de fevereiro");
const Financeiro = new GeradorPDF("Financiamento do mês", "Cloe", "PDF", "Quantidade de dinheiro que saiu e entrou na conta", "Doze de janeiro");
const relatorio = new Relatorio("Faltas", "Quantidade de pessoas que vieram na aula", "Doze de março")
relatorio.exportarPDF(vendas)
