import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../../../../constants";


const Occupations = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/occupations?pagination[limit]=100`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {posts &&
        posts.map((post, index) => {
          return (
            <option
              key={index}
              value={post?.id}
              data-description={post?.attributes?.description}
              data-name={post?.attributes?.name}
            >
              {post?.attributes?.name}
            </option>
          );
        })}
    </>
  );
};

export default Occupations;
