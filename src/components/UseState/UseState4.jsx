import React,{useState} from 'react'

function UseState4() {
    const [count,setCount] = useState(0)
    console.log(setCount);
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Count</button>
              
        </div>
    )
}

export default UseState4
