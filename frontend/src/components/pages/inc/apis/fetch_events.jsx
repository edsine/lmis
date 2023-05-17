
import React, { useState, useEffect } from 'react';
import { BACKEND_URL, BACKEND_URL_IMAGE } from '../../../../constants';
import { Link } from "react-router-dom"

const Eventdata = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch(`${BACKEND_URL}/events?populate=*`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data.data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   return (
      <div className="row gy-4">
         {posts && posts.map((post) => {
            return (

               <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
                  <div className="member">
                     <img src={`${BACKEND_URL_IMAGE}${post?.attributes?.featured_image?.data?.attributes?.url}`} className="img-fluid" style={{ height: '280px', width: '350px', objectFit: 'cover' }} alt="" />
                     <h4>{post?.attributes?.title}</h4>
                     <span>{post?.attributes?.location}</span>
                     <div className="social">
                        <Link to={{ pathname: "/single-event-data", state: { post } }}>
                           View More
                        </Link>
                        <Link to={{ pathname: "/single-event-data", state: { post } }}>
                           <i className="bi bi-eye" />
                        </Link>
                     </div>
                  </div>
               </div>

            );
         })}

      </div>
   );
};


export default Eventdata;


