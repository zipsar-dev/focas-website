import React, { useRef, useState, useEffect } from "react";
import {
  IoPlay,
  IoChevronBack,
  IoChevronForward,
  IoClose,
} from "react-icons/io5";
import { gsap } from "gsap";

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
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }

    gsap.fromTo(
      cardsRef.current.filter(Boolean),
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, []);

  const handleCardHover = (index: number, isEntering: boolean) => {
    setIsHovered(isEntering ? index : null);

    if (cardsRef.current[index]) {
      gsap.to(cardsRef.current[index], {
        scale: isEntering ? 1.05 : 1,
        rotationY: isEntering ? 5 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 360;
      const scrollAmount = cardWidth + 24;

      gsap.to(scrollRef.current, {
        scrollLeft:
          scrollRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount),
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    document.body.style.overflow = "hidden";

    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  const closeVideoModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setSelectedVideo(null);
          document.body.style.overflow = "auto";
        },
      });
    }
  };

  return (
    <section className="w-full mt-15 py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="text-center my-16">
        <h2
          ref={titleRef}
          className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight"
        >
          Inspiring Student Stories
        </h2>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {stories.map((story, index) => (
            <div
              className="flex-center h-full w-[600px] border border-black py-5 px-10"
              key={index}
            >
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className={`flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out snap-start ${
                  isHovered === index ? "shadow-2xl" : ""
                }`}
                style={{
                  width: "90%",
                  aspectRatio: "9/16",
                  minHeight: "600px",
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
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-black bg-opacity-70 text-white font-bold text-sm px-3 py-1 rounded-full backdrop-blur-sm">
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

                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                    <div
                      className={`bg-white bg-opacity-90 rounded-full p-4 shadow-2xl transform transition-all duration-300 ${
                        isHovered === index ? "scale-110 bg-opacity-100" : ""
                      }`}
                    >
                      <IoPlay
                        className="w-8 h-8 text-gray-800 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-center">
                      <div className="bg-yellow-400 text-black font-bold text-sm px-4 py-2 rounded-full mb-3 inline-block shadow-lg">
                        {story.score} Score
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {story.name}
                      </h3>
                      <p className="text-gray-300 text-sm">{story.batch}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous videos"
            className=" rounded-full p-4  transition-all duration-300 hover:scale-110 focus:outline-none bg-[#a5ffaa] border border-black border-b-3 "
            type="button"
            onMouseEnter={(e) =>
              gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })
            }
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })
            }
          >
            <IoChevronBack className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next videos"
            className="rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none bg-[#a5ffaa] border border-black border-b-3"
            type="button"
            onMouseEnter={(e) =>
              gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })
            }
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })
            }
          >
            <IoChevronForward className="w-6 h-6" />
          </button>
        </div>
      </div>

      {selectedVideo && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={closeVideoModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Success Story</h3>
              <button
                onClick={closeVideoModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close video"
                onMouseEnter={(e) =>
                  gsap.to(e.currentTarget, { rotation: 90, duration: 0.2 })
                }
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, { rotation: 0, duration: 0.2 })
                }
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>

            <div className="relative">
              <video
                src={selectedVideo}
                className="w-full h-auto max-h-[80vh] object-contain"
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
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
