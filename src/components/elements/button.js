import React from "react"
import {Link} from "gatsby"

export default function Button(props) {
  const getButtonClasses = ()=>{
    let classes = [ 'btn' ];
    if (props.type !== undefined) {
      classes.push( 'btn-'+props.type )
    }
    if (props.size !== undefined ) {
      classes.push( 'btn-'+props.size )
    }
    if (props.isBlock) {
      classes.push('btn-block')
    }
    return classes.join(' ');
  }

  return(
    <Link to={props.to} className={getButtonClasses()}>
      {props.children}
    </Link>
  )
}