import React from "react"
import {Link} from "gatsby"

export default function Footer() {
  return(
    <footer className={`main-footer`}>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p>
              Este es un proyecto de código abierto bajo la licencia <a href="http://opensource.org/licenses/Artistic-2.0" target="_blank" rel="noreferrer">Artistic License 2.0</a> 
            </p>
            <p>
              Diseñado y desarrollado con cariño en <a href="http://www.ead.pucv.cl/" target="_blank" rel="noreferrer">e[ad] Esuela de Arquitectura y Diseño PUCV</a>
            </p>
            <p>PiX versión 1.0.0</p>
            <p><a href="https://github.com/eadpucv/pix" target="_blank" rel="noreferrer">Ver el repositorio en Github</a></p>
          </div>
          <div className="col-md-3">
            <ul className={`nav flex-column`}>
              <li className="nav-item">
                <Link to="/faq" className="nav-link" activeClassName="active">Preguntas frecuentes</Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" activeClassName="active" className="nav-link">Contáctanos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}