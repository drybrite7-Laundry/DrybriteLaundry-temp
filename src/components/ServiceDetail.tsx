import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/config/services";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  const benefits = [
    "Professional equipment and techniques",
    "Eco-friendly cleaning solutions",
    "Quality guarantee on all services",
    "Convenient pickup and delivery",
    "Expert fabric care specialists",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Breadcrumb */}
      <div className="container px-4 pt-32 pb-8">
        <nav className="flex items-center space-x-2 text-sm text-foreground/60">
          <Link to="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-foreground">{service.title}</span>
        </nav>
      </div>

      {/* Service Header */}
      <section className="container px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-6">
            <div className="text-primary mr-4">{service.icon}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {service.title}
              </h1>
              <p className="text-xl text-foreground/70">{service.subtitle}</p>
            </div>
          </div>

          {service.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {service.description}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary/5 py-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Why Choose Our {service.title} Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Experience Professional Care?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Book your {service.title.toLowerCase()} service today and enjoy
              convenient pickup and delivery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="button-gradient px-8 py-6 text-lg font-medium"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=header",
                    "_blank"
                  )
                }
              >
                Book {service.title} Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/services">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-primary/5 py-12">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Other Services You Might Need
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {relatedServices.map((relatedService, index) => (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Link to={`/services/${relatedService.id}`}>
                      <div className="bg-card rounded-lg p-6 glass-hover cursor-pointer group border border-primary/10">
                        <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-200">
                          {relatedService.icon}
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {relatedService.title}
                        </h3>
                        <p className="text-sm text-foreground/60">
                          {relatedService.subtitle}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetail;
