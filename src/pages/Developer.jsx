import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaLinkedin,  FaGithub  } from 'react-icons/fa';

const developers = [
  {
    name: 'Sreepriyanth  N S  /',
    email: 'sreepriyanth2005@gmail.com',
    phoneNo: '+91 63822 93288',
    role: 'DEVELOPER',
    links: {
      instagram: 'https://www.instagram.com/mr.sree_155?igsh=dG05YjIybWVrMDU1',
      linkedin: 'https://www.linkedin.com/in/sreepriyanth2005/',
      github:'https://github.com/sreepriyanth2005'
    },
  },
];

const Developer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`container mx-auto flex flex-col md:flex-row justify-between items-center bg-transparent p-8 rounded-lg shadow-md transition-transform duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
    >
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400 animate-colorChange">
          Our Developer
        </h1>

        <div className="space-y-6">
          {developers.map((dev, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center space-y-4 md:space-x-4 bg-transparent p-6 rounded-lg shadow-lg transform transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0 scale-105' : 'opacity-0 -translate-x-20 scale-95'
              } delay-${index * 100}`}
            >
              <div className="md:w-1/2 text-center md:text-left">
                <div className = " flex col"><h2 className="text-2xl font-semibold">{dev.name}  </h2>
                <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-1 px-3 rounded-full font-semibold text-sm">
                  {dev.role}
                </span>
                </div>
                <div className="mt-2">
                  <p>{dev.email}</p>
                  <p>{dev.phoneNo}</p>
                </div>
              </div>
              <div className="flex space-x-4 justify-center md:justify-start mt-4 md:mt-0">
                <a
                  href={dev.links.instagram}
                  className="text-pink-600 hover:text-pink-400 text-3xl transform hover:scale-125 transition-transform duration-300 ease-out"
                >
                  <FaInstagram className="hover:animate-bounce" />
                </a>
                <a
                  href={dev.links.linkedin}
                  className="text-blue-700 hover:text-blue-500 text-3xl transform hover:scale-125 transition-transform duration-300 ease-out"
                >
                  <FaLinkedin className="hover:animate-bounce" />
                </a>
                {/* <a
                  href={dev.links.email}
                  className="text-blue-500 hover:text-blue-300 text-3xl transform hover:scale-125 transition-transform duration-300 ease-out"
                >
                  <FaEnvelope className="hover:animate-bounce" />
                </a> */}
                <a
                  href={dev.links.github}
                  className="text-green-500 hover:text-green-300 text-3xl transform hover:scale-125 transition-transform duration-300 ease-out"
                >
                <FaGithub className="hover:animate-bounce" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developer;
