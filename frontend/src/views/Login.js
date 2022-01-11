import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import intro from "../assets/img/slider/img-3.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { UseStore } from "../store";

const Login = (props) => {
  const history = useHistory();
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };
  // dispatch
  const [state, dispatch] = UseStore();

  const [data, setData] = React.useState(initialState);
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    axios
      .post("http://localhost:3000/auth/login/applicant", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "LOGIN_APPLICANT", payload: res.data });
        history.push("/");
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email không được để trống")
      .email("Email phải đúng định dạng"),
    password: Yup.string()
      .required("Password không được để trống")
      .min(6, "Password phải có ít nhất 6 ký tự")
      .max(40, "Password không vượt quá 40 ký tự"),
  });

  return (
    <>
      <div className="container row auth-form">
        <div className="col-md-6">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <form onSubmit={handleLogin}>
                <h3>Đăng nhập</h3>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Mật khẩu</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Đăng nhập
                </button>
                <p className="forgot-password text-right">
                  Quên <a href="#">mật khẩu?</a>
                </p>
                <p className="forgot-password text-right">
                  <a href="#">Đăng ký?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={intro} />
        </div>
      </div>

      {/* <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={data.password}
                onChange={handleInputChange}
                validations={[required]}
              />
            </div>

            {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}

            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? "Loading..." : "Login"}
            </button>
          </Form>
        </div>
      </div> */}
    </>
  );
};

export default Login;
