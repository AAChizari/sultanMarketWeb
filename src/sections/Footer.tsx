import Image from "next/image";
import ImageSultan from "@/assets/ImageSultan.png";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import FacebookIcon from "@/assets/social-facebook.svg";
import Link from "next/link";


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
            <div className="font-medium text-black">Sultan Market</div>
          </div>
          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:flex-1 lg:justify-center">
            <Link
              href="https://aachizari.github.io/aacPortfolio/"
              className="text-black/70 font-bold hover:text-black text-lg md:text-lg transition"
            >
              AA&AF Chizari
            </Link>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <a href="https://www.facebook.com/sultanmarktberlin/?locale=de_DE" className="text-black/70 hover:text-black transition">
              <FacebookIcon width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};