import React from "react"
import "./BackDrop.scss"

const BackDrop = (props) => {
  const {click} = props


  return <div className="BackDrop" onClick={click}/>
}
export default BackDrop
