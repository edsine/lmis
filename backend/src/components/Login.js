import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { Row, Col, Alert, Container } from "reactstrap";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

//import logo from "../assets/images/logo-sm-dark.png"

import logo from "../assets/images/logo-light.png";
import logoWhite from "../assets/images/logo-whiite-text.png";
import loginbg from "../assets/images/bg-login.jpg";

const required = (value) => {
  if (!value) {
    return <div className="text-danger fs-16">This field is required!</div>;
  }
};

const Login = (props) => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  //dispatch(props.logout());

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          navigate("/dashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div
      className="login-main-page"
      style={{ backgroundImage: "url(" + loginbg + ")" }}
    >
      <div className="login-wrapper">
        <div className="login-aside-left">
          <Link to={"#"} className="login-logo">
            <img src={logo} alt="" width="200px" className="ms-3" />
          </Link>
          <div className="login-description">
            <h2 className="main-title mb-2">Welcome To LMIS</h2>
            <p className="">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
            <ul className="social-icons mt-4">
              <li>
                <Link to={"#"}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
            </ul>
            <div className="mt-5 bottom-privacy">
              <Link to={"#"} className="mr-4">
                Privacy Policy
              </Link>
              <Link to={"#"} className="mr-4">
                Contact
              </Link>
              <Link to={"#"} className="">
                © 2022 LMIS
              </Link>
            </div>
          </div>
        </div>
        <div className="login-aside-right">
          <div className="row m-0 justify-content-center h-100 align-items-center">
            <div className="p-5">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form-1">
                      <div className="mb-4">
                        <h3 className="dz-title mb-1">Sign in</h3>
                        <p className="">
                          Sign in by entering information below
                        </p>
                      </div>

                      {message && (
                        <div className="alert alert-danger text-black fs-16 bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                          {message}
                        </div>
                      )}
                      <Form onSubmit={handleLogin} ref={form}>
                        <div className="form-group">
                          <label className="mb-2 ">
                            <strong>Email</strong>
                          </label>
                          <Input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={onChangeEmail}
                            name="username"
                            placeholder="Type Your Email Address"
                            validations={[required]}
                          />
                        </div>
                        <div className="form-group">
                          <label className="mb-2 ">
                            <strong>Password</strong>
                          </label>
                          <Input
                            type="password"
                            className="form-control"
                            value={password}
                            name="password"
                            placeholder="Type Your Password"
                            onChange={onChangePassword}
                            validations={[required]}
                          />
                        </div>

                        <div className="text-center mt-5">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={loading}
                          >
                            {loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>LOGIN</span>
                          </button>
                        </div>
                        <CheckButton
                          style={{ display: "none" }}
                          ref={checkBtn}
                        />
                      </Form>
                      <div
                        className="new-account mt-2"
                        style={{ display: "none" }}
                      >
                        <p className="">
                          Don't have an account?{" "}
                          <Link className="text-primary" to="./page-register">
                            Sign up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
