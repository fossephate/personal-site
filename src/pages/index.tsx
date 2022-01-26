import React from "react";
import { useEffect } from "react";
import { useDeno } from "aleph/react";

import Nav from "~/common/components/Nav.tsx";
import SoftwareProjects from "~/common/components/SoftwareProjects.tsx";
import HardwareProjects from "~/common/components/HardwareProjects.tsx";
import Footer from "~/common/components/Footer.tsx";

export default function Home() {
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <head>
        <title>fosse</title>
      </head>

      <div className="bg-white dark:bg-gray-800 dark:text-white overflow-y-auto">
        <div className="w-full max-w-5xl mx-auto p-8">
          <div className="font-mono">
            <Nav />
          </div>
          <main className="my-12 font-mono w-full dark:bg-gray-900 bg-gray-100 rounded-lg p-12 flex justify-between items-center flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 space-y-4">
              <div className="block sm:hidden w-full">
                <img
                  src="/assets/profile-square.png"
                  className="bg-gradient-to-r p-[5px] from-[#9736F4] to-[#ff0080] rounded-full object-cover w-32 h-32 mx-auto"
                />
              </div>
              <h1 className="dark:text-gray-300 text-gray-700 text-3xl font-bold text-center sm:text-left">
                Hi 👋
                <br />
                I'm <span className="whitespace-nowrap">Matthew Fosse</span>
              </h1>
              <p className="dark:text-gray-400 text-gray-600 text-center sm:text-left">
                Software Engineer and Vulnerability Researcher based in Florida
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:fossephate@gmail.com">
                  <button
                    className="dark:hover:text-gray-300 hover:text-gray-300 w-full border-2 border-[#9736f4] bg-[#9736f4] rounded-md text-white px-4 py-2 whitespace-nowrap"
                    type="button"
                  >
                    Contact me
                  </button>
                </a>
                <a href="/about">
                  <button
                    className="dark:hover:text-gray-300 hover:text-gray-300 w-full border-2 border-[#9736F4] rounded-md dark:text-white text-gray-700 px-4 py-2 whitespace-nowrap"
                    type="button"
                  >
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="hidden sm:block">
              <img
                src="/assets/profile-square.png"
                className="bg-gradient-to-r p-[7px] from-[#9736F4] to-[#ff0080] w-56 h-56 rounded-full object-cover"
              />
            </div>
          </main>
          <section className="font-mono dark:text-white text-gray-500">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <a href="https://github.com/fossephate" target="_blank" className="w-full">
                <button className="dark:bg-gray-600 dark:hover:bg-[#9736F4] transition-colors duration-100 ease-in-out bg-gray-200 hover:bg-[#9736F4] hover:text-white rounded-md w-full px-4 py-2">
                  Github
                </button>
              </a>
              <a href="https://linkedin.com/in/matthew-fosse-129305155/" target="_blank" className="w-full">
                <button className="dark:bg-gray-600 dark:hover:bg-[#9736F4] transition-colors duration-100 ease-in-out bg-gray-200 hover:bg-[#9736F4] hover:text-white rounded-md w-full px-4 py-2">
                  Linkedin
                </button>
              </a>
              <a href="https://twitter.com/fossephate" target="_blank" className="w-full">
                <button className="dark:bg-gray-600 dark:hover:bg-[#9736F4] transition-colors duration-100 ease-in-out bg-gray-200 hover:bg-[#9736F4] hover:text-white rounded-md w-full px-4 py-2">
                  Twitter
                </button>
              </a>
              <a href="/projects" className="w-full">
                <button className="dark:bg-gray-600 dark:hover:bg-[#9736F4] transition-colors duration-100 ease-in-out bg-gray-200 hover:bg-[#9736F4] hover:text-white rounded-md w-full px-4 py-2">
                  Projects
                </button>
              </a>
              <a href="/tools" className="w-full">
                <button className="dark:bg-gray-600 dark:hover:bg-[#9736F4] transition-colors duration-100 ease-in-out bg-gray-200 hover:bg-[#9736F4] hover:text-white rounded-md w-full px-4 py-2">
                  Tools
                </button>
              </a>
              {/* <a href="/hardware" target="_blank" className="w-full">
                <button className="dark:bg-gray-600 dark:hover:bg-[#9736F4] transition-colors duration-100 ease-in-out bg-gray-200 hover:bg-[#9736F4] hover:text-white rounded-md w-full px-4 py-2">
                  Hardware
                </button>
              </a> */}
            </div>
          </section>
          <section className="space-y-4 my-12">
            <div className="pb-4 flex justify-between">
              <h1 className="dark:text-white text-3xl font-bold text-gray-600">Software Projects</h1>
              <a href="/projects" className="dark:text-white text-black hover:text-[#9736F4] hover:underline">
                View all
              </a>
            </div>
            <SoftwareProjects />
          </section>
          <section className="space-y-4 my-12">
            <div className="pb-4 flex justify-between">
              <h1 className="dark:text-white text-3xl font-bold text-gray-600">Hardware Projects</h1>
              <a href="/projects" className="dark:text-white text-black hover:text-[#9736F4] hover:underline">
                View all
              </a>
            </div>
            <HardwareProjects />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}