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
         <div className="project-card">
            <h3 className="project-title">{props.project.title}</h3>
            <p className="project-description">{props.project.description}</p>
            <SimpleImageSlider
            width={1000}
            height={480}
            images={images}
            showBullets={true}
            showNavs={true}
            />
            <div className="buttons-wrapper">
               {props.project.url && <a href={props.project.url}><button>Try here</button></a>}
               <a href={props.project.github}><button>Repository</button></a>
               {props.project.youtube && <a href={props.project.youtube}><button>Demo video</button></a>}
            </div>
         </div>
      </>
   )
}


