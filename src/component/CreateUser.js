import React from "react";
import "./CreateUser.css";
import { Link } from "react-router-dom";

const CreateUser = () => {
  return (
    <div className="row mt-5">
      <div className="offset-lg-3 col-lg-6">
        <form className="container">
          <div className="card">
            <div className="cart-header">
              <h2 className="text-center mt-4">Register New Users</h2>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="from-group">
                    <label> Full Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Email</label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Phone Number</label>
                    <input className="form-control" type="number" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Country</label>
                    <select className="form-control">
                      <option value="pakistan"> Pakistan </option>
                      <option value="Dabai"> Dabai </option>
                      <option value="Uk"> UK </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="from-group">
                    <div className="from-group">
                      <label>Address</label>
                      <textarea className="form-control"></textarea>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Gender</label>
                    <br />
                    <br />
                    <input
                      className="app-check"
                      name="gender"
                      type="radio"
                      value="male"
                    />
                    <label>Male</label>
                    <input
                      className="app-check"
                      name="gender"
                      type="radio"
                      value="female"
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-outline-danger mx-2 btn-lg"
                type="submit"
              >
                Submit
              </button>
              <Link className=" btn btn-outline-info mx-2 btn-lg" to="/login">
                Back
              </Link>
              {/* <button className="btn btn-info mx-2 btn-lg" type="submit">
                Back
              </button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
