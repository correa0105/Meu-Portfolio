import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Section, Title } from './style';
import Hover3DEffect from '../Hover3DEffect';

export default function SectionContact() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: 'top 75%',
      },
    });

    tl.from(sectionElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power1.out',
      stagger: 0.2,
    });
  });
  return (
    <Section id="Contact" ref={sectionRef} className="d-flex flex-column align-items-center p-0 mx-auto">
      <Title className="d-flex justify-content-center">Whats the Next Step?</Title>
      <h3 className="mt-5">Talk to Me!</h3>
      <p className="mt-4">
        My inbox is always open to receive messages. If you have any questions, an interesting proposal, or just want to say hi, I would be happy to
        hear from you and will do my best to respond as quickly as possible!
      </p>
      <Hover3DEffect
        link="https://api.whatsapp.com/send?phone=5551997292242&text=Ol%C3%A1%2C%20entrei%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20falar%20sobre%3A"
        className="py-4 px-5 mt-5"
        text="Say Hello!"
      />
    </Section>
  );
}
