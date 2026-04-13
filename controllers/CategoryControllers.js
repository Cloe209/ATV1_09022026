import CategoryService from '../services/CategoryService.js'

class CategoryControllers {

    async index(req, res) {
        try {
            const categorias = await CategoryService.getALLCategory();
            return res.json(categorias);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Erro ao buscar produtos" });
        }
    } 

    async store(req, res) {
        try {
            const categorias = req.body;

            await CategoryService.createCategory(categorias);
            res.status(201).json({ message: "Categorias cadastradas com sucesso! "})
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar produto" });
        }
    }


    async update(req, res) {
        try {
            const { id } = req.params;
            const categorias = req.body;

            await CategoryService.updateCategory(id, categorias);
            res.status(201).json({ massage: "Categorias atualizadas com sucesso!" })
        } catch (error) {
            res.json({ error: "Erro ao atualizar produto!" })
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;

            await CategoryService.deleteCategories(id);
            res.status(200).json({ message: "Categorias removidas com sucesso!" })
        } catch (error) {
            res.json({ message: "Erro ao remover produto!" })
        }
    }
}

export default new CategoryControllers ()