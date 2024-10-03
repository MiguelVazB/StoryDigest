import React from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

const App = () => {
  return (
    <main className="gradient-background gap-16 flex flex-col items-center">
      <Hero />
      <Demo />
    </main>
  );
};

export default App;
