import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../../assets/images/hero.jpg";
import DefaultContainer from '../../components/DefaultContainer';

interface TourGroup {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const tourGroups: TourGroup[] = [
  {
    id: 1,
    title: 'Adventure Seekers',
    description: 'Join our Adventure Seekers group for thrilling experiences in the wild.',
    imageUrl: img,
    link: '#',
  },
  {
    id: 2,
    title: 'Family Camping',
    description: 'Perfect for families looking to create unforgettable camping memories.',
    imageUrl: img,
    link: '#',
  },
  {
    id: 3,
    title: 'Solo Explorers',
    description: 'Embark on a solo journey with like-minded explorers across scenic routes.',
    imageUrl: img,
    link: '#',
  }
];

const TourGroupsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize aos on component mount
  }, []);

  return (
    <section className="py-12 bg-gray-200">
        <DefaultContainer>
        <div className="">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Tour Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourGroups?.map((group) => (
            <div
              key={group.id}
              className="border border-gray-300 transition-all rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={group.imageUrl}
                alt={group.title}
                className="w-full h-56 object-cover object-center transition duration-300 transform hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{group.title}</h3>
                <p className="text-gray-700">{group.description}</p>
                <a
                  href={group.link}
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
        </DefaultContainer>
    </section>
  );
};

export default TourGroupsSection;
