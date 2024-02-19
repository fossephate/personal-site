import React from "react";

import ProjectCard from "./ProjectCard";

import djImage from "@/assets/images/software/dj.png";
import nautilusImage from "@/assets/images/software/nautilus-page.png";
import joyconImage from "@/assets/images/software/joycon-driver.png";
import physics3Image from "@/assets/images/software/physics3.png";
import soccercarsImage from "@/assets/images/software/soccer-cars1.png";
import aimbotImage from "@/assets/images/software/aimbot.png";
import vulkanImage from "@/assets/images/software/vulkan.png";
import switchImage from "@/assets/images/software/switch-controller.jpg";
// import remotegamesImage from "@/assets/images/software/remotegames.png";

// import ProjectCardCarousel from "./ProjectCardCarousel";



export default function SoftwareProjects() {
  return (
    <div className="grid <sm:grid-cols-1 sm:grid-cols-3 gap-4">

      {/* <ProjectCardCarousel
        link="https://remotegames.io/s/fosse5"
        imageList={[
          "/assets/remotegames.png",
          "/assets/rgio/rgio2.jpg",
        ]}
        title="Remote Games"
        description="Try it with WASD + Arrow keys! A live streamed, real nintendo switch with controls!"
      /> */}

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

      <ProjectCard
        link="https://nautilus.io"
        // imageSrc="https://raw.githubusercontent.com/perishllc/nautilus/main/ios/Runner/Assets.xcassets/AppIcon.appiconset/AppIcon~ios-marketing.png"
        imageSrc={nautilusImage}
        title="Nautilus Wallet"
        description="A Cryptocurrency Wallet for NANO, with some of the most advanced features of any wallet out there. Available on both iOS and Android and developed with flutter"
      />

      <ProjectCard
        link="https://github.com/fossephate/JoyCon-Driver"
        imageSrc={joyconImage}
        title="JoyCon-Driver"
        description="It lets you use your Nintendo Switch's Joy-Cons on your PC! The first of its kind and I pioneered a lot of the reverse engineering that made the project possible"
      />

      <ProjectCard
        link="https://github.com/fossephate/switch-controller"
        imageSrc={switchImage}
        title="Switch-Controller"
        description="Software + Hardware to control the Nintendo Switch by mimicking JoyCons"
      />

      <ProjectCard
        link="https://github.com/fossephate/Vulkan-Engine"
        imageSrc={vulkanImage}
        title="Vulkan-Engine"
        description="A Vulkan Rendering Engine written in C++ with support for SSAO, Bullet3 physics, and more."
      />


      <ProjectCard
        link="https://github.com/fossephate/AimBot"
        imageSrc={aimbotImage}
        title="Overwatch Aimbot"
        description="An aimbot for overwatch from when the game first came out (~2016)"
      />



      <ProjectCard
        link="/physics3"
        imageSrc={physics3Image}
        title="Physics3"
        description="A 2D physics prototype from ~2012-2013, I was just learning javascript at the time, so it's messy and filled with bugs, but still fun to mess around with"
      />

      <ProjectCard
        link="/8100/"
        imageSrc={soccercarsImage}
        title="Soccer Cars 1"
        description="A silly rocket league clone from ~2014, mostly used to learn multiplayer networking techniques"
      />

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
