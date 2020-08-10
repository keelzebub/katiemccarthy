import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import hero from '../../images/hero.png';
import blackDivider from '../../images/black-divider.png';

export const Article = ({type, content}) => {
  const [articleContent, setArticleContent] = useState('');

  const fetchArticle = async (path) => {
    const articlePath = require(`../../lib/${type}/${path}`);
    const response = await fetch(articlePath);
    const articleText = await response.text();
    setArticleContent(articleText);
  };

  fetchArticle(content.markdown_file);

  let link = null;

  if (content.link) {
    link = (
      <a href={content.link} className='button article-button' target='_blank' rel='noopener noreferrer'>
        {content.link_name || 'View full article'}
      </a>
    );
  }

  return (
    <main className='page'>
      <section className='article-hero'>
        <img src={hero} className='article-hero-img' alt='typewriter' />
        <h1 className='article-hero-title'>
          {[content.publication, content.title].join(' — ')}
        </h1>
      </section>

      <img src={blackDivider} className='divider' alt='divider' />

      <section className='article-details'>
        {
          content.overview &&
          <article className='article-details-card'>
            <h3>Project Overview</h3>
            <p>
              {content.overview}
            </p>
          </article>
        }
        {
          content.teams_and_roles &&
          <article className='article-details-card'>
            <h3>Teams/Roles</h3>
            <p>
              {content.teams_and_roles}
            </p>
          </article>
        }
      </section>

      <img src={blackDivider} className='divider' alt='divider' />

      <section className='article-content'>
        <h2>{content.title}</h2>
        <ReactMarkdown source={articleContent} />
      </section>

      {link}
    </main>
  );
};

Article.propTypes = {
  content: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};