import React from 'react';
import Nav from 'react-bootstrap/Nav'
// I want to add contact info here and create a larger border in the footer that stays on the page.
// still needs style and function
const style = {
    footer: {
        height: 'auto',
        background: '#DFEDD6'
    }
}
//can add the icons for github and linked in
export default function Footer() {
    return (
        <footer style={style.footer}>
          <Nav>
            <Nav.Item>
              <Nav.Link href="https://github.com/katsaymeow">GitHub</Nav.Link>
               </Nav.Item>
             <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/in/lindsay-allen-3545b2243">LinkedIn</Nav.Link>
                </Nav.Item>
            <Nav.Item> <Nav.Link href="https://www.mycohais.com">MycoHaus</Nav.Link>
            </Nav.Item>
                </Nav>
  </footer>
    )
}