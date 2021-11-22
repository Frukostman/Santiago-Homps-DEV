import './title.scss'

const Title = ({text, titleColor, rectangleColor}) => {

    return(
        <>  
            <h3 className={ `title ${titleColor}` }> {text} </h3>   
            <div className={`rectangle ${rectangleColor}`}></div>
        </>
    )

}

export default Title







