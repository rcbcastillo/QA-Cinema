import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import QAPopup from './QAPopup';
import { emailServiceID, emailTemplateID, emailPublicKey } from '../assets/email.js';

const ContactForm = () => {

    const [formData, setFormData] = useState({
                                                fName: '',
                                                email: '',
                                                subject: '',
                                                message: '',
                                            });

    const [openPopup, setOpenPopup] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    // Handle the on Submit event
    const handleSubmit = async (event) => {
        // React - prevent default DOM behaviour, to implement our own
        event.preventDefault();

        const {fName, email, subject, message} = formData;
        let comboMessage = `Customer subject: - ${subject} \n Message: ${message}`;
        
        // TODO: fix the regex for emails
        // let regex = new RegExp('/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm');
        // if((!email) || (!regex.test(email))) {
        //     alert('invalid email');
        //     return;
        // }
        
        await emailjs.send(emailServiceID, emailTemplateID, {'to_name': 'QA Cinema',
                                                        'from_name': fName,
                                                        'message': comboMessage,
                                                        'reply_to': email}, emailPublicKey)
        .then((result) => {
            setEmailSent(true);                    
        },
        (error) => {
            setEmailSent(false);
        });
        setOpenPopup(true);
    }

    return (
        <>
        <QAPopup trigger={openPopup} setTrigger={setOpenPopup}>
            <h3>{emailSent ? 'Message sent' : 'Message sending failed'}</h3>
            <p>{emailSent ? 'Thanks for reaching out!' : 'Please try again'}</p>
            <p>{emailSent ? 'We will be in touch as soon as we can' : ''}</p>
        </QAPopup>    
        <div className='content-center'>
        <h1 className='custom-header'>Please contact us!</h1>
            <form className='shadow-md place-items-center rounded 
                                    font-sans text-sm px-8 pt-6 pb-8 mb-6'
                onSubmit={handleSubmit}>
                <div className='flex-auto align-middle w-3/5'>
                    <label
                        className='custom-label'
                        htmlFor='fName'>
                            Name
                    </label>
                    <input
                        className='required-input'
                        id='fName'
                        name='fName'
                        placeholder='Name - required'
                        type='text'
                        required
                        value={formData.fName}
                        onChange={handleChange}   
                    />             
                    <label className='custom-label'
                    htmlFor='email'>
                        Email
                    </label>
                    <input 
                    className='required-input'
                        id='email'
                        // aria-describedby='emailHelp'
                        name='email'
                        placeholder='Enter email'
                        type='email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label
                     className='custom-label'
                     htmlFor='subject'>
                        Subject
                    </label>
                    <input
                        className='required-input'
                        id='subject'
                        name='subject'
                        placeholder='Subject - required'
                        type='text'
                        required
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <label className='custom-label'
                    htmlFor='message'>
                        Message
                    </label>
                    <input
                        className='required-input'
                        id='message'
                        name='message'
                        type='textarea'
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <button 
                        className='custom-button' type='submit'>Submit</button>
                </div>
            </form>
        </div>
        </>  
    )
}

export default ContactForm;