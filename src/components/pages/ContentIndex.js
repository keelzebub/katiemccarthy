import React from 'react';
import PropTypes from 'prop-types';

import hero from '../../images/hero.png';
import { Link } from 'react-router-dom';
import { TestimonialsWidget } from '../global/TestimonialsWidget';
import { ExcerptWidget } from '../global/ExcerptWidget';
import goldDivider from '../../images/gold-divider.png';

export const ContentIndex = ({type}) => {
  return (
    <main className='page'>
      <section className='contentIndex-hero'>
        <img src={hero} className='contentIndex-hero-img' alt='typewriter' />
        <h1 className='contentIndex-hero-title'>{type} Content</h1>
        <Link to='hire-me' className='button'>
          Hire Katie
        </Link>
      </section>

      <section className='contentIndex-excerpts'>
        <ExcerptWidget
          title='Lightspeed Email Marketing - 1'
          excerpt='Project Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
        />
        <ExcerptWidget
          title='Lightspeed Email Marketing – 2'
          excerpt='Project Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
        />
        <ExcerptWidget
          title='Lightspeed Email Marketing – 3'
          excerpt='Project Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
        />

        <ExcerptWidget
          title='Lightspeed Email Marketing – 3'
          excerpt='Project Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
        />

        <ExcerptWidget
          title='Lightspeed Email Marketing – 3'
          excerpt='Project Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
        />

        <ExcerptWidget
          title='Lightspeed Email Marketing – 3'
          excerpt='Project Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        />
      </section>

      <img src={goldDivider} className='divider' alt='divider' />

      <TestimonialsWidget />

      <div className='divider' />
    </main>
  );
};

ContentIndex.propTypes = {
  type: PropTypes.string.isRequired,
};