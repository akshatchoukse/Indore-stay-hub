import React, { useState } from 'react';

const images = [
  '/Crousel/Casainn.JPG',
  '/Crousel/Casainn2.JPG',
  '/Crousel/Castleinn.png',
  '/Crousel/Farm.JPG',
  '/Crousel/Casainn.JPG',
  // add your images here
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="p-10 bg-white">
      <h2 className="text-3xl font-serif font-bold text-center mb-8">Gallery</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery image ${i + 1}`}
            className="cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Selected"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
