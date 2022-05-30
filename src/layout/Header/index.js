import React from 'react';
import {NavLink} from 'react-router-dom'
import { ImgEffect } from '../../components';
import './index.css';


export const Header = () => {

   const like = {
      "classes" : "image like",
      "url" : 'https://img.icons8.com/external-justicon-lineal-color-justicon/344/external-like-notifications-justicon-lineal-color-justicon.png'
   }

   const profilePic = {
      "classes": "image profile-pic",
      "url" : "https://i.ibb.co/WG2y8fx/20220227-175515-2.jpg"
   }

   function myFunction() {
      const x = document.getElementById("nav-links-wrapper");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }

   return(
      <nav id="nav-bar">

         <a href="javascript:void(0);" class="icon" onClick={myFunction}>
            <i class="fa fa-bars"></i>
         </a>

         <div id="nav-links-wrapper" className='navbar'>
            <div className="nav-bar-link"><NavLink className="navlink" to="/" >About me</NavLink></div>
            <div className="nav-bar-link"><NavLink className="navlink" to="projects" >Projects</NavLink></div>
            <div className="nav-bar-link"><NavLink className="navlink" to="skills" >Skills</NavLink></div>
            <a href='https://www.linkedin.com/in/isabel-repetto-garcia-plata/'><img src='https://img.icons8.com/doodle/344/linkedin-circled.png' alt='linkedin-icon' className='contact-icon'/></a>
            <a href='https://github.com/neifors'><img src='https://img.icons8.com/doodle/344/github--v1.png' alt='github-icon' className='contact-icon'/></a>
            <ImgEffect info={like}/>
         </div>
         
         <div id='my-name'><p>Isabel Repetto <span>Garcia-Plata</span></p><ImgEffect info={profilePic}/><div id='second-name'>Isabel Repetto</div></div>
         
      </nav>
   )
}
