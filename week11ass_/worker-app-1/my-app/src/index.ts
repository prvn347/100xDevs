import { Hono } from 'hono'
import { userSchema ,blogSchema} from './zod'
import { prettyJSON } from 'hono/pretty-json'
import { userRouter } from '../routes/userRouter'
import { postRouter } from '../routes/postRouter'
import { Router } from 'hono/router'
import { cors } from 'hono/cors'
const prisma = new PrismaClient()
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'
import { verify,sign } from 'hono/jwt'



const app = new Hono<{
  Bindings: {
		DATABASE_URL: string
   
	}
}>()

// app.use('/posts/*', async (c, next) => {
//   const header  = c.req.header("autherization") || ""
//   const token = header.split("")[1]
//   const verified = await verify(token,"secret")
//   if( verified){
//      await next()  
    
//   }

// })
app.get("/",(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  return c.text("Main page")
})


app.route("/users", userRouter);
app.route('/posts', postRouter);
export default app
