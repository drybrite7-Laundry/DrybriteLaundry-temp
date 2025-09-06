import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageSlideshow = () => {
  const images = [
    "/images/header2.png",
    "/images/header3.png",
    "/images/header4.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 sec per slide
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}
      {/* optional: remove overlay so no grey */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}
    </div>
  );
};

export default ImageSlideshow;
