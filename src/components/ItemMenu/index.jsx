import React from 'react';
import PropTypes from 'prop-types';
import { ItemList } from './style';

export default function ItemMenu({ text, className, onClick }) {
  return (
    <ItemList className={className} onClick={onClick}>
      <span>{text}</span>
    </ItemList>
  );
}

ItemMenu.defaultProps = {
  onClick: null,
  text: null,
  className: null,
};

ItemMenu.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};
