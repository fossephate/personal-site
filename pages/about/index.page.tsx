import React from 'react';
import Nav from "../../src/common/components/Nav";
import Footer from "../../src/common/components/Footer";

import profileImage from '../../src/assets/profile-vinny-bg2.png';

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
          <div className="dark:text-white max-w-4xl py-8 text-gray-600 space-y-6">

            <h1 className="text-3xl font-bold text-center pb-12">
              Hi 👋, thanks for stopping by, here's a little bit about me.
            </h1>

            <div className="space-y-2">
              <h1 className="bg-gray-300 dark:bg-gray-600 font-semibold px-4 py-1 rounded-md sm:text-lg">
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
                  If you have any questions or are interested in working with me, please feel free to reach out to me at&nbsp;
                  <a href="mailto:matt@fosse.co">matt@fosse.co</a>
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="bg-gray-300 dark:bg-gray-600 font-semibold px-4 py-1 rounded-md sm:text-lg">
                Professional Projects
              </h1>
              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md">
                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span>
                      <span>JoyCon-Driver </span>
                      <span className="text-sm font-normal italic">C/C++, Reverse Engineering</span>
                    </span>
                    <a href="https://github.com/fossephate/JoyCon-Driver" target="_blank" className="hidden sm:block">
                      github.com/fossephate/JoyCon-Driver
                    </a>
                  </div>
                  <ul className="ml-4 list-inside list-disc text-xs sm:text-base">
                    <li>The first-ever usermode driver for the Nintendo Switch JoyCons and Pro Controller</li>
                    <li>Currently used by thousands to play PC games with JoyCons / Pro Controller</li>
                    <li>Contributed to the Reverse Engineering efforts that made the project possible</li>
                  </ul>
                </li>

                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span>
                      <a href="https://nautilus.io">Nautilus - Cryptocurrency Wallet </a>
                      <span className="text-sm font-normal italic">Flutter, Dart, Kubernetes, iOS, Android</span>
                    </span>
                    <a href="https://nautilus.io" target="_blank" className="hidden sm:block">
                      nautilus.io
                    </a>
                  </div>
                  <ul className="ml-4 list-inside list-disc text-xs sm:text-base">
                    <li>One of the most advanced cryptocurrency wallets out there, with first-class design and utility</li>
                    <li>Available on the App and Google Play Store</li>
                  </ul>
                </li>

                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span>
                      <span>Remote Games </span>
                      <span className="text-sm font-normal italic">React, Node.js, C++, Python</span>
                    </span>
                    <a href="https://remotegames.io" target="_blank" className="hidden sm:block">
                      remotegames.io
                    </a>
                  </div>
                  <ul className="ml-4 list-inside list-disc text-xs sm:text-base">
                    <li>Developed software and hardware to share my Nintendo Switch with the internet</li>
                    <li>Full keyboard, mouse, and controller integration complete with mappable inputs</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h1 className="bg-gray-300 dark:bg-gray-600 font-semibold px-4 py-1 rounded-md text-md sm:text-lg">
                Work Experience
              </h1>

              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md text-sm sm:text-base">
                <li className="my-2">
                  <div className="flex flex-row justify-between">
                    <span className="">Software Engineer and Lead Architect</span>
                    <span className="font-semibold">Perish Software Solutions (Feb 2022 - Present)</span>
                  </div>
                  <ul className="ml-4 list-inside list-disc">
                    <li>Designed and built products for the cryptocurrency community</li>
                    <li>Utilized the latest in cryptographic technologies to innovate new user experiences</li>
                    <li>Worked to build decentralized and reliable product solutions that scale</li>
                  </ul>
                </li>
              </ul>

              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md text-sm sm:text-base">
                <li className="my-2">
                  <div className="flex flex-row justify-between">
                    <span className="">Software Engineer and Vulnerability Researcher</span>
                    <span className="font-semibold">Raytheon Technologies (May 2019 - Feb 2022)</span>
                  </div>
                  <ul className="ml-4 list-inside list-disc">
                    <li>
                      <b>Specifics are under NDA</b>
                    </li>
                    <li>Utilized 3 years of professional experience in software development and research</li>
                    <li>Analyzed hardware, software, and network applications with and without source code</li>
                    <li>Leveraged static and dynamic software analysis tools such as IDA Pro, Ghidra, and Binary Ninja</li>
                    <li>Developed and reverse engineered primarily in assembly languages and C/C++/Python</li>
                    <li>Acquired extensive experience with Android and Ghidra Development</li>
                    <li>Contributed to the development of mission-critical systems and technologies</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-7 gap-4 border-2 dark:border-gray-700 dark:bg-gray-800 rounded-md">
              <div className="col-span-7 bg-gray-300 dark:bg-gray-700 px-4 py-2 font-semibold sm:text-lg">
                Skills
              </div>
              <div className="px-4 py-2 sm:text-lg font-medium col-span-2">Languages</div>
              <div className="px-4 py-2 text-sm sm:text-base col-span-5">
                Rust, JavaScript/Typescript, Dart, Python2/3, Go, C#, C/C++, Java, Lua
              </div>
              <div className="px-4 py-2 sm:text-lg font-medium col-span-2">Frameworks</div>
              <div className="px-4 py-2 text-sm sm:text-base col-span-5">
                Node.js, React, Redux, Next.js, Tailwind CSS, PostgresSQL, Flutter
              </div>
              <div className="px-4 py-2 sm:text-lg font-medium col-span-2">Tech</div>
              <div className="px-4 py-2 text-sm sm:text-base col-span-5">
                Git, Docker, Kubernetes, Amazon AWS, Google Cloud, MongoDB, Server Administration, Fusion 360, Unity 3D
              </div>
              {/* <div className="px-4 py-2 text-lg font-medium">RE Tools</div>
  <div className="px-4 py-2 col-span-4">IDA Pro, Ghidra (Both Reverse Engineering and Development), Binary Ninja</div> */}
            </div>

            <div className="space-y-2">
              <h1 className="bg-gray-300 dark:bg-gray-600 font-semibold px-4 py-1 font-semibold sm:text-lg">Education</h1>
              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-8 sm:text-base text-xs">
                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span>
                      <span>AS Computer Science </span>
                      <span className="text-sm font-normal italic">University of Central Florida, Orlando</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>


          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
