import { Hono } from "hono"
const prisma = new PrismaClient()
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'
import { blogSchema } from "../src/zod"



export const postRouter = new Hono<{
    Bindings: {
          DATABASE_URL: string
    
      },Variables : {
		userId: string,
        blogId: number
     
	}
  }>();


  postRouter.post('/',async (c) =>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const bodyreq =await c.req.json()
    const parserbody = blogSchema.safeParse(bodyreq)
    if(!parserbody.success){
        return c.json({
            msg: "worng input"
        })

    }

    try {
        const userId = c.get('userId')
        console.log(userId)
        const blog = await prisma.blog.create({
            data:{
                
                userId:userId,
               title:bodyreq.title,
               body: bodyreq.body,
            tags: {
            
                create:{
                
                    tags:bodyreq.tags
                    
                
                    
                  
                    
                }
                
                
            }
            },
            select:{
                id:true,
                user:true,
                title:true,
                body:true,
                tags:true,
                
            }
        })
        const blogId = await prisma.tags.create({
            data:{
                blogId:blog.id
            },
            
        })
 await   c.set("blogId",blog.id)
        return c.json({msg:"blog created",blog:blog})
    } catch (error) {
        return c.text("error")
        
    }
  })
  postRouter.get('/blogwithTag', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
         const tagId = await c.req.json()
         const blogId = c.get("blogId")
         const findBlogBy = await prisma.tags.findFirst({
            where:{
                blogId:tagId.id
            },
            select:{
                blog:true
            }
         })

         return c.json({
            msg: "Blogs on this tag",blogs:findBlogBy
         })
    } catch (error) {
        
    }
    
  })

postRouter.get("/",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId')
try {
    const blogs = await prisma.blog.findMany({
        where:{
            userId:userId
            
        }
    })
    return c.json({
        userBlogs:blogs
    })
} catch (error) {
    c.json({
        error:error
    })
    
}
  
})
postRouter.get("/:id" ,async (c)=>{
    const id = c.req.param('id');
 const idInt = parseInt(id)
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const post = await prisma.blog.findUnique({
		where: {
			id:idInt
		}
	});


	return c.json(post);
})

postRouter.put("/:id" ,async (c)=>{
    const id = c.req.param('id');
    const body = await c.req.json();
    const idInt = parseInt(id)
       const prisma = new PrismaClient({
           datasourceUrl: c.env.DATABASE_URL,
       }).$extends(withAccelerate())
       const post = await prisma.blog.update({
           where: {
               id:idInt
           },
           data:{
            title:body.title,
            body:body.body,
            tags:{
                create:{
                    tags:body.tags

                }
            }
           }
       });
   
   
       return c.json(post);
  
})
postRouter.delete("/" ,async (c)=>{
//    const id = c.req.param('id');
const body = await c.req.json()
       const prisma = new PrismaClient({
           datasourceUrl: c.env.DATABASE_URL,
       }).$extends(withAccelerate())
    
    // const idInt = parseInt(id)
    const deletedBlog = await prisma.blog.delete({
        where:{ 
            id:body.id
        }
        
    })
return c.json({
    msg: "blog deletes", deletedBlog:deletedBlog
})
})  