import React from "react";

import ProjectCard from "./ProjectCard";

import djImage from "../../assets/dj.png";
import remoteGamesImage from "../../assets/remotegames.png";



export default function () {
  return (
    <div className="grid <sm:grid-cols-1 sm:grid-cols-3 gap-4">
      <ProjectCard
        link="https://remotegames.io/s/fosse5"
        imageSrc={remoteGamesImage}
        title="Remote Games"
        description="Try it with WASD + Arrow keys! It's like google's stadia mashed with\
        the defunct rabb.it service, because how else was I going to play\
        switch games on my laptop in class?"
      />

      <ProjectCard
        link="https://fosse.co/dj/"
        imageSrc={djImage}
        title="Democratic DJ"
        description="A webapp to create the most fire 🔥 playlist for your next party"
      />

      {/* <ProjectCard
        link="https://github.com/fwd/nautilus"
        imageSrc="https://raw.githubusercontent.com/fwd/nautilus/master/assets/logo-square.png"
        title="Nautilus Wallet"
        description="A Nano wallet for iOS and Android packed with features and nano.to integration"
      /> */}

      <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-black">
          <a href="https://nautiluswallet.app">
            <img
              src="https://raw.githubusercontent.com/perishllc/nautilus/main/ios/Runner/Assets.xcassets/AppIcon.appiconset/AppIcon~ios-marketing.png"
              className="rounded-md mx-auto max-h-44"
            />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="https://github.com/perishllc/nautilus" className="hover:underline decoration-black">
            <h2 className="text-lg font-bold text-gray-600">Nautilus</h2>
          </a>
          <p className="text-sm text-gray-600">
            A NANO Wallet with some of the most advanced features out there. Available on both iOS and Android and developed with flutter
          </p>
        </div>
      </div>

      <ProjectCard
        link="https://github.com/fossephate/JoyCon-Driver"
        imageSrc="https://i.imgur.com/ihK9WNf.png"
        title="JoyCon-Driver"
        description="It lets you use your Nintendo Switch's Joy-Cons on your PC! The first of its kind and I did a lot of the RE that made it possible"
      />

      {/* <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-gray-300">
          <a href="https://www.reddit.com/r/ipod/comments/p7as70/finally_finished_modding_my_7th_gen_classic_with/">
            <img
              src="/assets/ipod.png"
              className="rounded-md mx-auto max-h-44"
            />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a
            href="https://www.reddit.com/r/ipod/comments/p7as70/finally_finished_modding_my_7th_gen_classic_with/"
            className="hover:underline decoration-black"
          >
            <h2 className="text-lg font-bold text-gray-600">
              World's Best iPod Classic
            </h2>
          </a>
          <p className="text-sm text-gray-600">
            Packed with USB-C, 1TB of flash storage, Bluetooth 5.0 and more!
          </p>
        </div>
      </div> */}

      {/* <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-gray-300">
          <a href="/party/">
            <img
              src="https://via.placeholder.com/640x360"
              className="rounded-t-md mx-auto max-h-44"
            />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="/party/" className="hover:underline decoration-black">
            <h2 className="text-lg font-bold text-gray-600">Party Planner</h2>
          </a>
          <p className="text-sm text-gray-600">
            A Party Planning disaster solver.
          </p>
        </div>
      </div> */}
    </div>
  );
}
