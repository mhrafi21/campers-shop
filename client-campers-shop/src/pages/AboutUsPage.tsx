import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import DefaultContainer from "../components/DefaultContainer";
import Title from "../components/Title";
import teamImg1 from "../../src/assets/images/team.avif";
import teamImg2 from "../../src/assets/images/team1.jpg";
import teamImg3 from "../../src/assets/images/team2.jpg";
import teamImg4 from "../../src/assets/images/team3.jpg"; // Add a fourth image

const AboutUsPage: React.FC = () => {
  return (
    <section className="">
      <DefaultContainer>
        <div className="">
          <Title>About Us</Title>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-700 mb-2">Email: contact@campersshop.com</p>
            <p className="text-gray-700">Address: 123 Camping St, Adventure City, USA</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58338.04894308025!2d90.16358821556152!3d24.73138015721196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756c072b0415a49%3A0x11e732b8d0ef68e2!2sNakla%20Upazila%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1626265190785!5m2!1sen!2sbd"
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

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[teamImg1, teamImg2, teamImg3, teamImg4].map((img, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md p-4 relative group">
                  <div className="relative overflow-hidden">
                    <img
                      src={img}
                      alt={`Team Member ${index + 1}`}
                      className="w-full h-64 object-cover mb-4 transition-transform duration-300 transform "
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                      <div className="text-white flex space-x-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                        <a href="https://facebook.com" className="text-white">
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
                  </div>
                  <h4 className="text-xl font-bold">John Doe</h4>
                  <p className="text-gray-700">Founder & CEO</p>
                  <p className="text-gray-600">
                    John is an avid camper with over 20 years of experience in the outdoor industry. He started Campers Shop to share his passion for nature with others.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DefaultContainer>
    </section>
  );
};

export default AboutUsPage;
