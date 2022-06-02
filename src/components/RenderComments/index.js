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
               <h3>{c.title}</h3>
               <p>{c.message}</p>
               <p>By {c.pseudonym}</p>
            </div>
         )
      )
   }

   return(
      <>
         {commentsValue && <div>{displayComments()}</div>}
         {!commentsValue && <p>Loading...</p>}
      </>
   )
}

