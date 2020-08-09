import React from 'react';
import PropTypes from 'prop-types';

import hero from '../../images/hero.png';
import { Link } from 'react-router-dom';
import { TestimonialsWidget } from '../global/TestimonialsWidget';
import { ExcerptWidget } from '../global/ExcerptWidget';
import goldDivider from '../../images/gold-divider.png';

export const ContentIndex = ({type, content}) => {
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
        {
          content.map((article) => (
            <ExcerptWidget
              key={article.seo}
              title={[article.publication, article.title].join(' — ')}
              excerpt={article.overview}
              link={`/${type}-content/${article.seo}`}
            />
          ))
        }
      </section>

      <img src={goldDivider} className='divider' alt='divider' />

      <TestimonialsWidget />

      <div className='divider' />
    </main>
  );
};

ContentIndex.propTypes = {
  content: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};