
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'; // Importing Google icon
// import { auth, googleProvider } from '../firebaseConfig'; 
// import {  signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';


// const SignUpPage = () => {
//     const navigate = useNavigate(); // To redirect to home page

//     // State for errors
//   const [signUpError, setSignUpError] = useState('');
//   const [signInError, setSignInError] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isCreateAccountModalOpen, setCreateAccountModalOpen] = useState(false);
//   const [isSignInModalOpen, setSignInModalOpen] = useState(false);


//   // Function to handle Google sign-in
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);  // Sign in with Google
//       navigate('/home');  // Redirect to Home page after successful sign-in
//     } catch (error) {
//       console.error('Google Sign-In Error:', error);
//     }
//   };


//   const handleEmailSignUp = async (e) => {
//     e.preventDefault();
//     setSignUpError('');
//     if (!email || !password || !confirmPassword) {
//         setSignUpError("All fields are mandatory.");
//         return;
//       }
  
//       if (password !== confirmPassword) {
//         setSignUpError("Passwords do not match.");
//         return;
//       }
  
//       try {
//         await createUserWithEmailAndPassword(auth, email, password);
//         console.log("Account created successfully");
//         navigate('/home'); // Redirect to home after successful sign-up
//       } catch (error) {
//         console.error('Error creating account:', error);
//         setSignUpError(error.message);
//       }
//     };
// //     const email = e.target.email.value; // Get email from form
// //     const password = e.target.password.value; // Get password from form
// //     const confirmPassword = e.target.confirmPassword.value;
  
// //     if (password !== confirmPassword) {
// //       console.error("Passwords do not match");
// //       return;
// //     }
  
// //     try {
// //       await createUserWithEmailAndPassword(auth, email, password);
// //       console.log("Account created successfully");
// //       setCreateAccountModalOpen(false); // Close modal after successful signup
// //     } catch (error) {
// //       console.error('Error creating account:', error);
// //     }
// //   };

  
//   const handleEmailSignIn = async (e) => {
//     e.preventDefault();
//     setSignInError('');
//     if (!email || !password) {
//         setSignInError("All fields are mandatory.");
//         return;
//       }
  
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//         console.log("Signed in successfully");
//         navigate('/home'); // Redirect to home after successful sign-in
//       } catch (error) {
//         console.error('Error signing in:', error);
//         setSignInError(error.message);
//       }
//     };
// //     const email = e.target.email.value;
// //     const password = e.target.password.value;
  
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       console.log("Signed in successfully");
// //       setSignInModalOpen(false); // Close modal after successful sign-in
// //       navigate('/home'); // Redirect to the home page
// //     } catch (error) {
// //       console.error('Error signing in:', error);
// //     }
// //   };
  


//   // State to control modal visibility
//   const [isCreateAccountModalOpen, setCreateAccountModalOpen] = useState(false);
//   const [isSignInModalOpen, setSignInModalOpen] = useState(false);

//   // Function to toggle create account modal visibility
//   const toggleCreateAccountModal = () => {
//     setCreateAccountModalOpen(!isCreateAccountModalOpen);
//   };

//   // Function to toggle sign-in modal visibility
//   const toggleSignInModal = () => {
//     setSignInModalOpen(!isSignInModalOpen);
//   };

//   return (
//     <div className="relative bg-gray-900 text-white h-screen flex flex-col justify-center items-center overflow-hidden">
      
//       {/* Background Animated Shapes */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full"
//         animate={{ opacity: [0.4, 0.8, 0.4], x: [-50, 50, -50] }}
//         transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//       >
//         <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-3xl top-1/3 left-1/4"></div>
//         <div className="absolute w-96 h-96 bg-yellow-400 opacity-20 rounded-full filter blur-3xl top-2/3 right-1/4"></div>
//       </motion.div>

//       {/* Sign-up Form Area */}
//       <div className="relative z-10 bg-gray-800 p-8 rounded-lg shadow-lg w-80 md:w-96 text-center">
        
//         {/* Title with Waving Hand */}
//         <h1 className="text-3xl font-bold mb-6">
//           Hi{' '}
//           <motion.span
//             animate={{ rotate: [0, 30, 0] }}
//             transition={{
//               duration: 0.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             style={{ display: 'inline-block' }}
//           >
//             👋
//           </motion.span>
//               <span>  </span>Join <span className="text-green-400">SpeakEase</span>
//         </h1>

//         {/* Sign Up with Google Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="bg-white text-black w-full py-3 mb-4 rounded-lg flex items-center justify-center shadow-lg"
//           onClick={handleGoogleSignIn}
//         >
//           <FontAwesomeIcon icon={faGoogle} className="text-red-500 mr-2" />
//           <span>Sign up with Google</span>
//         </motion.button>

//         {/* "OR" Divider */}
//         <div className="relative flex py-2 items-center">
//            <div className="flex-grow border-t border-gray-500"></div>
//            <span className="flex-shrink mx-4 text-gray-400">OR</span>
//            <div className="flex-grow border-t border-gray-500"></div>
//          </div>

//         {/* Create Account Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="bg-green-500 hover:bg-green-600 text-white w-full py-3 mb-4 rounded-lg shadow-lg"
//           onClick={toggleCreateAccountModal} // Open create account modal
//         >
//           Create Account
//         </motion.button>

//         {/* Sign-in link */}
//         <motion.p
//           className="text-sm mt-4"
//           whileHover={{ scale: 1.05 }}
//         >
//           Already have an account?{' '}
//           <motion.span
//             className="text-green-400 hover:underline cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//             onClick={toggleSignInModal} // Open sign-in modal
//           >
//             Sign in
//           </motion.span>
//         </motion.p>
//       </div>

