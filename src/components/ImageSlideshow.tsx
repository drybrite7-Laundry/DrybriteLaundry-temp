import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImageIndex]}
            alt="Laundry service"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {/* Dark overlay so text is visible */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default ImageSlideshow;
