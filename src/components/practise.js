




import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import TestScreen from './TestScreen'; 
import LeftNavbar from './LeftNavbar';

const levels = [
  { id: 1, title: 'Level 1', completed: false },
  { id: 2, title: 'Level 2', completed: false },
  { id: 3, title: 'Level 3', completed: false },
  { id: 4, title: 'Level 4', completed: false },
];

const Practice = () => {
  const [currentLevel, setCurrentLevel] = useState(null); 
  const [levelScores, setLevelScores] = useState({}); 
  const [showBubble, setShowBubble] = useState(false);
  const [hoverMessage, setHoverMessage] = useState('');
  const [messagePosition, setMessagePosition] = useState({ top: 0, left: 0 });
  const [audio] = useState(new Audio('/sound.mp3')); // Create an audio instance

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLevelClick = (levelId) => {
    setCurrentLevel(levelId);
  };

  const handleCompletion = (score) => {
    setLevelScores((prev) => ({ ...prev, [currentLevel]: score }));
    setCurrentLevel(null); 
    unlockNextLevel(currentLevel); 
  };

  const unlockNextLevel = (completedLevelId) => {
    const updatedLevels = levels.map((level) => {
      if (level.id === completedLevelId) {
        return { ...level, completed: true };
      }
      return level;
    });
    levels = updatedLevels; 
  };

  const handleMouseEnter = (levelId, event) => {
    const { clientX, clientY } = event;
    const messageOffset = 20; // Offset to position the message

    setMessagePosition({ top: clientY - messageOffset, left: clientX + messageOffset });

    if (levelId === 1) {
      setHoverMessage('Start');
    } else if (levelId === 2) {
      setHoverMessage(levelScores[1] ? "Hey Champ, Let's move forward" : 'Oops! You can not skip Stage 1 🤧');
    } else if (levelId === 3) {
      setHoverMessage(levelScores[2] ? "Great job! You're on track! 👍🏻" : 'First complete previous stages 🫣');
    } else if (levelId === 4) {
      setHoverMessage(levelScores[3] ? 'Final Arena 🔥' : 'Seems like you are too excited 😏 but First complete the previous stages.');
    } else {
      setHoverMessage('');
    }
  };

  const handleMouseLeave = () => {
    setHoverMessage('');
  };

  const playSound = () => {
    audio.play(); // Play the sound
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <LeftNavbar activePage="practice" />

      <div className="flex-grow p-10 flex flex-col items-start" style={{ paddingLeft: '30%' }}>
        <h1 className="text-4xl font-bold mb-4 text-green-400 animate-pulse mt-4">Unlock Your Potential!</h1>

        {/* Hover Message Display */}
        {hoverMessage && (
          <div
            className="absolute bg-gray-800 p-2 rounded"
            style={{
              top: messagePosition.top,
              left: messagePosition.left,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {hoverMessage}
          </div>
        )}

        {/* Zig-Zag Tiles Container */}
        <div className="flex flex-col items-center space-y-4 mt-8">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className={`flex items-center justify-center w-16 h-16 rounded-full bg-green-500 cursor-pointer hover:bg-green-600 transition duration-300 ${index % 2 === 0 ? 'mx-auto' : 'ml-48'}`}
              onClick={() => handleLevelClick(level.id)}
              onMouseEnter={(e) => handleMouseEnter(level.id, e)}
              onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon icon={faLock} className="text-white text-3xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 flex items-center justify-center relative p-4">
        <img
          src="https://media.giphy.com/media/IURYMmloHWzmKihgQ2/giphy.gif"
          alt="Duolingo Animation"
          width="480"
          height="360"
          className="giphy-embed"
        />
        
        {/* Speech Bubble with Text */}
        {showBubble && (
          <div className="absolute top-10 left-10 transition-transform duration-700 scale-100 bubble-appear">
            <img
              src="/bubble.png"
              alt="Conversation Bubble"
              style={{ width: '200px' }}
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
              Every step you take brings you closer to mastery!
            </p>
          </div>
        )}
      </div>

      {/* Duolingo GIF beside Left Navbar in Bottom Left Corner */}
      <div className="absolute bottom-4 left-80">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHRyYTFraGI2MmE5ZnZkM2psYjJtc3hiemR5ZHQxcnJkcWsyamt6aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8QVkf6ywOqliEH7YdF/giphy.gif"
          alt="Sticker GIF"
          width="150"
          height="150"
        />
        
        {/* Speaker Icon */}
        <div className="absolute bottom-40 left-40 cursor-pointer" onClick={playSound}>
          <FontAwesomeIcon icon={faVolumeUp} size="3x" className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default Practice;
