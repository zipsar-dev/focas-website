import React, { useRef } from 'react';

interface Story {
  name: string;
  batch: string;
  score: string;
  certificate: string;
  video: string;
}

const stories: Story[] = [
  {
    name: 'Gayathri',
    batch: '2016 Batch',
    score: '93%',
    certificate: 'images/certificate.png',
    video: 'videos/Successful stories/Gayathri.mp4',
  },
  {
    name: 'Harini Aiswariya',
    batch: '2016 Batch',
    score: '93%',
    certificate: 'images/certificate.png',
    video: 'videos/Successful stories/Harini Aiswariya.mp4',
  },
  {
    name: 'Jeshurun',
    batch: '2016 Batch',
    score: '93%',
    certificate: 'images/certificate.png',
    video: 'videos/Successful stories/Jeshurun.mp4',
  },
  {
    name: 'Marimuthu',
    batch: '2016 Batch',
    score: '93%',
    certificate: 'images/certificate.png',
    video: 'videos/Successful stories/Marimuthu.mp4',
  },
  {
    name: 'Sai shruthi',
    batch: '2016 Batch',
    score: '93%',
    certificate: 'images/certificate.png',
    video: 'videos/Successful stories/Sai shruthi.mp4',
  },
  {
    name: 'Sridevi',
    batch: '2016 Batch',
    score: '93%',
    certificate: 'images/certificate.png',
    video: 'videos/Successful stories/Sridevi.mp4',
  },
];

const SuccessStories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 280;
      const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const openInNewTab = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Success Stories
      </h2>

      {/* Scrollable container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer w-72 sm:w-80 transition-transform hover:scale-105 snap-start"
              onClick={() => openInNewTab(story.video)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openInNewTab(story.video);
                }
              }}
              role="button"
              aria-label={`Open video of ${story.name} in new tab`}
            >
              <video
                src={story.video}
                className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-gray-200"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
              <div className="bg-yellow-400 text-white font-bold text-sm px-4 py-1 rounded-full mb-3">
                {story.score} Score
              </div>
              <p className="text-xl font-semibold text-gray-900">{story.name}</p>
              <p className="text-sm text-gray-600">{story.batch}</p>
            </div>
          ))}
        </div>

        {/* Scroll buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="button"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="button"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;