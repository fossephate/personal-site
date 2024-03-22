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
    <div className="dark:bg-gray-100 bg-gray-200 dark:bg-gray-800 rounded-lg">
      <div className="rounded-t-lg bg-gray-300 dark:bg-gray-600 py-2">
        <a href={props.link}>
          <Image src={props.imageSrc} height="200" className="rounded-b-sm mx-auto max-h-44" alt="project image" />
        </a>
      </div>
      <div className="p-4 space-y-2">
        <a href={props.link} className="hover:underline decoration-black">
          <h2 className="text-lg font-bold text-gray-600 dark:text-gray-100">{props.title}</h2>
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {props.description}
        </p>
      </div>
    </div>
  );
}
