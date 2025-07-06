import React, { useRef, useState, useEffect } from "react";
import {
  IoPlay,
  IoChevronBack,
  IoChevronForward,
  IoClose,
} from "react-icons/io5";

interface Story {
  name: string;
  batch: string;
  score: string;
  certificate: string;
  video: string;
}

const stories: Story[] = [
  {
    name: "Gayathri",
    batch: "2016 Batch",
    score: "93%",
    certificate: "images/certificate.png",
    video: "videos/Successful stories/Gayathri.mp4",
  },
  {
    name: "Harini Aiswariya",
    batch: "2016 Batch",
    score: "93%",
    certificate: "images/certificate.png",
    video: "videos/Successful stories/Harini Aiswariya.mp4",
  },
  {
    name: "Jeshurun",
    batch: "2016 Batch",
    score: "93%",
    certificate: "images/certificate.png",
    video: "videos/Successful stories/Jeshurun.mp4",
  },
  {
    name: "Marimuthu",
    batch: "2016 Batch",
    score: "93%",
    certificate: "images/certificate.png",
    video: "videos/Successful stories/Marimuthu.mp4",
  },
  {
    name: "Sai shruthi",
    batch: "2016 Batch",
    score: "93%",
    certificate: "images/certificate.png",
    video: "videos/Successful stories/Sai shruthi.mp4",
  },
  {
    name: "Sridevi",
    batch: "2016 Batch",
    score: "93%",
    certificate: "images/certificate.png",
    video: "videos/Successful stories/Sridevi.mp4",
  },
];

const SuccessStories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      // Simple fade in for title
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = "all 1s ease-out";
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }

    // Animate cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px) scale(0.9)";
        setTimeout(() => {
          if (card) {
            card.style.transition = "all 0.8s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
          }
        }, 300 + index * 100);
      }
    });
  }, []);

  const handleCardHover = (index: number, isEntering: boolean) => {
    setIsHovered(isEntering ? index : null);

    if (cardsRef.current[index]) {
      const card = cardsRef.current[index];
      if (card) {
        card.style.transition = "transform 0.3s ease-out";
        card.style.transform = isEntering ? "scale(1.05)" : "scale(1)";
      }
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 280 : 360;
      const scrollAmount = cardWidth + 24;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    document.body.style.overflow = "hidden";

    if (modalRef.current) {
      modalRef.current.style.opacity = "0";
      modalRef.current.style.transform = "scale(0.8)";
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.style.transition = "all 0.4s ease-out";
          modalRef.current.style.opacity = "1";
          modalRef.current.style.transform = "scale(1)";
        }
      }, 10);
    }
  };

  const closeVideoModal = () => {
    if (modalRef.current) {
      modalRef.current.style.transition = "all 0.3s ease-in";
      modalRef.current.style.opacity = "0";
      modalRef.current.style.transform = "scale(0.8)";
      setTimeout(() => {
        setSelectedVideo(null);
        document.body.style.overflow = "auto";
      }, 300);
    }
  };

  return (
    <section className="w-full py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="text-center my-8 md:my-16 px-4">
        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight"
        >
          Inspiring Student Stories
        </h2>
      </div>

      <div className="relative px-4 md:px-8">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide relative"
          style={{ scrollBehavior: "smooth" }}
        >
          {stories.map((story, index) => (
            <div
              className="flex-center h-full w-[100vw] sm:w-[400px] md:w-[600px] border border-black py-3 md:py-5 md:px-10 flex-shrink-0"
              key={index}
            >
              <div
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out snap-start ${
                  isHovered === index ? "shadow-2xl" : ""
                }`}
                style={{
                  width: "90%",
                  aspectRatio: "9/16",
                  minHeight: "400px",
                  maxHeight: "600px",
                }}
                onClick={() => openVideoModal(story.video)}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openVideoModal(story.video);
                  }
                }}
                role="button"
                aria-label={`Open video of ${story.name}`}
              >
                <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10">
                  <div className="bg-black bg-opacity-70 text-white font-bold text-xs md:text-sm px-2 md:px-3 py-1 rounded-full backdrop-blur-sm">
                    FOCAS
                  </div>
                </div>

                <div className="relative h-full">
                  <video
                    src={story.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />

                  <div className="absolute abs-center inset-0 flex items-center justify-center transition-opacity duration-300">
                    <div
                      className={`bg-white bg-opacity-90 rounded-full p-3 md:p-4 shadow-2xl transform transition-all duration-300 ${
                        isHovered === index ? "scale-110 bg-opacity-100" : ""
                      }`}
                    >
                      <IoPlay
                        className="w-6 h-6 md:w-8 md:h-8 text-gray-800 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                    <div className="text-center">
                      <div className="bg-yellow-400 text-black font-bold text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 rounded-full mb-2 md:mb-3 inline-block shadow-lg">
                        {story.score} Score
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
                        {story.name}
                      </h3>
                      <p className="text-gray-300 text-xs md:text-sm">
                        {story.batch}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8 px-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous videos"
            className="rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 focus:outline-none bg-[#a5ffaa] cursor-pointer border border-black border-b-3"
            type="button"
          >
            <IoChevronBack className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next videos"
            className="rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none bg-[#a5ffaa] cursor-pointer border border-black border-b-3"
            type="button"
          >
            <IoChevronForward className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {selectedVideo && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex items-center justify-center z-50 p-2 md:p-4"
          onClick={closeVideoModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden mx-2 md:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-3 md:p-4 border-b border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                Success Story
              </h3>
              <button
                onClick={closeVideoModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close video"
              >
                <IoClose className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="relative">
              <video
                src={selectedVideo}
                className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain"
                controls
                autoPlay
                preload="metadata"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @media (max-width: 768px) {
          .scrollbar-hide {
            padding-left: 0;
            padding-right: 0;
          }
        }
        
        /* Ensure smooth scrolling on mobile */
        @media (max-width: 640px) {
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
