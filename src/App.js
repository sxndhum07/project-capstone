import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import AdminLogin from './components/AdminLogin';
import Events from './components/Events';
import Navbar from './components/Navbar';
import ContactPage from './components/ContactPage';
import sketches from './components/sketches'; // Capitalize "Sketches" here
import Paintings from './components/Paintings';
import Upload from './components/Upload';

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);

  // Function to update uploaded images
  const handleUploadedImages = (images) => {
    setUploadedImages(images);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/events" element={<Events uploadedImages={uploadedImages} />} />
        <Route path="/admin/upload" element={<Upload onUpload={handleUploadedImages} />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/gallery/sketches' element={<sketches />} />
        <Route path='/gallery/paintings' element={<Paintings />} /> {/* Capitalize "paintings" */}
      </Routes>
    </Router>
  );
}

export default App;
