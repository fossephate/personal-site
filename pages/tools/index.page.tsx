import React from "react";

import Nav from "../../src/common/components/Nav";

export { Page };

function Page() {
  return (
    <div className="page">
      <head>
        <title>fosse</title>
      </head>

      <div className="bg-white dark:bg-gray-800 dark:text-white overflow-y-auto">
        <div className="w-full max-w-5xl mx-auto p-8 flex flex-col h-screen">
          <div className="font-mono">
            <Nav />
          </div>

          <div className="my-12 py-2 flex flex-col items-center w-full justify-center dark:bg-gray-900 bg-gray-100 rounded-lg">
            <div className="text-center py-8">
              <h1 className="<sm:text-3xl sm:text-4xl font-bold dark:text-gray-100 pb-4">Dev Tools</h1>
              <p className="dark:text-gray-50 <sm:text-md sm:text-lg max-w-xl">
                This is just a list of some of my favorite tools and services.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <ul className="grid <sm:grid-cols-1 sm:grid-cols-3 gap-4">
              
              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://github.com/microsoft/vscode" target="_blank">
                    <img src="https://www.ahmadrosid.com/images/tools/vscode.png" className="w-24" />
                  </a>
                </div>
                <a
                  href="https://github.com/microsoft/vscode"
                  target="_blank"
                  className="hover:border-b hover:border-black"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">VS Code</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">Best in class editor for development</p>
              </li>

              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://visualstudio.microsoft.com" target="_blank">
                    <img
                      src="https://1000logos.net/wp-content/uploads/2020/08/Visual-Studio-Logo-768x480.png"
                      className="h-24"
                    />
                  </a>
                </div>
                <a
                  href="https://visualstudio.microsoft.com"
                  target="_blank"
                  className="hover:border-b hover:border-black"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">Visual Studio</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">For when VSCode just doesn't cut it</p>
              </li>

              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://reactjs.org" target="_blank">
                    <img src="https://reactjs.org/logo-og.png" className="w-24 h-24 object-cover rounded-full" />
                  </a>
                </div>
                <a href="https://reactjs.org" target="_blank" className="hover:border-b hover:border-black">
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">React</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">Web-framework of choice (over Vue and Angular, at least)</p>
              </li>

              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://vitejs.dev" target="_blank">
                    <img src="https://vitejs.dev/logo.svg" className="w-24" />
                  </a>
                </div>
                <a href="https://vitejs.dev" target="_blank" className="hover:border-b hover:border-black">
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">Vite.js</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">Next Generation Frontend Tooling</p>
              </li>

              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://docker.com" target="_blank">
                    <img
                      src="https://ms-azuretools.gallerycdn.vsassets.io/extensions/ms-azuretools/vscode-docker/1.18.0/1637001306874/Microsoft.VisualStudio.Services.Icons.Default"
                      className="h-24"
                    />
                  </a>
                </div>
                <a href="https://docker.com" target="_blank" className="hover:border-b hover:border-black">
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">Docker</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">Containerize your services</p>
              </li>

              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://apps.microsoft.com/store/detail/fancywm-dynamic-tiling-window-manager/9P1741LKHQS9?hl=en-us&gl=US" target="_blank">
                    <img
                      src="https://store-images.s-microsoft.com/image/apps.2709.14517052119257390.d950e654-2004-4878-b902-94902f8f7a45.7b19d30b-426d-4d58-bb75-cc3a1483345c"
                      className="h-24"
                    />
                  </a>
                </div>
                <a href="https://apps.microsoft.com/store/detail/fancywm-dynamic-tiling-window-manager/9P1741LKHQS9?hl=en-us&gl=US" target="_blank" className="hover:border-b hover:border-black">
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">FancyWM</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">Like i3 but for Windows</p>
              </li>

              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://github.com/microsoft/PowerToys" target="_blank">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/2020_PowerToys_Icon.svg/1200px-2020_PowerToys_Icon.svg.png"
                      className="w-24"
                    />
                  </a>
                </div>
                <a
                  href="https://github.com/microsoft/PowerToys"
                  target="_blank"
                  className="hover:border-b hover:border-black"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">Microsoft Power Toys</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">Seriously useful tools for developers on windows</p>
              </li>

              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://slack.com" target="_blank">
                    <img
                      src="https://www.ahmadrosid.com/images/tools/slack.svg"
                      className="h-24"
                    />
                  </a>
                </div>
                <a
                  href="https://slack.com"
                  target="_blank"
                  className="hover:border-b hover:border-black"
                >
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">Slack</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">Like discord, but more professional</p>
              </li>

              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://copilot.github.com" target="_blank">
                    <img
                      src="https://github.githubassets.com/images/icons/copilot/cp-head-square.png"
                      className="w-24"
                    />
                  </a>
                </div>
                <a href="https://copilot.github.com" target="_blank" className="hover:border-b hover:border-black">
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">Github Copilot</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">Might as well be magic</p>
              </li>

              <li className="p-4 px-6 bg-gray-200 shadow-xl rounded-md text-center">
                <div className="flex justify-center py-3">
                  <a href="https://tailwindcss.com" target="_blank">
                    <img
                      src="https://www.drupal.org/files/project-images/screenshot_361.png"
                      className="w-24"
                    />
                  </a>
                </div>
                <a href="https://tailwindcss.com" target="_blank" className="hover:border-b hover:border-black">
                  <h2 className="text-gray-900 font-bold inline-block text-2xl">Tailwind CSS</h2>
                </a>
                <p className="text-gray-900 text-sm py-2">Easy utility classes that make building a themed UI a breeze</p>
              </li>

            </ul>
          </div>
          <div className="py-8 items-end flex justify-center grow">
            <a href="/" className="w-full">
              <button className="dark:bg-gray-600 dark:hover:bg-[#9736F4] transition-colors duration-100 ease-in-out bg-gray-200 hover:bg-[#9736F4] hover:text-white rounded-md w-full px-4 py-2">
                Back Home
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
