import React from "react";
import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'

const Login = () => {


    const loginOnSubmit = (event) => {
        event.preventDefault();
      };
    

  return (
    <div className="hero mt-10">
    <div className="hero-content flex-col lg:flex-row gap-28 ">
      <div className="text-center lg:text-left">
        <img className="w-3/4" src={loginImg} alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={loginOnSubmit} className="card-body">
          <h1 className="text-5xl font-bold">Login Now!</h1>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              name="password"
              type="text"
              placeholder="Confirm password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="login"
            />
          </div>
        </form>
      
        <span className="label-text">Have any Account?</span>
          <Link to="/signup" className="py-5 ">
            SignUp
          </Link>
       
      </div>
    </div>
  </div>
  );
};

export default Login;
