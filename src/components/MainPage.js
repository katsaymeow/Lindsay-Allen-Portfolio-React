import React from 'react';
// this will have about me and coding experience. 
import me from "../img/41.jpeg";

const imgStyle = {
    img: {
        margin: '10px 340px',
        height: '240px',
        borderRadius: '50%'
    },
}
// This might need to change to about. It makes more sense. 
export default function MainPage() {// this can be something else just added content to see how it works. 
    return (
        <div>
            <img src={me} alt='Lindsay Allen' style={imgStyle.img}></img>
        <div>
            <ul>
                <li>HTML, CSS, Javascript</li>
                <li>Accessing API's</li>
                <li>NodeJS, Express, Insomnia, Heroku</li>
                <li>SQL, Sequelize</li>
                <li>OOP, ORM, MVC, PWA understanding</li>
                <li>React</li>
            </ul>
        </div>
        
        </div>
    )
}