import React from "react";
import { Link } from "react-router-dom";


export default function header(props) {
  return (
      
    <header>
       
        <h1>{props.title}</h1>
        <nav>
          {
          props.navitems.map(function(item,index){
            return<Link key={index}to={item}>{item}</Link>
          })
        }
          </nav>
    </header>

  )
}
