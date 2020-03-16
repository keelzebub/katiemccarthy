import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

export const Header = () => {
  return (
    <header className='mainHeader'>
      <section className='mainHeader-content'>
        <img src={logo} alt='Katie McCarthy' height='30' width='200' />
        <nav>
          <ul className='mainHeader-nav'>
            <li><Link to='/' className='mainHeader-nav-navItem'>Home</Link></li>
            <li><article className='mainHeader-nav-navItem'>Portfolio</article></li>
            <li><Link to='/#about' className='mainHeader-nav-navItem'>About</Link></li>
            <li><Link to='/#services' className='mainHeader-nav-navItem'>Services</Link></li>
            <li><Link to='/resume' className='mainHeader-nav-navItem'>Resumé</Link></li>
            <li><Link to='/hire-me' className='mainHeader-nav-navItem'>Hire Me</Link></li>
          </ul>






        </nav>
      </section>
    </header>
  );
}