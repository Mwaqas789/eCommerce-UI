import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import img3 from "../component/pics/p3.jpg";
import Navbar from "./Navbar";
const Index = () => {
  // Navigate();
  return (
    <>
      <Navbar />

      {/* Intro  */}
      <div className="container-fluid indexDiv ">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center">Shadow App</h1>
            <div className="IntroPragraf">
              <p className="text-center">
                Shadow App is the fastest growing web store and distribution
                platform in the world. We are a global platform for global
                talent. Do you want the world?
              </p>
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src={img3}
                      height="500px"
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link to="product">
              <button className="btn btn-outline-info mt-3 form-control">
                Going To Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
