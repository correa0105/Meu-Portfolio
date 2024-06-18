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
      <Title className="d-flex justify-content-center">Proximo Passo</Title>
      <h3 className="mt-5">Fale Comigo!</h3>
      <p className="mt-4">
        Minha caixa de entrada está sempre aberta para receber mensagens. Se você tiver alguma dúvida, uma proposta interessante ou simplesmente
        quiser dizer oi, ficarei feliz em receber sua mensagem e farei o meu melhor para responder o mais rapidamente possível!
      </p>
      <Hover3DEffect
        link="https://api.whatsapp.com/send?phone=5551997292242&text=Ol%C3%A1%2C%20entrei%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20falar%20sobre%3A"
        className="py-4 px-5 mt-5"
        text="Diga Olá!"
      />
    </Section>
  );
}
