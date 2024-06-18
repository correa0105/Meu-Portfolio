import React from 'react';
import PropTypes from 'prop-types';
import { MainContainer } from './style';

export default function Main({ children }) {
  return <MainContainer className="my-0 mx-auto w-100 py-0 px-5">{children}</MainContainer>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
