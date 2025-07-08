import React, { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import gsap from "gsap";

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
    <div className="card-item bg-gray-100 rounded-2xl py-3 px-2 relative w-[350px] max-w-[700px] lg:w-[700px] md:w-[600px] max-h-[400px] border border-black flex flex-col sm:flex-row justify-between items-center flex-shrink-0">
      {/* Percentage Badge */}
      <div className="percentage-badge wavy-circle absolute -top-5 sm:-top-10 -left-5 sm:-left-10 bg-blue-500 text-lg sm:text-2xl text-white flex-center z-10">
        {percent}%
      </div>

      <div className="person-image w-full sm:w-[48%] border border-black h-[180px] sm:h-[380px] rounded-lg relative overflow-hidden mb-3 sm:mb-0">
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

      <div className="certificate-image w-full sm:w-[48%] border border-black h-[180px] sm:h-[380px] rounded-lg overflow-hidden">
        <img
          src={certificateImage}
          alt="img"
          className="w-full h-full object-cover"
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data for cards
  const cardData = [
    {
      name: "Anupriya",
      batch: "2025",
      percent: 99,
      personImage: "images/Students/Anupriya.jpg",
      certificateImage: "images/Certificates/Anupriya.jpg",
    },
    {
      name: "Gowtham",
      batch: "2024",
      percent: 95,
      personImage: "images/Students/Gowtham.jpg",
      certificateImage: "images/Certificates/Gowtham .jpeg",
    },
    {
      name: "Kavitha",
      batch: "2023",
      percent: 97,
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

  useEffect(() => {
    const initGSAPAnimations = () => {
      const tl = gsap.timeline();

      if (gsap) {
        gsap.set([titleRef.current, capRef.current, buttonsRef.current], {
          opacity: 0,
        });

        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );

        tl.fromTo(
          capRef.current,
          { opacity: 0, y: -30, rotation: -15 },
          { opacity: 1, y: 0, rotation: 0, duration: 1, ease: "back.out(1.7)" },
          "-=0.4"
        );

        tl.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }
    };

    if (!gsap) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      script.onload = () => {
        setTimeout(initGSAPAnimations, 100);
      };
      document.head.appendChild(script);
    } else {
      initGSAPAnimations();
    }
  }, []);

  const slideToIndex = (index: number) => {
    if (isAnimating || !cardsContainerRef.current) return;
    setIsAnimating(true);

    // Calculate actual card width based on screen size
    const getActualCardWidth = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) return 520 + 20; // lg:w-[700px] + gap
        if (window.innerWidth >= 768) return 500 + 120; // md:w-[600px] + gap
        if (window.innerWidth <= 640) return 350 + 25; // sm:w-[500px] + gap
      }
      return 740; // fallback
    };

    const cardWidth = getActualCardWidth();
    const containerWidth =
      cardsContainerRef.current.parentElement?.offsetWidth || 0;

    // Calculate translation - for last card, prevent extra space
    let translateX = -index * cardWidth;

    if (index === cardData.length - 1) {
      const totalWidth = cardData.length * cardWidth;
      const maxTranslateX = totalWidth - containerWidth;
      translateX = Math.min(-maxTranslateX, translateX);
    }

    gsap.to(cardsContainerRef.current, {
      x: translateX,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        setIsAnimating(false);
      },
    });
  };

  const handlePrevious = () => {
    const newIndex =
      currentIndex === 0 ? cardData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    slideToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === cardData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    slideToIndex(newIndex);
  };

  // Handle window resize to recalculate positions
  useEffect(() => {
    const handleResize = () => {
      slideToIndex(currentIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <div className="mb-10 lg:mb-20 w-full mt-10 px-4 sm:px-6 lg:px-8">
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

      {/* Cards Container Wrapper */}
      <div className="mt-8 sm:mt-15 md:w-[80%] mx-auto">
        <div
          ref={cardsContainerRef}
          className="flex gap-6 sm:gap-10 transition-transform duration-300 ease-out"
          style={{ width: `${cardData.length * 730}px` }}
        >
          {cardData.map((card, index) => (
            <Card
              key={`${card.name}-${index}`}
              name={card.name}
              batch={card.batch}
              percent={card.percent}
              personImage={card.personImage}
              certificateImage={card.certificateImage}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        ref={buttonsRef}
        className="flex justify-center items-center gap-4 mt-6 sm:mt-8"
      >
        <button
          onClick={handlePrevious}
          className="bg-[#a5ffaa] cursor-pointer p-2 sm:p-3 rounded-full border border-black border-b-3 transition-all duration-200 flex items-center justify-center hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous cards"
        >
          <HiChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="bg-[#a5ffaa] cursor-pointer p-2 sm:p-3 rounded-full border border-black border-b-3 transition-all duration-200 flex items-center justify-center hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next cards"
        >
          <HiChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Stories;
