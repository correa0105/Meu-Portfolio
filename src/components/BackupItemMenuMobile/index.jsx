import React from 'react';
import PropTypes from 'prop-types';
import { ItemList } from './style';

export default function ItemMenuMobile({ link, text }) {
  return (
    <ItemList>
      <a href={link}>{text}</a>
    </ItemList>
  );
}

ItemMenuMobile.defaultProps = {
  link: null,
  text: null,
};

ItemMenuMobile.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};
