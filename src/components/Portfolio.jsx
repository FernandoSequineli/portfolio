import React from "react";
import { portfolio } from "../constants";
import { IoIosGlobe } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>

          <p className="py-6">
            Check out my portfolio to see some of my web development projects
            that showcases my skills in creating visually appealing and
            user-friendly websites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((project, index) => (
            <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={project.src} alt={project.alt} className="rounded-md" />

              <div className="py-2 flex flex-wrap h-[100px]">
                {project.technologies.map((techs, index) => (
                  <span
                    key={index}
                    className="p-2 m-1 h-10 cursor-default rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-medium"
                  >
                    {techs}
                  </span>
                ))}
              </div>

              <div className="py-2 flex justify-around">
                <a
                  href={project.liveLink}
                  className="text-white w-[48%] text-sm inline-flex items-center text-center bg-slate-700 rounded-lg p-2 hover:scale-105 duration-500 hover:bg-sky-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoIosGlobe className="pr-1" size="20px" />
                  Project Online
                </a>
                <a
                  href={project.codeLink}
                  className="text-white w-[48%] text-sm inline-flex items-center text-center bg-slate-700 rounded-lg p-2 hover:scale-105 duration-500 hover:bg-sky-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="pr-1" size="20px" />
                  Code Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
