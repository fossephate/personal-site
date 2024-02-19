import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

type BubbleProps={
  imageSrc: StaticImageData;
}

const Bubble = (props: BubbleProps) => {
  const bubbleStyle = {
    // backgroundImage: `url(${props.imageSrc})`,
    animation: `fadeInOut ${Math.random() * 5 + 5}s infinite`,
    position: 'absolute',
    // width: '100px',
    // height: '100px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 230}%`,
    zIndex: 10,
  };

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prev => (prev === 0 ? 1 : 0));
    }, (Math.random() * 5000) + 5000); // Random interval between 5 to 10 seconds

    return () => clearInterval(interval);
  }, []);

  return <div style={bubbleStyle as any}>
    <Image src={props.imageSrc} alt={""} width="300" height="300" />
  </div>;
};

export default Bubble;