import React,{useState,useEffect} from 'react'

function UseEffect2() {
    const [count,setCount] = useState(0);
  useEffect(() => {
      document.title=`You are increasing ${count}`
  })

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>click</button>
        </div>
    )
}

export default UseEffect2
