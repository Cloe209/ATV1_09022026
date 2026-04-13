import Categorias from "../models/CategoryModel.js"
import ProductRepository from "../repositories/ProductRepository.js";
import categoryRepository from "../repositories/CategoryRepository.js";
import CategoryModel from "../models/CategoryModel.js";

class CategoryService {
    async getAll() {
        return await categoryRepository.getAllCategories();
    }
    async desativar(id) {

        if(!id || isNaN(id)) {
            throw new Error("ID da categoria é obrigatório!")
        }

        // Verificando se a categoria existe
        const categoria = Categorias.getById(id);
        
        if(!categoria) {
            throw new Error ("Categoria não encontrada!")
        }
        
        // Desativando a categoria encontrada!
        await Categorias.updateStatus(id, 0);

        // Desativando  produtos da categoria
        await ProductRepository.desativarPorCategoria(id)

        return { message: "Categoria e produtos desativados com sucesso!" }
    }

    async delete(id) {
        const totalProdutos= await ProductRepository.countByCategoria(id);

        if(totalProdutos > 0) {
            throw new Error("Não é possível excluir categoria com produtos vinculados")
        }

        return await Categorias.deleteCategories(id);
    }

    async createCategory(data) {
        const categoria = newCategory(data)

        return categoryRepository.createCategory(categoria)
    }

    async atualizar(id, data) {
        if (!id) {
            throw new Error("ID do Produto é obrigatório")
        }

        const categoriaAtual = await categoryRepository.getById(id);

        if (!produtoAtual) {
            throw new Error("Produto não encontrado! ")
        }

        if(data.categorias_id) {
            const categorias = await CategoryService.getById(data.categorias_id)

            if (!categorias || categorias.status === 0) {
            throw new Error ("Categoria inválida ou desativada!")
        }
        }

        

        validarCamposObrigatorios(data)
        validarPreco(data) 
        validarEstoque(data)

        if (data.destaque && !categoriaAtual.destaque) {
            const totalDestaques = await categoryRepository.countDestaques();
        }

        if (totalDestaques => 5) {
            throw new Error("Limite de produtos em destaque foi atingido!")
        }

        // Model -> Cuida da estrutura dos dados
        const categoria = new CategoryModel(data);

        // Repository -> Cuida do banco (INSERT, UPDATE, SELECT)
        return await categoryRepository.updateCategory(id, categoria);

    }
}

export default new CategoryService();

// ROTAS -> CONTROLLERS -> SERVICE -> MODEL
// SERVER -> APP (ROTAS CATEORIAS GET) -> CATEGORIAS ROUTES-> 
// SERVER - APP - ROUTES - CONTROLLER - SERVICE - REPOSITORY
//                                         |
//                                       MODEL