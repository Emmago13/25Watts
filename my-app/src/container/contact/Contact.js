import React, {useState} from 'react';
import ContactImg from '../../assets/img/contact-image@2x.png';
import { sendForm } from '../../axios';
import Alert from 'react-bootstrap/Alert';


const Contact = () =>{

    const [dataForm, setDataForm] = useState({});
    const [showAlert,setShowAlert] = useState(false);
    const [error,setError] = useState(false);
    const [validated,setValidated] = useState(true)
    const [checkVal,setCheckVal] = useState(false)


    const handleChange = (e) =>{
        setDataForm((prevData)=>{
            return{
                ...prevData,
                [e.target.name] : e.target.value,
            }
        })
        setValidated(true);
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.currentTarget;
        
        if (form.checkValidity() === false) {
            setError(true);
            setShowAlert(true);
            setValidated(false)
        }else{
            const response = await sendForm(dataForm);
            if (response.status === 201) {
                setValidated(true)
                setCheckVal(true)
                setShowAlert(true);
                setError(false);
                setTimeout(() => {setShowAlert(false)},2000);
                setTimeout(() => {setCheckVal(false)},2000)
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
                            placeholder="Name *"
                            className={validated ? checkVal ? 'was-valid' : 'default' : null && validated ? 'default' : 'was-invalid'} />
                            <span className={validated ? 'd-none' : 'invalid'}>This field is required</span>
                        </label>
                        <label>
                            <input 
                            onChange={(e)=>handleChange(e)} 
                            required 
                            type="email" 
                            name="email" 
                            placeholder="Email *" 
                            className={validated ? checkVal ? 'was-valid' : 'default' : null && validated ? 'default' : 'was-invalid'} />
                            <span className={validated ? 'd-none' : 'invalid'}>This field is required</span>
                        </label>
                        <label>
                            <input 
                            onChange={(e)=>handleChange(e)} 
                            required
                            type="text" 
                            name="phone" 
                            placeholder="Phone *"
                            className={validated ? checkVal ? 'was-valid' : 'default' : null && validated ? 'default' : 'was-invalid'} />
                            <span className={validated ? 'd-none' : 'invalid'}>This field is required</span>
                        </label>
                        <label>
                            <textarea 
                            onChange={(e)=>handleChange(e)} 
                            required 
                            name="message" 
                            cols="30" rows="10" 
                            placeholder="Message *"
                            className={validated ? checkVal ? 'was-valid' : 'default' : null && validated ? 'default' : 'was-invalid'} >
                            </textarea>
                            <span className={validated ? 'd-none' : 'invalid'}>This field is required</span>
                        </label>
                        {showAlert ? 
                        !error ? 
                        <Alert variant='success'>Message sent successfully</Alert> : 
                        <Alert variant='danger'>Complete all fields</Alert> 
                        : null}
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <img src={ContactImg} alt="contacto" loading="lazy"/>
        </section>
    )
}



export default Contact;