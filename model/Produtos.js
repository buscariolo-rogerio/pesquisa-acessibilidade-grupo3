import z from "zod";




const ProdutoModel = z.object({
    id : z.number().int().positive(),
    categoria_id: z.number().int().positive(),
    marca_id: z.number().int().positive(),
    nome: z.string().max(150),
    descricao: z.string().optional().nullable().default(`Produto ${ProdutoModel.nome}`),
    preco: z.number.


})
.transform( (data) => ({
    categoriaId: data.categoria_id,
    marcaId:data.marca_id,
    descicao : data.descricao ?? `produto ${data.nome}`
}))