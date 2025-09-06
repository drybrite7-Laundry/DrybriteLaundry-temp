import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlideshow = () => {
  const images = [
    "/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png",
    "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
    "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png",
    "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png",
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