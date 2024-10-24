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
        <HeadingSection text="About Me" className="mb-2" />
      </div>
      <div className="row mt-5 align-items-start">
        <div className="col-md-7">
          <p>
            Hello! My name is Lucas, and <span className="text-highlighted">since 2022</span>, I have been dedicated to programming. With over{' '}
            <span className="text-highlighted">3,000 hours of experience</span>, I have developed various applications and founded an IT
            Infrastructure company, serving 4 clients and 28 stores.
          </p>
          <p>This experience has broadened my understanding of business needs and allowed me to deliver high-value solutions.</p>
          <p>Currently, I focus on creating dynamic and efficient solutions that adapt to market demands, always seeking innovation.</p>
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
