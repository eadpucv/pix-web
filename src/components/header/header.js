import React, { useState, useRef } from "react"
import Navigation from "./navigation"
import Brand from "./brand"

export default function Header() {
  const [setActive, setActiveState] = useState("");
  
  return (
    <div className={`container`}>
      <header className={`main-header`}>
        <div className={`brand`}>
          <Brand />
        </div>
        <Navigation />
      </header>
      <header className={ `mobile-header d-block d-sm-none ${setActive}` }>
        <div className="menu-content">
          <a href="#" className="open-menu" onClick={(() => { setActiveState(setActive === "" ? "active" : ""); }) }>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={ `navigation` }>
          <Navigation />
        </div>
      </header>
    </div>
  )
}