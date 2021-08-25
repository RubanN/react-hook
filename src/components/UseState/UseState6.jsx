import React,{useState} from 'react'

function UseState6() {
    //useState with object
    const [name,setName] = useState([{firstName: '', lastName: ''},
    {age:10,gender:""},
]
            
      )
    return (
        <form>
          <input type="text" 
          value={name.firstName}
        onChange={e=>setName({...name,firstName:e.target.value})}
          />
          <input 
          type="text"
          value={name.lastName}
          onChange={e=>setName({...name,lastName:e.target.value})}

          />  
          <h2>{name.age}</h2>
          <h2>Your first name is {name.firstName}</h2>
          <h2>yu last name id {name.lastName}</h2>
          <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default UseState6
