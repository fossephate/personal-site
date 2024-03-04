import React from 'react';
import Image from 'next/image';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import profileImage from '@/assets/images/profile/profile-vinny.png';

import SkillTags from '@/components/SkillTag';
import AboutMe from '@/components/AboutMe';


export default function Page() {
  return (
    <div className="page bg-white dark:bg-gray-800 dark:text-white overflow-y-auto min-h-screen">
      <div className="w-full md:max-w-5xl mx-auto px-4 p-8">
        <Nav />
        <div className="grid place-items-center mt-12" style={{ cursor: "auto" }}>
          <div className="py-8">
            <Image
              alt="profile photo"
              src={profileImage}
              className="bg-gradient-to-r p-[7px] from-[#7928ca] to-[#ff0080] w-56 h-56 rounded-full object-cover"
            />
          </div>

          <div className="dark:text-white text-black max-w-4xl py-8 space-y-8">

            <h1 className="text-3xl font-bold text-center pb-12">
              Hi 👋, thanks for stopping by, here&apos;s a bit about me.
            </h1>

            <AboutMe preview={false} />


          </div>
        </div>
        <Footer />
      </div >
    </div >
  );
}
