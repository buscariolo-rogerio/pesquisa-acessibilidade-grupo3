import z from "zod";
import { pool } from "../database/connection.js";

export const acessibilidadeModel = z.object({
 id   : z.coerce.number().positive().int(), 
 usuario_id : z.coerce.number().positive().int(), 
 alto_contraste : z.boolean().default(false),
 modo_escuro  : z.boolean().default(false),
 tamanho_fonte: z.number().int().positive().default(16),
 reduzir_animacoes : z.boolean().default(false),
 leitor_tela : z.boolean().default(false)
})




export const acessibilidadeInsert = acessibilidadeModel.omit({
    id:true
})



export class AcessibilidadeModel{

    static async inserirAcessibilidade(acessibilidadeInsert) {
  const {
    usuario_id,
    alto_contraste,
    modo_escuro,
    tamanho_fonte,
    reduzir_animacoes,
    leitor_tela
  } = acessibilidadeInsert;

  try {
    const verify = await pool.query(
      'SELECT * FROM ACESSIBILIDADE WHERE USUARIO_ID = $1',
      [usuario_id]
    );

    let data;

    if (verify.rowCount === 1) {
      data = await pool.query(
        `UPDATE ACESSIBILIDADE
         SET ALTO_CONTRASTE = $2,
             MODO_ESCURO = $3,
             TAMANHO_FONTE = $4,
             REDUZIR_ANIMACOES = $5,
             LEITOR_TELA = $6
         WHERE USUARIO_ID = $1
         RETURNING *`,
        [
          usuario_id,
          alto_contraste,
          modo_escuro,
          tamanho_fonte,
          reduzir_animacoes,
          leitor_tela
        ]
      );
    } else {
      data = await pool.query(
        `INSERT INTO ACESSIBILIDADE
         (USUARIO_ID, ALTO_CONTRASTE, MODO_ESCURO, TAMANHO_FONTE, REDUZIR_ANIMACOES, LEITOR_TELA)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
        [
          usuario_id,
          alto_contraste,
          modo_escuro,
          tamanho_fonte,
          reduzir_animacoes,
          leitor_tela
        ]
      );
    }

    return [true, data.rows[0]];

  } catch (error) {
    return [false, error.message];
  }
}


}