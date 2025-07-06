import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
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
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start flex-wrap gap-8">
          {/* Logo and Description */}
          <div className="flex-1 min-w-[250px] mb-4">
            <h3 className="text-2xl font-bold mb-2">FOCuS</h3>
            <p className="text-sm footer-item mb-2 opacity-0 transform translate-y-4 transition-all duration-500">
              Your last attempt
            </p>
            <p className="text-sm footer-item opacity-0 transform translate-y-4 transition-all duration-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-8 footer-item opacity-0 transform translate-y-4 transition-all duration-500">
            <div className="min-w-[120px]">
              <h4 className="text-md font-medium mb-3">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="min-w-[120px]">
              <h4 className="text-md font-medium mb-3">Courses</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    CA Inter Audit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    ACCA - L1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    CA Final
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    CA Foundation
                  </a>
                </li>
              </ul>
            </div>

            <div className="min-w-[120px]">
              <h4 className="text-md font-medium mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="min-w-[120px]">
              <h4 className="text-md font-medium mb-3">Follow Us</h4>
              <div className="space-y-2">
                <div>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
                  >
                    <FaXTwitter /> Twitter
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-300 transition-colors flex gap-2 items-center"
                  >
                    <FaYoutube /> YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-gray-700">
          <p className="text-sm footer-item opacity-0 transform translate-y-4 transition-all duration-500">
            Copyright Focus 2024@ all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
