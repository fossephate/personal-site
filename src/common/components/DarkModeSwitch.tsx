import { useState, useEffect } from "react";

import useDarkMode from "../../../src/common/hooks/useDarkMode";
// import { renderToStaticMarkup } from "https://esm.sh/react-dom/server";
// import { renderToStaticMarkup } from "react-dom/server";
import * as ReactDOMServer from 'react-dom/server';

export default function () {
  const [theme, setTheme] = useDarkMode();

  let darkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  let lightIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    // @ts-ignore
    setTheme(isDark ? "light" : "dark");
    updateSwitch(!isDark);
  }

  useEffect(() => {
    let isDark = window.document.documentElement.classList.contains("dark");
    // setTimeout(() => {
    //   document.querySelector("#switch-toggle").classList.add("transition", "duration-500");
    // }, 500);
    updateSwitch(isDark, true);
  }, []);

  function updateSwitch(isDark: any, fast = false) {
    const switchToggle = document.querySelector("#switch-toggle");

    let translationAmount = 1;

    if (isDark) {
      // @ts-ignore
      // switchToggle.classList.remove("bg-yellow-500", `-translate-x-${translationAmount}`);
      switchToggle.classList.remove("bg-yellow-500", `-translate-x-1`);
      // @ts-ignore
      switchToggle.classList.add("bg-gray-700", "translate-x-full");
      setTimeout(
        () => {
          // @ts-ignore
          switchToggle.innerHTML = ReactDOMServer.renderToStaticMarkup(darkIcon);
        },
        fast ? 0 : 250
      );
    } else {
      // @ts-ignore
      // switchToggle.classList.add("bg-yellow-500", `-translate-x-${translationAmount}`);
      switchToggle.classList.add("bg-yellow-500", `-translate-x-1`);
      // @ts-ignore
      switchToggle.classList.remove("bg-gray-700", "translate-x-full");
      setTimeout(
        () => {
          // @ts-ignore
          switchToggle.innerHTML = ReactDOMServer.renderToStaticMarkup(lightIcon);
        },
        fast ? 0 : 250
      );
    }
  }

  // duration-300 and duration-500

  return (
    <button
      className="ml-auto mr-4 w-12 h-6 rounded-full bg-gray-200 flex items-center focus:outline-none shadow"
      onClick={toggleTheme}
    >
      <div
        id="switch-toggle"
        className="w-7 h-7 relative rounded-full transform duration-500 -translate-x-1 p-1 text-white"
      ></div>
    </button>
  );
}
