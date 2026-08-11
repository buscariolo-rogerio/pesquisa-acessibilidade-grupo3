import {z} from 'zod'
import { pool } from '../database/connection.js'
import { es } from 'zod/locales'

export  const usuarioModelo = z.object({
    id: z.number().int().positive(),
    nome: z.string().max(100),
    sobrenome: z.string().max(100),
    email: z.string().email("Email deve ser válido").nonempty("").max(150, "deve ser menos que 150"),
    senha : z.string().nonempty().max(255),
    cpf: z.stringFormat("cpf", (value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value),
  {
    message: "CPF inválido",
  }), 
    data_nascimento: z.coerce.date("Valor inválido de data").nullable().optional(),
    foto_perfil : z.string().nullable().optional(),
    nivel : z.string().optional().nullable().default("cliente"),
    criado_em: z
            .coerce
            .date({ message: "Valor de data e hora inválido" })
            .default(() => {return new Date()})
    
})


export const criarUser = usuarioModelo.omit({
    id:true,
}).extend({
    apelido: z.string().max(50).nullable().optional(),
    cep: z.string().length(9),
    logradouro: z.string().max(150),
    numero : z.number().int().positive(),
    complemento:z.string().max(100).nullable().optional(),
    bairro:z.string().max(100),
    cidade: z.string().max(100),
    estado:z.string().length(2),
    principal : z.boolean().default(true)

})



export const userLogin = usuarioModelo.pick({
    email:true,
    senha:true
})


export class UsuarioModel{
    static async selectAll(){
        const result = await pool.query("SELECT * FROM USUARIOS")
        return result.rows
    }

    static async criarUsuario(model){
    try{
        const {nome,sobrenome,email,senha,cpf,data_nascimento,foto_perfil,nivel,apelido,cep,logradouro,numero,complemento,bairro,cidade,estado,principal} = model

        

        const data = await pool.query(`INSERT INTO USUARIOS (NOME,SOBRENOME,EMAIL,SENHA,CPF,DATA_NASCIMENTO,FOTO_PERFIL,NIVEL) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
            [nome,sobrenome,email,senha,cpf,data_nascimento,foto_perfil,nivel]
        )

        const dataEndereco = await (pool.query("INSERT INTO ENDERECOS (USUARIO_ID,APELIDO,CEP,LOGRADOURO,NUMERO,COMPLEMENTO,BAIRRO,CIDADE,ESTADO,PRINCIPAL) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",[
            data.rows[0].id,
            apelido,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            principal
        ]))

        return {usuario:data.rows[0],endereco: dataEndereco.rows[0]}
    }catch(error){
        throw Error(`Erro no banco ${error}`)
    }

    }

    static async selectById(id){
        const data = await pool.query(`SELECT * FROM USUARIOS WHERE ID = $1`,
            [id]
        )
        return data.rows[0]
    } 

    static async login(userLogin){
        const {email,senha} = userLogin

        const data = await pool.query(`SELECT * FROM USUARIOS WHERE EMAIL = $1 AND SENHA = $2`,[
            email,senha
        ])
        
        return data.rows[0] 
    }
}





