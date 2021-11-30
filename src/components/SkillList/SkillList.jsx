import './skillList.scss'

import Title from '../Title/Title'
import Skill from '../Skill/Skill'

import skillDB from '../../resources/DB/skillsDB' 

const SkillList = () => {

    return(
        <>
            <section id="skills" className="skills">
                    <div className="circle"></div>
                <Title text="SKILLS" titleColor='White' rectangleColor='BGC_Light'/>
                <ul className="skills_list">
                    {skillDB.map((item) => {
                        return (
                            <Skill key={item.id} skillLogo={item.logo} skillName={item.name} skillLevel={item.level}/>
                        )
                    })}
                </ul>
            </section>
        </>
    )

}

export default SkillList