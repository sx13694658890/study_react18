import React from "react";

import {List,Time,ListItem,Form,Protal,Select} from "./components/"
import {News} from "./pages"
const arr=[
    {
        id:1,
        date:new Date(1994,1,2),
        message:"react study",
        title:"react  study",
        timeTotal:"40分钟"
    },
    {
        id:2,
        date:new Date(1996,4,4),
        message:"vue study",
        title:"vue  study",
        timeTotal:"45分钟"
    },
    {
        id:3,
        date:new Date(2001,10,15),
        message:"angular study",
        title:"angular  study",
        timeTotal:"45分钟"
    }
]

export default function App() {
    const aaa={fontSize:"45px"}
    const flag=false
    const handlerSelect=(value)=>{
        console.log(value);
    }
  return (
    <div>
        <div> <Select title={"年份"} onSelectChange={handlerSelect} /></div>
        <Form></Form>
      <List > 
       {
        arr.map(item=>{
            return <ListItem data={item} key={item.id}>
                <Time date={item.date}/>
                <div className="content">
                    <h5 className="title">{item.title}</h5>
                    <p className="time">{item.timeTotal}</p>
                </div>
                <span  className="delete">x</span>
            </ListItem>
        })
       }
    </List>

    <News title={"官网商城"}/>
    {flag?<Protal></Protal>:null}
    
    </div>
  )
}
