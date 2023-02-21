import React, { useState } from "react";
import { BACKEND_URL } from "../../constants";
import Common from "../inc/Common";
import Keyfact from "./inc/apis/fetch_keyfacts";
import Occupations from "./inc/apis/fetch_occupations";
import State from "./inc/apis/fetch_states";
import Description from "./inc/description";

function Occupation() {
  const [selectedState, setSelectedState] = useState(null);

  const [selectedOccupation, setSelectedOccupation] = useState(null);

  const [occupationDescription, setOccupationDescription] = useState(null);

  const [stateDescription, setStateDescription] = useState(null);

  const [keyFactsURL, setKeyFactsURL] = useState(null);

  const changeKeyFactsAPIURL = (
    state = null,
    occupation = null
  ) => {
    let url = `${BACKEND_URL}/key-facts?populate=sector,state,occupation`;

    if (state && !occupation) {
      url = `${url}&filters[state][id][$eq]=${state}`;
      setKeyFactsURL(url);
      return;
    }
    if (!state && occupation) {
      url = `${url}&filters[occupation][id][$eq]=${occupation}`;
      setKeyFactsURL(url);
      return;
    }

    if (state && occupation) {
      url = `${url}&filters[state][id][$eq]=${state}&filters[occupation][id][$eq]=${occupation}`;
      setKeyFactsURL(url);
      return;
    }
    if (!state && !occupation) {
      setKeyFactsURL(null);
      return;
    }
  };

  const filterKeyFactsByState = (e) => {
    const selected = parseInt(e.target.value);
    setSelectedState(selected);
    changeKeyFactsAPIURL(selected, selectedOccupation);
  };

  const filterKeyFactsByOccupation = (e) => {
    const selected = parseInt(e.target.value);
    setSelectedOccupation(selected);
    changeKeyFactsAPIURL(selectedState, selected);
  };

  const changeStateDescription = ({
    target: {
      selectedOptions: [
        {
          dataset: { name, description },
        },
      ],
    },
  }) => {
    setStateDescription({ name, description });
  };

  const changeOccupationDescription = ({
    target: {
      selectedOptions: [
        {
          dataset: { name, description },
        },
      ],
    },
  }) => {
    setOccupationDescription({ name, description });
  };

  return (
    <>
      <Common />

      <div className="container-fluid">
        <div className="container my-5">
          <div className="row">
            <div className="col-6">
              <label>States</label>
              <div>
                <div className="col text-center ">
                  <select
                    className="form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    value={selectedState}
                    onChange={(e) => {
                      filterKeyFactsByState(e);
                      changeStateDescription(e);
                    }}
                  >
                    <option value={null}>Select State</option>
                    <State />
                  </select>
                </div>
              </div>
            </div>

            <div className="col-6">
              <label>Occupation</label>
              <div>
                <div className="col text-center ">
                  <select
                    className="form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    value={selectedOccupation}
                    onChange={(e) => {
                      filterKeyFactsByOccupation(e);
                      changeOccupationDescription(e);
                    }}
                  >
                    <option value={null}>Select Occupation</option>
                    <Occupations />
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-5">
          <div className="container-fluid">
            <div className="card card-margin">
              <div
                className="card-header"
                style={{ backgroundColor: "#0A6921", color: "#fff" }}
              >
                {/* {sectorState?.restaurant} */}
              </div>
              <div className="card-body py-font py-5 px-5">
                {/* {sectorState?.bio} */}
                <div className="row">
                  <div className="col-6">
                    <div className="card">
                      <div className="card-body">
                        <p>{stateDescription?.name || "Select State"}</p>
                        <Description
                          description={stateDescription?.description}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card">
                      <div className="card-body">
                        <p>
                          {occupationDescription?.name || "Select Occupation"}
                        </p>
                        <Description
                          description={occupationDescription?.description}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="my-5">Key Facts</h4>
                <Keyfact url={keyFactsURL} />
              </div>
            </div>
          </div>
        </div>

        <div className="container row mb-10"></div>

        <div>
          <div className="card-group container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="text-center p-5">
                  {/* <img src={sectorState?.image} /> */}
                </div>
              </div>
              {/* <div className="col-4">
                <div className=" container card  mb-5" style={{}}>
                  <div className="card-header">
                    <span className="card-title text-uppercase fs-2 fw-bolder">
                      Data insights
                    </span>
                    <BiNews size={70} color="#488134" className="float-end" />
                  </div>

                  <div className="card-body" style={{}}>
                    <p className="card-text">LIST ALL 113 Sectors Mining</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h2> How economic sectors are doing in the crisis</h2>
                      <p>
                        Manufacturing and construction sustain massive jobs
                        losses, but employment is growing in health care, social
                        work and education
                      </p>
                    </li>
                    <li className="list-group-item">
                      <h2>
                        Skills developments and trends in the tourism sector
                      </h2>
                      <p>
                        Tourism is a very complex industry made up of a number
                        of different businesses and economic activities. It can
                        be defined with reference to the goods and services
                        tourists consume, where a tourist might be defined as a
                        person who is travelling or visiting a place for a
                        variety of purposes. This…
                      </p>
                    </li>
                    <li className="list-group-item">
                      <h2>
                        Financial intermediation sector provides most continuing
                        vocational training
                      </h2>
                      <p>
                        More than double the average number of hours of
                        continuing vocational training is provided to people
                        working in financial intermediation.
                      </p>
                    </li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Occupation;
