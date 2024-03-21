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

  useEffect(() => {
    createGrid();
    window.onresize = createGrid;

    setAnimationRef(
        anime({
            targets: ".tile",
            opacity: toggled ? 0 : 1,
            delay: anime.stagger(50, {
              grid: [columns, rows],
              from: 0,
            }),
        }),
    );
  }, []);

  const toggle = () => {
    toggled = !toggled;
    document.body.classList.toggle(styles.toggled);
  };

  const handleOnClick = (index) => {
    toggle();
    setAnimationRef(anime({
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    }));
  };

  const createTile = (index) => {
    const tile = document.createElement('div');
    tile.classList.add("tile");
    tile.style.opacity = toggled ? 0 : 1;
    tile.onclick = () => handleOnClick(index);
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
    const size = 120;
    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);

    console.log(document.body.clientWidth, document.body.clientHeight);

    let width = document.body.clientWidth
    let height = document.body.clientHeight;
    let ratio = width / height;

    // columns = columns * ratio;
    
    wrapperRef.current.style.setProperty('--columns', columns);
    wrapperRef.current.style.setProperty('--rows', rows);
    createTiles(columns * rows);
  };

  useEffect(() => {
    createGrid();
    window.onresize = createGrid;
  }, []);

  return (
    <div className={styles.animatedBg}>
      <div id={styles.tiles} ref={wrapperRef}></div>
    </div>
  );
};

export default AnimatedBackground;