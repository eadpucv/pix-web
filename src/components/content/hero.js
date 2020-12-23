import React from "react"
import Brand from "../header/brand"
import Button from "../elements/button"

export default function Hero(props) {
  const renderLogo = ()=>{
    if (props.logo) {
      return <Brand />
    }
  }
  const renderButton = ()=>{
    if (props.hasButton){
      let text = (props.buttonText !== undefined) ? props.buttonText : 'Ver Más'
      let url = ( props.buttonUrl !== undefined ) ? props.buttonUrl : '#'

      return <Button to={url} type="secondary" size="lg">{text}</Button>
    }
  }
  return(
    <div className={'container'}>
      <section className={`hero text-center`}>
        {renderLogo()}
        <p>{props.children}</p>
        {renderButton()}
      </section>
    </div>
  )
}