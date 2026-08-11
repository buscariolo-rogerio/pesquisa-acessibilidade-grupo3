import z, { tuple } from "zod";
import { addItems, CarrinhoModel } from "./Carrinho.js";
import { pool } from "../database/connection.js";
import { id } from "zod/locales";

export const pedidoModel = z.object({
    id:z.coerce.number().int().positive(),
    status: z.string().max(30).default("Pendente"),
    valor_total: z.number().positive(),
    data_pedido: z.coerce.date().default(() => {return new Date()}),
    carrinho_id : z.coerce.number().int().positive()
})


export const pedidoModelCompleto = pedidoModel.extend(addItems.shape).omit({id:true,carrinho_id:true})



export class PedidoModel{
    static async selectById(id){
        try{
            const dataPedido = (await pool.query("SELECT * FROM PEDIDO WHERE ID = $1 ",[id])).rows[0]
            const dataCarinho = (await pool.query("SELECT * FROM CARRINHO WHERE ID = $1",[dataPedido.carrinho_id])).rows[0]
            const dataProdutos = (await pool.query("SELECT A.ID,A.NOME,B.QUANTIDADE FROM PRODUTOS A JOIN ITENS_CARRINHO B ON B.PRODUTO_ID = A.ID  WHERE B.CARRINHO_ID = $1",[dataCarinho.id])).rows

            dataCarinho.produtos = dataProdutos
            dataPedido.carrinho = dataCarinho

            return dataPedido
        }
        catch(error){
            return error
        }
        
    }

    static async selectCarrinhoById(id_pedido){
      return (await (pool.query("SELECT A.ID,B* FROM PEDIDO A JOIN CARRINHO B ON A.CARRINHO_ID = B.ID WHERE B.ID = $1",[id_pedido]))).rows[0]
    }


    static async insertPedido(pedidoModelCompleto) {
  try {
    // 1. cria o carrinho
    const carrinhoCriado = await CarrinhoModel.insertCarrinho(
      pedidoModelCompleto.usuario_id
    );
    console.log(pedidoModelCompleto.produtos)

    // 2. adiciona os itens ao carrinho
    const itensInseridos = await CarrinhoModel.insertCarrinhoItems({
      usuario_id: pedidoModelCompleto.usuario_id,
      produtos: pedidoModelCompleto.produtos
    });
    console.log(itensInseridos)

    // verifica se houve erro
    if (!itensInseridos[0]) {
      return [false, itensInseridos[1]];
    }
    console.log("itens")
    console.log(itensInseridos)

    // 3. calcula o valor total
    const valor_total = itensInseridos[1].itens.reduce(
      (total, produto) => total + (produto.preco * produto.quantidade),
      0
    );
    
    // 4. cria o pedido
    const pedido = await pool.query(
      `INSERT INTO PEDIDOS (STATUS, VALOR_TOTAL, CARRINHO_ID)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [
        pedidoModelCompleto.status,
        valor_total,
        carrinhoCriado.id
      ]
    );

    return [true, pedido.rows[0]];

  } catch (error) {
    console.log(error);
    return [false, error.message];
  }
}
}
