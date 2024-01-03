// components/BubblesBackground.js
import Bubble from './Bubble';

const BubblesBackground = ({ imageUrls }) => {
  return (
    <div>
      {imageUrls.map((url, index) => (
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