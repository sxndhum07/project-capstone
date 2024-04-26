import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './Upload.css';

const Upload = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const navigate = useNavigate(); // Use useNavigate for navigation

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    };

    const handleUpload = () => {
        if (selectedImages.length > 0) {
            // Navigate to the events page with selected images
            navigate('/events', { state: { images: selectedImages } });
        } else {
            console.error('No images selected for upload.');
        }
    };

    return (
        <section>
            <label className='Label'>
                + Add images
                <br/>
                <span>up to 10 images</span>
                <input className='Input' type='file' name='images' onChange={onSelectFile} multiple accept='image/png,image/jpeg,image/webp' />
            </label>
            <br/>

            {selectedImages.length > 0 &&
                (selectedImages.length > 10 ? (
                    <p className='error'>You can't upload more than 10 images! <br/>
                        <span>please delete <b>{selectedImages.length - 10}</b> of them</span>
                    </p>
                ) : (
                    <button className='upload-btn' onClick={handleUpload}>
                        UPLOAD {selectedImages.length} IMAGE{selectedImages.length === 1 ? "" : "S"}
                    </button>
                ))
            }

            <div className='images'>
                {selectedImages &&
                    selectedImages.map((image, index) => (
                        <div key={index} className='image'>
                            <img src={image} height="200" alt='upload' />
                            <button onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}>
                                delete image
                            </button>
                            <p>{index + 1}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Upload;
