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
                <Form>
                    <FormGroup row>
                        <Label for="email" sm={2}>
                            Email
                        </Label>
                        <Col sm={10}>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email:"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="subject" sm={2}>
                            Subject
                        </Label>
                        <Col sm={10}>
                        <Input
                            id="subject"
                            name="subject"
                            placeholder="Subject - required"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="message" sm={2}>
                            Text Area
                        </Label>
                        <Col sm={10}>
                        <Input
                            id="message"
                            name="message"
                            type="textarea"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <button type="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </FormGroup>
                </Form>
            </section>
        </div>
    )
}

export default ContactForm;