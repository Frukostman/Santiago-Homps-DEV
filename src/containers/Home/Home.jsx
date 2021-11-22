import './home.scss'

import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import SkillList from '../../components/SkillList/SkillList'
import Portfolio from '../../components/Portfolio/Portfolio'
import Contact from '../../components/Contact/Contact'

const Home = () => {

    return(
        <>
            <Header />

            <About />

            <SkillList />

            <Portfolio />

            <Contact />
        </>
    )

}

export default Home