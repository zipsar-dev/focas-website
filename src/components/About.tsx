import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const tutorsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      // Text animation
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.5,
          }
        );
      }

      // Shape animation
      if (shapeRef.current) {
        gsap.fromTo(
          shapeRef.current,
          {
            opacity: 0,
            scale: 0.5,
            y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
            delay: 0.8,
          }
        );
      }

      // Stats animation with stagger
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          {
            opacity: 0,
            y: 40,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            delay: 1,
          }
        );
      }

      // Tutors circles animation - Slide up one by one
      if (tutorsRef.current) {
        const tutorCards = tutorsRef.current.children;
        gsap.fromTo(
          tutorCards,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: tutorsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Simple hover animations for tutor cards
        Array.from(tutorCards).forEach((card: Element) => {
          const circle = card.querySelector(
            ".w-\\[150px\\],.w-\\[200px\\]"
          ) as HTMLElement;
          if (circle) {
            const hoverTl = gsap.timeline({ paused: true });

            hoverTl.to(circle, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });

            card.addEventListener("mouseenter", () => hoverTl.play());
            card.addEventListener("mouseleave", () => hoverTl.reverse());
          }
        });
      }

      // Infinite scrolling animation for the scroll section
      if (scrollRef.current) {
        const scrollContainer = scrollRef.current;

        // Wait for next frame to ensure DOM is rendered
        setTimeout(() => {
          const scrollElements = Array.from(scrollContainer.children);

          // Clone elements for seamless loop
          scrollElements.forEach((element: Element) => {
            const clone = element.cloneNode(true);
            scrollContainer.appendChild(clone);
          });

          // Get total width of all original elements
          let totalWidth = 0;
          scrollElements.forEach((element: Element) => {
            totalWidth += element.getBoundingClientRect().width;
          });

          // Set initial position and animate
          gsap.set(scrollContainer, { x: 0 });

          gsap.to(scrollContainer, {
            x: -totalWidth,
            duration: totalWidth / 80, // Consistent speed: 80px per second
            ease: "none",
            repeat: -1,
          });
        }, 100);
      }

      // Continuous floating animation for stats numbers
      if (statsRef.current) {
        gsap.to(statsRef.current.querySelectorAll("h2"), {
          y: -5,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.3,
        });
      }
    }, aboutRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      ref={aboutRef}
      className="w-full bg-blue-500 py-6 sm:py-8 lg:py-10 relative px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pl-0 lg:pl-15">
          <div className="w-full sm:w-[80%] text-white mx-auto">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-1"
            >
              About Our Tutor
            </h1>
            <p
              ref={textRef}
              className="mt-4 sm:mt-6 font-light text-sm sm:text-base lg:text-lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              necessitatibus eum voluptatem! Qui, eveniet illo. Voluptas ipsam
              adipisci reiciendis, vitae dolorum molestiae officia et, optio
              cupiditate inventore veritatis nihil? A, vitae commodi! Quo fugiat
              ullam voluptatibus quam. Temporibus, ut nemo aperiam expedita nisi
              accusantium veritatis soluta cum ipsam recusandae atque?
            </p>
            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-6"
            >
              <div className="flex gap-3 sm:gap-5 items-center mt-4">
                <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] flex items-center justify-center border border-black rounded-lg overflow-hidden">
                  <img
                    src="https://placehold.co/100x100/ABFFA0/white?text=A"
                    alt="Instructors"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold">300</h2>
                  <p className="text-light text-xs sm:text-sm">Instructors</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-5 items-center">
                <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] flex items-center justify-center border border-black rounded-lg overflow-hidden">
                  <img
                    src="https://placehold.co/100x100/A0BEFF/white?text=B"
                    alt="Videos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    10,000+
                  </h2>
                  <p className="text-light text-xs sm:text-sm">Videos</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-5 items-center">
                <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] flex items-center justify-center border border-black rounded-lg overflow-hidden">
                  <img
                    src="https://placehold.co/100x100/A0BEFF/white?text=C"
                    alt="Students"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    20,000+
                  </h2>
                  <p className="text-light text-xs sm:text-sm">Students</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-5 items-center">
                <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] flex items-center justify-center border border-black rounded-lg overflow-hidden">
                  <img
                    src="https://placehold.co/100x100/ABFFA0/white?text=D"
                    alt="Users"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    1,00,000+
                  </h2>
                  <p className="text-light text-xs sm:text-sm">Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center mt-6 lg:mt-0">
          <div
            ref={shapeRef}
            className="w-[200px] sm:w-[250px] h-[250px] sm:h-[350px] bg-[#a5ffaa] border-2 border-black rounded-t-full relative before:w-[100%] before:h-[100%] before:rounded-t-full before:bg-white before:absolute before:-top-3 sm:before:-top-4 before:-left-3 sm:before:-left-4"
          ></div>
        </div>
      </div>
      <div className="min-h-[40vh] w-full mt-6 sm:mt-8 lg:mt-10">
        <h1 className="w-full text-center font-semibold text-3xl sm:text-4xl lg:text-5xl text-white mt-2">
          Our Tutors
        </h1>
        <div
          ref={tutorsRef}
          className="w-full sm:w-[80%] mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-8"
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
              className="flex flex-col items-center w-[150px] sm:w-[180px] lg:w-[200px]"
            >
              <div className="w-[150px] sm:w-[180px] lg:w-[200px] h-[150px] sm:h-[180px] lg:h-[200px] rounded-full outline-2 outline-white outline-offset-8 sm:outline-offset-12 lg:outline-offset-15 bg-white/50 overflow-hidden cursor-pointer"></div>
              <div className="text-center mt-4 sm:mt-6">
                <h3 className="text-white font-semibold text-base sm:text-lg lg:text-xl">
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

      {/* Infinite scroll section */}
      <div className="w-full h-[80px] sm:h-[100px] bg-black text-white absolute left-0 -bottom-20 sm:-bottom-25 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center h-full whitespace-nowrap"
        >
          <div className="flex items-center gap-2 mx-8 sm:mx-16 flex-shrink-0">
            <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full bg-blue-500"></div>
            <h2 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
              80% Placement Success Rate
            </h2>
          </div>
          <div className="flex items-center gap-2 mx-8 sm:mx-16 flex-shrink-0">
            <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full bg-green-500"></div>
            <h2 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Expert Instructors
            </h2>
          </div>
          <div className="flex items-center gap-2 mx-8 sm:mx-16 flex-shrink-0">
            <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full bg-yellow-500"></div>
            <h2 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
              24/7 Support Available
            </h2>
          </div>
          <div className="flex items-center gap-2 mx-8 sm:mx-16 flex-shrink-0">
            <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full bg-purple-500"></div>
            <h2 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Industry Leading Curriculum
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
