import { useState, useRef, type MouseEvent } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import bulb from "/images/bulb.png";

// ---------------------------
// Type definitions
// ---------------------------

type Tab = "CA Foundation" | "CA Intermediate" | "CA Final";

interface Course {
  title: string;
  rating: string;
  image: string;
  description: string;
}

type CoursesData = Record<Tab, Course[]>;

// ---------------------------
// Data
// ---------------------------

const tabs: Tab[] = ["CA Foundation", "CA Intermediate", "CA Final"];

const coursesData: CoursesData = {
  "CA Foundation": [
    {
      title: "Product Manager Fellowship",
      rating: "5.0",
      image: "https://placehold.co/300x200/FF6B6B/white?text=Course+1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Digital Marketing Mastery",
      rating: "4.8",
      image: "https://placehold.co/300x200/4ECDC4/white?text=Course+2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Data Science Bootcamp",
      rating: "4.9",
      image: "https://placehold.co/300x200/45B7D1/white?text=Course+3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Web Development Pro",
      rating: "4.7",
      image: "https://placehold.co/300x200/96CEB4/white?text=Course+4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "AI & Machine Learning",
      rating: "4.9",
      image: "https://placehold.co/300x200/FFEAA7/white?text=Course+5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Cloud Computing Expert",
      rating: "4.8",
      image: "https://placehold.co/300x200/DDA0DD/white?text=Course+6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ],
  "CA Intermediate": [
    {
      title: "Financial Analysis Pro",
      rating: "4.9",
      image: "https://placehold.co/300x200/F39C12/white?text=Inter+1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Audit & Assurance",
      rating: "4.7",
      image: "https://placehold.co/300x200/E67E22/white?text=Inter+2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Taxation Mastery",
      rating: "4.8",
      image: "https://placehold.co/300x200/9B59B6/white?text=Inter+3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Corporate Law",
      rating: "4.6",
      image: "https://placehold.co/300x200/8E44AD/white?text=Inter+4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Cost Management",
      rating: "4.7",
      image: "https://placehold.co/300x200/E74C3C/white?text=Inter+5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Strategic Management",
      rating: "4.9",
      image: "https://placehold.co/300x200/C0392B/white?text=Inter+6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ],
  "CA Final": [
    {
      title: "Advanced Auditing",
      rating: "4.8",
      image: "https://placehold.co/300x200/27AE60/white?text=Final+1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "International Taxation",
      rating: "4.9",
      image: "https://placehold.co/300x200/229954/white?text=Final+2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Financial Reporting",
      rating: "4.7",
      image: "https://placehold.co/300x200/3498DB/white?text=Final+3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Corporate Restructuring",
      rating: "4.8",
      image: "https://placehold.co/300x200/2980B9/white?text=Final+4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Risk Management",
      rating: "4.6",
      image: "https://placehold.co/300x200/16A085/white?text=Final+5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Ethics & Governance",
      rating: "4.9",
      image: "https://placehold.co/300x200/138D75/white?text=Final+6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ],
};

// ---------------------------
// Component
// ---------------------------

const Courses = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const courses = coursesData[activeTab];

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePrevious = () => {
    scrollContainerRef.current?.scrollBy({
      left: -300, // Reduced scroll distance for smaller screens
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    scrollContainerRef.current?.scrollBy({
      left: 300, // Reduced scroll distance for smaller screens
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-5 flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold relative">
        Courses
        <img
          src={bulb}
          alt=""
          className="w-1/3 sm:w-1/4 lg:w-1/2 absolute -top-8 sm:-top-10 lg:-top-12 -right-12 sm:-right-16 lg:-right-22"
        />
      </h1>

      {/* Tabs */}
      <div className="w-full flex justify-center mt-6 sm:mt-8 lg:mt-10">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 py-1 px-2 border border-b-3 rounded-xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-normal ${
                activeTab === tab
                  ? "bg-[#507cf4] text-white border border-black"
                  : "text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`border border-black w-full h-[400px] sm:h-[450px] lg:h-[550px] flex items-center overflow-x-auto overflow-y-hidden select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } scrollbar-hide`}
      >
        <div className="flex min-w-max">
          {courses.map((course, index) => (
            <div
              key={index}
              className="border-r border-l border-black relative h-[400px] sm:h-[450px] lg:h-[550px] flex items-center justify-center w-[300px] sm:w-[350px] lg:w-[450px] flex-shrink-0"
            >
              <span className="text-black bg-amber-400 rounded-tl-full rounded-bl-full absolute top-3 sm:top-4 lg:top-5 right-0 p-1 sm:p-2 text-xs sm:text-sm">
                ⭐ {course.rating}
              </span>
              <div className="w-[90%] h-[85%] border rounded-lg border-black flex flex-col items-center justify-center py-3 sm:py-4 lg:py-5">
                <div className="w-[90%] h-1/2">
                  <div className="w-full h-full border border-black rounded-lg overflow-hidden">
                    <img
                      src={course.image}
                      alt="img"
                      className="w-full h-full object-cover cursor-none"
                    />
                  </div>
                </div>
                <div className="w-[90%] h-1/2 flex flex-col justify-around">
                  <h1 className="mt-3 sm:mt-4 lg:mt-5 text-base sm:text-lg lg:text-xl font-bold w-full">
                    {course.title}
                  </h1>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-gray-400/50">
                    {course.description}
                  </p>
                  <div className="w-full">
                    <button className="border border-black rounded-full px-4 sm:px-6 lg:px-8 py-1 sm:py-2 text-xs sm:text-sm">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-4 sm:mt-6">
        <button
          onClick={handlePrevious}
          className="bg-[#a5ffaa] p-2 sm:p-3 rounded-full border border-black border-b-3 transition-colors duration-200 flex items-center justify-center"
          aria-label="Previous cards"
        >
          <HiChevronLeft size={20} className="sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#a5ffaa] p-2 sm:p-3 rounded-full border border-black border-b-3 transition-colors duration-200 flex items-center justify-center"
          aria-label="Next cards"
        >
          <HiChevronRight size={20} className="sm:h-6 sm:w-6" />
        </button>
      </div>
    </section>
  );
};

export default Courses;
