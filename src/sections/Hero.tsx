"use client";

import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import imageSultan from "@/assets/ImageSultan.png";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="container h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center lg:mt-8">
        {/* IMAGE CONTAINER */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:h-full">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg overflow-hidden">
            <Image
              src={imageSultan}
              alt="ProfileImage"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-black text-center">
            Persische & Asiatische Spezialitäten
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-black/70 text-center">
            Erleben Sie im Sultan Market eine vielfältige Auswahl persischer und asiatischer Spezialitäten. 
            Von exotischen Gewürzen bis zu verführerischen Süßigkeiten - tauchen Sie ein in die Aromenvielfalt des Orients.
          </p>
        </div>
      </div>
    </motion.div>
  );
};