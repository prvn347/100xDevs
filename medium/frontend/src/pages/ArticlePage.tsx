import { useNavigate, useSearchParams } from "react-router-dom"
import { Article } from "../components/Article"
import { Header } from "../components/Header"
import { useEffect } from "react";
// import { ProfileName } from "../components/ProfileName"


export function ArticlePage(){
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    // useEffect(()=>{
    //     axios.get("https://payme-n7nv.onrender.com/api/v1/user/bulk?filter=" + filter)
    //     .then(resp =>{
    //         setUsers(resp.data.user)
    //     })
    // },[filter])
const navigate = useNavigate()
    return <div className=" break-words"> 
        <div><Header name2="Write" route2={()=>{navigate('/write')}}/></div>
        <div className="flex justify-center ">
           
           <Article name={"Pravin"} title={"Title"} content={"This is Content.This is Content.This is Content.This is Content.This is Content.This is Content."}/>
        </div>
    </div>
}