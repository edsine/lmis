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

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";
import { format, compareAsc } from "date-fns";
import { useSelector } from "react-redux";
import authHeader from "../../services/auth-header";


const axios = require("axios");

const Users = () => {
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
    const res = await UserService.getUserBoard().then(
      (response) => {
        //let value = await response.json();
         //alert(JSON.stringify(response.data));
        if (response.status === 200) {
          setContents(response.data);
          setTableData(response.data);
          setLoading(false);
          setShowTable(true);
        }
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
    await UserService.saveNewUser(data).then(
      (response) => {
        //let value = await response.json();
        // alert(JSON.stringify(response.data));
        //setContents(response.data)
        const newContents = [...content, data];
        setContents(newContents);
        setTableData(newContents);
        setAddCard(false);
        swal("Good job!", "Successfully Added New Member", "success");
        addFormData.fullname = addFormData.phone = addFormData.email = addFormData.password = addFormData.role_id =
          "";
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

  const veryEmail = async (data) => {
    setLoading(true);
    await UserService.verifyUserEmail(data).then(
      (response) => {
        //let value = await response.json();
        // alert(JSON.stringify(response.data.message));
        //setContents(response.data)
        //saveData(data);
        if (response.data.message === 1) {
          swal(
            "Oops",
            "Email address already in use. Please try a different email address.",
            "error"
          );
        } else {
          saveData(data);
          //swal('ok', "Hurray!!!", "success");
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
          swal("Oops", error.response.data.message, "error");
        }
        setAddCard(true);
        setLoading(false);

        if (error.response && error.response.status === 401) {
          /* EventBus.dispatch("logout"); */
        }
      }
    );
  };

  const updateData = async (data) => {
    setLoading(true);
    await UserService.updateNewUser(data).then(
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
    const undo = [1, 27];
    //console.log(arr.indexOf("bob") > -1); //true
    if (contentId === 1) {
      swal("Sorry", "You can't delete this user.", "error");
      return false;
    } else if (contentId === 27) {
      swal("Sorry", "You can't delete this user.", "error");
      return false;
    }

    const del = {
      id: contentId,
    };
    const config = {
      method: "delete",
      url: UserService.API_URL + "users/" + contentId,
      headers: {
        Authorization: currentUser.token,
      },
      data: del,
    };

    const response = axios(config)
      .then(
        //const response = await UserService.softDeleteSingleUser(contentId).then(
        (response) => {
          //let value = await response.json();
          //alert(response.message);
          //setContents(response.data)
          //setLoading(false)
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
  //Add data
  const [addFormData, setAddFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    role_id: "",
  });

  // Add contact function
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  //Add Submit data
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    var error = false;
    var errorMsg = "";
    if (addFormData.fullname === "") {
      error = true;
      errorMsg = "Please fill  Full Name";
    } else if (addFormData.phone === "") {
      error = true;
      errorMsg = "Please fill Phone Number.";
    } else if (addFormData.email === "") {
      error = true;
      errorMsg = "please fill Email Address";
    } else if (addFormData.password === "") {
      error = true;
      errorMsg = "Please fill Password.";
    } else if (addFormData.role_id === "") {
      error = true;
      errorMsg = "please select a member role";
    }
    if (!error) {
      const newContent = {
        //id: nanoid(),
        fullname: addFormData.fullname,
        phone: addFormData.phone,
        email: addFormData.email,
        password: addFormData.password,
        role_id: addFormData.role_id,
      };

      veryEmail(newContent);
      //saveData(newContent);
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
      fullname: content.fullname,
      email: content.email,
      phone: content.phone,
      role_id: content.role_id,
    };
    setEditFormData(formValues);
    //setEditModal(true);
  };

  // edit  data
  const [editFormData, setEditFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    role_id: "",
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
      fullname: editFormData.fullname,
      role_id: editFormData.role_id,
      phone: editFormData.phone,
      email: editFormData.email,
    };
    const newContents = [...content];
    const index = content.findIndex((content) => content.id === editContentId);
    newContents[index] = editedContent;
    updateData(editedContent);
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
      text: "Are you sure that you want to delete this user?",
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
      <PageTitle activeMenu="Page" motherMenu="Users" />
      <div className="col-12">
        <Modal className="modal fade" show={addCard} onHide={setAddCard}>
          <div className="" role="document">
            <div className="">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title fs-20">Add New User</h4>
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
                          Full Name
                        </label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="fullname"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="Full Name"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <label className="text-black font-w500">
                          Phone Number
                        </label>
                        <div className="contact-name">
                          <input
                            type="number"
                            className="form-control"
                            autoComplete="off"
                            name="phone"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="Phone Number"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">
                          Email Address
                        </label>
                        <div className="contact-name">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="email"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="Email Address"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Password</label>
                        <div className="contact-name">
                          <input
                            type="password"
                            className="form-control"
                            autoComplete="off"
                            name="password"
                            required="required"
                            onChange={handleAddFormChange}
                            placeholder="Password"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Role</label>
                        <div className="contact-name">
                          <select
                            className="form-control"
                            name="role_id"
                            required="required"
                            onChange={handleAddFormChange}
                          >
                            <option value="">Select Role</option>
                            <option value="2">User</option>
                            <option value="1">Admin</option>
                          </select>
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
            <h4 className="card-title">List of users</h4>
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
                {showTable && <Table tabledata={tabledata} confirmDelete={confirmDelete} handleEditClick={handleEditClick} editContentId={editContentId} handleCancelClick={handleCancelClick} handleEditFormChange={handleEditFormChange} editFormData={editFormData} />}
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Users;
