import React from "react";

import DarkModeSwitch from "./DarkModeSwitch";

export default function () {

  return (
    <nav className="flex <sm:flex-col sm:flex-row justify-between items-center">
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
        <a href="/projects" className="font-medium p-2 rounded px-4 dark:hover:bg-gray-600 hover:bg-gray-200">
          Projects
        </a>
        {/* <a href="/tools" className="font-medium p-2 rounded px-4 dark:hover:bg-gray-600 hover:bg-gray-200">
          Tools
        </a> */}
      </div>
    </nav>
  );
}
