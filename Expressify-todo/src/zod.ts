import { number, string, z } from "zod";

export const userSchema = z.object({
    username: z.string().email(),
    password: z.string()
    ,name : z.string()
})

export const todoSchema = z.object({
    userId : z.number(),
    title: z.string(),
    description : z.string()
})

module.exports = { userSchema,todoSchema };