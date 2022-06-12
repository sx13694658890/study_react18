import React from 'react';
import "./index.css";
const Time = (props) => {
    const {date}=props

    return (
        <div className='item'>
            <div className='item-mouth'>{date.toLocaleDateString("zh-CN",{month:"long"})}</div>
            <div className='item-day'>{date.getDate()}</div>
        </div>
    );
}

export default Time;
