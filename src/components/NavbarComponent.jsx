import React, { useState } from "react";

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-blue-500">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
          {/* Logo */}
          <a className="text-3xl font-bold leading-none" href="#">
            <svg
              className="h-10"
              viewBox="0 0 10240 10240"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8284 9162 c-2 -207 -55 -427..." />
              {/* Paste full SVG path here */}
            </svg>
          </a>

          {/* Menu Toggle for Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-green-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 4a.75.75 0 01.75-.75h14a.75.75 0 010 1.5h-14a.75.75 0 01-.75-.75zM2.5 9a.75.75 0 01.75-.75h14a.75.75 0 010 1.5h-14a.75.75 0 01-.75-.75zM2.5 14a.75.75 0 01.75-.75h14a.75.75 0 010 1.5h-14a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Navbar items */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} lg:flex space-x-8`}
          >
            <a
              href="#shopping"
              className="text-lg text-gray-700 hover:text-green-500"
            >
              Shopping
            </a>
            <a
              href="#workout"
              className="text-lg text-gray-700 hover:text-green-500"
            >
              Basic Workout
            </a>
            <a
              href="#diet"
              className="text-lg text-gray-700 hover:text-green-500"
            >
              Personal Customization of Diet
            </a>
            <a
              href="#professionals"
              className="text-lg text-gray-700 hover:text-green-500"
            >
              For Professionals
            </a>
          </div>

          {/* Sign Up / Sign In buttons */}
          <div className="hidden lg:flex space-x-4">
            <button className="text-lg text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition">
              Sign Up
            </button>
            <button className="text-lg text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition">
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarComponent;
