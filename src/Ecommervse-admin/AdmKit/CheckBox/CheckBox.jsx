import React,{useState} from 'react'
import { Checkbox } from "@material-ui/core"

export default function CheckBox() {
    const [checked,setChecked] = useState(checked)
    const handleChange =()=>{
        setChecked(event.target.checked);
        // onCheck(!checked,event.target.nam)
    }
    return (
        <div>
            <Checkbox/>
        </div>
    )
}
