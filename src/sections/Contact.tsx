import { FrameEffect } from "@/components/FrameEffect";
import Image from "next/image";
import SMF from "@/assets/SultanMFront.jpeg";
import SultanMarketMaps from "@/assets/SultanMarketMaps.png";

export const Contact = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="mx-auto px-4 md:px-24">
          <div className="container">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={SMF}
                alt="Vorderansicht von Sultan Market"
                layout="fill"
                objectFit="cover"
                objectPosition="center 10%"
                className="scale-110 rounded-lg"
              />
            </div>
          </div>

        <h2 className="mt-12 text-black font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center tracking-tighter">
          Besuchen Sie uns
        </h2>
        <p className="text-black/70 text-lg sm:text-xl md:text-2xl text-center mt-5 tracking-tight max-w-2xl mx-auto">
          Entdecken Sie die Aromen des Orients in unserem gemütlichen Laden
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-[130%] mx-auto">
          <FrameEffect>
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-black">
                    Öffnungszeiten
                  </h3>
                  <ul className="space-y-2 text-black/70 text-base sm:text-lg md:text-xl">
                    <li className="flex justify-between">
                      <span className="w-32">Montag</span>
                      <span>09:00–21:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="w-32">Dienstag</span>
                      <span>09:00–21:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="w-32">Mittwoch</span>
                      <span>09:00–21:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="w-32">Donnerstag</span>
                      <span>09:00–21:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="w-32">Freitag</span>
                      <span>09:00–21:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="w-32">Samstag</span>
                      <span>09:00–21:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="w-32">Sonntag</span>
                      <span>Geschlossen</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 pl-0 md:pl-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-black">
                    Kontakt
                  </h3>
                  <ul className="space-y-3 text-black/70 text-base sm:text-lg md:text-xl">
                    <li className="flex">
                      <span className="w-24 font-semibold">Telefon:</span>
                      <span>0163-3232589</span>
                    </li>
                    <li className="flex">
                      <span className="w-24 font-semibold">E-Mail:</span>
                      <span>info@sultan-afka.de</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-24 font-semibold">Adresse:</span>
                      <span>Wilhelmstraße 163, Berlin Spandau</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FrameEffect>

          <FrameEffect>
            <div className="rounded-lg p-1.5">
              <div className="relative h-96 w-full">
                <Image
                  src={SultanMarketMaps}
                  alt="Karte mit Standort von Sultan Market"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </FrameEffect>
        </div>
      </div>
    </section>
  );
};

export default Contact;