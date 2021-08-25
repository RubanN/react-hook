import React,{useState,useEffect} from 'react'

function UseState8() {
  const [count,setCount] = useState(0)
//   const [name,setName] = useState("ruban")
//   useEffect(()=>{
//       console.log(`Hi ${name} you clicked ${count} times` );
//   },[name,count])

// Similar to componentDidMount and componentDidUpdate:
useEffect(()=>{
    // Update the document title using the browser API
    document.title =`you clicked${count} times`
})
  return (
        <div>
           <p>you clicked ${count} times</p>  
           <button onClick={()=>setCount(count+1)}>click me</button>          
          
        </div>
    )
}

export default UseState8
