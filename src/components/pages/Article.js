import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import hero from '../../images/hero.png';
import blackDivider from '../../images/black-divider.png';

export const Article = ({content}) => {
  return (
    <main className='page'>
      <section className='article-hero'>
        <img src={hero} className='article-hero-img' alt='typewriter' />
        <h1 className='article-hero-title'>{content.page_title}</h1>
      </section>

      <img src={blackDivider} className='divider' alt='divider' />

      <section className='article-details'>
        {
          content.overview &&
          <article className='article-details-card'>
            <h3>Project Overview</h3>
            {content.overview}
          </article>
        }
        {
          content.teams_and_roles &&
          <article className='article-details-card'>
            <h3>Teams/Roles</h3>
            {content.teams_and_roles}
          </article>
        }
      </section>

      <img src={blackDivider} className='divider' alt='divider' />

      <section className='article-content'>
        <h2>{content.article_title}</h2>
        {
          content.content.split('\n').map((paragraph, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index}>
              {paragraph}
            </p>
          ))
        }
      </section>

      <Link to={content.link} className='button article-button'>
        View full article
      </Link>
    </main>
  );
};

Article.propTypes = {
  content: PropTypes.object.isRequired,
};