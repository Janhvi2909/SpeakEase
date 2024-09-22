
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Player } from '@lottiefiles/react-lottie-player'; // Import the Lottie player
import greenAnimation from '../assets/greenani.json'; // Import your Lottie animation


const HeroSection = () => {
    const navigate = useNavigate();

  return (
    <div className="relative bg-gray-900 text-white h-screen flex flex-col justify-between overflow-hidden">

      {/* SpeakEase Logo */}
      <div className="pl-6 pt-6">
        <h1 className="text-3xl font-bold text-green-400">SpeakEase</h1>
      </div>

      {/* Background animated abstract shapes */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ opacity: [0.4, 0.8, 0.4], x: [-50, 50, -50] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-3xl top-1/3 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-yellow-400 opacity-20 rounded-full filter blur-3xl top-2/3 right-1/4"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-4/5 mx-auto h-full">

        {/* Left Side - Hero Text */}
        <div className="md:w-1/2 space-y-4 text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Master English for Ivy League Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-2xl"
          >
            Take your TOEFL & IELTS preparation to the next level with SpeakEase.
          </motion.p>

          {/* Call-to-action buttons */}
          <div className="flex justify-start space-x-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-lg shadow-md flex items-center"
              onClick={() => navigate('/signup')}
            >
              Test My English
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-transparent border-2 border-green-500 text-white px-6 py-3 rounded-lg shadow-md"
              onClick={() => navigate('/learnmore')} 
            >
              Learn More
            </motion.button>
          </div>
        </div>

      {/* Right Side - Hero Animation with Lottie */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }} // Initial animation properties
            animate={{ opacity: 1, scale: 1, rotate: 0 }} // Final state
            transition={{ duration: 1.5, ease: "easeInOut" }} // Timing of the animation
            whileHover={{
              scale: 1.1, 
              rotate: 3, 
              transition: { duration: 0.5 } // Hover animation
            }}
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          >
            <Player
              autoplay
              loop
              src={greenAnimation} // Lottie animation source
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Empty space at the bottom for balancing content */}
      <div className="pb-6"></div>
    </div>
  );
};

export default HeroSection;


