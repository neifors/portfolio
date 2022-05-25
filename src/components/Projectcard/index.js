import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./index.css";

export const Projectcard = props => {

   let images = []
   for (let img of props.project.imgs){
         images.push({url: img})
   }

   return (

      <>
         <div>
            <h3>{props.project.title}</h3>
            <SimpleImageSlider
            width={600}
            height={280}
            images={images}
            showBullets={true}
            showNavs={true}
            />
            <p>{props.project.description}</p>
            <a href={props.project.url}><button>Try here</button></a>
            <a href={props.project.github}><button>Repository</button></a>
         </div>
      </>
   )
}


