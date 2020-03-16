import React from 'react';
import { Link } from 'react-router-dom';

import { ExcerptWidget } from '../global/ExcerptWidget';
import { TestimonialsWidget } from '../global/TestimonialsWidget';
import { Icon } from '../global/Icon';

import hero from '../../images/hero.png';
import typewriterDivider from '../../images/typewriter-divider.png';
import goldDivider from '../../images/gold-divider.png';
import profilePicture from '../../images/profile-picture.jpg';
import linkedInIcon from '../../images/linkedin-icon.svg';
import instagramIcon from '../../images/instagram-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';
import twitterIcon from '../../images/twitter-icon.svg';

import services from '../../lib/services';

export const Main = () => {

  const buildServiceItem = (service) => {
    return (
      <article className='main-services-list-item'>
        <i className={`el el-${service.icon}`}></i>
        <h4>{service.name}</h4>
        <p>{service.description}</p>
      </article>
    );
  }





  return (
    <main className='page page--main'>
      <section className='main-hero'>
        <img src={hero} className='main-hero-img' alt='typewriter' />
        <h1>Katie McCarthy</h1>
        <a href='#featuredWork'>
          <Icon name='icon-down-button' classes='main-hero-button' />
        </a>
      </section>

      <img src={goldDivider} className='main-divider' alt='divider' id='featuredWork' />

      <section className='main-featuredWork'>
        <h1>Featured Work</h1>
        <section className='main-featuredWork-links'>
          <Link className='main-featuredWork-link' to='/editorial-content'>Editorial Content</Link>
          |
          <Link className='main-featuredWork-link' to='/branded-content'>Branded Content</Link>
        </section>
        <section className='main-featuredWork-excerpts'>
          <ExcerptWidget
            title='Lightspeed Email Marketing - 1'
            excerpt='Project Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
          />
          <ExcerptWidget
            title='Lightspeed Email Marketing – 2'
            excerpt='Project Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
          />
          <ExcerptWidget
            title='Lightspeed Email Marketing – 3'
            excerpt='Project Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
          />
        </section>
      </section>

      <img src={typewriterDivider} className='main-divider' alt='divider' />

      <section className='main-about' id='about'>
        <article className='main-about-picture'>
          <img src={profilePicture} alt="Katie McCarthy" width='225' height='225' />
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
          <section>
            <a href='https://www.facebook.com/ktjmccarthy'
                className='main-about-socialIcon'
                target='_blank'
                rel='noopener noreferrer'
              >
              <img src={facebookIcon} alt='Facebook' />
            </a>
            <a href='https://twitter.com/ktjmccarthy'
                className='main-about-socialIcon'
                target='_blank'
                rel='noopener noreferrer'
              >
              <img src={twitterIcon} alt='Twitter' />
            </a>
            <a href='https://www.linkedin.com/in/ktjmccarthy/'
                className='main-about-socialIcon'
                target='_blank'
                rel='noopener noreferrer'
              >
              <img src={linkedInIcon} alt='LinkedIn' />
            </a>
            <a href='https://www.instagram.com/katiejmccarthy/'
                className='main-about-socialIcon'
                target='_blank'
                rel='noopener noreferrer'
              >
              <img src={instagramIcon} alt='instagram' />
            </a>
          </section>
        </article>
      </section>

      <img src={goldDivider} className='main-divider' alt='divider' />

      <TestimonialsWidget />

      <img src={goldDivider} className='main-divider' alt='divider' />

      <section className='main-services' id='services'>
        <h1>Services</h1>
        <section className='main-services-list'>
          {services.map((service) => buildServiceItem(service))}
        </section>
      </section>
    </main>
  );
}