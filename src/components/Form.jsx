
import { useState } from "react";
function Form(props){
    const [state, setState] = useState(false)
    return(
        <div>
            <input type={`${props.tipo}`} placeholder={`${props.target}`} 
             class={`w-72 h-10 shadow-xl rounded-lg px-5 border border-slate-500 `} > 
             </input>
        </div>
    )
}

export default Form;