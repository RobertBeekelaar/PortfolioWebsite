import React from "react"
import "./PopUp.scss"

const PopUp = (props) => {
  const { info, url, close } = props

  return (
    <div className="PopUp" onClick={close}>
      <img src={url} alt={info} onClick={close} />
      <div className="info">
        <p>{info} © Robert Beekelaar</p>
      </div>
    </div>
  )
}

export default PopUp
