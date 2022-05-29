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
            <a href='https://www.linkedin.com/in/isabel-repetto-garcia-plata/'><img src='https://img.icons8.com/doodle/344/linkedin-circled.png' alt='linkedin-icon' className='contact-icon'/></a>
            <a href='https://github.com/neifors'><img src='https://img.icons8.com/doodle/344/github--v1.png' alt='github-icon' className='contact-icon'/></a>
            <a href=''><img src='https://cdn-icons.flaticon.com/png/512/3128/premium/3128313.png?token=exp=1653821511~hmac=868919a66984b812c802be640c73ff1a' alt='like-icon' className='like-icon'/></a>
         </div>
         
         <div id='my-name'>Isabel Repetto Garcia-Plata<img src='https://i.ibb.co/WG2y8fx/20220227-175515-2.jpg'/></div>
      </nav>
   )
}
