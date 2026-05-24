import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
        <div id="nav-links">
            <li><a href="./components/HomeHero/FirstChannel">First Channel</a></li>
            <li><a href="#">|</a></li>
            <li><a href="#about">Second channel</a></li>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
