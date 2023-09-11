import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the CSS

import downloadImag1 from './../../images/download1.jpg'
import downloadImag2 from './../../images/download2.jpg'

function Images() {
  const images = [
    {
      original: downloadImag1,
      thumbnail: downloadImag1,
    },
    {
      original: downloadImag2,
      thumbnail: downloadImag2,
    },
    // Add more images in the same format if needed
  ];

  return (
    <div className="Images">
      <h1>Image Gallery</h1>
      <Gallery items={images} />
    </div>
  );
}

export default Images;