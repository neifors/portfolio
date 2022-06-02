import React, { useState } from "react";
import "./index.css";


export const CommentBox = props => {


   async function sendComment(e){

      try {
         e.preventDefault()
         const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
         }
         e.target['pseudonym'].value = ""
         e.target['title'].value = ""
         e.target['message'].value = ""

         await fetch("https://portfolio-srvr.herokuapp.com/posts/create/", options)
         
      } catch (error) {
         console.warn({error})
      }

   }

   return (
      <>
         <form onSubmit={sendComment}>
            <label htmlFor="pseudonym">Name: </label>
            <input type="text" name='pseudonym' placeholder="E.g. Alice" id="pseudonym" required/>
            <label htmlFor="title">Title: </label>
            <input type="text" name='title' placeholder="E.g. Style" id="title" required/>
            <label htmlFor="message">Message: </label>
            <textarea name='message' placeholder="E.g. Are you using bootstrap or just plain CSS?" id="message" required></textarea>
            <input type="text" name='project' id="project" value={props.project} hidden="true"/>
            <input type='submit' value="Submit"/>
         </form>
         
      </>
   )
}
