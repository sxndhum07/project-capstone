import React from 'react';
import aboutImage from './Assets/Mountain.jpg';
import './AboutStyles.css';

const About = () => {
  return (
    <div className="about-container">
      <img src={aboutImage} alt="About Us" className="about-image"/>
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Our Company</strong>. It is a long established fact that a reader
           will be distracted by the readable content of a page when looking at its layout. 
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like 
            readable English. Many desktop publishing packages and web page editors now use Lorem
             Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many 
             web sites still in their infancy. 
        </p>
        <p>
          At <strong>Our Company</strong>, Contrary to popular belief, Lorem Ipsum 
          is not simply random text. It has roots in a piece of classical Latin literature 
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor 
          at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
           consectetur, from a Lorem Ipsum passage, and going through the cites of the word in 
           classical literature, discovered the undoubtable source.
        </p>
      </div>
    </div>
  );
};

export default About;
