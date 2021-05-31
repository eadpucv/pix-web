import React from "react"
import { Link } from "gatsby"

export default function Navigation() {
  return (
  <nav role="navigation" className={`main-navigation`}>
    <ul className={`nav`}>
      <li className={`nav-item`}><Link className={`nav-link`} activeClassName="active" to="/que-es/">¿Qué es PiX?</Link></li>
      <li className={`nav-item`}><Link className={`nav-link`} activeClassName="active" to="/recursos/">Recursos</Link></li>
      <li className={`nav-item`}><Link className={`nav-link`} activeClassName="active" to="/nosotros/">Nosotros</Link></li>
      <li className={`nav-item`}><Link className={`nav-link`} activeClassName="active" to="https://eadpucv.github.io/pix/pages/app/">Nueva Partitura</Link></li>
    </ul>
  </nav>
  )
}