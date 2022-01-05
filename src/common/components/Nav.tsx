import React from "react";
import { useState, useEffect } from "react";
// import Toggle from 'react-toggle'
import useDarkMode from "~/common/hooks/useDarkMode.ts";
import { renderToStaticMarkup } from "https://esm.sh/react-dom/server";

export default function () {
  const [colorTheme, setTheme] = useDarkMode();

  let darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  let lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  function toggleTheme() {
    let isDark = window.document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
    updateSwitch(!isDark);
  }

  function updateSwitch(isDark) {
    const switchToggle = document.querySelector("#switch-toggle");

    let translationAmount = 1;

    if (isDark) {
      switchToggle.classList.remove(
        "bg-yellow-500",
        `-translate-x-${translationAmount}`
      );
      switchToggle.classList.add("bg-gray-700", "translate-x-full");
      setTimeout(() => {
        switchToggle.innerHTML = renderToStaticMarkup(darkIcon);
      }, 250);
    } else {
      switchToggle.classList.add(
        "bg-yellow-500",
        `-translate-x-${translationAmount}`
      );
      switchToggle.classList.remove("bg-gray-700", "translate-x-full");
      setTimeout(() => {
        switchToggle.innerHTML = renderToStaticMarkup(lightIcon);
      }, 250);
    }
  }

  useEffect(() => {
    let isDark = window.document.documentElement.classList.contains("dark");
    updateSwitch(isDark);
  }, []);

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center">
      <div>
        <a href="/" className="dark:text-white font-bold text-gray-600 text-lg">
          // Matthew Fosse
        </a>
      </div>

      <button
        className="ml-auto mr-4 w-12 h-6 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
        onClick={toggleTheme}
      >
        <div
          id="switch-toggle"
          className="w-7 h-7 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-1 p-1 text-white"
        >
          {lightIcon}
        </div>
      </button>

      <div className="dark:text-white text-gray-500 flex gap-x-2">
        <a
          href="/about"
          className="font-medium p-2 rounded px-4 dark:hover:bg-gray-600 hover:bg-gray-200"
        >
          About
        </a>
        <a
          href="/projects"
          className="font-medium p-2 rounded px-4 dark:hover:bg-gray-600 hover:bg-gray-200"
        >
          Projects
        </a>
        <a
          href="/tools"
          className="font-medium p-2 rounded px-4 dark:hover:bg-gray-600 hover:bg-gray-200"
        >
          Tools
        </a>
      </div>
    </nav>
  );
}
