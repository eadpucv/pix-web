import React from "react"

export default function Container(props) {
  const getContainerClasses = ()=>{
    let classes = ['element-container'];
    if (props.color !== undefined) {
      classes.push(props.color);
    }
    return classes.join(' ');
  }
  return(
    <div className={getContainerClasses()}>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}