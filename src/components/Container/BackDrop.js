import React from "react"
import "./BackDrop.scss"

const BackDrop = (props) => {
  const { click, show } = props

  return <div className={`BackDrop ${show && "open"}`} onClick={click} />
}
export default BackDrop
