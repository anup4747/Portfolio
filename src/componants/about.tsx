import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface AboutProps {
  linkClasses: string;
}

const About: React.FC<AboutProps> = ({ linkClasses }) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(titleRef.current, { y: 30 }, { y: 0, duration: 1, delay: 1.2 });
    gsap.fromTo(
      infoRef.current,
      { y: 10, opacity: 0 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.4 }
    );
  });

  return (
    <div className="mb-5">
      <div className="overflow-hidden inline-block">
        <div>
          <div ref={titleRef} className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-sm font-bold font-mono text-green-500">
              /about
            </h2>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div>
          <div>
            <p ref={infoRef} className="text-sm font-mono leading-relaxed">
              Hey! I'm Anup, passionate about building products. I've worked on
              some{" "}
              <a
                href="https://www.google.com/"
                target="_blank"
                className={`underline transition-colors ${linkClasses}`}
              >
                freelance
              </a>{" "}
              projects in server-side development and server-side development.
              Through internships and hackathons, I’ve designed user-focused
              interfaces and optimized workflows. I’ve also done some{" "}
              <a
                href="https://www.google.com/"
                target="_blank"
                className={`underline transition-colors ${linkClasses}`}
              >
                open-source
              </a>{" "}
              on Backend projects and  Web3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
