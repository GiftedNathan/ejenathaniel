import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './header.css'
import Navbar from './Navbar'
import Logo from '../../logo-nathan/logo-nath-white.png'






const Header = ({logo}) => {
    const [showMenu, setShowMenu] = useState(true)
    const toggleMenu = () =>{ setShowMenu(!showMenu) }

    const menu = (
        <nav className="menu">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="/about">about</a>
            <a className="nav-link" href="/resume">resume</a>
            <a className="nav-link" href="/portfolio">portfolio</a>
            <a className="nav-link" href="services">services</a>
            <a className="nav-link disabled" href="blog">blog</a>
            <a className="nav-link" href="contact">contact</a>
        </nav>
        
    )
    return (
        <header className="header bg-gradient-open">
            <a className="logo" href="/"> <img src={Logo}  className="site-logo" alt="logo" /> </a>
            <Navbar /> 
            { showMenu ? '' : menu}
            <button className="menu-icon" onClick={toggleMenu}>---</button>
        </header>
    )
}

Header.defaultProps = {
    logo: 'NathaNiel',
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
}

export default Header
