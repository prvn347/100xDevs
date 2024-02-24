import { Hono } from 'hono'
import { userRouter } from '../routes/userRouter'
import { blogRouter } from '../routes/blogRouter'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'






const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    SECRET_KEY: string
	}
}>();
app.use('/api/v1/blog/*', async (c, next) => {
  const header = c.req.header("autherization") || ""

  const token = header.split("")[1]
  const verified = await verify(token,c.env.SECRET_KEY)
  if( verified){
     await next()  
    
  }
 
})

app.get('/', (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  
  return c.text('Hello Hono!')
})


app.route('/api',userRouter)
app.route('/api',blogRouter)


export default app
