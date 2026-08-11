import { z } from "zod";
import { ProdutoModel, produtoPraCarrinho } from "./Produtos.js";
import { pool } from "../database/connection.js";
import { compose } from "z/src/utils.js";


export const carrinhoModel = z.object({
    id : z.coerce.number().int().positive(),
    usuario_id : z.coerce.number().int().positive(),
    criado_em : z.coerce.date().default(() => {return new Date()})

})

export const addItems = z.object({
    usuario_id: z.coerce.number().int().positive(),
    produtos : z.array(produtoPraCarrinho)

})


export const criarCarrinho = carrinhoModel.omit(
    {
        id:true
    }
)

export class CarrinhoModel{

    static async insertCarrinho (criarCarrinho){
        const usuario_id = criarCarrinho

        

        return (await pool.query(`INSERT INTO CARRINHOS (USUARIO_ID,CRIADO_EM) VALUES ($1,$2) RETURNING *`, [usuario_id,new Date()])).rows[0]

    }

    static async selectById(id) {
  const result = await pool.query(
    `SELECT * FROM CARRINHOS WHERE ID = $1`,
    [id]
  );

  return result.rows[0];
}


    static async insertCarrinhoItems(addItems){
        try{
        const {usuario_id,produtos} = addItems
        console.log(produtos)
        const carr =  (await this.insertCarrinho(usuario_id)).id

        const carrinho = {carrinho_id : carr, itens : []}

        for (const produto of produtos) {

        const result = await pool.query(
            `SELECT ESTOQUE, NOME,PRECO
             FROM PRODUTOS
             WHERE ID = $1`,
            [produto.id]
        );

        const produtoBanco = result.rows[0];

        if (!produtoBanco) {
            return [false, `Produto ${produto.id} não encontrado`];
        }

        


        if (produtoBanco.estoque < produto.quantidade) {
            return [
                false,
                `Produto ${produtoBanco.nome} com estoque inferior ao necessário`
            ];
        }

            await pool.query(`UPDATE PRODUTOS SET ESTOQUE = ESTOQUE - $1 WHERE ID = $2 `, [produto.quantidade,produto.id])

            const produtoInserido = (await pool.query(`INSERT INTO ITENS_CARRINHO (CARRINHO_ID,PRODUTO_ID,QUANTIDADE) VALUES ($1,$2,$3) RETURNING PRODUTO_ID, QUANTIDADE`, [carr,produto.id,produto.quantidade])).rows[0]

            produtoInserido.preco = produtoBanco.preco

            carrinho.itens.push(produtoInserido)
            
            
        }
        return [true, carrinho]
    }catch(error){
        console.log(`Erro${error}`)
    }
    }
}