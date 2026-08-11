import express from 'express'
import { pool } from './database/connection.js'
import {criarUser, usuarioModelo,UsuarioModel,  userLogin}  from './model/Usuario.js'
import { idParse } from './model/IdParse.js'
import { ca, id } from 'zod/locales'
import {  success } from 'zod'
import "dotenv/config"
import { criarProduto, ProdutoModel, updatePreco } from './model/Produtos.js'
import { addItems, CarrinhoModel, criarCarrinho } from './model/Carrinho.js'
const app = express()
const port = Number(process.env.PORT)|3000

app.use(express.json())

app.get("/", async  (req,res) => {

    return res.status(200).json({message:"tudo certo"})
})

app.post("/cadastro",async (req,res) => {
    const resultado = criarUser.safeParse(req.body)

        if (!resultado.success){
            return res.status(400).json({success:false,message: `erro no envio de infos ${resultado.error}`})
        }

        try{
            const user = await UsuarioModel.criarUsuario(resultado.data)
            return res.status(201).json({success:true,data:user})
        }
        catch(error){
            return res.status(500).json({success:false, message: `erro no servidor: ${error}`})
        }
        
})

app.get("/user/:id", async (req,res) => {
    const id = idParse.safeParse(req.params)

    if (!id.success){
        return res.status(400).json({success:false,message:`Erro no body: ${id.error}`})
    }

    try{
        const user = await UsuarioModel.selectById(id.data.id)
        return res.status(200).json({success:true,data:user})
    }
    catch(error){
        return res.status(500).json({success:false, message:`erro no servidor: ${error}`})
    }
}  )


app.post("/login",async (req,res) => {
    const data = userLogin.safeParse(req.body) 
    if (!data.success){
        return res.status(400).json({success:false, message:`erro no envio dos dados ${data.error}`})
    }
    try{
        const user = await UsuarioModel.login(data.data)
        if (user){
            return res.status(200).json({success:true,data:user}) 
        }
        else{
            return res.status(401).json({success:false,message:"Email ou senha incorretos"})
        }
    }
    catch(error){
        return res.status(500).json({success:false,message:`Erro no servidor: ${error}`})
    }
})





app.get("/products",async  (req,res) => {

    const data = await  ProdutoModel.selectAll()


    try{
        return res.status(200).json({success:true, data: data })
    }
    catch(error){
        return res.status(500).json({success:false,message:`erro no servidor ${error}`})
    }
})


app.get("/products/:id", async (req,res) => {
    const id = idParse.safeParse(req.params)

    if (!id.success){
        return res.status(400).json({success:false,message:`Erro no body: ${id.error}`})
    }

    try{
        const product = await ProdutoModel.selectById(id.data.id)
        return res.status(200).json({success:true,data:product})
    }
    catch(error){
        return res.status(500).json({success:false, message:`erro no servidor: ${error}`})
    }
}  )


app.post("/products",async (req,res) => {
    const resultado = criarProduto.safeParse(req.body)

        if (!resultado.success){
            return res.status(400).json({success:false,message: `erro no envio de infos ${resultado.error}`})
        }

        try{
            const user = await ProdutoModel.inserirProduto(resultado.data)
            return res.status(201).json({success:true,data:user})
        }
        catch(error){
            return res.status(500).json({success:false, message: `erro no servidor: ${error}`})
        }
        
})


app.patch("/products/:id", async (req,res) => {
    const id = idParse.safeParse(req.params)
    const price = updatePreco.safeParse(req.body)

    if (!id.success || !price.success){
        return res.status(400).json({success:false,message:`Erro no body ou na url: ${id.error ?? price.error}`})
    }

    try{

        const produto = await ProdutoModel.selectById(id.data.id)

        if (!produto){
            return res.status(404).json({success:false,message: "produto nao encontrado"})
        }
        const data = await ProdutoModel.updatePrice(id.data.id,price.data.preco)
        return  res.status(201).json({success:true,data:data})
    }
    catch(error){
        return  res.status(500).json({success:false,message:`Erro interno: ${error}`})

    }
})



app.delete("/products/:id", async (req,res) => {
    const id = idParse.safeParse(req.params)

    if(!id.success){
        return res.status(404).json({success:false,message:`Erro no parametro: ${id.error}`})
    }
    try {
        const data = await ProdutoModel.deleteProduct(id.data.id)
        if (!data){
            return res.status(404).json({sucess:false,message:"Produto já não existente"})
        }

        return res.status(201).json({sucess:true,data:data})



    } catch (error) {
        
    }


    



})

app.post("/carrinho", async (req,res) => {
    const request = addItems.safeParse(req.body)

    if(!request.success){
        return res.status(400).json({success:false,message:`Erro no envio do body ${request.error}`})
    }
    
    try{
        const carrinho = request.data


        
        const data = (await CarrinhoModel.insertCarrinhoItems(carrinho))
        console.log(data)
        
        if(!data[0]){
            return res.status(400).json({success:false,message:`${data[1]}`})
        }


        return res.status(201).json({success:true,data:data[1]})
    }

    catch(error){
        return res.status(500).json({success:false,message:`${error}`})
    }
    
    

    



})




app.listen(port, async () =>{
    console.log(`app rodando na porta ${port}`)
    
})