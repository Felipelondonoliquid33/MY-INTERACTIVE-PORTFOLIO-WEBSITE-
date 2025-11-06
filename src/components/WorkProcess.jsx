import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { cn } from "../utils/cn";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { EncryptedText } from "./EncryptedText";

// Simple SVG Icons
const IconClipboardCopy = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const IconFileBroken = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const IconSignature = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const IconTableColumn = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const IconBoxAlignRightFilled = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10v-7m0 7a2 2 0 002 2h2a2 2 0 002-2v-7a2 2 0 00-2-2h-2a2 2 0 00-2 2z" />
  </svg>
);

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const widthVariants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.2 },
    },
    hover: {
      width: ["0%", "100%"],
      transition: { duration: 2 },
    },
  };

  const gradientVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const arr = new Array(6).fill(0);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={widthVariants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="relative overflow-hidden flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        >
          <motion.div
            variants={gradientVariants}
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(90deg, transparent, #915EFF, #bf61ff, #915EFF, transparent)",
              backgroundSize: "200% 100%",
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #915EFF, #bf61ff, #23a6d5, #915EFF)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] flex items-center justify-center text-white font-bold">
          S
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 dark:text-neutral-400 mt-4">
          Sales Strategy
        </p>
        <p className="border border-[#915EFF] bg-[#915EFF]/20 dark:bg-[#915EFF]/10 text-[#915EFF] text-xs rounded-full px-2 py-0.5 mt-4">
          Strategic
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] flex items-center justify-center text-white font-bold">
          D
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 dark:text-neutral-400 mt-4">
          Design Thinking
        </p>
        <p className="border border-[#915EFF] bg-[#915EFF]/20 dark:bg-[#915EFF]/10 text-[#915EFF] text-xs rounded-full px-2 py-0.5 mt-4">
          Creative
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] flex items-center justify-center text-white font-bold">
          T
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 dark:text-neutral-400 mt-4">
          Tech Enablement
        </p>
        <p className="border border-[#915EFF] bg-[#915EFF]/20 dark:bg-[#915EFF]/10 text-[#915EFF] text-xs rounded-full px-2 py-0.5 mt-4">
          Innovative
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] shrink-0 flex items-center justify-center text-white font-bold">
          UX
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          I combine user-centered design with sales enablement strategies to create experiences that convert...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500 dark:text-neutral-400">Vibecoding principles.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Sales Enablement",
    description: (
      <span className="text-sm">
        Crafting strategic sales proposals and enablement materials that bridge technical capabilities with business outcomes. Transforming complex EdTech solutions into compelling narratives.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-[#915EFF]" />,
  },
  {
    title: "UX/UI Design",
    description: (
      <span className="text-sm">
        Designing intuitive interfaces with human-centered principles. Creating visual systems that enhance learning experiences and drive user engagement through thoughtful design.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-[#915EFF]" />,
  },
  {
    title: "Vibecoding & Animation",
    description: (
      <span className="text-sm">
        Bringing interfaces to life with emotion-driven animations. Using Framer Motion and creative coding to create immersive, vibe-reactive experiences that connect with users.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-[#915EFF]" />,
  },
  {
    title: "Integrated Approach",
    description: (
      <span className="text-sm">
        Combining sales strategy, design thinking, and technical enablement to deliver holistic solutions that drive business results while creating beautiful user experiences.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-[#915EFF]" />,
  },
  {
    title: "Learning Experience Design",
    description: (
      <span className="text-sm">
        Designing and implementing LMS solutions that enhance learning outcomes. From Moodle customization to AI-powered chatbots, creating tools that make education more engaging.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-[#915EFF]" />,
  },
];

const WorkProcess = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My approach</p>
        <h2 className={styles.sectionHeadText}>Work Process.</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <EncryptedText
            text="A holistic blend of sales enablement, UX/UI design, and creative front-end development. Each project reflects my unique approach to combining business strategy with technical execution and aesthetic vision."
            encryptedClassName="text-neutral-500"
            revealedClassName="text-secondary"
            revealDelayMs={50}
          />
        </motion.p>
      </motion.div>

      <div className="mt-20">
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
};

export default SectionWrapper(WorkProcess, "");

