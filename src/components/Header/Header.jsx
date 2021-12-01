import './header.scss'


const Home = () => {

    return(
        <>
            <header className="intro">
                <div className="header">
                    <div className="header__avatar">
                        <img src={`${process.env.PUBLIC_URL}/images/avatar.jpeg`} alt="avatar" className="img-fluid image"/>
                    </div>
                    <div className="header__info">
                        <h1 className="header__info title">SANTIAGO <br></br><strong>HOMPS</strong></h1>
                        <p className="header__info data">Front-end developer</p>
                    </div>
                </div>

                <a href="#about">
                    <i className="fas fa-arrow-alt-circle-down down" ></i>
                </a>
            </header>
        </>
    )

}

export default Home