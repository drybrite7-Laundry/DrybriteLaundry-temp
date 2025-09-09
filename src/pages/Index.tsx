import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ServicesCarousel from "@/components/ServicesCarousel";


import ImageSlideshow from "@/components/ImageSlideshow";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Link } from "react-router-dom";

const headerImages = [
  "/images/header2.png",
  "/images/header3.png",
  "/images/laundrybyKG.png",
  "/images/Iron.png",
  
];

const Index = () => {
  const handleBookNow = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=dialog",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Logo Section */}
      
     <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center items-center mt-24 mb-8 relative z-10"
>
  <Link to="/" className="inline-block">
    <motion.img
      src="/images/cropped_circle_image.png"
      alt="Drybrite Laundry Logo"
      className="w-40 h-40 object-contain cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  </Link>
</motion.div>



     
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-primary/10 to-background"
      >
        <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-center text-foreground">
          <span className="opacity-90">
            <TextGenerateEffect words="DryBrite" />
          </span>
          <br />
          <span className="font-medium">
            <TextGenerateEffect words="Laundry Services" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
        >
          Welcome to Drybrite Laundry, your one-stop solution for all your
          garment and home cleaning needs.{" "}
          <span className="font-medium">Book your pickup in minutes.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Button onClick={handleBookNow} size="lg" className="button-gradient">
            Book Pickup Now
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              View Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.section>



       {/* Image Slideshow Section */}
      <section className="py-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[60vh] rounded-2xl overflow-hidden shadow-lg"
          >
            <ImageSlideshow images={headerImages} />
          </motion.div>
        </div>
      </section>

      
      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Service Overview Cards */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Quick Service
            </h3>
            <p className="text-foreground/70 mb-4">
              24-hour standard service with 12-hour FastTrack option for urgent
              needs.
            </p>
            <Button variant="outline" asChild>
              <Link to="/services">Learn More</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Professional Care
            </h3>
            <p className="text-foreground/70 mb-4">
              Expert handling for all fabric types including luxury and delicate
              garments.
            </p>
            <Button variant="outline" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Doorstep Service
            </h3>
            <p className="text-foreground/70 mb-4">
              Convenient pickup and delivery right at your doorstep in IIIT
              Jhalwa.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-background">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to experience premium laundry care?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers in IIIT Jhalwa who trust
            Drybrite for their fabric care needs.
          </p>
          <Button onClick={handleBookNow} size="lg" className="button-gradient">
            Schedule Pickup
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      
      <div className="bg-background">
      </div>
    </div>
  );
};

export default Index;
