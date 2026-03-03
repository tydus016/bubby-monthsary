import React, { useState, useEffect, useCallback } from 'react';

const PasswordScreen = ({ onCorrectPassword }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);

  const CORRECT_PASSWORD = '090323';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (cooldownActive) return;

      if (e.key >= '0' && e.key <= '9') {
        if (currentPassword.length < 6) {
          setCurrentPassword(prev => prev + e.key);
        }
      } else if (e.key === 'Enter') {
        checkPassword();
      } else if (e.key === 'Backspace') {
        setCurrentPassword(prev => prev.slice(0, -1));
      } else if (e.key === 'Escape') {
        setCurrentPassword('');
        setErrorMessage('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPassword, cooldownActive]);

  useEffect(() => {
    if (cooldownTime > 0) {
      const timer = setTimeout(() => {
        setCooldownTime(cooldownTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (cooldownActive && cooldownTime === 0) {
      endCooldown();
    }
  }, [cooldownTime, cooldownActive, endCooldown]);

  const handleNumberClick = (num) => {
    if (cooldownActive) return;
    if (currentPassword.length < 6) {
      setCurrentPassword(prev => prev + num);
    }
  };

  const handleClear = () => {
    if (cooldownActive) return;
    setCurrentPassword('');
    setErrorMessage('');
  };

  const startCooldown = useCallback(() => {
    setCooldownActive(true);
    setCooldownTime(30);
    setErrorMessage('Too many wrong attempts!');
  }, []);

  const endCooldown = useCallback(() => {
    setCooldownActive(false);
    setAttempts(0);
    setCurrentPassword('');
    setErrorMessage('');
  }, []);

  const checkPassword = useCallback(() => {
    if (currentPassword.length === 0) return;

    if (currentPassword === CORRECT_PASSWORD) {
      onCorrectPassword();
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3) {
        startCooldown();
      } else {
        setErrorMessage(`Wrong password! ${3 - newAttempts} attempt${3 - newAttempts === 1 ? '' : 's'} remaining.`);
        setCurrentPassword('');
      }
    }
  }, [currentPassword, CORRECT_PASSWORD, onCorrectPassword, attempts, startCooldown]);

  return (
    <div className="w-full max-w-md relative z-10">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        {/* Title */}
        <h1 className="font-dancing text-6xl md:text-7xl text-center text-white mb-8 drop-shadow-lg">
          Bubby!!
        </h1>

        {/* Password display */}
        <div className="bg-purple-900/50 rounded-2xl p-6 mb-6 min-h-[80px] flex items-center justify-center">
          <div className="text-4xl text-white tracking-widest font-mono">
            {'●'.repeat(currentPassword.length)}
          </div>
        </div>

        {/* Error message */}
        <div className="text-red-300 text-center mb-4 h-6 text-sm font-semibold">
          {errorMessage}
        </div>

        {/* Sad Panda (shown during cooldown) */}
        {cooldownActive && (
          <div className="mb-6">
            <div className="text-center">
              <div className="text-8xl mb-4">🐼</div>
              <p className="text-white text-lg mb-2">Sad Panda is sad...</p>
              <p className="text-purple-200 text-sm">Please wait for:</p>
              <div className="text-white text-4xl font-bold mt-2">{cooldownTime}s</div>
            </div>
          </div>
        )}

        {/* Keypad */}
        <div 
          className={`grid grid-cols-3 gap-4 mb-6 transition-opacity ${cooldownActive ? 'opacity-30 pointer-events-none' : ''}`}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-2xl font-bold rounded-2xl h-16 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-xl font-bold rounded-2xl h-16 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Clear
          </button>
          <button
            onClick={() => handleNumberClick('0')}
            className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-2xl font-bold rounded-2xl h-16 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            0
          </button>
          <button
            onClick={checkPassword}
            className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-bold rounded-2xl h-16 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordScreen;
