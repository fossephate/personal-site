import React from "react";

import ProjectCard from "../../../src/common/components/ProjectCard";
import ProjectCardCarousel from "../../../src/common/components/ProjectCardCarousel";

// import mainKeyboard from "/src/assets/keyboards1.jpg";
// import keyboard1 from "/src/assets/alpha/DSC00161.JPG";
// import keyboard2 from "/src/assets/alpha/DSC00160.JPG";
// import keyboard3 from "/src/assets/alpha/DSC00164.JPG";
// import keyboard4 from "/src/assets/alpha/DSC00173.JPG";
// import keyboard5 from "/src/assets/alpha/DSC00178.JPG";
// import keyboard6 from "/src/assets/alpha/DSC00179.JPG";
// import keyboard7 from "/src/assets/alpha/DSC00180.JPG";
// import keyboard8 from "/src/assets/alpha/DSC00188.JPG";
// import carPic1 from "/src/assets/alpha/DSC00139.JPG";
// import carPic2 from "/src/assets/alpha/DSC00052.JPG";
// import carPic3 from "/src/assets/alpha/DSC00147.JPG";
// import carPic4 from "/src/assets/alpha/DSC00134.JPG";
// import ipodImage from "/src/assets/ipod.png";
// import moddedIdog from "/src/assets/alpha/DSC00045.JPG";
// import wirelessMouse from "/src/assets/wireless-mouse.jpg";
// import miniPC from "/src/assets/mini-pc.jpg";

export default function HardwareList() {
  return (
    <div className="grid <sm:grid-cols-1 sm:grid-cols-3 gap-4">
      <ProjectCard
        link="https://www.reddit.com/r/ipod/comments/p7as70/finally_finished_modding_my_7th_gen_classic_with/"
        imageSrc="/assets/ipod.png"
        title="World's Best iPod Classic"
        description="Packed with USB-C, 1TB of flash storage, Bluetooth 5.0 and more!"
      />

      <ProjectCard
        link="#"
        imageSrc="/assets/alpha/DSC00045.JPG"
        title="Power Modded I-Dog"
        description="It's an I-Dog! Modded to run off of the power in my car, it jams to tunes from my dashboard!"
      />

      <ProjectCard
        link="https://www.reddit.com/r/TeslaLounge/comments/qy7ovs/got_tired_of_spotify_acting_up_so_i_hacked/"
        imageSrc="https://preview.redd.it/oh1w3tnkpr081.jpg?width=960&crop=smart&auto=webp&s=9be2b0679d6a0cf145f03410618689378a8fd331"
        title="Spotify Car Thing Tesla Mount"
        description="I got tired of the terrible UX the Tesla Spotify App provides so I made a mount for Spotify's Car Thing"
      />

      {/* <ProjectCard
        link=""
        imageSrc="/assets/keyboards1.jpg"
        title="Keyboards!"
        description="I have too many keyboards to count, but I have a few that I'm proud of"
      /> */}

      <ProjectCardCarousel
        imageList={[
          "/assets/keyboards1.jpg",
          "/assets/alpha/DSC00161.JPG",
          "/assets/alpha/DSC00160.JPG",
          "/assets/alpha/DSC00164.JPG",
          "/assets/alpha/DSC00173.JPG",
          "/assets/alpha/DSC00178.JPG",
          "/assets/alpha/DSC00179.JPG",
          "/assets/alpha/DSC00180.JPG",
          "/assets/alpha/DSC00188.JPG",
        ]}
        title="Keyboards!"
        description="I have too many keyboards to count, but I have a few that I'm proud of"
      />

      <ProjectCardCarousel
        imageList={[
          "/assets/alpha/DSC00139.JPG",
          "/assets/alpha/DSC00052.JPG",
          "/assets/alpha/DSC00147.JPG",
          "/assets/alpha/DSC00134.JPG",
        ]}
        title="Tesla Model 3 Mods"
        description="Collection of mods I made for my car"
      />

      <ProjectCard
        link=""
        imageSrc="/assets/wireless-mouse.jpg"
        title="Wireless Mouse Mod"
        description="My favorite gaming mouse isn't wireless, so I cut up a wireless logitech G305 and shoved it into the case + a 3D printed base"
      />

      <ProjectCard
        link=""
        imageSrc="/assets/mini-pc.jpg"
        title="3D Printed 8L Gaming Machine"
        description="Held together with mostly hot glue and dreams, this tiny machine packs a punch"
      />

      <ProjectCard
        link="https://www.youtube.com/watch?v=ebYx-qAMrio"
        imageSrc="https://img.youtube.com/vi/ebYx-qAMrio/0.jpg"
        title="Portable N64"
        description="This video is from when I was like 15 (2014?), but yeah it's exactly what it sounds like. I don't remember
        what I was testing or trying to film in the clip. Sadly the N64 no longer works and I don't have the time to
        fix it :/"
      />

      {/* <ProjectCard
        link="#"
        imageSrc="/assets/alpha/DSC00139.JPG"
        title="Tesla Model 3 Mods"
        description="Collection of mods I made for my car"
      /> */}
    </div>
  );
}
