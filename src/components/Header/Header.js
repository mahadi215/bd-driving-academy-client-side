import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light px-3">
                <div className="container-fluid ">
                    <Link className="navbar-brand">BD_Driving_Learning</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            <Link to="/about" className="nav-link" >About Us</Link>
                            <Link to="/cources" className="nav-link" >Cources</Link>
                            <Link to="/paq" className="nav-link ">PAQ</Link>
                            <Link to="/blog" className="nav-link ">Blog</Link>
                            <Link to="/login" className="nav-link ">Log in</Link>
                            <Link to="" className="nav-link ">Dark/Light</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;