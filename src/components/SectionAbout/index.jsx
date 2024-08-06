import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { BiSolidRightArrow } from 'react-icons/bi';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from './style';
import HeadingSection from '../HeadingSection';

export default function SectionAbout() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    const headingElement = headingRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: 'top 75%',
      },
    });

    tl.from(sectionElement, { opacity: 0, duration: 2 });
    tl.from(headingElement, { x: -100, opacity: 0, duration: 1 }, '<');
  });

  return (
    <Section id="About" className="d-flex flex-column p-0 my-0 mx-auto" ref={sectionRef}>
      <div className="d-flex" ref={headingRef}>
        <HeadingSection text="Sobre Mim" className="mb-2" />
      </div>
      <div className="row mt-5 align-items-start">
        <div className="col-md-7">
          <p>
            Olá! Meu nome é Lucas e <span className="text-highlighted">desde 2022</span> me dedico à programação. Com mais de{' '}
            <span className="text-highlighted">3 mil horas de experiência</span>, desenvolvi diversas aplicações e fundei uma empresa de
            Infraestrutura de TI, atendendo 4 clientes e 28 lojas.
          </p>
          <p>Essa experiência ampliou minha compreensão das necessidades empresariais e me permitiu entregar soluções de alto valor agregado.</p>
          <p>Atualmente, foco na criação de soluções dinâmicas e eficientes que se adaptam às demandas do mercado, sempre buscando inovação.</p>
          <ul className="grid-skills">
            <li>
              <BiSolidRightArrow fontSize={10} color="#ff631a" />
              JavaScript (ES6+)
            </li>
            <li>
              <BiSolidRightArrow fontSize={10} color="#ff631a" />
              React
            </li>
            <li>
              <BiSolidRightArrow fontSize={10} color="#ff631a" />
              Node.js
            </li>
            <li>
              <BiSolidRightArrow fontSize={10} color="#ff631a" />
              TypeScript
            </li>
            <li>
              <BiSolidRightArrow fontSize={10} color="#ff631a" />
              Java
            </li>
            <li>
              <BiSolidRightArrow fontSize={10} color="#ff631a" />
              SQL/NoSQL
            </li>
          </ul>
        </div>
        <div className="col-md-5">
          <div className="img-container mx-auto">
            <img src="Lucas.png" alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
}
