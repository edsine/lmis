import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import "./App.css";
import Loader from "./loader";
import CsvError from "./csvError";
import Table from "./table";
import PageTitle from "../../include/PageTitle";
import axios from "axios";
import authHeader from "../../../services/auth-header";
import { API_URL } from "../../../constants/constant";

class ChildLabour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showTable: false,
      error: false,
      tabledata: {},
    };
    this.loadClickHandler();
  }

  // :::::::: CSV parser ::::::::::
  papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };
  //::::::::::::::::::::::::::::::::

  //::::::::: for putting all data in CSV to MySQL :::::::::::
  handleForce = (data, fileInfo) => {
    this.setState({ loading: true });

    let d = JSON.stringify({ ...data });

    /*  fetch("http://localhost:3001/api/v1/bulkcreate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: d,
    }) */

    axios
      .post(API_URL + "bulkchildlabour", data, { headers: authHeader() })
      .then((response) => {
        //alert(JSON.stringify(response))
        this.setState({ loading: false });

        if (response) {
          return response.data;
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        this.setState({ tabledata: responseJson });
        this.setState({ showTable: true });
        console.log(responseJson);
      })
      .catch((error) => {
        this.setState({ error: true });
        console.log(error, this.state);
      });
  };
  //:::::::::::::::: End of POST call to save data ::::::::::::::

  //::::::::::: GET all data form MySQL table ::::::::::

  loadClickHandler = () => {
    //
    this.setState({ loading: true });
    axios
      .get(API_URL + "childlabour", { headers: authHeader() })
      .then((response) => {
        //alert(JSON.stringify(response))
        if (response) {
          this.setState({ loading: false });
          //localStorage.setItem("Employment",JSON.stringify(response.data))
          return response.data;
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        this.setState({ tabledata: data });
        this.setState({ showTable: true });
        //console.log(data);
      })
      .catch((err) => {
        this.setState({ error: true });
        console.log(err);
      });
  };

  //:::::::::::

  deleteClickHandler = () => {
    this.setState({ loading: true });
    this.setState({ loaded: false });

    fetch(API_URL + "childlabour", {
      method: "DELETE",
    })
      .then((response) => {
        this.setState({ loading: false });
        this.setState({ loaded: true });

        if (response.ok) {
          this.loadClickHandler();
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        this.setState({ error: true });
        console.log(error, this.state);
      });
  };

  render() {
    if (this.state.loading) return <Loader />;
    if (this.state.error) return <CsvError />;
    return (
      <>
        <PageTitle activeMenu="Page" motherMenu="Import" />
        <div className="col-12">
          <div className="wrapper">
            <div className="section2">
              <div className="container1">
                <CSVReader
                  cssClass="react-csv-input"
                  label="Select CSV:"
                  onFileLoaded={this.handleForce.bind(this)}
                  parserOptions={this.papaparseOptions}
                />
              </div>
              <button
                className="btn btn-primary"
                style={{ display: "none" }}
                onClick={this.loadClickHandler}
              >
                <span>Load Data </span>
              </button>
            </div>
          </div>

          <div>
            <div className="section2">
              {this.state.showTable && (
                <button
                  className="button"
                  style={{ backgroundColor: "red", display: "none" }}
                  onClick={this.deleteClickHandler}
                >
                  <span>Wipe Data </span>
                </button>
              )}
            </div>

            <div className="section3">
              {this.state.showTable && (
                <Table tabledata={this.state.tabledata} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChildLabour;
