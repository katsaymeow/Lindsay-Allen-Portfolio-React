import React from 'react';

const headerStyle = {
    card: {
        margin: 10,
        fontSize: '2rem',
    }
}
export default function Header() {
    return (
        <header style={headerStyle.card} className="header">
            <h1>Lindsay Allen</h1>
        </header>
    )
}