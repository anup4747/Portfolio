import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface SocialLinksProps {
  buttonClasses: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ buttonClasses }) => {
  const link1 = useRef<HTMLAnchorElement | null>(null);
  const link2 = useRef<HTMLAnchorElement | null>(null);
  const link3 = useRef<HTMLAnchorElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      link1.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 2.6 }
    );
    gsap.fromTo(
      link2.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 2.7 }
    );
    gsap.fromTo(
      link3.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 2.8 }
    );
  }); 
  return (
    <div className="flex justify-center space-x-3 mb-6">
      <div className="overflow-hidden">
        <div>
          <a
            ref={link1}
            href="#"
            className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${buttonClasses}`}
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="overflow-hidden">
        <div>
          <a
            ref={link2}
            href="https://x.com/anup23257"
            target="_blank"
            className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${buttonClasses}`}
            title="Tweeter"
          >
              <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="overflow-hidden">
        <div>
          <a
            ref={link3}
            href="#"
            className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${buttonClasses}`}
            title="Linkdin"
          >
             <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
