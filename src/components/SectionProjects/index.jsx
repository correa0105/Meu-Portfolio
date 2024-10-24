import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from './style';
import HeadingSection from '../HeadingSection';
import Card from '../Card';
import Hover3DEffect from '../Hover3DEffect';

export default function SectionProjects() {
  const listRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const viewMoreRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const listItems = listRef.current.children;
    const sectionElement = sectionRef.current;
    const headingElement = headingRef.current;
    const viewMoreElement = viewMoreRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: 'top 75%',
      },
    });

    tl.from(sectionElement, { opacity: 0, duration: 2 });
    tl.from(headingElement, { x: -100, opacity: 0, duration: 1 }, '<')
      .from(
        listItems,
        {
          opacity: 0,
          y: 20,
          ease: 'power1.out',
          stagger: 0.3,
        },
        '<',
      )
      .from(viewMoreElement, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.3,
      });
  });

  return (
    <Section id="Projects" ref={sectionRef} className="d-flex flex-column p-0 mx-auto">
      <div className="d-flex" ref={headingRef}>
        <HeadingSection text="My Projects" />
      </div>
      <div className="paragraphy-projects mt-4">
        <p>
          I have over 60 repositories on GitHub covering essential topics for software development, including design patterns, development techniques,
          and functional applications. These repositories provide everything from best practices for clean code to advanced optimization strategies
          and practical examples in various languages and platforms.
        </p>
        <span className="text-highlighted">You can check some below.</span>
      </div>
      <ul className="row p-0 mt-5" ref={listRef}>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="ESLint/Prettier - Defaults"
            text="By creating a set of configurations for Prettier and ESLint, I was able to ensure consistent formatting across all my code, regardless of the language or technology used."
            technologies={['JavaScript', 'TypeScript', 'Node', 'React']}
            gitHub="https://github.com/correa0105/ESLint-Prettier-Defaults"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="Pomodoro APP"
            text="A simple yet essential software based on the Pomodoro technique for time management, helping me balance studies, work, and leisure in my daily routine."
            technologies={['TypeScript', 'Node', 'React']}
            gitHub="https://github.com/correa0105/TS-PomodoroAPP"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="MyMoney"
            text="Software for personal account management, expense tracking, financial report generation, and a simple, efficient dashboard."
            technologies={['JavaScript', 'Node', 'React', 'MySQL']}
            gitHub="https://github.com/correa0105/MyMoney-ProjetoPessoal"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="Amigos Peludos"
            text="A complete software for pet adoption, allowing users to schedule and confirm visits, as well as facilitate the adoption process."
            technologies={['JavaScript', 'Node', 'React', 'MongoDB']}
            gitHub="https://github.com/correa0105/APIRestfulNode-FrontReact-AdopterPet"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="TI System"
            text="Software for ticket management, visit scheduling, and purchase management, widely used during my experience at Usina do Corpo."
            technologies={['JavaScript', 'Node', 'EJS', 'MySQL']}
            gitHub="https://github.com/correa0105/TISystem-ProjetoPessoal"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="Pensamentos"
            text="Software that allows users to record thoughts on a timeline, functioning as a sort of blog."
            technologies={['JavaScript', 'Node', 'EJS', 'MySQL']}
            gitHub="https://github.com/correa0105/Pensamentos-NodeJS"
          />
        </li>
      </ul>
      <div className="d-flex justify-content-end" ref={viewMoreRef}>
        <Hover3DEffect className="px-4 py-3" link="https://github.com/correa0105?tab=repositories" text="See more..." />
      </div>
    </Section>
  );
}
