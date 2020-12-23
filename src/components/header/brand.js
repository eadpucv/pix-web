import React from "react"
import logo from "../../assets/img/logo.svg"
import { Link } from "gatsby"

export default function Brand(props) {
  return(
    <Link to={`/`}>
      <img src={logo} alt="PiX Logo" />
    </Link>
  )
}