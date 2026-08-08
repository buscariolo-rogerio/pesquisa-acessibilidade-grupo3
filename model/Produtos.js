import z from "zod";
import { pool } from "../database/connection";




export const produtoModel = z.object({
    id : z.number().int().positive(),
    categoria_id: z.number().int().positive(),
    marca_id: z.number().int().positive(),
    nome: z.string().max(150),
    descricao: z.string().optional().nullable().default(`Produto ${ProdutoModel.nome}`),
    preco: z.number().positive(),
    estoque: z.number().int().positive().default(0),
    imagem_principal : z.string().max(255).nullable().optional(),
    destaque : z.boolean().default(false),
    ativo : z.boolean().default(true),
    criado_em : z.date().default(() => {return new Date()})




})
.transform( (data) => ({
    categoriaId: data.categoria_id,
    marcaId:data.marca_id,
    descricao : data.descricao ?? `produto ${data.nome}`,
    imagemPrincipal : data.imagem_principal,
}))


export const criarProduto = ProdutoModel.omit(
    {
        id : true
    }
)



export class ProdutoModel{
    static async inserirProduto(criarProduto){
        
        const {categoria,marca,nome,descricao,preco,estoque,imagem,destaque,ativo,criado_em} = criarProduto


        const data = await pool.query(`INSERT INTO PRODUTOS (CATEGORIA_ID,MARCA_ID,NOME,DESCRICAO,PRECO,ESTOQUE,IMAGEM_PRINCIPAL,DESTAQUE,ATIVO,CRIADO_EM) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,&10) RETURNING *`, [
            categoria,marca,nome,descricao,preco,estoque,imagem,destaque,ativo,criado_em
        ])


        return data.rows[0]

    }
}
