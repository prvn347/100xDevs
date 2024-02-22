import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const res = await prisma.user.create({

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

       console.log(res)
    
    return res;
}
createUser("pravin343s3g","password3232","pravin1d")

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const res = await prisma.user.findFirst({
        where:{
            id:userId
        }
       

    })
    console.log("user found:" ,res)
    return res;
    
}
getUser(1)
