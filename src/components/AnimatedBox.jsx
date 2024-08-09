// src/components/AnimatedBox.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBox = ({ title }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(boxRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="mt-10 p-2 bg-teal-500 text-white text-center rounded-md shadow-lg" ref={boxRef}>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default AnimatedBox;