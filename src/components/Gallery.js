import React, { useState } from 'react';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('sketches');
    const [images, setImages] = useState({
        sketches: [],
        paintings: [],
        nature: []
    });
    const [file, setFile] = useState(null);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            const newImages = { ...images };
            newImages[selectedCategory].push(URL.createObjectURL(file));
            setImages(newImages);
            setFile(null);
        }
    };

    return (
        <div>
            <h1>Gallery</h1>
            <select onChange={handleCategoryChange} value={selectedCategory}>
                <option value="sketches">Sketches</option>
                <option value="paintings">Paintings</option>
                <option value="nature">Nature</option>
            </select>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
            <div>
                {images[selectedCategory].map((img, index) => (
                    <img key={index} src={img} alt="Gallery" style={{ width: '200px', margin: '10px' }} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
