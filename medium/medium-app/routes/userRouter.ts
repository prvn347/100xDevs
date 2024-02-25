import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'

const prisma = new PrismaClient()


export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
        SECRET_KEY:string
	}
}>();

userRouter.post("/signup", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()

    
    try {
        const userExisted = await prisma.user.findFirst({
        where:{
            email:body.email
            

        }
    })
    if(userExisted){
        return c.json({
            msg:"user existed"
        })
    }
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
                name:body.name
               
			}
		});
        
            const token = await sign({id:user.id},c.env.SECRET_KEY)
       
        
        //jwt
        //validation
	
        return c.json({
            msg:user,
            token:token
        })
	} catch(e) {
		return c.status(403);
	}

})
userRouter.post("/signin", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    try {
        const findUser = await prisma.user.findUnique({
            where:{
              email:body.email,
              password:body.password
    
            }
          })
          if(findUser){
             const jwt = await sign({ id: findUser.id }, "secret");
          
         
            
          return c.json({
            msg:"user signin succeful!",
            users:findUser,
            token:jwt
          })}

        //jwt
       
	
      
	} catch(e) {
		return c.status(403);
	}

})