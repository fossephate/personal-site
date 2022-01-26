import React from "react";

import ProjectCard from "~/common/components/ProjectCard.tsx";

export default function HardwareList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

      <ProjectCard
        link=""
        imageSrc="/assets/mini-pc.jpg"
        title="3D Printed 8L Gaming Machine"
        description="Held together with mostly hot glue and prayers, this tiny machine packs a punch"
      />

      <ProjectCard
        link=""
        imageSrc="/assets/keyboards1.jpg"
        title="Keyboards!"
        description="I have too many keyboards to count, but I have a few that I'm proud of"
      />

      <ProjectCard
        link=""
        imageSrc="/assets/wireless-mouse.jpg"
        title="Wireless Mouse Mod"
        description="My favorite gaming mouse isn't wireless, so I cut up a wireless logitech G305 and shoved it into the case + a 3D printed base"
      />

      <ProjectCard
        link="https://www.youtube.com/watch?v=ebYx-qAMrio"
        imageSrc="https://img.youtube.com/vi/ebYx-qAMrio/0.jpg"
        title="Portable N64"
        description="This video is from when I was like 15 (2014?), but yeah it's exactly what it sounds like. I don't remember\
        what I was testing or trying to film in the clip. Sadly the N64 no longer works and I don't have the time to\
        fix it :/"
      />

      <ProjectCard
        link="#"
        imageSrc="/assets/alpha/DSC00139.JPG"
        title="Tesla Model 3 Mods"
        description="Collection of mods I made for my car"
      />

      <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" className="block w-full" alt="..." />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" className="block w-full" alt="..." />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" className="block w-full" alt="..." />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
    </div>
  );
}
