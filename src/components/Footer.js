import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// I want to add contact info here and create a larger border in the footer that stays on the page.
// still needs style anf function
const style = {
    footer: {
        height: '300px',
        background: '#DFEDD6'
    },
    links: {
        padding: '40px'
    }
}
//can add the icons for github and linked in
export default function Footer() {
    return (
        <footer style={style.footer}>
            <div>
                <a 
                href="https://github.com/katsaymeow" 
                style={style.links}
                target="_blank"
                rel="noopener noreferrer"
                >
                    GitHub
                 </a>
                <a 
                href="https://www.linkedin.com/in/lindsay-allen-3545b2243" style={style.links}
                target="_blank"
                rel="noopener noreferrer"
                >
                    LinkedIn
                 </a>
                <a
                href="https://drive.google.com/file/d/1RlzT4DUQFUOuqf6laJGaXRa2IVq1c9Cq/view?usp=share_link"
                style={style.links}
                target="_blank"
                rel="noopener noreferrer"
                >
                    Download Resume
                </a>
            </div>
            <br></br>
            <Row>
        <Form.Label column="lg" lg={1}>
          Contact
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Your Email" />
        </Col>
        <Form.Label column="lg" lg={1}>
          Message
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Say Hi!" />
        </Col>
      </Row>
        </footer>
    )
}