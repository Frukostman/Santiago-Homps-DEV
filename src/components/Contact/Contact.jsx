import './contact.scss'

const Contact = () => {

    return (
        <>
            <section id="contact" className="contact">
                <h3 className="contact-title">Contact me</h3>

                <div class="container">
                    <form class="form" action="" id="form">
                        <label class="form-label" id="label1" for="name"></label>
                        <input class="form-input" type="text" name="name" id="input1" placeholder="Name"></input>

                        <label class="form-label" id="label2" for="email"></label>
                        <input class="form-input" type="email" name="email" id="input2" placeholder="Email"></input>

                        <label class="form-label" id="label3" for="message"></label>
                        <input class="form-input" type="text" name="message" id="input3" placeholder="Message"></input>

                        <input type="submit" value="Send" id="btnSubmit"></input>
                    </form>
                </div>
            </section>
        </>
    )

}

export default Contact