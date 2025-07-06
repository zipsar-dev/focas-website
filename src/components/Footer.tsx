import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import logo from "/images/logoblack.png";

const Footer: React.FC = () => {
  React.useEffect(() => {
    // Simple fade-in animation without GSAP dependency
    const footerItems = document.querySelectorAll(".footer-item");
    footerItems.forEach((item, index) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0)";
      }, index * 200);
    });
  }, []);

  return (
    <footer className="bg-black text-white pt-16 pb-10 relative md:mt-[13rem] mt-[5rem] min-h-[400px]">
      {/* Centered Blue Box with Zigzag Grid - Enhanced Responsiveness */}
      <div className="absolute left-1/2 -top-[40px] sm:-top-[60px] md:-top-[80px] lg:-top-[120px] xl:-top-[150px] transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] h-[150px] xs:h-[140px] sm:h-[170px] md:h-[200px] lg:h-[220px] xl:h-[250px] border border-black rounded-lg bg-blue-500 overflow-hidden">
        {/* Zigzag Grid Background for Blue Box */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern
                id="zigzag-grid-footer"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                {/* Vertical lines */}
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="30"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <line
                  x1="15"
                  y1="0"
                  x2="15"
                  y2="30"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <line
                  x1="30"
                  y1="0"
                  x2="30"
                  y2="30"
                  stroke="white"
                  strokeWidth="0.5"
                />

                {/* Horizontal lines */}
                <line
                  x1="0"
                  y1="0"
                  x2="30"
                  y2="0"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1="15"
                  x2="30"
                  y2="15"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1="30"
                  x2="30"
                  y2="30"
                  stroke="white"
                  strokeWidth="0.5"
                />

                {/* Zigzag diagonal lines */}
                <path
                  d="M0,0 L7.5,7.5 L15,0 L22.5,7.5 L30,0"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M0,15 L7.5,22.5 L15,15 L22.5,22.5 L30,15"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M0,30 L7.5,22.5 L15,30 L22.5,22.5 L30,30"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />

                {/* Reverse zigzag */}
                <path
                  d="M0,7.5 L7.5,0 L15,7.5 L22.5,0 L30,7.5"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M0,22.5 L7.5,15 L15,22.5 L22.5,15 L30,22.5"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zigzag-grid-footer)" />
          </svg>
        </div>

        {/* Content inside the blue box - Enhanced Responsive Layout */}
        <div className="relative z-10 flex items-center flex-wrap h-full text-white">
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full">
            <div className="">
              {/* Text Content */}

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 leading-tight">
                Learn Like Never Before
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 sm:mb-4 max-w-none sm:max-w-md md:max-w-lg leading-relaxed">
                Engaging video classes by top Faculty for CA / ACCA / CMA / CS /
                CFA
              </p>

              <button className="bg-white mt-2 md:mt-0 w-auto text-blue-500 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 cursor-pointer text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-300 rounded-full whitespace-nowrap">
                Enroll in Free course
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Enhanced Responsive Layout */}
      <div className="container mx-auto px-4 pt-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Logo and Description */}
          <div className="flex-1 lg:min-w-[250px] lg:max-w-[400px] mb-4 lg:mb-0">
            <img src={logo} alt="" className="h-[40px] sm:h-[50px] mb-4" />
            <p className="text-sm footer-item mb-2 opacity-0 transform translate-y-4 transition-all duration-500">
              Your last attempt
            </p>
            <p className="text-sm footer-item opacity-0 transform translate-y-4 transition-all duration-500 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Links Section - Enhanced Grid Layout */}
          <div className="flex-1 lg:flex-none">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 footer-item opacity-0 transform translate-y-4 transition-all duration-500">
              <div className="min-w-0">
                <h4 className="text-sm sm:text-md font-medium mb-3 text-white">
                  Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="min-w-0">
                <h4 className="text-sm sm:text-md font-medium mb-3 text-white">
                  Courses
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      CA Inter Audit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      ACCA - L1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      CA Final
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      CA Foundation
                    </a>
                  </li>
                </ul>
              </div>

              <div className="min-w-0">
                <h4 className="text-sm sm:text-md font-medium mb-3 text-white">
                  Company
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors block"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="min-w-0">
                <h4 className="text-sm sm:text-md font-medium mb-3 text-white">
                  Follow Us
                </h4>
                <div className="space-y-2">
                  <div>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
                    >
                      <FaXTwitter className="flex-shrink-0" />
                      <span className="truncate">Twitter</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
                    >
                      <FaLinkedin className="flex-shrink-0" />
                      <span className="truncate">LinkedIn</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-xs sm:text-sm hover:text-gray-300 transition-colors flex gap-2 items-center"
                    >
                      <FaYoutube className="flex-shrink-0" />
                      <span className="truncate">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Enhanced Responsive */}
        <div className="text-center mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-700">
          <p className="text-xs sm:text-sm footer-item opacity-0 transform translate-y-4 transition-all duration-500">
            Copyright Focus 2024@ all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
