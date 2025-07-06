import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Card {
  student: string;
  batch: string;
  Userimage: string;
  feedback: string;
}

const Card: React.FC<Card> = ({ student, batch, Userimage, feedback }) => {
  return (
    <div className="w-[40vw] h-[40vh] rounded-xl flex-around border border-black py-5 px-3 mx-4">
      <div className="w-[40%] h-[95%]">
        <img
          src={Userimage}
          alt=""
          className="w-full h-full border border-black rounded-lg object-fill"
        />
      </div>
      <div className="w-[55%] h-[95%] flex flex-col justify-around">
        <img src="/images/quote.png" alt="" className="w-[75px]" />
        <p className="font-light">{feedback}</p>
        <div>
          <h1 className="font-bold text-xl">{student}</h1>
          <p className="text-sm text-gray-300">{batch} Batch</p>
        </div>
        <h2>⭐⭐⭐⭐⭐</h2>
      </div>
    </div>
  );
};

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardsPerPage = 2;

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

  //   const visibleCards = mockData.slice(
  //     currentIndex,
  //     currentIndex + cardsPerPage
  //   );

  return (
    <div className="w-full">
      <h1 className="w-full text-center text-5xl font-semibold mt-5">
        What Our Students Say
      </h1>
      <div className="w-full border-t border-black mt-4 py-10 relative">
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-out ${
              isAnimating ? "transform" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 50}%)`,
            }}
          >
            {mockData.map((card, index) => (
              <div key={index} className="flex-shrink-0">
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

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevCards}
            className="text-3xl rounded-full hover:scale-110 transition-transform duration-200 p-3 border border-black border-b-3 bg-[#a5ffaa]"
          >
            <HiChevronLeft />
          </button>
          <button
            onClick={nextCards}
            className="text-3xl rounded-full hover:scale-110 transition-transform duration-200 p-3 border border-black border-b-3 bg-[#a5ffaa]"
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
