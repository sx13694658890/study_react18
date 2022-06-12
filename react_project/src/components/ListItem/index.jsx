import React from 'react';
import "./index.css";
const Index = (props) => {
   const  handlerClick=(event)=>{
        let e=event||window.evnet;
        e.preventDefault();
        console.log("click",props.data.id);
    }
    return (
        <li 
        className='list-item'
        onClick={handlerClick}
        >{props.children}</li>
    );
}

export default Index;
