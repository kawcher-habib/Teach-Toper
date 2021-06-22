import React from 'react';

const Footer = () => {
    return (
        <div className=" p-4" style={{background:'#060708da'}}>
            <div className="container " style={{color:'#E5E7EB'}}>
                <div className="row text-white">
                    <div className="col-md-3 col-sm-12" style={{color:'#E5E7EB'}}>
                        <h1>TeachToper</h1>
                        <p className="text-secondary">9/2 Dhanmondi Dhaka-1205 Bangladesh</p>
                        <p className="text-secondary">contact@gmail.com</p>
                        <p className="text-secondary">+880 1798650543</p>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Navigation</h5>
                        <ul className="text-secondary">
                            <li>About Us</li>
                            <li>FAQs Page</li>
                            <li>Contact Us</li>
                            <li>Checkout</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>New Categories</h5>
                        <ul className="text-secondary">
                            <li>Designing</li>
                            <li>Nusiness</li>
                            <li>Software</li>
                            <li>WordPress</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Help $ Support</h5>
                        <ul className="text-secondary">
                            <li>Documentation</li>
                            <li>Live Chat</li>
                            <li>Mail Us</li>
                            <li>Privacy</li>
                            <li>Faqs</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <h5>Download Apps</h5>
                    </div>
                </div>
            </div>
            <div className="bottom-area mt-4 row">
                <h6 className="text-white text-center col-md-12 col-ms-12">@2021 TeachToper. Designed By TeachToper Team</h6>
            </div>
        </div>
    );
};

export default Footer;