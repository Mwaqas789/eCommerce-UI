import React, { useState } from "react";
import "./CreateUser.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    const mainObj = {
      id,
      name,
      password,
      email,
      phone,
      country,
      address,
      gender,
    };
    console.log(mainObj);
    fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify(mainObj),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => {
        alert("Rejister Successfully");
        response.json();
      })
      .then((resp) => {
        console.log(resp);
        navigate("/login");
      })
      .catch((err) => {
        alert("Rejister Successfully");
        console.log(err);
      });
  };
  return (
    <div className="row mt-5">
      <div className="offset-lg-3 col-lg-6" onSubmit={handelsubmit}>
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
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      required
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      type="password"
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="from-group">
                    <label> Full Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      type="email"
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Phone Number</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                      type="number"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
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

                      <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Gender</label>
                    <br />
                    <br />
                    <input
                      checked={gender === "male"}
                      value="male"
                      onChange={(e) => setGender(e.target.value)}
                      className="app-check"
                      name="gender"
                      type="radio"
                    />
                    <label>Male</label>
                    <input
                      checked={gender === "female"}
                      value="female"
                      onChange={(e) => setGender(e.target.value)}
                      className="app-check"
                      name="gender"
                      type="radio"
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
