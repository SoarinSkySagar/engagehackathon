import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="text-black w-4/5 mx-auto inter md:pt-4 sm:pt-8">
        <div className="container px-2 md:px-5 py-8 md:py-16 mx-auto flex flex-col md:flex-row md:flex-wrap">
          <div className="md:w-1/2 px-4">
            <h2 className="font-medium text-gray-900 text-base mb-3">
              Contact
            </h2>
            <nav className="list-none mb-6 flex flex-col space-y-3 text-sm font-normal">
              <li>
                <a className="text-black hover:text-gray-800 cursor-pointer">
                  Get in Touch
                </a>
              </li>
              <li>
                <a className="text-black hover:text-gray-800 cursor-pointer">
                  Feedback
                </a>
              </li>
              <li>
                <a className="text-black hover:text-gray-800 cursor-pointer">
                  Feature Requests
                </a>
              </li>
            </nav>
          </div>
          <div className="md:w-1/2 px-4">
            <h2 className="font-medium text-gray-900 text-base mb-3">
              Developers
            </h2>
            <nav className="list-none mb-6 flex flex-col space-y-3 text-sm font-normal">
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  href="https://github.com/PoulavBhowmick03/hackthemountains"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Press Releases
                </a>
              </li>
            </nav>
          </div>
        </div>
      </footer>
      <div className="w-4/5 mx-auto py-2 md:mt-4 sm:mt-8 text-sm">
        <hr className="h-px bg-gray-500 opacity-30 border-0 mb-4" />

      </div>
    </div>
  );
};

export default Footer;
