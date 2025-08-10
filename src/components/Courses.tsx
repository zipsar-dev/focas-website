import { useState, useRef, type MouseEvent } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import bulb from "/images/bulb.png";

type Tab = "CA Foundation" | "CA Intermediate" | "CA Final";

interface Course {
  title: string;
  rating: string;
  image: string;
  description: string;
}

type CoursesData = Record<Tab, Course[]>;

const tabs: Tab[] = ["CA Foundation", "CA Intermediate", "CA Final"];

const coursesData: CoursesData = {
  "CA Foundation": [
    {
      title: "Paper 1: Principles & Practice of Accounting",
      rating: "5.0",
      image: "https://placehold.co/300x200/FF6B6B/white?text=Foundation+1",
      description:
        "“The ABC of business accounting.” Learn how businesses record transactions, prepare accounts, and calculate profits — the foundation of all accounting.",
    },
    {
      title: "Paper 2: Business Laws",
      rating: "4.9",
      image: "https://placehold.co/300x200/4ECDC4/white?text=Foundation+2",
      description:
        "“Know the rules that guide businesses.” Understand essential business laws like contracts, sales of goods, and basic legal principles every business must follow.",
    },
    {
      title: "Paper 3: Business Mathematics, Logical Reasoning & Statistics",
      rating: "4.8",
      image: "https://placehold.co/300x200/45B7D1/white?text=Foundation+3",
      description:
        "“Numbers that make decisions smarter.” Develop problem‑solving skills with maths, reasoning, and statistics — essential tools for financial decision‑making.",
    },
    {
      title: "Paper 4: Business Economics",
      rating: "4.7",
      image: "https://placehold.co/300x200/96CEB4/white?text=Foundation+4",
      description:
        "“Why markets move — and how businesses respond.” Learn the basics of economics, demand & supply, pricing, market structures, and how businesses make decisions in a dynamic economy.",
    },
  ],

  "CA Intermediate": [
    // Group 1
    {
      title: "Paper 1: Advanced Accounting",
      rating: "5.0",
      image: "https://placehold.co/300x200/F39C12/white?text=Intermediate+1",
      description:
        "“The language of business numbers.” Learn how companies prepare and present financial statements, handle mergers, and follow Accounting Standards.",
    },
    {
      title: "Paper 2: Corporate & Other Laws",
      rating: "4.9",
      image: "https://placehold.co/300x200/E67E22/white?text=Intermediate+2",
      description:
        "“The rulebook for running businesses.” Understand the Companies Act, 2013 and basic business laws like contracts and negotiable instruments — essential for corporate compliance.",
    },
    {
      title: "Paper 3: Taxation",
      rating: "4.8",
      image: "https://placehold.co/300x200/9B59B6/white?text=Intermediate+3",
      description:
        "“Every rupee counts — know where it goes.” Learn the basics of Income Tax and GST — how taxes are calculated, paid, and managed for individuals and businesses.",
    },

    // Group 2
    {
      title: "Paper 4: Cost and Management Accounting",
      rating: "4.7",
      image: "https://placehold.co/300x200/8E44AD/white?text=Intermediate+4",
      description:
        "“Cut costs, not growth.” Discover how businesses track costs, set budgets, and take financial decisions that improve efficiency and profitability.",
    },
    {
      title: "Paper 5: Auditing and Ethics",
      rating: "4.8",
      image: "https://placehold.co/300x200/E74C3C/white?text=Intermediate+5",
      description:
        "“Auditors are watchdogs — not bloodhounds.” Learn how auditors review financial records, assess risks, and ensure companies follow rules — upholding trust and ethical standards.",
    },
    {
      title: "Paper 6: Financial Management and Strategic Management",
      rating: "4.9",
      image: "https://placehold.co/300x200/C0392B/white?text=Intermediate+6",
      description:
        "“Plan the money, plan the future.” Understand how companies manage funds, make investment decisions, and design strategies to grow and stay competitive.",
    },
  ],

  "CA Final": [
    {
      title: "Advanced Auditing",
      rating: "4.8",
      image: "https://placehold.co/300x200/27AE60/white?text=Final+1",
      description:
        "Learn advanced auditing techniques, risk assessments, and best practices to ensure compliance and trust in financial statements.",
    },
    {
      title: "International Taxation",
      rating: "4.9",
      image: "https://placehold.co/300x200/229954/white?text=Final+2",
      description:
        "Understand tax policies, treaties, and regulations affecting international business and cross-border transactions.",
    },
    {
      title: "Financial Reporting",
      rating: "4.7",
      image: "https://placehold.co/300x200/3498DB/white?text=Final+3",
      description:
        "Master the preparation, presentation, and analysis of financial reports adhering to accounting standards.",
    },
    {
      title: "Corporate Restructuring",
      rating: "4.8",
      image: "https://placehold.co/300x200/2980B9/white?text=Final+4",
      description:
        "Explore mergers, acquisitions, demergers, and other restructuring processes to optimize corporate performance.",
    },
    {
      title: "Risk Management",
      rating: "4.6",
      image: "https://placehold.co/300x200/16A085/white?text=Final+5",
      description:
        "Identify, assess, and mitigate financial and operational risks within organizations.",
    },
    {
      title: "Ethics & Governance",
      rating: "4.9",
      image: "https://placehold.co/300x200/138D75/white?text=Final+6",
      description:
        "Learn principles of corporate governance, ethical standards, and regulatory compliance for sustainable business practices.",
    },
  ],
};

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
      left: -300,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    scrollContainerRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-5 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold relative">
        Courses
        <img
          src={bulb}
          alt=""
          className="w-1/3 sm:w-1/4 lg:w-1/2 absolute -top-8 sm:-top-10 lg:-top-12 -right-12 sm:-right-16 lg:-right-22"
        />
      </h1>

      {/* Tabs */}
      <div className="w-[90%] flex justify-center mx-auto mt-6 sm:mt-8 lg:mt-10">
        <div className="flex-center flex-col lg:flex-row w-[80%] gap-2 sm:gap-4 py-1 mb-4 sm:mb-6 md:py-2 md:px-3 border border-b-3 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 w-[90%] rounded-lg text-xs sm:text-sm font-normal cursor-pointer ${
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
                  {/* <div className="w-full">
                    <button className="border border-black rounded-full px-4 sm:px-6 lg:px-8 py-1 sm:py-2 text-xs sm:text-sm cursor-pointer">
                      Know More
                    </button>
                  </div> */}
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
          className="bg-[#a5ffaa] cursor-pointer p-2 sm:p-3 rounded-full border border-black border-b-3 transition-colors duration-200 flex items-center justify-center"
          aria-label="Previous cards"
        >
          <HiChevronLeft size={20} className="sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#a5ffaa] cursor-pointer p-2 sm:p-3 rounded-full border border-black border-b-3 transition-colors duration-200 flex items-center justify-center"
          aria-label="Next cards"
        >
          <HiChevronRight size={20} className="sm:h-6 sm:w-6" />
        </button>
      </div>
    </section>
  );
};

export default Courses;
