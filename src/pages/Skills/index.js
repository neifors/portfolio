import React, { useEffect } from 'react';


import './index.css';


export function Skills() {

   let i = 0;
   const txt = 'SKILLS';
   const speed = 120;

   useEffect(() => {
      function typeWriter() {
         if (i < txt.length) {
            document.getElementById("skills").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
         }
      }
      typeWriter()
   }, [])

   return (
      <>
         <div id='skills-title'>
            <h1 id='skills'></h1>
         </div>
         <div className='section'>
            <h3 className='section-title'>Technical Skills</h3>
            <div className='flex'>
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />   
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
               <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg" />
            </div>
         </div>
      </>   
   )
}
