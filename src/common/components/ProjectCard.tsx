import React from "react";

export default function (props: any) {
  return (
    <div className="dark:bg-gray-100 bg-gray-300 rounded-lg">
      <div className="rounded-t-md bg-gray-300">
        <a href={props.link}>
          <img src={props.imageSrc} className="rounded-t-md rounded-b-sm mx-auto max-h-44" />
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
