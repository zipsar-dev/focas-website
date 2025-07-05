import React, { useState, useRef } from 'react'

const tabs = ['CA Foundation', 'CA Intermediate', 'CA Final']

const coursesData = {
  'CA Foundation': [
    {
      title: 'Product Manager Fellowship',
      rating: 5.0,
      image: 'images/course1.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      title: 'Product Manager Fellowship',
      rating: 5.0,
      image: 'images/course2.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      title: 'Product Manager Fellowship',
      rating: 5.0,
      image: 'images/course3.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
  ],
  'CA Intermediate': [],
  'CA Final': [],
}

const Courses = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -320 : 320,
        behavior: 'smooth',
      })
    }
  }

  const courses = coursesData[activeTab]

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1>Courses</h1>
      {/* Tabs */}
      <div className='w-full flex justify-center'>
        <div className="flex justify-center gap-4 mb-6 py-1 px-2 border-2 border-b-3 rounded-xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 border rounded-xl text-sm font-semibold ${activeTab === tab
                  ? 'bg-[#507cf4] text-white'
                  : 'bg-white text-black border-gray-400'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-2 no-scrollbar scroll-smooth"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white border border-gray-300 rounded-lg shadow p-4 flex-shrink-0"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="text-yellow-500 text-sm font-bold mb-2">
                ⭐ {course.rating}
              </div>
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <button className="bg-black text-white px-4 py-2 rounded text-sm">
                Know More
              </button>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => scroll('left')}
            className="bg-black text-white px-4 py-2 rounded-full text-sm"
          >
            &lt;
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-black text-white px-4 py-2 rounded-full text-sm"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses
