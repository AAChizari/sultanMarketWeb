import { FrameEffect } from "@/components/FrameEffect";
import Image from "next/image";
import SMF from "@/assets/SultanMFront.jpeg";
import SultanMarketMaps from "@/assets/SultanMarketMaps.png";
import SMF2 from "@/assets/SultanMFront2.jpg";

export const Contact = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-1">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Kontakt & Adresse
          </h2>
        </div>
        <FrameEffect>
          <div className="flex flex-col h-full w-full text-black p-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 p-3 mb-8 md:mb-0 flex flex-col">
                <Image
                  src={SMF}
                  alt="Sultan Market Front"
                  className="rounded-lg shadow-lg mb-4 "
                />
                <Image
                  src={SMF2}
                  alt="Sultan Market Front"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 px-4 md:border-l md:border-gray-300">
                <h3 className="text-2xl font-semibold mb-4">
                  Besuchen Sie uns
                </h3>
                <p className="mb-4">Wilhelmstraße 163, Berlin 13585</p>
                <h3 className="text-2xl font-semibold mb-4">Öffnungszeiten:</h3>
                <p className="mb-4">
                  Montag - Samstag: 9:00 - 21:00 Uhr
                  <br />
                  Sonntag: Geschlossen
                </p>
                <h3 className="text-2xl font-semibold mb-4">
                  Kontakt Information
                </h3>
                <p className="mb-2">Telefonnr.: 0163 3232589</p>
                <p className="mb-4">Email: info@sultan-afka.de</p>
                <Image
                  src={SultanMarketMaps}
                  alt="Sultan Market Location"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </FrameEffect>
      </div>
    </section>
  );
};
