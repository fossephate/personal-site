import React from "react";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps={
  imageSrc: StaticImageData;
  link: string;
  title: string;
  description: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="dark:bg-gray-100 bg-gray-200 rounded-lg">
      <div className="rounded-t-md bg-gray-300">
        <a href={props.link}>
          <Image src={props.imageSrc} height="200" className="rounded-t-md rounded-b-sm mx-auto max-h-44" alt="project image" />
        </a>
      </div>
      <div className="p-4 space-y-2">
        <a href={props.link} className="hover:underline decoration-black">
          <h2 className="text-lg font-bold text-gray-600">{props.title}</h2>
        </a>
        <p className="text-sm text-gray-600">
          {props.description}
        </p>
      </div>
    </div>
  );
}
