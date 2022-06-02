import React, { useEffect, useState } from 'react'
import './index.css'


export const RenderComments = props => {
   const [commentsValue, setCommentsValue] = useState()
   
   const getComments = async () => {
      try{
         const result = await fetch(`https://portfolio-srvr.herokuapp.com/posts/project/${props.project}`);
         const data = await result.json()
         console.log(data)
         setCommentsValue(data)
      }catch(e){
         console.warn(`Oooops! ${e.message}`)
      }
   }

   useEffect(()=>{
      getComments()
   }, [])


  
   function displayComments() {
      let counter = 0

      return(
         commentsValue.map( c => 
            <div key={counter++} className='comment-wrapper section'>
               <p className='comment-date'>{c.date}</p>
               <p className='comment-pseudonym'><span>From: </span><strong>{c.pseudonym}</strong></p>
               <p className='comment-title'><span>Title: </span>{c.title}</p>
               <p className='comment-message'>{c.message}</p>
            </div>
         )
      )
   }

   return(
      <>
         {commentsValue && <div className='comments-wrapper'>{displayComments()}</div>}
         {!commentsValue && <p>Loading...</p>}
      </>
   )
}

