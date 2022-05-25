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

   return (
      <>
         <h1>Projects</h1>
         <Projectcard project={p1}/>
      </>
   )
}
