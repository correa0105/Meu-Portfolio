import React, { useEffect, useRef } from 'react';
import { Lantern } from './style';

function LanternEffect() {
  const lanternRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (lanternRef.current) {
        lanternRef.current.style.left = `${e.clientX}px`;
        lanternRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Lantern ref={lanternRef} />;
}

export default LanternEffect;
