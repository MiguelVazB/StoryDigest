import logo from "../assets/logo-removebg.png";

const Hero = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <header className="flex w-full items-center justify-between gap-2 p-4 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-1 sm:gap-2">
          <img className="w-12 h-12 sm:w-16 sm:h-16" src={logo} alt="StoryDigest logo" width="64" height="64" loading="eager" />
          <div className="text-2xl sm:text-3xl font-extrabold dark:text-white">StoryDigest</div>
        </div>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-3 py-2 sm:px-4 sm:py-2 rounded-md transition duration-300 ease-in-out text-sm sm:text-base whitespace-nowrap"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>
      <div className="flex flex-col gap-8 p-2 items-center text-center justify-center">
        <div className="text-5xl font-bold dark:text-white">
          <p>Summarize Articles with</p>
          <span className="bg-gradient-to-r from-amber-500 to-pink-600 text-transparent bg-clip-text font-extrabold">
            OpenAI GPT-4
          </span>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl">
          Enhance your reading experience with StoryDigest, a cutting-edge
          open-source tool. Leveraging the advanced capabilities of GPT-4,
          StoryDigest transforms lengthy articles into brief, easy-to-digest
          summaries.
        </p>
      </div>
    </>
  );
};

export default Hero;
