import React from 'react';
import Navbar from './Navbar';
import MountainImage from './Assets/Flower.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua.
        </p>
      </div>
    </div>
  );
};

export default Home;
