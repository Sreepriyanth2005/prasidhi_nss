import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import ScrollingImages from './pages/ScrollingImages';
import Register from './pages/Register';
import Developer from './pages/Developer';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses =
    "text-lg md:text-2xl font-semibold text-blue-500 hover:text-blue-900 transition-colors duration-300";
  const sectionClasses = "p-4 md:p-8 bg-cover bg-fixed bg-center";
  const sectionStyle = (bgImage) => ({
    backgroundImage: `url('${bgImage}')`,
  });

  return (
    <div className="app min-h-screen bg-cover bg-fixed bg-center">
      <nav
  className={`fixed top-0 left-0 w-full p-4 md:p-6 z-10 shadow-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
  style={{
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(10px)",
    backgroundColor: "grey"
  }}
>
  <div className="flex justify-between items-center px-4 md:px-8">
    {/* KEC Logo - Always visible on left */}
    <img
      src="/kec logo.png"
      alt="KEC Logo"
      className="h-16 md:h-20"
    />

    {/* Navigation Links (Desktop) */}
    
    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
    <ul className="flex space-x-8">
      <li><a href="#about" className={navLinkClasses}>About</a></li>
      <li><a href="#scrolling-images" className={navLinkClasses}>Gallery</a></li>
      <li><a href="#events" className={navLinkClasses}>Events</a></li>
      <li><a href="#register" className={navLinkClasses}>Register</a></li>
      <li><a href="#contact" className={navLinkClasses}>Contact</a></li>
    </ul>
    </div>

    {/* NSS Logo - Moved to the right in desktop view */}
    <img
      src="/nsslogo-removebg-preview.png"
      alt="NSS Logo"
      className="h-16 md:h-20 ml-auto"
    />

    {/* Hamburger Menu Button for Mobile */}
    <button
      className="text-white md:hidden focus:outline-none"
      onClick={toggleMenu}
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  </div>

  {/* Mobile Menu (Full width dropdown) */}
  <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
    <ul className="bg-gray-800 w-full mt-4 py-2 rounded-lg">
      <li className="text-center py-2"><a href="#home" className={navLinkClasses} onClick={toggleMenu}>Home</a></li>
      <li className="text-center py-2"><a href="#about" className={navLinkClasses} onClick={toggleMenu}>About</a></li>
      <li className="text-center py-2"><a href="#scrolling-images" className={navLinkClasses} onClick={toggleMenu}>Gallery</a></li>
      <li className="text-center py-2"><a href="#events" className={navLinkClasses} onClick={toggleMenu}>Events</a></li>
      <li className="text-center py-2"><a href="#register" className={navLinkClasses} onClick={toggleMenu}>Register</a></li>
      <li className="text-center py-2"><a href="#contact" className={navLinkClasses} onClick={toggleMenu}>Contact</a></li>
    </ul>
  </div>
</nav>


      {/* Content Sections */}
      <div className="pt-28 space-y-0">
        <section
          id="home"
          className={sectionClasses}
          style={{ backgroundColor: "grey" }}
        >
          <div className="bg-transparent p-2 hover:shadow-xl transition-shadow duration-300">
            <Home />
          </div>
        </section>

        <section
          id="about"
          className={sectionClasses}
          style={{
            ...sectionStyle('/img1.png'),
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "grey"
          }}
        >        
          <div className="bg-transparent p-2 hover:shadow-xl transition-shadow duration-300">
            <About />
          </div>
        </section>

        <section
          id="scrolling-images"
          className={sectionClasses}
          style={{
            ...sectionStyle('/img1.png'),
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "grey"
          }}
        >        
          <div className="bg-transparent p-2 hover:shadow-xl transition-shadow duration-300">
            <ScrollingImages />
          </div>
        </section>

        <section
          id="events"
          className={sectionClasses}
          style={{
            ...sectionStyle('/img1.png'),
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "grey"
          }}
        >        
          <div className="bg-transparent p-2 hover:shadow-xl transition-shadow duration-300">
            <Events />
          </div>
        </section>

        <section
          id="register"
          className={sectionClasses}
          style={{
            ...sectionStyle('/img1.png'),
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "grey"
          }}
        >
          <div className="bg-transparent p-2 hover:shadow-xl transition-shadow duration-300">
            <Register />
          </div>
        </section>

        <section
          id="contact"
          className={sectionClasses}
          style={{
            ...sectionStyle('/img1.png'),
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "grey"
          }}
        >        
          <div className="bg-transparent p-2 hover:shadow-xl transition-shadow duration-300">
            <Contact />
          </div>
        </section>

        <section
          id="developer"
          className={sectionClasses}
          style={{
            ...sectionStyle('/img1.png'),
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "grey"
          }}
        >
          <div className="bg-transparent p-2 hover:shadow-lg transition-shadow duration-300 rounded-lg">
            <Developer />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;