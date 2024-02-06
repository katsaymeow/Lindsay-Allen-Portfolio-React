import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

const style = {
    footer: {
        height: '360px',
        background: '#DFEDD6'
    },
    container: {
      margin: '10px',
      padding: '10px'
    },
    row: {

    },
    col: {

    }
}
//can add the icons for github and linked in
export default function Footer() {
    return (
        <footer style={style.footer}>
          
  <Container style={style.container}>
    <Row>

    <Col>1 of 2</Col>

    <Col>2 of 2</Col>

    </Row>
    </Container>  
        
                
               
  </footer>
    )
}