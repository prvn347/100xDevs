import { number, string, z } from "zod";

export const userSchema = z.object({
    email:z.string().email(),
    username: z.string(),
    password: z.string()

})

export const blogSchema = z.object({
   
    title: z.string(),
    body : z.string()
})

// module.exports = { userSchema,blogSchema };