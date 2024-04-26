import React from 'react';
import './Assets/sketches.css';

import sketch1 from './Assets/sketch1.jpg';
import sketch2 from './Assets/sketch2.jpg';
import sketch3 from './Assets/sketch3.jpg';
import sketch4 from './Assets/sketch4.jpg';
import sketch5 from './Assets/sketch5.jpg';
import sketch6 from './Assets/sketch6.png';
import sketch7 from './Assets/sketch7.png';
import sketch8 from './Assets/sketch8.jpg';
import sketch9 from './Assets/sketch9.png';
import sketch10 from './Assets/sketch10.jpg';
import sketch11 from './Assets/sketch11.jpg';
import sketch12 from './Assets/sketch12.jpg';

const photos = [
  { src: sketch1, title: 'Sketch 1', description: 'Description for Sketch 1' },
  { src: sketch2, title: 'Sketch 2', description: 'Description for Sketch 2' },
  { src: sketch3, title: 'Sketch 3', description: 'Description for Sketch 3' },
  { src: sketch4, title: 'Sketch 4', description: 'Description for Sketch 4' },
  { src: sketch5, title: 'Sketch 5', description: 'Description for Sketch 5' },
  { src: sketch6, title: 'Sketch 6', description: 'Description for Sketch 6' },
  { src: sketch7, title: 'Sketch 7', description: 'Description for Sketch 7' },
  { src: sketch8, title: 'Sketch 8', description: 'Description for Sketch 8' },
  { src: sketch9, title: 'Sketch 9', description: 'Description for Sketch 9' },
  { src: sketch10, title: 'Sketch 10', description: 'Description for Sketch 10' },
  { src: sketch11, title: 'Sketch 11', description: 'Description for Sketch 11' },
  { src: sketch12, title: 'Sketch 12', description: 'Description for Sketch 12' },
];

const Sketches = () => {
    return (
      <div className="collage">
        {photos.map((photo, index) => (
          <div key={index} className="collage-item">
            <img src={photo.src} alt={photo.title} className="collage-image" />
            <div className="collage-info">
              <h2>{photo.title}</h2>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Sketches;
