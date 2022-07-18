import React from 'react'
import "./index.css";
export default function Index(props) {
  return (
    <ul className='list'>
          {props.children}
    </ul>
  )
}
