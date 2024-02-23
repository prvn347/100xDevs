import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    
    const res = await prisma.todo.create({
        data:{
            userId,
            title,
            description
        },
        select:{
            title:true,
            description:true,
            done:true,
            id:true

        }
    })
    console.log(res)
    return res;
    
}
createTodo(1,"go to gym","everday at night 9 pm")
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
interface Todo {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
