"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Ankit Sharma",
    role: "IIIT Jhalwa Student",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Drybrite has been a lifesaver during my studies! The 24-hour service and doorstep pickup means I never have to worry about laundry. Quality is excellent and prices are student-friendly."
  },
  {
    name: "Priya Gupta",
    role: "Faculty, IIIT Jhalwa",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The WhatsApp booking system is so convenient, and they handle my silk sarees with such care. The FastTrack service saved me when I needed formal wear cleaned urgently."
  },
  {
    name: "Ravi Kumar",
    role: "Local Resident",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Professional service with great attention to detail. They've been taking care of our family's laundry for months now. The staff is reliable and the quality is consistently excellent."
  },
  {
    name: "Sneha Verma",
    role: "Working Professional",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "The convenience of doorstep service has been amazing for my busy schedule. Their stain removal is impressive - they got out a wine stain I thought was permanent!"
  },
  {
    name: "Amit Singh",
    role: "Research Scholar",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "Affordable pricing and excellent service quality. They handle everything from daily wear to my formal suits with equal care. The location tracking feature is very helpful."
  },
  {
    name: "Kavya Patel",
    role: "IIIT Jhalwa Student",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Their household item cleaning service is fantastic! They cleaned our hostel room curtains and they look brand new. The 12-hour express service is perfect for urgent needs."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4 text-foreground">Trusted by Our Community</h2>
          <p className="text-foreground/70 text-lg">
            Join hundreds of satisfied customers in IIIT Jhalwa and Prayagraj
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 glass border-primary/10 hover:border-primary/20 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 glass border-primary/10 hover:border-primary/20 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;