import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    { name: 'Vasi', phone: '+91 94899 12418' },
    { name: 'yuva', phone: '+91 94438 36278' },
    { name: 'John', phone: '+91 91234 56789' },
    { name: 'Doe', phone: '+91 98765 43210' },
  ];

  return (
    <div className="text-gray-300"> {/* Silver color for the entire component */}
      <motion.div
        className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-transparent p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center w-full"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-300 mb-4">Contact Us</h2> {/* Silver color for h2 */}
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-2xl text-blue-500" />
              <span>nsskec@kongu.edu</span>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2 text-2xl text-red-500" />
              <span>Kongu Engineering College, Perundurai, Erode</span>
            </div>
          </div>
          <div className="flex flex-col items-center md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-300 mb-4">Connect With Us</h2> {/* Silver color for h2 */}
            <div className="flex space-x-4">
              {[
                { icon: FaLinkedin, color: 'text-blue-700', hover: 'hover:text-blue-500' },
                { icon: FaInstagram, color: 'text-pink-600', hover: 'hover:text-pink-400' },
                { icon: FaTwitter, color: 'text-blue-400', hover: 'hover:text-blue-200' },
                { icon: FaFacebook, color: 'text-blue-800', hover: 'hover:text-blue-600' },
                { icon: FaYoutube, color: 'text-red-600', hover: 'hover:text-red-400' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`${social.color} ${social.hover}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {React.createElement(social.icon, { className: 'text-3xl' })}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="container mx-auto flex flex-wrap justify-between gap-4 p-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-gray-600 rounded-lg shadow-md w-full sm:w-auto">
            <span className="font-semibold text-lg mb-1">{contact.name}</span>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2 text-2xl text-green-500" />
              <span>{contact.phone}</span>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="text-center mt-8 text-sm text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        © 2025 KEC NSS. All rights reserved.
      </motion.div>
    </div>
  );
};

export default Contact;
