import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'
import { ImgEffect } from '../../components';
import {profilePic} from '../../data/data'
import './index.css';


export const Header = () => {

   const [liked, setLiked] = useState()
   const [likes, setLikes] = useState()

   const getLikes = async () => {
      try {
         const likes = await fetch("https://portfolio-srvr.herokuapp.com/likes")
         const data = await likes.json()
         setLikes(data.length)
      } catch (error) {
         console.warn(`Oooops! ${error.message}`)
      }
   }

   useEffect(() => {
      getLikes()
   }, [])


   function myFunction() {
      const x = document.getElementById("nav-links-wrapper");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }

   async function handleLike() {
      const optionsLike = {
         method: 'POST',
         headers: { "Content-Type": "application/json" }
      }
      const optionsDislike = {
         method: 'DELETE',
         headers: { "Content-Type": "application/json" }
      }
      if(liked){
         setLiked(!liked)
         await fetch("https://portfolio-srvr.herokuapp.com/likes/delete", optionsDislike)
      } else {
         setLiked(!liked)
         await fetch("https://portfolio-srvr.herokuapp.com/likes/add", optionsLike)
         alert("Thank you for your Like! =)")
      }

   }

   async function handleDislike() {
      setLiked(!liked)

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
            <img onClick={handleLike} className='image like' src='https://img.icons8.com/external-justicon-lineal-color-justicon/344/external-like-notifications-justicon-lineal-color-justicon.png'/><span id='likes-counter'>{likes}</span>

         </div>
         
         <div id='my-name'><p>Isabel Repetto <span>Garcia-Plata</span></p><ImgEffect info={profilePic}/><div id='second-name'>Isabel Repetto</div></div>
         
      </nav>
   )
}
