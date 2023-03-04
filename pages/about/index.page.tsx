import React from 'react';
import Nav from "../../src/common/components/Nav";
import Footer from "../../src/common/components/Footer";

import profileImage from '../../src/assets/profile-vinny-bg2.png';

export { Page };

function Page() {
  return (
    <div className="page bg-white dark:bg-gray-800 dark:text-white overflow-y-auto min-h-screen">
      <div className="w-full max-w-5xl mx-auto p-8">
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
              <h1 className="bg-gray-300 dark:bg-gray-600 font-semibold px-4 py-1">
                About Me
              </h1>

              <div className="bg-gray-200 dark:bg-gray-700 p-2 flex flex-col space-y-2">
                <p>
                  Hi there, I'm Matthew Fosse, a 23 year old software engineer and hardware hacker from Florida. With over 3 years of professional experience, I specialize in vulnerability research and software development. I have experience analyzing hardware, software, and network applications with and without source code. My expertise lies in Web Development, Reverse Engineering, and Hardware Hacking, and I have extensive development and reverse engineering experience with Android and Ghidra in particular.
                </p>

                <p>
                  I am also an avid maker and enjoy working on my own projects, ranging from custom drivers for gaming controllers, to advanced cryptocurrency wallets, to modded hardware like a 1TB Bluetooth iPod Classic. My skills include Software Development, Electrical Engineering, 3D printing (Fusion 360), Game Development, and more.
                </p>
                <p>
                  You can find most of my projects either here on my website, or on my github <a className="font-medium" href="https://github.com/fossephate">https://github.com/fossephate</a>
                </p>
                <p>
                  If you have any questions or are interested in working with me, please feel free to reach out to me at&nbsp;
                  <a href="mailto:matt@fosse.co">matt@fosse.co</a>
                </p>
              </div>
            </div>


            <div className="space-y-2">
              <h1 className="bg-gray-300 dark:bg-gray-600 font-semibold px-4 py-1">
                Professional Projects
              </h1>
              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-8">

                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span>
                      <span>JoyCon-Driver </span>
                      <span className="text-sm font-normal italic">C/C++, Reverse Engineering</span>
                    </span>
                    <a href="https://github.com/fossephate/JoyCon-Driver" target="_blank">github.com/fossephate/JoyCon-Driver</a>
                  </div>
                  <ul className="ml-4 list-inside list-disc">
                    <li>The first ever usermode driver for the Nintendo Switch JoyCons and Pro Controller</li>
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
                    <a href="https://nautilus.io" target="_blank">nautilus.io</a>
                  </div>
                  <ul className="ml-4 list-inside list-disc">
                    <li>One of the most advanced cryptocurrency wallets out there, with first class design and utility</li>
                    <li>Availiable on the App and Google Play Store</li>
                  </ul>
                </li>

                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span>
                      <span>Remote Games </span>
                      <span className="text-sm font-normal italic">React, Node.js, C++, Python</span>
                    </span>
                    <a href="https://remotegames.io" target="_blank">remotegames.io</a>
                  </div>
                  <ul className="ml-4 list-inside list-disc">
                    <li>Developed software and hardware to share my Nintendo Switch with the internet</li>
                    <li>Full keyboard, mouse, and controller integration complete with mappable inputs</li>
                  </ul>
                </li>

              </ul>
            </div>


            <div className="space-y-2">
              <h1 className="bg-gray-300 dark:bg-gray-600 font-semibold px-4 py-1">
                Work Experience
              </h1>
              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-8">
                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span className="">Software Engineer and Vulnerability Researcher</span>
                    <span className="font-semibold">Raytheon Technologies (May 2019 - 2022)</span>
                  </div>
                  <ul className="ml-4 list-inside list-disc">
                    <li><b>Specifics are under NDA</b></li>
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

            <table className="table-auto border-2 dark:border-gray-700 rounded-lg dark:bg-gray-800">
              <thead>
                <tr className="bg-gray-300 dark:bg-gray-700">
                  <th className="px-4 py-2">Skills</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-lg font-medium">Languages</td>
                  <td className="px-4 py-2">Rust, JavaScript/Typescript, Python3, C/C++, Java, Lua, x86 + PowerPC Assembly</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-lg font-medium">Frameworks</td>
                  <td className="px-4 py-2">
                    Node.js, React, Redux, Next.js, Tailwind CSS, PostgresSQL
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-lg font-medium">Tech</td>
                  <td className="px-4 py-2">Git, Docker, Kubernetes, Amazon AWS, Google Cloud, MongoDB, Server Administration, Fusion 360, Unity 3D</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-lg font-medium">RE Tools</td>
                  <td className="px-4 py-2">IDA Pro, Ghidra (Both Reverse Engineering and Development), Binary Ninja</td>
                </tr>
              </tbody>
            </table>


            <div className="space-y-2">
              <h1 className="bg-gray-300 dark:bg-gray-600 font-semibold px-4 py-1">
                Education
              </h1>
              <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-8">
                <li className="my-2">
                  <div className="flex flex-row justify-between font-medium">
                    <span>
                      <span>AS Computer Science </span>
                      <span className="text-sm font-normal italic">University of Central Florida, Orlando</span>
                    </span>
                    <span>Completed 2021</span>
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
