import React from 'react'
import './NavBar.css'

const NavBar = ({ setComp }) => {

  const onClick = ({ target }) => {
    setComp(target.id)
  }
  return (
    <>
    <div className="nav-container">
      <div className="name-title">
        <h1>Jeff Irvine</h1>
        <h1>Software Engineer</h1>
      </div>
      <div className="nav-buttons">
        <button id="techStack" className="nav-links" onClick={onClick} >Tech Stack</button>
        <button id="aboutMe" className="nav-links" onClick={onClick} >About Me</button>
        <button id="projects" className="nav-links" onClick={onClick} >Projects</button>
        <button id="thoughts" className="nav-links" onClick={onClick} >Thoughts</button>
      </div>
    </div>
    </>
  )
}

export default NavBar
