import express from 'express'
import "dotenv/config"

import { criarUser, UsuarioModel, userLogin } from './model/Usuario.js'
import { idParse } from './model/IdParse.js'
import { criarProduto, ProdutoModel, updateEstoque, updatePreco } from './model/Produtos.js'
import { addItems, CarrinhoModel } from './model/Carrinho.js'
import { PedidoModel, pedidoModelCompleto, statusModel } from './model/Pedidos.js'
import { acessibilidadeInsert, AcessibilidadeModel } from './model/Acessibilidade.js'
import listEndpoints from 'express-list-endpoints'
import { es } from 'zod/locales'
import { MarcaModel } from './model/marcas.js'




const app = express()
const port = Number(process.env.PORT) || 3000

app.use(express.json())


app.get("/", async (req, res) => {
    return res.status(200).json({
        success: true,
        data: { message: "API rodando normalente" }
    })
})






app.post("/cadastro", async (req, res) => {
    const resultado = criarUser.safeParse(req.body)

    if (!resultado.success) {
        return res.status(400).json({
            success: false,
            message: resultado.error
        })
    }

    try {
        const user = await UsuarioModel.criarUsuario(resultado.data)
        return res.status(201).json({ success: true, data: user })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})

app.get("/user/:id", async (req, res) => {
    const id = idParse.safeParse(req.params)

    if (!id.success) {
        return res.status(400).json({
            success: false,
            message: "ID de usuário inválido",
            details: id.error.format()
        })
    }

    try {
        const user = await UsuarioModel.selectById(id.data.id)
        if (!user) {
            return res.status(404).json({ success: false, message: "Usuário não encontrado" })
        }
        return res.status(200).json({ success: true, data: user })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})

app.post("/login", async (req, res) => {
    const data = userLogin.safeParse(req.body)

    if (!data.success) {
        return res.status(400).json({
            success: false,
            message: "Dados de login inválidos",
            details: data.error.format()
        })
    }

    try {
        const user = await UsuarioModel.login(data.data)
        if (user) {
            return res.status(200).json({ success: true, data: user })
        } else {
            return res.status(401).json({ success: false, message: "Email ou senha incorretos" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})


app.get("/products", async (req, res) => {
    try {
        const data = await ProdutoModel.selectAll()
        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})

app.get("/products/:id", async (req, res) => {
    const id = idParse.safeParse(req.params)

    if (!id.success) {
        return res.status(400).json({
            success: false,
            message: "ID de produto inválido",
            details: id.error.format()
        })
    }

    try {
        const product = await ProdutoModel.selectById(id.data.id)
        if (!product) {
            return res.status(404).json({ success: false, message: "Produto não encontrado" })
        }
        return res.status(200).json({ success: true, data: product })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})

app.post("/products", async (req, res) => {
    const resultado = criarProduto.safeParse(req.body)

    if (!resultado.success) {
        return res.status(400).json({
            success: false,
            message: resultado.error
        })
    }

    try {
        const produto = await ProdutoModel.inserirProduto(resultado.data)
        return res.status(201).json({ success: true, data: produto })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})

app.patch("/products/:id", async (req, res) => {
    const id = idParse.safeParse(req.params)
    const price = updatePreco.safeParse(req.body)

    if (!id.success || !price.success) {
        return res.status(400).json({
            success: false,
            message: id.success ? price.error : id.error
        })
    }

    try {
        const produto = await ProdutoModel.selectById(id.data.id)

        if (!produto) {
            return res.status(404).json({ success: false, message: "Produto não encontrado" })
        }

        const data = await ProdutoModel.updatePrice(id.data.id, price.data.preco)
        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro interno: ${error}` })
    }
})

app.delete("/products/:id", async (req, res) => {
    const id = idParse.safeParse(req.params)

    if (!id.success) {
        return res.status(400).json({
            success: false,
            message: id.error
        })
    }

    try {
        const data = await ProdutoModel.deleteProduct(id.data.id)

        if (!data) {
            return res.status(404).json({ success: false, message: "Produto não encontrado" })
        }

        return res.status(200).json({ success: true, data: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})


app.post("/carrinho", async (req, res) => {
    const request = addItems.safeParse(req.body)

    if (!request.success) {
        return res.status(400).json({
            success: false,
            message: request.error
        })
    }

    try {
        const data = await CarrinhoModel.insertCarrinhoItems(request.data)

        if (!data[0]) {
            return res.status(400).json({ success: false, message: data[1] })
        }

        return res.status(201).json({ success: true, data: data[1] })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})

app.post("/pedido", async (req, res) => {
    const pedidoModel = pedidoModelCompleto.safeParse(req.body)

    if (!pedidoModel.success) {
        return res.status(400).json({
            success: false,
            message: pedidoModel.error
        })
    }

    try {
        const data = await PedidoModel.insertPedido(pedidoModel.data)

        if (!data[0]) {
            return res.status(400).json({ success: false, message: data[1] })
        }

        return res.status(201).json({ success: true, data: data[1] })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})





app.get("/pedido/:id", async (req, res) => {
    const id = idParse.safeParse(req.params)

    if (!id.success) {
        return res.status(400).json({
            success: false,
            message: id.error
        })
    }

    try {
        const data = await PedidoModel.selectCarrinhoById(id.data.id)
        if (!data) {
            return res.status(404).json({ success: false, message: "Pedido não encontrado" })
        }
        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})



app.post("/acessibilidade", async (req, res) => {
    const request = acessibilidadeInsert.safeParse(req.body)

    if (!request.success) {
        return res.status(400).json({
            success: false,
            message: request.error,
        })
    }

    try {
        const data = await AcessibilidadeModel.inserirAcessibilidade(request.data)
        if (!data[0]) {
            return res.status(400).json({ success: false, data: data })
        }
        return res.status(201).json({ success: true, data: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro no servidor: ${error}` })
    }
})

app.patch("/products/estoque/:id", async (req, res) => {

    const id = idParse.safeParse(req.params)
    const estoque = updateEstoque.safeParse(req.body)

    if (!id.success || !estoque.success) {
        return res.status(400).json({
            success: false,
            message: id.success ? price.error : id.error
        })
    }

    try {
        const produto = await ProdutoModel.selectById(id.data.id)

        if (!produto) {
            return res.status(404).json({ success: false, message: "Produto não encontrado" })
        }

        const data = await ProdutoModel.updateEstoque(id.data.id, estoque.data.estoque)
        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro interno: ${error}` })
    }

})


app.patch("/pedidos/:id", async (req, res) => {
    const id = idParse.safeParse(req.params)
    const status = statusModel.safeParse(req.body)
    if (!id.success || !status.success) {
        return res.status(400).json({
            success: false,
            message: id.success ? status.error : id.error
        })
    }

    try {
        const pedido = await PedidoModel.selectById(id.data.id)

        if (!pedido) {
            return res.status(404).json({ success: false, message: "Produto não encontrado" })
        }

        const data = await PedidoModel.updateStatus(id.data.id, status.data.status)
        if (!data[0]){
            return res.status(404).json({sucess:false,message:data[1]})
        }
        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro interno: ${error}` })
    }


})

app.get("/marcas", async (req,res) => {
    try{
        const data = await MarcaModel.selectAll()
        return res.status(200).json({sucess:true,data: data})
    }
    catch(error){
        return res.status(500).json({sucess:false,message:error})
    }
})


app.get("/marcas/:id", async (req, res) => {
    try {
        const id = idParse.safeParse(req.params);

        if (!id.success) {
            return res.status(400).json({
                success: false,
                message: id.error
            });
        }

        const data = await MarcaModel.selectMarcaById(id.data.id);

        return res.status(200).json({
            success: true,
            data
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)



})