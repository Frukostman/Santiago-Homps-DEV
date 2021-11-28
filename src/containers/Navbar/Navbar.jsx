import './navbar.scss'

const Navbar = () => {

    return(
        <nav className="navbar sticky-top">
            <a className="navbar__link" href="#about">ABOUT ME</a>
            <a className="navbar__link" href="#skills">SKILLS</a>
            <a className="navbar__link" href="#portfolio">PORTFOLIO</a>
            <a className="navbar__link" href="#contact">CONTACT</a>
        </nav>
    )
}

export default Navbar