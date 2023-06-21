import React, { useState } from 'react';
import SocialsButton from '../components/socialsButton/SocialsButton';
import Projects from '../components/projects/Projects';
import NavBar from '../components/navbar/NavBar';
import About from '../components/about/About';
import TechStack from '../components/techStack/TechStack';
import './App.css';

const App = () => {
  const [renderComp, setComp] = useState(null);

  const navMatrix = {
    aboutMe: <About />,
    projects: <Projects />,
    techStack: <TechStack />,
  };

  return (
    <>
      <div className='name-title'>
        <h1>Jeff Irvine</h1>
        <h1>Software Engineer</h1>
      </div>
      <SocialsButton />
      <main>
        <NavBar setComp={setComp} />
        {navMatrix[renderComp]}
      </main>
    </>
  );
};

export default App;
