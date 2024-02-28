

export interface name {
    label?:string,
    onclick:any
}

export function Button({label,onclick}:name){

    return <div className="p-3">
        <button type="submit" onClick={onclick} className="text-center rounded-3xl bg-black font-bold  border-1 tracking-wider text-white font-merat text-md  p-2 px-6">{label}</button>
    </div>
}