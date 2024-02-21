import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {

  const res = await prisma.user.create({

    data: {
        email:   username,
        password,
        firstName,
        lastName
    },
    select:{
        id:true,
       
        password: true,
        firstName: true
, lastName : true
    }
   }
   )
   console.log(res)
}
// insertUser("admin12", "1234564", "pravin23", "sahu3")

interface user {
    firstName: string,
    lastName : string
}

async function updataData(username:string,{firstName,lastName}: user) {

    const res  = await prisma.user.update({
        where:{
            email: username
        },
        data:{
            firstName,
            lastName
        },
        select:{
            id : true,
firstName: true,
lastName: true
        }
        
    })
    console.log(res);
    
}
// updataData('admin1',{firstName:"neeraj",lastName:"soni"})


async function getUser(username: string) {
  
    const res = await prisma.user.findFirst({
        where:{
            email: username
            
        },
        select:{
            id: true,
            firstName:true,
            lastName: true,

        }
        
    })
    console.log(res)
}
getUser('admin1')