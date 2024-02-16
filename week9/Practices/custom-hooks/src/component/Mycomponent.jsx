import React, { useEffect, useState } from 'react';

// export function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }


export function MyComponent() {
    const [render,setRender] = useState(true)
  useEffect(() => {
    console.log("componetn mounted")
    // Perform setup or data fetching here
setTimeout(() => {
    setRender(false)
}, 2000);
    return () => {
        console.log("component unmounted")
      // Cleanup code (similar to componentWillUnmount)
    };
  }, [render]);

  return <div>
    <span>HI from my component</span>
  </div>
  // Render UI
}