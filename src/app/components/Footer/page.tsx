// // // Footer.jsx
// import { FaFacebookF,FaLinkedin, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-orange-900 text-white py-8">
//       <div className="container mx-auto text-center md:text-left">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">About Us</h3>
//             <p>
// "            `We are dedicated to providing you with exceptional services that enhance your living experience and reflect your unique lifestyle.`</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2 text-white">
//               <a href="https://www.linkedin.com/in/alishba-rehman-29074821a/ ">quick links click</a>
//             </h3>
//             <ul>
//               <li><a href="/" className="hover:text-yellow-300">Home</a></li>
//               <li><a href="/about" className="hover:text-yellow-300">About</a></li>
//               <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
//             </ul>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">Follow Us</h3>
//             <div className="flex justify-center md:justify-start">
//               <a href="#" className="text-white hover:text-yellow-300 mx-2">
//                 <FaFacebookF className="w-5 h-5" />
//               </a>
             
              
//               <a href="https://www.linkedin.com/in/alishba-rehman-29074821a/" className="text-white hover:text-yellow-300 mx-2">
//                 <FaLinkedin className="w-5 h-5" />
//               </a>
//               <a href="https://www.youtube.com/@alishbarehman1905" className="text-white hover:text-yellow-300 mx-2">
//                 <FaYoutube className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 border-t border-yellow-500 pt-4 text-center">
//           <p>{new Date().getFullYear()} Agency. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-8">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p>
              &quot;We are dedicated to providing you with exceptional services that enhance your living experience and reflect your unique lifestyle.&quot;
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 text-white">
              <a href="https://www.linkedin.com/in/alishba-rehman-29074821a/">quick links click</a>
            </h3>
            <ul>
              <li><a href="/" className="hover:text-yellow-300">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-300">About</a></li>
              <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="text-white hover:text-yellow-300 mx-2">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/alishba-rehman-29074821a/" className="text-white hover:text-yellow-300 mx-2">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@alishbarehman1905" className="text-white hover:text-yellow-300 mx-2">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-yellow-500 pt-4 text-center">
          <p>{new Date().getFullYear()} Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
