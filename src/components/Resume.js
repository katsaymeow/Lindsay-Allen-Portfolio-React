import React from 'react';
// is resume overkill? Should I just list projects
import Resumes from '../img/Resume.png';
export default function Resume() {
    // const cardContainer = {
    //     width: '85%',
    //     margin: '10px',
    //     marginLeft: '15px',
    //     background: '#e1e8eb',
    //     color: '#202121',
    //     // content: 'center',//this did nothing
    // };
    // // google drive resume add href and allow download/ 
    // const textBody = {
    //     margin: '1rem',
    //     textContent: 'center'
    //     // bottomMargin: '1rem',//not working
    // }// resume on drive link  https://drive.google.com/file/d/1RlzT4DUQFUOuqf6laJGaXRa2IVq1c9Cq/view?usp=share_link
    return (
    <div className='row justify-content-center'>
      <div className="col-sm-9">
        <div className="card">
          {/* <div className="card-header"></div> */}
          <div className="card-body">
            <div>
              {/* <a href="https://www.mycohaus.com/" class="card-link"> */}
              <img src={Resumes} class="card-img-top" alt="Resume" />
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
      </div>

    //     <><div className="container">
    //         <div className="card" style={cardContainer}>
    //             <h1 className="header">Career Objective</h1>
    //             <p className="textBody" style={textBody}>
    //                 Enthusiastic budding Web Developer with 7+ years experience in E-Commerce with platforms like Shopify and Amazon. Discovering an interest in possibilities of the back-end of the internet of things, I began continuing my education at the Ohio State University. As a self motivated learner, I know the field of Web Development is a natural progression of that. Eagerly driven by results, I focus on detail execution and adaptability to complete complex projects.
    //             </p>
    //         </div>
    //     </div>

    //     <div className="container">
    //             <div className="card" style={cardContainer}>
    //                 <h2 className="heading">MycoHaus</h2>
    //                 <h4 className='title'>Manager 2014 - Present</h4>
    //                 <p className="textBody" style={textBody}>
    //             MycoHaus is an Ecommerce store that sterilizes substrate for mushroom cultivation. Being the first employee with the company, I am involved in product development and production, site maintenance with Amazon and Shopify, shipping and receiving with sites like ShipStation and FreightCenter, fast paced retail adaptability and team building. The most challenging aspect of this position was navigating the various shipping services available to develop the best system for our unique needs. The most rewarding experience is the development of our online retail spaces.
    //                 </p>
    //             </div>
    //         </div>
    //     <div className='container'>
    //         <div className='card' style={cardContainer}>
    //         <h2 className="heading">Bartender</h2>
    //                 <h4 className='title'>Various Location, Cincinnati, Ohio 2003 - 2018</h4>
    //                 <p className="textBody" style={textBody}>
    //                     Naturally a people person, bartending is a delightfully attractive profession. Fast-paced customer service, artful execution a delicious beverages and a meaningful team experience. Boiling down my experience to a few sentences will not lend justice to the work. Bartending taught me leadership skills, attention to detail, inventory management and adaptability to a situation.
    //                 </p>
    //         </div>
    //     </div>
    //         </>
    );
}
