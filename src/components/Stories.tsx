import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import cap from "/images/cap.png";
import Anupriya from "/images/Anupriya.jpg";
import Gowtham from "/images/Gowtham .jpeg";
import kavitha from "/images/kavitha.jpeg";
import Manjunath from "/images/Manjunath Marksheet  (1).jpeg";
import Mathumetha from "/images/Mathumetha.jpeg";

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
    <div className="bg-gray-100 rounded-2xl py-3 px-2 relative w-[700px] max-h-[400px] border border-black flex justify-between items-center">
      {/* Percentage Badge */}
      <div className="absolute -top-10 -left-10 bg-blue-500 text-2xl text-white flex-center z-10 wavy-circle">
        {percent}%
      </div>
      <div className="w-[48%] border border-black h-[380px] rounded-lg relative overflow-hidden">
        <img
          src={personImage}
          alt="img"
          className="w-full h-full object-cover"
        />
        <span className="w-full min-h-[50px] bg-white absolute bottom-0 px-5 py-2">
          <h3 className="font-semibold text-base">{name}</h3>
          <p className="text-gray-400 font-light text-sm">{batch} Batch</p>
        </span>
      </div>
      <div className="w-[48%] border border-black h-[380px] rounded-lg overflow-hidden">
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
  // Sample data for cards
  const cardData = [
    {
      name: "Anupriya",
      batch: "2025",
      percent: 99,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Anupriya",
      certificateImage: Anupriya,
    },
    {
      name: "Gowtham",
      batch: "2024",
      percent: 95,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Gowtham",
      certificateImage: Gowtham,
    },
    {
      name: "Kavitha",
      batch: "2023",
      percent: 97,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Kavitha",
      certificateImage: kavitha,
    },
    {
      name: "Manjunath",
      batch: "2024",
      percent: 95,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Manjunath",
      certificateImage: Manjunath,
    },
    {
      name: "Mathumatha",
      batch: "2023",
      percent: 97,
      personImage: "https://placehold.co/350x380/D6D6D6/white?text=Mathumatha",
      certificateImage: Mathumetha,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to get visible cards (3 cards at a time)
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % cardData.length;
      visibleCards.push(cardData[index]);
    }
    return visibleCards;
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="h-[90vh] w-full mt-10">
      <div className="w-full flex justify-center items-center py-8 border-b-2 border-gray-500/80">
        <h1 className="font-semibold text-5xl relative">
          <img
            src={cap}
            alt="Image"
            className="absolute -top-12 -left-10 w-[25%]"
          />
          Success Stories
        </h1>
      </div>

      {/* Cards Container */}
      <div className="mt-15 flex gap-10 justify-center transition-all duration-300 ease-in-out">
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
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevious}
          className="bg-[#a5ffaa] p-3 rounded-full border border-black border-b-3 transition-colors duration-200 flex-center "
          aria-label="Previous cards"
        >
          <HiChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="bg-[#a5ffaa] p-3 rounded-full border border-black border-b-3 transition-colors duration-200 flex-center"
          aria-label="Next cards"
        >
          <HiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Stories;
