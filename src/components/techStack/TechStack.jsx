import React from 'react';
import './TechStack.css';

const TechStack = () => {
  return (
    //Link to line in repo where technology is used.
    <section className='tech-stack'>
      <ul>
        <li>
          <figure>
            <a
              href='https://github.com/FlourishTeam/flourish-frontend/blob/df776f71685ab7641047834683f3d1a83c24ca1b/src/components/pages/care-history/MyCareHistoryPage.jsx#L1'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png'
                height='100'
                alt='JavaScript'
              />
            </a>
          </figure>
        </li>
        <li>
          <figure>
            <a
              href='https://github.com/FlourishTeam/flourish-frontend/blob/df776f71685ab7641047834683f3d1a83c24ca1b/src/components/pages/care-history/MyCareHistoryPage.jsx#L1'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png'
                height='100'
                alt='C#'
              />
            </a>
          </figure>
        </li>
        <li>
          <figure>
            <a
              href='https://github.com/jeffIrvine/typescript-todo/blob/main/graphql-types.ts'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png'
                height='100'
                alt='TypeScript'
              />
            </a>
          </figure>
        </li>
        <li>
          <figure>
            <a
              href='https://github.com/jeffIrvine/lab-01-quiz-page/blob/main/index.html'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png'
                height='100'
                alt='HTML'
              />
            </a>
          </figure>
        </li>
        <li>
          <figure>
            <a
              href='https://github.com/FlourishTeam/flourish-frontend/blob/a010b6e8a7f739fd040aa49a5faaeb8bcfea8076/src/components/pages/care-history/styles/MyCareHistory.css'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png'
                height='100'
                alt='CSS'
              />
            </a>
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default TechStack;
