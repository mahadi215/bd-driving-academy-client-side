import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
           logOut()
           .then(() =>{})
           .catch(error => console.log(error))
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning  px-3">
                <div className="container-fluid ">
                    <Link className="navbar-brand text-white fw-bolder">BD_Driving_Learning</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto fw-bold">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            <Link to="/about" className="nav-link" >About Us</Link>
                            <Link to="/cources/06" className="nav-link" >Cources</Link>
                            <Link to="/paq" className="nav-link ">PAQ</Link>
                            <Link to="/blog" className="nav-link me-4">Blog</Link>
                            <Link className="nav-link ">
                                {user?.uid ?
                                <>
                                <img className='rounded-circle'
                                 style={{ height: '30px' }}
                                 src={user?.photoURL} alt="profilePic" />
                                 <button onClick={handleLogOut} className='btn'>Log Out</button>
                                </>
                                : <Link to="/login" className='nav-link'>login</Link>
                                }
                            </Link>
                            <button to="" className="nav-link ">Dark/Light</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;