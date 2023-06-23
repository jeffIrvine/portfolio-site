import React from 'react';
import './NavBar.css';

const NavBar = ({ setComp, setCurrentView, currentView }) => {
  const onClick = ({ target }) => {
    setComp(target.id);
    setCurrentView(target.id);
  };

  return (
    <>
      <div className='nav-container'>
        <div className='nav-buttons'>
          <button
            id='techStack'
            className={
              currentView === 'techStack' ? 'nav-links active' : 'nav-links'
            }
            onClick={onClick}
          >
            Tech Stack
          </button>

          <button
            id='aboutMe'
            className={
              currentView === 'aboutMe' ? 'nav-links active' : 'nav-links'
            }
            onClick={onClick}
          >
            About Me
          </button>

          <button
            id='projects'
            className={
              currentView === 'projects' ? 'nav-links active' : 'nav-links'
            }
            onClick={onClick}
          >
            Projects
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
