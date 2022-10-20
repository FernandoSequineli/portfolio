import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Hi, My name is Fernando and I am a Web Developer with a passion for
          user experience. I'm a Bachelor of Science in Computing from National
          College of Ireland.
        </p>

        <br />

        <p className="text-xl">
          I am an extremely motivated programmer and have been programming for
          about 3 years and I'm still learning new technologies every week,
          mostly focusing on frontend related technologies.
        </p>
        <br />

        <p className="text-xl">
          When I am not working or studying, I enjoy to take my dog for a walk,
          whatch tv shows or play video games.
        </p>
      </div>
    </div>
  );
};

export default About;
