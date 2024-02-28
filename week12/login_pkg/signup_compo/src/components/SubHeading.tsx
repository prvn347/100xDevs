// import { usNavigate } from "react-router-dom";

interface HeadingProps {
    label: string;
    linktext:string,
    onclick:any // Assuming name is a string, you can change the type if necessary
}

export function SubHeading({label,linktext,onclick}:HeadingProps){

    return <div className=" font-400 font-merat text-lg py-3 ">
       {label} <span className="text-green-700 cursor-pointer" onClick={onclick}>{linktext}</span>
    </div>

}