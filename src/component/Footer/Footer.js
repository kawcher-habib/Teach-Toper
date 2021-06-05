import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark p-4">
            <div className="container ">
                <div className="row text-white">
                    <div className="col-md-3 col-sm-12">
                        <h1>TeachToper</h1>
                        <p>9/2 Dhanmondi Dhaka-1205 Bangladesh</p>
                        <p>contact@gmail.com</p>
                        <p>+880 1798650543</p>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Navigation</h5>
                        <ul>
                            <li>About Us</li>
                            <li>FAQs Page</li>
                            <li>Contact Us</li>
                            <li>Checkout</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>New Categories</h5>
                        <ul>
                            <li>Designing</li>
                            <li>Nusiness</li>
                            <li>Software</li>
                            <li>WordPress</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Help $ Support</h5>
                        <ul>
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