import React, { useState, useEffect } from 'react';
import { images, heartPattern } from '../constants';
import { distributeImagesForHeart } from '../utils';
import GalleryModal from './GalleryModal';
import FloatingHeartsGame from './FloatingHeartsGame';

const CollageScreen = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [distributedImages, setDistributedImages] = useState([]);

  useEffect(() => {
    // Calculate total slots needed
    let totalSlots = 0;
    heartPattern.forEach(row => {
      row.forEach(cell => {
        if (cell === 1) totalSlots++;
      });
    });

    // Distribute images
    const distributed = distributeImagesForHeart(images, totalSlots);
    setDistributedImages(distributed);
  }, []);

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="font-dancing text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center text-white mb-6 md:mb-8 drop-shadow-lg px-2 whitespace-nowrap">
          💜 Happy Monthsary Bwabii! 💜
        </h1>
        <p className="text-center text-white/90 text-base md:text-lg mb-6 md:mb-8 font-playfair px-4">
          Click on any photo to view it larger!
        </p>

        {/* Heart-shaped image collage */}
        <div className="heart-container">
          <div className="heart-grid">
            {heartPattern.map((row, rowIndex) => {
              return row.map((cell, colIndex) => {
                // Calculate the current image index for this cell
                let currentImageIdx = 0;
                for (let r = 0; r < rowIndex; r++) {
                  for (let c = 0; c < heartPattern[r].length; c++) {
                    if (heartPattern[r][c] === 1) currentImageIdx++;
                  }
                }
                for (let c = 0; c < colIndex; c++) {
                  if (heartPattern[rowIndex][c] === 1) currentImageIdx++;
                }

                const imageData = cell === 1 ? distributedImages[currentImageIdx] : null;

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`heart-cell ${cell === 0 ? 'empty-cell' : ''}`}
                  >
                    {imageData && (
                      <img
                        src={imageData.src}
                        alt={`Memory ${currentImageIdx + 1}`}
                        className="heart-image"
                        loading="lazy"
                        decoding="async"
                        onClick={() => openGallery(imageData.originalIndex)}
                      />
                    )}
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>

      {/* Floating Hearts Game */}
      <FloatingHeartsGame />

      <GalleryModal
        isOpen={galleryOpen}
        currentIndex={currentImageIndex}
        images={images}
        onClose={() => setGalleryOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default CollageScreen;
