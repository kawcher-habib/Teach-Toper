import React from 'react';
import logImg from '../../image/logo.png'

const Navbar = () => {
    return (
        <div className="mb-1" style={{ background: '#E6FBFD' }}>
            <nav className="navbar navbar-expand-lg navbar-light container">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ width: '4%' }} href="#">
                        <img className="w-100" src={logImg} alt="logImg" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Courses
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#service">Business</a>
                                    <a className="dropdown-item" href="#service">Development</a>
                                    <a className="dropdown-item" href="#service">Accounting</a>
                                    <a className="dropdown-item" href="#service">It & Software</a>
                                    <a className="dropdown-item" href="#service">Marketing</a>
                                    <a className="dropdown-item" href="#service">Art & Design</a>
                                    <a className="dropdown-item" href="#service">Photography</a>
                                    <a className="dropdown-item" href="#service">Health & Fitness</a>
                                    <a className="dropdown-item" href="#service">LiftStyle</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about" tabindex="-1" aria-disabled="true">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn" type="submit" style={{ background: '#E9F6EF' }}>Sign In</button>
                            <button className="btn ms-2" type="submit" style={{ background: '#FDF0E6' }}>Sign Up</button>
                        </div>
                    </div>
                </div>

            </nav>

        </div>
    );
};

export default Navbar;