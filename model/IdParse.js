import z from "zod"

export const idParse = z.object({
    id:z.coerce.number().int().positive()
})