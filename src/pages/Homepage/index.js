import React, { useEffect } from 'react';


import './index.css';


export function Homepage() {

   
   let i = 0;
   const txt = 'ABOUT ME';
   const speed = 120;

   useEffect(() => {
      function typeWriter() {
         if (i < txt.length) {
            document.getElementById("about-me").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
         }
      }
      typeWriter()
   }, [])

   function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }

   return(
      <>
         <div id='welcome-msg'><h2>Welcome to my Portfolio!</h2></div>
         <div id='about-me-title'>
            <h1 id='about-me'></h1>
         </div>
         <div className="section">
            <h3 className='section-title'>My journey</h3>
            <p className='section-description'>
               I am naturally enthusiastic and curious person. So my passion for technologies stems from a innate curiosity to understand how and why things work.
            </p>
            <p className='section-description'>
               The first time I was introduced to coding was in <strong>2010</strong> when I started studying a Higher Technician Course in Computer Network System Managment. I couldn't finish it due to economics problems so after 2 years I had to leave the Higher level Education Cycle just 4 subjects away to get the certificate.
            </p>
            <p className='section-description'>
               <strong>2012 - 2015</strong> I decided to keep on going and I started to study a Computer Engineering Degree as the Regional Goverment could provide me with a schoolarship. But 3 years later I had to leave for the same reason.
            </p>
            <p className='section-description'>
               <strong>2016</strong> I spent the year working hard to get savings to come back to the university but I couldn't get enough.
            </p>
            <p className='section-description'>
               <strong>2017 - 2020</strong> I moved to England searching for better oportunities. I've been learning and improving my English while working as a chef. But most of all I've been saving money to keep going with my studies.
            </p>
            <p className='section-description'>
               <strong>2020 - 2021</strong> I started to study a private 7-month Python Programming Course at CICE - Escuela de Nuevas Tecnologías (Madrid) as well as several other courses through platforms like Udemy, edx and HarvardX covering areas including Web Programming with Python and Javascript.
            </p>
            <p className='section-description'>
               <strong>2022</strong> I have done 13-week bootcamp covering the main areas of web development, including JavaScript, HTML/CSS, Databases, and Python. 
            </p>
            <p className='section-description'>
               I am open to new things that may come into my life and career and I'm excited to embark on the next stage.
            </p>
            <div className="go-to-top" onClick={topFunction}>🔝</div>

         </div>
         <div className='section'>
            <h3 className='section-title'>
               In my own time...
            </h3>
            <p className='section-description'>
               Outside of tech, I enjoy <strong>painting and crafting</strong>.
               I am a creative person by nature. From a young age, I have always loved drawing and painting, creating new toys using older things, and creating video montages with my own content and that of others. Despite my love of art, when I discovered the coding world, I knew that was the direction I wanted to pursue. For me, it was an unknown way of creating. Frontend is like painting for me, and backend are all the creations you can make using just logic and your hands. I discovered that my creativity helped me to find different solutions to a problem. I love challenges as much as finding and implementing elegant solutions to them.
            </p>
            <p className='section-description'>
               Aside from the tech world, I also love <strong>cooking and creating my own dishes</strong>. When I was working as a pastry chef at Bristol Hotel I received an award for all the original creations I made for VIP clients and afternoon teas. They valued my work much more because all the techniques I learned were through YouTube videos. This is me, when I love something I can't stop learning. No matter how many barriers appear in my way.
            </p>
            <p className='section-description'>
               But if I had to choose between all my hobbies, I would choose <strong>travelling</strong>. Discovering new places and cultures is the best way to keep growing up. Travel is my therapy. One of my favorite phrases regarding traveling is: <strong>it leaves you speechless, then turns you into a storyteller</strong>
            </p>
            <div className="go-to-top" onClick={topFunction}>🔝</div>

         </div>
         
      </>
      
   )

}
