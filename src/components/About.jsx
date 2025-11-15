import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);
  
  return (
    <Tilt
      className='xs:w-[250px] w-full'
      tiltMaxAngleX={isMobile ? 15 : 45}
      tiltMaxAngleY={isMobile ? 15 : 45}
      scale={1}
      transitionSpeed={isMobile ? 300 : 450}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an EdTech Sales Consultant and E-learning Solutions Advisor with 7+ years of experience designing, implementing, and selling LMS and cloud solutions. In parallel, I explore the fusion of <span className='text-[#915EFF]'>Vibecoding</span>, <span className='text-[#915EFF]'>UX/UI design</span>, and <span className='text-[#915EFF]'>front-end animation frameworks</span> (React, Framer Motion, Three.js) to build immersive digital experiences. I combine human-centered design with strategic enablement thinking, ensuring every interface tells a story — both functional and emotional.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
