import pool from "../database/connection.js";

async function getALLCategories() {
    const [rows] = await pool.query('SELECT * FROM Categorias');
    return rows;
}


async function createCategories(categorias) {
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


async function updateCategories(id, categorias) {
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

async function deleteCategories(id) {
    const [result] = await pool.query(`DELETE FROM categorias WHERE id = ?`, [id])

    return result.affectedRows;

}

export default { getALLCategories, createCategories, updateCategories, deleteCategories }