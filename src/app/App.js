import React from 'react'
import NavBar from '../components/navbar/NavBar';
import SocialsButton from '../components/socialsButton/SocialsButton'
import Projects from '../components/projects/Projects'
import './App.css'

const App = () => {
  return (
    <>
      <SocialsButton />
      {/* <Projects /> */}
      <NavBar />
        <h1 className="construction" >Under Construction</h1>
    </>
  );
}

export default App
