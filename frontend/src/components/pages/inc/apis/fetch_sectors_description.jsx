
import React, { useState, useEffect } from 'react';
import { BACKEND_URL } from '../../../../constants';
import {
   BiBuoy,
   BiCoinStack,
   BiBriefcase,
   BiLineChart,
   BiNews,
} from "react-icons/bi";

const Sectorsdesciption = (props) => {

   const { sectorDescription } = props;


   return (
      <>
         <p>{sectorDescription}</p>
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


export default Sectorsdesciption;


