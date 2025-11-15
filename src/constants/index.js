import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  anthologyLogo,
  catedraLogo,
  buendataLogo,
  carrent,
  jobit,
  tripguide,
  threejs,
  aiChatbotProject,
  moodleDashboard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Vibecoding & UX/UI",
    icon: web,
  },
  {
    title: "Front-End Animation",
    icon: mobile,
  },
  {
    title: "E-learning Solutions",
    icon: backend,
  },
  {
    title: "Sales Enablement",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Sales Enablement Manager",
    company_name: "Anthology Inc",
    icon: anthologyLogo,
    iconBg: "#915EFF",
    date: "2024 - Present",
    points: [
      "Developed and integrated an AI chatbot for internal LMS and SharePoint training, enhancing user engagement and support efficiency.",
      "Designed interactive HTML-enhanced learning components that improved learning outcomes and user experience.",
      "Partnered with Product & Marketing teams to unify learning experiences with GTM strategy, ensuring seamless UX for internal tools.",
      "Focused on human-centered enablement design, creating intuitive interfaces that connect people and ideas through technology.",
    ],
  },
  {
    title: "Sales Account Executive",
    company_name: "Buen Data SAS",
    icon: buendataLogo,
    iconBg: "#383E56",
    date: "2022 - 2024",
    points: [
      "Designed commercial proposals for B2B, Education, and Government sectors, combining technical expertise with strategic communication.",
      "Managed cloud-based Moodle solutions and created comprehensive onboarding content for diverse client needs.",
      "Created branded educational visuals, tutorials, and video explainers using Camtasia and Adobe Premiere.",
      "Delivered tailored e-learning solutions that aligned with client brand identity and learning objectives.",
    ],
  },
  {
    title: "LMS Consultant",
    company_name: "Cátedra SAS",
    icon: catedraLogo,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Delivered technical consultancy and proposal design for LMS projects across various industries.",
      "Specialized in Moodle theme customization using HTML, CSS, and Bootstrap, creating unique learning experiences.",
      "Managed client relationships and provided comprehensive training for digital learning platforms.",
      "Ensured seamless integration of LMS solutions with existing technology ecosystems.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company_name: "Cátedra SAS",
    icon: catedraLogo,
    iconBg: "#383E56",
    date: "2017 - 2019",
    points: [
      "Led setup and maintenance of LMS environments, ensuring optimal performance and reliability.",
      "Created multimedia tutorials and UI design updates for client sites, improving user experience and engagement.",
      "Provided full-cycle support for cloud and LMS implementations, from initial setup to ongoing maintenance.",
      "Developed visual storytelling materials using Photoshop and video editing tools to enhance learning experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Felipe combines technical expertise with creative vision, creating learning experiences that are both functional and emotionally engaging. His Vibecoding approach brings a unique perspective to EdTech solutions.",
    name: "Maria Rodriguez",
    designation: "Education Director",
    company: "Anthology Inc",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Working with Felipe transformed our LMS implementation. His attention to UX detail and ability to bridge technical requirements with user needs made all the difference in our digital transformation journey.",
    name: "Carlos Mendez",
    designation: "CTO",
    company: "Buen Data SAS",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Felipe's blend of sales enablement expertise and front-end development skills creates interfaces that not only look beautiful but drive real business results. He understands both the human and technical side of digital experiences.",
    name: "Ana Martinez",
    designation: "VP of Sales",
    company: "Cátedra SAS",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];

const projects = [
  {
    name: "Interactive Web Design & Mockup Agency",
    description:
      "A highly interactive landing page for a modern web design and mockup agency. Showcases dynamic UI elements, engaging animations, and a seamless user experience to attract clients and highlight creative digital solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "ux/ui",
        color: "pink-text-gradient",
      },
    ],
    image: "/SCREENSHOT%20MOCKUP.png",
    source_code_link: "https://web-design-and-mockup-ai-agency-landiong-page-react-8sntrpgwm.vercel.app/",
  },
  {
    name: "Celestial Paperworkers Landing Page",
    description:
      "A visually stunning and interactive landing page for Celestial Paperworkers. Features modern design, smooth animations, and a user-focused experience to showcase the brand's digital presence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "landing-page",
        color: "green-text-gradient",
      },
      {
        name: "animation",
        color: "pink-text-gradient",
      },
    ],
    image: "/SCREENSHOT%20CELESTIAL.png",
    source_code_link: "https://celestial-paperworkers-landing.vercel.app/",
  },
  {
    name: "Margarita Bernal Portfolio",
    description:
      "A creative and interactive portfolio website for Margarita Bernal. Highlights design skills, project showcases, and engaging animations to present a professional digital presence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "portfolio",
        color: "green-text-gradient",
      },
      {
        name: "animation",
        color: "pink-text-gradient",
      },
    ],
    image: "/SCREENSHOT%20PORTAFOLIO.png",
    source_code_link: "https://portafolio-margarita-bernal.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
