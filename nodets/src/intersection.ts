

interface employe {
    name :string,
    mobno: number
}
interface address{
    name: string,
    address:string
}

type fullemploye = employe & address
const fulldata: fullemploye = {
    name: "prvn",
  address:"jaipur",
  mobno:2342342323
  
  };

    
console.log(fulldata)
    
