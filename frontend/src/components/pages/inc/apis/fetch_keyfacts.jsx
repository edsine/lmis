import React, { useState, useEffect } from "react";
import { BiBuoy } from "react-icons/bi";

const Keyfact = (props) => {
  const [keyFacts, setKeyFacts] = useState([]);
  const { url } = props;

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setKeyFacts(data.data);
        })
        .catch((err) => {});
    }
  }, [url]);

  return (
    <div className="row ml-2">
      {keyFacts &&
        keyFacts.map((keyFact, index) => {
          return (
            <div
              key={index}
              className="card col-3"
              style={{ backgroundColor: "rgba(116,166,39, 0.1)" }}
            >
              {/*<img src="" className="card-img-top" alt="Hollywood Sign on The Hill" />*/}
              <div className="card-body">
                <div className="text-center">
                  <div className="py-5">
                    <BiBuoy size={70} color="#488134" />
                  </div>
                </div>
                <h5 className="card-title py-font">
                  {keyFact?.attributes?.name}
                </h5>
                <p className="card-text py-font">
                  {keyFact?.attributes?.value} in{" "}
                  <strong>{keyFact?.attributes?.date}</strong>
                </p>
                <p className="card-text py-font"></p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Keyfact;
