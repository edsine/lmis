
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiBuildings, BiBriefcase } from 'react-icons/bi';
import { BACKEND_URL } from '../../../../constants';

const Labourdata = () => {
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
   fetch(`${BACKEND_URL}/labour-intelligents`)
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
    <div className="row mb-2">
       {posts && posts.map((post) => {
          return (
            
            <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column ">
                <center><BiBuildings size={40} className="" color="#488134" /></center>

                <center>  <h2 className="mb-0">
                  <a className="text-dark" href="#">{post?.attributes?.name}</a>
                </h2></center>

                <center> <Link to="/trends">
                  <small className="d-inline-block mb-2" style={{ color: 'skyblue' }}>View Details</small>
                </Link></center>
              </div>

            </div>
          </div>
          );
       })}
    </div>
  
    );
 };

export default Labourdata;


