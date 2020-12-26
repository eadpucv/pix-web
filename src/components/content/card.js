import React from "react"
import Image from "../elements/image"

export default function Card(props) {
  const getCardClasses = ()=>{
    let classes = ['card'];
    if (props.color !== undefined) {
      classes.push(props.color);
    }
    if (props.name !== undefined) {
      classes.push(props.name);
    }
    return classes.join(' ');
  }
  const getCardImage = () => {
    if (props.img !== undefined) {
      return <Image src={props.img} />
    }
  }
  return(
    <section className={getCardClasses()}>
      <div className={`container`}>
        <div className={`row align-items-center`}>
          <div className={`col-md-6 card-content`}>
            {props.children}
          </div>
          <div className={`col-md-6`}>
            {getCardImage()}
          </div>
        </div>
      </div>
    </section>
  )
}