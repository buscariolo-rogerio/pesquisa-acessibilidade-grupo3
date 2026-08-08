import express from 'express'
import { pool } from './database/connection.js'
import {criarUser, UsuarioModelo,UsuarioModel, idParse, userLogin}  from './model/usuario.js'
import { ca } from 'zod/locales'
import {  success } from 'zod'
import "dotenv/config"
const app = express()
const port = Number(process.env.PORT)|3000

app.use(express.json())

app.get("/", async  (req,res) => {

    res.status(200).json({message:"tudo certo"})
})

app.post("/cadastro",async (req,res) => {
    const resultado = criarUser.safeParse(req.body)

        if (!resultado.success){
            res.status(400).json({success:false,message: `erro no envio de infos ${resultado.error}`})
        }

        try{
            const user = await UsuarioModel.criarUsuario(resultado.data)
            res.status(201).json({success:true,data:user})
        }
        catch(error){
            res.status(500).json({success:false, message: `erro no servidor: ${error}`})
        }
        
})

app.get("/user/:id", async (req,res) => {
    const id = idParse.safeParse(req.params)

    if (!id.success){
        res.status(400).json({success:false,message:`Erro no body: ${id.error}`})
    }

    try{
        const user = await UsuarioModel.selectById(id.data.id)
        res.status(200).json({success:true,data:user})
    }
    catch(error){
        res.status(500).json({success:false, message:`erro no servidor: ${error}`})
    }
}  )


app.get("/login",async (req,res) => {
    const data = userLogin.safeParse(req.query) 
    if (!data.success){
        res.status(400).json({success:false, message:`erro no envio dos dados ${data.error}`})
    }
    try{
        const user = await UsuarioModel.login(data.data)
        if (user){
            res.status(200).json({success:true,data:user}) 
        }
        else{
            res.status(401).json({success:false,message:"Email ou senha incorretos"})
        }
    }
    catch(error){
        res.status(500).json({success:false,message:`Erro no servidor: ${error}`})
    }
})


app.listen(port, async () =>{
    console.log(`app rodando na porta ${port}`)
    
})