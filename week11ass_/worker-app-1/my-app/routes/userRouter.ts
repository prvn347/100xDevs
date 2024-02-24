import { Hono} from "hono";
import { Router } from "hono/router";
import { userSchema,blogSchema } from "../src/zod";
import { env } from 'hono/adapter'
const prisma = new PrismaClient()
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify,sign, jwt } from "hono/jwt";



export const userRouter = new Hono<{
  Bindings: {
		DATABASE_URL: string
   
	}
}>()

userRouter.post('/signup',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  
    const body = await c.req.json()
    
    const parserPayload = userSchema.safeParse(body)
  console.log(parserPayload)
  if (!parserPayload.success) {
    return c.json({ error: "Invalid input data" });
  }
  try {
    const user = await prisma.user.create({
      data:{
        email:body.email,
        username:body.username,
        password:body.username
      }
    })
    const jwt = await sign({ id: user.id }, "secret");
      
    return c.json({
      msg:"user created succeful!",
      users:user,
      token:jwt
    })
  } catch (error) {
    return c.json({
      error:error
    })
  }
  
  })


  userRouter.post("/signin",async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
    
      const body = await c.req.json()
      
    //   const parserPayload = userSchema.safeParse(body)
    // console.log(parserPayload)
    // if (!parserPayload.success) {
    //   return c.json({ error: "Invalid input data" });
    // }
    try {
     
      const findUser = await prisma.user.findUnique({
        where:{
          email:body.email

        }
      })
      if(findUser){
         const jwt = await sign({ id: findUser.id }, "secret");
      
     
        
      return c.json({
        msg:"user signin succeful!",
        users:findUser,
        token:jwt
      })}
    } catch (error) {
      return c.json({
        error:error
      })
    }
   
  
  })
  