import React from "react";
import { FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// Mock logo - replace with your actual logo import
const logo = "images/logoblack.png";

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
    <footer className="bg-black text-white pt-16 pb-10 relative md:mt-[13rem] mt-[5rem]">
      {/* Centered Blue Box with Enhanced Responsive Height */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-[85%] sm:w-[80%] border border-black rounded-lg bg-blue-500 overflow-hidden
        -top-[60px] h-[180px]
        xs:-top-[70px] xs:h-[190px]
        sm:-top-[80px] sm:h-[200px]
        md:-top-[100px] md:h-[220px]
        lg:-top-[120px] lg:h-[240px]
        xl:-top-[130px] xl:h-[260px]
        2xl:-top-[160px] 2xl:h-[280px]"
      >
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
        <div className="relative z-10 flex items-center h-full text-white">
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 w-full">
            <div className="space-y-1 sm:space-y-2">
              {/* Main heading with responsive text and spacing */}
              <h2
                className="font-bold leading-tight
                text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
                mb-1 sm:mb-2 md:mb-3"
              >
                Study Like Never Before with FOCAS
              </h2>

              {/* Responsive text blocks */}
              <div className="space-y-0.5 sm:space-y-1">
                <p
                  className="opacity-90 leading-relaxed
                  text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  Get mentored by top-tier teachers for CA Foundation, CA
                  Intermediate and CA Final
                </p>
                <p
                  className="opacity-90 leading-relaxed
                  text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  Structured videos. Personal tutors. Zero guesswork.
                </p>
                <p
                  className="opacity-90 leading-relaxed
                  text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  At FOCAS, every student is tracked. Every doubt, cleared.
                  Every attempt, your best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Enhanced Responsive Layout */}
      <div className="container w-[80%] mx-auto pt-16 sm:pt-20 md:pt-24">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Logo and Description */}
          <div className="flex-1 lg:min-w-[250px] lg:max-w-[400px] mb-4 lg:mb-0">
            <img
              src={logo}
              alt="FOCAS Logo"
              className="h-[40px] sm:h-[50px] mb-4"
            />
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
