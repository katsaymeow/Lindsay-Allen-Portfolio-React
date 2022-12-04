import React from 'react';

const navStyle = {
    card: {
        margin: 20,
        minHeight: 40,
        fontSize: '2rem',
        color: '#414B3B',
        background: '#DFEDD6',
        fontFamily: 'ui-monospace',
        alignContent: 'center',// why wont this work!!
    },
};

export default function NavBar() {
    return (
        <div style={navStyle.card}>#test</div>
    );
};
// needs to have links to the Interest page and resume