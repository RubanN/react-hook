import React,{useState} from 'react'
 



function UseState1() {
 const [message,setMessage] = useState("")
 const [messageList,setmessageList] = useState([]) 
 return (
        <div>
            <input
            type="text"
            // value={messageObj.message}
            placeholder="Enter a message"
            value={message}
            // onChange={e=>{
            //    const newMessageObj  = {message: e.target.value};
            //    setMessage(newMessageObj)
            // }}
            // onChange={e=>{
            //     const val = e.target.value;
            //     setMessage(prev=>{
            //         return {...prev,message:val}
            //     })
            // }}

            // onChange={e=>{
            //     const val = e.target.value;
            //     setMessage(prev=>{
            //         return Object.assign({},prev,{message:val});
            //     })
            // }}

            onChange={e=>{
                setMessage(e.target.value)
                console.log(setMessage);
            }}
            />
            <input
              type="button"
              value="Add"
              onClick={e=>{
                  setmessageList([
                      ...messageList,
                      {
                // Use the current size as ID (needed to iterate the list later)
                      id:messageList.length+1,
                      message:message
                      }
                  ]);
                  setMessage("")
              }}
            />
            <ul>
                {messageList.map(m=>{
                    <li key={m.id}>{m.message}</li>
                })}
            </ul>
          
        </div>
    )
}

export default UseState1
