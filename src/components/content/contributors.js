import React from "react"
import JSONData from "../../data/contributors.json"
import {Profile} from "../elements/profile" 

export default function Contributors(props) {
  return(
    <div className="contributors">
    {JSONData.map((data, index)=>{
      return (
        <Profile key={index} src={data.avatar} to={data.url} alt={data.name} title={data.name} />
      )
    })}
    </div>
  )
}