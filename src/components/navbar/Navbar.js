import React from 'react'
import "./Navbar.css"
import NavbarTop from './NavbarTop'
import NavbarBottom from './NavbarBottom'
import NavbarMain from './NavbarMain'

function Navbar() {
    return (
        <div>
            <NavbarTop />
            <NavbarMain />
            <NavbarBottom />
        </div>
    )
}

export default Navbar