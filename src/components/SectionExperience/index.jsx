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

  const menuItems = useMemo(() => ['Cubic Solutions', 'Usina do Corpo', 'InterCement', 'Autônomo'], []);

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
    tl.from(headingElement, { x: 100, opacity: 0, duration: 1 }, '<');
  });

  useEffect(() => {
    gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
    calculateScrollPosition();
  }, [selectedMenuItem, calculateScrollPosition]);

  return (
    <Section id="Experience" className="d-flex flex-column justify-content-center mx-auto" ref={sectionRef}>
      <div className="d-flex" ref={headingRef}>
        <HeadingSection text="Experiência" />
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
          {selectedMenuItem === 'Cubic Solutions' && (
            <Work date="Julho de 2023 - Abril de 2024" office="Gestor de TI" company="@ Cubic Solutions">
              <WorkParagraphy text="Abrir minha empresa de infraestrutura de TI marcou minha carreira. Aprendi a importância da comunicação eficaz, da adaptação rápida às demandas dos clientes e da gestão eficiente de recursos." />
              <WorkParagraphy text="Implementei sistemas de controle de acessos, realizei manutenção de hardware, instalei e gerenciei redes, servidores e roteamento, proporcionando uma infraestrutura robusta. Também implementei sistemas de ponto eletrônico e desenvolvi software personalizado, adaptando soluções às necessidades específicas dos clientes para otimizar processos e aumentar a produtividade." />
            </Work>
          )}
          {selectedMenuItem === 'Usina do Corpo' && (
            <Work date="Outubro de 2019 - Março de 2023" office="Analista de Sistemas" company="@ Usina Do Corpo">
              <WorkParagraphy text="Gerenciei toda a rede de computadores, implementei novos sistemas e resolvi problemas operacionais usando tecnologia avançada. Minhas responsabilidades incluíam a manutenção de hardware, controle de acesso com catracas eletrônicas e gerenciamento de servidor." />
              <WorkParagraphy text="Além disso, cuidei da manutenção do servidor Apache e desenvolvi soluções web utilizando HTML, CSS e JavaScript. Minha experiência em redes de computadores foi fundamental para assegurar a conectividade e a eficiência das operações diárias da empresa." />
            </Work>
          )}
          {selectedMenuItem === 'InterCement' && (
            <Work date="Novembro de 2018 - Outubro de 2019" office="Aux. Operatória de Manutenção" company="@ InterCement">
              <WorkParagraphy text="Como auxiliar de operações de manutenção, adquiri habilidades em automação de escritório e elaboração de relatórios, otimizando processos e aumentando a produtividade. Trabalhei com o sistema SAP, amplamente usado em empresas multinacionais para integrar processos de negócios." />
              <WorkParagraphy text="Trabalhar em uma empresa multinacional ampliou minha visão do ambiente corporativo, fortalecendo minha postura profissional. Aprendi a enfrentar desafios complexos, trabalhar em equipe e valorizar a organização e precisão nos processos. Essa experiência foi essencial para meu crescimento profissional e aprimoramento no mundo corporativo." />
            </Work>
          )}
          {selectedMenuItem === 'Autônomo' && (
            <Work date="2016 - Novembro de 2019" office="Técnico de Informática" company="@ Autônomo">
              <WorkParagraphy text="Durante minha fase como autônomo, atuei como técnico em informática, o que me proporcionou uma imersão profunda no mundo da tecnologia. Foi nesse período que desenvolvi um forte interesse pela informática, ao lidar com uma variedade de problemas e soluções em ambientes diversos. Como técnico, tive a oportunidade de trabalhar de forma independente, o que me permitiu explorar diferentes aspectos da área e aprimorar minhas habilidades de resolução de problemas." />
            </Work>
          )}
        </Content>
      </Container>
    </Section>
  );
}
