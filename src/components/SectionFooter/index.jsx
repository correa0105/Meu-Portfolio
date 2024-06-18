import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from './style';

export default function SectionFooter() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: 'top 100%',
      },
    });

    tl.from(sectionElement, {
      xPercent: 50,
      opacity: 0,
      delay: 0.1,
    });
  });

  return (
    <Section ref={sectionRef} className="d-flex justify-content-center p-0 mx-auto">
      <div className="d-flex flex-column align-items-center">
        <span>
          Projetado:{' '}
          <a href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noreferrer">
            {' '}
            Britanny Chiang
          </a>
        </span>
        <span>
          Desenvolvido por
          <a href="https://www.linkedin.com/in/correalucas0105/" target="_blank" rel="noreferrer">
            {' '}
            Lucas Corrêa
          </a>
        </span>
      </div>
    </Section>
  );
}
