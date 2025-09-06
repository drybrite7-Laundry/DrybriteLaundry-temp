import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const OfferBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem("offerBarDismissed");
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("offerBarDismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary to-secondary text-white"
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex-1 text-center">
              <p className="text-sm md:text-base font-medium">
                🎉 Free Pickup and Delivery for orders over Rs 200
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss offer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfferBar;