import React from "react";
import logo from "../assets/logo-removebg.png";

const Hero = () => {
  return (
    <div>
      <header className="flex items-center gap-1 p-2 mb-10">
        <img className="w-16 h-16" src={logo} alt="logo" />
        <div className="text-3xl font-extrabold">StoryDigest</div>
      </header>
      <div className="flex flex-col gap-8 p-2 items-center text-center justify-center">
        <div className="text-5xl font-bold">
          <p>Summarize Articles with</p>
          <span className="bg-gradient-to-r from-amber-500 to-pink-600 text-transparent bg-clip-text font-extrabold">
            OpenAI GPT-4
          </span>
        </div>
        <p className="text-xl text-gray-600 max-w-4xl">
          Enhance your reading experience with StoryDigest, a cutting-edge
          open-source tool. Leveraging the advanced capabilities of GPT-4,
          StoryDigest transforms lengthy articles into brief, easy-to-digest
          summaries.
        </p>
      </div>
    </div>
  );
};

export default Hero;
