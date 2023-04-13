import React from 'react'
import { Link } from "react-router-dom";
import "./ContectUs.css";

const ContectUs = () => {
  return (
    <>
    <div className='contect-page'>
        <h1 className='contect-heading'>Contect Us</h1>
    <form>
    <div class="form-group">
    <label className="text-center">Name</label>
    <input type="text" class="form-control"  placeholder="Enter Your Name"/>
  </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control"  placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" placeholder="Enter email"/>
  </div>
  <form>
  
</form>

  <Link to="/product">
  <button type="submit" class="btn btn-primary mb-3 mt-3 form-control">Submit</button>
  </Link>
</form>
</div>
    </>
  )
}

export default ContectUs