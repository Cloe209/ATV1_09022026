const produtos = [
  { id: 1, nome: "Notebook", categoria: "Eletrônicos", preco: 3500 },
  { id: 2, nome: "Mouse", categoria: "Eletrônicos", preco: 80 },
  { id: 3, nome: "Camiseta", categoria: "Roupas", preco: 50 },
  { id: 4, nome: "Calça", categoria: "Roupas", preco: 120 },
  { id: 5, nome: "Geladeira", categoria: "Eletrodomésticos", preco: 2000 }
];

const eletrodomésticos = produtos.filter((produto) => {
    return produto.categoria === "Roupas" && produto.categoria === "Eletrodomésticos"
})

console.log("Roupas e Eletrodomésticos: ", produtosFiltrados)

// O map no JavaScript é um método fundamental utilizada em arrays 
// para transformar dados. Ele percorre um array original, aplica uma função
// e cada um dos seus elementos e retorna um novo array com os resultados,
// sem modificar o array original.
const numeros = [1, 2, 3, 4];
const numerosDobrados = [];

for (let i = 0; i < numeros.length; i++){
    numerosDobrados.push(numeros[i] * 2)
}

// OU

// numeros.forEach((n) => {
//     numerosDobrados.push(n * 2)
// })

// console.log(numerosDobrados)

//OU 

// const numeros = [1, 2, 3, 4];
// const numerosDobrados = numeros.map((n) => { return n * 2})

// console.log(numeros);
// console.log(numerosDobrados);

// QUERO UM NOVO ARRAY COM OS NOMES APENAS DOS PRODUTOS DA CATEGORIA Eletrônicos

