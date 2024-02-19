// components/BubblesBackground.js
import { StaticImageData } from 'next/image';
import React from 'react';
import Bubble from './Bubble';

interface BubblesBackgroundProps {
  imageUrls: StaticImageData[];
}

const BubblesBackground: React.FC<BubblesBackgroundProps> = ({ imageUrls }) => {
  return (
    <div>
      {imageUrls.map((url: StaticImageData, index: number) => (
        <Bubble key={index} imageSrc={url} />
      ))}
      <style jsx global>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default BubblesBackground;
