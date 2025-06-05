"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, ChefHat, Utensils, Wine, Music } from "lucide-react";
import Image from "next/image";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface GastroIntroProps {
  dict: any;
  lang: string;
}

const GastroIntro = ({ dict, lang }: GastroIntroProps) => {
  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  const gastronomicPlaces = [
    {
      id: "dzika-roza",
      name: "Restauracja Dzika Róża",
      description:
        "Elegancka restauracja z wykwintną kuchnią polską i międzynarodową.",
      image: "/restaurant/rest-01.jpg",
      icon: ChefHat,
      features: [
        "Kuchnia polska i międzynarodowa",
        "Eleganckie wnętrze",
        "Menu sezonowe",
        "Obsługa bankietów",
      ],
      link: `/restaurant`,
    },
    {
      id: "klub-coola",
      name: "Klub Coola",
      description: "Centrum rozrywki z restauracją, kręglami i biliard.",
      image: "/klub/klub-01.jpg",
      icon: Music,
      features: [
        "Kręgle i bilard",
        "Menu barowe",
        "Imprezy tematyczne",
        "Rozrywka dla rodzin",
      ],
      link: `/klub-coola`,
    },
    {
      id: "bar-przystan",
      name: "Bar Przystań",
      description: "Klimatyczny bar nad Narwią z daniami z grilla.",
      image: "/outdoor/out-01.jpg",
      icon: Wine,
      features: [
        "Widok na Narew",
        "Dania z grilla",
        "Świeże ryby",
        "Taras nad rzeką",
      ],
      link: `/bar-przystan`,
    },
  ];

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-20 mb-6 lg:mb-0 bg-gradient-to-br from-neutral-600 via-[#46464c] to-neutral-900 text-white w-full lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Header Section - Single Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4 sm:px-0"
        >
          <h1 className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-6 text-white">
            Gastronomia
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-white/90">
            Hotel Avangarda oferuje trzy wyjątkowe miejsca gastronomiczne - od
            eleganckiej restauracji, przez rozrywkowy klub, po klimatyczny bar
            nad rzeką.
          </p>
        </motion.div>

        {/* Three Places Section - 3 Columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 px-4 sm:px-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gastronomicPlaces.map((place, index) => {
              const IconComponent = place.icon;

              return (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm  overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={place.image || "/placeholder.svg"}
                      alt={place.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="h-6 w-6 text-avangarda" />
                      <h3 className="text-xl font-semibold text-white">
                        {place.name}
                      </h3>
                    </div>

                    <p className="text-white/80 mb-4 leading-relaxed">
                      {place.description}
                    </p>

                    {/* Features as bullet points */}
                    <ul className="space-y-2 mb-6">
                      {place.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-avangarda shrink-0"></div>
                          <span className="text-sm text-white/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href={place.link}>
                      <Button className="w-full bg-avangarda hover:bg-avangarda/90 text-white transition-all hover:scale-105 active:scale-95">
                        <Utensils className="mr-2 h-4 w-4" />
                        Dowiedz się więcej
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default GastroIntro;
