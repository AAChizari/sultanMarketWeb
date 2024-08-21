"use client";
import Link from "next/link";
import LogoIcon from "@/assets/logo1.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import ImageSultan from "@/assets/ImageSultan.png";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 border-b border-black/15 md:border-none sticky top-0 z-20">
      <div className="absolute inset-0 backdrop-blur md:hidden"></div>
      <div className="container relative">
        <div className="flex justify-between items-center md:border border-black/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 overflow-hidden">
              <Image
                src={ImageSultan}
                alt="Sultan Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:block hidden flex-grow">
            <nav className="flex justify-center gap-8 text-sm">
              <Link
                href="/"
                className="text-xl font-bold text-black/70 hover:text-black transition"
              >
                Startseite
              </Link>
              <Link
                href="/about"
                className="text-xl font-bold text-black/70 hover:text-black transition"
              >
                Über uns
              </Link>
              <Link
                href="/product"
                className="text-xl font-bold text-black/70 hover:text-black transition"
              >
                Produkt
              </Link>
            </nav>
          </div>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black/70 hover:text-black transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon className="h-full w-full" />
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 right-0 bg-[#999999]/70 rounded-b-2xl border-t border-black/15 py-2 md:hidden">
                <nav className="flex flex-col items-center">
                  <Link
                    href="/"
                    className="py-2 text-xl font-bold text-black/70 hover:text-black transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Startseite
                  </Link>
                  <Link
                    href="/about"
                    className="py-2 text-xl font-bold text-black/70 hover:text-black transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Über uns
                  </Link>
                  <Link
                    href="/product"
                    className="py-2 text-xl font-bold text-black/70 hover:text-black transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Produkte
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
