

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBullseye, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import AnimationComponent from './animation'; // Adjust the path if needed

const RightNavBar = () => {
  return (
    <div className="w-1/4 bg-gray-900 text-white p-6 h-screen fixed right-0">
      
      {/* Lottie Animation */}
      <div className="mb-10">
        <AnimationComponent />
      </div>

      {/* My Assignments Section */}
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-4">My Assignments</h2>
        <div className="flex flex-col items-center justify-center bg-gray-700 p-6 rounded-lg">
          {/* Placeholder Image */}
          <img src="https://via.placeholder.com/80" alt="assignment-icon" className="mb-2 w-16 h-16 object-cover" />
          <p className="text-center text-sm">Check back for your first assignment!</p>
        </div>
      </div>

      {/* Daily Quests Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Daily Quests</h2>

        {/* Quest 1: Earn 10 XP */}
        <div className="mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBolt} className="text-yellow-400 mr-3 text-lg" />
            <span className="text-sm">Earn 10 XP</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>

        {/* Quest 2: Score 90% */}
        <div className="mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBullseye} className="text-green-400 mr-3 text-lg" />
            <span className="text-sm">Score 90% or higher in 2 lessons</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Quest 3: Listen to 7 exercises */}
        <div className="mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHeadphones} className="text-blue-400 mr-3 text-lg" />
            <span className="text-sm">Listen to 7 exercises</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: '20%' }}></div>
          </div>
        </div>
      </div>

      {/* View All Quests Button */}
      <div className="text-center mt-4">
        <button className="bg-gray-600 px-6 py-2 rounded-lg hover:bg-gray-700">View All</button>
      </div>
    </div>
  );
};

export default RightNavBar;
