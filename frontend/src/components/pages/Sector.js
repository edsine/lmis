import React, { useState } from "react";
//import Bar from './Bar';

import Common from "../inc/Common";
import Keyfact from "./inc/apis/fetch_keyfacts";
import Sectors from "./inc/apis/fetch_sectors";
import Description from "./inc/description";

function Sector() {
  // const [sectorState, setSectorState] = useState()

  const [filteredKeyFacts, setFilteredKeyFacts] = useState(null);

  const [sectorDescription, setSectorDescription] = useState(null);

  const [resetFilter, setResetFilter] = useState(false);

  // const filterKeyFactsByState = (e) => {
  //   const selected = parseInt(e.target.value);
  //   const keyFacts = filteredKeyFacts.filter(
  //     (item) => item.attributes.state.data.id === selected
  //   );
  //   console.log(selected);
  //   setFilteredKeyFacts(keyFacts);
  // };

  const filterKeyFactsBySector = (e) => {
    const selected = parseInt(e.target.value);
    if (selected === 0) {
      setResetFilter(true);
      return;
    }
    const keyFacts = filteredKeyFacts.filter(
      (item) => item.attributes.sector.data.id === selected
    );
    setFilteredKeyFacts(keyFacts);
  };

  const changeSectorDescription = ({
    target: {
      selectedOptions: [
        {
          dataset: { description },
        },
      ],
    },
  }) => {
    setSectorDescription(description);
  };

  return (
    <>
      <Common />

      <div className="container-fluid">
        <div className="container my-5">
          <div className="row">
            <div className="col-6">
              <div>
                <label>Sectors</label>
                <div className="col text-center ">
                  <select
                    onChange={(e) => {
                      filterKeyFactsBySector(e);
                      changeSectorDescription(e);
                    }}
                  >
                    <option value={0}>Select Sector</option>
                    <Sectors />
                  </select>
                </div>
              </div>
            </div>

            {/* <div className="col">
              <h2>states</h2>
              <div>
                <div className="col text-center ">
                  <select
                    className="form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    onChange={(e) => {
                      filterKeyFactsByState(e);
                    }}
                  >
                    <option>Select State</option>
                    <State />
                  </select>
                </div>
              </div>
            </div> */}
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
                <Description description={sectorDescription} />
                <h4 className="my-5">Key Facts</h4>
                <Keyfact
                  resetFilter={resetFilter}
                  filteredKeyFacts={filteredKeyFacts}
                  setFilteredKeyFacts={setFilteredKeyFacts}
                />
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

export default Sector;
