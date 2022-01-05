import React from "react";

export default function Tools() {
  return (
    <div className="page">
      <head>
        <title>Fosse</title>
      </head>

      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
        <section className="w-full max-w-7xl mx-auto px-2 sm:px-6 py-4">
          <div className="py-2 flex flex-col items-center w-full justify-center">
            <a href="/">
              <img
                src="/assets/profile-square.png"
                className="bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] rounded-full w-28 sm:w-40 hover:opacity-90"
              />
            </a>
            <div className="text-center py-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 pb-4">
                My favorite Software and Dev Tools
              </h1>
              <p className="text-gray-50 text-md sm:text-lg max-w-xl">
                This is just a list of some of my favorite tools and services.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <li className="p-4 px-6 bg-red-50 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://github.com/microsoft/vscode" target="_blank">
                    <img
                      src="https://www.ahmadrosid.com/images/tools/vscode.png"
                      className="w-24"
                    />
                  </a>
                </div>
                <a
                  href="https://github.com/microsoft/vscode"
                  target="_blank"
                  className="hover:border-b hover:border-red-400"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">
                    VS Code
                  </h2>
                </a>
                <p className="text-sm py-2">
                  Best in class editor for development.
                </p>
              </li>
              <li className="p-4 px-6 bg-red-50 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://reactjs.org" target="_blank">
                    <img
                      src="https://reactjs.org/logo-og.png"
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  </a>
                </div>
                <a
                  href="https://reactjs.org"
                  target="_blank"
                  className="hover:border-b hover:border-red-400"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">
                    React
                  </h2>
                </a>
                <p className="text-sm py-2">
                  Cross-platform terminal application with a beautiful design.
                </p>
              </li>
              <li className="p-4 px-6 bg-red-50 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://alephjs.org" target="_blank">
                    <img src="/assets/alephjs.svg" className="w-24" />
                  </a>
                </div>
                <a
                  href="https://alephjs.org"
                  target="_blank"
                  className="hover:border-b hover:border-red-400"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">
                    Aleph.js
                  </h2>
                </a>
                <p className="text-sm py-2">
                  The bleeding edge, Full-Stack web framework for Deno.
                </p>
              </li>
              <li className="p-4 px-6 bg-red-50 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://docker.com" target="_blank">
                    <img
                      src="https://ms-azuretools.gallerycdn.vsassets.io/extensions/ms-azuretools/vscode-docker/1.18.0/1637001306874/Microsoft.VisualStudio.Services.Icons.Default"
                      className="h-24"
                    />
                  </a>
                </div>
                <a
                  href="https://docker.com"
                  target="_blank"
                  className="hover:border-b hover:border-red-400"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">
                    Docker
                  </h2>
                </a>
                <p className="text-sm py-2">Containerize everything</p>
              </li>
              <li className="p-4 px-6 bg-red-50 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a
                    href="https://github.com/microsoft/PowerToys"
                    target="_blank"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/2020_PowerToys_Icon.svg/1200px-2020_PowerToys_Icon.svg.png"
                      className="w-24"
                    />
                  </a>
                </div>
                <a
                  href="https://github.com/microsoft/PowerToys"
                  target="_blank"
                  className="hover:border-b hover:border-red-400"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">
                    Microsoft Power Toys
                  </h2>
                </a>
                <p className="text-sm py-2">
                  Seriously useful tools for developers on windows.
                </p>
              </li>
              <li
                className="p-4 px-6 bg-red-50 shadow-xl rounded-md text-center"
                style={{ cursor: "auto" }}
              >
                <div className="flex justify-center py-3">
                  <a href="https://www.google.com/chrome/" target="_blank">
                    <img
                      src="https://www.ahmadrosid.com/images/tools/chrome.png"
                      className="w-24"
                    />
                  </a>
                </div>
                <a
                  href="https://google.com/chrome/"
                  target="_blank"
                  className="hover:border-b hover:border-red-400"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">
                    Google Chrome
                  </h2>
                </a>
                <p className="text-sm py-2" style={{ cursor: "auto" }}>
                  Pretty basic, but the dev tools are good once you learn how to use them.
                </p>
              </li>
              <li className="p-4 px-6 bg-red-50 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://slack.com/" target="_blank">
                    <img
                      src="https://www.ahmadrosid.com/images/tools/slack.svg"
                      className="w-24"
                    />
                  </a>
                </div>
                <a
                  href="https://slack.com/"
                  target="_blank"
                  className="hover:border-b hover:border-red-400"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">
                    Slack
                  </h2>
                </a>
                <p className="text-sm py-2">
                  It's where the people you need, the information you share, and
                  the tools you use come together to get things done.
                </p>
              </li>
              <li className="p-4 px-6 bg-red-50 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://notion.so" target="_blank">
                    <img
                      src="https://www.ahmadrosid.com/images/tools/notion.svg"
                      className="w-24"
                    />
                  </a>
                </div>
                <a
                  href="https://notion.so"
                  target="_blank"
                  className="hover:border-b hover:border-red-400"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">
                    Notion
                  </h2>
                </a>
                <p className="text-sm py-2">
                  The all-in-one workspace for your notes, tasks, wikis, and
                  databases.
                </p>
              </li>
              <li
                className="p-4 px-6 bg-red-50 shadow-xl rounded-md text-center"
                style={{ cursor: "auto" }}
              >
                <div
                  className="flex justify-center py-3"
                  style={{ cursor: "auto" }}
                >
                  <a href="https://www.loom.com" target="_blank">
                    <img
                      src="https://www.ahmadrosid.com/images/tools/loom.svg"
                      className="w-24"
                    />
                  </a>
                </div>
                <a
                  href="https://www.loom.com"
                  target="_blank"
                  className="hover:border-b hover:border-red-400"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">
                    Loom
                  </h2>
                </a>
                <p className="text-sm py-2">
                  Easy and free screen recorder for Mac, Windows, and
                  Chromebooks.
                </p>
              </li>
            </ul>
          </div>
          <div className="pt-8 flex justify-center">
            <div className=" rounded bg-white p-1 ">
              <a
                className=" bg-gradient-to-tr  from-purple-600  to-pink-400 hover:from-pink-400 hover:to-purple-500 inline-block px-4 py-2 text-lg rounded-md text-white "
                href="/"
              >
                Back home
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
