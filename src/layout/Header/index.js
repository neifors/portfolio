import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.css';


export const Header = () => {

   return(
      <nav id="nav-bar">
         <div className="nav-bar-link"><NavLink to="/">About me</NavLink></div>
         <div className="nav-bar-link"><NavLink to="projects">Projects</NavLink></div>
         <div className="nav-bar-link"><NavLink to="skills">Skills</NavLink></div>
      </nav>
   )
}
