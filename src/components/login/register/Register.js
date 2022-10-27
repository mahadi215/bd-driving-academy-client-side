import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value ;
        const photo = form.photo.value ;
        const email = form.email.value ;
        const password = form.password.value ;
        // console.log(name, photo,email,password);
        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
            form.reset();
        })
        .catch(error => {
            setError(error.message)
        });
    }
    return (
        <div >
            <h1 className='text-center my-4'>Please Sign Up</h1>
            <form className=' w-75 sm-w-100 m-auto p-3' onSubmit={handleRegister}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter your name'required />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Photo</label>
                    <input type="text" name='photo' className='form-control' placeholder='Enter your photo url' />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter your email' required />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className='form-control' placeholder='password' required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" />
                    <label className="form-check-label" for="exampleCheck1">Accept terms</label>
                </div>
                <button type="submit" className="btn btn-warning m-auto d-block w-50">Submit</button>
                    <br />
                    <p className='text-danger text-center'>{error}</p>
                <br />
                <p>Already have an account...Please <Link to="/login">Login</Link></p>


                {/* <div className=' m-auto md-p-5' >
                    <p className='text-center'><b>Or</b></p>
                    <div className='google-login py-2 d-flex align-items-center justify-content-center border  m-3'>
                        <i className=" me-3 fs-1 fa-brands fa-google"></i>
                        <h6>Continue with Google</h6>
                    </div>
                    <div className='github-login py-2 d-flex align-items-center justify-content-center border  m-3'>
                        <i class=" me-3 fs-1 fa-brands fa-github-alt"></i>
                        <h6>Continue with Github</h6>
                    </div>

                </div> */}
            </form>
        </div>
    );
};

export default Register;