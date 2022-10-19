import React from "react";
import { portfolio } from "../constants";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-500"
            >
              <img src={project.src} alt="" className="rounded-md" />
              <div className="flex items-center justify-center">
                <div className="w-[70%] x-6 py-2 m-4 flex flex-start flex-none flex-wrap">
                  {project.technologies.map((techs, index) => (
                    <span
                      key={index}
                      className="p-2 m-1 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-medium"
                    >
                      {techs}
                    </span>
                  ))}
                </div>
                <div className="w-[30%] x-6 py-2 m-4">
                  <a
                    href={project.liveLink}
                    className="flex justify-between items-center w-full text-white hover:scale-105 duration-500 hover:bg-sky-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </div>

                {/* <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
