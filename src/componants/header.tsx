import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface HeaderProps {
  isDark: Boolean;
}

const Header: React.FC<HeaderProps> = ({ isDark }) => {
  const profileRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const bioRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      profileRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, rotation: "+=360", duration: 1.5 }
    );
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, delay: 1.0 }
    );
  });

  return (
    <div className="text-center mb-7">
      <div
        ref={profileRef}
        className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold font-mono mx-auto mb-4 shadow-lg"
      >
        AT
      </div>
      <h1 ref={nameRef} className="text-3xl font-bold font-mono mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Anup Tarwade
      </h1>
      <p
        ref={bioRef}
        className={`text-base font-mono font-medium ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Full Stack Developer | Musician | Freelancer
      </p>
      <p className={`text-sm font-mono mt-2 ${
        isDark ? "text-gray-500" : "text-gray-500"
      }`}>
        Building digital experiences with code and creativity
      </p>
    </div>
  );
};

export default Header;
