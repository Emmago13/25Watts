import React from 'react';
import ContactImg from '../../assets/img/contact-image.png'


const Contact = () =>{
    return(
        <section id="contact" className="section4__contact">
            <div className="section4__div">
                <h3 className="section4__h3">Get in touch<span>We are hiring!</span></h3>
                <div className="section4__div2">
                    <form action="" method="POST" className="section4__form">
                        <label>
                            <input type="text" name="name" placeholder="Name" />
                        </label>
                        <label>
                            <input type="text" name="email" placeholder="Email" />
                        </label>
                        <label>
                            <input type="text" name="phone" placeholder="Phone" />
                        </label>
                        <label>
                            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                        </label>
                        <button type="submit" className="section4__btn">Send</button>
                    </form>
                </div>
            </div>
            <img src={ContactImg} alt="contacto" className="section4__img" />
        </section>
    )
}



export default Contact;