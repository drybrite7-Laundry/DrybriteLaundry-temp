import { motion } from "framer-motion";

const OfferBar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary to-secondary text-white"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-center">
        <p className="text-sm md:text-base font-medium text-center">
          🎉 Free Pickup and Delivery for orders over Rs200
        </p>
      </div>
    </motion.div>
  );
};

export default OfferBar;
