import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from './style';
import HeadingSection from '../HeadingSection';
import Card from '../Card';

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

    tl.from(sectionElement, { opacity: 1, duration: 0 })
      .from(headingElement, {
        opacity: 0,
        y: -30,
        duration: 0.3,
      })
      .from(listItems, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.3,
      })
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
      <div className="d-flex flex-column" ref={headingRef}>
        <HeadingSection text="Meus Projetos" />
        <div className="paragraphy-projects mt-4">
          <p>
            Tenho mais de 60 repositórios no GitHub que cobrem tópicos essenciais para o desenvolvimento de software, incluindo padrões de projeto,
            técnicas de desenvolvimento e aplicativos funcionais. Esses repositórios oferecem desde práticas recomendadas para código limpo até
            estratégias avançadas de otimização e exemplos práticos em diversas linguagens e plataformas.
          </p>
          <span className="text-highlighted">Você pode verificar alguns abaixo</span>
        </div>
      </div>
      <ul className="row p-0 mt-5" ref={listRef}>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="ESLint/Prettier - Defaults"
            text="Ao criar um pacote de padrões para o Prettier e ESLint, pude garantir uma formatação uniforme em todo o meu código, independentemente da linguagem ou tecnologia utilizada."
            technologies={['JavaScript', 'TypeScript', 'Node', 'React']}
            gitHub="https://github.com/correa0105/ESLint-Prettier-Defaults"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="Pomodoro APP"
            text="Um software simples, mas essencial, baseado na técnica Pomodoro para gerenciamento do tempo, ajudando-me a equilibrar estudos, trabalho e lazer em minha rotina diária"
            technologies={['TypeScript', 'Node', 'React']}
            gitHub="https://github.com/correa0105/TS-PomodoroAPP"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="MyMoney"
            text="Um software para controle de contas pessoais, gerenciamento de despesas, geração de relatórios financeiros e uma dashboard simples e eficiente."
            technologies={['JavaScript', 'Node', 'React', 'MySQL']}
            gitHub="https://github.com/correa0105/MyMoney-ProjetoPessoal"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="Amigos Peludos"
            text="Software completo para adoção de pets, permitindo agendar e confirmar visitas, além de realizar a adoção."
            technologies={['JavaScript', 'Node', 'React', 'MongoDB']}
            gitHub="https://github.com/correa0105/MyMoney-ProjetoPessoal"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="TI System"
            text="Software para controle de chamados, agendamento de visitas e gerenciamento de compras, amplamente utilizado durante minha experiência na Usina do Corpo."
            technologies={['JavaScript', 'Node', 'EJS', 'MySQL']}
            gitHub="https://github.com/correa0105/MyMoney-ProjetoPessoal"
          />
        </li>
        <li className="p-3 col-12 col-sm-6 col-md-4">
          <Card
            title="Pensamentos"
            text="Software que permite registrar pensamentos em uma linha do tempo, funcionando como uma espécie de blog."
            technologies={['JavaScript', 'Node', 'EJS', 'MySQL']}
            gitHub="https://github.com/correa0105/MyMoney-ProjetoPessoal"
          />
        </li>
      </ul>
      <a
        ref={viewMoreRef}
        className="text-highlighted view-more"
        href="https://github.com/correa0105?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        Ver mais...
      </a>
    </Section>
  );
}
