"use client"
import { Body } from "@/components/body";
import { useState } from "react";

export default function(){
    const [count,setCount] = useState<number>(0)
  

    return <div className="bg-black text-white h-screen">
        <Body title="Welcome to Interactive page" description=" This route features a count button that demonstrates the power of client side interactivity in nextjs .Click the button and see the coutn go up! This intereactive  feature is powered by the 'use client' directive in nextjs . which allows this component to be renedered on the client side."/>
        <div className="flex justify-center"><button className=" border-white border-2 px-4 py-2 rounded-xl" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>   </div> </div>
}