import React,{useState} from 'react'

function UseState10() {
    const [title,setTitle] = useState("The first title")
    const change =()=>{
        setTitle("The second")
    }
    return (
        <div>
            {title}
            <button onClick={change}>click</button>
        </div>
    )
}

export default UseState10
