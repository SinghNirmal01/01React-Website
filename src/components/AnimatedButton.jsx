import react from 'react'
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

const AnimatedButton = ({text, className}) => {
  const xTo = useRef();
  const yTo = useRef();
  const buttonRef = useRef(null);
  const divRef = useRef(null);

  const { contextSafe } = useGSAP (()=>{
    xTo.current = gsap.quickTo(divRef.current, "x", {duration:0.8, ease: "power3"});
    yTo.current = gsap.quickTo(divRef.current, "y", {duration:0.8, ease: "power3"});
    

    gsap.to(divRef.current, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
      zIndex: -10,
    })
  },{scope: buttonRef});


  const handleMouseEnter = contextSafe(() => {
    gsap.to(divRef.current, {
      scale:1,
      duration:0.3,
    });

  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to(divRef.current, {
      scale:0,
      duration:0.3,
    })
  });
  const handleMouseMove = contextSafe((e) => {
      const rect = buttonRef.current.getBoundingClientRect();
      const { top, left } = rect;
      xTo.current(e.clientX - left);
      yTo.current(e.clientY - top);
    
});
  return (
    <button
      ref={buttonRef}
      className={`relative border-2 border-solid border-white px-5 py-2 rounded-3xl text-white overflow-hidden hover:text-green-500 hover:border-black z-0  ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={(e)=>{handleMouseMove(e)}}
    >
      <div ref={divRef} className="absolute w-[100px] h-[100px] bg-white left-0 top-0 wrapperElement -z-10 pointer-events-none rounded-[50%]"></div>
      <div>
      <div 
      className='z-10 flex justify-center items-center text-xl'>{text}<div className="ml-2">
                <FontAwesomeIcon icon={faArrowRight} />
                </div></div>
                </div>
    </button>
  );
};

export default AnimatedButton;