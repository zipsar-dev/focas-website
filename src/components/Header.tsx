const Header = () => {
  const handleClick = () => {
    window.open("https://zipsar-focas-shop.netlify.app/", "_blank");
  };

  return (
    <header className="w-full max-w-[80%] mx-auto">
      <div className="w-full flex items-center justify-between gap-4">
        {/* Logo - Always on the left */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[30px] md:h-[50px]"
          />
        </div>

        {/* Search bar - Center on desktop, hidden on tablet and below */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-4">
          <div className="flex items-center border border-gray-950 rounded-full px-2 py-1.5 w-full max-w-80 border-b-3 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-900 mr-2 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search any Course"
              className="w-full p-1 rounded-full border-0 focus:ring-0 focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Shop Now button - Always on the right */}
        <div className="flex-shrink-0">
          <button
            className="bg-black text-gray-50 px-4 md:px-6 lg:px-8 py-2.5 font-light rounded-full whitespace-nowrap cursor-pointer text-sm md:text-base"
            onClick={handleClick}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="w-full border-t-2 border-gray-400 mt-4" />
    </header>
  );
};

export default Header;
