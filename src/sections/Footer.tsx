import Image from "next/image";
import ImageSultan from "@/assets/ImageSultan.png";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-black/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-black/15 overflow-hidden">
              <Image
                src={ImageSultan}
                alt="Sultan Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="font-medium text-black">AI Start Landing Page</div>
          </div>
          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Devs
            </a>
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-black/70 hover:text-black text-xs md:text-sm transition"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-black/70 hover:text-black transition" />
            <InstaSocial className="text-black/70 hover:text-black transition" />
            <YTSocial className="text-black/70 hover:text-black transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};