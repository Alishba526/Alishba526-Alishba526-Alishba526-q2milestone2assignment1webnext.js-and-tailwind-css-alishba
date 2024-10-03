// // real h ye wala 
// import Link from "next/link"
// function Navbar(){
//     return(
//         <main>
//         <header className=" flex justify-between bg-orange-900 py-6 relative z-10" >
//             {/* logo */}
//             <div>
//                 <h2 className=" italic text-3xl text-white ml-2 font-bold font"> Alishba Rehman</h2>

//             </div>
//             {/* link */}
//             <div>
//                 <nav>
//                     <ul className="flex gap-x-20 mr-16 text-2xl text-white ">
//                         <li>
//                             <Link href="/" className="hover:bg-yellow-500 rounded brightness-95">Home</Link></li>
//                             <li>
//                             <Link href="/about"  className="hover:bg-yellow-500 rounded">About</Link></li>
//                             <li>
//                             <Link href="/contact"  className="hover:bg-yellow-500 rounded-s-lg">Contact</Link></li>
                            
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//         </main>
//     )
// }
// export default Navbar












"use client";


import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for mobile menu

  return (
    <main>
      <header className="flex justify-between bg-orange-900 py-6 relative z-10">
        {/* Logo */}
        <div>
          <h2 className="italic text-3xl text-white ml-4 font-bold">Alishba Rehman</h2>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="text-white text-3xl md:hidden mr-4"
          onClick={() => setIsOpen(!isOpen)} // Toggle the menu on click
        >
          {isOpen ? "✖" : "☰"} {/* Shows X when open and ☰ when closed */}
        </button>

        {/* Links */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto`}>
          <nav>
            <ul className="flex flex-col md:flex-row gap-y-4 md:gap-x-20 mr-16 text-2xl text-white mt-4 md:mt-0">
              <li>
                <Link href="/" className="hover:bg-yellow-500 rounded px-3 py-1">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:bg-yellow-500 rounded px-3 py-1">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:bg-yellow-500 rounded px-3 py-1">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </main>
  );
}

export default Navbar;
