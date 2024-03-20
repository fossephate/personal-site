'use client'
import React from "react";
import Image from 'next/image';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SoftwareProjects from "@/components/SoftwareProjects";
import HardwareProjects from "@/components/HardwareProjects";

import profileImage from "@/assets/images/profile/profile-vinny.png";
import BubblesBackground from "@/components/BubblesBackground";
import AboutMe from "@/components/AboutMe";
import { calculateAge } from "@/utils/utils";

export default function Home() {

  // const imageUrls = [
  //   require('@/assets/images/compliments/IMG_0250.png'),
  //   require('@/assets/images/compliments/IMG_0286.png'),
  //   require('@/assets/images/compliments/IMG_0304.png'),
  //   require('@/assets/images/compliments/IMG_0329.png'),
  //   require('@/assets/images/compliments/IMG_0330.png'),
  //   require('@/assets/images/compliments/IMG_0331.png'),
  //   require('@/assets/images/compliments/IMG_0332.png'),
  //   require('@/assets/images/compliments/IMG_0333.png'),
  //   require('@/assets/images/compliments/IMG_0334.png'),
  //   require('@/assets/images/compliments/IMG_0335.png'),
  //   require('@/assets/images/compliments/IMG_0336.png'),
  //   require('@/assets/images/compliments/IMG_0337.png'),
  //   require('@/assets/images/compliments/IMG_0338.png'),
  //   require('@/assets/images/compliments/IMG_0339.png'),
  //   require('@/assets/images/compliments/IMG_0340.png'),
  //   require('@/assets/images/compliments/IMG_0341.png'),
  //   require('@/assets/images/compliments/IMG_0342.png'),
  //   require('@/assets/images/compliments/IMG_0343.png'),
  //   require('@/assets/images/compliments/IMG_0344.png'),
  //   require('@/assets/images/compliments/IMG_0345.png'),
  //   require('@/assets/images/compliments/IMG_0346.png'),
  //   require('@/assets/images/compliments/IMG_0347.png'),
  //   require('@/assets/images/compliments/IMG_0348.png'),
  //   require('@/assets/images/compliments/IMG_0349.png'),
  //   require('@/assets/images/compliments/IMG_0350.png'),
  //   require('@/assets/images/compliments/IMG_0351.png'),
  //   require('@/assets/images/compliments/IMG_0352.png'),
  //   require('@/assets/images/compliments/IMG_0353.png'),
  // ];

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white overflow-y-auto">
      <div className="w-full max-w-5xl mx-auto p-8 z-30 relative">
        <div className="font-mono">
          <Nav />
        </div>
        <main className="my-12 font-mono w-full dark:bg-gray-900 bg-gray-200 rounded-lg p-12 flex justify-between items-center flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 space-y-4">
            <div className="block sm:hidden w-full">
              <Image
                src={profileImage}
                className="bg-gradient-to-r p-[5px] from-[#9736F4] to-[#ff0080] rounded-full object-cover w-32 h-32 mx-auto"
                alt="profile image"
              />
            </div>
            <h1 className="dark:text-gray-300 text-gray-700 text-3xl font-bold text-center sm:text-left">
              Hi 👋
              <br />
              I&apos;m <span className="whitespace-nowrap">Matthew Fosse</span>
            </h1>
            <p className="dark:text-gray-400 text-gray-600 text-center sm:text-left">
              {calculateAge('1999-04-07')} Year Old Software Engineer<br /> and Hardware Hacker based in Seattle
            </p>
            <div>
              <div className=" flex gap-6" style={{ cursor: "pointer" }}>
                <a className="group -m-1 p-1" aria-label="Follow on Twitter" href="https://twitter.com/fossephate">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                    <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z" />
                  </svg>
                </a>
                <a className="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com/fossephate">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z" />
                  </svg>
                </a>
                <a className="group -m-1 p-1" aria-label="Follow on LinkedIn" href="https://linkedin.com/in/matthew-fosse-129305155/">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                  </svg>
                </a>
                <a className="group -m-1 p-1" aria-label="Send me an Email" href="mailto:matt@fosse.co">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden sm:visible sm:block">
            <Image
              src={profileImage}
              className="bg-gradient-to-r p-[7px] from-[#9736F4] to-[#ff0080] w-56 h-56 rounded-full object-cover"
              alt="profile image"
            />
          </div>
        </main>

        <section className="space-y-4 my-12">
          <div className="pb-4 flex justify-between">
            <h1 className="dark:text-white text-3xl font-bold text-gray-600">About Me</h1>
          </div>
          <AboutMe preview={true} />
        </section>
        <section className="space-y-4 my-12">
          <div className="pb-4 flex justify-between">
            <h1 className="dark:text-white text-3xl font-bold text-gray-600">Software Projects</h1>
          </div>
          <SoftwareProjects />
        </section>
        <section className="space-y-4 my-12">
          <div className="pb-4 flex justify-between">
            <h1 className="dark:text-white text-3xl font-bold text-gray-600">Hardware Projects</h1>
          </div>
          <HardwareProjects />
        </section>
        {/* <section className="space-y-4 my-12">
          <div className="pb-4 flex justify-between">
            <h1 className="dark:text-white text-3xl font-bold text-gray-600">Reviews</h1>
          </div>
          <div className="h-[800px] bg-gray-400 rounded-lg">
            <BubblesBackground imageUrls={imageUrls} />
          </div>
        </section> */}
        <Footer />
      </div >
    </div >
  );
}
