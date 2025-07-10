import React, { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// Mock cap image - in your actual implementation, replace with your cap import
const cap = "images/cap.png";

interface CardProps {
  name: string;
  batch: string;
  percent: string | number;
  personImage: string;
  certificateImage: string;
}

const Card: React.FC<CardProps> = ({
  name,
  batch,
  percent,
  personImage,
  certificateImage,
}) => {
  return (
    <div className="bg-gray-100 rounded-2xl py-3 relative w-full min-h-[400px] border border-black px-2 flex flex-col sm:flex-row justify-evenly items-center flex-shrink-0">
      {/* Percentage Badge */}
      <div className="wavy-circle absolute top-2 left-2 bg-blue-500 text-lg sm:text-2xl text-white flex-center z-10">
        {percent}%
      </div>

      <div className="person-image w-full sm:w-[48%] border border-black h-[300px] sm:h-[380px] rounded-lg relative overflow-hidden mb-3 sm:mb-0">
        <img
          src={personImage}
          alt="img"
          className="w-full h-full object-cover"
        />
        <span className="person-info w-full min-h-[50px] bg-white absolute bottom-0 px-3 sm:px-5 py-2">
          <h3 className="font-semibold text-sm sm:text-base">{name}</h3>
          <p className="text-gray-400 font-light text-xs sm:text-sm">
            {batch} Batch
          </p>
        </span>
      </div>

      <div className="certificate-image w-full sm:w-[48%] border border-black h-[380px] sm:h-[380px] rounded-lg overflow-hidden">
        <img
          src={certificateImage}
          alt="img"
          className="w-full h-full lg:object-contain"
        />
      </div>
    </div>
  );
};

const Stories = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const capRef = useRef<HTMLImageElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Sample data for cards
  const cardData = [
    {
      name: "Anupriya",
      batch: "2025",
      percent: 81,
      personImage: "images/Students/Anupriya.jpg",
      certificateImage: "images/Certificates/Anupriya.jpg",
    },
    {
      name: "Gowtham",
      batch: "2024",
      percent: 54,
      personImage: "images/Students/Gowtham.jpg",
      certificateImage: "images/Certificates/Gowtham .jpeg",
    },
    {
      name: "Kavitha",
      batch: "2023",
      percent: 76,
      personImage: "images/Students/Kavitha.jpg",
      certificateImage: "images/Certificates/kavitha.jpeg",
    },
    {
      name: "Manjunath",
      batch: "2024",
      percent: 95,
      personImage: "images/Students/Manjunath.jpeg",
      certificateImage: "images/Certificates/Manjunath Marksheet  (1).jpeg",
    },
    {
      name: "Mathumatha",
      batch: "2023",
      percent: 97,
      personImage: "images/Students/MathumethImg.jpeg",
      certificateImage: "images/Certificates/Mathumetha.jpeg",
    },
  ];

  // Calculate dimensions
  const calculateDimensions = () => {
    if (typeof window !== "undefined") {
      const viewportWidth = window.innerWidth;
      // const gap = 12; // gap-3 = 12px
      const cardW = viewportWidth < 768 ? viewportWidth * 0.8 : 400; // Responsive card width
      setCardWidth(Math.max(cardW, 300)); // Minimum 300px width
    }
  };

  useEffect(() => {
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  useEffect(() => {
    const initGSAPAnimations = () => {
      // Simple fade-in animation without GSAP dependency
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
      if (capRef.current) {
        capRef.current.style.opacity = "1";
        capRef.current.style.transform = "translateY(0) rotate(0deg)";
      }
      if (buttonsRef.current) {
        buttonsRef.current.style.opacity = "1";
        buttonsRef.current.style.transform = "translateY(0)";
      }
    };

    // Set initial styles
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(50px)";
      titleRef.current.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";
    }
    if (capRef.current) {
      capRef.current.style.opacity = "0";
      capRef.current.style.transform = "translateY(-30px) rotate(-15deg)";
      capRef.current.style.transition = "opacity 1s ease, transform 1s ease";
    }
    if (buttonsRef.current) {
      buttonsRef.current.style.opacity = "0";
      buttonsRef.current.style.transform = "translateY(20px)";
      buttonsRef.current.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";
    }

    setTimeout(initGSAPAnimations, 100);
  }, []);

  const handlePrevious = () => {
    if (cardsContainerRef.current) {
      const gap = 12; // gap-3 = 12px
      const scrollDistance = cardWidth + gap;
      cardsContainerRef.current.scrollBy({
        left: -scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (cardsContainerRef.current) {
      const gap = 12; // gap-3 = 12px
      const scrollDistance = cardWidth + gap;
      cardsContainerRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-10 lg:mb-20 w-full mt-10">
      <div className="w-full flex justify-center items-center py-6 sm:py-8">
        <h1
          ref={titleRef}
          className="font-semibold text-3xl sm:text-4xl lg:text-5xl relative"
        >
          <img
            ref={capRef}
            src={cap}
            alt="Cap"
            className="absolute -top-8 sm:-top-12 -left-6 sm:-left-10 w-[20%] sm:w-[25%]"
          />
          Success Stories
        </h1>
      </div>

      <div className="mt-8 sm:mt-15 w-[85%] md:w-[80%] mx-auto">
        <div
          ref={cardsContainerRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {cardData.map((card, index) => (
            <div
              key={`${card.name}-${index}`}
              className="flex-shrink-0"
              style={{
                width: `${cardWidth}px`,
              }}
            >
              <Card
                name={card.name}
                batch={card.batch}
                percent={card.percent}
                personImage={card.personImage}
                certificateImage={card.certificateImage}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={buttonsRef}
        className="flex justify-center items-center gap-4 mt-6 sm:mt-8"
      >
        <button
          onClick={handlePrevious}
          className="bg-[#a5ffaa] cursor-pointer p-2 sm:p-3 rounded-full border border-black border-b-3 transition-all duration-200 flex items-center justify-center hover:scale-110 hover:shadow-lg"
          aria-label="Previous cards"
        >
          <HiChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="bg-[#a5ffaa] cursor-pointer p-2 sm:p-3 rounded-full border border-black border-b-3 transition-all duration-200 flex items-center justify-center hover:scale-110 hover:shadow-lg"
          aria-label="Next cards"
        >
          <HiChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Stories;
