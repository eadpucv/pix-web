import React, { useState, useRef } from "react"

export function Accordion(props) {
  const [setActive, setActiveState] = useState("");
   const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);
  
  return(
    <div className={`accordion-item`}>
      <button onClick={(() => { 
        setActiveState(setActive === "" ? "active" : ""); 
        setHeightState(
          setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        )
       }) } className={`accordion-header ${setActive}`}>
        {props.title}
      </button>
      <div className={`accordion-content`} style={{ maxHeight: `${setHeight}` }} ref={content}>
        {props.children}
      </div>
    </div>
  )
}

export function AccordionSection(props) {
  return(
    <div className="row accordion-section">
      <div className="col-md-3">
        <h5 className="has-color-orange">{props.title}</h5>
      </div>
      <div className="col-md-7">
        {props.children}
      </div>
    </div>
  )
}