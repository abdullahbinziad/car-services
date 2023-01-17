import React from 'react';

const Service = (props) => {
    const {title,price,image}= props.service;

    console.log(image);
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure className=' h-56'><img className='p-4 w-full h-full' src= {image}alt={title} /></figure>
  <h2 className="card-title mt-6  px-6">{title}</h2>
  <div className=" flex justify-between text-primary px-6 py-4 text-xl font-semibold ">
   
    <p>Price: {price}</p>
    <p>→</p>
  </div>
</div>
    );
};

export default Service;