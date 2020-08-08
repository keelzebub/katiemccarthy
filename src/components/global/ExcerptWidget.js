import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ExcerptWidget = ({image, title, excerpt, link}) => {
  return (
    <article className='excerptWidget'>
      {
        image &&
        <img src={image} alt={title} />
      }
      <div className='excerptWidget-excerpt'>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <Link to={link}>read more</Link>
      </div>
    </article>
  );
};

ExcerptWidget.propTypes = {
  excerpt: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};