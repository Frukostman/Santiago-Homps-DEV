import Title from '../Title/Title'
import Project from '../../components/Project/Project'

import './portfolio.scss'

import projects from '../../resources/DB/projects' 

const Portfolio = () => {

    return(
        <>
            <section id="portfolio" className="portfolio">
                <Title text="PORTFOLIO" titleColor='Dark' rectangleColor='BGC_Light'/>
                <ul>
                    {projects.map((item) => {
                        return (
                            <Project projectN={item} />
                        )
                    })}
                </ul>
            </section>
        </>
    )

}

export default Portfolio