import React, { useState } from "react";
import { JobSkeleton } from "./JobSkeleton";

export const Job = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3 className="text-center">Find your desired job</h3>
              </div>
              <div className="job-search-form bg-cyan job-featured-search">
                <form>
                  <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-5 col-xs-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Position"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-xs-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Location"
                        />
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-xs-12">
                      <button
                        type="button"
                        onClick={() => {}}
                        className="button btn btn-primary"
                      >
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="featured" className="section bg-cyan">
        <div className="container">
          <div className="row">
            {loading && (
              <>
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <JobSkeleton key={index} />
                  ))}
              </>
            )}
            {/* {jobs.length === 0 && (
              <>
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <JobItemSkeleton key={index} />
                  ))}
              </>
            )}
            {jobs.length &&
              jobs.map((job) => {
                return <JobItem job={job} key={job.id} />;
              })} */}
          </div>
        </div>
      </section>
    </>
  );
};
