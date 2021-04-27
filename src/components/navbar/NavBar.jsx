import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <div className="name-title">
        <h1>Jeff Irvine</h1>
        <h1>Software Engineer</h1>
      </div>
      <div className="nav-container">
        <button className="nav-links">Tech Stack</button>
        <button className="nav-links">About Me</button>
        <button className="nav-links">Projects</button>
        <button className="nav-links">Thoughts</button>
      </div>
    </>
  )
}

export default NavBar
