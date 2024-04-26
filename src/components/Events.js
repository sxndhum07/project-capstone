import React from 'react';

const Events = ({ uploadedImages }) => {
  const handleUploadImages = () => {
    // Logic to upload images to server or perform any action with the images
    console.log('Uploaded images:', uploadedImages);
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={handleUploadImages}>Upload Images</button>
    </div>
  );
};

export default Events;
