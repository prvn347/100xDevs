import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    
}

getTodosAndUserDetails(1);