import Title from '../Title/Title'

import './about.scss'

const About = () => {

    return(
        <>
            <section id="about" className="about">
                <Title text="ABOUT" titleColor='Medium' rectangleColor='BGC_Background'/>
                <p className="about_text">
                Fullstack developer, music teacher, Front-end lover. I attended a bootcamp with more than 700 hours of intensive learning that prepared me to work as a web developer, creating projects that were both real and complex. Furthermore, the bootcamp greatly improved my interpersonal skills and gave me the opportunity of teaching to beginner students.
                </p>

            </section>
        </>
    )

}

export default About