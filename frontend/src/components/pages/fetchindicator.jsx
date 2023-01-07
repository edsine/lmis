import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Indicator = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://localhost:3001/api/v2/indicators')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      posts.map((post) => {
         return (

            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
               <div className="member">
                  <img src={post.imagePath} style={{ height: '280px', width: '350px', objectFit: 'cover' }} className="img-fluid" alt="" />
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                  
                  <Link to={{
                     pathname: '/indicator-details',
                     state: post.id
                  }}><div className="social">
                     <small style={{ color: 'red' }}>Read more</small>
                  </div></Link>
               </div>

            </div>
         );
      })
   );
};

export default Indicator;
