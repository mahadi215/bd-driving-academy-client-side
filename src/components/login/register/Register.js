import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div >
            <h1 className='text-center my-4'>Please Sign Up</h1>
            <form className=' w-75 sm-w-100 m-auto p-3'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="email" className='form-control' placeholder='Enter your name'required />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Photo</label>
                    <input type="email" className='form-control' placeholder='Enter your photo url' />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className='form-control' placeholder='Enter your email' required />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className='form-control' placeholder='password' required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" />
                    <label className="form-check-label" for="exampleCheck1">Accept terms</label>
                </div>
                <button type="submit" className="btn btn-warning m-auto d-block w-50">Login</button>

                <br />
                <p>Already have an account...Please <Link to="/login">Login</Link></p>


                <div className=' m-auto md-p-5' >
                    <p className='text-center'><b>Or</b></p>
                    <div className='google-login py-2 d-flex align-items-center justify-content-center border  m-3'>
                        <i className=" me-3 fs-1 fa-brands fa-google"></i>
                        <h6>Continue with Google</h6>
                    </div>
                    <div className='github-login py-2 d-flex align-items-center justify-content-center border  m-3'>
                        <i class=" me-3 fs-1 fa-brands fa-github-alt"></i>
                        <h6>Continue with Github</h6>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Register;