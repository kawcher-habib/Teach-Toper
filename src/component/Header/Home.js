import React from 'react';
import Navbar from './Navbar'
import Main from './Main'
import About from '../e-know/About';
import Testimonial from '../testimonial/Testimonial';
import Mapping from '../maping/Maping';
import Subscribe from '../subscrip/Subscrib';
import Footer from '../Footer/Footer';
import Courser from '../service/Courser'

const Header = () => {
    return (
        <>

            <Main />
            <Courser />
            <About />
            <Testimonial />
            <Mapping />
            <Subscribe />

        </>
    );
};

export default Header;