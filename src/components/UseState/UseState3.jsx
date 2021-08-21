 import React,{useState} from 'react'
 
function countInitail(){
    console.log("Run Function");
    return 4
}

 function UseState3() {
    const [count,setCount] = useState(()=>countInitail())

    // const [count,setCount] = useState(countInitail())
    //  const [count,setCount] = useState(()=>{
    //      console.log('run Function');
    //      return 4
    //  });
     const decremental = ()=>{
         setCount(prev=>prev-1)
         
     }
     const incremental =()=>{
         setCount(prev=>prev+1)
     }
     return (
         <div>
             <button onClick={decremental}>-</button>
             <span>{count}</span>
             <button onClick={incremental}>+</button>
         </div>
     )
 }
 
 export default UseState3
 