import React from 'react'
import './Breadcrumb.scss'
import {Link,useLocation} from "react-router-dom";

export default function Breadcrumb() {
  let location = useLocation();

  return (
    <div className='breadcrumb'>
      <ul>
        <li><Link to="/Product" className='link'>Products</Link></li>
        <li>{location.state !== undefined ? " / "+location.state.name : null}</li>
      </ul>
    </div>
  )
}
