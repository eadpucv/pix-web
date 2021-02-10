import React from "react"

export default function Container(props) {
  const getContainerClasses = () => {
    let classes = ["element-container"]
    if (props.color !== undefined) {
      classes.push(props.color)
    }
    if (props.type !== undefined) {
      classes.push(props.type)
    }
    if (props.name !== undefined) {
      classes.push(props.name)
    }
    return classes.join(" ")
  }
  return (
    <div className={getContainerClasses()}>
      <div className="container">{props.children}</div>
    </div>
  )
}
