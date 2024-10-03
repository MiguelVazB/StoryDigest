import React from "react";

const Demo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[85%] bg-white items-center justify-center rounded-md overflow-hidden shadow-lg"
    >
      <input
        className="w-full max-w-3xl p-2"
        type="text"
        placeholder="Enter article URL"
      />
      <button
        type="submit"
        className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-r transition duration-300 ease-in-out"
      >
        Summarize
      </button>
    </form>
  );
};

export default Demo;
