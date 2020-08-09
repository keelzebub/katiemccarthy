import React from 'react';
import { Link } from 'react-router-dom';

import { ExcerptWidget } from '../global/ExcerptWidget';
import { TestimonialsWidget } from '../global/TestimonialsWidget';
import { SocialMediaIcons } from '../global/SocialMediaIcons';
import { Icon } from '../global/Icon';

import brandedContent from '../../lib/branded-content.json';
import editorialContent from '../../lib/editorial-content.json';
import services from '../../lib/services';

import hero from '../../images/hero.png';
import typewriterDivider from '../../images/typewriter-divider.png';
import goldDivider from '../../images/gold-divider.png';
import profilePicture from '../../images/profile-picture.jpg';

export const Main = () => {
  const buildServiceItem = (service) => {
    return (
      <article className='main-services-list-item' key={service.name}>
        <img src={service.icon} alt={service.name} />
        <h4>{service.name}</h4>
        <p>{service.description}</p>
      </article>
    );
  };

  const buildExcerpt = (type, article) => (
    <ExcerptWidget
      key={article.seo}
      title={[article.publication, article.title].join(' — ')}
      excerpt={article.overview}
      link={`/${type}-content/${article.seo}`}
    />
  );

  return (
    <main className='page'>
      <section className='main-hero'>
        <div>
          <img src={hero} className='main-hero-img' alt='typewriter' />
          <h1>Katie McCarthy</h1>
        </div>
        <a href='#featuredWork'>
          <Icon name='icon-down-button' classes='main-hero-button' />
        </a>
      </section>

      <img src={goldDivider} className='divider' alt='divider' id='featuredWork' />

      <section className='main-featuredWork'>
        <h2>Featured Work</h2>
        <section className='main-featuredWork-links'>
          <Link className='main-featuredWork-link' to='/editorial-content'>Editorial Content</Link>
          |
          <Link className='main-featuredWork-link' to='/branded-content'>Branded Content</Link>
        </section>
        <section className='main-featuredWork-excerpts'>
          {
            brandedContent.map((article) => {
              if (article.featured) {
                return buildExcerpt('branded', article);
              }
              return null;
            })
          }
          {
            editorialContent.map((article) => {
              if (article.featured) {
                return buildExcerpt('editorial', article);
              }
              return null;
            })
          }
        </section>
      </section>

      <img src={typewriterDivider} className='divider' alt='divider' id='about' />

      <section className='main-about'>
        <article className='main-about-picture'>
          <img src={profilePicture} alt='Katie McCarthy' width='225' height='225' />
        </article>
        <article className='main-about-profile'>
          <h2>I’m Katie and I’m a writer based in Portland, Oregon.</h2>
          <p>
            I’ve been in the game since I was 20, working as a club entertainment reporter in L.A. My very first interview was with Nick Harmer from Death Cab for Cutie. At the time, I was sure my job couldn’t get any better.
          </p>
          <p>
            Lo and behold, it did! In 2008, I was promoted to editor of Where Los Angeles and Where GuestBook Los Angeles, and covered art, culture, beauty, fashion, design, nightlife, food and celebrities. I worked at Where for over six years and my team’s work was nominated for multiple Maggie Awards.
          </p>
          <p>
            When I became managing editor at TotalBeauty.com in 2014, my boss and mentor told me I had knack for writing sponsored content. Since then, I’ve balanced my time between editorial and branded content.
          </p>
          <p>
            On the content marketing side, I’ve worked with Forbes 500 companies in retail, personal care and beauty — including Target, Forever 21, Johnson & Johnson, Procter & Gamble, Elizabeth Arden and Estée Lauder Companies — as well as tech start-ups that are changing the world with their innovations.
          </p>
          <p>
            Today, people consume more content than ever. This is why it’s so important for your brand to produce exceptionally high-quality content: Your competition has never been stronger.
          </p>
          <p>
            I approach my work with an editor’s eye for detail and structure, and a marketer’s instincts for what engages people and meets strategic goals. Whether you have a specific vision for your content and need a hand with execution, or you have no idea where to start, I can help.
          </p>
          <p>
            Let’s work together!
          </p>
          <SocialMediaIcons />
        </article>
      </section>

      <img src={goldDivider} className='divider' alt='divider' />

      <TestimonialsWidget />

      <img src={goldDivider} className='divider' alt='divider' id='services' />

      <section className='main-services'>
        <h2>Services</h2>
        <section className='main-services-list'>
          {services.map((service) => buildServiceItem(service))}
        </section>
      </section>
    </main>
  );
}