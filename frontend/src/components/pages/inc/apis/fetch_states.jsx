import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../../../../constants";
import {
  BiBuoy,
  BiCoinStack,
  BiBriefcase,
  BiLineChart,
  BiNews,
} from "react-icons/bi";

const State = () => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(null);
  useEffect(() => {
    fetch(`${BACKEND_URL}/states?pagination[limit]=100`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
        setPagination(data.meta.pagination);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const renderPaginationLinks = () => {
  //   if (!pagination) return null;

  //   const { pageCount, page } = pagination;
  //   const links = [];

  //   for (let i = 1; i <= pageCount; i++) {
  //     links.push(
  //       <button key={i} onClick={() => goToPage(i)} disabled={i === page}>
  //         {i}
  //       </button>
  //     );
  //   }

  //   return <div>{links}</div>;
  // };

  // const goToPage = (pageNumber) => {
  //   fetch(`${BACKEND_URL}/states?page=${pageNumber}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data.data);
  //       setPagination(data.meta.pagination);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

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
  //   <>
  //   {posts.map((post, index) => (
  //     <div key={index}>{post.attributes.name}</div>
  //   ))}
  //   {renderPaginationLinks()}
  // </>
  );
};

export default State;
