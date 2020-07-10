import React from "react"
import DrawerToggleButton from "./DrawerToggleButton"
import "./NavBar.scss"

const NavBar = (props) => {
  const { DrawerClickHandler } = props

  const handleRef = (ev) => {
    console.log(ev.currentTarget.value)
    const targetElm = document.querySelector(`.${ev.currentTarget.value}`)
    targetElm.scrollIntoView()
  }

  return (
    <header className="NavBar">
      <nav className="Navigation">
        <div className="hamburgerButton">
          <DrawerToggleButton click={DrawerClickHandler} />
        </div>
        <div className="Logo">
          <img src={require('./LogoRB.png')}/>
        </div>
        <div className="List">
          <ul>
            <li>
              <button onClick={(ev) => handleRef(ev)} value="Facades">
                Facades
              </button>
            </li>
            <li>
              <button onClick={(ev) => handleRef(ev)} value="Portraits">
                Portraits
              </button>
            </li>
            <li>
              <button onClick={(ev) => handleRef(ev)} value="Left_Structures">
                Left Structures
              </button>
            </li>
            <li>
              <button onClick={(ev) => handleRef(ev)} value="Natural_Elements">
                Natural Elements
              </button>
            </li>
            <li>
              <button onClick={(ev) => handleRef(ev)} value="Analogues">
                Analogues
              </button>
            </li>
            <li>
              <button onClick={(ev) => handleRef(ev)} value="Commissioned">
                Commissioned
              </button>
            </li>
            <li>
              <button onClick={(ev) => handleRef(ev)} value="Mixed_Media">
                Mixed Media
              </button>
            </li>
          </ul>
        </div>
         <div className="Spacer" />
      </nav>
    </header>
  )
}

export default NavBar
