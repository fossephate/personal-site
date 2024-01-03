'use client'
import React from "react";
import Image from 'next/image';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SoftwareProjects from "@/components/SoftwareProjects";
import HardwareProjects from "@/components/HardwareProjects";

import profileImage from "@/assets/images/profile/profile-vinny.png";
import BubblesBackground from "@/components/BubblesBackground";

export default function Home() {

  const imageUrls = [
    require('@/assets/images/compliments/IMG_0250.png'),
    require('@/assets/images/compliments/IMG_0286.png'),
    require('@/assets/images/compliments/IMG_0304.png'),
    require('@/assets/images/compliments/IMG_0329.png'),
    require('@/assets/images/compliments/IMG_0330.png'),
    require('@/assets/images/compliments/IMG_0331.png'),
    require('@/assets/images/compliments/IMG_0332.png'),
    require('@/assets/images/compliments/IMG_0333.png'),
    require('@/assets/images/compliments/IMG_0334.png'),
    require('@/assets/images/compliments/IMG_0335.png'),
    require('@/assets/images/compliments/IMG_0336.png'),
    require('@/assets/images/compliments/IMG_0337.png'),
    require('@/assets/images/compliments/IMG_0338.png'),
    require('@/assets/images/compliments/IMG_0339.png'),
    require('@/assets/images/compliments/IMG_0340.png'),
    require('@/assets/images/compliments/IMG_0341.png'),
    require('@/assets/images/compliments/IMG_0342.png'),
    require('@/assets/images/compliments/IMG_0343.png'),
    require('@/assets/images/compliments/IMG_0344.png'),
    require('@/assets/images/compliments/IMG_0345.png'),
    require('@/assets/images/compliments/IMG_0346.png'),
    require('@/assets/images/compliments/IMG_0347.png'),
    require('@/assets/images/compliments/IMG_0348.png'),
    require('@/assets/images/compliments/IMG_0349.png'),
    require('@/assets/images/compliments/IMG_0350.png'),
    require('@/assets/images/compliments/IMG_0351.png'),
    require('@/assets/images/compliments/IMG_0352.png'),
    require('@/assets/images/compliments/IMG_0353.png'),
  ];

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white overflow-y-auto">
      <BubblesBackground imageUrls={imageUrls} />
      <div className="w-full max-w-5xl mx-auto p-8 z-30 relative">
        <div className="font-mono">
          <Nav />
        </div>
        <main className="my-12 font-mono w-full dark:bg-gray-900 bg-gray-200 rounded-lg p-12 flex justify-between items-center <sm:flex-col sm:flex-row">
          <div className="<sm:w-full sm:w-1/2 space-y-4">
            <div className="<sm:block sm:hidden w-full">
              <Image
                src={profileImage}
                className="bg-gradient-to-r p-[5px] from-[#9736F4] to-[#ff0080] rounded-full object-cover w-32 h-32 mx-auto"
                alt="profile image"
              />
            </div>
            <h1 className="dark:text-gray-300 text-gray-700 text-3xl font-bold <sm:text-center sm:text-left">
              Hi 👋
              <br />
              I'm <span className="whitespace-nowrap">Matthew Fosse</span>
            </h1>
            <p className="dark:text-gray-400 text-gray-600 <sm:text-center sm:text-left">
              24 Year Old Software Engineer<br /> and Hardware Hacker based in Seattle
            </p>
            <div className="flex <sm:flex-col sm:flex-row gap-4">
              <a href="mailto:matt@fosse.co">
                <button
                  className="!bg-[#9736f4] hover:text- w-full border-2 !border-[#9736f4] rounded-md text-white px-4 py-2 whitespace-nowrap"
                  type="button"
                >
                  Contact me
                </button>
              </a>
              <a href="/about">
                <button
                  className="w-full border-2 !border-[#9736F4] rounded-md dark:text-white text-gray-700 px-4 py-2 whitespace-nowrap"
                  type="button"
                >
                  Learn more
                </button>
              </a>
            </div>
          </div>
          <div className="<sm:hidden sm:block">
            <Image
              src={profileImage}
              className="bg-gradient-to-r p-[7px] from-[#9736F4] to-[#ff0080] w-56 h-56 rounded-full object-cover"
              alt="profile image"
            />
          </div>
        </main>
        <section className="font-mono dark:text-white text-gray-500">
          <h1 className="dark:text-white text-3xl font-bold text-gray-600 mb-3">Socials</h1>
          <div className="flex <sm:flex-col sm:flex-row justify-between gap-4">
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
            {/* <a href="/tools" className="w-full">
              <button className="dark:bg-gray-600 dark:hover:bg-[#9736F4] transition-colors duration-100 ease-in-out bg-gray-200 hover:bg-[#9736F4] hover:text-white rounded-md w-full px-4 py-2">
                Tools
              </button>
            </a> */}
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
  );
}
