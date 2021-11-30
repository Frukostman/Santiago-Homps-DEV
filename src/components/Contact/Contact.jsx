import './contact.scss'
import Title from '../Title/Title'
 import Swal from 'sweetalert2'

const Contact = () => {

    const success = () => {
            Swal.fire(
            'Thanks!',
            'I´ll be in touch soon!'
            )
            window.scrollTo(0, 0);
    }

    return (
        <>
            <section id="contact" className="contact">
                
                <Title text="CONTACT" titleColor='Dark' rectangleColor='BGC_Atention'/>

                <div className="container">
                    <form className="form" action="https://formsubmit.io/send/santiagohomps@gmail.com" method="POST" id="form">

                        <label className="form-label" id="label1" for="name"></label>
                        <input className="form-input form-name" type="text" name="name" id="input1" placeholder="Name"></input>

                        <label className="form-label" id="label2" for="email"></label>
                        <input className="form-input" type="email" name="email" id="input2" placeholder="Email"></input>
                        
                        <label className="form-label form-email" id="label3" for="message"></label>
                        <textarea className="form-input form-message" type="text" name="message" id="input3" rows="3" placeholder="Message"></textarea>
                        
                        <input className="form-fake" name="_formsubmit_id" type="text"></input>
                        <input className="form-button" type="submit" value="SEND" id="btnSubmit" onClick={() => success()}></input>                   
                    </form>
                </div>
                <div className="top">
                    <a href="#navbar">
                        <i className="fas fa-arrow-alt-circle-up up" ></i>
                    </a>
                </div>
            </section>
        </>
    )

}

export default Contact