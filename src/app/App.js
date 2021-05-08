import React, { useState } from 'react'
import SocialsButton from '../components/socialsButton/SocialsButton'
import Projects from '../components/projects/Projects'
import NavBar from '../components/navbar/NavBar';
import Header from '../components/header/Header';
import About from '../components/about/About';
import TechStack from '../components/techStack/TechStack';
import './App.css'

const App = () => {
  const [renderComp, setComp] = useState('testH1');
  
  const navMatrix = {
    aboutMe: <About />,
    projects: <Projects />,
    techStack: <h1>Tech stack</h1>,
    Resume: <h1>Resume</h1>
  }

  return (
    <>
      <h1 className="construction" >Under Construction</h1>
      <Header />
      <SocialsButton />
      <main>
        <NavBar setComp={setComp}/>
        {navMatrix[renderComp]}
        <TechStack />
      </main>
    </>
  );
}

export default App
