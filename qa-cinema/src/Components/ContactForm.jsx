import React from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const emailServiceID = 'service_01gk0xb';
    const emailTemplateID = 'template_14qpanu';
    const emailPublicKey = 'iZfkvRJeWhM7gWGWL';

    const [formData, setFormData] = useState({
                                                email: "",
                                                subject: "",
                                                message: "",
                                            });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    // Handle the on Submit event
    const handleSubmit = (event) => {
        // React - prevent default DOM behaviour, to implement our own
        event.preventDefault();
        
        // TODO: fix the regex for emails
        let regex = new RegExp('/[^\s@]+@[^\s@]+\.[^\s@]+/');
        const {email, subject, message} = formData;
        // if((!email) || (!regex.test(email))) {
        //     alert('invalid email');
        //     return;
        // }
        
        // Parameters that match our EmailJS email template
        // TODO - add subject to template?
        const emailTemplateParams = {
            to_name: 'QA Cinema',
            from_name: 'Barry',
            message: 'From app',
            reply_to: 'ellohez@gmail.com',
        }
        
        emailjs.sendForm(emailServiceID, emailTemplateID, emailPublicKey, emailTemplateParams)
        .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
            alert("An error occurred, Please try again", error.text);
        });

        // alert(`Email: ${email},
        //     Subject: ${subject}, 
        //     Message: ${message}`);
    }

    return (
        <>
        <div className="items-center justify-between">
        <h1 className="custom-header">Please contact us!</h1>
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}>
                <div className="flex-1">                 
                    <label  
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="email">
                        Email
                    </label>
                    <input 
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        // aria-describedby="emailHelp"
                        name="email"
                        placeholder="Enter email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {/* <p id='email-warning' className={ (validEmail ? 'hidden-invalid-p' : 'visible-invalid-p') }> */}
                        {/* Please input a valid email.</p> */}
                    {/* <small id="emailHelp" class="form-text text-muted">Please enter your email (required).</small> */}
                </div>
                <div className="flex-1">
                    <label
                     className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                     htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="subject"
                        name="subject"
                        placeholder="Subject - required"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex-1">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="message">
                        Message
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="message"
                        name="message"
                        type="textarea"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-1">
                    <button 
                    className="custom-button"
                    type="submit">
                        Submit
                    </button>
                </div>
        </form>
        </div>
        </>
    )
}

export default ContactForm;