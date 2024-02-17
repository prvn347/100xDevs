// import React, { useEffect, useState } from 'react'
import './App.css'
import { ClassMyComponent } from './component/Classbased';
// that classcompoentn mounted andun mounted example
// function App() {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       setRender(r => !r);
//     }, 5000)
//   }, []);

//   return (
//     <>
//       {render ? <ClassMyComponent /> : <div></div>}
//     </>
//   )
// }


// function MyComponent() {
//   useEffect(() => {
//     console.error("component mounted");

//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return <div>
//     From inside my component
//   </div>
// }

// export default App
//todo useTodos hook
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener('online', () => setIsOnline(true));
//     window.addEventListener('offline', () => setIsOnline(false));
//   }, [])

//   return isOnline;
// }
// function App(){
//   const status = useIsOnline()
//   return <div>
//     {status ? "You are rich you hv internet": "offline you suck!"}
//   </div>
// }
// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//           setLoading(false);
//         })
//     }, n * 1000)
  
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(10);

//   if (loading) {
//     return <div> loading... </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }
//usepointer and useresize screen window hook.
import { useEffect, useState } from 'react'

const useKeyDown = () => {
  const [key, setKey] = useState("");


  const handleKey = (event) => {
    console.log("Key pressed: " + event.key);

    // You can also access other properties of the event object like keyCode, code, etc. if needed
    console.log("Key code: " + event.keyCode);
    console.log("Key code: " + event.code);
    setKey(event.key)
    // setPosition({ x: window.innerWidth, y: window.innerHeight});
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return key;
};

function App() {
  const key = useKeyDown();
  const [count,setCount] = useState(0)
  useEffect(()=>{
    setCount(count => count+1)
  },[key])

  return (
    <>
      <div className=" bg-gradient-to-r from-cyan-500 to-blue-500  h-screen flex  justify-around">
        
        <div className="flex flex-col justify-around">
<div className=" rounded-lg w-full text-center  p-2 px-4 h-max">
<div className=' '>

</div>
<div className='text-lg font-bold  '>
Key Pressed : <span className='bg-white font-bold text-4xl py-2 px-6 rounded-lg'>{key}</span>
<div className=' m-9'>
<span className=''>Counter: <span className='bg-white font-bold text-lg py-2 px-6 rounded-lg'>{count}</span></span>
</div>

</div>
</div>
        </div>
    </div>
    </>
  )
}


// useInterval Hook
// import { useCallback, useEffect, useState } from 'react';

// function useInterval(func,n){

// useEffect(()=>{
//   const value = setInterval(() => {
//    func()
    
//   }, n);
//   return () => {
//     clearInterval(value)
//   }

// },[])


// }

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react';

// function useDebounce (value, delay) {
//   // State to store the debounced value
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     // Set up a timer to update the debounced value after the specified delay
//     const timerId = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     // Clean up the timer if the value changes before the delay has passed
//     return () => clearTimeout(timerId);
//   }, [value, delay]);

//   return debouncedValue;
// };
// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState('');
//   const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

//   // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

//   return (<div>
// Dbouce value is {debouncedValue}
//     <input
//       type="text"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       placeholder="Search..."
//     />
//   </div>);
// };

export default App;