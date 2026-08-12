import z from "zod";
import { pool } from "../database/connection.js";




export const produtoModel = z.object({
    id : z.number().int().positive(),
    marca_id: z.number().int().positive(),
    nome: z.string().max(150),
    descricao: z.string().optional().nullable(),
    preco: z.number().positive(),
    estoque: z.number().int().positive().default(0),
    imagem_principal : z.string().max(255).nullable().optional(),
    destaque : z.boolean().default(false),
    ativo : z.boolean().default(true),
    criado_em : z.coerce.date().default(() => {return new Date()})




})



export const criarProduto = produtoModel.omit(
    {
        id : true
    }
)

export const produtoPraCarrinho = z.object({
    id: z.coerce.number().int().positive(),
    quantidade :  z.coerce.number().int().positive()
}) 

export const updatePreco = produtoModel.pick({
    preco:true
})


export const updateEstoque = produtoModel.pick({
    estoque:true
})

export class ProdutoModel{
    static async inserirProduto(criarProduto){

        const {categoria_id,
    marca_id,
    nome,
    descricao,
    preco,
    estoque,
    imagem_principal,
    destaque,
    ativo,
    criado_em} = criarProduto


        const data = await pool.query(`INSERT INTO PRODUTOS (MARCA_ID,NOME,DESCRICAO,PRECO,ESTOQUE,IMAGEM_PRINCIPAL,DESTAQUE,ATIVO,CRIADO_EM) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`, [

    marca_id,
    nome,
    descricao,
    preco,
    estoque,
    imagem_principal,
    destaque,
    ativo,
    criado_em        ])


        return data.rows[0]

    }


    static async selectAll (){
        return (await pool.query(`SELECT * FROM PRODUTOS`)).rows
    }

    static async selectById(id){
        return (await pool.query(`SELECT * FROM PRODUTOS WHERE ID = $1` , [id])).rows[0]

    }

    static async updatePrice(id,preco){
        return (await pool.query(`UPDATE PRODUTOS SET PRECO = $1 WHERE ID = $2 RETURNING *`, [preco,id])).rows[0]
    }

    static async updateEstoque(id,estoque){
        return (await pool.query(`UPDATE PRODUTOS SET ESTOQUE = $1 WHERE ID = $2 RETURNING *`, [estoque,id])).rows[0]
    }

    static async deleteProduct(id){
    const data = await pool.query(
        `DELETE FROM PRODUTOS
        WHERE ID = $1
        RETURNING *`,
        [id]
    );

    if (data.rowCount === 0) {
        return null;
    }

    return data.rows[0];    
}
}
