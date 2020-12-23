import React from "react"
import Navigation from "./navigation"
import Brand from "./brand"
import { withPrefix } from "gatsby"

const isHomepage = window.location.pathname === withPrefix("/")

export default function Header() {
  return (
    <div className={`container`}>
      <header className={`main-header`}>
        <div className={`brand`}>
          <Brand isHomepage={isHomepage} />
        </div>
        <Navigation />
      </header>
    </div>
  )
}