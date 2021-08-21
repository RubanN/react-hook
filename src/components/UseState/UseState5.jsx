import React,{useState} from 'react'

function UseState5() {
   //count destrucing 
//    const [{count,count2},setCount] = useState({count:10,count2:20})
const [count,setCount] = useState(10);
const [count2,setCount2] = useState(20);    
return (
        <div>
        {/* <button
         onClick={()=>{
             setCount(currentState=>({
                ...currentState, 
                count:currentState.count+1,

             }))
         }}
        >
            +
            </button>           
            <div>count 1:{count}</div>
            <div>count 2:{count2}</div>  */}
            <button
            onClick={()=>{
                setCount(c=>c+1)
                setCount2(c=>c+1)
            }}
            >+</button>
                        <div>count 1:{count}</div>
            <div>count 2:{count2}</div>
        </div>
    )
}

export default UseState5
