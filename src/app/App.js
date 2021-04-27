import React from 'react'
import SocialsButton from '../components/socialsButton/SocialsButton'
import Projects from '../components/projects/Projects'
import NavBar from '../components/navbar/NavBar';
import Header from '../components/header/Header';
import About from '../components/about/About';
import './App.css'

const App = () => {

  const testBool = false;

  return (
    <>
        <h1 className="construction" >Under Construction</h1>
      <SocialsButton />
      {testBool && <Header />}
      {!testBool && <h1>bool is false</h1>}
      <About />
      <Projects />
      <NavBar />
    </>
  );
}

export default App
