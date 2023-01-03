import React, { useState, useEffect, useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";


import Login from "./components/Login";
import Register from "./components/Register";
//import Home from "./components/Home";
import Profile from "./components/Profile";
//import BoardUser from "./components/BoardUser";
//import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Dashboard from "./components/dashboard";
import Widget from "./components/widget";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import Index from "./components/include";
import Users from "./components/users";
import Indicators from "./components/indicators";
import Population from "./components/indicators-by-subjects/population";
import Employment from "./components/indicators-by-subjects/employment";
import Employees from "./components/indicators-by-subjects/employees"
import WorkingPoverty from "./components/indicators-by-subjects/working-poverty";
import Unemployment from "./components/indicators-by-subjects/unemployment";
import ChildLabour from "./components/indicators-by-subjects/child-labour";
//import Footer from "./components/include/Footer";
import { ThemeContext } from "./context/ThemeContext";


import "./assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./assets/css/style.css";

/// Css
import "./assets/index.css";
import "./assets/chart.css";
import "./assets/step.css";



const App = () => {
  const { menuToggle } = useContext(ThemeContext);

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

  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  let pagePath = path.split("-").includes("page");

  const routes = [
    {url: "users", element: Users}
  ]
  return (
    <>
    {currentUser && (
      <>
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}  ${
          menuToggle ? "menu-toggle" : ""
        }`}
      >
        {!pagePath && <Index />}

        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/widget" element={<Widget />} />
      <Route path="/users" element={<Users />} />
      <Route path="/indicators" element={<Indicators />} />
      <Route path="/population" element={<Population />} />
      <Route path="/employment" element={<Employment />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/working-poverty" element={<WorkingPoverty />} />
      <Route path="/unemployment" element={<Unemployment />} />
      <Route path="/child-labour" element={<ChildLabour />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<BoardAdmin />} />
      </Routes>
      </div>
      </div>
      </div>
      
      </>
      )}
      <div className="vh-100">
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </div>
      {/* {currentUser && (
      <Footer/>
  )} */}
      
      {/* <AuthVerify logOut={logOut}/> */}
    </>
  );
};

export default App;
