import React from 'react';
import githubLogo from './images/socials/githubLogo.svg';
import linkedInLogo from './images/socials/linkedInLogo.svg';
import email from './images/socials/email.svg';
import './Gooey1.css';

const ExButton = () => {
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
            <i className="fa fa-bar-chart"></i>  
          </a>

          <a href="#" className="menu-item"> 
          <i className="fa fa-plus"></i> 
          </a>

          <a 
            className="menu-item"
            href="mailto:jirvine1212@gmail.com">
            <img src={email} alt="LinkedIn Logo"/> 
            <i className="email-anchor"></i> 
          </a>

          <a 
            className="menu-item"
            href="https://www.linkedin.com/in/irvinejeff/"> 
            <img src={linkedInLogo} alt="LinkedIn Logo"/> 
            <i className="linkedin-anchor"></i> 
          </a>

          <a 
            className="menu-item"
            href="https://github.com/jeffIrvine">
            <img src={githubLogo} alt="Github Logo"/> 
            <i className="github-anchor"></i> 
          </a>

        </nav>
      </div>
    );
  }

export default ExButton;
