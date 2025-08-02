import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Batyrkhan Sharipbay — Backend Developer & ML Engineer",
  author: "Batyrkhan Sharipbay",
  description:
    "Software Engineer based in Almaty, Kazakhstan. Interested in Web development and ML research.",
  lang: "en",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/batyrkhan-sharipbay/" },
    { text: "Github", href: "https://github.com/sb2rhan" },
  ],
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Batyrkhan Sharipbay",
    specialty: "Backend Developer & ML Engineer",
    summary:
      "Software Engineer based in Almaty, Kazakhstan. Interested in Web development and ML research.",
    email: "batyrkhan.sharipbay@nu.edu.kz",
  },
  experience: [
    {
      company: "Nazarbayev University",
      position: "Research Assistant",
      startDate: "Nov 2024",
      endDate: "Present",
      summary: [
        "Researching the application of Fuzzy Logic in medical AI to improve explainability under the guidance of Professor Adnan Yazici.",
        "Implemented ANFIS with Beetle Swarm Optimization algorithm using PyTorch, increasing the accuracy rates to >95% in classification tasks.",
      ],
    },
    {
      company: "NU Rover Team",
      position: "Lead Software Engineer",
      startDate: "Apr 2023",
      endDate: "Jan 2025",
      summary: [
        "Created and hosted the team website at aspanrover.kz using React and Tailwind CSS. This improved team visibility and communication, leading to a 50% increase in engagement from potential new members.",
        "Deployed a WebSocket server to connect the Console app with the Rover, using AWS API Gateway, Lambda, and DynamoDB. This enabled real-time data transmission and control, enhancing the Rover's operational efficiency.",
        "Developed a Console app using React and Tailwind CSS to control the Rover, providing a user-friendly interface for team members to interact with the Rover's systems.",
        "Helped with writing WebRTC ROS module for Rover in Python, enabling real-time video streaming and remote control capabilities.",
        "Organized meetings in the Software Team regarding future software implementations.",
      ],
    },
  ],
  projects: [
    {
      name: "Point of Sale (PoS) system with Dashboard",
      summary: "A comprehensive PoS system with an intuitive dashboard for sales tracking and inventory management.",
      linkPreview: "/",
      linkSource: "https://github.com/sb2rhan/PoSSystem.git",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
  ],
  about: {
    description: `
      Hi, I am Batyrkhan Sharipbay, a passionate Backend Developer and ML Engineer.
      I have an experience in .NET and Python, as well as front-end frameworks like React and Angular.
      I am interested in learning new technologies and applying them in real-world projects.

      Currently, focused on web development and machine learning research, and I am always eager
      to learn new technologies and improve my skills.
    `,
    image: "/batyrkhan-big.jpg",
  },
};
