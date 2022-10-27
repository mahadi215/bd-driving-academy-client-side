import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const singleCourse = useLoaderData();


    return (
        <div>
            <div className="card m-auto ">
                <img className="card-img-top  card-image" src={singleCourse.thum} alt="Cardcap" />
                <div className="card-body px-5">
                    <h2 className="card-title">{singleCourse.title}</h2>
                        <h3>Price: {singleCourse.price}</h3>
                    <p className="card-text "> {singleCourse.des} </p>

                    <Link className="btn btn-warning fw-bold">Book</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;