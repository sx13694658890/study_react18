import React,{useState,useRef} from 'react';

export default function Index() {
const [counter,setSounter]=useState(0)
const [data,setdata]=useState({name:"咱们"});
const btRef=useRef()

  return (
    <div>
        <p>数量变化：{counter}</p>
        <p>{data.name}</p>
        <button onClick={()=>{setSounter(counter-1)}}>-</button>----
        <button  onClick={()=>{setSounter(counter+1)}}>+</button>-------
        <button  onClick={()=>{setdata((prevdata)=>{
          
          return {name:"小王"}
        })}}>data</button>-------
        <div ref={btRef}>ref</div>
    </div>
  )
}
