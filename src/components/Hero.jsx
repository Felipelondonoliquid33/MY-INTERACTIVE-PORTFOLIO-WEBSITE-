import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ContainerTextFlip } from "./ContainerTextFlip";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <section 
      className={`relative w-full h-screen mx-auto overflow-hidden ${isMobile ? 'bg-transparent' : ''}`} 
      style={{ 
        backgroundColor: isMobile ? 'transparent' : 'transparent',
        background: isMobile ? 'transparent' : 'transparent',
        position: 'relative',
        zIndex: isMobile ? 2 : 1
      }}
    >
      <div
        className={`absolute inset-0 sm:top-[120px] top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-5 z-10 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center sm:mt-5 mt-2'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className={`flex-1 min-w-0 pointer-events-auto ${isMobile ? 'bg-black/20 backdrop-blur-sm rounded-lg p-3' : ''}`}>
          <h1 className={`${styles.heroHeadText} text-white leading-tight ${isMobile ? 'drop-shadow-lg' : ''}`}>
            Hi, I'm <span className='text-[#915EFF]'>Felipe</span>
          </h1>
          <div className={`${styles.heroSubText} sm:mt-2 mt-1 text-white-100 flex flex-col sm:gap-2 gap-1`}>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className={`whitespace-nowrap ${isMobile ? 'drop-shadow-md' : ''}`}>EdTech Consultant |</span>
              <ContainerTextFlip 
                words={["Vibecoder", "Designer", "Architect"]}
                interval={3000}
                className="mt-1"
              />
            </div>
            <p className={`sm:block hidden text-sm sm:text-base ${isMobile ? 'drop-shadow-md' : ''}`}>
              Creating emotion-driven interfaces through code
            </p>
          </div>
        </div>
      </div>

      {/* 3D Model Canvas - Smaller and auto-rotating on mobile */}


      {/* Desktop: full background 3D model. Mobile: fixed small 3D model at bottom */}
      {!isMobile && (
        <div 
          className="absolute inset-0 z-[1]"
          style={{ 
            background: 'transparent',
            backgroundColor: 'transparent'
          }}
        >
          <ComputersCanvas />
        </div>
      )}
      {isMobile && (
        <div
          className="absolute left-1/2 bottom-8 z-20"
          style={{
            transform: 'translateX(-50%)',
            width: '320px',
            height: '200px',
            pointerEvents: 'none',
            background: 'rgba(0,0,0,0.0)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ComputersCanvas />
        </div>
      )}

      <div className={`absolute ${isMobile ? 'bottom-20' : 'xs:bottom-10 bottom-32'} w-full flex justify-center items-center z-10`}>
        <a href='#about' aria-label="Scroll to about section">
          <div className='w-[30px] h-[56px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: shouldReduceMotion ? 0 : [0, 24, 0],
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.5,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
