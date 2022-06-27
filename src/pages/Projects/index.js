import React, { useEffect } from 'react';
import { Projectcard } from '../../components';
import { projects } from '../../data/data'
import './index.css';


export function Projects() {

   let i = 0;
   const txt = 'PROJECTS';
   const speed = 120;

   useEffect(() => {
      function typeWriter() {
         if (i < txt.length) {
            document.getElementById("title").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
         }
      }
      typeWriter()
   }, [])

   return (
      <>

         <div id="projects-title"><h1 id='title'></h1></div>
         <Projectcard project={projects.p12}/>
         <Projectcard project={projects.p7}/>
         <Projectcard project={projects.p6}/>
         <Projectcard project={projects.p5}/>
         <Projectcard project={projects.p4}/>
         <Projectcard project={projects.p3}/>
         <Projectcard project={projects.p8}/>
         <Projectcard project={projects.p13}/>
         <Projectcard project={projects.p1}/>
         <Projectcard project={projects.p2}/>
         <Projectcard project={projects.p11}/>
         <Projectcard project={projects.p10}/>
      </>
   )
}
