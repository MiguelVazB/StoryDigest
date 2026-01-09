import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className="gradient-background dark:bg-gray-900 gap-16 flex flex-col items-center transition-colors duration-300">
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Demo />
    </main>
  );
};

export default App;
