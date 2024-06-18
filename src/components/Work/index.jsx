import React from 'react';
import PropTypes from 'prop-types';
import { WorkContainer } from './style';

export default function Work({ date, office, company, children }) {
  return (
    <WorkContainer className="d-flex flex-column">
      <h2>
        {office} <span className="company">{company}</span>
      </h2>
      <span>{date}</span>
      <div>{children}</div>
    </WorkContainer>
  );
}

Work.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};
