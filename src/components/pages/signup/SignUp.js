import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import signUpImg from "../../assets/images/login/login.svg";

const SignUp = () => {
   //read the auth context  
  const { createUser } = useContext(AuthContext);

//   handle on submit 
  const loginOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row gap-28 ">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={signUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={loginOnSubmit} className="card-body">
            <h1 className="text-5xl font-bold">Sign UP Now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Full Name"
                className="input input-bordered"
              />
            </div>
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
                value="Sign Up"
              />
            </div>
          </form>

          <span className="label-text">Have already an Account?</span>
          <Link to="/login" className="py-5 ">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
