import React from "react";
import Nav from "../../src/common/components/Nav";
import SoftwareProjects from "../../src/common/components/SoftwareProjects";
import HardwareProjects from "../../src/common/components/HardwareProjects";


export { Page };

function Page() {
  return (
    <div className="page">
      <div className="bg-white dark:bg-gray-800 dark:text-white overflow-y-auto">
        <div className="w-full max-w-5xl mx-auto p-8 flex flex-col h-screen">
          <div className="font-mono">
            <Nav />
          </div>
          {/* <div
          className="font-mono h-full relative py-8 flex items-center bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 px-4 sm:px-8"
          style={{ cursor: "auto" }}
        > */}
          {/* <div className="bg-white dark:bg-gray-800 dark:text-white font-mono"> */}
          {/* <div className="max-w-5xl mx-auto p-8">
            <Nav />
          </div> */}
          {/* <section className="w-full max-w-5xl mx-auto px-2 sm:px-6 py-4"> */}
          <div className="my-12 py-2 flex flex-col items-center w-full justify-center dark:bg-gray-900 bg-gray-200 rounded-lg">
            {/* <a href="/">
              <img
                src={profileSquare}
                className="bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] rounded-full hover:opacity-90 object-cover w-56 h-56"
              />
            </a> */}
            <div className="text-center py-8">
              <h1 className="<sm:text-3xl sm:text-4xl font-bold dark:text-gray-100 pb-4">Projects</h1>
              <p className="dark:text-gray-50 <sm:text-md sm:text-lg max-w-xl">
                Here's a list of some of my favorite projects. They might be useful or just plain cool, so be sure to
                check them out 🎉
              </p>
            </div>
          </div>
          <h1 className="my-5 dark:text-white text-3xl font-bold text-gray-600">Software Projects</h1>
          <SoftwareProjects />
          <h1 className="my-5 mt-8 dark:text-white text-3xl font-bold text-gray-600">Hardware Projects</h1>
          <HardwareProjects />
          <div className="py-8 items-end flex justify-center grow">
            <a href="/" className="w-full">
              <button className="dark:bg-gray-600 dark:hover:bg-[#9736F4] transition-colors duration-100 ease-in-out bg-gray-200 hover:bg-[#9736F4] hover:text-white rounded-md w-full px-4 py-2">
                Back Home
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
