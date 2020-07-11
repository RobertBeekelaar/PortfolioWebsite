import React from "react"
import DrawerToggleButton from "./DrawerToggleButton"
import "./NavBar.scss"

const NavBar = (props) => {
  const { DrawerClickHandler } = props

  const handleRef = (ev) => {
    console.log(ev.currentTarget.value)
    const targetElm = document.querySelector(`.${ev.currentTarget.value}`)
    // targetElm.scrollIntoView({behavior: 'smooth'})
    // window.scrollBy(0, -50)
    window.scrollTo({ top: targetElm.offsetTop - 47.5, behavior: "smooth" })
  }

  return (
    <header className="NavBar">
      <nav className="Navigation">
        <div className="hamburgerButton">
          <DrawerToggleButton click={DrawerClickHandler} />
        </div>
        <div className="Logo">
          <img src={require("./LogoRB.png")} />
        </div>
        <div className="Spacer" />
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
        <ul className="FooterList">
          <li className="LinkedInButton">
            <a
              href="https://www.linkedin.com/in/robert-beekelaar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li className="InstagramButton">
            <a
              href="https://www.instagram.com/robertbeekelaar/?hl=nl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
          </li>
          <li className="EmailButton">
            <a href="mailto:info@robertbeekelaar.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
