/// Menu
import Metismenu from "metismenujs";
import React, {
  Component,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../context/ThemeContext";
//import LogoutPage from './Logout';

/// Image
//import user from "../../../images/user.jpg";
import profile from "../../assets/images/user.jpg";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "../../common/EventBus";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector(".heart");
    function heartBlast() {
      return handleheartBlast.classList.toggle("heart-blast");
    }
    handleheartBlast.addEventListener("click", heartBlast);

    if (currentUser) {
      setShowUserBoard(currentUser.user.role_id === 2);
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
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;

  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu

  let widget = ["widget-basic"],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  return (
    <div
      className={`dlabnav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? scrollPosition > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <Dropdown className="dropdown header-profile2">
          <Dropdown.Toggle
            variant=""
            as="a"
            className="nav-link i-false c-pointer"
          >
            <div className="header-info2 d-flex align-items-center border">
              <img src={profile} width={20} alt="" />
              <div className="d-flex align-items-center sidebar-info">
                <div>
                  <span className="font-w700 d-block mb-2">ITP</span>
                  <small className="text-end font-w400">Super Admin</small>
                </div>
                <i className="fas fa-sort-down ms-4"></i>
              </div>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            align="right"
            className=" dropdown-menu dropdown-menu-end"
          >
            <Link to="/profile" className="dropdown-item ai-icon">
              <svg
                id="icon-user1"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary me-1"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              <span className="ms-2">Profile </span>
            </Link>
            <Link
              to="/login"
              onClick={logOut}
              className="dropdown-item ai-icon"
            >
              <i
                width={18}
                height={18}
                className="fas fa-lock text-primary me-1"
              ></i>
              <span className="ms-2">Logout</span>
            </Link>
            {/* <LogoutPage /> */}
          </Dropdown.Menu>
        </Dropdown>
        <MM className="metismenu" id="menu">
          <li className={`"dashboard" ? "mm-active" : ""}`}>
            <Link
              className={`${path === "dashboard" ? "mm-active" : ""}`}
              to="/dashboard"
            >
              <i className="fas fa-home"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className={`"users" ? "mm-active" : ""}`}>
            <Link
              className={`${path === "users" ? "mm-active" : ""}`}
              to="/users"
            >
              <i className="fas fa-users"></i>
              <span className="nav-text">Users</span>
            </Link>
          </li>
          <li className={`"indicators" ? "mm-active" : ""}`}>
            <Link
              className={`${path === "indicators" ? "mm-active" : ""}`}
              to="/indicators"
            >
              <i className="fas fa-plus"></i>
              <span className="nav-text">Indicators</span>
            </Link>
          </li>
          <li className={`"indicator" ? "mm-active" : ""}`}>
            <Link
              className={`${path === "indicator-details" ? "mm-active" : ""}`}
              to="/indicator-details"
            >
              <i className="fas fa-plus"></i>
              <span className="nav-text">Indicator Details</span>
            </Link>
          </li>

          {/* <li className={`"import" ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <i className="fas fa-clone"></i>
              <span className="nav-text">Import CSV</span>
            </Link>
            
            <ul>
              <li>
                <Link className="has-arrow" to="#">
                  Indicators by subject
                </Link>
                <ul>
                  <li>
                    <Link
                      className={`${path === "population" ? "mm-active" : ""}`}
                      to="/population"
                    >
                      Population
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      className={`${path === "employment" ? "mm-active" : ""}`}
                      to="/employment"
                    >
                      Employment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "employees" ? "mm-active" : ""}`}
                      to="/employees"
                    >
                      Employees
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "working-poverty" ? "mm-active" : ""}`}
                      to="/working-poverty"
                    >
                      Working poverty
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "unemployment" ? "mm-active" : ""}`}
                      to="/unemployment"
                    >
                      Unemployment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "child-labour" ? "mm-active" : ""}`}
                      to="/child-labour"
                    >
                      Child labour
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
          <li className={`"widget" ? "mm-active" : ""}`}>

          <Link className="has-arrow ai-icon" to="pages/homestat/">
              <i className="fas fa-clone"></i>
              <span className="nav-text"> CMS</span>
            </Link>
            <ul>
              <li>
                <Link className="has-arrow" to="#">
                 Home Page CMS
                </Link>
                <ul>
                  <li>
                    <Link
                      className={`${path === "homestat" ? "mm-active" : ""}`}
                      to="/homestat"
                    >
                      Statistical Info
                    </Link>{" "}
                  </li>
                  </ul>
                  </li>
                  </ul>
            </li>
          <li className={`"widget" ? "mm-active" : ""}`}>
            <Link to="widget" className="ai-icon">
              <i className="fas fa-user-check"></i>
              <span className="nav-text">Widget</span>
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={logOut}>
              <i className="fas fa-lock"></i>
              <span className="nav-text">Logout</span>
            </Link>
          </li>
          <li
            style={{ display: "none" }}
            className={`"todo" ? "mm-active" : ""}`}
          >
            <Link className="has-arrow ai-icon" to="#">
              <i className="flaticon-087-stop"></i>
              <span className="nav-text">Redux</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "todo" ? "mm-active" : ""}`}
                  to="/todo"
                >
                  Todo
                </Link>
              </li>
            </ul>
          </li>
          <li
            style={{ display: "none" }}
            className={`${forms.includes(path) ? "mm-active" : ""}`}
          >
            <Link className="has-arrow ai-icon" to="#">
              <i className="fas fa-file-alt"></i>
              <span className="nav-text forms">Forms</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "form-element" ? "mm-active" : ""}`}
                  to="/form-element"
                >
                  Form Elements
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-wizard" ? "mm-active" : ""}`}
                  to="/form-wizard"
                >
                  {" "}
                  Wizard
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "form-editor-summernote" ? "mm-active" : ""
                  }`}
                  to="/form-editor-summernote"
                >
                  Summernote
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-pickers" ? "mm-active" : ""}`}
                  to="/form-pickers"
                >
                  Pickers
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "form-validation-jquery" ? "mm-active" : ""
                  }`}
                  to="/form-validation-jquery"
                >
                  Form Validate
                </Link>
              </li>
            </ul>
          </li>
          <li
            style={{ display: "none" }}
            className={`${table.includes(path) ? "mm-active" : ""}`}
          >
            <Link className="has-arrow ai-icon" to="#">
              <i className="fas fa-table"></i>
              <span className="nav-text">Table</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "table-filtering" ? "mm-active" : ""}`}
                  to="/table-filtering"
                >
                  Table Filtering
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Table Sorting
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "table-bootstrap-basic" ? "mm-active" : ""
                  }`}
                  to="/table-bootstrap-basic"
                >
                  Bootstrap
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "table-datatable-basic" ? "mm-active" : ""
                  }`}
                  to="/table-datatable-basic"
                >
                  Datatable
                </Link>
              </li>
            </ul>
          </li>
          <li
            style={{ display: "none" }}
            className={`${pages.includes(path) ? "mm-active" : ""}`}
          >
            <Link className="has-arrow ai-icon" to="#">
              <i className="fas fa-clone"></i>
              <span className="nav-text">Pages</span>
            </Link>
            <ul>
              <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#">
                  Error
                </Link>
                <ul>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-400" ? "mm-active" : ""
                      }`}
                      to="/page-error-400"
                    >
                      Error 400
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-403" ? "mm-active" : ""
                      }`}
                      to="/page-error-403"
                    >
                      Error 403
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-404" ? "mm-active" : ""
                      }`}
                      to="/page-error-404"
                    >
                      Error 404
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-500" ? "mm-active" : ""
                      }`}
                      to="/page-error-500"
                    >
                      Error 500
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-503" ? "mm-active" : ""
                      }`}
                      to="/page-error-503"
                    >
                      Error 503
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${
                    path === "page-lock-screen" ? "mm-active" : ""
                  }`}
                  to="/page-lock-screen"
                >
                  Lock Screen
                </Link>
              </li>
            </ul>
          </li>
        </MM>
        <div className="copyright">
          <p>
            <strong>LMIS Admin Dashboard</strong> © 2022 All Rights Reserved
          </p>
          <p className="fs-12">
            Powered by <span className="heart"></span> Edsine
          </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
