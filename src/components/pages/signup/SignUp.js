import React from 'react';
import signUpImg from '../../assets/images/login/login.svg'




const SignUp = () => {

const handleOnSubmit =(event)=>{
event.preventDefault();
}

    return (
        <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row gap-28 ">
        <div className="text-center lg:text-left">
          <img className='w-3/4' src={signUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleOnSubmit} className="card-body">
          <h1 className="text-5xl font-bold">Sign UP Now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
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
                type="text"
                placeholder="Confirm password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              
             <input className="btn btn-primary" type="submit" value="Sign Up" />

           
            </div>
          </form>
          
Social icon here 
        </div>
      </div>
    </div>
    );
};

export default SignUp;