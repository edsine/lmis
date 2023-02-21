import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { nanoid } from "nanoid";
import swal from "sweetalert";
import PageTitle from "../include/PageTitle";
import pic1 from "./../../assets/images/profile/small/pic1.jpg";
import Editable from "./Editable";
import Table from "./table";
import Loader from "../include/loader";

import IndicatorService from "../../services/indicator.service";
import EventBus from "../../common/EventBus";
import { format, compareAsc } from "date-fns";
import { useSelector } from "react-redux";
import authHeader from "../../services/auth-header";
import ImageUpload from "../ImageUpload/ImageUpload";


const axios = require("axios");

const Indicators = () => {
  const [content, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState(false);
  const [tabledata, setTableData] = useState({});

  let navigate = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await IndicatorService.getIndicators().then(
      (response) => {
        //let value = await response.json();
        // alert(JSON.stringify(response.data));
        //if (response.status === 200) {
          setContents(response.data);
          setTableData(response.data);
          setLoading(false);
          setShowTable(true);
        //}
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        //setContents(_content);
        swal("Oops", error.response.data, "error");
        setLoading(false);
        setError(true);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
    //alert(JSON.stringify(res.status))
    /* if(res.status === 200){
			setContents(res.data)
			setLoading(false)
		   } */
  };

  const saveData = async (data) => {
    setLoading(true);
    await IndicatorService.saveNewIndicator(data).then(
      (response) => {
        //let value = await response.json();
        // alert(JSON.stringify(response.data));
        //setContents(response.data)
        const newContents = [...content, data];
        setContents(newContents);
        //setTableData(newContents);
        setAddCard(false);
        swal("Good job!", "Successfully Added New Indicator", "success");
        addFormData.title = addFormData.content = addFormData.imagePath = "";
        setLoading(false);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        //setContents(_content);
        swal("Oops", error.response.data.message, "error");
        setAddCard(true);
        setLoading(false);

        if (error.response && error.response.status === 401) {
          /* EventBus.dispatch("logout"); */
        }
      }
    );
  };

  const veryIndicator = async (data) => {
    setLoading(true);
    await IndicatorService.verifyIndicator(data).then(
      (response) => {
        //let value = await response.json();
        alert(JSON.stringify(response.data.message));
        //setContents(response.data)
        //saveData(data);
        if (response.data.message === 1) {
          swal(
            "Oops",
            "Indicator already in use. Please try a different indicator.",
            "error"
          );
        } else {
          //saveData(data);
          swal('ok', "Hurray!!!", "success");
        }

        setLoading(false);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        //setContents(_content);
        if (_content) {
          swal("Oops", error.response.message, "error");
        }
        setAddCard(true);
        setLoading(false);

        if (error.response && error.response.status === 401) {
          /* EventBus.dispatch("logout"); */
        }
      }
    )
  };

  const updateData = async (data) => {
    setLoading(true);
    await IndicatorService.updateNewIndicator(data).then(
      (response) => {
        //let value = await response.json();
        // alert(JSON.stringify(response.data));
        //setContents(response.data)
        swal("Updated", response.data.message, "success");
        setLoading(false);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        //setContents(_content);
        swal("Oops", error.response.data.message, "error");
        setLoading(false);

        if (error.response && error.response.status === 401) {
          /* EventBus.dispatch("logout"); */
        }
      }
    );
  };
  // delete data
  const handleDeleteClick = async (contentId) => {
    const newContents = [...content];
    const index = content.findIndex((content) => content.id === contentId);
    newContents.splice(index, 1);
    
    const del = {
      id: contentId,
    };
    const config = {
      method: "delete",
      url: IndicatorService.API_URL + "indicators/" + contentId,
      headers: {
        Authorization: currentUser.token,
      },
      data: del,
    };

    const response = axios(config)
      .then(
        //const response = await IndicatorService.softDeleteSingleUser(contentId).then(
        (response) => {

          swal("Deleted", response.data.message, "error");
          setContents(newContents);
          setTableData(newContents);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          //setContents(_content);
          swal("Oops", error.response.data.message, "error");
          setLoading(false);

          /* if (error.response && error.response.status === 401) {
				EventBus.dispatch("logout");
			  } */
        }
      )
      .catch((error) => {
        swal("Oops", error.response.data.message, "error");
      });
    console.log(response); //just checking if works
  };

  //Modal box
  const [addCard, setAddCard] = useState(false);
  const [addPhoto, setAddPhoto] = useState(null);
  const [editPhoto, setEditPhoto] = useState(null);

  //Add data
  const [addFormData, setAddFormData] = useState({
    title: "",
    content: "",
    imagePath: "",
  });

  const imageHandler = (event) => {
    const newForm = event.target.files[0];
    console.log(event.target.files[0])
    setAddPhoto(newForm);

   }
   const EditImageHandler = (event) => {
    const newForm = event.target.files[0];
    console.log(event.target.files[0])
    setEditPhoto(newForm);

   }
  // Add contact function
  const handleAddFormChange = (event) => {
    //event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const fileData = () => {
     
    if (addPhoto) {
        
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {addPhoto.name}</p>

          <p>File Type: {addPhoto.type}</p>

          <p>
            Last Modified:{" "}
            {addPhoto.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  //Add Submit data 
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    var error = false;
    var errorMsg = "";
    if (addFormData.title === "") {
      error = true;
      errorMsg = "Please fill  Title";
    } else if (addFormData.content === "") {
      error = true;
      errorMsg = "Please fill Description.";
    } else if (addPhoto.imagePath === "") {
      error = true;
      errorMsg = "please select indicator Image";
    } 
    if (!error) {
      const newContent = {
        //id: nanoid(),
        title: addFormData.title,
        content: addFormData.content,
        imagePath: addFormData.imagePath,
      };
      //let formData;
        //if (typeof (addFormData.imagePath) === "object") {
        const formData = new FormData();
            //formData.append('id', this.state.Post.id);
            formData.append('title', addFormData.title);
            formData.append('content', addFormData.content);
            formData.append('imagePath', addPhoto,addPhoto.name);
        //}
        /* else {
            formData = {
                //"id": this.state.Post.id,
                'title': addFormData.title,
                'content': addFormData.content,
                'imagePath': addPhoto.imagePath
            }
        } */

      //veryIndicator(formData);
       saveData(formData);
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  //Edit start
  //const [editModal, setEditModal] = useState(false);
  // Edit function editable page loop
  const [editContentId, setEditContentId] = useState(null);

  // Edit function button click to edit
  const handleEditClick = (event, content) => {
    event.preventDefault();
    //alert(JSON.stringify(content.id))
    setEditContentId(content.id);
    const formValues = {
      title: content.title,
      content: content.content,
      imagePath: content.imagePath,
    };
    setEditFormData(formValues);
    //setEditModal(true);
  };

  // edit  data
  const [editFormData, setEditFormData] = useState({
    title: "",
    content: "",
    imagePath: "",
  });

  //update data function
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  // edit form data submit
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContent = {
      id: editContentId,
      title: editFormData.title,
      content: editFormData.content,
      imagePath: editFormData.imagePath
    };
    const formData = new FormData();
    formData.append('id', editContentId);
    formData.append('title', editFormData.title);
    formData.append('content', editFormData.content);
    formData.append('imagePath', editPhoto,editPhoto.name);

    const newContents = [...content];
    const index = content.findIndex((content) => content.id === editContentId);
    newContents[index] = editedContent;
    updateData(formData);
    setContents(newContents);
    setTableData(newContents);
    //swal('Updated', , "success");
    setEditContentId(null);
    // setEditModal(false);
  };
  //Cencel button to same data
  const handleCancelClick = () => {
    setEditContentId(null);
  };

  const confirmDelete = async (data) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this indicator?",
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Yes"],
    });
    if (willDelete) {
      handleDeleteClick(data);
    }
  };

  
  return (
    
    <>
    { loading ? <Loader /> : ''}
      <PageTitle activeMenu="Page" motherMenu="Indicators" />
      <div className="col-12">
        <Modal className="modal fade" show={addCard} onHide={setAddCard}>
          <div className="" role="document">
            <div className="">
              <form enctype="multipart/form-data">
                <div className="modal-header">
                  <h4 className="modal-title fs-20">Add New Indicator</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setAddCard(false)}
                    data-dismiss="modal"
                  >
                    <span></span>
                  </button>
                </div>
                <div className="modal-body">
                  <i
                    className="flaticon-cancel-12 close"
                    data-dismiss="modal"
                  ></i>
                  <div className="add-contact-box">
                    <div className="add-contact-content">
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">
                          Name of Indicator
                        </label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="title"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="Name of Indicator"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <label className="text-black font-w500">
                          Description
                        </label>
                        <div className="contact-name">
                          <textarea
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="content"
                            rows="4"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="Description"
                          >
                          </textarea>
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">
                          Indicator Image
                        </label>
                        <div className="contact-name">
                        <input
          type="file"
          name="imagePath"
          id="imagePath"
          className="form-control"
          onChange={imageHandler}
        />
        {fileData()}
                        {/* <ImageUpload
                            id="imagePath"
                            name="imagePath"
                            onInput={imageHandler}
                            value={addPhoto.imagePath}
                            errorText="Please provide an image."
                        /> */}
                          
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleAddFormSubmit}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddCard(false)}
                    className="btn btn-danger"
                  >
                    {" "}
                    <i className="flaticon-delete-1"></i> Discard
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">List of indicators</h4>
            <p className="card-title text-right">
              <Link
                className="btn btn-primary shadow sharp me-2"
                onClick={() => setAddCard(true)}
              >
                <i className="fa fa-plus"></i> &nbsp;Add
              </Link>
            </p>
          </div>
          <div className="card-body">
            <div className="w-100 table-responsive">
              <div id="example_wrapper" className="dataTables_wrapper">
                <form onSubmit={handleEditFormSubmit}>
                {showTable && <Table tabledata={tabledata} confirmDelete={confirmDelete} handleEditClick={handleEditClick} editContentId={editContentId} handleCancelClick={handleCancelClick} handleEditFormChange={handleEditFormChange} editFormData={editFormData} EditImageHandler={EditImageHandler} />}
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Indicators;
