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
          className={`flex w-full justify-center text-xs font-mono ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          © {currentYear} Anup - Crafted with <FiCoffee className="mx-2"/>  and code. Debugged in Inter.
        </div>
      </div>
    </div>
  );
};

export default Footer;
