import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const bookCourse = useLoaderData()
    const {title,id,price} = bookCourse;
    return (
        <div>
            <div className="card m-auto mt-5" style={{width: '18rem'}}>
  <div className="card-body bg-warning text-center text-dark">
    <h5 className="card-title">Course name: {title} <br /> Course id: {id}</h5>
    <p className="card-text">price: {price}</p>
    <button className="btn btn-primary">Confirm</button>
  </div>
</div>
        </div>
    );
};

export default Booking;