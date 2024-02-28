interface HeadingProps {
    label: string; // Assuming name is a string, you can change the type if necessary
}

export function Heading({label}:HeadingProps){


    return <div className=" font-400 font-glory text-4xl">
       {label}
    </div>

}