import React from 'react';

const HappyPandaScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700">
      <div className="text-center">
        <div className="dancing text-9xl mb-6">🐼</div>
        <h2 className="font-dancing text-5xl md:text-7xl text-white mb-4">Yay! Correct! 💜</h2>
        <p className="text-white text-2xl">Loading your surprise...</p>
      </div>
    </div>
  );
};

export default HappyPandaScreen;
