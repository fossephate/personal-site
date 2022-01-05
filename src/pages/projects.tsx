import React from "react";

import ProjectList from "~/common/components/ProjectList.tsx";

export default function () {
  return (
    <div className="page">
      <head>
        <title>Fosse</title>
      </head>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
        <div
          className="font-mono h-full relative py-8 flex items-center bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 px-4 sm:px-8"
          style={{ cursor: "auto" }}
        >
          <section
            className="w-full max-w-5xl mx-auto px-2 sm:px-6 py-4"
            style={{ cursor: "auto" }}
          >
            <div
              className="py-2 flex flex-col items-center w-full justify-center"
              style={{ cursor: "auto" }}
            >
              <a href="/">
                <img
                  src="/assets/profile-square.png"
                  className="bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] rounded-full w-28 sm:w-40 hover:opacity-90"
                />
              </a>
              <div className="text-center py-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 pb-4">
                  Side Projects
                </h1>
                <p className="text-gray-50 text-md sm:text-lg max-w-xl">
                  Here's a list of my side projects in full. They might be
                  useful or just plain cool, so be sure to check them out 🎉
                </p>
              </div>
            </div>
            <ProjectList />
            <div className="pt-8 flex justify-center">
              <div className=" rounded bg-white p-1 ">
                <a
                  className=" bg-gradient-to-tr  from-purple-600  to-pink-400 hover:from-pink-400 hover:to-purple-500 inline-block px-4 py-2 text-lg rounded-md text-white "
                  href="/"
                >
                  Back home
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
