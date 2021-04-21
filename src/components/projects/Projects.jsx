import React from 'react'
import flourish from '../../images/projects/flourish.png'
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
              Fullstack plant care app built with:
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
              Repo
            </a>
            
        </li>


        <li className="project-card">
          <h2>Realo</h2>
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
              Fullstack plant care app built with:
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
              Repo
            </a>

        </li>
      </ul>
    </section>
  )
}

export default Projects
