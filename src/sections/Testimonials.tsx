"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“Sehr gute Ware und freundlich wird man auch behandelt. Weiter so 👍”",
    name: "Sven Lechner",
    title: "Google Rezension",
    avatarImg: avatar2,
  },
  {
    text: "“انصح الكل بزيارته اسعاره جدا رائعة وتجد كل مايلزم”",
    name: "Roni Alsadek",
    title: "Google Rezension",
    avatarImg: avatar1,
  },
  {
    text: "“My new favourite to go to Iranian supermarket. Everything is fresh with a nice variety”",
    name: "M D",
    title: "Google Rezension",
    avatarImg: avatar4,
  },
  {
    text: "“فروشنده بسیار خوش برخورد و مودب که همیشه اجناس درجه یکی دارد.”",
    name: "Ziba Schön",
    title: "Google Rezension",
    avatarImg: avatar2,
  },
];

export const Testimonials = () => {
  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-24">
      <div className="container">
        <h2 className=" text-black font-serif font-bold text-5xl md:text-6xl text-center tracking-tighter">
          Stimmen unserer Kunden
        </h2>
        <p className="text-black/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
        sehen Sie, was unsere geschätzten Kunden über ihre Erfahrungen im Sultan Market zu sagen haben
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0,",
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex gap-5 pr-5 flex-none"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-[#FFD700] border-opacity-30 p-6 md:p-10 rounded-xl bg-black text-white max-w-xs md:max-w-md flex-none"
              >
                <div className="text-lg tracking-tight md:text-2xl">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#fcfcfc] after:opacity-30 after:mix-blend-color-burn before:content-[''] before:absolute before:inset-0 before:border before:border-[#FFD700] before:border-opacity-50 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="h-11 w-11 rounded-lg grayscale"
                    />
                  </div>
                  <div>
                    <div className="text-white">
                      <div>{testimonial.name}</div>
                      <div className="text-[#FFD700] text-opacity-80 text-sm">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};