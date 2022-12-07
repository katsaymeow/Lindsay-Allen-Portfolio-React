import React from 'react';

const headerStyle = {
    card: {
        margin: 10,
        fontSize: '2rem',
    }
}
// I think the entire Nav needs to be here instead of its own page as component
export default function Header() {
    return (
        <header style={headerStyle.card} className="header">
            <h1>Lindsay Allen</h1>
        </header>
    )
}