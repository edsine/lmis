import React, { useState } from "react";
//import Bar from './Bar';
import { Link } from "react-router-dom";
import {
  BiBuoy,
  BiCoinStack,
  BiBriefcase,
  BiLineChart,
  BiNews,
} from "react-icons/bi";

import Common from "../inc/Common";
import nigeriaHigh from "../images/ng.svg";
import list from '../data/list';
import Footer from "../inc/Footer";
import Keyfact from "./inc/apis/fetch_keyfacts";
import State from "./inc/apis/fetch_states";
import Sectors from "./inc/apis/fetch_sectors";
import Sectorsdesciption from "./inc/apis/fetch_sectors_description";



function Sector() {
  // const [sectorState, setSectorState] = useState()

  const [filteredKeyFacts, setFilteredKeyFacts] = useState();

  const [sectorDescription, setSectorDescription] = useState(null);



  // const handleChange = (e) => {
  //   const selected = e.target.value;
  //   const selectedSectorState = list.filter((d) => d.id == selected)[0];
  //   console.log(selectedSectorState);
  //   setSectorState(selectedSectorState);


  // }

  const filterKeyFactsByState = (e) => {
    const selected = e.target.value;
    const keyFacts = filteredKeyFacts.filter(item => item.attributes.state.data.id === selected)
    setFilteredKeyFacts(keyFacts)
  }

  const filterKeyFactsBySector = (e) => {
    const selected = e.target.value;
    const keyFacts = filteredKeyFacts.filter(item => item.attributes.sector.data.id === selected)
    setFilteredKeyFacts(keyFacts)
  }

  const changeSectorDescription = (e) => {
    console.log(e.target.description);
    setSectorDescription('dd')
  }

  return (
    <>
      <Common />

      <div className="container-fluid">
        <div className="container mt-3 mb-3">
          <h1>Filters</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <h2>sectors</h2>

              <div>
                <div class="col text-center ">
                  <select onChange={(e) => { filterKeyFactsBySector(e); changeSectorDescription(e) }}>
                    <option selected>Select Sector</option>
                    <Sectors />
                  </select>
                </div>
              </div>
            </div>

            <div className="col">
              <h2>states</h2>
              <div>
                <div class="col text-center ">
                  <select
                    class="form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    onChange={(e) => { filterKeyFactsByState(e) }}
                  >
                    <option selected>Select State</option>
                    <State />
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="m-5">
          <div className="container-fluid">
            <div class="card card-margin">
              <div
                class="card-header"
                style={{ backgroundColor: "#0A6921", color: "#fff" }}
              >
                {/* {sectorState?.restaurant} */}
              </div>
              <div class="card-body" className="py-font py-5 px-5">
                {/* {sectorState?.bio} */}
                <Sectorsdesciption sectorDescription={sectorDescription}/>
              </div>
            </div>
          </div>
        </div>

        <div className="container row mb-10">
          <h1>Key Facts</h1>
        </div>

        <div>
          <div className="card-group container-fluid">
            <div class="row">
              <div class="col-8">
                <Keyfact filteredKeyFacts={filteredKeyFacts} setFilteredKeyFacts={setFilteredKeyFacts} />
                <div className="text-center p-5">
                  {/* <img src={sectorState?.image} /> */}
                </div>
              </div>
              <div class="col-4">
                <div className=" container card  mb-5" style={{}}>
                  <div class="card-header">
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
              </div>
            </div>
          </div>
          {/*from here for 1*/}
        </div>
      </div>
    </>
  );
}

export default Sector;
