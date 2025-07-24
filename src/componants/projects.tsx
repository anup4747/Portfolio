import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface ProjectsProps {
  linkClasses: string;
}

const Projects: React.FC<ProjectsProps> = ({ linkClasses }) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(titleRef.current, { y: 30 }, { y: 0, duration: 1, delay: 1.6 });
    gsap.fromTo(
      infoRef.current,
      { y: 10, opacity: 0 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.8 }
    );
  });

  return (
    <div className="mb-6">
      <div className="inline-block overflow-hidden">
        <div>
          <div
            ref={titleRef}
            className="flex items-center space-x-2 mb-3 h-auto"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <h2 className="text-sm font-bold font-mono text-blue-500">
              /projects
            </h2>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div>
          <p ref={infoRef} className="text-sm font-mono leading-relaxed">
            Outside of work, I've built a few tools that help marketers move
            faster. One of them is{" "}
            <a
              href="https://www.google.com/"
              target="_blank"
              className={`underline transition-colors ${linkClasses}`}
            >
              Howly
            </a>
            , a side project I spun up to map out HubSpot workflows and make
            automation easier to navigate. I also created{" "}
            <a
              href="https://www.google.com/"
              target="_blank"
              className={`underline transition-colors ${linkClasses}`}
            >
              HubSpot Toolbox
            </a>
            , a Chrome extension featured by Google and used by 800+ teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
