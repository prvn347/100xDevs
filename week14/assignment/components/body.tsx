
interface title{
    title:string,
    description:string
}
export function Body({title, description}:title ){
    
    return <div className=" ">
    <div className=" flex flex-col items-center justify-between mx-auto w-[30%] py-12 ">
      <div className="  ">
            <h1 className=" text-xl font-bold pb-3 ">{title}</h1>
            <p>{description}</p>
        </div>
      </div>
  </div>
}