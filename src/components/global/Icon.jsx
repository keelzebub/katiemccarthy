// SVG icons from https://material.io/tools/icons/?style=outline

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const Icon = ({ name, classes, onClick }) => {
  const iconClasses = classNames(name, classes, 'icon');

  return (
    <svg className={iconClasses} onClick={onClick}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};