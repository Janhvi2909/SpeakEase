


import React, { useState } from 'react';
import LeftNavbar from './LeftNavbar';
import RightNavBar from './RightNavBar';
import TestScreen from './TestScreen';

function Home() {
    const [currentPage, setCurrentPage] = useState('test');
    const handleNavClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='bg-gray-900 h-screen flex'>
            <LeftNavbar onNavClick={handleNavClick} />
            <div className='flex-1 flex items-center justify-center'>
                {/* Conditionally render components based on the current page */}
                {/* {currentPage === 'test' && <TestScreen />} */}
                {/* {currentPage === 'other' && <OtherComponent />} */}
            </div>
            <RightNavBar />
        </div>
    );
}

export default Home;
