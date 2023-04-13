import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({setCartitem,handelAddProduct,handleRemoveproduct, ...props}) => {    
  const notify = () => toast ("Yout Items Successfully Adding To Cart",{position:"top-center"})
     
  // console.log("=========>+++",props.data?.map((i)=> i.image) )
  
  return (
    <>
      <Navbar  setCartitem={setCartitem}/>
      <div className="container">
        <div className="row"></div>
        <div className="col-lg-12">
          <h1 className="text-center ">All Product</h1>
        </div>

        <div className="row mt-5">
          {
            props.data.map((i)=>(
              // cart start

           <div className="col-lg-3 p-4">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                class="card-img-top"
                src={i.image}
                width="10px"
                height="200px"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{i?.name}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="card">
                  <h3>
                    <div class="card-header mt-2">Details</div>
                  </h3>
                  <h3>${i.price}</h3>
                  <li class="list-group-item">Descounds 20% of all piece </li>
                  <li class="list-group-item">
                    hp laptop model 540G1.Rem 8gb.Hard 500SSD.processer 3.1
                    multitasking processor
                  </li>
                </div>
                <button className="btn btn-info mt-2"  onClick={()=>{
                  handelAddProduct(i);
                  notify();
                  }}> Add To Cart</button>

              </div>
            </div>
           </div>

          // cart start
            ))
          }
        </div>
        <div className="row mt-2">
          <div className="col">
            <Link to="/">
              <button className="btn btn-info form-control">
                Going To Home
              </button>
            </Link>
          </div>
        </div>
        <div>
        <ToastContainer  theme="dark" />
      </div>
      </div>
    </>
  );
};

export default Product;
