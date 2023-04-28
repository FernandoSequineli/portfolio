// Portfolio imports
import {
  monsterRolodex,
  hooBank,
  CloudManagement,
  manageApp,
  colorSchemeGenerator,
} from "../assets";

// SocialLinks imports
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";

// import resume from "../../public/resume.pdf"
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
    src: CloudManagement,
    alt: "CloudManagement",
    codeLink:
      "https://github.com/FernandoSequineli/react-tailwind-cloud-management",
    liveLink:
      "https://fernandosequineli.github.io/react-tailwind-cloud-management/",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    id: 2,
    src: hooBank,
    alt: "HooBank",
    codeLink: "https://github.com/FernandoSequineli/hoo-bank-react-tailwind",
    liveLink: "https://fernandosequineli.github.io/hoo-bank-react-tailwind/",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    id: 3,
    src: manageApp,
    alt: "ManageApp",
    codeLink: "https://github.com/FernandoSequineli/react-tailwind-manage-app",
    liveLink: "https://fernandosequineli.github.io/react-tailwind-manage-app/",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    id: 4,
    src: monsterRolodex,
    alt: "monsterRolodex",
    codeLink: "https://github.com/FernandoSequineli/monsters-rolodex",
    liveLink: "https://fernandosequineli.github.io/monsters-rolodex/",
    technologies: ["HTML", "CSS", "JavaScript", "React", "RestAPI"],
  },
  {
    id: 5,
    src: colorSchemeGenerator,
    alt: "colorSchemeGenerator",
    codeLink: "https://github.com/FernandoSequineli/color-scheme-generator",
    liveLink: "https://fernandosequineli.github.io/color-scheme-generator/",
    technologies: ["HTML", "CSS", "JavaScript", "RestAPI"],
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
        WhatsApp <BsWhatsapp size={30} />
      </>
    ),
    href: "https://wa.me/+353896030235",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "https://drive.google.com/file/d/15yhrxlQcV5NfJpjwVFYBVnlHaAss4oGj/view?usp=sharing",

    download: true,
  },
  {
    id: 5,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:sequineli.fernando@gmail.com",
    style: "rounded-br-md",
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
