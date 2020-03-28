import React from 'react';

import { SocialMediaIcons } from './SocialMediaIcons';

import typewriterDivider from '../../images/typewriter-divider.png';

export const Footer = () => {
  return (
    <footer className='mainFooter'>
      <section className='mainFooter-content'>
        <img src={typewriterDivider} className='mainFooter-divider' alt='divider' />

        <section className='mainFooter-socialSection'>
          <h2>Let's work together!</h2>


          <SocialMediaIcons classes='mainFooter-socialSection-socialIcons' />
        </section>

        <section className='mainFooter-contactSection'>
          <input type='text' placeholder='Name' required={true} className='mainFooter-contactSection-name' />

          <input
            type='email'
            placeholder='Email Address'
            required={true}
            className='mainFooter-contactSection-email'
          />

          <select required={true} className='mainFooter-contactSection-services'>
            <option>-- services --</option>
            <option value='Web Editorial'>Web Editorial</option>
            <option value='Print Editorial'>Print Editorial</option>
            <option value='Editing'>Editing</option>
            <option value='Content Marketing'>Content Marketing</option>
            <option value='Email Marketing'>Email Marketing</option>
            <option value='Corporate Blogs'>Corporate Blogs</option>
            <option value='Sponsored Content'>Sponsored Content</option>
            <option value='Web Copy'>Web Copy</option>
            <option value='Public Relations'>Public Relations</option>
            <option value='Something Else'>Something Else</option>
          </select>

          <textarea placeholder='Message' required={true} className='mainFooter-contactSection-message'>
          </textarea>

          <button className='button--black'>
            <span className='button-inner'>
              Submit
            </span>
          </button>
        </section>
      </section>
    </footer>
  );
}