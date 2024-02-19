'use client'

import React from "react";


import DarkModeSwitch from "@/components/DarkModeSwitch";

export default function Nav() {

  return (
    <nav className="flex <sm:flex-col sm:flex-row justify-between items-center font-mono">
      <div>
        <a href="/" className="dark:text-white font-bold text-gray-600 text-lg">
          // Matthew Fosse
        </a>
      </div>

      <DarkModeSwitch/>

      <div className="dark:text-white text-gray-500 flex gap-x-2">
        <a href="/about" className="font-medium p-2 rounded px-4 dark:hover:bg-gray-600 hover:bg-gray-200">
          About
        </a>
      </div>
    </nav>
  );
}
