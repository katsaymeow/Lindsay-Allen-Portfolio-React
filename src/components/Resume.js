import React from 'react';

export default function Resume() {
    const cardContainer = {
        width: '85%',
        margin: '7.5%',
        background: '#e1e8eb',
        color: '#202121',
        content: 'center',//this did nothing
    };
    const textBody = {
        margin: '1rem',
        // bottomMargin: '1rem',//not working
    }
    return (
        <><div className="container">
            <div className="card" style={cardContainer}>
                <h1 className="header">Career Objective</h1>
                <p className="textBody" style={textBody}>
                    Enthusiastic budding Web Developer with 7+ years experience with E-Commerce platforms like Shopify and Amazon. Discovering an interest in possibilities of the back-end of the internet of things, I began continuing my education at the Ohio State University. As a self motivated learner, I know the field of Web Development is a natural progression of that. Eagerly driven by results, I focus on detail execution and adaptability to complete complex projects.
                </p>
            </div>
        </div>

        <div className="container">
                <div className="card" style={cardContainer}>
                    <h2 className="heading">MycoHaus</h2>
                    <p className='title'>Manager 2014 - Present</p>
                    <p className="textBody" style={textBody}>
                MycoHaus is an Ecommerce store that sterilizes substrate for mushroom cultivation. Being the first employee with the company, I am involved in product development and production, site maintenance with Amazon and Shopify, shipping and receiving with sites like ShipStation and FreightCenter, fast paced retail adaptability and team building. The most challenging aspect of this position was navigating the various shipping services available to develop the best system for our unique needs. The most rewarding experience is the development of our online retail spaces.
                    </p>
                </div>
            </div>
        <div className='container'>
            <div className='card' style={cardContainer}>
            <h2 className="heading">Bartender</h2>
                    <p className='title'>Various Location, Cincinnati, Ohio 2003 - 2018</p>
                    <p className="textBody" style={textBody}>
                        Naturally a people person, bartending is a delightfully attractive profession. Fast-paced customer service, artful execution a delicious beverages and a meaningful team experience. Boiling down my experience to a few sentences will not lend justice to the work. Experience in high end restaurants like Montgomery Inn at the Boathouse, Trattoria Roma and Palomino, and a few local favorites like The Crows Nest and Barleycorn’s. Bartending taught me leadership skills, attention to detail, inventory management and adaptability to a situation.
                    </p>
            </div>
        </div>
            </>
    );
}
