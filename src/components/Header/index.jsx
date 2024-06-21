import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import { HeaderContainer, Cursor } from './style';
import ItemMenu from '../ItemMenu';
import Hover3DEffect from '../Hover3DEffect';

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline({
      defaults: { ease: 'power4.outIn', duration: 0.1 },
    });

    gsap.to('#text-typing', {
      duration: 5,
      text: 'isFullStackDeveloper == true return {',
    });

    gsap.utils.toArray('.item-menu').forEach((item) => {
      tl.from(item, {
        yPercent: -250,
        stagger: 0.001,
        scaleY: 0.9,
        opacity: 0.2,
      });
    });

    gsap.from(buttonRef.current, {
      xPercent: 100,
      opacity: 0,
      delay: 0.1,
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const isScrollingDown = prevScrollPosition < currentScrollPosition;
      setIsTop(currentScrollPosition === 0);

      if (!isTop && isScrollingDown) {
        document.getElementById('header').style.top = '-80px';
      } else {
        document.getElementById('header').style.top = '0';
      }

      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPosition, isTop]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('About');
    const yOffset = -150;
    const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('Experience');
    const yOffset = -150;
    const y = experienceSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('Projects');
    const yOffset = -150;
    const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    const yOffset = -150;
    const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <HeaderContainer id="header" className="d-flex justify-content-between align-items-center w-100" isTop={isTop}>
      <div className="container-text-typing">
        <h1 id="text-typing"> </h1>
        <Cursor id="cursor" />
      </div>
      <nav className="gap-4 align-items-center nav-menu">
        <ol className="d-flex align-items-center gap-5 p-0 m-0">
          <ItemMenu onClick={scrollToAbout} className="item-menu" text="Sobre" />
          <ItemMenu onClick={scrollToExperience} className="item-menu" text="Experiência" />
          <ItemMenu onClick={scrollToProjects} className="item-menu" text="Projetos" />
          <ItemMenu onClick={scrollToContact} className="item-menu" text="Contato" />
        </ol>
        <div className="d-flex" ref={buttonRef}>
          <Hover3DEffect className="ms-5 py-3 px-4" text="Curriculo" link="LucasCV.pdf" />
        </div>
      </nav>
    </HeaderContainer>
  );
}
