import React from 'react'
import flourish from '../../images/projects/flourish.png'
import realo from '../../images/projects/realo.png'
import gather from '../../images/projects/gather.png'
import './Projects.css'

const Projects = () => {
  return (
    <section>
      <h1 className="projects-title">Projects</h1>
      <ul className="projects-list">
        <li className="project-card">
          <h2>Flourish</h2>
          <figure>
            <a 
            href="https://flourish-pro.netlify.app/"
            target="_blank"
            rel="noreferrer">
              
            <img 
            src={flourish} 
            alt="flourish-home" 
            height="200" 
            width="200"
            /> 

            </a>
          </figure>

            <p>
              Fullstack plant care app
            </p>
            <p>
               React | Node.js | GraphQL | Express | PostgreSQL
            </p>

            <a 
            href="https://flourish-pro.netlify.app/"
            target="_blank"
            rel="noreferrer"
            >
              Live Site
            </a>

            <a             
            href="https://github.com/FlourishTeam"
            target="_blank"
            rel="noreferrer"
            >
              GitHub
            </a>
            
        </li>


        <li className="project-card">
          <h2>Realo</h2>
          <figure>
            <a 
            href="https://realo.herokuapp.com/"
            target="_blank"
            rel="noreferrer">
              
            <img 
            src={realo} 
            alt="flourish-home" 
            height="200" 
            width="200"
            /> 

            </a>
          </figure>

            <p>
              SMS Real Estate notification app
            </p>
            <p>
               Node.js | Express | Pug.js | Nodemailer | PostgreSQL
            </p>

            <a 
            href="https://realo.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            >
              Live Site
            </a>

            <a             
            href="https://github.com/ET-Phone-Home-Alchemy"
            target="_blank"
            rel="noreferrer"
            >
              GitHub
            </a>

        </li>

        <li className="project-card">
          <h2>Gather</h2>
          <figure>
            <a
            href="https://vigorous-booth-3b4531.netlify.app/"
            target="_blank"
            rel="noreferrer">
              
            <img 
            src={gather} 
            alt="flourish-home" 
            height="200" 
            width="200"
            /> 

            </a>
          </figure>

            <p>
              Recipe box app using 3rd party API
            </p>
            <p>
            React | Node.js | Express | PostgreSQL
            </p>

            <a 
            href="https://vigorous-booth-3b4531.netlify.app/"
            target="_blank"
            rel="noreferrer"
            >
              Live Site
            </a>

            <a             
            href="https://github.com/rumham-gather"
            target="_blank"
            rel="noreferrer"
            >
              GitHub
            </a>

        </li>
      </ul>
    </section>
  )
}

export default Projects
