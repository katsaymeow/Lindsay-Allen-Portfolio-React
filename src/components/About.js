import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import space from "../img/galaxy-JW.JPG";
import nature from "../img/I-love-nature.jpeg";
import rocks from "../img/Me-In-Colorado.jpeg";

export default function About() {
    return (
              <Carousel fade>
               
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={space}
                    alt="Space James web style"
                    style={{
                      width: '100%',
                      height: '600px'
                    }}
                  />
                  <Carousel.Caption>
                    <h3>Space, the favorite place I can not go</h3>
                    <p>I truly am in awe of all things galactic. Fiction or non-fiction. I follow all space news. PC JW telescope</p>
                  </Carousel.Caption>
                </Carousel.Item>
             
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={nature}
                    alt="Nature"
                    style={{
                      width: '100%',
                      height: '600px'
                    }}
                  />          
                  <Carousel.Caption className="text-dark">
                    <h3 >I Love Nature</h3>
                    <p className="text-bold">From Red River Gorge to my backyard, I want to be with the trees.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rocks}
                    alt="Rocks"
                    style={{
                      width: '100%',
                      height: '600px'
                    }}
                  />
          
                  <Carousel.Caption className="text-dark">
                    <h3>I love rocks!</h3>
                    <p className="text-bold">
                     Practicality kept me from becoming a geologist. I now horde rocks. The beauty of Colorado still gives me chills
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            );
}