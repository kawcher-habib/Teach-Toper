import React from 'react';

const Subscrib = () => {
    return (
        <div id="contact" className="mb-0 p-5" style={{background:'#f62c58'}}>
            <div className="container">
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-white m-auto">
                        <h3>Join Thousand Of Happy Students!</h3>
                        <p>Subscribe our newsletter & get latest news and updation!</p>
                        <input className="form-control p-3" type="text" placeholder="Enter Your Email" /> <button className="btn mt-2 text-white bg-success p-2">Subscribe</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>
        </div>
    );
};

export default Subscrib;