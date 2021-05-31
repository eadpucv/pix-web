import React from "react"

export function Profile({src, alt, to, ...imageProps}) {
  return(
    <a href={to} target="_blank" rel="noreferrer" className={`image profile`}>
      <img src={src} alt={alt} {...imageProps} />
    </a>
  )
}