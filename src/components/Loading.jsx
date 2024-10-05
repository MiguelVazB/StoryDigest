import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 p-2 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loading;
