// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import anime from 'animejs';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  const wrapperRef = useRef(null);
  const [animationRef, setAnimationRef] = useState<ReturnType<typeof anime> | undefined>();

  let columns = 0;
  let rows = 0;
  let toggled = false;

  if (typeof window !== "undefined") {
    if (window.document.body.clientWidth < 640) {
      return <></>;
    }
  }

  useEffect(() => {
    createGrid();
    window.onresize = createGrid;

    // setAnimationRef(
    //     anime({
    //         targets: ".tile",
    //         opacity: toggled ? 0 : 1,
    //         delay: anime.stagger(50, {
    //           grid: [columns, rows],
    //           from: 0,
    //         }),
    //     }),
    // );
  }, []);

  const toggle = () => {
    toggled = !toggled;
    document.body.classList.toggle(styles.toggled);
  };

  const handleOnClick = (index: any) => {
    toggle();
    // setAnimationRef(anime({
    //   targets: ".tile",
    //   opacity: toggled ? 0 : 1,
    //   delay: anime.stagger(40, {
    //     grid: [columns, rows],
    //     from: index,
    //   }),
    // }));

    anime({
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(40, {
        grid: [columns, rows],
        from: index,
      }),
    });

    // setTimeout(() => {
    //   toggle();
    //   anime({
    //     targets: ".tile",
    //     opacity: toggled ? 1 : 0,
    //     delay: anime.stagger(40, {
    //       grid: [columns, rows],
    //       from: index,
    //     }),
    //   });

    // }, 2000);


      // anime({
    //   targets: ".tile",
    //   opacity: [0, 1],
    //   delay: anime.stagger(40, {
    //     grid: [columns, rows],
    //     from: index,
    //   }),
    // });
    // anime({
    //   targets: ".tile",
    //   opacity: toggled ? 1 : 0,
    //   delay: anime.stagger(1000, {
    //     grid: [columns, rows],
    //     from: index,
    //   }),
    // })
  };

  const createTile = (index: any) => {
    const tile = document.createElement('div');
    // tile.classList.add("tile");
    tile.classList.add("tile", "before:bg-slate-200", "hover:before:bg-slate-300", "dark:before:bg-slate-900", "dark:hover:before:bg-slate-800");
    tile.style.opacity = toggled ? 0 : 1;
    tile.onclick = () => {
      handleOnClick(index);
      setTimeout(() => {
        handleOnClick(index);
      }, 2000); 
    }

    // Create the waver animation for each tile
    let distance = 5;
    // anime({
    //   targets: tile,
    //   translateX: function () {
    //     return anime.random(-distance, distance);
    //   },
    //   translateY: function () {
    //     return anime.random(-distance, distance);
    //   },
    //   duration: function () {
    //     return anime.random(500, 3000);
    //   },
    //   delay: function () {
    //     return anime.random(0, 1000);
    //   },
    //   // loop: true,
    //   // direction: 'alternate',
    //   easing: 'easeInOutSine',
    // });



    // Create the random movement animation for each tile
    const animateRandomMovement = (isReturn) => {
      const randomX = anime.random(-distance, distance);
      const randomY = anime.random(-distance, distance);

      anime({
        targets: tile,
        translateX: randomX,
        translateY: randomY,
        duration: anime.random(1000, 3000),
        easing: isReturn ? 'linear' : 'linear',
        complete: () => {animateRandomMovement(!isReturn)},
      });
    };



    animateRandomMovement(false);
    return tile;
  };

  const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((_, index) => {
      wrapperRef.current.appendChild(createTile(index));
    });
  };

  const createGrid = () => {
    wrapperRef.current.innerHTML = '';
    // const size = document.body.clientWidth > 800 ? 100 : 50;
    let body = document.body,
    html = document.documentElement;
    let height = body.clientHeight;

    let width = body.clientWidth;
    let ratio = (width-10) / height;
    const size = 75;
    rows = 50;
    columns = Math.floor(width / size);
    // rows = Math.floor(document.body.clientHeight / size);

    wrapperRef.current.style.setProperty('--columns', columns);
    wrapperRef.current.style.setProperty('--rows', rows);
    createTiles(columns * rows);
  };

  function debounce(func){
    var timer;
    return function(event){
      if(timer) clearTimeout(timer);
      timer = setTimeout(func,1000,event);
    };
  }

  useEffect(() => {
    createGrid();
    window.onresize = debounce(createGrid);
  }, []);

  return (
    <div className={styles.animatedBg}>
      <div id={styles.tiles} ref={wrapperRef}></div>
    </div>
  );
};

export default AnimatedBackground;