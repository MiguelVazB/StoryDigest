import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="gap-4">
      <header>
        <img className="w-20 h-20" src={logo} alt="logo" />
      </header>
      <div className="flex flex-col gap-2 items-center text-center justify-center">
        <div className="text-4xl font-bold">
          <p>Summarize Articles with</p>
          <span className="text-blue-500 font-bold">OpenAi GPT-4</span>
        </div>
        <p className="text-lg text-gray-700">
          Simplify your reading with StoryDigest, an open-source article
          summarizer. StoryDigest uses the power of GPT-4 to summarize long
          articles into short and concise summaries.
        </p>
      </div>
    </div>
  );
};

export default Hero;
