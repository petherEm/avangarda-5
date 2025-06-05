"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface TestimonialsProps {
  lang?: string;
  dict?: any;
}

function AbstractPattern({
  variant = "geometric",
  className = "",
}: {
  variant?: "flowing" | "geometric" | "organic";
  className?: string;
}) {
  const baseClasses = "absolute inset-0 w-full h-full";

  if (variant === "geometric") {
    return (
      <div className={`${baseClasses} ${className}`}>
        {/* Base gradient */}
        <div className="absolute inset-0 bg-white" />

        {/* RD Logo - Main circulating element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-32 h-32"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.img
              src="/avangarda-logo-sm-2.png"
              alt="RD Logo"
              className="w-full h-full object-contain"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Smaller RD logos orbiting around */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-96 h-96"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.img
              src="/avangarda-logo-sm-2.png"
              alt="RD Logo"
              className="absolute top-0 left-1/2 w-16 h-16 object-contain -translate-x-1/2 opacity-60"
              animate={{
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.img
              src="/avangarda-logo-sm-2.png"
              alt="RD Logo"
              className="absolute bottom-0 left-1/2 w-20 h-20 object-contain -translate-x-1/2 opacity-50"
              animate={{
                scale: [1, 0.7, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.img
              src="/avangarda-logo-sm-2.png"
              alt="RD Logo"
              className="absolute left-0 top-1/2 w-14 h-14 object-contain -translate-y-1/2 opacity-70"
              animate={{
                scale: [0.9, 1.4, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            <motion.img
              src="/avangarda-logo-sm-2.png"
              alt="RD Logo"
              className="absolute right-0 top-1/2 w-18 h-18 object-contain -translate-y-1/2 opacity-40"
              animate={{
                scale: [1.1, 0.6, 1.1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.div>
        </div>

        {/* Counter-rotating outer ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-[500px] h-[500px]"
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.img
              src="/avangarda-logo-sm-2.png"
              alt="RD Logo"
              className="absolute top-8 left-1/2 w-12 h-12 object-contain -translate-x-1/2 opacity-30"
              animate={{
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src="/avangarda-logo-sm-2.png"
              alt="RD Logo"
              className="absolute top-1/2 right-8 w-10 h-10 object-contain -translate-y-1/2 opacity-35"
              animate={{
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                duration: 3.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
            <motion.img
              src="/avangarda-logo-sm-2.png"
              alt="RD Logo"
              className="absolute bottom-8 left-1/2 w-14 h-14 object-contain -translate-x-1/2 opacity-25"
              animate={{
                scale: [1, 0.4, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />
            <motion.img
              src="/avangarda-logo-sm-2.png"
              alt="RD Logo"
              className="absolute top-1/2 left-8 w-16 h-16 object-contain -translate-y-1/2 opacity-45"
              animate={{
                scale: [0.6, 1.1, 0.6],
              }}
              transition={{
                duration: 3.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.8,
              }}
            />
          </motion.div>
        </div>

        {/* Floating individual logos with random movement - Bigger and on sides */}
        <motion.img
          src="/avangarda-logo-sm-2.png"
          alt="RD Logo"
          className="absolute top-16 right-20 w-20 h-20 object-contain opacity-40"
          animate={{
            scale: [1, 2, 1],
            x: [0, 50, -30, 0],
            y: [0, -25, 40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.img
          src="/avangarda-logo-sm-2.png"
          alt="RD Logo"
          className="absolute bottom-20 left-16 w-24 h-24 object-contain opacity-50"
          animate={{
            scale: [1.2, 0.8, 1.8, 1.2],
            x: [0, -60, 40, 0],
            y: [0, 50, -20, 0],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.img
          src="/avangarda-logo-sm-2.png"
          alt="RD Logo"
          className="absolute top-1/3 left-20 w-16 h-16 object-contain opacity-60"
          animate={{
            scale: [1.1, 2.2, 1.1],
            x: [0, 80, -50, 0],
            y: [0, -60, 55, 0],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Additional larger logos on the sides */}
        <motion.img
          src="/avangarda-logo-sm-2.png"
          alt="RD Logo"
          className="absolute top-1/4 right-12 w-28 h-28 object-contain opacity-35"
          animate={{
            scale: [0.8, 1.6, 0.8],
            x: [0, -40, 20, 0],
            y: [0, 30, -15, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.img
          src="/avangarda-logo-sm-2.png"
          alt="RD Logo"
          className="absolute bottom-1/4 left-8 w-32 h-32 object-contain opacity-30"
          animate={{
            scale: [1, 0.6, 1.4, 1],
            x: [0, 70, -35, 0],
            y: [0, -45, 60, 0],
            rotate: [0, -150, -300, -360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 7,
          }}
        />

        <motion.img
          src="/avangarda-logo-sm-2.png"
          alt="RD Logo"
          className="absolute top-2/3 right-16 w-22 h-22 object-contain opacity-45"
          animate={{
            scale: [1.3, 2.1, 1.3],
            x: [0, -55, 25, 0],
            y: [0, 35, -25, 0],
          }}
          transition={{
            duration: 13,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        <motion.img
          src="/avangarda-logo-sm-2.png"
          alt="RD Logo"
          className="absolute top-1/2 left-4 w-26 h-26 object-contain opacity-40"
          animate={{
            scale: [0.9, 1.8, 0.9],
            x: [0, 90, -45, 0],
            y: [0, -70, 80, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 8,
          }}
        />
      </div>
    );
  }

  return null;
}

const Testimonials = ({ lang = "pl", dict }: TestimonialsProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      location: "Warszawa",
      rating: 5,
      text: "Niesamowite miejsce! Personel bardzo pomocny, pokoje czyste i wygodne. SPA to prawdziwa oaza spokoju. Na pewno wrócimy!",
      platform: "Booking.com",
    },
    {
      id: 2,
      name: "Michał Nowak",
      location: "Kraków",
      rating: 5,
      text: "Hotel przekroczył nasze oczekiwania. Restauracja serwuje wyśmienite posiłki, a lokalizacja jest idealna na relaks z dala od miejskiego zgiełku.",
      platform: "Google",
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      location: "Gdańsk",
      rating: 5,
      text: "Organizowaliśmy tu wesele i wszystko było perfekcyjne. Obsługa na najwyższym poziomie, jedzenie wyśmienite, goście zachwyceni!",
      platform: "TripAdvisor",
    },
  ];

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <section className="w-full py-8 md:py-16 overflow-hidden relative">
      {/* Abstract Pattern Background */}
      <AbstractPattern variant="geometric" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase text-4xl md:text-5xl text-center font-semibold tracking-wider text-black"
        >
          Co mówią nasi goście?
        </motion.h1>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm p-6 text-black relative rounded-lg shadow-lg border border-white/20"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="bg-[#E31C79] p-2 rounded-full">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-black text-center mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="text-center">
                <p className="font-semibold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-700 mb-2">
                  {testimonial.location}
                </p>
                <Badge
                  variant="outline"
                  className="text-xs border-[#E31C79] text-[#E31C79]"
                >
                  {testimonial.platform}
                </Badge>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
