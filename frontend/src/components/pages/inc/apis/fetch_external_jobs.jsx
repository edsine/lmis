import React, { useState, useEffect, StyleSheet } from "react";
import { Link } from "react-router-dom";
import { BiBuildings, BiBriefcase } from "react-icons/bi";
import job from "../../../../jobs.json";
import "../../../../styles/jobs.css";

const ExternalJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(21);

  var pageEnd = currentPage * jobsPerPage;
  var pageStart = pageEnd - jobsPerPage;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(job.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  useEffect(() => {
    setJobs(job);
  }, []);

  return (
    <div>
      <div className="row mb-2">
        {jobs &&
          jobs.slice(pageStart, pageEnd - 1).map((jobs, index) => {
            return (
              <div
                key={index}
                className="card col-3"
                style={{ backgroundColor: "rgba(116,166,39, 0.1)" }}
              >
                {/*<img src="" className="card-img-top" alt="Hollywood Sign on The Hill" />*/}
                <div className="card-body">
                  {/*  <div className="text-center">
                <div className="py-5">
                  <BiBuildings size={70} color="#488134" />
                </div>
              </div> */}
                  <h5 className="card-title py-font">
                    <strong>{jobs?.title}</strong>
                  </h5>
                  <p className="card-text py-font">{jobs?.pub_date}</p>
                  <p className="card-text py-font"></p>
                  <center>
                    {" "}
                    <a href={jobs?.link}>
                      <small
                        className="d-inline-block mb-2"
                        style={{ color: "skyblue" }}
                      >
                        View Details
                      </small>
                    </a>
                  </center>
                </div>
              </div>
            );
          })}
      </div>
      <ul className="pagination">
        <li>
          <a href="javascript:void(0)">{renderPageNumbers}</a>
        </li>
      </ul>
    </div>
  );
};

export default ExternalJobs;
