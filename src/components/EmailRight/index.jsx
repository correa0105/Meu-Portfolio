import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SocialListContainer } from './style';

export default function EmailRight() {
  const linkRef = useRef(null);
  useEffect(() => {
    const linkElement = linkRef.current;

    const handleMouseEnter = () => {
      gsap.to(linkElement, { y: -5, color: '#ff631a', duration: 0.1 });
    };

    const handleMouseLeave = () => {
      gsap.to(linkElement, { y: 0, color: '#ccd6f6', duration: 0.1 });
    };

    linkElement.addEventListener('mouseenter', handleMouseEnter);
    linkElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      linkElement.removeEventListener('mouseenter', handleMouseEnter);
      linkElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  return (
    <SocialListContainer>
      <a href="mailto:correa.l@icloud.com" ref={linkRef}>
        correa.l@icloud.com
      </a>
    </SocialListContainer>
  );
}
