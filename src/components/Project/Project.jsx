import './project.scss'
// import hola from '../../resources/images/3-play.png'
// import img from '../../resources/images'
// import route from '../../resources/images/'

const Project = ({projectN}) => {

    return(
        <>  
                <li>
                    
                        <div className="project-card">
                            <img src={`${process.env.PUBLIC_URL}/${projectN.url}`} alt={projectN.name} className="img-fluid project-image"></img>
                            <h5 className="project-title">{projectN.name}</h5>
                            <div className="project-info">
                                <p className="project-category">{projectN.category}</p>
                                <p className="project-description">{projectN.description}</p>
                                <p className="project-skills">{projectN.skills}</p>
                            </div>
                            <div className="project-buttons">
                                {projectN.repository ? 
                                     <a href={projectN.repository} target="blank" className="button-repo">Repo</a>
                                     : ""}
                                <a href={projectN.link} target="blank" className="button-link">Link</a>
                            </div>
                        </div>
                    
                </li>
            
        </>
    )

}

export default Project


