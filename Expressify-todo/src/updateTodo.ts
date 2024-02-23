import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function updateTodo(todoId: number){
    const res = await prisma.todo.update({
        where: {
            id:todoId
        },
        data:{
           done:true
        },
        select:{ 
            title:true,
            description:true,
            done:true,
           id:true
        }
    })
console.log("update is:", res)
return res;
}
updateTodo(1)