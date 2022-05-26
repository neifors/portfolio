import React from 'react';
import { Projectcard } from '../../components';
import { projects } from '../../data/data'
import './index.css';


export function Projects() {

   return (
      <>
         <h1>Projects</h1>
         <Projectcard project={projects.p1}/>
         <Projectcard project={projects.p2}/>
         <Projectcard project={projects.p3}/>
         <Projectcard project={projects.p4}/>
         <Projectcard project={projects.p5}/>
         <Projectcard project={projects.p6}/>
         <Projectcard project={projects.p7}/>
      </>
   )
}
