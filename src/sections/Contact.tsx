import { FrameEffect } from "@/components/FrameEffect";
import Image from "next/image";
import SMF from "@/assets/SultanMFront.jpeg";
import SultanMarketMaps from "@/assets/SultanMarketMaps.png";

export const Contact = () => {
  return (
    <section className="py-4 md:py-5 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full">
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src={SMF}
            alt="Vorderansicht von Sultan Market"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center 10%"
            }}
            className="scale-110 rounded-lg"
          />
        </div>

        <h2 className="mt-12 text-black font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center tracking-tighter">
          Besuchen Sie uns
        </h2>
        <p className="text-black/70 text-lg sm:text-xl md:text-2xl text-center mt-5 tracking-tight max-w-2xl mx-auto">
          Entdecken Sie die Aromen des Orients in unserem gemütlichen Laden
        </p>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-16">
          <div className="flex justify-center">
            <FrameEffect>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-black text-center">
                  Öffnungszeiten
                </h3>
                <ul className="space-y-0.5 text-black/70 text-sm sm:text-base">
                  {['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'].map((day) => (
                    <li key={day} className="flex justify-between items-center">
                      <span className="w-24">{day}</span>
                      <span className="ml-4">09:00–21:00</span>
                    </li>
                  ))}
                  <li className="flex justify-between items-center mt-2">
                    <span className="w-24">Sonntag</span>
                    <span className="ml-4">Geschlossen</span>
                  </li>
                </ul>
              </div>
            </FrameEffect>
          </div>

          <FrameEffect>
            <div className="rounded-lg p-1.5 h-full flex flex-col">
              <div className="relative flex-grow" style={{ minHeight: '300px' }}>
                <Image
                  src={SultanMarketMaps}
                  alt="Karte mit Standort von Sultan Market"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
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