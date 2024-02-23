import { Hono } from 'hono'

const app = new Hono()
async function authMiddleware(c:any,next:any){
  if(c.req.header("Autherization")){
   await  next()

  }
  else{
  return  c.json({
    msg:"you are not allowed"

    })
  }

}
app.use(authMiddleware)
app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app