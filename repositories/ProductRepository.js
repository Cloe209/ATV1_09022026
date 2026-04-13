import pool from "../database/connection.js";

class ProductRepository {
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM Produtos');
    return rows;
    }

    async getById(id) {
        const [rows] = await pool.query('SELECT * FROM Produtos WHERE id = ?', [id]);
    return rows[0];
    }

    async desativarPorCategoria(categoriaId) {
       await pool.query( "UPDATE produtos SET status = 0 WHERE categorias_id = ?", [categoriaId]);
    }

    async countByCategoria(categoriaId) {
        // Buscar a quantidade de produtos relacionados a CATEGORIA X
        // CATEGORIA ID 1
        // 20 PRODUTOS QUE ESTÃO RELACIONADOS COM ESSA CATEGORIA
        const [rows] = await pool.query('SELECT COUNT(*) as TOTAL FROM produtos WHERE categoria_id = ?', [categoriaId])

        return rows[0].total;
    }

    async countDestaques() {
        const [rows] = await pool.query('SELECT COUNT (*) as total FROM produtos WHERE destaque = 1');
        return rows[0].total;
    }

    async createProduct(produto) {
    const [result] = await pool.query(`INSERT INTO produtos (
        nome, descricao, preco, quantidade_estoque, status, destaque, marca, modelo, garantia_meses, id_categoria )
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
        produto.nome, 
        produto.descricao, 
        produto.preco, 
        produto.quantidade_estoque, 
        produto.status, 
        produto.destaque, 
        produto.marca, 
        produto.modelo, 
        produto.garantia_meses,
        produto.id_categoria
        ]
    )

return result.insertId;
}


    async updateProduct(id, produto) {
    const [result] = await pool.query(`UPDATE produtos SET
        nome = ?,
        descricao = ?,
        preco = ?,
        quantidade_estoque = ?,
        status = ?,
        destaque = ?,
        marca = ?,
        modelo = ?,
        garantia_meses = ?,
        id_categoria = ?
        WHERE id = ?
        `, [
        produto.nome, 
        produto.descricao, 
        produto.preco, 
        produto.quantidade_estoque, 
        produto.status, 
        produto.destaque, 
        produto.marca, 
        produto.modelo, 
        produto.garantia_meses,
        produto.id_categoria,
        id
        ])
    
    return result.affectedRows;
}

    async deleteProduct(id) {
        const [result] = await pool.query(`DELETE FROM produtos WHERE id = ?`, [id])

        return result.affectedRows;

}
}


export default new ProductRepository()