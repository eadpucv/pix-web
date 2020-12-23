import React from "react"
import Navigation from "./navigation"
import Brand from "./brand"

export default function Header() {
  return (
    <div className={`container`}>
      <header className={`main-header`}>
        <div className={`brand`}>
          <Brand />
        </div>
        <Navigation />
      </header>
    </div>
  )
}