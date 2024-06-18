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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: 'top 75%',
      },
    });

    tl.from(sectionElement, { opacity: 0, duration: 2.5 });
  });

  useEffect(() => {
    gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
    calculateScrollPosition();
  }, [selectedMenuItem, calculateScrollPosition]);

  return (
    <Section id="Experience" className="d-flex flex-column justify-content-center mx-auto" ref={sectionRef}>
      <HeadingSection text="Experiência" />
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
              <WorkParagraphy text="Abrir minha empresa de infraestrutura de TI foi um marco significativo na minha carreira Aprendi a importância de uma comunicação clara e eficaz, a necessidade de adaptação rápida às demandas variadas de cada cliente e a gestão eficiente de recursos para manter a qualidade do serviço" />
              <WorkParagraphy text="Atuei no controle de acesso, garantindo segurança física e digital, e realizei manutenção de hardware para assegurar desempenho ideal. Minha expertise incluía instalação e gestão de redes, servidores e roteamento, proporcionando uma infraestrutura robusta. Também implementei sistemas de ponto eletrônico e desenvolvi software personalizado, adaptando soluções às necessidades específicas de cada cliente para otimizar processos e aumentar a produtividade." />
            </Work>
          )}
          {selectedMenuItem === 'Usina do Corpo' && (
            <Work date="Outubro de 2019 - Março de 2023" office="Analista de Sistemas" company="@ Usina Do Corpo">
              <WorkParagraphy text="Gerenciei toda a rede de computadores, implementei novos sistemas e resolvi problemas operacionais usando tecnologia avançada. Minhas responsabilidades incluíam a manutenção de hardware, controle de acesso com catracas eletrônicas e gerenciamento do servidor Windows Server." />
              <WorkParagraphy text="Além disso, cuidei da manutenção do servidor Apache e desenvolvi soluções web utilizando HTML, CSS e JavaScript. Minha experiência em redes de computadores foi fundamental para assegurar a conectividade e a eficiência das operações diárias da empresa." />
            </Work>
          )}
          {selectedMenuItem === 'InterCement' && (
            <Work date="Novembro de 2018 - Outubro de 2019" office="Aux. Operatória de Manutenção" company="@ InterCement">
              <WorkParagraphy text="Durante minha experiência como auxiliar de operações de manutenção, adquiri habilidades significativas em automação de escritório e elaboração de relatórios. Esta oportunidade me permitiu mergulhar no mundo da eficiência operacional, onde aprendi a otimizar processos e aprimorar a produtividade por meio da automação de tarefas rotineiras. Além disso, tive o privilégio de conhecer e trabalhar com o sistema SAP, uma plataforma amplamente utilizada em empresas multinacionais para integração de processos de negócios." />
              <WorkParagraphy text="A experiência em uma empresa multinacional proporcionou-me uma visão mais ampla do ambiente corporativo, contribuindo para o desenvolvimento de uma postura profissional mais robusta. Aprendi a lidar com desafios complexos e a trabalhar em equipe de forma eficaz para alcançar objetivos comuns. Essa vivência também me permitiu entender a importância da organização e da precisão nos processos de trabalho, aspectos essenciais para o sucesso em um ambiente empresarial dinâmico e competitivo. Em suma, minha passagem como auxiliar de operações de manutenção foi fundamental para o meu crescimento profissional e para aprimorar minhas habilidades no mundo corporativo." />
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
