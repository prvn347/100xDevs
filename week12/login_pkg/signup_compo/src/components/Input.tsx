
interface input {
    label:string,
    placeholder:string,
    onchange:any

}
 export function InputBox({label,placeholder,onchange}:input){
    return <div>
        <div className=" font-serif text-md font-400  text-left px-2 py-1">
            {label}
        </div>
        <input onChange={onchange} type="text" placeholder= {placeholder} className=" p-2 w-72 rounded-3xl placeholder:font-merat placeholder:text-center placeholder:text-md placeholder:text-black  border font-400 w border-black ring-violet-300 " />
    </div>
 }