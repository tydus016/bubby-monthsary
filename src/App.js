import React, { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import PasswordScreen from './components/PasswordScreen';
import HappyPandaScreen from './components/HappyPandaScreen';
import CollageScreen from './components/CollageScreen';
import './styles.css';

function App() {
  const [showPassword, setShowPassword] = useState(true);
  const [showHappyPanda, setShowHappyPanda] = useState(false);
  const [showCollage, setShowCollage] = useState(false);

  const handleCorrectPassword = () => {
    setShowPassword(false);
    setShowHappyPanda(true);

    setTimeout(() => {
      setShowHappyPanda(false);
      setShowCollage(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <FloatingHearts />
      
      {showPassword && (
        <div className="flex items-center justify-center min-h-screen p-4">
          <PasswordScreen onCorrectPassword={handleCorrectPassword} />
        </div>
      )}

      {showHappyPanda && <HappyPandaScreen />}

      {showCollage && <CollageScreen />}
    </div>
  );
}

export default App;
