import React from "react";

import ProjectCard from "~/common/components/ProjectCard.tsx";

export default function HardwareList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-gray-300">
          <a href="https://www.reddit.com/r/ipod/comments/p7as70/finally_finished_modding_my_7th_gen_classic_with/">
            <img src="/assets/ipod.png" className="rounded-md mx-auto max-h-44" />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a
            href="https://www.reddit.com/r/ipod/comments/p7as70/finally_finished_modding_my_7th_gen_classic_with/"
            className="hover:underline decoration-black"
          >
            <h2 className="text-lg font-bold text-gray-600">World's Best iPod Classic</h2>
          </a>
          <p className="text-sm text-gray-600">Packed with USB-C, 1TB of flash storage, Bluetooth 5.0 and more!</p>
        </div>
      </div> */}

      <ProjectCard
        link="https://www.reddit.com/r/ipod/comments/p7as70/finally_finished_modding_my_7th_gen_classic_with/"
        imageSrc="/assets/ipod.png"
        title="World's Best iPod Classic"
        description="Packed with USB-C, 1TB of flash storage, Bluetooth 5.0 and more!"
      />

      <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-gray-300">
          <a href="#">
            <img src="#" className="rounded-md mx-auto max-h-44" />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="#" className="hover:underline decoration-black">
            <h2 className="text-lg font-bold text-gray-600">Power Modded I-Dog</h2>
          </a>
          <p className="text-sm text-gray-600">
            It's an I-Dog! Modded to run off of the power in my car, it jams to tunes from my dashboard!
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-gray-300">
          <a href="https://www.reddit.com/r/TeslaLounge/comments/qy7ovs/got_tired_of_spotify_acting_up_so_i_hacked/">
            <img
              src="https://preview.redd.it/oh1w3tnkpr081.jpg?width=960&crop=smart&auto=webp&s=9be2b0679d6a0cf145f03410618689378a8fd331"
              className="rounded-md mx-auto max-h-44"
            />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a
            href="https://www.reddit.com/r/TeslaLounge/comments/qy7ovs/got_tired_of_spotify_acting_up_so_i_hacked/"
            className="hover:underline decoration-black"
          >
            <h2 className="text-lg font-bold text-gray-600">Spotify Car Thing Tesla Mount</h2>
          </a>
          <p className="text-sm text-gray-600">
            I got tired of the terrible UX the Tesla Spotify App provides so I made a mount for Spotify's Car Thing
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-gray-300">
          <a href="#">
            <img src="/assets/mini-pc.jpg" className="rounded-md mx-auto max-h-44" />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="#" className="hover:underline decoration-black">
            <h2 className="text-lg font-bold text-gray-600">3D Printed 8L Gaming Machine</h2>
          </a>
          <p className="text-sm text-gray-600">
            Held together with mostly hot glue and prayers, this tiny machine packs a punch
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-gray-300">
          <a href="#">
            <img src="/assets/keyboards1.jpg" className="rounded-md mx-auto max-h-44" />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="#" className="hover:underline decoration-black">
            <h2 className="text-lg font-bold text-gray-600">Keyboards!</h2>
          </a>
          <p className="text-sm text-gray-600">
            I have too many keyboards to count, but I have a few that I'm proud of
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-gray-300">
          <a href="#">
            <img src="/assets/wireless-mouse.jpg" className="rounded-md mx-auto max-h-44" />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="#" className="hover:underline decoration-black">
            <h2 className="text-lg font-bold text-gray-600">Wireless Mouse Mod</h2>
          </a>
          <p className="text-sm text-gray-600">
            My favorite gaming mouse isn't wireless, so I cut up a wireless logitech G305 and shoved it into the case +
            a 3D printed base
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg">
        <div className="rounded-t-md bg-gray-300">
          <a href="https://www.youtube.com/watch?v=ebYx-qAMrio">
            <img src="https://img.youtube.com/vi/ebYx-qAMrio/0.jpg" className="rounded-md mx-auto max-h-44" />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <a href="https://www.youtube.com/watch?v=ebYx-qAMrio" className="hover:underline decoration-black">
            <h2 className="text-lg font-bold text-gray-600">Portable N64</h2>
          </a>
          <p className="text-sm text-gray-600">
            This video is from when I was like 15 (2014?), but yeah it's exactly what it sounds like. I don't remember
            what I was testing or trying to film in the clip. Sadly the N64 no longer works and I don't have the time to
            fix it :/
          </p>
        </div>
      </div>

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
