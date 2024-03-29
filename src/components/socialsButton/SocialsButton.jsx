import React, { useEffect, useRef } from 'react';
import githubLogo from '../../images/socials/githubLogo.svg';
import linkedInLogo from '../../images/socials/linkedInLogo.svg';
import email from '../../images/socials/email.svg';
import './SocialsButton.css';

const ExSocialButton = () => {
  const menuOpenToggle = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpenToggle.current &&
        !menuOpenToggle.current.contains(event.target)
      ) {
        const checkbox = document.getElementById('menu-open');
        checkbox.checked = false;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='exploding-button' ref={menuOpenToggle}>
      <nav className='menu'>
        <input
          type='checkbox'
          href='#'
          className='menu-open'
          name='menu-open'
          id='menu-open'
        />

        <label className='menu-open-button' htmlFor='menu-open'>
          <span className='hamburger hamburger-1'></span>
          <span className='hamburger hamburger-2'></span>
          <span className='hamburger hamburger-3'></span>
        </label>

        <a
          className='menu-item'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/jeffIrvine'
        >
          <img className='githubImage' src={githubLogo} alt='Github Logo' />
        </a>

        <a
          className='menu-item'
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/irvinejeff/'
        >
          <img
            className='linkedInImage'
            src={linkedInLogo}
            alt='LinkedIn Logo'
          />
        </a>

        <a
          className='menu-item'
          target='_blank'
          rel='noreferrer'
          href='mailto:jirvine1212@gmail.com'
        >
          <img className='mailImage' src={email} alt='Email link' />
        </a>
      </nav>
    </div>
  );
};

export default ExSocialButton;
