

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBolt, faBullseye } from '@fortawesome/free-solid-svg-icons';

const TestScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Keep track of the current question
  const [score, setScore] = useState(0); // Track score
  const [progress, setProgress] = useState(0); // Track progress
  const [showResult, setShowResult] = useState(false); // Toggle result screen after quiz completion

  // Array of quiz questions
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'Berlin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who developed the theory of relativity?',
      answerOptions: [
        { answerText: 'Isaac Newton', isCorrect: false },
        { answerText: 'Albert Einstein', isCorrect: true },
        { answerText: 'Galileo Galilei', isCorrect: false },
        { answerText: 'Nikola Tesla', isCorrect: false },
      ],
    },
    // Add more questions here
  ];

  // Handle answer selection
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setProgress(((nextQuestion + 1) / questions.length) * 100);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center">
      {showResult ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg">You scored {score} out of {questions.length}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="text-sm mb-2">Progress: {Math.round(progress)}%</div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{questions[currentQuestion].questionText}</h2>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition"
                  onClick={() => handleAnswerClick(option.isCorrect)}
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>

          {/* Icon for motivation or fun */}
          <div className="mt-6 text-center">
            <FontAwesomeIcon icon={faBolt} className="text-yellow-400 text-4xl" />
            <p className="text-sm text-gray-600">You got this! Keep going!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestScreen;






