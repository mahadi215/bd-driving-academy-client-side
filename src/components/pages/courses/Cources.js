import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftNav from '../leftSideNav/LeftNav';
import './Cources.css'

const Cources = () => {

    const allcourse = useLoaderData()

    return (
        <div>

            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-3 col-sm-12 categories-box h-auto'>
                        <h2 className='text-center bg-warning rounded p-2'>Categories</h2>
                        <LeftNav></LeftNav>
                    </div>
                    <div className='col-md-8 col-sm-12'>
                        <div className='row' >
                        {
                            allcourse.map(courseCard =>
                                
                                    <div className='col-lg-4 col-md-6 col-sm-12' key={courseCard.id}>
                                    <div className="card bg-dark text-white ">
                                        <img className="card-img-top card-img" src={courseCard.thum} alt="Cardcap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{courseCard.title}</h5>

                                            <p className="card-text">
                                                {courseCard.des.length > 50 ?
                                                <> {courseCard.des.slice(0,50 ) + "..."}</>:
                                                    courseCard.des
                                                 }
                                                </p>

                                            <Link to={`/courseDetails/${courseCard.id}`} className="btn btn-warning d-block">Details</Link>
                                        </div>
                                    </div>
                                    </div>
                                
                            )
                        }
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Cources;