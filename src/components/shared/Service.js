import React from 'react';

const Service = (props) => {
    const {title,price,image}= props.service;

    console.log(image);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Service;