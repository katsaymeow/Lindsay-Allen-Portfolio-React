import React from "react";
import {Form, Col, Button} from "react-bootstrap";

export default function FormUp(){

    return (
        <Form>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control name="name" type="name" placeholder="name"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" placeholder="Email">
                <Form.Label>Email*</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMessage">
                <Form.Label>Message*</Form.Label>
                <Form.Control name="message" as="textarea" rows={5} />
            </Form.Group>

            <Button variant="success" type="submit">Submit</Button>
        </Form>
    )};

