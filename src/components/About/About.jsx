import Title from '../Title/Title'

import './about.scss'

const About = () => {

    return(
        <>
            <section id="about" className="about">
                <Title text="ABOUT" titleColor='Medium' rectangleColor='BGC_Background'/>
                <p className="about_text">
                    I'm a fresh Front-end developer taking his first steps into the Back-end side of life and on my way to becoming a full-MERN-stack developer. 
                    <br></br>
                    I am always enthusiastic about new programming challenges and getting the chance to learn a new skill.
                    <br></br>
                    I have a degree in Architecture and a strong interest in UX, design, and computer science. I started programming in HTML, CSS, and Javascript and learned SASS, Bootstrap, Bulma, EJS, WordPress, React, Jest Node.js, Express, Firebase, and MongoDB along the way.
                    <br></br>
                    Native Spanish speaker but fluent in English and Portuguese as well. Swedish is next on the list.
                </p>

            </section>
        </>
    )

}

export default About