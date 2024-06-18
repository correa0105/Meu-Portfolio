import React, { useRef, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import { SocialListContainer } from './style';

export default function SocialList() {
  const itemRefs = useRef([]);
  const linkRefs = useRef([]);

  useEffect(() => {
    itemRefs.current.forEach((itemElement, index) => {
      const linkElement = linkRefs.current[index];

      const handleMouseEnter = () => {
        gsap.to(itemElement, { y: -5, duration: 0.3 });
        gsap.to(linkElement, { color: '#ff631a', duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(itemElement, { y: 0, duration: 0.3 });
        gsap.to(linkElement, { color: '#ccd6f6', duration: 0.3 });
      };

      itemElement.addEventListener('mouseenter', handleMouseEnter);
      itemElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        itemElement.removeEventListener('mouseenter', handleMouseEnter);
        itemElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <SocialListContainer>
      <li
        ref={(el) => {
          itemRefs.current[0] = el;
        }}
      >
        <a
          target="_blank"
          href="https://www.instagram.com/dev_lucascorrea/"
          aria-label="Instagram"
          ref={(el) => {
            linkRefs.current[0] = el;
          }}
          rel="noreferrer"
        >
          <FaInstagram fontSize={22} />
        </a>
      </li>
      <li
        ref={(el) => {
          itemRefs.current[1] = el;
        }}
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/correalucas0105/"
          aria-label="LinkedIn"
          ref={(el) => {
            linkRefs.current[1] = el;
          }}
          rel="noreferrer"
        >
          <FaLinkedin fontSize={22} />
        </a>
      </li>
      <li
        ref={(el) => {
          itemRefs.current[2] = el;
        }}
      >
        <a
          target="_blank"
          href="https://github.com/correa0105"
          aria-label="GitHub"
          ref={(el) => {
            linkRefs.current[2] = el;
          }}
          rel="noreferrer"
        >
          <FaGithub fontSize={22} />
        </a>
      </li>
    </SocialListContainer>
  );
}
