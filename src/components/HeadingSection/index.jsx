import React from 'react';
import PropTypes from 'prop-types';
import { SectionHeadingContainer } from './style';

export default function HeadingSection({ text, className }) {
  return <SectionHeadingContainer className={className}>{text}</SectionHeadingContainer>;
}

HeadingSection.defaultProps = {
  text: null,
  className: null,
};

HeadingSection.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
