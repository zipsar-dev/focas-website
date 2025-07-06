import React, { useEffect, useRef } from "react";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const tutorsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(50px) scale(0.8)";
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = "all 1.2s ease-out";
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0) scale(1)";
        }
      }, 200);
    }

    // Text animation
    if (textRef.current) {
      textRef.current.style.opacity = "0";
      textRef.current.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.style.transition = "all 1s ease-out";
          textRef.current.style.opacity = "1";
          textRef.current.style.transform = "translateY(0)";
        }
      }, 500);
    }

    // Shape animation
    if (shapeRef.current) {
      shapeRef.current.style.opacity = "0";
      shapeRef.current.style.transform = "translateY(30px) scale(0.5)";
      setTimeout(() => {
        if (shapeRef.current) {
          shapeRef.current.style.transition = "all 1.2s ease-out";
          shapeRef.current.style.opacity = "1";
          shapeRef.current.style.transform = "translateY(0) scale(1)";
        }
      }, 800);
    }

    // Stats animation
    if (statsRef.current) {
      Array.from(statsRef.current.children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.opacity = "0";
          child.style.transform = "translateY(40px) scale(0.8)";
          setTimeout(() => {
            child.style.transition = "all 0.8s ease-out";
            child.style.opacity = "1";
            child.style.transform = "translateY(0) scale(1)";
          }, 1000 + index * 150);
        }
      });
    }

    // Tutors animation
    if (tutorsRef.current) {
      Array.from(tutorsRef.current.children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.opacity = "0";
          child.style.transform = "translateY(60px)";
          setTimeout(() => {
            child.style.transition = "all 0.8s ease-out";
            child.style.opacity = "1";
            child.style.transform = "translateY(0)";
          }, 1500 + index * 200);
        }
      });
    }

    // Infinite scroll animation
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;

      setTimeout(() => {
        const scrollElements = Array.from(scrollContainer.children);

        scrollElements.forEach((element: Element) => {
          const clone = element.cloneNode(true);
          scrollContainer.appendChild(clone);
        });

        let totalWidth = 0;
        scrollElements.forEach((element: Element) => {
          totalWidth += element.getBoundingClientRect().width;
        });

        let currentX = 0;

        const animate = () => {
          currentX -= 1;
          if (currentX <= -totalWidth) {
            currentX = 0;
          }
          scrollContainer.style.transform = `translateX(${currentX}px)`;
          requestAnimationFrame(animate);
        };

        animate();
      }, 100);
    }

    // Floating animation for stats
    if (statsRef.current) {
      const statsNumbers = statsRef.current.querySelectorAll("h2");
      statsNumbers.forEach((element, index) => {
        if (element instanceof HTMLElement) {
          let direction = 1;
          let currentY = 0;

          const float = () => {
            currentY += direction * 0.1;
            if (currentY >= 5) direction = -1;
            if (currentY <= -5) direction = 1;

            element.style.transform = `translateY(${currentY}px)`;
            requestAnimationFrame(float);
          };

          setTimeout(() => float(), index * 300);
        }
      });
    }
  }, []);

  return (
    <div
      ref={aboutRef}
      className="w-full bg-blue-500 py-4 sm:py-6 md:py-8 lg:py-10 relative px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Zigzag Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern
              id="zigzag-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              {/* Vertical lines */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="white"
                strokeWidth="0.5"
              />
              <line
                x1="20"
                y1="0"
                x2="20"
                y2="40"
                stroke="white"
                strokeWidth="0.5"
              />
              <line
                x1="40"
                y1="0"
                x2="40"
                y2="40"
                stroke="white"
                strokeWidth="0.5"
              />

              {/* Horizontal lines */}
              <line
                x1="0"
                y1="0"
                x2="40"
                y2="0"
                stroke="white"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="20"
                x2="40"
                y2="20"
                stroke="white"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="40"
                x2="40"
                y2="40"
                stroke="white"
                strokeWidth="0.5"
              />

              {/* Zigzag diagonal lines */}
              <path
                d="M0,0 L10,10 L20,0 L30,10 L40,0"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,20 L10,30 L20,20 L30,30 L40,20"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,40 L10,30 L20,40 L30,30 L40,40"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
              />

              {/* Reverse zigzag */}
              <path
                d="M0,10 L10,0 L20,10 L30,0 L40,10"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,30 L10,20 L20,30 L30,20 L40,30"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zigzag-grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center pl-0 lg:pl-15">
            <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] text-white mx-auto">
              <h1
                ref={titleRef}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-1"
              >
                About Our Tutor
              </h1>
              <p
                ref={textRef}
                className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 font-light text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae necessitatibus eum voluptatem! Qui, eveniet illo.
                Voluptas ipsam adipisci reiciendis, vitae dolorum molestiae
                officia et, optio cupiditate inventore veritatis nihil? A, vitae
                commodi! Quo fugiat ullam voluptatibus quam. Temporibus, ut nemo
                aperiam expedita nisi accusantium veritatis soluta cum ipsam
                recusandae atque?
              </p>
              <div
                ref={statsRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6"
              >
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center mt-3 sm:mt-4">
                  <div className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] flex items-center justify-center border border-black rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="https://placehold.co/100x100/ABFFA0/white?text=A"
                      alt="Instructors"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold">
                      300
                    </h2>
                    <p className="text-light text-xs sm:text-sm">Instructors</p>
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center mt-3 sm:mt-0">
                  <div className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] flex items-center justify-center border border-black rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="https://placehold.co/100x100/A0BEFF/white?text=B"
                      alt="Videos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold">
                      10,000+
                    </h2>
                    <p className="text-light text-xs sm:text-sm">Videos</p>
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center mt-3">
                  <div className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] flex items-center justify-center border border-black rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="https://placehold.co/100x100/A0BEFF/white?text=C"
                      alt="Students"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold">
                      20,000+
                    </h2>
                    <p className="text-light text-xs sm:text-sm">Students</p>
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center mt-3">
                  <div className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] flex items-center justify-center border border-black rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="https://placehold.co/100x100/ABFFA0/white?text=D"
                      alt="Users"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold">
                      1,00,000+
                    </h2>
                    <p className="text-light text-xs sm:text-sm">Users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center mt-4 sm:mt-6 lg:mt-0">
            <div
              ref={shapeRef}
              className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px] h-[180px] sm:h-[220px] md:h-[250px] lg:h-[350px] bg-[#a5ffaa] border-2 border-black rounded-t-full relative before:w-[100%] before:h-[100%] before:rounded-t-full before:bg-white before:absolute before:-top-2 sm:before:-top-3 md:before:-top-3 lg:before:-top-4 before:-left-2 sm:before:-left-3 md:before:-left-3 lg:before:-left-4"
            ></div>
          </div>
        </div>
        <div className="min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] w-full mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <h1 className="w-full text-center font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-2">
            Our Tutors
          </h1>
          <div
            ref={tutorsRef}
            className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 mt-4 sm:mt-6 md:mt-8 px-2"
          >
            {[
              { name: "John Smith", role: "Senior Developer" },
              { name: "Sarah Johnson", role: "UI/UX Designer" },
              { name: "Mike Davis", role: "Data Scientist" },
              { name: "Emily Chen", role: "DevOps Engineer" },
              { name: "Alex Rodriguez", role: "Product Manager" },
            ].map((tutor, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px]"
              >
                <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] rounded-full outline-2 outline-white outline-offset-6 sm:outline-offset-8 md:outline-offset-10 lg:outline-offset-12 xl:outline-offset-15 bg-white/50 overflow-hidden cursor-pointer"></div>
                <div className="text-center mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                  <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                    {tutor.name}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">
                    {tutor.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite scroll section */}
      <div className="w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] bg-black text-white absolute left-0 -bottom-15 sm:-bottom-18 md:-bottom-20 lg:-bottom-25 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center h-full whitespace-nowrap"
        >
          <div className="flex items-center gap-2 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 flex-shrink-0">
            <div className="w-[30px] sm:w-[35px] md:w-[40px] lg:w-[50px] h-[30px] sm:h-[35px] md:h-[40px] lg:h-[50px] rounded-full bg-blue-500 flex-shrink-0"></div>
            <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              80% Placement Success Rate
            </h2>
          </div>
          <div className="flex items-center gap-2 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 flex-shrink-0">
            <div className="w-[30px] sm:w-[35px] md:w-[40px] lg:w-[50px] h-[30px] sm:h-[35px] md:h-[40px] lg:h-[50px] rounded-full bg-green-500 flex-shrink-0"></div>
            <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Expert Instructors
            </h2>
          </div>
          <div className="flex items-center gap-2 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 flex-shrink-0">
            <div className="w-[30px] sm:w-[35px] md:w-[40px] lg:w-[50px] h-[30px] sm:h-[35px] md:h-[40px] lg:h-[50px] rounded-full bg-yellow-500 flex-shrink-0"></div>
            <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              24/7 Support Available
            </h2>
          </div>
          <div className="flex items-center gap-2 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 flex-shrink-0">
            <div className="w-[30px] sm:w-[35px] md:w-[40px] lg:w-[50px] h-[30px] sm:h-[35px] md:h-[40px] lg:h-[50px] rounded-full bg-purple-500 flex-shrink-0"></div>
            <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Industry Leading Curriculum
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
