import { resolve } from "path";


// async function sleep(millis) {
   

//     const promise = new Promise((resolve)=>{
//         setTimeout(() => {
//             return resolve(millis)
//         }, millis);
//     })
    
// }


var cancellable = function(fn, args, t) {
    const timer=   setInterval(() => {
          fn(...args) 
        }, t);
  const CancleFn = function(){

    clearInterval(timer)
  } 
  return CancleFn

};