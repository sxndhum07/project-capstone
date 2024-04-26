import React from 'react';
import './Assets/sketches.css';
import painting1 from './Assets/Painting1.jpg';
import painting2 from './Assets/Painting2.jpg';
import painting3 from './Assets/Painting3.jpg';
import painting4 from './Assets/Painting4.jpg';
import painting5 from './Assets/Painting5.jpeg';
import painting6 from './Assets/Painting6.jpeg';
import painting7 from './Assets/Painting7.jpg';
import painting8 from './Assets/Painting8.jpeg';
import painting9 from './Assets/Painting9.jpg';
import painting10 from './Assets/Painting10.jpg';
import painting11 from './Assets/Painting11.jpeg';
import painting12 from './Assets/Painting12.jpg';

const paintingsData = [
  { src: painting1, title: 'Painting 1', description: 'Description for Painting 1' },
  { src: painting2, title: 'Painting 2', description: 'Description for Painting 2' },
  { src: painting3, title: 'Painting 3', description: 'Description for Painting 3' },
  { src: painting4, title: 'Painting 4', description: 'Description for Painting 4' },
  { src: painting5, title: 'Painting 5', description: 'Description for Painting 5' },
  { src: painting6, title: 'Painting 6', description: 'Description for Painting 6' },
  { src: painting7, title: 'Painting 7', description: 'Description for Painting 7' },
  { src: painting8, title: 'Painting 8', description: 'Description for Painting 8' },
  { src: painting9, title: 'Painting 9', description: 'Description for Painting 9' },
  { src: painting10, title: 'Painting 10', description: 'Description for Painting 10' },
  { src: painting11, title: 'Painting 11', description: 'Description for Painting 11' },
  { src: painting12, title: 'Painting 12', description: 'Description for Painting 12' },
];

const Paintings = () => {
  return (
    <div className="collage1">
      {paintingsData.map((painting, index) => (
        <div key={index} className="collage-item">
          <img src={painting.src} alt={painting.title} className="collage-image" />
          <div className="collage-info">
            <h2>{painting.title}</h2>
            <p>{painting.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

 export default Paintings;



