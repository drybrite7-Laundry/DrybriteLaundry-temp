import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageSlideshow = () => {
  const images = [
    "/images/header2.png",
    "/images/header3.png",
    "/images/header4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s per slide
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === index ? 0.35 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
    </div>
  );
};

export default ImageSlideshow;
