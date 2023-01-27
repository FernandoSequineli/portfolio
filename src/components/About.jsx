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

        <br />
        <p className="text-xl mt-10">
          Hello! My name is Fernando and I am a web developer with a strong
          focus on user experience. I have a BSc in Computing from the National
          College of Ireland and a passion for technology. With 3 years of
          experience in programming and a constant drive to learn new
          technologies, I specialize in front-end development.
        </p>

        <br />

        <p className="text-xl">
          During my leisure activities, I enjoy being surrounded by nature,
          family, and friends. I also enjoy taking my dog for a walk, watching
          some TV shows or playing video games. These activities allow me to
          disconnect from my work and recharge my batteries.
        </p>
        <br />

        <p className="text-xl">
          I am an extremely motivated programmer and have been programming for
          about 3 years and I'm still learning new technologies every week,
          mostly focusing on frontend related technologies. Overall, I am a
          dedicated and motivated developer who is always looking to improve my
          skills and create the best user experiences possible.
        </p>
      </div>
    </div>
  );
};

export default About;
