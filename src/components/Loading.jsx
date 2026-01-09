import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="animate-spin rounded-full h-10 w-10 p-2 border-t-4 border-blue-500"></div>
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  );
};

export default Loading;
