import pg from "pg";
const {Pool} = pg


export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db',
    password: 'senha1234',
    port: 5433,
    max: 10,                   
    idleTimeoutMillis: 30000, 
    connectionTimeoutMillis: 2000,
}
)


