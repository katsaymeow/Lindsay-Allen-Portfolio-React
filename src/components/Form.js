import React from "react";
import {Form, Col, Button} from "react-bootstrap";

const style = {
    formGr: {
        width: '600px',
        display: "block",
        text: 'center',
        margin: '15px'
    },
    button: {
        margin: '15px',
    }
}

// object.seal to store data in state
const formEmailData = Object({
    name: "",
    email: "",
    message: ""
});

export default function FormUp(){

// useState to hook data without extra classes from global
    const [formData, updateFormData] = React.useState(formEmailData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim()
        });
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        alert(`Thank you for you time. Have a wonderful day.`);

        const templateId = 'template_ex027ti';

        const serviceId = 'service_l73sp8j';
        sendFeedback(serviceId, templateId, {from_name: formData.name, message: formData.message, email: formData.email });
    

        console.log(formData);
        console.log(updateFormData);
    };

    const sendFeedback = (serviceId, templateId, variables) => {
        window.emailjs.send(
            serviceId, templateId, variables
        ).then(res => {
            
            console.log('email sent')
        }).catch(err => console.error('there is an error', err))
    };
    
    return (
        <Form>
            <Form.Group as={Col} controlId="formGridName" style={style.formGr}>
                <Form.Label style={style.formGr}>Name</Form.Label>
                <Form.Control onChange={handleChange}
                name="name" type="name" placeholder="Boo the Void"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" style={style.formGr}>
                <Form.Label style={style.formGr}>Email</Form.Label>
                <Form.Control onChange={handleChange} name="email" type="email" 
                placeholder="BootheVoid@cats.com" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMessage" style={style.formGr}>
                <Form.Label style={style.formGr}>Message</Form.Label>
                <Form.Control onChange={handleChange}
                 name="message" as="textarea" rows={5} placeholder="Say Hi!"/>
            </Form.Group>

            <Button onClick={handleSubmit} variant="success" type="submit" style={style.button}>Submit</Button>
        </Form>
    )};

