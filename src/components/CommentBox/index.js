import React, { useState } from "react";
import "./index.css";


export const CommentBox = props => {

   const [saved, setSaved] = useState()

   async function sendComment(e){

      try {
         e.preventDefault()
         const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
         }

         console.log(JSON.stringify(options.body))
         await fetch("http://localhost:3000/posts/create/", options)
         setSaved(true)

      } catch (error) {
         setSaved(false)
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
         {saved && <p className="succesful-msg">Your message has been saved!</p>}
      </>
   )
}
