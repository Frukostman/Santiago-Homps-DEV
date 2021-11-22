import './header.scss'
import img from '../../resources/images/avatar.png'


const Home = () => {

    return(
        <>
            <header className="intro">
                <div className="header">
                    <img src={img} className="header__avatar" alt="avatar" />
                    <h1 className="header__title">
                        SANTIAGO <br></br><strong>HOMPS</strong>
                    </h1>
                </div>
                <a href="#about">
                    <i className="fas fa-arrow-alt-circle-down down" ></i>
                </a>
            </header>
        </>
    )

}

export default Home