
 import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../../../constants';

const Introdata = () => {
   const [post, setPost] = useState([]);
   useEffect(() => {
      fetch(`${BACKEND_URL}/home-intro`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPost(data.data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <div>
         {
            //   posts &&    posts.map((post) => {

            //       })

               <div className="container text-center" data-aos="zoom-out"> 
               <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox command-btn" />  
               <h3>{post?.attributes?.title}</h3>  
               <p>{post?.attributes?.detail}</p>  
               <a className="cta-btn" href="#">Explore More</a>  
             </div>
              
         }
      </div>
   );
};

export default Introdata;
