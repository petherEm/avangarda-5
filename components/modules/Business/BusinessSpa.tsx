"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Clock,
  Heart,
  Dumbbell,
  Bath,
  Coffee,
  Phone,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BusinessSpaProps {
  dict?: any;
  lang?: string;
}

export default function BusinessSpa({ dict, lang = "pl" }: BusinessSpaProps) {
  return (
    <div className="bg-gradient-to-br from-neutral-600 via-[#46464c] to-neutral-900 text-white w-full py-12 md:py-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="uppercase text-4xl md:text-5xl font-semibold tracking-wider text-white">
              Biznes Spa
            </h1>
            <p className="text-lg text-white leading-relaxed">
              Nasza strefa Spa to oaza spokoju w sercu hotelu. Po męczącym dniu
              konferencyjnym zapraszamy na relaksujące zabiegi, które przywrócą
              równowagę i energię.
            </p>
            <p className="text-lg text-white leading-relaxed">
              Profesjonalni terapeuci zadbają o Twoje samopoczucie, oferując
              szeroki wybór zabiegów dostosowanych do potrzeb gości biznesowych.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Zarezerwuj zabieg
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative aspect-video w-full overflow-hidden"
          >
            <Image
              src="/spa/spa-01.jpeg"
              alt="Spa & Wellness"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-semibold text-white">
                  Wellness & Spa
                </h3>
                <Badge className="bg-avangarda/20 text-avangarda rounded-md">
                  Relaks
                </Badge>
              </div>
              <p className="text-lg leading-relaxed text-white/90">
                Nasza strefa Spa to oaza spokoju w sercu hotelu. Po męczącym
                dniu konferencyjnym zapraszamy na relaksujące zabiegi, które
                przywrócą równowagę i energię. Profesjonalni terapeuci zadbają o
                Twoje samopoczucie.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 text-center ">
                <Bath className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                <p className="text-sm font-medium text-white">
                  Sauna & Jacuzzi
                </p>
                <p className="text-xs text-white/70">Strefa relaksu</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 text-center ">
                <Heart className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                <p className="text-sm font-medium text-white">Masaże</p>
                <p className="text-xs text-white/70">Różne techniki</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 text-center ">
                <Sparkles className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                <p className="text-sm font-medium text-white">
                  Zabiegi na twarz
                </p>
                <p className="text-xs text-white/70">Pielęgnacja premium</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 text-center ">
                <Dumbbell className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                <p className="text-sm font-medium text-white">Siłownia</p>
                <p className="text-xs text-white/70">24/7 dla gości</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 text-center ">
                <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                <p className="text-sm font-medium text-white">
                  Godziny otwarcia
                </p>
                <p className="text-xs text-white/70">10:00 - 22:00</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 text-center ">
                <Coffee className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                <p className="text-sm font-medium text-white">Herbaciarnia</p>
                <p className="text-xs text-white/70">Zdrowe napoje</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-white">
                Popularne zabiegi dla gości biznesowych:
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span className="text-sm text-white/90">
                    Masaż antystresowy (50 min)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span className="text-sm text-white/90">
                    Ekspresowy zabieg na twarz (30 min)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span className="text-sm text-white/90">
                    Relaks w strefie saun (bez limitu)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span className="text-sm text-white/90">
                    Aromaterapia i relaksacja (45 min)
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Link href={`/${lang}/rozrywka`}>
                <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                  Więcej o Wellness & Spa
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/spa/spa-06.jpg"
                  alt="Strefa relaksu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/spa/pool-01.jpg"
                  alt="Zabiegi spa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h4 className="font-medium mb-3 text-white">
                Pakiety biznesowe Spa
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <div>
                    <h5 className="font-medium text-white">Quick Relax</h5>
                    <p className="text-sm text-white/70">
                      30 min masażu + sauna
                    </p>
                  </div>
                  <p className="font-semibold text-avangarda">150 zł</p>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <div>
                    <h5 className="font-medium text-white">
                      Executive Wellness
                    </h5>
                    <p className="text-sm text-white/70">Pełny pakiet 2h</p>
                  </div>
                  <p className="font-semibold text-avangarda">350 zł</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium text-white">After Conference</h5>
                    <p className="text-sm text-white/70">
                      Masaż + zabieg + relaks
                    </p>
                  </div>
                  <p className="font-semibold text-avangarda">450 zł</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Zarezerwuj swój relaks
          </h3>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby zarezerwować zabiegi spa lub uzyskać
            więcej informacji o naszych pakietach wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant={"secondary"}
              className="text-white bg-avangarda hover:bg-avangarda/90 flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Zarezerwuj
            </Button>
            <Button
              variant="secondary"
              className="border-white/30 text-avangarda hover:bg-avangarda flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Napisz do nas
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