//       {/* Create Account Modal Overlay */}
//       {isCreateAccountModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
//           <motion.div
//             className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-lg"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-6">Create Your SpeakEase Account</h2>
//             <p className="text-lg mb-6 text-gray-300">
//               Join us and take your fluency to the <br /> next level!
//             </p>
//             {signUpError && <p className="text-red-500">{signUpError}</p>} {/* Error message for sign up */}
//             <form className="space-y-4" onSubmit={handleEmailSignUp}>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
//               />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
//               />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
//               />
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
//               />
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2 h-5 w-5"
//                 />
//                 <label className="text-sm text-white">
//                   I agree to the <span className="text-green-400 underline">terms of service</span>.
//                 </label>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 type="submit" // Set button type to submit the form
//                 className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg shadow-lg"
//               >
//                 Create Account
//               </motion.button>
//             </form>
//             <button onClick={() => setCreateAccountModalOpen(false)} className="text-white-400 hover:text-white mt-6 block mx-auto">
//               Close
//             </button>
//             {/* <button
//               onClick={toggleCreateAccountModal} // Close the create account modal
//               className="text-white-400 hover:text-white mt-6 block mx-auto"
//             >
//               Close
//             </button> */}
//           </motion.div>
//         </div>
//       )}

//       {/* Sign-In Modal Overlay */}
//       {isSignInModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
//           <motion.div
//             className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-lg"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-6">Unlock Your Voice – Sign In Here!</h2>
//             {signInError && <p className="text-red-500">{signInError}</p>} {/* Error message for sign in */}
//             <form className="space-y-4" onSubmit={handleEmailSignIn}>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
//               />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 type="submit"
//                 className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg shadow-lg"
//               >
//                 Sign In
//               </motion.button>
//             </form>
//             <button onClick={() => setSignInModalOpen(false)} className="text-white-400 hover:text-white mt-6 block mx-auto">
//               Close
//             </button>
//             {/* <button
//               onClick={toggleSignInModal} // Close the sign-in modal
//               className="text-white-400 hover:text-white mt-6 block mx-auto"
//             >
//               Close
//             </button> */}
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUpPage;






import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  // State for authentication and form management
  const [signUpError, setSignUpError] = useState('');
  const [signInError, setSignInError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Modal state
  const [isCreateAccountModalOpen, setCreateAccountModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/home');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  // Handle Email Sign-Up
  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setSignUpError('');
    if (!email || !password || !confirmPassword) {
      setSignUpError("All fields are mandatory.");
      return;
    }

    if (password !== confirmPassword) {
      setSignUpError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      console.error('Error creating account:', error);
      setSignUpError(error.message);
    }
  };

  // Handle Email Sign-In
  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setSignInError('');
    if (!email || !password) {
      setSignInError("All fields are mandatory.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      console.error('Error signing in:', error);
      setSignInError(error.message);
    }
  };

  return (
    <div className="relative bg-gray-900 text-white h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Animated Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ opacity: [0.4, 0.8, 0.4], x: [-50, 50, -50] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-3xl top-1/3 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-yellow-400 opacity-20 rounded-full filter blur-3xl top-2/3 right-1/4"></div>
      </motion.div>

      {/* Sign-up Form Area */}
      <div className="relative z-10 bg-gray-800 p-8 rounded-lg shadow-lg w-80 md:w-96 text-center">
        <h1 className="text-3xl font-bold mb-6">
          Hi{' '}
          <motion.span
            animate={{ rotate: [0, 30, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: 'inline-block' }}
          >
            👋
          </motion.span>
          <span>  </span>Join <span className="text-green-400">SpeakEase</span>
        </h1>

        {/* Sign Up with Google */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black w-full py-3 mb-4 rounded-lg flex items-center justify-center shadow-lg"
          onClick={handleGoogleSignIn}
        >
          <FontAwesomeIcon icon={faGoogle} className="text-red-500 mr-2" />
          <span>Sign up with Google</span>
        </motion.button>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 hover:bg-green-600 text-white w-full py-3 mb-4 rounded-lg shadow-lg"
          onClick={() => setCreateAccountModalOpen(true)}
        >
          Create Account
        </motion.button>

        <motion.p className="text-sm mt-4" whileHover={{ scale: 1.05 }}>
          Already have an account?{' '}
          <motion.span
            className="text-green-400 hover:underline cursor-pointer"
            onClick={() => setSignInModalOpen(true)}
          >
            Sign in
          </motion.span>
        </motion.p>
      </div>

      {/* Create Account Modal */}
      {isCreateAccountModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <motion.div
            className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Create Your SpeakEase Account</h2>
            <p className="text-lg mb-6 text-gray-300">Join us and take your fluency to the next level!</p>
            {signUpError && <p className="text-red-500">{signUpError}</p>}
            <form className="space-y-4" onSubmit={handleEmailSignUp}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
              />
              {signUpError && <p className="text-red-500">{signUpError}</p>}
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg shadow-lg"
              >
                Create Account
              </motion.button>
            </form>
            <button onClick={() => setCreateAccountModalOpen(false)} className="text-white-400 hover:text-white mt-6 block mx-auto">
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Sign-In Modal */}
      {isSignInModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <motion.div
            className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Unlock Your Voice – Sign In Here!</h2>
            {signInError && <p className="text-red-500">{signInError}</p>}
            <form className="space-y-4" onSubmit={handleEmailSignIn}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full py-3 px-4 rounded-lg bg-gray-700 text-white"
              />
              {signInError && <p className="text-red-500">{signInError}</p>}
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg shadow-lg"
              >
                Sign In
              </motion.button>
            </form>
            <button onClick={() => setSignInModalOpen(false)} className="text-white-400 hover:text-white mt-6 block mx-auto">
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
