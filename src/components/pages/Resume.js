import React from 'react';
import { Link } from 'react-router-dom';

import hero from '../../images/hero.png';

export const Resume = () => {
  return (
    <main className='page'>
      <section className='resume-hero'>
        <div>
          <img src={hero} className='resume-hero-img' alt='typewriter' />
          <h1>Katie McCarthy</h1>
          <h2>Content Marketing Manager</h2>
        </div>
        <Link to='/Katie-McCarthys-Résumé.pdf' className='button resume-button'>
          Download Resume
        </Link>
      </section>

      <section className='resume-container'>
        <h4 className='resume-container-sectionTitle'>Profile</h4>
        <article className='resume-container-sectionContent'>
          A detail-oriented content marketing manager with excellent instincts for copy and digital strategy. Has managed editorial and sponsored content for print and online outlets, producing whip-smart editorial features and click-worthy integrated marketing for major brands. Thrives in a fast-paced environment. Gets a cheap thrill from fixing spelling and grammar mistakes. Loves to see a great story and beautiful design come together.
        </article>

        <h4 className='resume-container-sectionContent'>Experience</h4>

        <h5 className='resume-container-sectionTitle'>2015–present</h5>
        <article className='resume-container-sectionContent'>
          <h5>Content Manager | Lightspeed Systems</h5>
          <ul>
            <li>
              Write and edit digital marketing content including collateral and company blogs
            </li>
            <li>
              Manage all company social media pages (Twitter, Facebook, YouTube, Google+ and LinkedIn)
            </li>
            <li>
              Devise social media content/advertising strategy for major product launches, partnership announcements and more
            </li>
            <li>
              Create and launch email campaigns and e-newsletters through ExactTarget; analyze metrics to improve strategy
            </li>
            <li>
              Own company PR efforts by disseminating press releases and maintaining contacts in education and tech media
            </li>
          </ul>
        </article>

        <h5 className='resume-container-sectionTitle'>December 2013–January 2015</h5>
        <article className='resume-container-sectionContent'>
          <h5>Managing Editor | Total Beauty Media Group</h5>
          <ul>
            <li>
              Managed sponsored content (features, dedicated emails, social media, native advertising, etc.) on BeautyRiot.com and TotalBeauty.com; clients included Estée Lauder Companies, L’Oréal, Johnson & Johnson, Procter & Gamble and Target
            </li>
            <li>
              Collaborated with e-commerce division Total Beauty Shops on promotional strategy and content creation
            </li>
            <li>
              Wrote and edited site content and daily e-newsletters for TotalBeauty.com and BeautyRiot.com
            </li>
            <li>
              Managed editorial assistants, overseeing daily duties and the creation of excellent content in line with SEO best practices
            </li>
            <li>
              Created TotalBeauty.com’s editorial voice guide, style guide, and other processes to assure content consistency and quality
            </li>
            <li>
              Pulled site metrics with Google Analytics, utilizing data to increase organic traffic and boost search ranking of top stories
            </li>
            <li>
              Crafted editorial and sponsored posts for Twitter, Facebook, Pinterest and Instagram as needed
            </li>
          </ul>
        </article>

        <h5 className='resume-container-sectionTitle'>November 2008–December 2013</h5>
        <article className='resume-container-sectionContent'>
          <h5>Editor  |  Southern California Media Group</h5>
          <ul>
            <li>
              Wrote and edited content for the monthly regional magazine Where Los Angeles and annual hardcover publication Where GuestBook Los Angeles, which received multiple Maggie Awards and Maggie nominations under my leadership
            </li>
            <li>
              Wrote and managed content for WhereLA.com, WhereTraveler.com and Where USA mobile app
            </li>
            <li>
              Managed associate editor, interns, and freelance writers and photographers
            </li>
            <li>
              Planned all budgets and editorial calendars
            </li>
            <li>
              Copy edited and proofread all publications
            </li>
          </ul>
        </article>

        <h5 className='resume-container-sectionTitle'>August 2007–November 2008</h5>
        <article className='resume-container-sectionContent'>
          <h5>Associate Editor  |  Southern California Media Group</h5>
          <ul>
            <li>
              Performed writing and editing duties on two monthly magazines, one quarterly magazine and two annual print publications for the Southern California visitor market, reporting directly to editor in chief
            </li>
          </ul>
        </article>

        <h5 className='resume-container-sectionTitle'>August 2007–November 2008</h5>
        <article className='resume-container-sectionContent'>
          <h5>Associate Editor  |  Southern California Media Group</h5>
          <ul>
            <li>
              Pitch and write features for outlets such as Refinery29, Byrdie, Total Beauty and The Chicago Tribune’s Trib magazine
            </li>
          </ul>
        </article>

        <h4 className='resume-container-sectionContent'>Education</h4>
        <article className='resume-container-sectionContent'>
          Bachelor of Arts, Loyola Marymount University; double-major in English (Journalism emphasis), Art History
        </article>

        <h4 className='resume-container-sectionContent'>Skills</h4>
        <article className='resume-container-sectionContent'>
          Web-based CMSs (WordPress, Drupal, Typo3), CSS, HTML, SEO best practices, Hootsuite, Google Analytics, ExactTarget, Salesforce, PR distribution/monitoring tools (Meltwater, PR Web), Microsoft Office, Adobe Creative Suite
        </article>

      </section>

    </main>
  );
};