'use client'
import Image, { StaticImageData } from "next/image";
import React from "react";
import { useState } from "react";



export default function (props: any) {
  const [count, setCount] = useState(0);

  // return (
  //   <div className="dark:bg-gray-100 bg-gray-200 rounded-lg">
  //     <div className="rounded-t-md bg-gray-300">
  //       <div
  //         id={`${props.title.replace(/[\s!]/g, "")}`}
  //         className="carousel slide carousel-fade relative mx-auto max-h-44"
  //         data-bs-ride="carousel"
  //       >
  //         <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-2">
  //           {props.imageList.map((imageSrc: any, index: any) => (
  //             <button
  //               key={index}
  //               type="button"
  //               data-bs-target={`#${props.title.replace(/[\s!]/g, "")}`}
  //               data-bs-slide-to={index}
  //               className={index == 0 ? "active" : ""}
  //               aria-current={index == 0 ? "true" : "false"}
  //               aria-label={`Slide ${index}`}
  //             ></button>
  //           ))}
  //         </div>

  //         {/* <div className="carousel-inner rounded-full bg-gray-600 text-white absolute top-2 right-7 text-sm px-2 text-center z-10">
  //           <span>{count + 1}</span>/<span>{props.imageList.length}</span>
  //         </div> */}

  //         <div className="carousel-inner relative w-full overflow-hidden">
  //           {props.imageList.map((imageSrc: any, index: any) => (
  //             <div key={index} className={`carousel-item relative float-left w-full ${index === 0 ? "active" : ""}`}>
  //               <img src={imageSrc} className="rounded-t-md rounded-b-sm mx-auto max-h-44" />
  //               <div className="carousel-caption hidden md:block absolute text-center">
  //                 {/* <h5 className="text-xl">First slide label</h5> */}
  //                 {/* <p>Some representative placeholder content for the first slide.</p> */}
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //         <button
  //           className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
  //           type="button"
  //           data-bs-target={`#${props.title.replace(/[\s!]/g, "")}`}
  //           data-bs-slide="prev"
  //           onClick={() => setCount((count - 1 + props.imageList.length) % props.imageList.length)}
  //         >
  //           <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
  //           <span className="visually-hidden">Previous</span>
  //         </button>
  //         <button
  //           className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
  //           type="button"
  //           data-bs-target={`#${props.title.replace(/[\s!]/g, "")}`}
  //           data-bs-slide="next"
  //           onClick={() => setCount((count + 1) % props.imageList.length)}
  //         >
  //           <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
  //           <span className="visually-hidden">Next</span>
  //         </button>
  //       </div>
  //       {/* </a> */}
  //     </div>
  //     <div className="p-4 space-y-2">
  //       <a href={props.link ?? "#"} className="hover:underline decoration-black">
  //         <h2 className="text-lg font-bold text-gray-600">{props.title}</h2>
  //       </a>
  //       <p className="text-sm text-gray-600">{props.description}</p>
  //     </div>
  //   </div>
  // );


  return (
    <div className="dark:bg-gray-100 bg-gray-200 rounded-lg">
      <div className="rounded-t-md bg-gray-300">


        <div id="default-carousel" className="relative" data-carousel="static">
          { /* Carousel wrapper */}
          <div className="relative overflow-hidden rounded-lg h-48">
            {props.imageList.map((imageSrc: StaticImageData, index: any) => (
              <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item="">
                {/* <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span> */}
                <Image src={props.imageList[index]} className="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            ))}
          </div>
          { /* Slider indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {props.imageList.map((imageSrc: any, index: any) => (
              <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label={`Slide ${index}`} data-carousel-slide-to={`${index}`} />
            ))}
          </div>
          { /* Slider controls */}
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>



      </div>
      <div className="p-4 space-y-2">
        <a href={props.link ?? "#"} className="hover:underline decoration-black">
          <h2 className="text-lg font-bold text-gray-600">{props.title}</h2>
        </a>
        <p className="text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}
