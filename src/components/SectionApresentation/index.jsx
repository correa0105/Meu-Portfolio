import { gsap } from 'gsap';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Section } from './style';
import Hover3DEffect from '../Hover3DEffect';

export default function SectionApresentation() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const sectionElements = sectionRef.current.children;

    gsap.from(sectionElements, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: 'sine',
      stagger: 0.1,
      delay: 0.5,
    });
  });

  return (
    <Section className="d-flex flex-column justify-content-center my-0 mx-auto" ref={sectionRef}>
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2>Lucas Corrêa.</h2>
      </div>
      <div>
        <h3>Software Developer</h3>
      </div>
      <div>
        <p>
          As a developer, my focus is on creating robust and scalable solutions based on solid principles of programming and design. I am always open
          to challenges and teamwork, seeking opportunities to learn and grow professionally. Additionally, I am prepared to face new challenges and
          <span className="text-highlighted"> exceed expectations</span>.
        </p>
      </div>
      <div className="d-flex">
        <Hover3DEffect
          className="py-4 px-5 mt-5"
          text="Check My Certificates!"
          link="https://docs.google.com/document/d/1x0tm0wLbqmLst5LkGAVdMPnpKwarnJB3ZHuVG_nWBuU/edit?usp=sharing"
        />
      </div>
    </Section>
  );
}
