
import React, { useState, useEffect } from 'react';
import { BACKEND_URL } from '../../../../constants';
import {
   BiBuoy,
   BiCoinStack,
   BiBriefcase,
   BiLineChart,
   BiNews,
} from "react-icons/bi";

const State = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch(`${BACKEND_URL}/states`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data.data);
            setPosts(data.data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <>
         {posts && posts.map((post) => {
            return (

               <option value={post?.id}>{post?.attributes?.name}</option>
            );
         })}
      </>
   );
};
//    return (
//     posts.map((post, i) => { 
//          return (

//             
//          );
//       })
//    );


export default State;


