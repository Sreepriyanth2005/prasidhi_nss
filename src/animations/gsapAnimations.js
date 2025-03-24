// gsapAnimations.js
import { gsap } from "gsap";

export const fadeInUp = (element) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });
};

export const bounce = (element) => {
  gsap.to(element, {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 0.6,
  });
};
