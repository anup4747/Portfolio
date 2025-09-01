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
  const badgesRef = useRef<HTMLDivElement | null>(null);

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
    gsap.fromTo(
      badgesRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, delay: 1.2 }
    );
  });

  return (
    <div className="text-center mb-7">
      <div ref={profileRef} className="mx-auto mb-4">
        <div className="relative inline-flex items-center justify-center">
          <div className="w-24 h-24 rounded-full p-[2px] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 shadow-lg">
            <div className={`${isDark ? "bg-[#1f2024]" : "bg-white"} w-full h-full rounded-full flex items-center justify-center`}>
              <span className={`text-2xl font-semibold ${isDark ? "text-gray-100" : "text-gray-800"}`}>AT</span>
            </div>
          </div>
        </div>
      </div>
      <h1 ref={nameRef} className="text-3xl sm:text-4xl font-bold tracking-tight mb-1">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Anup Tarwade</span>
      </h1>
      <p
        ref={bioRef}
        className={`text-sm sm:text-base ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Building digital experiences with code and creativity
      </p>
      <div
        ref={badgesRef}
        className="mt-3 flex flex-wrap justify-center gap-2"
      >
        <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium border ${
          isDark ? "bg-[#222327] text-gray-300 border-gray-700" : "bg-gray-100 text-gray-700 border-gray-200"
        }`}>
          Full‑Stack Developer
        </span>
        <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium border ${
          isDark ? "bg-[#222327] text-gray-300 border-gray-700" : "bg-gray-100 text-gray-700 border-gray-200"
        }`}>
          Musician
        </span>
        <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium border ${
          isDark ? "bg-[#222327] text-gray-300 border-gray-700" : "bg-gray-100 text-gray-700 border-gray-200"
        }`}>
          Freelancer
        </span>
      </div>
    </div>
  );
};

export default Header;
