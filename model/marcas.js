import z from "zod";
import { pool } from "../database/connection.js";

export class MarcaModel{

    static async selectAll(){
        return (await (pool.query("SELECT * FROM MARCAS"))).rows
    }

    static async selectMarcaById(id){
        return (await(pool.query("SELECT * FROM MARCAS WHERE ID =$1",[id]))).rows[0]
    }
}


