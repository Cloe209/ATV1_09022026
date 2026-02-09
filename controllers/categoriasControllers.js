import Categorias from '../models/categorias.js'

async function index(req, res) {
    try {
        const categorias = await Categorias.getALLCategories();
        return res.json(categorias);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro ao buscar produtos" });
    }
} 

// Função para criar um produto
async function store(req, res) {
    try {
        const categorias = req.body;

        await Categorias.createCategories(categorias);
        res.status(201).json({ message: "Categorias cadastradas com sucesso! "})
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar produto" });
    }
}


async function update(req, res) {
    try {
        const { id } = req.params;
        const categorias = req.body;

        await Categorias.updateCategories(id, categorias);
        res.status(201).json({ massage: "Categorias atualizadas com sucesso!" })
    } catch (error) {
        res.json({ error: "Erro ao atualizar produto!" })
    }
}

async function destroy(req, res) {
    try {
        const { id } = req.params;

        await Categorias.deleteCategories(id);
        res.status(200).json({ message: "Categorias removidas com sucesso!" })
    } catch (error) {
        res.json({ message: "Erro ao remover produto!" })
    }
}


export default { index, store, update, destroy }