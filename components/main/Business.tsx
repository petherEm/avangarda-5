"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface BusinessProps {
  lang?: string;
  dict?: any;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const Business = ({ lang = "pl", dict }: BusinessProps) => {
  // State to track window resize
  const [windowWidth, setWindowWidth] = useState(0);
  // Ref for content section height
  const contentRef = useRef<HTMLDivElement>(null);
  // State to store content height
  const [contentHeight, setContentHeight] = useState(0);

  // Determine the business URL based on language
  const businessUrl = lang === "en" ? "/en/biznes" : "/pl/biznes";

  // Effect to handle window resize and content height
  useEffect(() => {
    // Set initial width and content height
    setWindowWidth(window.innerWidth);
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }

    // Update width and content height on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="w-full py-16 md:py-24 bg-gradient-to-br from-neutral-600 via-[#46464c] to-neutral-800 text-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Images Section - Left side */}
          <motion.div
            className="md:col-span-7 order-2 md:order-1 h-full"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              height: windowWidth >= 768 ? `${contentHeight}px` : "auto",
            }}
          >
            {/* Desktop layout (two images with one bleeding upward) */}
            <div
              className="hidden md:flex gap-6 h-full"
              style={{
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                height: "100%",
              }}
            >
              <motion.div
                variants={fadeInScale}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-7/12 relative h-full -mt-[10%] z-10"
                style={{
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: `translateX(${Math.min((1024 - windowWidth) * 0.03, 15)}px)`,
                }}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/conference/theater-03.jpg"
                    alt="Sala konferencyjna"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1200px) 40vw, 35vw"
                    quality={100}
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInScale}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-5/12 relative h-[85%] self-end"
                style={{
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: `translateX(${Math.max((windowWidth - 1024) * 0.02, -10)}px) translateY(10%)`,
                }}
              >
                <div className="relative h-full w-full overflow-hidden ">
                  <Image
                    src="/conference/cozy-01.jpg"
                    alt="Kameralna sala konferencyjna"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 30vw, 25vw"
                  />
                </div>
              </motion.div>
            </div>

            {/* Mobile layout (two images) */}
            <div className="flex md:hidden flex-col gap-4">
              {/* Main image */}
              <motion.div
                variants={fadeInScale}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full aspect-[16/9] relative"
              >
                <div className="relative h-full w-full overflow-hidden ">
                  <Image
                    src="/conference/theater-01.jpg"
                    alt="Sala konferencyjna"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </motion.div>

              {/* Secondary image */}
              <motion.div
                variants={fadeInScale}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full aspect-[16/9] relative"
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/conference/cozy-01.jpg"
                    alt="Kameralna sala konferencyjna"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section - Right side */}
          <motion.div
            ref={contentRef}
            className="md:col-span-5 flex flex-col justify-start order-1 md:order-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-semibold uppercase tracking-wider text-neutral-50"
            >
              Spotkania firmowe & Integracje
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed text-white mt-6 md:mt-8"
            >
              Hotel Avangarda oferuje nowoczesne sale konferencyjne idealne na
              spotkania biznesowe, szkolenia i eventy firmowe. Zapewniamy pełne
              zaplecze techniczne, w tym projektory, nagłośnienie i szybki
              internet.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.35 }}
              className="text-base md:text-lg leading-relaxed text-white mt-4"
            >
              Po intensywnym dniu pracy zapraszamy do naszej strefy SPA, gdzie
              Goście mogą zrelaksować się w saunie, jacuzzi lub podczas
              profesjonalnych masaży.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg leading-relaxed text-white mt-4"
            >
              Organizujemy również wieczory integracyjne i programy team
              buildingowe – które sprzyjają budowaniu relacji i wspólnej
              motywacji zespołu.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.45 }}
              className="pt-6 md:pt-8"
            >
              <Link href={businessUrl}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                >
                  Dostępna oferta
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Business;
