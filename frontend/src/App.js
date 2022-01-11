import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./views/Home";
import { Jobs } from "./views/Jobs";
import { CreateJobs } from "./views/CreateJobs";
import Login from "./views/Login";
import { SignupApplicant } from "./views/SignupApplicant";
import { UseStore } from "./store";
export default function App() {
  const [state, dispatch] = UseStore();
  console.log(state);
  const [isRecruiter, setIsRecruiter] = useState(false);

  const handleClick = () => {
    setIsRecruiter(!isRecruiter);
  };
  const applicant = JSON.parse(localStorage.getItem("applicant"));

  const tokenApplicant = localStorage.getItem("tokenApplicant");

  const recruiter = localStorage.getItem("recruiter");
  console.log(recruiter);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Job Portal
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Trang chủ
                </Link>
              </li>

              {isRecruiter ? (
                <li className="nav-item">
                  <Link className="nav-link" to={"/createjobs"}>
                    Đăng việc làm
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to={"/jobs"}>
                    Việc làm
                  </Link>
                </li>
              )}

              {/* nhà tuyển dụng chưa đăng nhập */}
              {isRecruiter && !recruiter ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/loginRecruiter"}>
                      Đăng nhập
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/signupRecruiter"}>
                      Đăng ký
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}

              {/* nhà tuyển dụng đăng nhập */}
              {isRecruiter && recruiter ? (
                <li class="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {recruiter}
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </div>
                </li>
              ) : (
                ""
              )}

              {/* ứng viên chưa đăng nhập */}
              {!isRecruiter && !applicant ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/loginApplicant"}>
                      Đăng nhập
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/signupApplicant"}>
                      Đăng ký
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}

              {/*Ứng viên đã đăng nhập*/}
              {!isRecruiter && applicant ? (
                <li class="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {applicant}
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="#">
                      Thông tin cá nhân
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Công việc đã lưu
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      Công việc đã ứng tuyển
                    </Link>
                  </div>
                </li>
              ) : (
                ""
              )}

              <li className="nav-item ml-3">
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick()}
                >
                  {isRecruiter
                    ? "Dành cho Người tìm việc"
                    : "Dành cho Nhà tuyển dụng"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Route path="/" exact component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/createjobs" component={CreateJobs}></Route>
        <Route path="/loginApplicant" component={Login} />
        <Route path="/signin" component={SignupApplicant} />
      </div>
    </Router>
  );
}
