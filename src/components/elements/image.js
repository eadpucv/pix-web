import React from "react"

export default function Image({src, alt, ...imageProps}) {
  if (src !== undefined) {
    return(
      <figure className={`image`}>
        <img src={require('../../assets/img/'+src)} alt={alt} {...imageProps} />
      </figure>
    )
  }
}
