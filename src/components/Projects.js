import React from 'react';
import MycoHaus from '../img/mycohaus.png';

const cardStyle = {
    card: {
        padding: '75px'
    },
    img: {
        height: '370px',
        width: '450px',
        borderRadius: '20px'
    }
}
export default function Projects(props) {
    return (
        <div className='card-body' style={cardStyle.card}>
            <div className='card-heading'>MycoHaus</div>
            <img src={MycoHaus} alt='mycohaus' style={cardStyle.img}></img>
            <div>
            <button>
            <a href='https://www.mycohaus.com/'>MycoHaus</a>
            </button>
            </div>
        </div>
    )
}