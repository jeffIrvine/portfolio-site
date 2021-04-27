import React from 'react'
import NavBar from '../components/navbar/NavBar';
import SocialsButton from '../components/socialsButton/SocialsButton'
import Projects from '../components/projects/Projects'
import Header from '../components/header/Header';
import About from '../components/about/About';
import './App.css'

const App = () => {
  return (
    <>
      <SocialsButton />
      <Header />
      <About />
      <Projects />
      <NavBar />
        <h1 className="construction" >Under Construction</h1>
    </>
  );
}

export default App
