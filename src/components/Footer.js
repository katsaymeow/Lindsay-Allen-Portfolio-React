import React from 'react';
// I want to add contact info here and create a larger border in the footer that stays on the page.
// I know I can create the links to open in a new page with blank? but not sure how
const style = {
    footer: {
        height: '1000px',
        background: '#DFEDD6'
    },
    links: {
        content: 'space-between',
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
            </div>
        </footer>
    )
}