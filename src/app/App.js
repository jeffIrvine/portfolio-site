import React, { useState } from 'react'
import SocialsButton from '../components/socialsButton/SocialsButton'
import Projects from '../components/projects/Projects'
import NavBar from '../components/navbar/NavBar';
import Header from '../components/header/Header';
import About from '../components/about/About';
import TechStack from '../components/techStack/TechStack';
import Resume from '../components/resume/Resume';
import jeffIrvineResume from '../images/JeffIrvineResume2.1.pdf';
import './App.css'

const App = () => {
  const [renderComp, setComp] = useState(null);
  
  const navMatrix = {
    aboutMe: <About />,
    projects: <Projects />,
    techStack: <TechStack />,
    Resume: <Resume pdf={jeffIrvineResume}/>
  }

  return (
    <>
      <h1 className="construction" >Under Construction</h1>
      <Header />
      <SocialsButton />
      <main>
        <NavBar setComp={setComp}/>
        {navMatrix[renderComp]}
      </main>
    </>
  );
}

export default App
