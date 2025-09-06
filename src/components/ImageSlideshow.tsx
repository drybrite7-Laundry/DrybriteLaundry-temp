import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlideshow = () => {
  const images = [
    "public/images/header1.png",
    "public/images/header2.png",
    "public/images/header3.png",
    "public/images/header4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImageIndex]}
            alt="Laundry service"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
    </div>
  );
};

export default ImageSlideshow;
