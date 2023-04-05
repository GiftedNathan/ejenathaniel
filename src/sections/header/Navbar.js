// the navigation ba 

import './navbar.css'


const Navbar = () => {
    const navMenu = (
        <nav className="nav">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="#portfolio">portfolio</a>
            <a className="nav-link" href="#about">about</a>
            <a className="nav-link" href="#resume">resume</a>
            <a className="nav-link" href="#services">services</a>
            {/* <a className="nav-link disabled" href="#blog">blog</a> */}
            <a className="nav-link" href="#contact">contact</a>
        </nav>

    )

    return (
        navMenu
    )
}


export default Navbar
