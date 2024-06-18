import React from 'react';
import PropTypes from 'prop-types';
import { Hover3DEffectContainer } from './style';

export default function Hover3DEffect({ text, link, className }) {
  return (
    <Hover3DEffectContainer target="_blank" className={className} href={link}>
      {text}
    </Hover3DEffectContainer>
  );
}

Hover3DEffect.defaultProps = {
  link: null,
  text: null,
  className: null,
};

Hover3DEffect.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};
