import React from 'react';
import Nav from "../../src/common/components/Nav";
import Footer from "../../src/common/components/Footer";

import profileImage from '../../src/assets/profile.png';

export { Page };

function Page() {
  return (
    <div className="page bg-white dark:bg-gray-800 dark:text-white overflow-y-auto min-h-screen">
      <div className="w-full max-w-5xl mx-auto p-8 font-mono">
        <Nav />
        <div className="grid place-items-center mt-12" style={{ cursor: "auto" }}>
          <div className="py-8">
            <img
              src={profileImage}
              className="bg-gradient-to-r p-[7px] from-[#7928ca] to-[#ff0080] w-56 h-56 rounded-full object-cover"
            />
          </div>
          <div className="dark:text-white max-w-4xl py-8 text-gray-600 space-y-4">
            <h1 className="text-3xl font-bold text-center pb-12">
              Hi 👋, thanks for stoping by, here's a little bit about me.
            </h1>
            {/* <p>
              My name's <strong>Matthew Fosse</strong> but most people just call me Fosse
            </p> */}
            <p>// TODO</p>
            {/* <p></p>
              <p></p>
              <h2 className="text-2xl font-bold py-4">📳 Android Developer</h2>
              <p></p>
              <h2 className="text-2xl font-bold py-4">
                🎑 Fullstack Development
              </h2> */}
            <p></p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
