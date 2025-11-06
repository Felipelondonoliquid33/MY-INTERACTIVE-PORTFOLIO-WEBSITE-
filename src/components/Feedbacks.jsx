import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[350px] w-full h-full flex flex-col'
  >
    <div className='flex-1'>
      <p className='text-white font-black text-[48px] leading-none mb-4'>"</p>
      <p className='text-white tracking-wider text-[16px] leading-relaxed'>
        {testimonial}
      </p>
    </div>

    <div className='mt-8 flex items-center gap-4 pt-4 border-t border-gray-800'>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className='w-14 h-14 rounded-full object-cover border-2 border-[#915EFF]'
      />
      <div className='flex-1'>
        <p className='text-white font-semibold text-[16px]'>
          {name}
        </p>
        <p className='mt-1 text-secondary text-[13px]'>
          {designation}
        </p>
        <p className='text-secondary text-[12px] text-[#915EFF]'>
          {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Feedback from colleagues and clients on my work combining EdTech expertise with creative front-end development.
        </motion.p>
      </motion.div>

      <div className={`mt-20 flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={`${testimonial.name}-${index}`} index={index} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
