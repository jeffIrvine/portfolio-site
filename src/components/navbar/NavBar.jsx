import React from 'react';
import './NavBar.css';

const NavBar = ({ setComp }) => {
  const onClick = ({ target }) => {
    setComp(target.id);
  };
  return (
    <>
      <div className='nav-container'>
        <div className='nav-buttons'>
          <button id='techStack' className='nav-links' onClick={onClick}>
            Tech Stack
          </button>
          <button id='aboutMe' className='nav-links' onClick={onClick}>
            About Me
          </button>
          <button id='projects' className='nav-links' onClick={onClick}>
            Projects
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
