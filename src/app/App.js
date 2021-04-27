import React, { useState } from 'react'
import SocialsButton from '../components/socialsButton/SocialsButton'
import Projects from '../components/projects/Projects'
import NavBar from '../components/navbar/NavBar';
import Header from '../components/header/Header';
import About from '../components/about/About';
import './App.css'

const App = () => {
  const [renderComp, setComp] = useState('testH1');
  
  const navMatrix = {
    aboutMe: <About />,
    projects: <Projects />,
    techStack: <h1>Mighty Tech stack</h1>,
    thoughts: <h1>Mighty Thoughts</h1>
  }

  return (
    <>
      <h1 className="construction" >Under Construction</h1>
      <Header />
      {navMatrix[renderComp]}
      <SocialsButton />
      <NavBar setComp={setComp}/>
    </>
  );
}

export default App
