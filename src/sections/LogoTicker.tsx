"use client";
import ghazallogo from "@/assets/logo-ghazal.png";
import naderilogo from "@/assets/logo-naderi.png";
import pamirLogo from "@/assets/logo-pamir.png";
import cheetos from "@/assets/logo-cheetos.png";
import { motion } from "framer-motion";
import logo1n1 from "@/assets/logo-oneandonegroup.png";
import ahmadLogo from "@/assets/logo-ahmad.png";
import { FrameEffect } from "@/components/FrameEffect";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24 mt-10 overflow-hidden">
      <div className="w-full">
        <div className="flex items-center">
          <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 10,
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[
                cheetos,
                ghazallogo,
                naderilogo,
                pamirLogo,
                ahmadLogo,
                logo1n1,
                ghazallogo,
                naderilogo,
                pamirLogo,
                ahmadLogo,
                logo1n1,
                cheetos,
                ghazallogo,
                naderilogo,
                pamirLogo,
                ahmadLogo,
                logo1n1,
              ].map((logo) => (
                <img src={logo.src} key={logo.src} className="h-40 w-40" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
