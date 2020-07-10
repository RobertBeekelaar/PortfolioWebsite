import React from 'react'
import "./DrawerToggleButton.scss"

const DrawerToggleButton = (props) => {
  const {click} = props
 
  return (
    <button className="DrawerToggleButton"  onClick={() => click()}>
      <div className="button_line" />
      <div className="button_line" />
      <div className="button_line" />
    </button>
  )
}
export default DrawerToggleButton