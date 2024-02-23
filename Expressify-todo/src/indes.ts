import express, { Express, Request, Response } from "express";
import { userSchema,todoSchema } from './zod';
import { createUser } from "./createUser";
import { PrismaClient } from '@prisma/client';
import { Jwt } from "jsonwebtoken";


const prisma = new PrismaClient();


const app: Express = express();
app.use(express.json())
const port = 3000;

app.post("/signup", async (req: Request, res: Response) => {
  const payloadData = req.body
  const parserPayload = userSchema.safeParse(payloadData)
console.log(parserPayload)
if(!parserPayload.success){

  return res.status(400).json({ error: "Invalid input data" ,details: parserPayload.error});

}
const { username, password, name } = req.body;
const user = await prisma.user.create({

  data: {
      username,
      password,
      name
  },
  select:{
      id:true,
     username:true,
      password: true,
      name:true

  }
  

 }
 )
const useid = user.id
// const toke = .sign(useid,"PRVN")


 res.json({
  msg: user
 })
}

);
app.post('/todo',async ( req:Request,res:Response) =>{
  const payloadData = req.body
  const parserPayload = todoSchema.safeParse(payloadData)
  if(!parserPayload.success){

    return res.status(400).json({ error: "Invalid input data" ,details: parserPayload.error});
  
  }
  const { userId, title, description } = req.body;
  const todo = await prisma.todo.create({
    data:{
        userId,
        title,
        description
    },
    select:{
        title:true,
        description:true,
        done:true,
        id:true,
        userId:true

    }
})
res.json({
  msg: todo
})

})
app.get("/todos", async function(req:Request,res:Response){
  const {userId} = req.body
  const todos = await prisma.todo.findMany({
    where: {
        userId,
    },
    select: {
        user: true,
        title: true,
        description: true
    }
});
res.json({
  msg: todos
})
})
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});