import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import teamImg1 from '../assets/images/hero.jpg';
import teamImg2 from '../assets/images/hero.jpg';
import teamImg3 from '../assets/images/hero.jpg';

const AboutUsPage: React.FC = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
          <p className="text-gray-700 mb-2">Email: contact@campersshop.com</p>
          <p className="text-gray-700">Address: 123 Camping St, Adventure City, USA</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58337.97926481324!2d90.39586275004684!3d24.746184492011225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375585bd30bf14f1%3A0x9e5b2c1e03b8b1d6!2sMymensingh!5e0!3m2!1sen!2sbd!4v1626265190785!5m2!1sen!2sbd"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" className="text-blue-600">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" className="text-blue-400">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" className="text-pink-600">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700">
            At Campers Shop, our mission is to provide high-quality camping gear that enhances your outdoor adventures. We believe in sustainability, durability, and creating products that make your camping experience unforgettable.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
              <img src={teamImg1} alt="Team Member 1" className="w-full h-64 object-cover mb-4" />
              <h4 className="text-xl font-bold">John Doe</h4>
              <p className="text-gray-700">Founder & CEO</p>
              <p className="text-gray-600">John is an avid camper with over 20 years of experience in the outdoor industry. He started Campers Shop to share his passion for nature with others.</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
              <img src={teamImg2} alt="Team Member 2" className="w-full h-64 object-cover mb-4" />
              <h4 className="text-xl font-bold">Jane Smith</h4>
              <p className="text-gray-700">Chief Marketing Officer</p>
              <p className="text-gray-600">Jane leads our marketing team with creativity and enthusiasm. She ensures our message reaches campers around the world.</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
              <img src={teamImg3} alt="Team Member 3" className="w-full h-64 object-cover mb-4" />
              <h4 className="text-xl font-bold">Bob Johnson</h4>
              <p className="text-gray-700">Head of Product Design</p>
              <p className="text-gray-600">Bob has a keen eye for design and functionality. He is dedicated to creating innovative camping gear that meets the needs of our customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
