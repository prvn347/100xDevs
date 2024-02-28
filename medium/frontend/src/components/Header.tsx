// import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { TextButton } from "./TextButton";

interface name{
    name1?:string,
    name2?:string,
    route1?:any,
    route2?:any
}

export function Header({name1,name2,route1,route2}:name){
    
    return <div>
        <div className=" bg-beige">
            <div className="px-12 ">
                <div className=" flex justify-between p-2">
                    <div className=" flex justify-center items-center">
                        <a href="/">
                        <svg width="50px" height="50px" viewBox="0 -55 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                            <path d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z" fill="#000000">

                            </path>
                            </g>
                        </svg>
                        </a>
                    <span className=" text-center font-glory text-3xl ">&nbsp;sastaMedium</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <TextButton link={name1} onclick={route1} subheading={""}/>
                        <Button name={name2} onclick={route2} />
                    </div>
                </div>
               
            </div>
                        <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
            
        </div>
    </div>
}
