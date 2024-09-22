



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,     
  faHistory,  
  faChalkboardTeacher, 
  faUser,     
  faEllipsisH 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LeftNavbar = ({ activePage }) => {
  return (
    <div className="w-1/5 bg-gray-900 text-white h-screen fixed left-0 flex flex-col items-start py-10">
      <div className="pl-6 mb-6">
        <h1 className="text-3xl font-bold text-green-400">SpeakEase</h1>
      </div>

      <nav className="w-full">
        <ul className="space-y-6 pl-6">
          {/* Test */}
            <li className={`flex items-center space-x-4 p-2 rounded-md ${activePage === 'test' ? 'bg-gray-700 ring-2 ring-blue-400' : 'hover:bg-gray-700 hover:ring-2 hover:ring-blue-400'}`}>
            <Link to="/home" className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faHome} className="text-green-400" />
            <span className="text-xl">Test</span>
            </Link>
            </li>
            
          
          {/* Assignment History */}
          <li className={`flex items-center space-x-4 p-2 rounded-md ${activePage === 'history' ? 'bg-gray-700 ring-2 ring-blue-400' : 'hover:bg-gray-700 hover:ring-2 hover:ring-blue-400'}`}>
            <FontAwesomeIcon icon={faHistory} className="text-yellow-400" />
            <span className="text-xl">Assignment History</span>
          </li>

          {/* Practise */}
          
          <li className={`flex items-center space-x-4 p-2 rounded-md ${activePage === 'practice' ? 'bg-gray-700 ring-2 ring-blue-400' : 'hover:bg-gray-700 hover:ring-2 hover:ring-blue-400'}`}>
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-red-400" />
            <Link to="/practice">
            <span className="text-xl">Practise</span>
            </Link>
          </li>

          {/* Profile */}
          <li className={`flex items-center space-x-4 p-2 rounded-md ${activePage === 'profile' ? 'bg-gray-700 ring-2 ring-blue-400' : 'hover:bg-gray-700 hover:ring-2 hover:ring-blue-400'}`}>
            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
            <span className="text-xl">Profile</span>
          </li>

          {/* More */}
          <li className={`flex items-center space-x-4 p-2 rounded-md ${activePage === 'more' ? 'bg-gray-700 ring-2 ring-blue-400' : 'hover:bg-gray-700 hover:ring-2 hover:ring-blue-400'}`}>
            <FontAwesomeIcon icon={faEllipsisH} className="text-purple-400" />
            <span className="text-xl">More</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftNavbar;




