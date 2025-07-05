// components/Header.tsx

const Header = () => {
    return (
        <header className="w-full max-w-7xl mx-auto px-0 md:px-4 lg:px-6">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-900">FOCAS</div>

                {/* Search bar */}
                <div className="flex items-center border border-gray-400 rounded-full px-2 py-1 w-full md:w-1/3 border-b-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search any Course"
                        className="w-full p-1 rounded-full border-0 focus:ring-0 focus:outline-none text-sm"
                    />
                </div>

                {/* Enroll button */}
                <button className="bg-black text-white px-4 py-2 rounded-full whitespace-nowrap">Enroll Now</button>
            </div>

            {/* Horizontal Line */}
            <hr className="w-full border-t-3 border-gray-300 mt-4" />
        </header>
    )
}

export default Header
