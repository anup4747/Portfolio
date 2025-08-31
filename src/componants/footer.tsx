import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FiCoffee } from "react-icons/fi";

gsap.registerPlugin(useGSAP);

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const titleRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3.0 }
    );
  });

  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-hidden">
      <div>
        <div
          ref={titleRef}
          className={`flex w-full justify-center text-center px-2 font-mono ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[10px] sm:text-xs">
            <span>© {currentYear} Anup</span>
            <span className="hidden sm:inline">-</span>
            <span className="flex items-center">
              Crafted with <FiCoffee className="mx-1 sm:mx-2 w-3 h-3 sm:w-4 sm:h-4"/> and code
            </span>
            <span className="hidden sm:inline">.</span>
            <span className="hidden sm:inline">Debugged in Inter.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
