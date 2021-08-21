import React,{useState} from 'react'

function UseState() {
    //without using object destructuring
    // const messageState = useState("");
    // const message = messageState.state;
    // const setMessage = messageState
    
        // const [message,setMessage]= useState("")
      //Using an object as a state variable with useState hook
       const [messageObj,setMessage] = useState({message:""});
        // console.log(setMessage);
    return (
        <div>
         {/* <input
         type = "text"
         value={message}
         placeholder="Enter some Letters"
         onChange={e=>{
             const val = e.target.value;
             setMessage(prev=>prev+val);
         }}
         />       
         <strong>{message}</strong> */}
         <input
           type="text"
           value={messageObj.message}
           placeholder="Enter a message"
        //    onChange={e=>{
        //        messageObj.message = e.target.value;
        //        console.log("messageObj--------?>",messageObj);
        //        setMessage(messageObj);// Doesn't work
        //        console.log(messageObj);
        //    }}
           onChange={e=>{
               const newMessageObj = {message:e.target.value};
               setMessage(newMessageObj);
               console.log(newMessageObj);
           }}
         />

<strong>{messageObj.message}</strong>


        </div>
    )
}

export default UseState
