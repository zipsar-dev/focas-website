import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Card {
  student: string;
  batch: string;
  Userimage: string;
  feedback: string;
}

const Card: React.FC<Card> = ({ student, batch, Userimage, feedback }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-[80vw] sm:w-[45vw] lg:w-[40vw] h-[50vh] sm:h-[45vh] lg:h-[40vh] rounded-xl flex items-center justify-around border border-black py-4 sm:py-5 px-2 sm:px-3 mx-2 sm:mx-3 lg:mx-4">
      {!isMobileView ? (
        <div className="w-[40%] h-[95%]">
          <img
            src={Userimage}
            alt=""
            className="w-full h-full border border-black rounded-lg object-fill"
          />
        </div>
      ) : (
        ""
      )}
      <div className="w-full md:w-[55%] h-[95%] flex flex-col justify-around">
        <img
          src="/images/quote.png"
          alt=""
          className="w-[50px] sm:w-[60px] lg:w-[75px]"
        />
        <p className="font-light text-xs sm:text-sm lg:text-base">{feedback}</p>
        <div>
          <h1 className="font-bold text-base sm:text-lg lg:text-xl">
            {student}
          </h1>
          <p className="text-xs sm:text-sm text-gray-300">{batch} Batch</p>
        </div>
        <h2 className="text-sm sm:text-base">⭐⭐⭐⭐⭐</h2>
      </div>
    </div>
  );
};

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const mockData: Card[] = [
    {
      student: "Alex",
      batch: "2024",
      Userimage: "https://placehold.co/350x350",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quae dolor fugit laborum aut eligendi repellendus laboriosam. Debitis, eos magni!",
    },
    {
      student: "Bella",
      batch: "2023",
      Userimage: "https://placehold.co/350x350",
      feedback:
        "Great experience! The courses are well-structured and the faculty is amazing.",
    },
    {
      student: "Charlie",
      batch: "2022",
      Userimage: "https://placehold.co/350x350",
      feedback:
        "Highly recommend! Learned so much and the support was excellent.",
    },
    {
      student: "Dana",
      batch: "2021",
      Userimage: "https://placehold.co/350x350",
      feedback: "Fantastic learning platform with great resources.",
    },
  ];

  // Determine cards per page based on screen size
  const getCardsPerPage = () => {
    if (window.innerWidth >= 1024) return 2; // lg screens: 2 cards
    if (window.innerWidth >= 640) return 1; // sm screens: 1 card
    return 1; // mobile: 1 card
  };

  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  // Update cards per page on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCards = () => {
    if (currentIndex + cardsPerPage < mockData.length && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevCards = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <h1 className="w-full text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 sm:mt-5">
        What Our Students Say
      </h1>
      <div className="w-full border-t border-black mt-3 sm:mt-4 py-8 sm:py-10 relative">
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-out ${
              isAnimating ? "transform" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
            }}
          >
            {mockData.map((card, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/2`}
              >
                <Card
                  student={card.student}
                  batch={card.batch}
                  Userimage={card.Userimage}
                  feedback={card.feedback}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 space-x-4">
          <button
            onClick={prevCards}
            className="text-xl sm:text-2xl lg:text-3xl rounded-full hover:scale-110 transition-transform duration-200 p-2 sm:p-3 border border-black border-b-3 bg-[#a5ffaa]"
            disabled={currentIndex === 0}
          >
            <HiChevronLeft />
          </button>
          <button
            onClick={nextCards}
            className="text-xl sm:text-2xl lg:text-3xl rounded-full hover:scale-110 transition-transform duration-200 p-2 sm:p-3 border border-black border-b-3 bg-[#a5ffaa]"
            disabled={currentIndex + cardsPerPage >= mockData.length}
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
