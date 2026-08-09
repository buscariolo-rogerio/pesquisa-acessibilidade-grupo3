import { z } from "zod";


export const CarrinhoModel = z.object({
    id : z.coerce.number().int().positive(),
    usuario_id : z.coerce.number().int().positive(),
    criado_em : z.coerce.date().default(() => {return new Date()})

})