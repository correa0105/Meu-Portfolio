import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import { HeaderContainer, NavMenu, MobileMenuList, MobileMenuButton, Cursor } from './style';
import ItemMenu from '../ItemMenu';
import ItemMenuMobile from '../BackupItemMenuMobile';
import Hover3DEffect from '../Hover3DEffect';

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.inOut' });
    } else {
      gsap.to(menuRef.current, { x: '100%', duration: 0.5, ease: 'power3.inOut' });
    }
  }, [isMenuOpen, isMobile]);

  useGSAP(() => {
    const logo = document.getElementById('logo');
    const text = 'isFullStackDeveloper == true return {';

    gsap.to(logo, {
      duration: 5,
      text,
      ease: 'none',
      onComplete: () => {
        gsap.fromTo('#cursor', { opacity: 1 }, { opacity: 0, repeat: -1, yoyo: true, ease: 'none', duration: 0.5 });
      },
    });

    const tl = gsap.timeline({
      defaults: { ease: 'power4.outIn', duration: 0.1 },
    });

    gsap.utils.toArray('.itemMenu').forEach((item) => {
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
      delay: tl.duration(), // Adiciona um atraso para começar após a animação dos itens do menu
    });
  });

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer id="header" isTop={isTop}>
      <div className="d-flex">
        <h1 id="logo"> </h1>
        <Cursor id="cursor" />
      </div>
      <NavMenu className="gap-4 align-items-center" isMobile={isMobile}>
        <ol className="d-flex align-items-center gap-5 p-0 m-0">
          <ItemMenu className="itemMenu" link="#About" text="Sobre" />
          <ItemMenu className="itemMenu" link="#Experience" text="Experiência" />
          <ItemMenu className="itemMenu" link="#Projects" text="Projetos" />
          <ItemMenu className="itemMenu" link="#Contact" text="Contato" />
        </ol>
        <div className="d-flex" ref={buttonRef}>
          <Hover3DEffect className="ms-5 py-3 px-4" text="Curriculo" link="#Curriculo" />
        </div>
      </NavMenu>
      {isMobile && (
        <>
          <MobileMenuButton isMobile={isMobile} onClick={handleMenuButtonClick}>
            {isMenuOpen ? 'X' : '☰'}
          </MobileMenuButton>
          <MobileMenuList ref={menuRef}>
            <ItemMenuMobile link="#About" text="Sobre" />
            <ItemMenuMobile link="#Experience" text="Experiência" />
            <ItemMenuMobile link="#Projects" text="Projetos" />
            <ItemMenuMobile link="#Contact" text="Contato" />
          </MobileMenuList>
        </>
      )}
    </HeaderContainer>
  );
}
