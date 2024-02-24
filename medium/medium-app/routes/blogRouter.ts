import { Hono } from "hono";
import { PrismaClient } from '@prisma/client'        
import { withAccelerate } from "@prisma/extension-accelerate";
const prisma = new PrismaClient()
export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>();


blogRouter.post('/blog',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

}
)

blogRouter.put('/blog',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

})
blogRouter.get('/blog:id',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
}
)