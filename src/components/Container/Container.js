import React, { useState, useEffect } from "react"
import Content from "./Content"
import NavBar from "./NavBar"
import SideDrawer from "./SideDrawer"
import BackDrop from "./BackDrop"
import Footer from "./Footer"
import PopUp from "./PopUp"
import "./Container.scss"

const query = `*[_type == "post"]{
  title, 
  body,
  "updatedAt": _updatedAt,
  "image": mainImage.asset->{
    url,
    size,
    metadata,
    originalFilename
  }, 
  "categories": categories[]->{
    title,
    "updatedAt": _updatedAt,
    index
  }
}`

const Container = () => {
  const [posts, setPosts] = useState([])

  const [popUp, setPopUp] = useState([])

  const [popUpInfo, setPopUpInfo] = useState([])

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://tfkjvep6.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(
          query
        )}`
      )
      const data = await response.json()
      setPosts(data.result)
    }
    getPosts()
  }, [])

  const [sideDrawerOpen, setsideDrawerOpen] = useState(false)

  const DrawerToggleClickHandler = () => {
    setsideDrawerOpen(!sideDrawerOpen)
  }

  const backdropClickHandler = () => {
    setsideDrawerOpen(false)
  }

  const handlePopUp = (ev) => {
    setPopUp(ev.currentTarget.src)
    setPopUpInfo(ev.currentTarget.alt)
    setShowModal(!showModal)
  }

  let backdrop

  if (sideDrawerOpen) {
    backdrop = <BackDrop click={backdropClickHandler} />
  }

  return (
    <div className="Container">
      <NavBar DrawerClickHandler={DrawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <Content data={posts} click={handlePopUp} />
      {showModal ? (
        <PopUp url={popUp} info={popUpInfo} close={handlePopUp} />
      ) : null}
      <Footer />
    </div>
  )
}

export default Container
