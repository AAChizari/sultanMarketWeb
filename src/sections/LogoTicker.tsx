"use client";

import oneandone from "@/assets/logo-oneandonegroup.png";
import cheetos from "@/assets/logo-cheetos.png";
import ghazal from "@/assets/logo-ghazal.png";
import naderi from "@/assets/logo-naderi.png";
import pamir from "@/assets/logo-pamir.png";
import ahmad from "@/assets/logo-ahmad.png";
import { log } from "console";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="py_20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">

          <div className=" flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              className="flex flex-none gap-14  pr-14 -translate-y-1/2"
            >
              {[
                oneandone,
                cheetos,
                ghazal,
                naderi,
                pamir,
                ahmad,
                oneandone,
                cheetos,
                ghazal,
                naderi,
                pamir,
                ahmad,
              ].map((logo) => (
                <img src={logo.src} key={logo.src} className="h-40 w-auto " />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};