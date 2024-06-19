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
        <h1>Seja bem-vindo,</h1>
      </div>
      <div>
        <h2>Lucas Corrêa.</h2>
      </div>
      <div>
        <h3>Desenvolvedor Web</h3>
      </div>
      <div>
        <p>
          Como desenvolvedor, meu foco é criar soluções robustas e escaláveis, com base em princípios sólidos de programação e design. Estou sempre
          aberto a desafios e colaboração em equipe, buscando oportunidades para aprender e crescer profissionalmente, estou constantemente pronto
          para enfrentar novos desafios e <span className="text-highlighted">superar expectativas</span>.
        </p>
      </div>
      <div className="d-flex">
        <Hover3DEffect
          className="py-4 px-5 mt-5"
          text="Confira meus certificados!"
          link="https://docs.google.com/document/d/1x0tm0wLbqmLst5LkGAVdMPnpKwarnJB3ZHuVG_nWBuU/edit?usp=sharing"
        />
      </div>
    </Section>
  );
}
