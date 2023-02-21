import React, { useState, useEffect } from 'react';

const Population = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://localhost:3001/api/v2/population')
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
    <tbody role="rowgroup"><tr role="row">     
                                                                
            
    <td role="cell">{post.id}</td><td role="cell">{post.reference_area}</td><td role="cell">{post.time_period}</td><td role="cell">{post.age_15_plus}</td><td role="cell">{post.age_15_64}</td><td role="cell">{post.age_15_24}</td><td role="cell">{post.age_25_plus}</td>


    
    </tr></tbody>
        );
    })
);
};

export default Population;



