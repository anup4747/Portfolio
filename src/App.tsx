import React, { useState, useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import "./App.css";
import Header from "./componants/header";
import About from "./componants/about";
import Projects from "./componants/projects";
import Contact from "./componants/contact";
import SocialLinks from "./componants/socialLInks";
import Footer from "./componants/footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Portfolio: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const themeButtonRef = useRef<HTMLButtonElement | null>(null);
  
  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );
    gsap.fromTo(
      themeButtonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.8 }
    );
  });

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeClasses = isDark
    ? "bg-[#1a1b1e] text-gray-100"
    : "bg-gray-50 text-gray-900";

  const cardClasses = isDark
    ? "bg-[#222327] border-gray-700"
    : "bg-white border-gray-200";

  const linkClasses = isDark
    ? "text-blue-400 hover:text-blue-300"
    : "text-blue-600 hover:text-blue-800";

  const buttonClasses = isDark
    ? "bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-300"
    : "bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700";

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-3 sm:p-5 lg:p-8 transition-colors duration-300 ${themeClasses}`}
    >
      <div
        ref={containerRef}
        className={`w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
        rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-2xl 
        border transition-all duration-300 ${cardClasses}`}
      >
        <div className="flex justify-end mb-3 sm:mb-4">
          <button
            ref={themeButtonRef}
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-colors duration-200 ${buttonClasses}`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>

        <Header isDark={isDark} />

        <About linkClasses={linkClasses} />

        <Projects linkClasses={linkClasses} />

        <Contact linkClasses={linkClasses} />

        <SocialLinks buttonClasses={buttonClasses} />

        <Footer isDark={isDark} />
      </div>
    </div>
  );
};

export default Portfolio;