import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const navigate = useNavigate();

    const {providerLogin, signIn} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignin =() =>{
            providerLogin(googleProvider)
            .then(result =>{
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handleSignIn = (event) =>{
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            signIn(email, password)
            .then(result =>{
                const user = result.user
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(e => console.error(e))
    }

    return (
        <div >
            <h1 className='text-center my-4'>Please Login</h1>
            <form onSubmit={handleSignIn} className=' w-75 sm-w-100 m-auto p-3'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter your email' />
                        
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className='form-control' placeholder='password' required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" />
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-warning m-auto d-block w-50">Login</button>

                <br />
                <p>Don't have an account?...Please <Link to="/register">Sign Up</Link></p>

                
                <div className=' m-auto md-p-5' >
                <p className='text-center'><b>Or</b></p>
                    <div onClick={handleGoogleSignin} className='google-login py-2 d-flex align-items-center justify-content-center border  m-3'>
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

export default Login;