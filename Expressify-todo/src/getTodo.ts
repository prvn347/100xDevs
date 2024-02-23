import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTodos(userId: number) {
    const res = await prisma.todo.findMany({
        where: {
            userId: userId

        },
       
    });
    console.log("Todos found:", res);
    return res; // Optionally, you might want to return the result to the caller
}

getTodos(1); // Example usage
