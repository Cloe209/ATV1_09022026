class Pedidos {
    constructor(numeroPedidos, cliente, valorTotal, status) {
        this.numeroPedidos = numeroPedidos;
        this.cliente = cliente;
        this.valorTotal = valorTotal;
        this.status = status;
    }

    adicionarValor(valor) {
        this.valorTotal = valor;
    }

    aplicarDesconto(porcentual) {
        this.valorTotal -= (this.valorTotal * porcentual) / 100
        return this.valorTotal
    }

    finalizarPedido() {
        this.status = "Fechado/Finalizado!"
        return this.valorTotal
    }
}


const pedidos = new Pedidos("001", "Clara Cloe", 0, "Aberto")
pedidos.adicionarValor(500)
pedidos.aplicarDesconto(20)
console.log(pedidos.finalizarPedido())