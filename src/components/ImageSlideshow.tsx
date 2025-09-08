import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ImageSlideshowProps {
  images: string[];
  height?: string;      // e.g., "h-[450px]" or "h-[300px]"
  interval?: number;    // in ms (default 5000 = 5s)
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  height = "h-[400px]",
  interval = 5000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
  if (!images || images.length === 0) return;
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 5000);
  return () => clearInterval(interval);
}, [images]);


    return () => clearInterval(timer);
  }, [images, interval]);

  if (images.length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${height}`}>
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Slideshow image ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
    </div>
  );
};

export default ImageSlideshow;
