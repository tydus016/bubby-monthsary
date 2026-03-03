import React from 'react';

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="floating-heart absolute top-10 left-10 text-pink-300 text-4xl opacity-30">💜</div>
      <div className="floating-heart absolute top-20 right-20 text-pink-400 text-3xl opacity-30" style={{ animationDelay: '0.5s' }}>💖</div>
      <div className="floating-heart absolute bottom-20 left-1/4 text-purple-300 text-5xl opacity-30" style={{ animationDelay: '1s' }}>💜</div>
      <div className="floating-heart absolute bottom-10 right-1/3 text-pink-300 text-4xl opacity-30" style={{ animationDelay: '1.5s' }}>💗</div>
      <div className="floating-heart absolute top-1/3 right-10 text-purple-400 text-3xl opacity-30" style={{ animationDelay: '2s' }}>💜</div>
    </div>
  );
};

export default FloatingHearts;
