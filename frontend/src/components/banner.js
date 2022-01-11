import React from "react";
import intro from "../assets/img/intro.png";
export const Banner = () => {
  return (
    <div className="container banner">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-xs-12">
          <div className="contents">
            <h2 className="head-title">Find the job that fit your life</h2>
            <p>
              Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
              condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
              porta sit amet. Suspendisse et sapien varius, pellentesque dui
              non.
            </p>
            <div className="job-search-form">
              {/* <form>
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-xs-12">
                    <div className="">
                      <input
                        className=""
                        type="text"
                        placeholder="Job Title or Company Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-xs-12">
                    <div className="">
                      <div className="search-category-container">
                        <label className="styled-select">
                          <select>
                            <option value="none">Locations</option>
                            <option value="none">New York</option>
                            <option value="none">California</option>
                            <option value="none">Washington</option>
                            <option value="none">Birmingham</option>
                            <option value="none">Chicago</option>
                            <option value="none">Phoenix</option>
                          </select>
                        </label>
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-xs-12">
                    <button type="submit" className="button btn btn-primary">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-xs-12">
          <div className="intro-img">
            <img src={intro} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
