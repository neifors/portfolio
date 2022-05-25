import React from 'react';
import { Projectcard } from '../../components';

import './index.css';


export function Projects() {

   const p1 = {
      "title":"Michael Jackson site",
      "description": "Site where to know a little bit about Michael Jackson, a short biography, some images and all his albums. First time using react",
      "url": "https://michael-jackson.netlify.app",
      "github":"https://github.com/neifors/music-app",
      "imgs": ["https://i.ibb.co/bbdyJNC/2022-05-25-1.png","https://i.ibb.co/0Cy4kns/2022-05-25-2.png","https://i.ibb.co/zfC6JS3/2022-05-25-3.png","https://i.ibb.co/Wtcn9rH/2022-05-25-4.png"]
   }

   const p2 = {
      "title":"Github Tracker",
      "description": "Here you can check any GitHub profile by username.",
      "url": "https://fp-github-tracker.netlify.app",
      "github":"https://github.com/neifors/github-tracker-challenge",
      "imgs": ["https://i.ibb.co/V38yBmN/2022-05-25-5.png"]
   }

   const p3 = {
      "title":"Google Task",
      "description": "A copy of Google engine. Style from scratch. Own database of results. Just working with some words about animals like: 'pet', 'cat', 'dog'...",
      "url": "https://seems-like-google.netlify.app",
      "github":"https://github.com/neifors/Googletask",
      "imgs": ["https://i.ibb.co/pwNmsd1/2022-05-25-6.png","https://i.ibb.co/mB6GRx6/2022-05-25-7.png"]
   }

   const p4 = {
      "title":"Free Thoughts",
      "description": "Website where you can share your thoughts under a pseudonym. Using postgres database and express server",
      "url": "https://free-thoughts.netlify.app",
      "github":"https://github.com/neifors/codeChanllenge-telegraphStyle",
      "imgs": ["https://i.ibb.co/804P5K2/2022-05-25-8.png","https://i.ibb.co/Rzzkjt4/2022-05-25-9.png","https://i.ibb.co/CB6fNd2/client-posts.png"]
   }

   const p5 = {
      "title":"Library rooms",
      "description": "There are few interesting things about this place. One is that you can register and receive an email when you create a new user. Another one is that you can enter in a chat room and chat with friends about any book. It simulates an online library where you can donate and borrow books. This project was made to work with sockets and email system, that is why the books system is that simple.",
      "url": "https://sample-library-rooms.herokuapp.com/",
      "github":"https://github.com/neifors/library-rooms-club",
      "imgs": ["https://i.ibb.co/89hr70g/2022-05-25-10.png","https://i.ibb.co/y6TBDrR/2022-05-25-17.png","https://i.ibb.co/FgdW13c/2022-05-25-18.png","https://i.ibb.co/r5qyJmw/2022-05-25-12.png","https://i.ibb.co/x7Y00W1/2022-05-25-13.png","https://i.ibb.co/0QwNgs9/2022-05-25-19.png","https://i.ibb.co/0FvXYKQ/2022-05-25-11.png","https://i.ibb.co/RPxQ1sf/2022-05-25-14.png","https://i.ibb.co/CHYD7SQ/2022-05-25-15.png","https://i.ibb.co/mD0WPzZ/2022-05-25-16.png"]
   }

   return (
      <>
         <h1>Projects</h1>
         <Projectcard project={p1}/>
         <Projectcard project={p2}/>
         <Projectcard project={p3}/>
         <Projectcard project={p4}/>
         <Projectcard project={p5}/>
      </>
   )
}
