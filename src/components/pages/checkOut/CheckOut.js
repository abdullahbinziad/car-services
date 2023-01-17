import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const {title,price} = useLoaderData();
    return (
        <div>
            This is Checkout pages
<p>{title}</p>
<p>{price}</p>

        </div>
    );
};

export default CheckOut;