"use client";
import { Star, Quote, Users, Award, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface TestimonialsProps {
  lang?: string;
  dict?: any;
}

const Testimonials = ({ lang = "pl", dict }: TestimonialsProps) => {
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

  return (
    <section
      className="w-full py-16 md:py-24 relative"
      style={{ backgroundColor: "#404042" }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-avangarda" />
            <Badge className="bg-avangarda/20 text-avangarda border-avangarda/30 hover:bg-avangarda/20">
              Opinie gości
            </Badge>
            <Heart className="h-6 w-6 text-avangarda" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Co mówią o nas
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Poznaj opinie naszych gości i przekonaj się, dlaczego wybierają
            Hotel Avangarda
          </p>
        </div>

        {/* Ratings Section - Now on top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* TripAdvisor */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 relative">
              <Image
                src="/tripadvisor-new-2.png"
                alt="TripAdvisor Reviews"
                fill
                className="w-22 h-20 object-cover"
              />
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400 mx-0.5"
                />
              ))}
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
            <div className="text-gray-300">TripAdvisor</div>
          </div>

          {/* Booking.com */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 relative">
              <Image
                src="/booking-new-2.png"
                alt="Booking.com"
                fill
                className="w-22 h-20 object-cover"
              />
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-blue-400 text-blue-400 mx-0.5"
                />
              ))}
            </div>
            <div className="text-3xl font-bold text-white mb-2">9.2/10</div>
            <div className="text-gray-300">Booking.com</div>
          </div>

          {/* Google */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 relative">
              <Image
                src="/google-new-2.png"
                alt="Google Reviews"
                fill
                className="w-22 h-20 object-cover"
              />
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400 mx-0.5"
                />
              ))}
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.7/5</div>
            <div className="text-gray-300">Google Reviews</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20  p-8 relative group hover:bg-white/15 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-avangarda p-3 rounded-full shadow-lg">
                  <Quote className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 mx-0.5"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-center mb-8 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="text-center border-t border-white/20 pt-6">
                <p className="font-semibold text-white text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-300 mb-3">{testimonial.location}</p>
                <Badge
                  variant="outline"
                  className="border-avangarda/50 text-avangarda bg-avangarda/10"
                >
                  {testimonial.platform}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
