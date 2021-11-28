import './footer.scss'

const Footer = () => {

    return(
        <footer className="footer">
        <div>
            <ul id="icono" className="footer__listado">
                <a className="footer__listado footer__icono " href="https://www.linkedin.com/in/santiago-homps/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                <a className="footer__listado footer__icono " href="https://github.com/Frukostman/" target="blank"><i className="fab fa-github"></i></a>
                <a className="footer__listado footer__icono " href="https://www.behance.net/santiagohomps" target="blank"><i className="fab fa-behance"></i></a>              
            </ul>
            <h3 className="footer__titulo">Copyright © 2021 &nbsp; | &nbsp; by&nbsp; <i> Santiago Homps </i></h3>
        </div>
    </footer>
    )

}

export default Footer