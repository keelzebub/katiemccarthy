import React from 'react';

import linkedInIcon from '../../images/linkedin-icon.svg';
import instagramIcon from '../../images/instagram-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';
import twitterIcon from '../../images/twitter-icon.svg';

export const SocialMediaIcons = () => (
  <section>
    <a href='https://www.facebook.com/ktjmccarthy'
        className='socialMediaIcon'
        target='_blank'
        rel='noopener noreferrer'
      >
      <img src={facebookIcon} alt='Facebook' />
    </a>
    <a href='https://twitter.com/ktjmccarthy'
        className='socialMediaIcon'
        target='_blank'
        rel='noopener noreferrer'
      >
      <img src={twitterIcon} alt='Twitter' />
    </a>
    <a href='https://www.linkedin.com/in/ktjmccarthy/'
        className='socialMediaIcon'
        target='_blank'
        rel='noopener noreferrer'
      >
      <img src={linkedInIcon} alt='LinkedIn' />
    </a>
    <a href='https://www.instagram.com/katiejmccarthy/'
        className='socialMediaIcon'
        target='_blank'
        rel='noopener noreferrer'
      >
      <img src={instagramIcon} alt='instagram' />
    </a>
  </section>
);