import React from 'react';
import PropTypes from 'prop-types';
import { BiSolidRightArrow } from 'react-icons/bi';
import { ParagraphyContainer } from './style';

export default function WorkParagraphy({ text }) {
  return (
    <ParagraphyContainer className="d-flex gap-4 mt-4 align-items-start">
      <div>
        <BiSolidRightArrow fontSize="2rem" color="#ff631a" />
      </div>
      {text}
    </ParagraphyContainer>
  );
}

WorkParagraphy.propTypes = {
  text: PropTypes.string.isRequired,
};
