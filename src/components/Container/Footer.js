import React from "react"
import "./Footer.scss"

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="Spacer"></div>
      <div className="Copyright">
        <p> © Robert Beekelaar</p>
      </div>
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
    </div>
  )
}
export default Footer
