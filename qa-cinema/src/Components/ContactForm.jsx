import React from "react";
import { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
                                                email: "",
                                                subject: "",
                                                message: ""
                                            });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    // Handle the on Submit event (e) and prevent 
    // default DOM behaviour, to implement our own
    const handleSubmit = (event) => {
        // const {email, subject, message} = formData;
        // if(!email) or  
        event.preventDefault();
        alert(`Email: ${formData.email},
            Subject: ${formData.subject}, 
            Message: ${formData.message}`
        );
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
                    for="email">
                        Email
                    </label>
                    <input 
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        aria-describedby="emailHelp"
                        name="email"
                        // class="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p className="text-red text-xs italic">Please fill out this field.</p>
                    <small id="emailHelp" class="form-text text-muted">Please enter your email (required).</small>
                </div>
                <div className="flex-1">
                    <label
                     className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                     for="subject">
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
                    for="message">
                        Message
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="message"
                        name="message"
                        type="textarea"
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