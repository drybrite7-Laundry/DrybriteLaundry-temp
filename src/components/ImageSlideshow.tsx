import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlideshow = () => {
  const images = [
    "/images/header2.png",
    "/images/header3.png",
    "/images/header4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-2xl">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentImageIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
