import React, { useState } from "react";
//import Bar from './Bar';

import Common from "../components/inc/Common";
import ExternalJobs from "../components/pages/inc/apis/fetch_external_jobs";

function KeyFacts() {
  

  return (
    <>
      <Common />

      <div className="container-fluid">
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <center><h3>Trending Jobs</h3><br/><br/></center>
            </div>

            
     <ExternalJobs />
          
          </div>
        </div>

       
      </div>
    </>
  );
}

export default KeyFacts;
