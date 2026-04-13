export function validarCamposObrigatorios(produto) {
    const camposObrigatorios = ["nome", "preco", "descricao"];
    const camposFaltando = [];

    camposObrigatorios.forEach((campo) => {
        if(produto[campo] === undefined || produto[campo] === null || produto[campo].toString().trim() === "") {
            // .trim() => Serve para remover espaços
            camposFaltando.push(campo)
        }
    })

    if (camposFaltando.length > 0) {
        // .join() => É utilizado para juntas, transformar todos os elementos 
        // do array em uma única string!
        // EX: const frutas = ["Maça", "Banana", "Uva"];
        // console.log(frutas.join()) -> Maça. Banana, Uva
        throw new Error(`Campos obrigatorios não preenchidos: ${camposFaltando.join(", ")} `)
    }
}

export function validarPreco(produto) {
    // SINAL DE DIFERENTE: !==
    // typeof -> Determina o tipo do dado
    if(typeof produto.preco !== "number"|| produto.preco <= 0) {
        throw new Error("Preço deve ser um número maior que zero!")
    }
}

export function validarEstoque(produto) {
    if(produto.estoque === null || produto.estoque < 0) {
        throw new Error("Estoque não pode ser negativo!");
    }
}