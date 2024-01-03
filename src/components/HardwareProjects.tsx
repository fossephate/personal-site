import React from "react";

import ProjectCard from "@/components/ProjectCard";
import ProjectCardCarousel from "@/components/ProjectCardCarousel";

import mainKeyboard from        "@/assets/images/hardware/keyboards/keyboards1.jpg";
import keyboard1 from           "@/assets/images/alpha/DSC00161.JPG";
import keyboard2 from           "@/assets/images/alpha/DSC00160.JPG";
import keyboard3 from           "@/assets/images/alpha/DSC00164.JPG";
import keyboard4 from           "@/assets/images/alpha/DSC00173.JPG";
import keyboard5 from           "@/assets/images/alpha/DSC00178.JPG";
import keyboard6 from           "@/assets/images/alpha/DSC00179.JPG";
import keyboard7 from           "@/assets/images/alpha/DSC00180.JPG";
import keyboard8 from           "@/assets/images/alpha/DSC00188.JPG";
import carPic1 from             "@/assets/images/alpha/DSC00139.JPG";
import carPic2 from             "@/assets/images/alpha/DSC00052.JPG";
import carPic3 from             "@/assets/images/alpha/DSC00147.JPG";
import carPic4 from             "@/assets/images/alpha/DSC00134.JPG";
import ipodImage from "@/assets/images/hardware/ipod/ipod.png";
import moddedIdog from "@/assets/images/alpha/DSC00045.JPG";
import wirelessMouse from "@/assets/images/hardware/wireless-mouse.jpg";
import miniPC from "@/assets/images/hardware/mini-pc.jpg";
import spotifyCarThingImage from "@/assets/images/hardware/spotify-car-thing.webp";
import n64Image from "@/assets/images/hardware/n64/n644.jpg";



export default function HardwareList() {
  return (
    <div className="grid <sm:grid-cols-1 sm:grid-cols-3 gap-4">

      <ProjectCardCarousel
        link="https://www.reddit.com/r/ipod/comments/p7as70/finally_finished_modding_my_7th_gen_classic_with/"
        imageList={[
          ipodImage,
          // "/assets/ipod/ipod.png",
          // "/assets/ipod/ipod2.jpg",
          // "/assets/ipod/ipod4.jpg",
          // "/assets/ipod/ipod3.jpg",
        ]}
        title="Feature Packed iPod Classic"
        description="Packed with USB-C, 1TB of flash storage, Bluetooth 5.0 and more!"
      />

      <ProjectCard
        link=""
        imageSrc={wirelessMouse}
        title="Wireless Mouse Mod"
        description="My favorite gaming mouse isn't wireless, so I cut up a wireless logitech G305 and shoved it into the case + a 3D printed base"
      />



      {/* <ProjectCard
        link=""
        imageSrc="/assets/keyboards1.jpg"
        title="Keyboards!"
        description="I have too many keyboards to count, but I have a few that I'm proud of"
      /> */}

      {/* <ProjectCardCarousel
        link="#"
        imageSrc="/assets/alpha/DSC00045.JPG"
        imageList={[
          "/assets/ipod/idog.gif",
          "/assets/alpha/DSC00045.JPG"
        ]}
        title="Power Modded I-Dog"
        description="It's an I-Dog! Modded to run off of the power in my car, it jams to tunes from my dashboard!"
      /> */}

      {/* <ProjectCardCarousel
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
      /> */}

      {/* <ProjectCardCarousel
        imageList={[
          "/assets/timer/timer1.gif",
          "/assets/timer/timer2.gif",
        ]}
        title="The Everyday Timer!"
        description="A simple digital hour glass that resets once a day. Useful for remembering to do daily chores like feeding my cat"
      /> */}

      <ProjectCard
        link=""
        imageSrc={miniPC}
        title="3D Printed 8L Gaming Machine"
        description="Held together with mostly hot glue and dreams, this tiny machine packs a punch"
      />

      <ProjectCard
        link="https://www.youtube.com/watch?v=ebYx-qAMrio"
        imageSrc={n64Image}
        title="Portable N64"
        description="This video is from when I was like 15 (2014?), but it's exactly what it says in the title. I don't remember
        what I was testing or trying to film in the clip. Sadly the N64 no longer works :("
      />

      <ProjectCard
        link="https://www.reddit.com/r/TeslaLounge/comments/qy7ovs/got_tired_of_spotify_acting_up_so_i_hacked/"
        imageSrc={spotifyCarThingImage}
        title="Spotify Car Thing Tesla Mount"
        description="I got tired of the terrible UX the Tesla Spotify App provides so I made a mount for Spotify's Car Thing"
      />

      {/* <ProjectCardCarousel
        imageList={[
          "/assets/alpha/DSC00139.JPG",
          "/assets/alpha/DSC00052.JPG",
          "/assets/alpha/DSC00147.JPG",
          "/assets/alpha/DSC00134.JPG",
        ]}
        title="Tesla Model 3 Mods"
        description="Collection of mods I made for my car"
      /> */}

      {/* <ProjectCard
        link="#"
        imageSrc="/assets/alpha/DSC00139.JPG"
        title="Tesla Model 3 Mods"
        description="Collection of mods I made for my car"
      /> */}
    </div>
  );
}
