import React, {useState} from 'react';
import ContactImg from '../../assets/img/contact-image.png';
import { sendForm } from '../../axios';
import Alert from 'react-bootstrap/Alert';


const Contact = () =>{

    const [dataForm, setDataForm] = useState({});
    const [showAlert,setShowAlert] = useState(false);
    const [error,setError] = useState(false);


    const handleChange = (e) =>{
        setDataForm((prevData)=>{
            return{
                ...prevData,
                [e.target.name] : e.target.value,
            }
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.currentTarget;
        console.log("form.checkValidity()",form.checkValidity());

        if (form.checkValidity() === false) {
            setError(true);
            setShowAlert(true);
        }else{
            const response = await sendForm(dataForm);
            if (response.status === 201) {
                setShowAlert(true);
                setError(false)
                setTimeout(()=>{setShowAlert(false)},3000);
                form.reset();
            }
        }
    }


    return(
        <section id="contact" className="section4__contact">
            <div className="section4__div">
                <h3>Get in touch<span>We are hiring!</span></h3>
                <div className="section4__div--form">
                    <form noValidate onSubmit={(e)=>handleSubmit(e)} method="POST">
                        <label>
                            <input 
                            onChange={(e)=>handleChange(e)} 
                            required 
                            type="text" 
                            name="name" 
                            placeholder="Name" />
                        </label>
                        <label>
                            <input 
                            onChange={(e)=>handleChange(e)} 
                            required type="email" 
                            name="email" 
                            placeholder="Email" />
                        </label>
                        <label>
                            <input 
                            onChange={(e)=>handleChange(e)} 
                            required 
                            type="text" 
                            name="phone" 
                            placeholder="Phone" />
                        </label>
                        <label>
                            <textarea 
                            onChange={(e)=>handleChange(e)} 
                            required 
                            name="message" 
                            cols="30" rows="10" 
                            placeholder="Message">
                            </textarea>
                        </label>
                        {showAlert ? 
                        !error ? 
                        <Alert variant='success'>Mensaje enviado con exito</Alert> : 
                        <Alert variant='danger'>Hubo un error</Alert> 
                        : null}
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <img src={ContactImg} alt="contacto" />
        </section>
    )
}



export default Contact;