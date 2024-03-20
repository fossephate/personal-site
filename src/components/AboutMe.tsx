import React from 'react';
import Image from 'next/image';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import profileImage from '@/assets/images/profile/profile-vinny.png';

import SkillTags from '@/components/SkillTag';
import Link from 'next/link';

import styles from "./AboutMe.module.css";
import clsx from 'clsx';
import { calculateAge } from "@/utils/utils";


export default function AboutMe({ preview = false }) {
    return (
        <>
            <div className={clsx(preview && styles.maskedOverflow, "dark:text-white text-black")}>

                {!preview && (
                    <div className="space-y-2">
                        <h1 className="bg-purple-300 dark:bg-purple-600 font-semibold px-4 py-1 rounded-md sm:text-lg">
                            About Me
                        </h1>

                        <div className="bg-gray-200 dark:bg-gray-700 p-2 flex flex-col space-y-2 rounded-md">
                            <p className="text-base sm:text-lg">
                                Hi there, I&apos;m Matthew Fosse, a {calculateAge('1999-04-07')}-year-old software engineer and hardware hacker from Florida. With over 5 years of professional experience, I specialize in vulnerability research and software development. I have experience analyzing hardware, software, and network applications with and without source code. My expertise lies in Web Development, Reverse Engineering, and Hardware Hacking, and I have extensive development and reverse engineering experience with Android and Ghidra in particular.
                            </p>

                            <p className="text-base sm:text-lg">
                                I&apos;m also an avid maker and enjoy working on my own projects, ranging from custom drivers for gaming controllers to cryptocurrency wallets to modded iPod Classics. My skills include Software Development, Electrical Engineering, 3D printing (Fusion 360), Game Development, and more.
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

                    </div>
                )}

                {!preview && (
                    <div className="py-4">
                        <blockquote className="p-4 my-4 bg-gray-200 rounded-md border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-700">
                            <p className="md:text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white mb-6">&quot;Fun fact: My work has made it into the ChatGPT training data set! If you ask ChatGPT about &quot;Who wrote the JoyCon-Driver?&quot; it&apos;ll tell you about me!&quot;</p>
                            <a href="https://chat.openai.com" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-10 rounded">
                                Try it now!
                            </a>
                        </blockquote>
                    </div>
                )}


                {/* {!preview && (<div> */}
                <div className="space-y-8">

                    <div className="space-y-2">
                        <h1 className="bg-green-300 dark:bg-green-600 font-semibold px-4 py-1 rounded-md text-md sm:text-lg">
                            Work Experience
                        </h1>


                        <ul className="bg-gray-200 dark:bg-gray-700 list-inside px-4 sm:px-8 rounded-md py-1 text-sm sm:text-base">
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
                                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Added Bitcoin Lightning support</li>
                                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Responsible for the Tor protocol implementation</li>
                                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Added support for the Nano cryptocurrency</li>
                                    <li className="my-1 py-1 px-4 bg-white dark:bg-gray-800 rounded-md shadow">Designed and brought features to market in a timely manner</li>
                                </ul>
                            </li>
                        </ul>

                        {/* {preview && (
                            <>
                                <Link className="text-blue-500 hover:underline" href="/about">
                                    View More
                                </Link>
                                <div className="py-24"></div>
                            </>
                        )} */}

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
                        <h1 className="bg-blue-300 dark:bg-blue-600 font-semibold px-4 py-1 rounded-md text-md sm:text-lg">
                            Projects
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
                        <div className="col-span-7 bg-yellow-300 dark:bg-yellow-400 px-4 py-1 font-semibold sm:text-lg rounded-md">
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
            {preview && (
                <>
                    <Link className="text-blue-500 hover:underline text-center block" href="/about">
                        View More
                    </Link>
                </>
            )}
        </>
    );
}
