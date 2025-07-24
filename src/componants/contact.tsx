import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface ContactProps {
  linkClasses: string;
}

const Contact: React.FC<ContactProps> = ({ linkClasses }) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLParagraphElement | null>(null);
  const nameRef=  useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    // use selectors...1
    gsap.fromTo(titleRef.current, { y: 30 }, { y: 0, duration: 1, delay: 2.0 });
    gsap.fromTo(
      infoRef.current,
      { y: 10, opacity: 0 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2.2 }
    );
    gsap.fromTo(
      nameRef.current,
      { y: 10, opacity: 0 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2.4 }
    );
  }); 

  return (
    <div className="mb-3">
      <div className="overflow-hidden inline-block">
        <div>
          <div ref={titleRef} className="flex items-center space-x-2 mb-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <h2 className="text-sm font-bold font-mono text-purple-500">
              /contact
            </h2>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div>
          <p ref={infoRef} className="text-sm font-mono leading-relaxed mb-4">
            Working on something cool? I'm always down to talk lifecycle
            strategy, SaaS, or hack together a side project that shouldn't
            exist. Hit me up on{" "}
            <a
              href="https://in.linkedin.com/in/anup-tarwade-2218962b2"
              target="_blank"
              className={`underline transition-colors ${linkClasses}`}
            >
              LinkedIn
            </a>
            , shoot me an{" "}
            <a
              href="mailto:anupdcodes@gmail.com"
              className={`underline transition-colors ${linkClasses}`}
            >
              email
            </a>
            , or just say hey.
          </p>
          <div className="overflow-hidden inline-block">
            <div>

          <p ref={nameRef} className="text-sm font-mono font-bold"> - Anup Tarwade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
