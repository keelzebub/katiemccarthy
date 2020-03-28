import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import logo from '../../images/logo.png';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const hamburgerClasses = classNames({
    'mainHeader-nav-toggleLabel': true,
    'hamburger': true,
    'hamburger--spin': true,
    'is-active': menuOpen,
  });

  const menuClasses = classNames({
    'mainHeader-nav-list': true,
    'mainHeader-nav-list--open': menuOpen,
  });

  const toggleMenuHandler = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className='mainHeader'>
      <section className='mainHeader-content'>
        <img src={logo} alt='Katie McCarthy' height='30' width='200' />
        <button className={hamburgerClasses} onClick={toggleMenuHandler}>
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
        <ul className={menuClasses}>
          <li className='mainHeader-nav-list-listItem'><Link to='/'>Home</Link></li>
          <li className='mainHeader-nav-list-listItem'>
            <Link to='/portfolio'>
              Portfolio
            </Link>
            <ul className='mainHeader-nav-list-subList'>
              <li className='mainHeader-nav-list-listItem'>
                <Link to='/portfolio/editorial-content'>
                  Editorial Content
                </Link>
              </li>
              <li className='mainHeader-nav-list-listItem'>
                <Link to='/portfolio/branded-content'>
                  Branded Content
                </Link>
              </li>
            </ul>
          </li>
          <li className='mainHeader-nav-list-listItem'><Link to='/#about'>About</Link></li>
          <li className='mainHeader-nav-list-listItem'><Link to='/#services'>Services</Link></li>
          <li className='mainHeader-nav-list-listItem'><Link to='/resume'>Resumé</Link></li>
          <li className='mainHeader-nav-list-listItem'><Link to='/hire-me'>Hire Me</Link></li>
        </ul>
      </section>
    </header>
  );
}