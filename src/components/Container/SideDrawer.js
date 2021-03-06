import React from "react"
import "./SideDrawer.scss"

const SideDrawer = (props) => {
  const { show, click } = props
  let drawerClasses = ["SideDrawer"]

  if (show) {
    drawerClasses = ["SideDrawer open"]
  }

  const handleRef = (ev) => {
    const targetElm = document.querySelector(`.${ev.currentTarget.value}`)
    // targetElm.scrollIntoView({behavior: 'smooth'})
    // window.scrollBy(0, -50)
    window.scrollTo({ top: targetElm.offsetTop - 47.5, behavior: "smooth" })
    click()
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <button
            onClick={(ev) => {
              handleRef(ev)
            }}
            value="Facades"
          >
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
    </nav>
  )
}

export default SideDrawer
