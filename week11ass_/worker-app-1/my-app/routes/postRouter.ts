import { Hono } from "hono"
const prisma = new PrismaClient()
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'
import { blogSchema } from "../src/zod"



export const postRouter = new Hono<{
    Bindings: {
          DATABASE_URL: string
    
      }
  }>();


  postRouter.post('/',async (c) =>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const bodyreq =await c.req.json()
    const parserbody = blogSchema.safeParse(bodyreq)
    if(!parserbody.success){
        return c.json({
            msg: "worng input"
        })

    }

    try {
        const blog = await prisma.blog.create({
            data:{
                userId:bodyreq.userId,
               title:bodyreq.title,
               body: bodyreq.body
            },
            select:{
                user:true,
                title:true,
                body:true
            }
        })
        return c.json({msg:"blog created",blog:blog})
    } catch (error) {
        return c.text("error")
        
    }
  })

postRouter.get("/",async (c)=>{
    c.text("router is working")
  
})
postRouter.get("/:id" ,async (c)=>{

})

postRouter.put("/:id" ,async (c)=>{
  
})
postRouter.delete("/:id" ,async (c)=>{
  
})