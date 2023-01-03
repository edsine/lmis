import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

import Login from "../Login";
import Register from "../Register";
import Home from "../Home";
import Profile from "../Profile";
import BoardUser from "../BoardUser";
import BoardModerator from "../BoardModerator";
import BoardAdmin from "../BoardAdmin";

import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "../../common/EventBus";

const Footer = () => {
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      //setShowUserBoard(currentUser.user.role_id.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.user.role_id === 1);
    } else {
      setShowUserBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <nav className="footer">
    &copy 2022 LMIS.
   </nav>
  );
};

export default Footer;
