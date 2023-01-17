import React, { useEffect, useState } from "react";
import CSVReader from "react-csv-reader";
import "./App.css";
import Loader from "./loader";
import CsvError from "./csvError";
import Table from "./table";
import PageTitle from "../include/PageTitle";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { API_URL } from "../../constants/constant";

const IndicatorDetailsMeta = (props) => {
  const [tableData, setTableData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { indicatorDetails, setShowDataComponent } = props;

  // :::::::: CSV parser ::::::::::
  const parserOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };
  //::::::::::::::::::::::::::::::::

  useEffect(() => {
    if (indicatorDetails) {
      getData(indicatorDetails.id);
    }
  }, [indicatorDetails]);

  const getData = (indicatorDetailsId) => {
    setIsLoading(true);
    axios
      .get(API_URL + `indicator-details-meta/${indicatorDetailsId}`, {
        headers: authHeader(),
      })
      .then((response) => {
        if (response) {
          setIsLoading(false);
          return response.data;
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setTableData(data);
      })
      .catch((err) => {});
  };

  const handleUpload = (data, fileInfo) => {
    axios
      .post(API_URL + `indicator-details-meta/${indicatorDetails.id}`, data, {
        headers: authHeader(),
      })
      .then((response) => {
        setIsLoading(true);

        if (response) {
          return response.data;
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        setTableData(responseJson);
        setIsLoading(false);
      })
      .catch((error) => {});
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <PageTitle activeMenu="Page" motherMenu="Import" />
      <div className="col-12">
        <div className="wrapper">
          <div className="section2">
            <div className="container1">
              <CSVReader
                cssClass="react-csv-input"
                label="Select CSV:"
                onFileLoaded={handleUpload}
                parserOptions={parserOptions}
              />
            </div>
            <button className="btn btn-primary">
              <span>Import Data</span>
            </button>
          </div>
        </div>

        <div>
          <div className="">
            {
              <Table
                tableData={tableData}
                tableColumns={indicatorDetails.dimensions}
              />
            }
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowDataComponent(false);
          }}
        >
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
};

export default IndicatorDetailsMeta;
