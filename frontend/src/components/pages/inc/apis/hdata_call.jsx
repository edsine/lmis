
import React, { useState, useEffect } from 'react';
import { BACKEND_URL } from '../../../../constants';

const Homedata = () => {
   const [posts, setPosts] = useState([]);
//    useEffect(() => {
//       fetch('http://localhost:1337/api/statistic-summaries')
//          .then((response) => response.json())
//          .then((data) => {
//             //console.log(data);
//             setPosts();
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);


useEffect(() => {
   fetch(`${BACKEND_URL}/statistic-summaries`)
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
    <div className="icon-boxes position-relative">
          <div className="container position-relative">
    <div className="row gy-4 mt-5">
       {posts && posts.map((post) => {
          return (
            
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                        <div className="icon-box zoom">
                          <div className style={{ fontSize: '23px', color: 'lightgrey' }}>{post?.attributes?.stat_name}</div>
                          <hr />
                          <h4 className="title"><a href className="stretched-link">{post?.attributes?.stat_value} %</a></h4>
                        </div>
                      </div>
          );
       })}
    </div>
    </div>
    </div>
    );
 };
//    return (
//     posts.map((post, i) => { 
//          return (

//             
//          );
//       })
//    );


export default Homedata;


