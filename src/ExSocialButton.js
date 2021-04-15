import React from 'react';
import githubLogo from './images/socials/githubLogo.svg';
import linkedInLogo from './images/socials/linkedInLogo.svg';
import email from './images/socials/email.svg';
import './Gooey1.css';

const ExSocialButton = () => {
    return (
      <div className="Gooey1">

        <nav className="menu">
          <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
          
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="hamburger hamburger-1"></span>
            <span className="hamburger hamburger-2"></span>
            <span className="hamburger hamburger-3"></span>
          </label>

          <a 
            className="menu-item"
            href="https://github.com/jeffIrvine">
            <img 
            className="githubImage" 
            src={githubLogo} 
            alt="Github Logo"
            /> 
          </a>

          <a 
            className="menu-item"
            href="https://www.linkedin.com/in/irvinejeff/"> 
            <img 
            className="linkedInImage" 
            src={linkedInLogo} 
            alt="LinkedIn Logo"
            /> 
          </a>
          
          <a 
            className="menu-item"
            href="mailto:jirvine1212@gmail.com">
            <img 
            className="mailImage" 
            src={email} 
            alt="LinkedIn Logo"
            /> 
          </a>
        </nav>
      </div>
    );
  }

export default ExSocialButton;
