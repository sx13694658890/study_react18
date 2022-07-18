import React, { createElement } from 'react';
import ReactDOM  from 'react-dom';
import "./index.css";
const Hello=()=>{
    return (
        <div className='back-drop' >
           <div className='back-message'> hello   portal</div>
        </div>
    )
}


export default function Index() {
    const a=document.createElement("div")
   a.id="another-root"
  return (
    <div >
        {
            ReactDOM.createPortal(<Hello/>,document.body.appendChild(a))
        }
    </div>
  )
}
