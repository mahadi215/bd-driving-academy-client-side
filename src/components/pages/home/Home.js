import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='container-fluid'>

            <section className='top'>
                <div className='header-title'>
                    <h1>BD Driving Academy</h1>
                    <p>Your getway to safe driving.</p>
                </div>
            </section>

            <section className='container mt-5 '>
                <h1 className='text-center text-warning mb-5'>Why Us</h1>
                <div className='why-us-container row m-auto g-2 text-center'>
                    <div className='col-lg-6 col-sm-12 '>
                    <i className=" fa-solid fa-car"></i>
                        <h4>Training Quality</h4>
                        <p>Committed to help you pass</p>
                    </div>
                    <div className='col-lg-6 col-sm-12 '>
                    <i className="fa-solid fa-person-chalkboard"></i>
                        <h4>Qualified Instructors</h4>
                        <p>Traffic Dept certified Instructors </p>
                    </div>
                    <div className='col-lg-6 col-sm-12 '>
                    <i class="fa-solid fa-traffic-light"></i>
                        <h4>Highest Passing Rate</h4>
                        <p>90% satisfied customers</p>
                    </div>
                    <div className='col-lg-6 col-sm-12 ' >
                    <i className="fa-solid fa-chart-simple"></i>
                        <h4>The Pioneer in Market</h4>
                        <p>The trailblazer, Since 0000 </p>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default Home;