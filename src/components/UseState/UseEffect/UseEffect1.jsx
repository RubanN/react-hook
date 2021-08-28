import React,{useState,useEffect,useRef} from 'react'

function UseEffect1() {
     const [count,setCount] = useState(0);
     const prevCountRef = useRef();
     useEffect(() => {
     console.log("useEffect", `state ${count}`, `ref ${prevCountRef.current}`);
        prevCountRef.current = count;
     },[count])
     const handleClick = ()=>setCount((prev)=>prev+1);
     console.log("render");
    return (
        <div>
         <button onClick={handleClick}>Click me </button> 
         <p>
         User clicked {count} times; previous value was {prevCountRef.current}

             </p>     
        </div>
    )
}

export default UseEffect1
