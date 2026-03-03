import React, { useState, useEffect, useRef } from 'react';
import { images } from '../constants';

const FloatingHeartsGame = () => {
  const [hearts, setHearts] = useState([]);
  const timersRef = useRef({});
  const nextIdRef = useRef(0);

  // Generate a random heart
  const generateHeart = () => {
    return {
      id: nextIdRef.current++,
      x: Math.random() * 70 + 10, // 10% to 80% of screen width
      y: Math.random() * 70 + 10, // 10% to 80% of screen height
      size: Math.random() * 60 + 100, // 100px to 160px
      duration: Math.random() * 10 + 15, // 15-25s animation
      direction: Math.random() * 360, // Random direction in degrees
      imageIndex: Math.floor(Math.random() * images.length),
      revealed: false,
      poppingOut: false,
    };
  };

  useEffect(() => {
    // Generate exactly 4 floating hearts
    const numHearts = 4;
    const newHearts = [];

    for (let i = 0; i < numHearts; i++) {
      newHearts.push(generateHeart());
    }

    setHearts(newHearts);

    // Cleanup timers on unmount
    return () => {
      Object.values(timersRef.current).forEach(timer => clearTimeout(timer));
    };
  }, []);

  const popOutHeart = (heartId) => {
    // Clear any existing timer for this heart
    if (timersRef.current[heartId]) {
      clearTimeout(timersRef.current[heartId]);
      delete timersRef.current[heartId];
    }

    // Add pop-out animation
    setHearts(prev => prev.map(heart => 
      heart.id === heartId 
        ? { ...heart, poppingOut: true }
        : heart
    ));

    // After animation completes, replace with new heart
    setTimeout(() => {
      setHearts(prev => {
        const newHearts = prev.filter(h => h.id !== heartId);
        newHearts.push(generateHeart());
        return newHearts;
      });
    }, 600); // Match popOut animation duration
  };

  const handleHeartClick = (heart) => {
    if (heart.poppingOut) return; // Prevent clicking during pop-out

    if (!heart.revealed) {
      // Reveal the image
      setHearts(prev => prev.map(h => 
        h.id === heart.id 
          ? { ...h, revealed: true }
          : h
      ));

      // Set timer to auto pop-out after 5 seconds
      timersRef.current[heart.id] = setTimeout(() => {
        popOutHeart(heart.id);
      }, 5000);
    } else {
      // If image is clicked, pop it out immediately
      popOutHeart(heart.id);
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          id={`heart-${heart.id}`}
          className={`floating-heart-game absolute pointer-events-auto cursor-pointer ${heart.poppingOut ? 'pop-out-animation' : ''}`}
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: heart.poppingOut ? '0.6s' : `${heart.duration}s`,
            '--float-angle': `${heart.direction}deg`,
          }}
          onClick={() => handleHeartClick(heart)}
        >
          {!heart.revealed ? (
            // Heart icon
            <div 
              className="heart-icon flex items-center justify-center w-full h-full transition-transform duration-200 hover:scale-110 active:scale-95" 
              style={{ fontSize: `${heart.size * 0.8}px` }}
            >
              💜
            </div>
          ) : (
            // Revealed image in rounded circle
            <div className="heart-image-container revealed w-full h-full flex items-center justify-center overflow-hidden rounded-full">
              <img
                src={images[heart.imageIndex]}
                alt={`Surprise ${heart.id}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingHeartsGame;
