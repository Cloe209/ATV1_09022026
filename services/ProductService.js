import ProductModel from'../models/ProductModel.js';
import CategoryRepository from "../repositories/ProductRepository.js";
import ProductRepository from '../repositories/ProductRepository.js';
import { validarCamposObrigatorios, validarPreco, validarEstoque } from "../validators/product.validator.js"

class ProductService{
    async listar() {
        return await ProductRepository.getAll()
    }

    async criarProduto(data) {
        validarCamposObrigatorios(data);
        validarPreco(data);
        validarEstoque(data);

        // getById (idCorreto) 
        // Vai me retornar todas as informações da categoria!
        let categorias = await CategoryRepository.getById(data.categoria_id);

        if(!categorias) {
            throw new Error("Categoria não existe!")
        }

        if (categorias.status === 0) {
            throw new Error("Não é possível cadastar produto em categoria desativada!")
        }

        // Verificar se o usuário esta tentando criar produto como DESTAQUE
        // Se sim, buscar a quantidade de produto que esta como DESTAQUE
        // e verificar, caso seja maior ou igual a 5 dar um erro com a mensagem:
        // Limite de produtos em destaque atingido.
        // nome, descricao, preco, 0 ou 1

        console.log(data.destaque) // -> 0 ou 1
        if (data.destaque) {
            const totalDestaques = await ProductRepository.countDestaques();

            if (totalDestaques => 5) {
                throw new Error("Limite de produtos em destaque foi atingido!")
            }
        }

        // Model -> Cuida da estrutura dos dados
        const produto = new ProductModel(data);

        // Repository -> Cuida do banco (INSERT, UPDATE, SELECT)
        return await ProductRepository.createProduct(produto);
    }

    async atualizar(id, data) {
        if (!id) {
            throw new Error("ID do Produto é obrigatório")
        }

        const produtoAtual = await ProductRepository.getById(id);

        if (!produtoAtual) {
            throw new Error("Produto não encontrado! ")
        }

        if(data.categorias_id) {
            const categorias = await category.getById(data.categorias_id)

            if (!categorias || categorias.status === 0) {
            throw new Error ("Categoria inválida ou desativada!")
        }
        }

        

        validarCamposObrigatorios(data)
        validarPreco(data) 
        validarEstoque(data)

        if (data.destaque && !produtoAtual.destaque) {
            const totalDestaques = await ProductRepository.countDestaques();
        }

        if (totalDestaques => 5) {
            throw new Error("Limite de produtos em destaque foi atingido!")
        }

        // Model -> Cuida da estrutura dos dados
        const produto = new ProductModel(data);

        // Repository -> Cuida do banco (INSERT, UPDATE, SELECT)
        return await ProductRepository.updateProduct(id, produto);

    }

    async deletar(id) {
        if (!id) {
            throw new Error("ID do Produto é obrigatório")
        }

        return await ProductRepository.deleteProduct(id)
    }
 }

export default new ProductService();