import './skill.scss'

const Skill = ({skillLogo, skillName, skillLevel}) => {

    return(
        <>  
                <li className="skill">
                    <i className={`skill_Logo ${skillLogo}`}></i>
                    <div className="skill_Info">
                        {/* <h5 className='skill_Name'>{skillName}</h5>
                        <p className='skill_Level'>Level: <b>{skillLevel}</b></p> */}
                    </div>
                </li>
            
        </>
    )

}

export default Skill


