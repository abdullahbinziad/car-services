import React, { useEffect, useState } from "react";
import Service from "../../shared/Service";
import slide1 from "./../../assets/images/banner/pic1.png";
import slide2 from "./../../assets/images/banner/pic2.png";
import slide3 from "./../../assets/images/banner/pic3.png";
import slide4 from "./../../assets/images/banner/pic4.png";
import './home.css';

const Home = () => {

const [services,setServices] = useState([]);

useEffect(()=>{
  fetch('http://localhost:5000/services')
  .then(res=> res.json())
  .then(data=> setServices(data))
},[])
console.log(services);

  return (
    <div>
       {/* Carosal Section */}
    <div className="w-4/5 mx-auto mt-6 rounded-md">
     

      <div className="carousel  ">
        <div id="slide1" className="carousel-item relative w-full	">
          <div className="bgGrad">
            <img src={slide1} className="w-full" />
          </div>{" "}
          <div className="absolute  transform -translate-y-1/2 left-24 right-5 top-1/2 text-left   ">
            <h1 className="text-5xl font-bold text-primary-content">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <h3 className="text-lg text-primary-content mt-5">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </h3>
            <div className="flex gap-4 mt-6 text-primary-content ">
              <button className=" px-9  py-4 bg-primary rounded-md mr-2">
                Discover Project
              </button>
              <button className="px-9  py-4 border-slate-100 border-2 rounded-md mr-2">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full	">
          <div className="bgGrad">
            <img src={slide2} className="w-full" />
          </div>{" "}
          <div className="absolute  transform -translate-y-1/2 left-24 right-5 top-1/2 text-left   ">
            <h1 className="text-5xl font-bold text-primary-content">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <h3 className="text-lg text-primary-content mt-5">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </h3>
            <div className="flex gap-4 mt-6 text-primary-content ">
              <button className=" px-9  py-4 bg-primary rounded-md mr-2">
                Discover Project
              </button>
              <button className="px-9  py-4 border-slate-100 border-2 rounded-md mr-2">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full	">
          <div className="bgGrad">
            <img src={slide3} className="w-full" />
          </div>{" "}
          <div className="absolute  transform -translate-y-1/2 left-24 right-5 top-1/2 text-left   ">
            <h1 className="text-5xl font-bold text-primary-content">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <h3 className="text-lg text-primary-content mt-5">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </h3>
            <div className="flex gap-4 mt-6 text-primary-content ">
              <button className=" px-9  py-4 bg-primary rounded-md mr-2">
                Discover Project
              </button>
              <button className="px-9  py-4 border-slate-100 border-2 rounded-md mr-2">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full	">
          <div className="bgGrad">
            <img src={slide4} className="w-full" />
          </div>{" "}
          <div className="absolute  transform -translate-y-1/2 left-24 right-5 top-1/2 text-left   ">
            <h1 className="text-5xl font-bold text-primary-content">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <h3 className="text-lg text-primary-content mt-5">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </h3>
            <div className="flex gap-4 mt-6 text-primary-content ">
              <button className=" px-9  py-4 bg-primary rounded-md mr-2">
                Discover Project
              </button>
              <button className="px-9  py- border-slate-100 border-2  rounded-md mr-2">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle ">
              ❮
            <a href="#slide1" className="btn btn-circle  bg-primary">
            </a>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
 {/* Services Section  */}

 <section className="w-4/5 mx-auto mt-6 rounded-md">
<h3 className="text-xl text-primary font-semibold">Service</h3>
<h1 className="text-4xl font-bold mb-5">Our Service Area</h1>
<p className=" text-peragraph text-lg">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
<div className=" grid grid-cols-3	gap-4 mt-8">
{
  services.map(service=> <Service
  key={service._id}
  service={service}
  ></Service>)
}
</div>
 </section>
  </div>
  );
};

export default Home;
