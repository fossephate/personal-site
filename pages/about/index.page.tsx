import React from 'react';
import Nav from "../../src/common/components/Nav";
import Footer from "../../src/common/components/Footer";

import profileImage from '../../src/assets/profile-vinny-bg2.png';

import SkillTags from '../../src/common/components/SkillTag';

export { Page };

function Page() {
  return (
    <div className="page bg-white dark:bg-gray-800 dark:text-white overflow-y-auto min-h-screen">
      <div className="w-full md:max-w-5xl mx-auto px-4 p-8">
        <Nav />
        <div className="grid place-items-center mt-12" style={{ cursor: "auto" }}>
          <div className="py-8">
            <img
              src={profileImage}
              className="bg-gradient-to-r p-[7px] from-[#7928ca] to-[#ff0080] w-56 h-56 rounded-full object-cover"
            />
          </div>

          <div className="dark:text-white text-black max-w-4xl py-8 space-y-8">

            <h1 className="text-3xl font-bold text-center pb-12">
              Hi 👋, thanks for stopping by, here's a bit about me.
            </h1>

            <div className="space-y-2">
              <h1 className="bg-purple-300 dark:bg-purple-600 font-semibold px-4 py-1 rounded-md sm:text-lg">
                About Me
              </h1>

              <div className="bg-gray-200 dark:bg-gray-700 p-2 flex flex-col space-y-2 rounded-md">
                <p className="text-base sm:text-lg">
                  Hi there, I'm Matthew Fosse, a 24-year-old software engineer and hardware hacker from Florida. With over 3 years of professional experience, I specialize in vulnerability research and software development. I have experience analyzing hardware, software, and network applications with and without source code. My expertise lies in Web Development, Reverse Engineering, and Hardware Hacking, and I have extensive development and reverse engineering experience with Android and Ghidra in particular.
                </p>

                <p className="text-base sm:text-lg">
                  I am also an avid maker and enjoy working on my own projects, ranging from custom drivers for gaming controllers to advanced cryptocurrency wallets to modded hardware like a 1TB Bluetooth iPod Classic. My skills include Software Development, Electrical Engineering, 3D printing (Fusion 360), Game Development, and more.
                </p>
                <p className="text-base sm:text-lg">
                  You can find most of my projects either here on my website or on my GitHub{" "}
                  <a className="font-medium" href="https://github.com/fossephate">
                    https://github.com/fossephate
                  </a>
                </p>
                <p className="text-base sm:text-lg">
                  If you have any questions or are interested in working with me, please feel free to reach out at&nbsp;
                  <a href="mailto:matt@fosse.co">matt@fosse.co</a>
                </p>
              </div>
              <div className="py-2"></div>
              <blockquote className="p-4 my-4 bg-gray-200 rounded-md border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
                <p className="md:text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"Fun fact: My work has made it into the ChatGPT training data set! If you ask ChatGPT about "Who wrote the JoyCon-Driver?" it'll tell you about me!"</p>
              </blockquote>
            </div>

            <div className="space-y-2">
              <h1 className="bg-blue-300 dark:bg-blue-600 font-semibold px-4 py-1 rounded-md sm:text-lg">
                Professional Projects
              </h1>

              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md py-1">
                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span className="space-y-2">
                      <span className="md:text-lg bg-white dark:bg-gray-800 rounded-md px-2 py-1">JoyCon-Driver</span>
                      <SkillTags skills={["C/C++", "Reverse Engineering"]} />
                    </span>
                    <a href="https://github.com/fossephate/JoyCon-Driver" target="_blank" className="hidden sm:block">
                      github.com/fossephate/JoyCon-Driver
                    </a>
                  </div>
                  <ul className="md:ml-4 list-inside list-none md:list-disc text-xs sm:text-base">
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">The first-ever usermode driver for the Nintendo Switch JoyCons and Pro Controller</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Currently used by thousands to play PC games with JoyCons / Pro Controller</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Contributed to the Reverse Engineering efforts that made the project possible</li>
                  </ul>
                </li>
              </ul>

              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md py-1">
                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span className="space-y-2">
                      <a href="https://nautilus.io" className="md:text-lg bg-white dark:bg-gray-800 rounded-md px-2 py-1">Nautilus - Cryptocurrency Wallet </a>
                      <SkillTags skills={["Flutter", "Dart", "Kubernetes", "iOS", "Android"]} />
                    </span>
                    <a href="https://nautilus.io" target="_blank" className="hidden sm:block">
                      nautilus.io
                    </a>
                  </div>
                  <ul className="md:ml-4 list-inside list-none md:list-disc text-xs sm:text-base">
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Advanced cryptocurrency wallet, with first-class design and utility</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Available on the App and Google Play Store</li>
                  </ul>
                </li>
              </ul>

              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md py-1">
                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span className="space-y-2">
                      <span className="md:text-lg bg-white dark:bg-gray-800 rounded-md px-2 py-1">Remote Games</span>
                      <SkillTags skills={["React", "Node.js", "C++", "Python"]} />
                    </span>
                    <a href="https://remotegames.io" target="_blank" className="hidden sm:block">
                      remotegames.io
                    </a>
                  </div>
                  <ul className="md:ml-4 list-inside list-none md:list-disc text-xs sm:text-base">
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Developed software and hardware to share my Nintendo Switch with the internet</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Full keyboard, mouse, and controller integration complete with mappable inputs</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h1 className="bg-green-300 dark:bg-green-600 font-semibold px-4 py-1 rounded-md text-md sm:text-lg">
                Work Experience
              </h1>


              {/* <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md py-1 text-sm sm:text-base">
                <div className="flex flex-row justify-between pt-2">
                  <div className="flex flex-col items-start space-y-1">
                    <div className="text-lg bg-white dark:bg-gray-800 rounded-md px-2">Flutter Developer</div>
                    <div className="bg-white dark:bg-gray-800 rounded-md px-2">Cake Labs</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-md px-2 py-1 text-xs md:text-sm h-fit mt-1">
                    June 2023 - Present
                  </div>
                </div>
                <li className="my-2">
                  <ul className="md:ml-4 list-inside list-none md:list-disc">
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Designed and built products for the cryptocurrency community</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Brought features to market in a timely manner</li>
                  </ul>
                </li>
              </ul> */}

              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md py-1 text-sm sm:text-base">
                <div className="flex flex-row justify-between pt-2">
                  <div className="flex flex-col items-start space-y-1">
                    <div className="text-lg bg-white dark:bg-gray-800 rounded-md px-2">Software Engineer</div>
                    <div className="bg-white dark:bg-gray-800 rounded-md px-2">Perish Software Solutions</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-md px-2 py-1 text-xs md:text-sm h-fit mt-1">
                    Feb 2022 - June 2023
                  </div>
                </div>
                <li className="my-2">
                  <ul className="md:ml-4 list-inside list-none md:list-disc">
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Designed and built products for the cryptocurrency community</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Utilized the latest in cryptographic technologies to innovate new user experiences</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Worked to build decentralized and reliable product solutions that scale</li>
                  </ul>
                </li>
              </ul>


              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md py-1 text-sm sm:text-base">
                <div className="flex flex-row justify-between pt-2">
                  <div className="flex flex-col items-start space-y-1">
                    <div className="text-lg bg-white dark:bg-gray-800 rounded-md px-2 w-max">Vulnerability Researcher</div>
                    <div className="bg-white dark:bg-gray-800 rounded-md px-2">Raytheon Technologies</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-md px-2 py-1 text-xs md:text-sm h-fit mt-1 ml-2">
                    May 2019 - Feb 2022
                  </div>
                </div>
                <li className="my-2">
                  <ul className="md:ml-4 list-inside list-none md:list-disc">
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Utilized 3 years of professional experience in software development and research</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Analyzed hardware, software, and network applications with and without source code</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Leveraged static and dynamic software analysis tools such as IDA Pro, Ghidra, and Binary Ninja</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Developed and reverse engineered primarily in assembly languages and C/C++/Python</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Acquired extensive experience with Android and Ghidra Development</li>
                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Contributed to the development of mission-critical systems and technologies</li>
                  </ul>
                </li>
              </ul>
            </div>


            <div className="space-y-2">
              <div className="col-span-7 bg-yellow-300 dark:bg-yellow-400 px-4 py-2 font-semibold sm:text-lg rounded-md">
                Skills
              </div>
              <div className="grid grid-cols-7 gap-4 p-2 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 rounded-md">
                <div className="px-4 py-2 sm:text-lg font-medium col-span-2">Languages</div>
                <div className="px-4 py-2 text-sm sm:text-base col-span-5 bg-white dark:bg-gray-800 rounded-md shadow">
                  Rust, JavaScript/Typescript, Dart, Python2/3, Go, C#, C/C++, Java, Lua
                </div>
                <div className="px-4 py-2 sm:text-lg font-medium col-span-2">Frameworks</div>
                <div className="px-4 py-2 text-sm sm:text-base col-span-5 bg-white dark:bg-gray-800 rounded-md shadow">
                  Node.js, React, Redux, Next.js, Tailwind CSS, PostgresSQL, Flutter
                </div>
                <div className="px-4 py-2 sm:text-lg font-medium col-span-2">Tech</div>
                <div className="px-4 py-2 text-sm sm:text-base col-span-5 bg-white dark:bg-gray-800 rounded-md shadow">
                  Git, Docker, Kubernetes, Amazon AWS, Google Cloud, MongoDB, Server Administration, Fusion 360, Unity 3D
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="bg-red-300 dark:bg-red-600 font-semibold px-4 py-1 font-semibold sm:text-lg rounded-md">Education</h1>
              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-8 sm:text-base text-xs rounded-md">
                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    {/* <span> */}
                    <span>AS Computer Science </span>
                    <span className="text-sm font-normal italic">University of Central Florida, Orlando</span>
                    {/* </span> */}
                  </div>
                </li>
              </ul>
            </div>


          </div>
        </div>
        <Footer />
      </div >
    </div >
  );
}
