import React from "react";
export default function E404() {
  const image_list = [
    "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1643546014345-bbf1b12918a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlc3Rpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1535813547-99c456a41d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="grid sm:grid-cols-2 gap-8">
          {/* content - start */}
          <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
            <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">Error 404</p>
            <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
              Page not found
            </h1>
            <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">
              The page you’re looking for doesn’t exist.
            </p>
            <a
              href="/"
              className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Go home
            </a>
          </div>
          {/* content - end */}
          {/* image - start */}
          <div className="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg relative">
            {/* <img
              src="https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by @heydevn"
              className="w-full h-full object-cover object-center absolute inset-0"
            /> */}
            {/* pick an image at random to display: */}
            <img
              src={image_list[Math.floor(Math.random() * image_list.length)]}
              loading="lazy"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>
          {/* image - end */}
        </div>
      </div>
    </div>
  );
}
