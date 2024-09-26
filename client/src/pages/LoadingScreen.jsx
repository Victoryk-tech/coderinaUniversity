import React, { useEffect, useState } from "react";

const Loader = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);

  // Simulate the loading process
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 170) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Simulate a short delay before hiding loader
          return 100;
        }
        return oldProgress + 10; // Increase progress by 10 every interval
      });
    }, 500); // Adjust the speed of the loading progress
  }, [setIsLoading]);

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-indigo-50">
      <div className="relative text-4xl font-bold text-indigo-900 md:text-9xl">
        <div
          className="absolute top-0 left-0 overflow-hidden text-indigo-600 transition-all duration-500 ease-linear"
          style={{
            width: `${progress}%`,
          }}
        >
          Coderina University
        </div>
        <div className="opacity-40">Coderina </div>{" "}
        {/* Static background text */}
      </div>
    </div>
  );
};

export default Loader;
