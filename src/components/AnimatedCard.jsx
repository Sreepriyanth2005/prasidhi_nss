import React, { useEffect, useRef } from "react";
import { fadeInUp } from "../animations/gsapAnimations";

const AnimatedCard = ({ children }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    fadeInUp(cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
