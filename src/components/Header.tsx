import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    window.open("https://zipsar-focas-shop.netlify.app/", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 w-[90%] h-[70px] px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-lg flex items-center justify-between z-50 transition-all duration-300 ease-in-out backdrop-blur-md bg-white/30 border border-white/40 ${
        isScrolled ? "top-4" : "top-10"
      }`}
    >
      {/* Glossy Shine Overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

      {/* Logo */}
      <div className="flex-shrink-0 relative z-10">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-[30px] md:h-[50px] cursor-pointer"
        />
      </div>

      {/* Shop Now button */}
      <div className="flex-shrink-0 relative z-10">
        <button
          onClick={handleClick}
          className="bg-white/70 backdrop-blur-sm border border-black border-b-[5px] rounded-full px-4 sm:px-5 py-2 text-blue-700 font-semibold hover:bg-white/90 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;
