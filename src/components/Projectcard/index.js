import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { CommentBox } from "../CommentBox";
import { RenderComments } from "../RenderComments"
import "./index.css";

export const Projectcard = props => {

   const [commentBox, setCommentBox] = useState(false)
   const [comments, setComments] = useState(false)
   const [commentsButton, setCommentButton] = useState("See comments")



   let images = []
   for (let img of props.project.imgs){
         images.push({url: img})
   }

   function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }

   function handleClickCommentBox() {
      setCommentBox(!commentBox)
   }

   function handleClickShowComments() {
      setComments(!comments)
      if(commentsButton === "See comments"){
         setCommentButton("Hide comments")
      } else {
         setCommentButton("See comments")
      }
   }

   function commentSaved() {
      setCommentBox(false)
      handleClickShowComments()
   }


   return (

      <>
         <div className="project-card">
            <h3 className="project-title">{props.project.title}</h3>
            <p className="section-description">{props.project.description}</p>
            <div className="project-large-imgs">
               <SimpleImageSlider 
               width={1000}
               height={480}
               images={images}
               showBullets={true}
               showNavs={true}
               />
            </div>
            <div className="project-medium-imgs">
               <SimpleImageSlider 
               width={500}
               height={260}
               images={images}
               showBullets={true}
               showNavs={true}
               />
            </div>
            <div className="project-small-imgs">
               <SimpleImageSlider 
               width={300}
               height={160}
               images={images}
               showBullets={true}
               showNavs={true}
               />
            </div>
            <div className="buttons-wrapper">
               {props.project.url && <a href={props.project.url}><button>Try here</button></a>}
               <a href={props.project.github}><button>Repository</button></a>
               {props.project.youtube && <a href={props.project.youtube}><button>Demo video</button></a>}
               <button onClick={handleClickCommentBox}>New comment</button>
               <button onClick={handleClickShowComments}>{commentsButton}</button>
            </div>
            {commentBox && <CommentBox project={props.project.name} handleSaved={commentSaved}/>}
            {comments && <RenderComments project={props.project.name}/>}
            <div className="go-to-top" onClick={topFunction}>🔝</div>
         </div>
      </>
   )
}


