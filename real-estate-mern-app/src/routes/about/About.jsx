import React from 'react';
import './about.scss';
import bg from '../../../public/bg.png'

const About = () => {
     return (
          <div className="aboutPage">
               <div className="textContainer">
                    <div className="wrapper">
                         <h1 className="title">About Us</h1>
                         <p>
                              Welcome to <b>Rees Deal</b>, your trusted partner in real estate.
                              Whether youre buying, selling, or renting, our platform offers a seamless experience tailored to your needs.
                         </p>
                         <div className="stats">
                              <div className="statBox">
                                   <h2>500+</h2>
                                   <p>Happy Clients</p>
                              </div>
                              <div className="statBox">
                                   <h2>300+</h2>
                                   <p>Listed Properties</p>
                              </div>
                              <div className="statBox">
                                   <h2>150+</h2>
                                   <p>Verified Agents</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="imgContainer">
                    <img src={bg} alt="About Us" />
               </div>
          </div>
     );
};

export default About;
