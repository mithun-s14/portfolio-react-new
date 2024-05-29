import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#38A5FF]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello, welcome to my website!</p>
          </div>
          <div>
            <p>
              I'm Mithun, a 3rd year Computer Science student. In my 7 years of programming experience, I've become fascinated by the diversity 
              computer science holds, such as developing relational database management systems, leveraging python for data science, exploring 
              different machine learning models, employing modern technologies in web development, and many more. I attend Toronto Metropolitan
              University, where I've had the opportunity to dabble into different programming languages and opportunities. I am also currently
              completing an 8 month internship at the Treasury Board Secretariat where I've been able to further sharpen my full-stack development skills and
              learn how to develop in a professional environment. 
              If you want to chat or talk about any opportunities, feel free to reach out to me!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
