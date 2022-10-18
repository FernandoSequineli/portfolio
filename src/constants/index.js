// Portfolio imports
import { arrayDestruct, navbar, reactParallax, reactSmooth } from "../assets";

// SocialLinks imports
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

//Experience imports
import {
  html,
  css,
  javascript,
  react,
  mongodb,
  git,
  restapi,
  wordpress,
  github,
  tailwind,
  node,
  scrum,
} from "../assets";

export const portfolio = [
  {
    id: 1,
    src: arrayDestruct,
  },
  {
    id: 2,
    src: reactParallax,
  },
  {
    id: 3,
    src: navbar,
  },
  {
    id: 4,
    src: reactSmooth,
  },
];

export const navLinks = [
  {
    id: 1,
    link: "home",
    offset: 0,
  },
  {
    id: 2,
    link: "about",
    offset: 0,
  },
  {
    id: 3,
    link: "portfolio",
    offset: -100,
  },
  {
    id: 4,
    link: "experience",
    offset: -100,
  },
  {
    id: 5,
    link: "contact",
    offset: -100,
  },
];

export const socialLinks = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/fernando-sequineli/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/fernandosequineli",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:sequineli.fernando@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];

export const experience = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: react,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: mongodb,
    title: "MongoDB",
    style: "shadow-green-600",
  },
  {
    id: 7,
    src: git,
    title: "Git",
    style: "shadow-orange-800",
  },
  {
    id: 8,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 9,
    src: wordpress,
    title: "WordPress",
    style: "shadow-blue-400",
  },
  {
    id: 10,
    src: restapi,
    title: "Rest API",
    style: "shadow-purple-400",
  },
  {
    id: 11,
    src: node,
    title: "Node Js",
    style: "shadow-green-300",
  },
  {
    id: 12,
    src: scrum,
    title: "Agile - Scrum",
    style: "shadow-red-400",
  },
];
