import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const PreceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      // adding funcationality in here
      //   console.log("processd")

      fetch("http://localhost:3000/user/" + username)
        .then((res) => {
          console.log("ddd", res);
          return res.json();
        })
        .then((resp) => {
          console.log("lllllllllllll", resp);
        })
        .catch((error) => {
          toast.error("Login Failed :" + error.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Your Name");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Your Password");
    }

    return result;
  };

  return (
    <div className="row mt-5">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onClick={PreceedLogin}>
          <div className="card">
            <div className="cart-header">
              <h2 className="text-center mt-4">User Login</h2>
            </div>

            <div className="card-body">
              <div className="from-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="from-group mt-3">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  type="password"
                />
              </div>
            </div>

            <div className="card-footer">
              <button className="btn btn-danger mx-2 btn-lg" type="submit">
                Login
              </button>
              <Link to="/usercreate" className="btn btn-success btn-lg">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Login;
