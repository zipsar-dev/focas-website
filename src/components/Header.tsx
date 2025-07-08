import logo from "/images/logo.png";
const Header = () => {
  const handleClick = () => {
    window.open("https://zipsar-focas-shop.netlify.app/", "_blank");
  };
  return (
    <header className="w-full max-w-[80%] mx-auto px-0 md:px-4 lg:px-6">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <img src={logo} alt="" className="h-[50px]" />

        {/* Search bar */}
        <div className="flex items-center border border-gray-950 rounded-full px-2 py-1.5 w-full md:w-1/3 border-b-3 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-900 mr-2"
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
            className="w-full p-1 rounded-full border-0 focus:ring-0 focus:outline-none text-sm "
          />
        </div>

        {/* Enroll button */}
        <button
          className="bg-black text-gray-50 px-8 py-2.5 font-light rounded-full whitespace-nowrap cursor-pointer"
          onClick={handleClick}
        >
          Shop Now
        </button>
      </div>

      {/* Horizontal Line */}
      <hr className="w-full border-t-2 border-gray-400 mt-4" />
    </header>
  );
};

export default Header;
