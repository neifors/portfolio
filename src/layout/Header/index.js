import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.css';


export const Header = () => {

   return(
      <nav id="nav-bar">
         <div id="nav-links-wrapper">
            <div className="nav-bar-link"><NavLink className="navlink" to="/" >About me</NavLink></div>
            <div className="nav-bar-link"><NavLink className="navlink" to="projects" >Projects</NavLink></div>
            <div className="nav-bar-link"><NavLink className="navlink" to="skills" >Skills</NavLink></div>
         </div>
         <div id='my-name'>Isabel Repetto Garcia-Plata<img src='https://i.ibb.co/WG2y8fx/20220227-175515-2.jpg'/></div>
      </nav>
   )
}
