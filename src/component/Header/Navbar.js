import React from 'react';
import logImg from '../../image/logo.png';
import './navbar.css';

const Navbar = () => {
    

    window.addEventListener("scroll", () => {
        const navBar = document.getElementById("nav-bar");
        navBar.classList.toggle("nave__Fixed", window.scrollY > 4);
        
    })

    return (
        <div className=" nave__container" id="nav-bar">
            <nav className="navbar navbar-expand-lg  container ">
                <div className="container-fluid p-2">
                    <a className="navbar-brand" style={{ width: '4%' }} href="#">
                        <img className="w-100" src={logImg} alt="logImg" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item ms-4">
                                <a className="nav-link nav_color active" aria-current="page" href="#home">Home</a>
                            </li>

                            <li className="nav-item ms-4 dropdown">
                                <a className="nav-link nav_color dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Courses
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item " href="#service">Business</a>
                                    <a className="dropdown-item " href="#service">Development</a>
                                    <a className="dropdown-item " href="#service">Accounting</a>
                                    <a className="dropdown-item " href="#service">It & Software</a>
                                    <a className="dropdown-item " href="#service">Marketing</a>
                                    <a className="dropdown-item " href="#service">Art & Design</a>
                                    <a className="dropdown-item " href="#service">Photography</a>
                                    <a className="dropdown-item " href="#service">Health & Fitness</a>
                                    <a className="dropdown-item " href="#service">LiftStyle</a>
                                </div>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav_color" href="#about" tabindex="-1" aria-disabled="true">About</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav_color" href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn" type="submit" style={{ background: '#E9F6EF' }}>Sign In</button>
                            <button className="btn ms-3" type="submit" style={{ background: '#FDF0E6' }}>Sign Up</button>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;