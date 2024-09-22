
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUser, faVideo, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LearnMore = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col flex-grow justify-center items-center py-12 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Learn More About SpeakEase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg mb-8 text-center max-w-3xl"
        >
          Discover how SpeakEase can transform your English learning experience with engaging and interactive features.
        </motion.p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex justify-center mb-8 space-x-4 px-6">
        <button
          onClick={() => handleTabClick('overview')}
          className={`px-6 py-3 text-lg font-semibold ${activeTab === 'overview' ? 'bg-green-400 text-white' : 'bg-gray-700 text-gray-300'} rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105`}
        >
          Overview
        </button>
        <button
          onClick={() => handleTabClick('features')}
          className={`px-6 py-3 text-lg font-semibold ${activeTab === 'features' ? 'bg-green-400 text-white' : 'bg-gray-700 text-gray-300'} rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105`}
        >
          Features
        </button>
        <button
          onClick={() => handleTabClick('testimonials')}
          className={`px-6 py-3 text-lg font-semibold ${activeTab === 'testimonials' ? 'bg-green-400 text-white' : 'bg-gray-700 text-gray-300'} rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105`}
        >
          Testimonials
        </button>
        <button
          onClick={() => handleTabClick('faq')}
          className={`px-6 py-3 text-lg font-semibold ${activeTab === 'faq' ? 'bg-green-400 text-white' : 'bg-gray-700 text-gray-300'} rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105`}
        >
          FAQ
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-grow">
        {activeTab === 'overview' && (
          <div className="text-center mb-12 px-6">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold mb-4"
            >
              What is SpeakEase?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg mx-auto max-w-4xl"
            >
              SpeakEase is an advanced platform designed to help you master English for Ivy League success. Our interactive tools and resources make learning engaging and effective.
            </motion.p>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="mb-12 px-6">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold text-center mb-8"
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
                <FontAwesomeIcon icon={faInfoCircle} className="text-green-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
                <p>Engage with interactive lessons that adapt to your learning style and pace.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
                <FontAwesomeIcon icon={faUser} className="text-green-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Feedback</h3>
                <p>Receive personalized feedback to help you improve your English skills.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
                <FontAwesomeIcon icon={faVideo} className="text-green-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p>Watch video tutorials created by experts to enhance your learning experience.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="mb-12 px-6">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold text-center mb-8"
            >
              What Our Users Say
            </motion.h2>
            <Slider {...settings} className="max-w-4xl mx-auto">
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
                <p className="text-lg mb-4">"SpeakEase transformed my TOEFL preparation. The interactive tools are amazing!"</p>
                <span className="font-semibold">- Alex J.</span>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
                <p className="text-lg mb-4">"The personalized feedback was incredibly helpful. Highly recommend SpeakEase."</p>
                <span className="font-semibold">- Emma K.</span>
              </div>
            </Slider>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="mb-12 px-6">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold text-center mb-8"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-green-400 text-2xl mr-4" />
                <div>
                  <strong className="text-lg">How does SpeakEase work?</strong>
                  <p className="mt-2">SpeakEase provides interactive lessons, personalized feedback, and video tutorials to help you prepare for TOEFL and IELTS exams.</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-green-400 text-2xl mr-4" />
                <div>
                  <strong className="text-lg">Is there a free trial available?</strong>
                  <p className="mt-2">Yes, SpeakEase offers a free trial period for new users to explore our features and see how it can benefit their learning journey.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnMore;



