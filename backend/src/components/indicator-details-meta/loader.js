import React from 'react';
import "./loader.css";

function Loader() {
  return (
    <div className="loader center" >
      <i className="fa fa-cog fa-spin" />
        <div className="loadingmessge center">
          Loading... Please Wait. 
        </div>
    </div>

  );
}

export default Loader;
