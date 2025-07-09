import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0); // First item open by default

  const faqData: FAQItem[] = [
    {
      id: 1,
      question:
        "What kind of support and resources will Fellows have access to during the program?",
      answer:
        "Our Product Manager Fellowship is a 12 week online course that helps learners transition into a career in product management. The entire fellowship is taught online via live sessions on Zoom. Our instructors and mentors are product management executives at top technology companies and they will not only teach you the fundamentals of product management, but also help you with case studies, doubt resolution and feedback.",
    },
    {
      id: 2,
      question: "What's included in the career services?",
      answer:
        "Our comprehensive career services include personalized resume reviews, mock interviews with industry professionals, portfolio development guidance, networking opportunities with alumni and industry experts, job placement assistance, and ongoing career coaching throughout the program and beyond.",
    },
    {
      id: 3,
      question: "What's included in the career services?",
      answer:
        "Career services encompass one-on-one mentorship sessions, access to our exclusive job board, LinkedIn profile optimization, salary negotiation workshops, and direct connections with hiring managers at top tech companies. We also provide lifetime access to our career resources portal.",
    },
    {
      id: 4,
      question: "What's included in the career services?",
      answer:
        "The career services package includes interview preparation workshops, technical skill assessments, personal branding sessions, industry-specific guidance, referral programs, and continuous support from our dedicated career counselors who work closely with you to achieve your career goals.",
    },
    {
      id: 5,
      question: "What's included in the career services?",
      answer:
        "Our career services feature comprehensive job search strategies, application tracking systems, follow-up templates, negotiation tactics, and access to exclusive networking events. We maintain partnerships with leading companies to provide direct pathways to employment opportunities.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="text-center mb-12 relative">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-full"></div>

      {/* FAQ Items */}
      <div className="space-y-4 w-[80%] mx-auto mt-10">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 text-left focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-xl font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 border border-black border-b-3 rounded-lg flex-center cursor-pointer transition-all duration-300 ${
                      openItem === item.id
                        ? "bg-green-500"
                        : "bg-green-100 hover:bg-green-200"
                    }`}
                  >
                    {openItem === item.id ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItem === item.id ? "opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 border-t border-black">
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-gray-200 opacity-50">
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-current rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 right-10 text-gray-200 opacity-50">
        <div className="grid grid-cols-6 gap-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-current rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
