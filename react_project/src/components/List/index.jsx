import React from 'react'
import "./index.css";
export default function index(props) {
  return (
    <ul className='list'>
          {props.children}
    </ul>
  )
}
