import './skill.scss'

const Skill = ({skillLogo, skillName, skillLevel}) => {

    return(
        <>  
                <li>
                    <div className="item">
                        <div className="skill">
                            <i className={`skill__logo ${skillLogo}`}></i>
                        </div>
                        <div className="skill__info">
                            <p>{skillName}</p>
                        </div>
                    </div>
                </li>
            
        </>
    )

}

export default Skill


