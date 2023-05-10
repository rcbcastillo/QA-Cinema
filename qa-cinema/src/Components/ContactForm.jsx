import React from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
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

        event.preventDefault();
        alert(`Email: ${formData.email},
            Subject: ${formData.subject}, 
            Message: ${formData.message}`
        );
    }

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                <h1 className="custom-header">Please contact us!</h1>
                    <div class="form-group">
                        <label for="email">
                            Email
                        </label>
                        <input
                            id="email"
                            aria-describedby="emailHelp"
                            name="email"
                            class="form-control"
                            placeholder="Enter email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <small id="emailHelp" class="form-text text-muted">Please enter your email (required).</small>
                    </div>
                    <div class="form-group">
                        <label for="subject" sm={2}>
                            Subject
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            placeholder="Subject - required"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="message">
                            Text Area
                        </label>
                        <input
                            id="message"
                            name="message"
                            type="textarea"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <button 
                        className="custom-button"
                        type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactForm;