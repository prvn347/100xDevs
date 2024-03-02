import { Children } from "react";

export default function banner({Children}:{Children:React.ReactNode})
{
    return <div>
                <div className=" p-2 bg-red-500 text-center shadow-lg border-b-2 ">20% off buy it now</div>
            {Children}
    </div>
}
