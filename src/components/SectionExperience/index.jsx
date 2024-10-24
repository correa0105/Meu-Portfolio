import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Section, Container, MenuContainer, Menu, MenuItem, Content, Scrollbar, ScrollbarTrack } from './style';
import HeadingSection from '../HeadingSection';
import Work from '../Work';
import WorkParagraphy from '../WorkParagraphy';

export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Cubic Solutions');
  const contentRef = useRef(null);
  const menuRef = useRef(null);
  const scrollbarRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const menuItems = useMemo(() => ['Klassmatt', 'Cubic Solutions', 'Usina do Corpo', 'InterCement', 'Autônomo'], []);

  const calculateScrollPosition = useCallback(() => {
    const selectedItemIndex = menuItems.indexOf(selectedMenuItem);
    const menuItem = menuRef.current?.querySelector(`[data-index="${selectedItemIndex}"]`);
    if (menuItem && scrollbarRef.current) {
      const { top, height } = menuItem.getBoundingClientRect();
      const menuTop = menuRef.current.getBoundingClientRect().top;
      scrollbarRef.current.style.top = `${top - menuTop}px`;
      scrollbarRef.current.style.height = `${height}px`;
    }
  }, [selectedMenuItem, menuItems]);

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

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

  useEffect(() => {
    gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
    calculateScrollPosition();
  }, [selectedMenuItem, calculateScrollPosition]);

  return (
    <Section id="Experience" className="d-flex flex-column justify-content-center mx-auto" ref={sectionRef}>
      <div className="d-flex" ref={headingRef}>
        <HeadingSection text="Experience" />
      </div>
      <Container className="mt-5">
        <MenuContainer>
          <Menu ref={menuRef}>
            {menuItems.map((item, index) => (
              <MenuItem
                className="px-5 py-4"
                key={item}
                onClick={() => handleMenuItemClick(item)}
                selected={selectedMenuItem === item}
                data-index={index}
              >
                {item}
              </MenuItem>
            ))}
            <ScrollbarTrack>
              <Scrollbar ref={scrollbarRef} />
            </ScrollbarTrack>
          </Menu>
        </MenuContainer>
        <Content ref={contentRef}>
          {selectedMenuItem === 'Klassmatt' && (
            <Work date="July 2024 - Present" office="Intern Developer" company="@ Klassmatt">
              <WorkParagraphy text="Implementation of features and bug fixes in applications written in VB, JavaScript, and C#, database record updates, and creation of procedures." />
              <WorkParagraphy text="Creation of procedures, reports, documentation, and participation in sprints." />
            </Work>
          )}
          {selectedMenuItem === 'Cubic Solutions' && (
            <Work date="July 2023 - April 2024" office="IT Manager" company="@ Cubic Solutions">
              <WorkParagraphy text="Opening my IT infrastructure company marked a turning point in my career. I learned the importance of effective communication, quick adaptation to client demands, and efficient resource management." />
              <WorkParagraphy text="I implemented access control systems, performed hardware maintenance, installed and managed networks, servers, and routing, providing a robust infrastructure. I also implemented electronic timekeeping systems and developed custom software, tailoring solutions to the specific needs of clients to optimize processes and increase productivity." />
            </Work>
          )}
          {selectedMenuItem === 'Usina do Corpo' && (
            <Work date="October 2019 - March 2023" office="Systems Analyst" company="@ Usina Do Corpo">
              <WorkParagraphy text="I managed the entire computer network, implemented new systems, and resolved operational issues using advanced technology. My responsibilities included hardware maintenance, access control with electronic turnstiles, and server management." />
              <WorkParagraphy text="Additionally, I maintained the Apache server and developed web solutions using HTML, CSS, and JavaScript. My experience in computer networks was essential to ensure connectivity and the efficiency of the company's daily operations." />
            </Work>
          )}
          {selectedMenuItem === 'InterCement' && (
            <Work date="November 2018 - October 2019" office="Maintenance Operations Assistant" company="@ InterCement">
              <WorkParagraphy text="As a maintenance operations assistant, I acquired skills in office automation and report creation, optimizing processes and increasing productivity. I worked with the SAP system, widely used in multinational companies to integrate business processes." />
              <WorkParagraphy text="Working in a multinational company broadened my perspective of the corporate environment and strengthened my professional demeanor. I learned to tackle complex challenges, work as part of a team, and value organization and precision in processes. This experience was essential for my professional growth and development in the corporate world." />
            </Work>
          )}
          {selectedMenuItem === 'Autônomo' && (
            <Work date="January 2016 - November 2019" office="IT Technician" company="@ Freelancer">
              <WorkParagraphy text="During my time as a freelancer, I worked as an IT technician, which provided me with a deep immersion in the world of technology. It was during this period that I developed a strong interest in IT by dealing with a variety of problems and solutions in different environments. As a technician, I had the opportunity to work independently, allowing me to explore different aspects of the field and enhance my problem-solving skills." />
            </Work>
          )}
        </Content>
      </Container>
    </Section>
  );
}
