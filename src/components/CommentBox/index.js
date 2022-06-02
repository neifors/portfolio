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
         
         alert("Comment saved!")
         props.handleSaved()

      } catch (error) {
         console.warn({error})
      }

   }

   return (
      <>
         <form onSubmit={sendComment} >
            <label htmlFor="pseudonym" >Name: </label>
            <input type="text" name='pseudonym' id="pseudonym" maxlength="20" required/>
            <label htmlFor="title">Title: </label>
            <input type="text" name='title' id="title" maxlength="20" required/>
            <label htmlFor="message">Message: </label>
            <textarea name='message' id="message" cols="20" rows="10" maxlength="150" required></textarea>
            <input type="text" name='project' id="project" value={props.project} hidden="true"/>
            <input type='submit' value="Submit"/>
         </form>
         
      </>
   )
}
