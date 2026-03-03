import React, { useEffect } from 'react';

const GalleryModal = ({ isOpen, currentIndex, images, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 gallery-overlay flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-3xl md:text-4xl hover:text-pink-300 transition-colors z-50 bg-black/50 rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center"
      >
        ×
      </button>

      <h2 className="font-dancing absolute top-2 md:top-4 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl lg:text-5xl text-white text-center px-2 md:px-4 z-50 max-w-full">
        Trip down memory lane...💜
      </h2>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 md:left-4 text-white text-4xl md:text-6xl hover:text-pink-300 transition-colors z-50 bg-black/50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
      >
        ‹
      </button>

      <div className="flex items-center justify-center w-full h-full pt-16 md:pt-24 pb-16 md:pb-20 px-4 md:px-20" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="gallery-img rounded-lg shadow-2xl"
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 md:right-4 text-white text-4xl md:text-6xl hover:text-pink-300 transition-colors z-50 bg-black/50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
      >
        ›
      </button>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-lg">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default GalleryModal;
