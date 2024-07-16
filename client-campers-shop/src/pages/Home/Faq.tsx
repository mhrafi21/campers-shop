import React, { useState } from 'react';
import DefaultContainer from '../../components/DefaultContainer';
import heroImage from '../../assets/images/faq.png'; // Import your images

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How do I track my order?',
    answer: 'You can track your order by visiting the "Track Order" page and entering your order number.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Visa, MasterCard, American Express, PayPal, and cash on delivery (COD).',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary.',
  },
  {
    question: 'Can I return or exchange an item?',
    answer: 'Yes, we accept returns and exchanges within 30 days of purchase. Please review our return policy for details.',
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion state
  };

  return (
    <section className="py-12">
      <DefaultContainer>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <img src={heroImage} alt="Image 1" className="mb-4 w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-6">
                  <button
                    className="flex justify-between items-center w-full border-b border-gray-300 py-4 focus:outline-none hover:bg-gray-200 transition duration-300"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg font-medium">{item.question}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition duration-300 ease-in-out`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={activeIndex === index ? 'M6 9l6 6 6-6' : 'M6 15l6-6 6 6'}
                      />
                    </svg>
                  </button>
                  {activeIndex === index && (
                    <div className="mt-4 text-gray-700">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DefaultContainer>
    </section>
  );
};

export default Faq;
