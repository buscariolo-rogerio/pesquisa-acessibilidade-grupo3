import {z} from 'zod'
import { pool } from '../database/connection.js'

export  const UsuarioModelo = z.object({
    id: z.number().int().positive(),
    nome: z.string().max(100),
    sobrenome: z.string().max(100),
    email: z.string().email("Email deve ser válido").nonempty("").max(150, "deve ser menos que 150"),
    senha : z.string().nonempty().max(255),
    cpf: z.string().length(14,"cpf deve ter 14 números") /*TODO: fazer check com regex*/ ,
    data_nascimento: z.coerce.date("Valor inválido de data"),
    foto_perfil : z.string(),
    nivel : z.string().default("cliente"),
    criado_em: z
            .coerce
            .date({ message: "Valor de data e hora inválido" })
            .default(() => {return new Date()})
    
})

export const criarUser = UsuarioModelo.omit({
    id:true,
})

export const idParse = z.object({
    id:z.coerce.number()
})

export const userLogin = UsuarioModelo.pick({
    email:true,
    senha:true
})


export class UsuarioModel{
    static async selectAll(){
        const result = await pool.query("SELECT * FROM USUARIOS")
        return result.rows
    }

    static async criarUsuario(model){
        const {nome,sobrenome,email,senha,cpf,data_nascimento,foto_perfil,nivel} = model

        const data = await pool.query(`INSERT INTO USUARIOS (NOME,SOBRENOME,EMAIL,SENHA,CPF,DATA_NASCIMENTO,FOTO_PERFIL,NIVEL) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
            [nome,sobrenome,email,senha,cpf,data_nascimento,foto_perfil,nivel]
        )

        return data.rows[0]

    }

    static async selectById(id){
        const data = await pool.query(`SELECT * FROM USUARIOS WHERE ID = $1`,
            [id]
        )
        return data.rows[0]
    } 

    static async login(userLogin){
        const {email,senha} = userLogin

        const data = await pool.query(`SELECT * WHERE EMAIL = $1 AND SENHA = $2`,[
            email,senha
        ])
        
        return data.rows[0] 
    }
}





