import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink className="navbar-brand" style={{ width: '4%' }} to="/">
                        <img className="w-100" src={logImg} alt="logImg" />
                    </NavLink>
                    <button className="navbar-toggler border" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item ms-4">
                                <NavLink className="nav-link nav_color active" aria-current="page" to='/'>Home</NavLink>
                            </li>

                            <li className="nav-item ms-4 dropdown">
                                <NavLink className="nav-link nav_color" to="/course" tabindex="-1" aria-disabled="true">
                                    Courses
                                </NavLink>
                            </li>
                            <li className="nav-item ms-4">
                                <NavLink className="nav-link nav_color" to="/about" tabindex="-1" aria-disabled="true">About</NavLink>
                            </li>
                            <li className="nav-item ms-4">
                                <NavLink className="nav-link nav_color" to="/contact" tabindex="-1" aria-disabled="true">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <NavLink className='text-decoration-none btn' style={{ background: '#E9F6EF' }} to="/signIn">Sign In</NavLink>
                            <NavLink className='text-decoration-none btn ms-3' style={{ background: '#FDF0E6' }} to="/signUp">SignUp</NavLink>
                        </div>
                    </div>
                </div>

            </nav >
        </div >
    );
};

export default Navbar;