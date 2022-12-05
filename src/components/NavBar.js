import React from 'react';

const navStyle = {
    card: {
        margin: 15,
        minHeight: 50,
        fontSize: '2rem',
        color: '#414B3B',
        background: '#DFEDD6',
        fontFamily: 'ui-monospace',
        alignContent: 'center',// why wont this work!!
    },
    links: {
        margin: 10,
        padding: '10px',
    }
};

const resume = './Resume';
const interest = './Interest';
const mainPage = './MainPage';
export default function NavBar() {
    return (
        <div style={navStyle.card}>
            <div className='links'>
          <a href={resume} style={navStyle.links}>Resume</a> 
          <a href={interest} style={navStyle.links}>Interest</a> 
          <a href={mainPage} style={navStyle.links}>Main</a>
          </div>
        </div>
    );
};
// needs to have links to the Interest page and resume