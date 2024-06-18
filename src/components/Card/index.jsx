import React from 'react';
import { CiFolderOn } from 'react-icons/ci';
import { LuGithub } from 'react-icons/lu';
import PropTypes from 'prop-types';
import { CardContainer } from './style';

export default function Card({ gitHub, technologies, text, title }) {
  return (
    <CardContainer className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <CiFolderOn fontSize={45} color="#ff631a" />
        <a aria-label="any" href={gitHub} className="github-icon" target="_blank" rel="noreferrer">
          <LuGithub fontSize={25} color="inherit" />
        </a>
      </div>
      <div className="d-flex flex-column gap-4 mt-4">
        <h2 className="card-title">{title}</h2>
        <p className="card-paragraphy">{text}</p>
      </div>
      <ul className="d-flex p-0 gap-4 mt-auto mb-2">
        {technologies.map((tech) => (
          <li className="technology" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </CardContainer>
  );
}

Card.propTypes = {
  gitHub: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
