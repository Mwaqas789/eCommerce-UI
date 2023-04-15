import React, { useState } from "react";
import "./Navbar.css";
import img from "../component/pics/shop1.png";
import { Link } from "react-router-dom";
import ContectUs from "./ContectUs";

const Navbar = ({ setCartitem }) => {
  const [setimg, changeImg] = useState(1);
  const ImagesHandel = () => {
    changeImg(setimg + 1);
  };
  // console.log("setCartitem", setCartitem.length)
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-md navbar-dark bg-success">
            <div className="container">
              <a
                href=""
                className="navbar-brand p-2"
                style={{ color: "black" }}
              >
                Shadow App
              </a>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#mynav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mynav">
                <ul className="navbar-nav ms-auto text-center">
                  <Link to="/">
                    <li className=" nav-item ">
                      <a href="" className="nav-link active ">
                        Home
                      </a>
                    </li>
                  </Link>

                  <Link to="/product">
                    <li className=" nav-item">
                      <a href="" className="nav-link ">
                        Product
                      </a>
                    </li>
                  </Link>
                  <Link to="/contect">
                    <li className=" nav-item">
                      <a href="" className="nav-link ">
                        Contact Us
                      </a>
                    </li>
                  </Link>

                  <Link to="/login">
                    <li className=" nav-item">
                      <a href="" className="nav-link ">
                        Login
                      </a>
                    </li>
                  </Link>

                  <Link to="/detail">
                    <li>
                      <img
                        src={img}
                        height="60px"
                        width="60px"
                        style={{ background: "transparent" }}
                        border-radus="50%"
                        alt="First slide"
                        onClick={ImagesHandel}
                      />

                      {/* adding qutentity in cart */}
                      <span className="cart-lenght">
                        {setCartitem?.length > 0 && setCartitem?.length}
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
