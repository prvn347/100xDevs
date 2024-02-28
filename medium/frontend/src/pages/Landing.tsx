import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import Blink from "./Blink";
// import ReactModal from 'react-modal';
// import { useState } from "react";
export function Landing(){
    // const [isOpen, setIsOpen] = useState<boolean>(false);
const navigate = useNavigate()
    return <div>
        <div className=" ">
            <Header name1="Signin" name2="Get Started" route1={()=>{
                navigate("/signin")
            }} route2={()=>{navigate('/signup')}}/>
            
           
        </div>
        <div className="bg-yello h-screen ">
        <div className="flex flex-col justify-around px-8">
                <div className=" font-glory text-7xl font-normal p-3 px-6 " >
                    Stay curious.
                </div>
                <div className=" font-merat text-2xl space-x-2 py-6 px-6 leading-6 ">
                Discover stories, thinking, and <br />
               expertise from writers on any topic.
                </div>
                <div className="p-3">
                    <Button name="Start reading" onclick={()=>{navigate("/signup")}}/>
                </div>
            </div>
            <div className="">
              
            </div>
        </div>
    </div>
}