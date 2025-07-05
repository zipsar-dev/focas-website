
const Hero = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-2 md:px-4 lg:px-6 flex items-start justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side: Text Content */}
                    <div className="space-y-6 z-10 relative text-left order-2 lg:order-1">
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Join <span className="text-blue-600">10,000+</span> learners transforming their careers with{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    FocasEdu
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                                Accelerate your future with job-ready skills, expert guidance, and hands-on learning.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="cursor-pointer group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                Start Learning
                            </button>
                            <button className="cursor-pointer border-2 border-gray-800 text-gray-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 hover:text-white transition-all duration-300">
                                Get Free Career Counseling
                            </button>
                        </div>


                        <div className="flex items-center gap-2 text-yellow-500">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-lg sm:text-xl">⭐</span>
                                ))}
                            </div>
                            <span className="text-gray-700 font-medium text-sm sm:text-base">4.8/5 on Google, Trustpilot & JustDial</span>
                        </div>
                    </div>

                    {/* Right Side: Image + Floating Cards */}
                    <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] order-1 lg:order-2">
                        {/* Background Elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 animate-pulse"></div>
                        </div>

                        {/* Graduate Image */}
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="images/Hero.png"
                                alt="Graduate"
                                className="h-auto max-w-full drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Cards - positioned over the image */}
                        <div className="absolute inset-0 pointer-events-none z-20 text-left">
                            {/* Top Left Card - floating over image */}
                            <div className="floating-card-1 absolute bottom-[35%] sm:bottom-[35%] left-2 sm:left-8 bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-2xl border border-gray-100 flex items-center gap-1 sm:gap-2 w-36 sm:w-52 transform hover:scale-110 transition-transform duration-300">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <img src="images/books.jpg" alt="Courses" className="w-4 h-4 sm:w-6 sm:h-6 rounded" />
                                </div>
                                <div>
                                    <div className="font-bold text-blue-600 text-sm sm:text-base">150+</div>
                                    <div className="text-xs text-gray-600">Industry relevant Courses</div>
                                </div>
                            </div>

                            {/* Top Right Card - floating over image */}
                            <div className="floating-card-2 absolute bottom-[30%] sm:bottom-[30%] right-1 sm:right-4 bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-2xl border border-gray-100 flex items-center gap-1 sm:gap-2 w-32 sm:w-48 transform hover:scale-110 transition-transform duration-300">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <img src="images/earth.jpg" alt="Countries" className="w-4 h-4 sm:w-6 sm:h-6 rounded" />
                                </div>
                                <div>
                                    <div className="font-bold text-yellow-600 text-sm">20+</div>
                                    <div className="text-xs text-gray-600">Countries</div>
                                </div>
                            </div>

                            {/* Middle Left Card - floating over image */}
                            <div className="floating-card-3 absolute bottom-[5%] sm:bottom-[5%] left-0 sm:left-2 bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-2xl border border-gray-100 flex items-center gap-1 sm:gap-2 w-32 sm:w-44 transform hover:scale-110 transition-transform duration-300">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <img src="images/teacher.png" alt="Mentors" className="w-4 h-4 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-green-600 text-sm">Certified</div>
                                    <div className="text-xs text-gray-600">Expert Mentors</div>
                                </div>
                            </div>

                            {/* Bottom Right Card - floating over image */}
                            <div className="floating-card-4 absolute bottom-[5%] sm:bottom-[5%] right-2 sm:right-8 bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-2xl border border-gray-100 flex items-center gap-1 sm:gap-2 w-28 sm:w-44 transform hover:scale-110 transition-transform duration-300">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <img src="images/briefcase.png" alt="Placement" className="w-4 h-4 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-purple-600 text-sm sm:text-base">80%</div>
                                    <div className="text-xs text-gray-600">Placement Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Floating Cards - Below Image */}
                {/* <div className="block sm:hidden mt-8 space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 mx-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <img src="images/books.jpg" alt="Courses" className="w-8 h-8 rounded" />
                            </div>
                            <div>
                                <div className="font-bold text-blue-600 text-lg">150+</div>
                                <div className="text-sm text-gray-600">Industry-Relevant Courses</div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 mx-4">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                <img src="images/earth.jpg" alt="Countries" className="w-8 h-8 rounded" />
                            </div>
                            <div>
                                <div className="font-bold text-yellow-600 text-lg">20+</div>
                                <div className="text-sm text-gray-600">Countries Trust Us</div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 mx-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <img src="images/teacher.png" alt="Mentors" className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="font-bold text-green-600 text-lg">Certified</div>
                                <div className="text-sm text-gray-600">Expert Mentors</div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 mx-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <img src="images/briefcase.png" alt="Placement" className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="font-bold text-purple-600 text-lg">80%</div>
                                <div className="text-sm text-gra    y-600">Placement Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes float1 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                }
                
                @keyframes float2 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(-2deg); }
                }
                
                @keyframes float3 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(1deg); }
                }
                
                @keyframes float4 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-18px) rotate(-1deg); }
                }
                
                .floating-card-1 {
                    animation: float1 6s ease-in-out infinite;
                    animation-delay: 0s;
                }
                
                .floating-card-2 {
                    animation: float2 8s ease-in-out infinite;
                    animation-delay: 1s;
                }
                
                .floating-card-3 {
                    animation: float3 7s ease-in-out infinite;
                    animation-delay: 2s;
                }
                
                .floating-card-4 {
                    animation: float4 9s ease-in-out infinite;
                    animation-delay: 3s;
                }
                
                @media (max-width: 640px) {
                    .floating-card-1,
                    .floating-card-2,
                    .floating-card-3,
                    .floating-card-4 {
                        animation-duration: 4s;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;