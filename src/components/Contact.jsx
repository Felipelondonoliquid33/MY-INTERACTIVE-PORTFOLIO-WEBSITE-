import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xqagrbdb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setLoading(false);
        setSubmitStatus("success");
        alert("Thank you! I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }
    } catch (error) {
      setLoading(false);
      setSubmitStatus("error");
      if (import.meta.env.DEV) {
        console.error("Form submission error:", error);
      }
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        
        <div className='mt-8 flex flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <span className='text-secondary font-medium'>Email:</span>
            <a 
              href='mailto:londonof@gmail.com' 
              className='text-white hover:text-[#915EFF] transition-colors'
            >
              londonof@gmail.com
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-secondary font-medium'>Phone:</span>
            <a 
              href='tel:+573112704276' 
              className='text-white hover:text-[#915EFF] transition-colors'
            >
              +57 311 270 4276
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-secondary font-medium'>LinkedIn:</span>
            <a 
              href='https://www.linkedin.com/in/felipe-londo%C3%B1o-humar-13440b168/' 
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-[#915EFF] transition-colors'
            >
              Connect with me
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-secondary font-medium'>Location:</span>
            <span className='text-white'>Bogotá, Colombia</span>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-opacity ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
