import pool from "../database/connection.js";

class CategoryRepository {
    async getById(id) {
        const [rows] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
        return rows[0];
    }

    async updateStatus(id, status) {
        const [rows] = await pool.query('UPDATE categorias SET status = ? WHERE id = ?', [status, id]);
        return rows;
    }

    async getALLCategory() {
        const [rows] = await pool.query('SELECT * FROM categorias');
        return rows;
    }


    async createCategory(categorias) {
        const { 
            nome, 
            descricao, 
    } = categorias;
    console.log("KAKA", nome, descricao)
    const [result] = await pool.query(`INSERT INTO Categorias (
        NOME, DESCRICAO )
        values (?, ?)`, 
        [
        nome, 
        descricao
        ]
    )
    console.log(result)

    return result.insertId;
    }


    async updateCategory(id, categorias) {
        const { 
            nome, 
            descricao
        } = categorias;
    console.log(categorias)
        const [result] = await pool.query(`UPDATE Categorias SET
            nome = ?,
            descricao = ?
            WHERE id = ?
            `, [
            nome,
            descricao,
            id 
            ])
    console.log(result)
        return result.affectedRows;
    }

    async deleteCategory(id) {
        const [result] = await pool.query(`DELETE FROM categorias WHERE id = ?`, [id])

        return result.affectedRows;

    }
}
export default new CategoryRepository();
