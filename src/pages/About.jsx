import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
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
      className={`p-8 transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className={`text-4xl font-bold text-blue-400 mb-8 text-center ${
        isVisible ? 'animate-bounce' : ''
      }`}>
        About
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <div
          className={`flex-1 bg-transparent p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-lg shadow-md bg-gray-100 ${
            isVisible ? 'animate-slideInRight' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-orange-400">NSS</h2>
          <p className="text-lg text-gray-300">
            The event also features exciting challenges that encourage out-of-the-box thinking and practical problem-solving.
            Join us at Prasidhi to explore new possibilities, network with like-minded individuals, and contribute to groundbreaking solutions.
            Be part of a community that drives change and shapes the future!
          </p>
        </div>
        <div
          className={`flex-1 bg-transparent p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-lg shadow-md bg-gray-100 ${
            isVisible ? 'animate-slideInLeft' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-orange-400">Prasidhi</h2>
          <p className="text-lg text-gray-300">
            Prasidhi is a national-level symposium aimed at bringing together creative minds to innovate and build amazing projects.
            It serves as a platform for students, professionals, and enthusiasts to collaborate and showcase their skills in technology and innovation.
            Participants will have the opportunity to engage in workshops, seminars, and hands-on sessions, gaining valuable insights and experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
