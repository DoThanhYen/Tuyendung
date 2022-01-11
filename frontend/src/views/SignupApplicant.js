import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/img/slider/img-1.png";

export const SignupApplicant = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [messageSuccess, setMessageSuccess] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/signup/applicant", {
        email: data.email,
        password: data.password,
        roleId: 3,
      })
      .then((res) => {
        console.log(res.data);
        setData({ email: "", password: "" });
        setMessageSuccess(true);
      })
      .catch((err) => console.log(err.message));
  };
  const handleOnchange = (a, value) => {
    setData({
      ...data,
      [a]: value,
    });
  };
  console.log(data);

  return (
    <div className="container row auth-form">
      <div className="col-md-6">
        <img src={img} />
      </div>
      <div className="col-md-6">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={handleSignup}>
              <h3>Đăng ký tài khoản</h3>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => {
                    handleOnchange("email", e.target.value);
                  }}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => {
                    handleOnchange("password", e.target.value);
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Đăng ký
              </button>
              {messageSuccess && (
                <div class="alert alert-success mt-2 mb-2" role="alert">
                  Đăng ký tài khoản thành công!
                </div>
              )}
              <p className="forgot-password text-right">
                Bạn đã có tài khoản <a href="#">Đăng nhập</a> ?
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
