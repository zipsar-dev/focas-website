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
    <div className="card-item bg-gray-100 rounded-2xl py-3 px-2 relative w-full max-w-[700px] lg:w-[700px] md:w-[600px] sm:w-[500px] max-h-[400px] border border-black flex flex-col sm:flex-row justify-between items-center">
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
  const [isMobile, setIsMobile] = useState(false);

  // Sample data for cards
  const cardData = [
    {
      name: "Anupriya",
      batch: "2025",
      percent: 99,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Anupriya",
      certificateImage: "images/Anupriya.jpg",
    },
    {
      name: "Gowtham",
      batch: "2024",
      percent: 95,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Gowtham",
      certificateImage: "images/Gowtham .jpeg",
    },
    {
      name: "Kavitha",
      batch: "2023",
      percent: 97,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Kavitha",
      certificateImage: "images/kavitha.jpeg",
    },
    {
      name: "Manjunath",
      batch: "2024",
      percent: 95,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Manjunath",
      certificateImage: "images/Manjunath Marksheet  (1).jpeg",
    },
    {
      name: "Mathumatha",
      batch: "2023",
      percent: 97,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Mathumatha",
      certificateImage: "images/Mathumetha.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(innerWidth < 768);
    };

    checkMobile();
    addEventListener("resize", checkMobile);

    return () => removeEventListener("resize", checkMobile);
  }, []);

  // GSAP animations with timeline
  useEffect(() => {
    const initGSAPAnimations = () => {
      // Create GSAP timeline
      const tl = gsap.timeline();

      if (gsap) {
        // Initial setup - hide elements
        gsap.set(
          [titleRef.current, capRef.current, ".card-item", buttonsRef.current],
          {
            opacity: 0,
          }
        );

        // Animate title
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );

        // Animate cap with bounce
        tl.fromTo(
          capRef.current,
          { opacity: 0, y: -30, rotation: -15 },
          { opacity: 1, y: 0, rotation: 0, duration: 1, ease: "back.out(1.7)" },
          "-=0.4"
        );

        // Animate cards with stagger
        tl.fromTo(
          ".card-item",
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            onComplete: () => {
              // Animate percentage badges
              gsap.fromTo(
                ".percentage-badge",
                { scale: 0, rotation: 180 },
                {
                  scale: 1,
                  rotation: 0,
                  duration: 0.5,
                  stagger: 0.1,
                  ease: "back.out(1.7)",
                }
              );
            },
          },
          "-=0.2"
        );

        // Animate buttons
        tl.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }
    };

    // Load GSAP
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

  // GSAP card transition animations
  const animateCardTransition = (direction: "next" | "prev") => {
    if (isAnimating || !gsap) return;
    setIsAnimating(true);

    const cards = document.querySelectorAll(".card-item");
    const translateX = direction === "next" ? -50 : 50;

    // Exit animation
    gsap.to(cards, {
      x: translateX,
      scale: 0.8,
      opacity: 0.5,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        // Update current index
        if (direction === "next") {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        } else {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
          );
        }

        // Enter animation
        setTimeout(() => {
          gsap.fromTo(
            cards,
            { x: -translateX, scale: 0.9, opacity: 0 },
            {
              x: 0,
              scale: 1,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              onComplete: () => {
                // Animate percentage badges
                gsap.fromTo(
                  ".percentage-badge",
                  { scale: 0, rotation: 180 },
                  {
                    scale: 1,
                    rotation: 0,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                  }
                );
                setIsAnimating(false);
              },
            }
          );
        }, 100);
      },
    });
  };

  // Function to get visible cards (responsive)
  const getVisibleCards = () => {
    const visibleCards = [];
    const cardsToShow = isMobile ? 1 : 3;

    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % cardData.length;
      visibleCards.push(cardData[index]);
    }
    return visibleCards;
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    animateCardTransition("prev");
  };

  // Function to handle next button click
  const handleNext = () => {
    animateCardTransition("next");
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="min-h-[90vh] w-full mt-10 px-4 sm:px-6 lg:px-8">
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

      {/* Cards Container */}
      <div
        ref={cardsContainerRef}
        className="mt-8 sm:mt-15 flex flex-col lg:flex-row gap-6 sm:gap-10 justify-center items-center"
      >
        {visibleCards.map((card, index) => (
          <Card
            key={`${card.name}-${currentIndex + index}`}
            name={card.name}
            batch={card.batch}
            percent={card.percent}
            personImage={card.personImage}
            certificateImage={card.certificateImage}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div
        ref={buttonsRef}
        className="flex justify-center items-center gap-4 mt-6 sm:mt-8"
      >
        <button
          onClick={handlePrevious}
          disabled={isAnimating}
          className="bg-[#a5ffaa] cursor-pointer p-2 sm:p-3 rounded-full border border-black border-b-3 transition-all duration-200 flex items-center justify-center hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous cards"
        >
          <HiChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
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
