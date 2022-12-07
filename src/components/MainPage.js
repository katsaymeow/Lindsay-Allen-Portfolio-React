import React from 'react';
// this will have about me and coding experience. 
import me from "../img/41.jpeg";

const imgStyle = {
    img: {
        margin: '10px',
        height: '200px',
        borderRadius: '30%'
    },
}
// This might need to change to about. It makes more sense. 
export default function MainPage() {// this can be something else just added content to see how it works. 
    return (
    <div className="container">
        <div>
            <img src={me} alt='Lindsay Allen' style={imgStyle.img}></img>
        <div>
           
        </div>
         <p>
            With a love of accountability in retail, I forge ahead to learn all I can 
         </p>
         <p>
            to create spaces for makers and entrepreneurs to engage.
         </p>
         </div>
         <div className="tech">
            <p>As I learn about new technologies, I am enthusiastic about the </p>
         </div>
        
    </div>
    )
}